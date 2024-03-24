---
title: 学习NeRF——基于pytorch代码复现 1(Dataset)
tags: CV
show_author_profile: true
key: CV_12

layout: article
aside:
  toc: true
---



## 1 创建Dateset

核心函数包括：`init`，`getitem`，`len`

- `init`函数负责从磁盘中load指定格式的文件，计算并存储为特定形式。

- `getitem`函数负责在运行时提供给网络一次训练需要的输入，以及 groundtruth 的输出

  例如对NeRF，分别是1024条 rays 以及1024个 RGB 值<!--more-->

- `len`函数是训练或者测试的数量：`getitem`函数获得的`index`值通常是`[0, len-1]`

#### 1.1 `__init__`

这里我们主要要做3件事（~~公平公平还是tmd公平~~）

1. 加载图像数据和相机位姿信息：

  - 从磁盘中读取指定格式的文件，这些文件包含了图像路径和相机位姿信息，位姿保存在 `self.poses`
  - 从图片路径保存图片，并根据参数进行处理（白色背景+缩放比例）
  - 最后，将处理后的图像添加到`self.images`列表中。

2. 计算相机内参：

   - 根据相机的视场角（FOV）和图像尺寸计算相机的焦距和相机矩阵

3. 生成射线数据：

   - 首先，对于每一个位姿，使用`ray_helpers.get_rays_np`函数生成射线，并将所有射线堆叠起来

   - 然后，将射线和图像数据合并，并进行一系列的变换和重塑操作形成形状为 `[N*H*W, ro+rd+rgb, 3]` 的numpy数组

     - `N` 是图像的数量

     - `H` 是图像的高度

     - `W` 是图像的宽度

     - `ro+rd+rgb` 表示每个射线的数据，包括射线的起始点（ro）、射线的方向（rd）和射线对应的像素颜色（rgb）

     - `3` 表示每个数据都是一个三维向量（例如，rgb颜色是一个三维向量，包含红色、绿色和蓝色的强度）
     
     > 表示有 `N*H*W` 条射线，每条射线有3个数据（ro、rd、rgb），每个数据都是一个三维向量
     >
     
   - 最后，将射线数据打乱，并存储到`self.rays_rgb`中


#### 1.2 `__getitem__`

TODO

#### 1.3 `__len__`

TODO

## 2 Issues

### 2.1 DataLoader 的多进程 pickle

<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-03-17/image-20240317200544474.png" alt="image-20240317200544474" style="zoom: 50%;" />

在刚开始执行时就遇到了这个错误，开始以为是环境问题，结果鼓捣半天没用，仔细分析了一下错误原因，发现主要是这句话的原因

```python
for iteration, batch in enumerate(data_loader):
```

也就是序列化的问题，后面还给出了多进程的保持，就应该是**多进程的pickle**问题，网上一搜，还真是，可能是Windows系统的原因导致的，在 `configs` 中的配置文件中修改 `num_workers = 0`，不使用多进程，就解决了报错



### 2.2 imageio 输出图片

在执行到 `evaluate` 时，输出图片出了下面的错误：

> `envs\NeRFlearning\Lib\site-packages\PIL\Image.py", line 3102, in fromarray raise TypeError(msg) from e TypeError: Cannot handle this data type: (1, 1, 3), <f4`

这是因为`imageio.imwrite`函数需要接收的图像数据类型为`uint8`，而原始的 `pred_rgb` 和 `gt_rgb` 可能是浮点数类型的数据。因此，我们需要将它们乘以255（将范围从0-1转换为0-255），然后使用 `astype` 函数将它们转换为 `uint8` 类型

```python
# 将数据类型转换为 uint8
pred_rgb = (pred_rgb * 255).astype(np.uint8)
gt_rgb = (gt_rgb * 255).astype(np.uint8)
# 需要添加以上两行，否则报错
imageio.imwrite(save_path, img_utils.horizon_concate(gt_rgb, pred_rgb))
```

这里还有一个问题，我发现在已经生成过一张图片后，再次执行到这里，输出的新图片无法覆盖之前的旧图片，所以我加上了时间和当前周期作为扩展名

```python
now = datetime.datetime.now()
now_str = now.strftime('%Y-%m-%d_%Hh%Mm%Ss')
base_name, ext = os.path.splitext(save_path)
save_path = f"{base_name}_{now_str}_epoch_{cfg.train.epoch}{ext}"
```

这样就会以这样的 `res_2024-03-18_09h09m40s_epoch_10.jpg` 格式正确输出每次的图像了



### 2.3 I/O

此项目是由 Linux 开发的，在Windows系统上，免不了出现各种麻烦。特别是，该项目的所有 I/O 都是 Linux 的 I/O 格式，所以要进行全面修改：

- 使用 Python 的 os 模块中的 `makedirs` 函数来替换 

  ```python
  os.system('mkdir -p ' + model_dir)
  # |
  # V
  os.makedirs(model_dir, exist_ok=True)
  ```

- `shutil` 模块中的 `rmtree` 函数来替换

  ```python
  os.system('rm -rf {}'.format(model_dir))
  # |
  # V
  import shutil
  if os.path.exists(model_dir):
  	shutil.rmtree(model_dir)
  ```

- Python 的 os 模块中的`remove`函数来替换

  ```python
  os.system('rm {}'.format(os.path.join(model_dir, '{}.pth'.format(min(pths)))))
  # |
  # V
  os.remove(os.path.join(model_dir, '{}.pth'.format(min(pths))))
  ```

- 使用 `exit(0)` 来结束当前进程

  ```python
  os.system('kill -9 {}'.format(os.getpid()))
  # |
  # V
  exit(0)
  ```

  
