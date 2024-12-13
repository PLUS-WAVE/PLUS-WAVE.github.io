import{_ as s,c as a,e as l,o as e}from"./app-koSCgMdL.js";const n={};function t(h,i){return e(),a("div",null,i[0]||(i[0]=[l(`<p>源码见GitHub：<a href="https://github.com/PLUS-WAVE/A-UESTCer-s-Code/tree/master/B.%E5%A4%A7%E4%BA%8C%E4%B8%8B/%E5%9B%BE%E5%BD%A2%E4%B8%8E%E5%8A%A8%E7%94%BB%E2%85%A1/%E5%AE%9E%E9%AA%8C2/src" target="_blank" rel="noopener noreferrer">A-UESTCer-s-Code</a></p><h2 id="_1-运行效果" tabindex="-1"><a class="header-anchor" href="#_1-运行效果"><span>1 运行效果</span></a></h2><p>旋转的立方体实现效果：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/image-20240417164843163.png" alt="image-20240417164843163" style="zoom:50%;"><p>雪人世界实现效果：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/recording-1713344655467-3.gif" alt="recording" style="zoom:50%;"><h2 id="_2-实现过程" tabindex="-1"><a class="header-anchor" href="#_2-实现过程"><span>2 实现过程</span></a></h2><h3 id="_2-1-几何转换" tabindex="-1"><a class="header-anchor" href="#_2-1-几何转换"><span>2.1 几何转换</span></a></h3><h4 id="_2-1-1-窗口刷新" tabindex="-1"><a class="header-anchor" href="#_2-1-1-窗口刷新"><span>2.1.1 窗口刷新</span></a></h4><p>利用透视变换实现窗口刷新：</p><ul><li>通过透视投影来设置窗口刷新函数，使用<code>gluPerspective()</code>函数定义透视投影。</li></ul><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> ChangeSize</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GLsizei </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">w</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> GLsizei </span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	GLfloat aspectRatio</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">	if</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">h </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">==</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">		h </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glViewport</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> w</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glMatrixMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GL_PROJECTION</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glLoadIdentity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	aspectRatio </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GLfloat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">w </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">/</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GLfloat</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">h</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	gluPerspective</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">60.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> aspectRatio</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 400.0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glMatrixMode</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GL_MODELVIEW</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glLoadIdentity</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-绘制雪人场景" tabindex="-1"><a class="header-anchor" href="#_2-1-2-绘制雪人场景"><span>2.1.2 绘制雪人场景</span></a></h4><h5 id="_2-1-2-1-绘制雪人" tabindex="-1"><a class="header-anchor" href="#_2-1-2-1-绘制雪人"><span>2.1.2.1 绘制雪人</span></a></h5><ol><li>绘制雪人身体部分： <ul><li>首先设置颜色为白色。</li><li>使用<code>glTranslatef()</code>将当前矩阵沿着x、y和z轴移动到指定位置。</li><li>绘制一个半径为0.75的实心球体作为雪人的身体。</li></ul></li><li>绘制雪人头部： <ul><li>再次使用<code>glTranslatef()</code>将当前矩阵移动到头部位置。</li><li>绘制一个半径为0.25的实心球体作为雪人的头部。</li></ul></li><li>绘制雪人眼睛： <ul><li>将当前矩阵保存（使用<code>glPushMatrix()</code>），以便后续绘制完成后恢复到初始状态。</li><li>设置眼睛颜色为黑色。</li><li>分别用<code>glTranslatef()</code>将当前矩阵移动到左眼和右眼的位置。</li><li>绘制半径为0.05的实心小球体作为眼睛。</li><li>恢复之前保存的矩阵状态（使用<code>glPopMatrix()</code>）。</li></ul></li><li>绘制雪人的鼻子： <ul><li>设置鼻子颜色为橙红色。</li><li>使用<code>glRotatef()</code>将当前矩阵绕着x轴旋转0度（这里没有实际的旋转操作）。</li><li>绘制一个底半径为0.08、高度为0.5的圆锥体作为雪人的鼻子。</li></ul></li></ol><h5 id="_2-1-2-2-绘制场景" tabindex="-1"><a class="header-anchor" href="#_2-1-2-2-绘制场景"><span>2.1.2.2 绘制场景</span></a></h5><ol><li>清除颜色和深度缓冲区： <ul><li>使用<code>glClear()</code>函数清除颜色缓冲区和深度缓冲区，以便开始渲染新的帧。</li></ul></li><li>重置变换矩阵： <ul><li>使用<code>glLoadIdentity()</code>函数重置变换矩阵，以确保每一帧的绘制都是从一个空白状态开始的。</li></ul></li><li>设置相机（镜头）： <ul><li>使用<code>gluLookAt()</code>函数设置相机的位置和方向。函数的参数为相机位置<code>(x, 1.0f, z)</code>，相机目标位置<code>(x+lx, 1.0f, z+lz)</code>，以及相机的上方向<code>(0.0f, 1.0f, 0.0f)</code>。</li></ul></li><li>绘制地面： <ul><li>使用白色绘制地面，通过<code>glColor3f()</code>设置颜色。</li><li>使用<code>glBegin()</code>和<code>glEnd()</code>包裹的<code>GL_QUADS</code>模式绘制一个矩形地面。</li></ul></li><li>绘制36个雪人： <ul><li>使用两层嵌套的for循环，在不同的位置调用<code>drawSnowMan()</code>函数来绘制36个雪人。</li><li>内部的<code>glPushMatrix()</code>和<code>glPopMatrix()</code>用于保存和恢复当前变换矩阵状态，以确保每个雪人的绘制都是相对独立的。</li></ul></li><li>交换缓冲区： <ul><li>使用<code>glutSwapBuffers()</code>交换前后缓冲区，以显示渲染好的图像。</li></ul></li></ol><h4 id="_2-1-3-键盘事件" tabindex="-1"><a class="header-anchor" href="#_2-1-3-键盘事件"><span>2.1.3 键盘事件</span></a></h4><ol><li>改变视线方向： <ul><li>当用户按下左右箭头键时，会改变角度变量<code>angle</code>的值，从而改变视线的方向。</li><li>根据新的角度值重新计算视线向量的<code>lx</code>和<code>lz</code>值，使用<code>sin</code>和<code>cos</code>函数将极坐标转换为平面坐标。</li></ul></li><li>改变镜头位置： <ul><li>当用户按下上下箭头键时，会分别向前或向后移动镜头。</li><li>根据<code>lx</code>和<code>lz</code>向量以及给定的粒度（<code>fraction</code>）计算新的镜头位置<code>(x, z)</code>，实现沿视线方向的移动。</li></ul></li></ol><h4 id="_2-1-4-运行效果" tabindex="-1"><a class="header-anchor" href="#_2-1-4-运行效果"><span>2.1.4 运行效果</span></a></h4><p>实现窗口刷新演示：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/recording123.gif" alt="recording" style="zoom:50%;"><p>键盘控制前后移动和左右转头：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/recording-1713275053718-2.gif" alt="recording" style="zoom:50%;"><h3 id="_2-2-颜色" tabindex="-1"><a class="header-anchor" href="#_2-2-颜色"><span>2.2 颜色</span></a></h3><ol><li><p>定义颜色方式：</p><ul><li><p>OpenGL通过指定红、绿、蓝（RGB）成分的强度来定义颜色。</p></li><li><p>使用<code>glColor&lt;x&gt;&lt;t&gt;(red, green, blue, alpha)</code></p><p>函数来设置颜色，其中：</p><ul><li><code>&lt;x&gt;</code>表示参数的数量，可以是3（表示RGB颜色）或4（表示RGBA颜色，包括alpha通道）；</li><li><code>&lt;t&gt;</code>表示参数的数据类型。</li></ul></li></ul></li><li><p>着色模式（shading model）：</p><ul><li>着色模式定义了图元内部的颜色渲染方式。</li><li>默认情况下，OpenGL采用平滑着色模式（<code>GL_SMOOTH</code>）。当图元的顶点指定了不同的颜色时，OpenGL会在顶点之间进行平滑过渡，使得图元内部的颜色呈现<strong>渐变效果</strong>。</li><li>另一种着色模式是单调着色（<code>GL_FLAT</code>），在这种模式下，图元内部的颜色取<strong>决于最后一个顶点所指定的颜色</strong>。对于<code>GL_POLYGON</code>图元，内部颜色取决于第一个顶点的颜色。</li></ul></li></ol><p><code>GL_SMOOTH</code> 来选择平滑，实现效果如下：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/image-20240416220438503.png" alt="image-20240416220438503" style="zoom:50%;"><p><code>GL_FLAT</code> 单调着色模式，实现效果如下：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/image-20240416220631363.png" alt="image-20240416220631363" style="zoom:50%;"><h3 id="_2-3-光照" tabindex="-1"><a class="header-anchor" href="#_2-3-光照"><span>2.3 光照</span></a></h3><h4 id="_2-3-1-绘制正方体" tabindex="-1"><a class="header-anchor" href="#_2-3-1-绘制正方体"><span>2.3.1 绘制正方体</span></a></h4><ol><li>全局变量： <ul><li><code>xrot</code>和<code>yrot</code>：用于存储立方体绕x轴和y轴的旋转角度。</li><li><code>xspeed</code>和<code>yspeed</code>：用于控制立方体绕x轴和y轴的旋转速度。</li><li><code>z</code>：用于控制立方体在z轴上的位置。</li></ul></li><li>changeSize函数： <ul><li>设置OpenGL视口，并根据窗口大小设置透视投影。</li></ul></li><li>InitGL函数： <ul><li>进行OpenGL的初始化设置，包括设置着色模式、清空颜色缓冲区和深度缓冲区等。</li></ul></li><li>renderScene函数： <ul><li>清空颜色缓冲区和深度缓冲区。</li><li>重置模型视图矩阵，并移动相机位置到z轴为z的位置。</li><li>根据<code>xrot</code>和<code>yrot</code>的值进行旋转。</li><li>绘制一个红色的立方体。</li><li>利用双缓冲机制交换前后缓冲区，将绘制的图像显示在屏幕上。</li><li>根据<code>xspeed</code>和<code>yspeed</code>的值更新旋转角度。</li></ul></li><li>processSpecialKeys函数： <ul><li>处理特殊键盘按键事件，包括上下左右箭头键和Page Up/Page Down键，分别用于控制立方体在z轴上的移动和绕x轴、y轴的旋转速度。</li></ul></li><li>主函数： <ul><li>初始化OpenGL和GLUT，并创建窗口。</li><li>注册回调函数，包括绘制函数、窗口大小变化函数和键盘特殊按键事件处理函数。</li><li>启用深度测试和双缓冲机制。</li><li>进入主循环，等待事件的发生。</li></ul></li></ol><p>实现效果：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/recording-1713316639406-1.gif" alt="recording" style="zoom:50%;"><h4 id="_2-3-2-添加光源" tabindex="-1"><a class="header-anchor" href="#_2-3-2-添加光源"><span>2.3.2 添加光源</span></a></h4><ol><li><p>启用光源：</p><ul><li>在键盘按下“l”键时，调用<code>glEnable(GL_LIGHTING);</code>来启用光照计算。</li></ul></li><li><p>设置光照模型：</p><ul><li><p>设置光源参数：在程序头部设置了光源的参数，包括环境光和漫反射光的强度和位置。</p><ul><li><code>ambientLight[]</code>：<strong>环境光</strong>的强度，用来模拟场景中各处的间接光照。</li><li><code>diffuseLight[]</code>：<strong>漫反射光</strong>的强度，用来模拟光线直接照射到物体表面后的散射。</li><li><code>position[]</code>：光源的位置，其中最后一个参数是1.0表示光源为定向光，0.0表示光源为点光源。</li></ul></li><li><p>设置并启用光照：</p><p>在<code>InitGL</code>函数中，调用<code>glLight()</code>函数来设置光源的参数，并启用光源<code>GL_LIGHT0</code>。<code>glLightfv</code>函数用于设置光源的各个属性，包括环境光、漫反射光、镜面反射光和光源位置等。</p></li></ul></li></ol><p>最终效果：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/recording-1713318321304-3.gif" alt="recording" style="zoom:50%;"><h3 id="_2-4-材质" tabindex="-1"><a class="header-anchor" href="#_2-4-材质"><span>2.4 材质</span></a></h3><h4 id="_2-4-1-方法一" tabindex="-1"><a class="header-anchor" href="#_2-4-1-方法一"><span>2.4.1 方法一</span></a></h4><p>使用 <code>glMaterialfv</code>函数手动设置材质属性。</p><ul><li>定义一个数组来指定物体表面的材质属性，例如<code>GLfloat gray[] = {0.9f, 0.0f, 0.0f, 1.0f};</code>表示物体表面反射90%的红光。</li><li>使用<code>glMaterialfv</code>函数设置材质属性，例如<code>glMaterialfv(GL_FRONT, GL_DIFFUSE, gray);</code>用于设置散射光属性。</li></ul><p>实现效果：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/image-20240417144747792.png" alt="image-20240417144747792" style="zoom:50%;"><h4 id="_2-4-2-方法二" tabindex="-1"><a class="header-anchor" href="#_2-4-2-方法二"><span>2.4.2 方法二</span></a></h4><p>使用颜色追踪（Color Tracking）来设置材质属性。</p><ul><li>调用<code>glColorMaterial</code>函数启用颜色追踪，例如<code>glColorMaterial(GL_FRONT, GL_DIFFUSE);</code>表示追踪正面的散射光属性。</li><li>启用颜色追踪功能，使用<code>glEnable(GL_COLOR_MATERIAL);</code>。</li><li>使用<code>glColor</code>函数设置物体的颜色，例如<code>glColor(0.0f, 0.0f, 0.9f, 1.0f);</code>表示设置物体为蓝色。</li></ul><p>实现效果：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/image-20240417145056781.png" alt="image-20240417145056781" style="zoom:50%;"><h3 id="_2-5-纹理" tabindex="-1"><a class="header-anchor" href="#_2-5-纹理"><span>2.5 纹理</span></a></h3><h4 id="_2-5-1-soil环境配置" tabindex="-1"><a class="header-anchor" href="#_2-5-1-soil环境配置"><span>2.5.1 SOIL环境配置</span></a></h4><ol><li><p>首先在项目目录下创建<code>lib</code>、<code>include</code>文件夹，分别将<code>SOIL.lib</code>、<code>SOIL.h</code>放入。</p></li><li><p>在VS2022的项目中打开项目属性页，将如下两项加入刚刚创建的两个目录。</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/image-20240417163446630.png" alt="image-20240417163446630" style="zoom:50%;"></li><li><p>在链接器的常规中，加入lib目录。</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/image-20240417163534482.png" alt="image-20240417163534482" style="zoom:50%;"></li><li><p>在链接器的输入中，加入静态库的完整名称。</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2024-09-02/image-20240417163611310.png" alt="image-20240417163611310" style="zoom:50%;"></li></ol><h4 id="_2-5-2-纹理加载" tabindex="-1"><a class="header-anchor" href="#_2-5-2-纹理加载"><span>2.5.2 纹理加载</span></a></h4><ol><li><p><code>LoadGLTextures</code>函数：</p><ul><li><p>使用循环加载两张图片作为纹理，分别存储在<code>texture[0]</code>和<code>texture[1]</code>中。</p></li><li><p>调用<code>SOIL_load_OGL_texture</code>函数加载图片并将其转换为OpenGL纹理。该函数的参数包括图片路径、加载方式、生成新的纹理ID以及其他标志。</p></li><li><p>检查纹理加载是否成功，如果失败则返回false。</p></li><li><p>对每张纹理进行绑定，并设置放大和缩小过滤器为线性过滤器（<code>GL_LINEAR</code>）。</p></li></ul></li><li><p><code>renderScene</code>函数</p><p>绘制立方体的各个面：</p><ul><li>每个面都使用<code>glBegin(GL_QUADS)</code>开始绘制，并使用<code>glEnd()</code>结束。</li><li>每个面的顶点坐标都使用<code>glVertex3f</code>指定。</li><li>每个顶点的纹理坐标都使用<code>glTexCoord2f</code>指定，以便纹理正确贴在立方体上。</li><li>每个面的法线（用于光照计算）都使用<code>glNormal3f</code>指定。</li></ul></li></ol><h3 id="_2-6-雪人世界光照与材质" tabindex="-1"><a class="header-anchor" href="#_2-6-雪人世界光照与材质"><span>2.6 雪人世界光照与材质</span></a></h3><p>要在雪人世界加入光照与材质，我们只需要加入一个<code>InitGL</code>函数，进行光照初始化；并加入普通按键控制，实现按<code>l</code>时， 通过设置<code>glDisable(GL_LIGHTING);</code>和<code>glEnable(GL_LIGHTING);</code>，就可以打开/关闭光照。</p><p>同时，为了保持在光照下，颜色保持不变，我们只需要加入简单的两行代码使用<code>glColorMaterial</code>、<code>glEnable</code>函数，即可实现颜色追踪（Color Tracking）来设置材质属性。</p><div class="language-c line-numbers-mode" data-ext="c" data-title="c"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> InitGL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GLvoid</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glColorMaterial</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GL_FRONT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> GL_DIFFUSE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glEnable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GL_COLOR_MATERIAL</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	GLfloat ambientLight</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">[]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> };</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	GLfloat diffuseLight</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">[]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> };</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	GLfloat position</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">[]</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> =</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 2.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 1.0</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">f</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> };</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glLightfv</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GL_LIGHT0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> GL_AMBIENT</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ambientLight</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glLightfv</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GL_LIGHT0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> GL_DIFFUSE</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> diffuseLight</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glLightfv</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GL_LIGHT0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> GL_POSITION</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> position</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	glEnable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">GL_LIGHT0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">	return</span><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> true</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,59)]))}const d=s(n,[["render",t],["__file","index.html.vue"]]),k=JSON.parse(`{"path":"/opengl/x2k4c085/","title":"2 OpenGL 基础实验（二）","lang":"zh-CN","frontmatter":{"title":"2 OpenGL 基础实验（二）","createTime":"2024/09/02 09:34:32","permalink":"/opengl/x2k4c085/","description":"源码见GitHub：A-UESTCer-s-Code 1 运行效果 旋转的立方体实现效果： image-20240417164843163 雪人世界实现效果： recording 2 实现过程 2.1 几何转换 2.1.1 窗口刷新 利用透视变换实现窗口刷新： 通过透视投影来设置窗口刷新函数，使用gluPerspective()函数定义透视投影。 2....","head":[["meta",{"property":"og:url","content":"https://plus-wave.github.io/opengl/x2k4c085/"}],["meta",{"property":"og:site_name","content":"PLUS-WAVE's Blog"}],["meta",{"property":"og:title","content":"2 OpenGL 基础实验（二）"}],["meta",{"property":"og:description","content":"源码见GitHub：A-UESTCer-s-Code 1 运行效果 旋转的立方体实现效果： image-20240417164843163 雪人世界实现效果： recording 2 实现过程 2.1 几何转换 2.1.1 窗口刷新 利用透视变换实现窗口刷新： 通过透视投影来设置窗口刷新函数，使用gluPerspective()函数定义透视投影。 2...."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-24T08:32:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-24T08:32:14.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"2 OpenGL 基础实验（二）\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-24T08:32:14.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":8.75,"words":2626},"git":{"updatedTime":1732437134000,"contributors":[{"name":"PLUS_WAVE","email":"wangplus_wave@foxmail.com","commits":2,"avatar":"https://avatars.githubusercontent.com/PLUS_WAVE?v=4","url":"https://github.com/PLUS_WAVE"}]},"autoDesc":true,"filePathRelative":"notes/OpenGL/OpenGL/2. OpenGL 基础实验（二）.md","bulletin":false}`);export{d as comp,k as data};