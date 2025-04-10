"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[3319],{5444:function(n,a,s){s.r(a),s.d(a,{Head:function(){return d},default:function(){return m}});var e=s(8453),t=s(6540);function p(n){const a=Object.assign({p:"p",ul:"ul",li:"li",span:"span",h3:"h3",a:"a",strong:"strong"},(0,e.RP)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"Up to this point we’ve made use of many functions in our programs: some of them are Python built-in functions:"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">abs</code>'}})," - return absolute value of a number"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">int</code>'}})," - return closest integer (rounded down) of a number"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">isinstance</code>'}})," - return True if variable is of the given data type (otherwise False)"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">len</code>'}})," - return length (number of items) of an object (such as a list)"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">print</code>'}})," - output string to the Serial console"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">range</code>'}})," - return a sequence of integers"),"\n"),"\n",t.createElement(a.p,null,"Some are provided by Python’s standard library:"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">time.sleep</code>'}})," - suspend execution for the given number of seconds"),"\n"),"\n",t.createElement(a.p,null,"Others are provided by Adafruit modules:"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cp.pixels.fill</code>'}})," - color all pixels the given color"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cp.play_tone</code>'}})," - produce a tone using the speaker"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cp.stop_tone</code>'}})," - stop producing the tone"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">ble.start_advertising</code>'}})," - start advertising Bluetooth availability"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">ble.stop_advertising</code>'}})," - stop advertising Bluetooth availability"),"\n",t.createElement(a.li,null,t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">Packet.from_stream</code>'}})," - read the next packet from the incoming stream"),"\n"),"\n",t.createElement(a.h3,{id:"defining-your-own-functions",style:{position:"relative"}},t.createElement(a.a,{href:"#defining-your-own-functions","aria-label":"defining your own functions permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Defining Your Own Functions"),"\n",t.createElement(a.p,null,"Recall how we used loops and lists to simplify our code when we needed to perform a task multiple times. Functions are another technique to simplify our code and prevent us from having to rewrite the same code in multiple places."),"\n",t.createElement(a.p,null,"Let’s go back to the Touch/Serial program from Exercise 4:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> cp<span class="token punctuation">.</span>switch<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Slide switch off!"</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>stop_tone<span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">continue</span>\n    <span class="token keyword">if</span> cp<span class="token punctuation">.</span>touch_A4<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Touched A4!\'</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>start_tone<span class="token punctuation">(</span><span class="token number">262</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A5<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Touched A5!\'</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>start_tone<span class="token punctuation">(</span><span class="token number">294</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A6<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Touched A6!\'</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>start_tone<span class="token punctuation">(</span><span class="token number">330</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A1<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Touched A1!\'</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>start_tone<span class="token punctuation">(</span><span class="token number">392</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A2 <span class="token keyword">and</span> <span class="token keyword">not</span> cp<span class="token punctuation">.</span>touch_A3<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Touched A2!\'</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>start_tone<span class="token punctuation">(</span><span class="token number">440</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A3 <span class="token keyword">and</span> <span class="token keyword">not</span> cp<span class="token punctuation">.</span>touch_A2<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Touched A3!\'</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>start_tone<span class="token punctuation">(</span><span class="token number">494</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A2 <span class="token keyword">and</span> cp<span class="token punctuation">.</span>touch_A3<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Touched "8"!\'</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>start_tone<span class="token punctuation">(</span><span class="token number">523</span><span class="token punctuation">)</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>stop_tone<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"Note that each time a touchpad is touched, the same 3 actions are taken: print to serial console, color pixels, and play a tone. This is a perfect opportunity to simplify our code by defining a function:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n\n<span class="token keyword">def</span> <span class="token function">my_function</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> color<span class="token punctuation">,</span> tone<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>color<span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>start_tone<span class="token punctuation">(</span>tone<span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> cp<span class="token punctuation">.</span>switch<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Slide switch off!"</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>stop_tone<span class="token punctuation">(</span><span class="token punctuation">)</span>\n        <span class="token keyword">continue</span>\n    <span class="token keyword">if</span> cp<span class="token punctuation">.</span>touch_A4<span class="token punctuation">:</span>\n        my_function<span class="token punctuation">(</span><span class="token string">\'Touched A4!\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">262</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A5<span class="token punctuation">:</span>\n        my_function<span class="token punctuation">(</span><span class="token string">\'Touched A5!\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">294</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A6<span class="token punctuation">:</span>\n        my_function<span class="token punctuation">(</span><span class="token string">\'Touched A6!\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">330</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A1<span class="token punctuation">:</span>\n        my_function<span class="token punctuation">(</span><span class="token string">\'Touched A1!\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">392</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A2 <span class="token keyword">and</span> <span class="token keyword">not</span> cp<span class="token punctuation">.</span>touch_A3<span class="token punctuation">:</span>\n        my_function<span class="token punctuation">(</span><span class="token string">\'Touched A2!\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">440</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A3 <span class="token keyword">and</span> <span class="token keyword">not</span> cp<span class="token punctuation">.</span>touch_A2<span class="token punctuation">:</span>\n        my_function<span class="token punctuation">(</span><span class="token string">\'Touched A3!\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">494</span><span class="token punctuation">)</span>\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>touch_A2 <span class="token keyword">and</span> cp<span class="token punctuation">.</span>touch_A3<span class="token punctuation">:</span>\n        my_function<span class="token punctuation">(</span><span class="token string">\'Touched "8"!\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">15</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">15</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">523</span><span class="token punctuation">)</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cp<span class="token punctuation">.</span>stop_tone<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Defining a function"),": ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">def</code>'}})," keyword followed by the name of the function, parentheses, and a colon"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"The body of the function, or the code for what the function will actually do, comes after the colon on an ",t.createElement(a.strong,null,"indented")," line"),"\n"),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Calling a function"),": writing the function name followed by parentheses, for example: ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">ble.start_advertising()</code>'}})),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Function parameters"),":"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Sometimes functions require input to provide data for their code. This input is defined using parameters."),"\n",t.createElement(a.li,null,"Parameters are variables that are defined in the function definition."),"\n",t.createElement(a.li,null,"They are assigned the values which were passed as arguments when the function was called, elsewhere in the code."),"\n",t.createElement(a.li,null,"For example ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">my_function</code>'}})," has 3 parameters: ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">message</code>'}}),", ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">color</code>'}}),", and ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">tone</code>'}}),"."),"\n"),"\n",t.createElement(a.p,null,t.createElement(a.strong,null,"Function arguments"),":"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"Parameters in python are variables — placeholders for the actual values the function needs."),"\n",t.createElement(a.li,null,"When the function is called, these values are passed in as arguments."),"\n",t.createElement(a.li,null,"For example: ",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:"<code class=\"language-text\">my_function('Touched A4!', (15, 0, 0), 262)</code>"}})),"\n"),"\n",t.createElement(a.h3,{id:"challenge-problem",style:{position:"relative"}},t.createElement(a.a,{href:"#challenge-problem","aria-label":"challenge problem permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Challenge Problem"),"\n",t.createElement(a.p,null,"Combine the code in Exercise 8 (Bluetooth) and Exercise 9 (Accelerometer) so that the Bluefruit device can accept both packets of type ColorPacket (from the Color Picker screen) and packets of type AccelerometerPacket (from the Accelerometer controller screen), and color the pixels accordingly. Use functions to simplify your code."))}var o=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.RP)(),n.components);return a?t.createElement(a,n,t.createElement(p,n)):p(n)},c=s(4810),l=s(6273),u=s(9975),r=s(8509),i=s(3562);const k=n=>{var a,s,e,p;let{children:o,data:r,pageContext:k,location:m}=n;const d=k.frontmatter.title,h=r.mdx.tableOfContents.items,f=r.mdx.fields.slug,g=(0,t.useMemo)((()=>r.allDirectory.nodes.map((n=>n.base))),[r.allDirectory.nodes]),E=(0,i.U)(f,g),y=(0,i.Z)(r.allMdx.nodes,E),[b,_]=function(n,a){const s=n.length,e=n.findIndex((n=>a.pathname.includes(n.fields.slug))),t=0!==e&&n[e-1];return[e!==s-1&&n[e+1],t]}(y,m);return t.createElement(u.A,{location:m},t.createElement("article",{className:"exercise-main content"},t.createElement(l.A,{location:m,nodes:y,toc:h}),t.createElement("div",{className:"exercise-content"},t.createElement("header",null,t.createElement("h2",null,d)),o)),t.createElement("nav",{className:"content"},t.createElement("ul",{className:"exercise-nav"},t.createElement("li",null,_&&t.createElement(c.N_,{to:_.fields.slug,rel:"prev"},"← Exercise ",null===(a=_.frontmatter)||void 0===a?void 0:a.exercise," |"," ",null===(s=_.frontmatter)||void 0===s?void 0:s.title)),t.createElement("li",null,b&&t.createElement(c.N_,{to:b.fields.slug,rel:"next"},"Exercise ",null===(e=b.frontmatter)||void 0===e?void 0:e.exercise," |"," ",null===(p=b.frontmatter)||void 0===p?void 0:p.title," →")))))};function m(n){return t.createElement(k,n,t.createElement(o,n))}const d=n=>{let{pageContext:a}=n;const s=`${a.frontmatter.title} | Level ${a.frontmatter.level} | Exercise ${a.frontmatter.exercise}`;return t.createElement(r.A,{title:s},t.createElement("meta",{name:"description",content:a.description}))}},6273:function(n,a,s){var e=s(6540),t=s(4810);const p=n=>{let{location:a,nodes:s,toc:p}=n;return s.map(((n,s)=>{const o=a.pathname.includes(n.fields.slug),c=n.frontmatter.title;return e.createElement("li",{className:o?"current":"",key:`exercise-${s}`},e.createElement(t.N_,{to:n.fields.slug},n.frontmatter.exercise," ) ",c),o&&p&&e.createElement("nav",{className:"nav exercise-content-nav"},e.createElement("ul",null,p.map(((n,a)=>e.createElement("li",{key:`toc-${a}`},e.createElement(t.N_,{to:n.url},n.title)))))))}))};a.A=n=>{let{location:a,nodes:s,toc:t}=n;const o=function(n){const a=[];return n.forEach((n=>{a.includes(n.frontmatter.level)||a.push(n.frontmatter.level)})),a}(s);return e.createElement("nav",{className:"nav exercise-nav"},o.map(((n,o)=>{const c=s.filter((a=>a.frontmatter.level===n&&!!a.frontmatter.exercise));return e.createElement("div",{key:`level-${o}`},null!==n&&e.createElement("h3",null,"Level ",n),e.createElement("ul",null,e.createElement(p,{location:a,nodes:c,toc:t})))})))}},8509:function(n,a,s){var e=s(6540),t=s(4810);a.A=function(n){let{title:a,children:s}=n;const p=(0,t.GR)("3103987098");return e.createElement(e.Fragment,null,e.createElement("title",null,a," | ",p.site.siteMetadata.title),s)}},7203:function(n,a,s){var e=s(6540);a.A=function(n){let{title:a,subtitle:s}=n;const t=`hero hero-${a.split(" ").join("-").toLowerCase()}`;return e.createElement("article",{className:t},e.createElement("div",{className:"pane"},e.createElement("header",{className:"content"},e.createElement("h2",null,e.createElement("span",{className:"cpx-title"},a))),e.createElement("section",{className:"content"},e.createElement("span",{className:"cpx-title"},s))))}},9975:function(n,a,s){s.d(a,{A:function(){return i}});var e=s(6540),t=s(8453);var p=()=>e.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",e.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),o=s(4810);var c=n=>{let{location:a}=n;const s={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return e.createElement("div",{className:"content"},e.createElement("h1",null,e.createElement(o.N_,{className:"logo-link",to:"/"},"Makerspace")),e.createElement("div",{className:"header-nav"},e.createElement("ul",null,Object.keys(s).map((function(n){const t=s[n],p=t===a.pathname?"nav-link-current":"nav-link";return e.createElement("li",{key:n},e.createElement(o.N_,{className:p,to:t},n))})))))};function l(n){let{term:a,definition:s}=n;return e.createElement("div",null,e.createElement("dt",null,a),e.createElement("dd",null,s))}var u=function(n){let{name:a,computerType:s,mpType:t,language:p}=n;return e.createElement("div",{className:"summary-card"},e.createElement("h3",null,a),e.createElement("dl",null,s&&e.createElement(l,{term:"Computer",definition:s}),t&&e.createElement(l,{term:"Microprocessor",definition:t}),p&&e.createElement(l,{term:"Language",definition:p})))};const r={Hero:s(7203).A,Link:o.N_,SummaryCard:u,Translations:function(){const n=(0,o.GR)("2398385559").allDirectory.nodes.map((n=>n.base));return e.createElement("ul",null,n.map((n=>{const a=`/exercises/${n}/`;return e.createElement("li",null,e.createElement(o.N_,{to:a},n))})))}};var i=function(n){let{location:a,children:s}=n;return e.createElement("div",{className:"main"},e.createElement("header",{className:"header-main"},e.createElement(c,{location:a})),e.createElement("main",{className:"body-main"},e.createElement(t.xA,{components:r},s)),e.createElement("footer",{className:"footer-main"},e.createElement(p,null)))}},3562:function(n,a,s){function e(n,a){return n.filter((n=>n.fields.slug.includes(`/${a}/`)))}function t(n,a){let s;const e=n.split("/");return a.forEach((n=>{e.includes(n)&&(s=n)})),s}s.d(a,{U:function(){return t},Z:function(){return e}})},8453:function(n,a,s){s.d(a,{RP:function(){return p},xA:function(){return c}});var e=s(6540);const t=e.createContext({});function p(n){const a=e.useContext(t);return e.useMemo((()=>"function"==typeof n?n(a):{...a,...n}),[a,n])}const o={};function c({components:n,children:a,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||o:p(n),e.createElement(t.Provider,{value:c},a)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-en-us-circuitpython-robotics-e-10-index-md-7b727d86d8a9f2d1763b.js.map