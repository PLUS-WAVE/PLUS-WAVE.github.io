import{_ as i,c as e,e as a,o as n}from"./app-CvjE_s6e.js";const t={};function l(p,s){return n(),e("div",null,s[0]||(s[0]=[a(`<h2 id="_7-1-堆和栈" tabindex="-1"><a class="header-anchor" href="#_7-1-堆和栈"><span>7.1 堆和栈</span></a></h2><p><strong>Stack</strong> <strong>栈</strong>，是存在于某作用域 (scope) 的一块内存空间。</p><p>例如当你调用函数，函数本身即会形成一个 <code>stack</code> 用来放置它所接收的参数，以及返回地址；在函数本体 (function body) 内声明的任何变量其所使用的内存块都取自上述 <code>stack</code></p><p><strong>Heap</strong> <strong>堆</strong>，或称为 <em>system heap</em> ，是指由操作系统提供的一块 global 内存空间，程序可动态分配 (dynamic allocated) 从中获得若干区块 (blocks)</p><p><u>可以用 new 来动态取得</u></p><blockquote><p>在 stack 中的是<u>自动生成的空间</u>，作用域结束空间会自动释放</p><p>在 heap 中的是<u>自己申请的空间</u>，需要自己释放</p></blockquote><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   complex </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">c1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">              </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   /*c1空间来自stack*/</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">   complex</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> complex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   /*complex(3) 是个临时对象</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">   其所用的空间是以new从heap动态分配而得，并由p指向*/</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-2-object-生命期" tabindex="-1"><a class="header-anchor" href="#_7-2-object-生命期"><span>7.2 object 生命期</span></a></h2><ul><li><p><em>stack objects</em> 的生命期</p><p><code>c1</code> 便是所谓 stack object，其生命在作用域 (scope) 结束之际结束这种作用域内的 object，又称为 <em>auto object</em>，因为它会被“自动”清理（结束自动调用析构函数）</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">	complex </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">c1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em>static local objects</em> 的生命期</p><p>若在前面加上 <code>static</code> 后，其会存在到整个程序结束</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    static</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> complex </span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">c2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em>global objects</em> 的生命期</p><p>写在任何作用域之外的对象，其生命在整个程序结束之后才结束，你也可以把它视为一种 static object，其作用域是整个程序</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">...</span></span>
<span class="line"><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">complex</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> c3</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">(</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">1</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">,</span><span style="--shiki-light:#2F798A;--shiki-dark:#4C9A91;">2</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">int</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> main</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p><em>heap objects</em> 的生命期</p><p><code>p</code> 所指的便是 heap object，其生命在它被 <code>delete</code> 之际结束</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">{</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    complex</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">*</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> new</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> complex</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">    ...</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">    delete</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> p</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><h2 id="_7-3-new-和delete" tabindex="-1"><a class="header-anchor" href="#_7-3-new-和delete"><span>7.3 new 和delete</span></a></h2><h3 id="_7-3-1-new" tabindex="-1"><a class="header-anchor" href="#_7-3-1-new"><span>7.3.1 new</span></a></h3><p><strong>new</strong>：先分配 <em>memory</em> , 再调用 <em>ctor</em></p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731092332395.png" alt="image-20230731092332395" style="zoom:50%;"><ol><li>分配内存：先用一个特殊函数，按 class 的定义分配了两个 <code>double</code> 的大小</li><li>转型（忽视）</li><li>调用构造函数，赋值<code>(1,2)</code></li></ol><h3 id="_7-3-2-delete" tabindex="-1"><a class="header-anchor" href="#_7-3-2-delete"><span>7.3.2 delete</span></a></h3><p><strong>delete</strong>：先调用 <em>dtor</em>, 再释放 <em>memory</em></p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731092947259.png" alt="image-20230731092947259" style="zoom:50%;"><ol><li>调用析构函数——释放的是 <code>m_date</code> 指向的字符串 <code>Hello</code> 的空间（即构造函数中 <code>new</code> 申请的空间）</li><li>释放内存：用一个特殊函数释放了 <code>ps</code> 指向的空间（即<code>String* ps = new String(&quot;Hello&quot;);</code> 中 <code>new</code> 申请的空间）</li></ol><h2 id="_7-4-内存动态分配" tabindex="-1"><a class="header-anchor" href="#_7-4-内存动态分配"><span>7.4 内存动态分配</span></a></h2><h3 id="_7-4-1-在vc下内存动态分配" tabindex="-1"><a class="header-anchor" href="#_7-4-1-在vc下内存动态分配"><span>7.4.1 在VC下内存动态分配</span></a></h3><p>在VC下（不同编译器的内存动态分配可能不同）</p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731095853726.png" alt="image-20230731095853726"><ul><li><p>调试模式：</p><p><code>(4*3)</code> 是3个指针的大小</p><p><code>(32+4)</code> 是调试模式所需空间（橘色部分）</p><p><code>(4*2)</code> 是上下两个 <em>cookie</em> ——表示内存块的开始与结束</p><p><code>4</code> 是数组才有的长度记录</p><p>由于分配内存块需要是16的倍数，所以需要 <em>pad</em> 来填充到<code>64</code></p></li><li><p>执行模式：</p><p>去掉调试模式的空间即可</p></li></ul><blockquote><p>因为内存块是16的倍数，因此最后四位bit一定都是0，<em>cookie</em> 就借用最后的一位<code>1</code>表示占用内存，<code>0</code>表示释放内存</p><p>如上图<code>41h</code>中<code>1</code>即表示占用内存</p></blockquote><h3 id="_7-4-2-array-new-delete" tabindex="-1"><a class="header-anchor" href="#_7-4-2-array-new-delete"><span>7.4.2 array new/delete</span></a></h3><p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731101729210.png" alt="image-20230731101729210" loading="lazy"></p><p><mark><code>array new</code> 一定要搭配 <code>array delete</code></mark></p><p><mark><code>new</code>后有<code>[ ]</code>—&gt; <code>delete</code>后加<code>[ ]</code></mark></p><p>普通的delete只调用一次析构函数——剩下两个<u>指针的指向的空间</u>没有调用析构函数，内存泄漏</p><p>这种情况发生在有指针的类，但最好都这样写</p>`,30)]))}const c=i(t,[["render",l],["__file","index.html.vue"]]),h=JSON.parse(`{"path":"/cpp/lm8vcu2u/","title":"7 堆，栈，内存管理","lang":"zh-CN","frontmatter":{"title":"7 堆，栈，内存管理","createTime":"2023/08/01 17:40:22","permalink":"/cpp/lm8vcu2u/","description":"7.1 堆和栈 Stack 栈，是存在于某作用域 (scope) 的一块内存空间。 例如当你调用函数，函数本身即会形成一个 stack 用来放置它所接收的参数，以及返回地址；在函数本体 (function body) 内声明的任何变量其所使用的内存块都取自上述 stack Heap 堆，或称为 system heap ，是指由操作系统提供的一块 glo...","head":[["meta",{"property":"og:url","content":"https://plus-wave.github.io/cpp/lm8vcu2u/"}],["meta",{"property":"og:site_name","content":"PLUS-WAVE's Blog"}],["meta",{"property":"og:title","content":"7 堆，栈，内存管理"}],["meta",{"property":"og:description","content":"7.1 堆和栈 Stack 栈，是存在于某作用域 (scope) 的一块内存空间。 例如当你调用函数，函数本身即会形成一个 stack 用来放置它所接收的参数，以及返回地址；在函数本体 (function body) 内声明的任何变量其所使用的内存块都取自上述 stack Heap 堆，或称为 system heap ，是指由操作系统提供的一块 glo..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731101729210.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-23T12:28:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T12:28:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"7 堆，栈，内存管理\\",\\"image\\":[\\"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-07-31/image-20230731101729210.png\\"],\\"dateModified\\":\\"2024-11-23T12:28:40.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":3.03,"words":908},"git":{"updatedTime":1732364920000,"contributors":[{"name":"PLUS_WAVE","username":"PLUS_WAVE","email":"wangplus_wave@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/PLUS_WAVE?v=4","url":"https://github.com/PLUS_WAVE"}]},"autoDesc":true,"filePathRelative":"notes/C++/1.面向对象高级开发 Part1/7. 7 堆 栈 内存管理.md"}`);export{c as comp,h as data};
