import{_ as s,c as e,e as a,o as t}from"./app-CvjE_s6e.js";const n={};function l(p,i){return t(),e("div",null,i[0]||(i[0]=[a(`<h2 id="_10-1-inheritance-继承" tabindex="-1"><a class="header-anchor" href="#_10-1-inheritance-继承"><span>10.1 Inheritance 继承</span></a></h2><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-01/image-20230801145225759.png" style="zoom:67%;"><p>语法：<code>:public base_class_name</code></p><p><code>public</code> 只是一种继承的方式，还有<code>protect</code>，<code>private</code></p><blockquote><p>子类会拥有自己的以及父类的数据</p></blockquote><ul><li><p><strong>public 继承（public inheritance）：</strong> 在公有继承中，基类的 public 和 protected 成员的访问属性在子类中保持不变，子类可以访问基类的 public 成员和受保护成员，但<u>不能直接访问基类的私有成员</u></p><p>通过子类的对象只能访问基类的 public 成员</p><blockquote><p>通常用于&quot;is-a&quot;关系，表示派生类是基类的一种类型，派生类的对象可以替代基类的对象</p></blockquote></li><li><p><strong>protected 继承（protected inheritance）：</strong> 在受保护继承中，基类的 <em>public</em> 和 <em>protected</em> 成员都<u>以 <em>protected</em> 身份出现在子类中</u>，基类的private 成员仍然是私有；子类成员函数可以直接访问基类中的 public 和 protected 成员，但不能直接访问基类的 private 成员</p><p>通过子类的对象<u>不能直接访问基类中的任何成员</u></p><blockquote><p>通常用于实现继承的实现细节，不表示&quot;is-a&quot;关系，而是表示派生类需要基类的实现，但不希望公开基类的接口</p></blockquote></li><li><p><strong>private 继承（private inheritance）：</strong> 在私有继承中，基类的 <em>public</em> 和 <em>protected</em> 成员<u>都以 <em>private</em> 身份出现在子类中</u>，基类的私有成员仍然是私有；子类成员函数可以直接访问基类中的 public 和 protected 成员，但不能直接访问基类的 private 成员</p><p>通过子类的对象<u>不能直接访问基类中的任何成员</u></p></li></ul><table><thead><tr><th></th><th>基类 public 成员</th><th>基类 protected 成员</th><th>基类 private 成员</th></tr></thead><tbody><tr><td>public 继承</td><td>public 成员</td><td>protected 成员</td><td>不能访问</td></tr><tr><td>protected 继承</td><td>protected 成员</td><td>protected 成员</td><td>不能访问</td></tr><tr><td>private 继承</td><td>private 成员</td><td>private 成员</td><td>不能访问</td></tr></tbody></table><h3 id="_10-1-1-继承下的构造和析构" tabindex="-1"><a class="header-anchor" href="#_10-1-1-继承下的构造和析构"><span>10.1.1 继承下的构造和析构</span></a></h3><p>与复合下的构造和析构相似</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-01/image-20230801150053963.png" alt="image-20230801150053963" style="zoom:80%;"><ul><li><p>构造是<mark>由内而外</mark></p><p>Derived 的构造函数，编译器会自动先调用 Base 的 default 构造函数，再执行自己</p><blockquote><p>注意如果要调用 Base 的其他构造函数需要自己写出来</p><p><code>Derived::Derived(…): Base() { … };</code></p></blockquote></li><li><p>析构是<mark>由外而内</mark></p><p>Derived 的析构函数会先执行自己，之后编译器调用 Base 的析构函数</p><blockquote><p><code>Derived::~Derived(…){ … /* ~Base() */ };</code></p></blockquote><blockquote><p>注意：<u>Base class 的 dtor 必需是 <em>virtual</em></u></p><p>否则下例会导致结束时只会调用 Base 的 dtor</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Base</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ptr </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Derived</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> delete</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ptr</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> // 只会调用 Base 类的析构函数</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> return</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;"> 0</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote></li></ul><h2 id="_10-2-虚函数" tabindex="-1"><a class="header-anchor" href="#_10-2-虚函数"><span>10.2 虚函数</span></a></h2><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-01/image-20230801152023433.png" alt="image-20230801152023433" style="zoom:80%;"><ul><li><p><em>pure virtual</em> 函数：</p><p>derived class <u>一定要重新定义</u> (override 覆写) 它；<u>其没有定义</u>只有声明</p><p>语法：<code>virtual xxxxxx =0;</code></p></li><li><p><em>virtual</em> 函数：</p><p>derived class 可以重新定义 (override, 覆写) 它，且它<u>已有默认定义</u></p><p>语法：<code>virtual xxxxxx;</code></p></li><li><p><em>non-virtual</em> 函数：</p><p>不希望 derived class 重新定义 (override, 覆写) 它</p></li></ul><h2 id="_10-3-继承-with-virtual" tabindex="-1"><a class="header-anchor" href="#_10-3-继承-with-virtual"><span>10.3 继承 with virtual</span></a></h2><blockquote><p>例子：在 Windows 平台下用某个软件打开文件——分为好几步，但基本所有软件大多数操作都是一致的，只有一个操作如读取方式是不一样的</p></blockquote><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-01/image-20230801154005427.png" alt="image-20230801154005427" style="zoom:80%;"><ol><li>现有一个框架 Application framework 其写好了所有必要的函数，其中 <code>Serialize()</code> 就是一个 <em>pure virtual</em> 函数</li><li>使用这个框架写自己软件的打开文件，就继承这个框架，其中就需要自己 <em>override</em> 覆写 <code>Serialize()</code> 这个函数</li><li>在执行中，执行 <code>myDoc.OnFileOpen();</code> 中到 <code>Serialize()</code> 时，是通过 <code>this</code> 来指引到自己写的 <code>Serialize()</code> 中去的</li></ol><blockquote><p>把关键动作延缓到子类再做，这是一个经典的设计模式——<strong>Template Method</strong></p></blockquote><h2 id="_10-4-缩略图" tabindex="-1"><a class="header-anchor" href="#_10-4-缩略图"><span>10.4 缩略图</span></a></h2><ul><li><p>复合：<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-02/image-20230802084858622.png" alt="image-20230802084858622" style="zoom:80%;"></p></li><li><p>委托：<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-02/image-20230802085101744.png" alt="image-20230802085101744" style="zoom:106%;"></p></li><li><p>继承：<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-02/image-20230802085210589.png" alt="image-20230802085210589" style="zoom:80%;"></p></li><li><p>类中的元素：<img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-02/image-20230802085810816.png" alt="image-20230802085810812" style="zoom:67%;"> 变量名称 : 变量类型（与代码刚好相反</p><ul><li><p>变量下面加下划线 表示 <code>static</code></p></li><li><p>前面加一个 <code>-</code> 表示 <code>private</code></p></li><li><p>前面加一个 <code>#</code> 表示 <code>protected</code></p></li><li><p>前面加一个 <code>+</code> 表示 <code>public</code>（一般可以省略）</p></li></ul></li></ul><h2 id="_10-5-继承-复合" tabindex="-1"><a class="header-anchor" href="#_10-5-继承-复合"><span>10.5 继承+复合</span></a></h2><p>这种关系下的构造和析构与之前的类似</p><ul><li><p>第一种：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-01/image-20230801161457590.png" alt="image-20230801161457590" style="zoom:67%;"><ul><li><p>构造<mark>由内到外</mark> <strong>先 Base 再 Component</strong></p><p>Derived 的构造函数首先调用 Base 的 default 构造函数，然后调用 Component 的 default 构造函数，然后才执行自己</p><p><code>Derived::Derived(…): Base(),Component() { … };</code></p></li><li><p>析构<mark>由外而内</mark> <strong>先 Component 再 Base</strong></p><p>Derived 的析构函数首先执行自己，然后调用 Component 的析构函数，然后调用 Base 的析构函数</p><p><code>Derived::~Derived(…){… /*~Component() ~Base()*/};</code></p></li></ul></li><li><p>第二种：</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-01/image-20230801162202797.png" alt="image-20230801162202797" style="zoom:67%;"><p>同理构造<mark>由内到外</mark>，析构<mark>由外而内</mark></p></li></ul><h2 id="_10-6-继承-委托" tabindex="-1"><a class="header-anchor" href="#_10-6-继承-委托"><span>10.6 继承+委托</span></a></h2><h3 id="_10-6-1-例一-observer" tabindex="-1"><a class="header-anchor" href="#_10-6-1-例一-observer"><span>10.6.1 例一 Observer</span></a></h3><blockquote><p>设计模式—— <strong>Observer</strong></p><p>例如一串数据，可以用饼图来观察，也可以用条形图来观察，这种种的观察方式都是<u>继承于 Observer</u></p></blockquote><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-01/image-20230801163932926.png" alt="image-20230801163932926" style="zoom:67%;"><p>通过 <code>vector&lt;Observer&gt; m_views;</code> 来进行委托</p><p>当数据改变的时候，Observer 也需要更新，即 <code>notify</code> 函数，来将目前所有的观察者更新</p><h3 id="_10-6-2-例二-composite" tabindex="-1"><a class="header-anchor" href="#_10-6-2-例二-composite"><span>10.6.2 例二 Composite</span></a></h3><blockquote><p>设计模式—— <strong>Composite</strong></p><p>例如文件系统，文件夹里可以<u>有文件夹</u>（与自己相同的类），也可以<u>有文件</u>，其中文件就是最基本的 <em>Primitive</em>，而文件夹就是复合物 <em>Composite</em></p></blockquote><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-02/image-20230802082524919.png" alt="image-20230802082524919"><p>要达成目的，就可以再设计一个父类 <em>Component</em> ，文件和文件夹就继承于同一父类；</p><p>其中 <em>Composite</em> 要用<u>委托到父类</u>的方式 <code>Component*</code> 设计容器和操作——使其 <em>Primitive</em> 和 <em>Composite</em> 都可以适用</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//父类 Component</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Component</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">private</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    int</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> value</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">    Component</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">	{</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">value </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;}</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    virtual</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Component</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> )</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //虚函数</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//复合物 Composite</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Composite</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    : </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Component</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	vector </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">Component</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	Composite</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> :</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Component</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">	void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> add</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">Component</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> elem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">	{</span></span>
<span class="line"><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;">		c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">push_back</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">elem</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">	}</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	…</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">//基本类 Primitive</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Primitive</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    : </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> Component</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">	Primitive</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">):</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Component</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">val</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {}</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">};</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>component中<u>add是虚函数（且是空函数）</u>，不能是纯虚函数——<em>Primitive</em> 不会 override add函数（最基本的单位，不能 add 了），而 <em>Composite</em> 需要 override add函数</p></blockquote><h3 id="_10-6-3-例三-prototype" tabindex="-1"><a class="header-anchor" href="#_10-6-3-例三-prototype"><span>10.6.3 例三 Prototype</span></a></h3><blockquote><p>设计模式—— <strong>Prototype</strong></p><p>框架（父类）要创建未来才会出现的子类——要求子类要创建一个自己当作原型 <em>Prototype</em> 让框架（父类）来找到并创建 <u>FindAndClone</u></p></blockquote><blockquote><p>补充：当一个子类继承自父类时，它可以被视为是父类的一种类型，因此可以使用父类的指针或引用来引用子类的对象；</p><p>这种用父类的指针或引用来处理子类对象的方式称为——**向上转型 ** <em>Upcasting</em></p></blockquote><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-02/image-20230802163941216.png" alt="image-20230802163941216" style="zoom:50%;"><ol><li><p>父类中，有一个存放原型的数组，有<u>纯虚函数</u> <code>Image *clone()</code>，还有两个<u>静态函数</u> <code>Image FindAndClone(imageType);</code> <code>void addPrototype(Image *image){...}</code></p></li><li><p>子类中，创建一个静态的自己 <code>_LAST</code> ，把它放到父类的一个空间中，这样父类就可以找到新创建的子类</p><blockquote><p><mark>private 的构造函数</mark> <code>LandSatImage()</code> 中是 <code>addPrototype(this); //这里的 this 就是 _LAST</code> 将自己的原型放到了父类中去</p></blockquote></li><li><p>子类中，准备一个 <code>clone()</code>函数，父类通过调用找到的相应类型的 clone 函数来创建子类的副本</p><blockquote><p>这里的 clone 函数就不能用之前的那个构造函数来创建副本了——其会放到父类中去，所以创建一个新的构造函数 <code>LandSatImage(int)</code> 用传进一个无用参数（随便传个int型数据就好）来进行区分</p></blockquote></li></ol>`,42)]))}const r=s(n,[["render",l],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/cpp/s2ic0a8q/","title":"10 继承与虚函数","lang":"zh-CN","frontmatter":{"title":"10 继承与虚函数","createTime":"2023/08/06 17:40:22","permalink":"/cpp/s2ic0a8q/","description":"10.1 Inheritance 继承 语法：:public base_class_name public 只是一种继承的方式，还有protect，private 子类会拥有自己的以及父类的数据 public 继承（public inheritance）： 在公有继承中，基类的 public 和 protected 成员的访问属性在子类中保持不变，子类...","head":[["meta",{"property":"og:url","content":"https://plus-wave.github.io/cpp/s2ic0a8q/"}],["meta",{"property":"og:site_name","content":"PLUS-WAVE's Blog"}],["meta",{"property":"og:title","content":"10 继承与虚函数"}],["meta",{"property":"og:description","content":"10.1 Inheritance 继承 语法：:public base_class_name public 只是一种继承的方式，还有protect，private 子类会拥有自己的以及父类的数据 public 继承（public inheritance）： 在公有继承中，基类的 public 和 protected 成员的访问属性在子类中保持不变，子类..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-23T12:28:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T12:28:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"10 继承与虚函数\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-11-23T12:28:40.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":6.68,"words":2004},"git":{"updatedTime":1732364920000,"contributors":[{"name":"PLUS_WAVE","username":"PLUS_WAVE","email":"wangplus_wave@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/PLUS_WAVE?v=4","url":"https://github.com/PLUS_WAVE"}]},"autoDesc":true,"filePathRelative":"notes/C++/1.面向对象高级开发 Part1/10. 10 继承与虚函数.md"}`);export{r as comp,d as data};
