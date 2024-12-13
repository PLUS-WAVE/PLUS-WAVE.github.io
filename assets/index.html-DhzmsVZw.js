import{_ as i,c as a,e,o as n}from"./app-koSCgMdL.js";const t={};function l(p,s){return n(),a("div",null,s[0]||(s[0]=[e(`<h2 id="_1-stl概述" tabindex="-1"><a class="header-anchor" href="#_1-stl概述"><span>1 STL概述</span></a></h2><p>STL —— Standard Template Library，标准模板库</p><p>C++ Standard LIbrary，C++标准库中包含STL（即STL+一些小东西）</p><h3 id="_1-1-头文件名称" tabindex="-1"><a class="header-anchor" href="#_1-1-头文件名称"><span>1.1 头文件名称</span></a></h3><ul><li>C++标准库的 header files 不带 <code>.h</code>，例如：<code>#include&lt;vector&gt;</code></li><li>新式 C header files 不带 <code>.h</code>，例如：<code>#include&lt;cstdio&gt;</code></li><li>老式 C header files 带 <code>.h</code> 仍然可用，例如：<code>#include&lt;stdio.h&gt;</code></li></ul><blockquote><p>新式 header 内的组件封装于 <em>namespace std</em></p><p>老式 header 内的组件<strong>不</strong>封装于 <em>namespace std</em></p></blockquote><h3 id="_1-2-stl基础介绍" tabindex="-1"><a class="header-anchor" href="#_1-2-stl基础介绍"><span>1.2 STL基础介绍</span></a></h3><p>STL六大部件：容器(Containers)、分配器(Allocators)、算法(Algorithms)、迭代器(Iterators)、仿函数(Functors)、适配器(Adapters)</p><ul><li><em>容器</em>：放数据</li><li><em>分配器</em>：是来支持容器将数据放到内存里</li><li><em>算法</em>：是一个个函数来处理存放在容器里的数据</li><li><em>迭代器</em>：就是来支持算法操作容器的</li><li><em>仿函数</em>：作用类似函数，例如相加相减等等</li><li><em>适配器</em>：有三种，分别将容器，迭代器，仿函数来进行一个转换</li></ul><p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-18/image-20230818085837524.png" alt="image-20230818085837524" loading="lazy"></p><p>实例：</p><p><img src="https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-18/image-20230818091503166.png" alt="image-20230818091503166" loading="lazy"></p><ol><li>首先是创建一个 container（<em>vector</em>）</li><li>allocator 来帮助 container 来分配内存（一般会忽略不写）</li><li>用一个 Algorithm 来操作数据（<em>count_if</em> 是数出满足条件的个数）</li><li>iterator 就是一个泛化的指针，来告诉 Algorithm 要处理哪里的数据</li><li>用一个 functor 来判断数据（<em>less</em> 其有两个参数传入，第一个 &lt; 第二个就为真）</li><li>先用一个 function adapter（<em>bind2nd</em>）绑定了第二个参数为 40；再用一个 function adapter（<em>not1</em>）来对整个判断结果进行否定</li></ol><p>判断条件 predicate 为：<code>not1(bind2nd(less&lt;int&gt;(), 40))</code> —— 表示 &gt;= 40 数为真</p><blockquote><p>前闭后开：[ )，基本所有容器都有 <code>begin()</code> <code>end()</code>，但 <em>begin</em> 是指向的容器的第一个元素，而 <em>end</em> 是指向的容器最后一个元素的<strong>下一个</strong></p><p>例子：遍历容器</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ...</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Container</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> Container</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&lt;</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;::</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">iterator i </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">begin</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> i </span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">!=</span><span style="--shiki-light:#B07D48;--shiki-dark:#BD976A;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">.</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;">end</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">();</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> ++</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">i</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;"> //但在C++11中可以用新语法简写</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> ...</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> Container</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&lt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">T</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">&gt;</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;"> for</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> (</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">auto</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> elem </span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> c</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">)</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;">  ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></blockquote><h3 id="_1-3-typename" tabindex="-1"><a class="header-anchor" href="#_1-3-typename"><span>1.3 typename</span></a></h3><p>在模板参数的关键字使用中与 <code>class</code> 是一样的</p><p>在类型前面加上 <code>typename</code>：</p><div class="language-cpp line-numbers-mode" data-ext="cpp" data-title="cpp"><button class="copy" title="复制代码" data-copied="已复制"></button><pre class="shiki shiki-themes vitesse-light vitesse-dark vp-code"><code><span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typename</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> class</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> MyTemplateClass</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> public</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">:</span></span>
<span class="line"><span style="--shiki-light:#1E754F;--shiki-dark:#4D9375;">     typedef</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> typename</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">NestedType</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> NestedType</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> };</span></span>
<span class="line"><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> </span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> template</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> &lt;</span><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">typename</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;"> T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;"> void</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> MyTemplateFunction</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">()</span><span style="--shiki-light:#999999;--shiki-dark:#666666;"> {</span></span>
<span class="line"><span style="--shiki-light:#AB5959;--shiki-dark:#CB7676;">     typename</span><span style="--shiki-light:#59873A;--shiki-dark:#80A665;"> T</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">::</span><span style="--shiki-light:#2E8F82;--shiki-dark:#5DA994;">SomeType</span><span style="--shiki-light:#393A34;--shiki-dark:#DBD7CAEE;"> variable</span><span style="--shiki-light:#999999;--shiki-dark:#666666;">;</span></span>
<span class="line"><span style="--shiki-light:#A0ADA0;--shiki-dark:#758575DD;">     // ...</span></span>
<span class="line"><span style="--shiki-light:#999999;--shiki-dark:#666666;"> }</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在这个例子中，<code>typename</code> 用于告诉编译器 <code>T::NestedType</code> 和 <code>T::SomeType</code> 是类型名称而不是成员变量</p><p><code>typename</code> 是一个用于明确指定符号是一个类型的关键字，以帮助编译器正确解析代码并避免歧义，如果不使用 <code>typename</code>，编译器可能会认为符号是一个值而不是类型，导致编译错误。</p><h2 id="_2-oop-vs-gp" tabindex="-1"><a class="header-anchor" href="#_2-oop-vs-gp"><span>2 OOP vs. GP</span></a></h2><ul><li><p><strong>OOP</strong> —— Object-Oriented programming 面向对象编程</p><p>将<u>数据</u>和<u>操作</u>关联到一起</p><p>例如容器 List，其自带了一个 <code>sort()</code>，因为链表的存储空间不是连续的，Iterator 不能实现加减操作，所以不能使用全局的 <code>::sort()</code></p></li><li><p><strong>GP</strong> —— Generic Programming 泛式编程</p><p>将<u>数据</u>和<u>操作</u>分开</p><ul><li>容器和算法的团队就可以各自闭门造车，其间通过 Iterator 联通即可</li><li>算法通过 Iterator 确定操作范围，并通过 Iterator 取用容器的元素</li><li>所有的算法，其内的<u>最终涉及元素的操作</u>都是<u>比大小</u></li></ul></li></ul>`,23)]))}const r=i(t,[["render",l],["__file","index.html.vue"]]),d=JSON.parse(`{"path":"/cpp/e84epe4w/","title":"1 STL概述 + 2 OOPvsGP","lang":"zh-CN","frontmatter":{"title":"1 STL概述 + 2 OOPvsGP","createTime":"2023/09/27 20:19:48","permalink":"/cpp/e84epe4w/","description":"1 STL概述 STL —— Standard Template Library，标准模板库 C++ Standard LIbrary，C++标准库中包含STL（即STL+一些小东西） 1.1 头文件名称 C++标准库的 header files 不带 .h，例如：#include<vector> 新式 C header files 不带 .h，例如：...","head":[["meta",{"property":"og:url","content":"https://plus-wave.github.io/cpp/e84epe4w/"}],["meta",{"property":"og:site_name","content":"PLUS-WAVE's Blog"}],["meta",{"property":"og:title","content":"1 STL概述 + 2 OOPvsGP"}],["meta",{"property":"og:description","content":"1 STL概述 STL —— Standard Template Library，标准模板库 C++ Standard LIbrary，C++标准库中包含STL（即STL+一些小东西） 1.1 头文件名称 C++标准库的 header files 不带 .h，例如：#include<vector> 新式 C header files 不带 .h，例如：..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-18/image-20230818085837524.png"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-23T12:28:40.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-23T12:28:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"1 STL概述 + 2 OOPvsGP\\",\\"image\\":[\\"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-18/image-20230818085837524.png\\",\\"https://raw.githubusercontent.com/PLUS-WAVE/blog-image/master/img/blog/2023-08-18/image-20230818091503166.png\\"],\\"dateModified\\":\\"2024-11-23T12:28:40.000Z\\",\\"author\\":[]}"]]},"headers":[],"readingTime":{"minutes":2.77,"words":831},"git":{"updatedTime":1732364920000,"contributors":[{"name":"PLUS_WAVE","email":"wangplus_wave@foxmail.com","commits":1,"avatar":"https://avatars.githubusercontent.com/PLUS_WAVE?v=4","url":"https://github.com/PLUS_WAVE"}]},"autoDesc":true,"filePathRelative":"notes/C++/3. STL & 泛式编程/2023-09-27- 1 STL概述 + 2 OOPvsGP.md","bulletin":false}`);export{r as comp,d as data};