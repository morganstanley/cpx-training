"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[2862],{3126:function(n,e,a){a.r(e),a.d(e,{Head:function(){return h},default:function(){return k}});var t=a(8453),s=a(6540);function o(n){const e=Object.assign({h3:"h3",a:"a",span:"span",p:"p",em:"em",h4:"h4",ul:"ul",li:"li"},(0,t.RP)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.h3,{id:"loops",style:{position:"relative"}},s.createElement(e.a,{href:"#loops","aria-label":"loops permalink",className:"anchor before"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Loops"),"\n",s.createElement(e.p,null,"Now suppose instead of turning on all the LEDs at once, we’d like to turn them on one-by-one, pausing briefly in between each. At first you might think this would require 20 lines of Python code: 1 ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cp.pixel</code>'}})," plus 1 ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">time.sleep</code>'}})," for each of the 10 LEDs. Recall from Makecode we can simplify this by using loops - here is how a ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">for</code>'}})," loop can be implemented in Python:"),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n<span class="token keyword">import</span> time\n\n<span class="token comment"># Colors</span>\nBLACK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nRED <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nGREEN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.3</span>\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>BLACK<span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>cp<span class="token punctuation">.</span>pixels<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> RED\n        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">.05</span><span class="token punctuation">)</span>\n    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\n    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>cp<span class="token punctuation">.</span>pixels<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> GREEN\n        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">.05</span><span class="token punctuation">)</span>\n    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(e.h3,{id:"lists",style:{position:"relative"}},s.createElement(e.a,{href:"#lists","aria-label":"lists permalink",className:"anchor before"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Lists"),"\n",s.createElement(e.p,null,"Now what if we want to rotate through more colors than just red and green? We could add an extra 4-lines for each color… or better yet we can create a list of colors and then use a loop to iterate through colors in the list:"),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n<span class="token keyword">import</span> time\n\n<span class="token comment"># Colors</span>\nBLACK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nRED <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nPINK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span>\nORANGE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nYELLOW <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nGREEN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nCYAN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nPURPLE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nBLUE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nLIGHT_BLUE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">)</span>\nWHITE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n\ncolors <span class="token operator">=</span> <span class="token punctuation">[</span>\n    PINK<span class="token punctuation">,</span>\n    RED<span class="token punctuation">,</span>\n    ORANGE<span class="token punctuation">,</span>\n    YELLOW<span class="token punctuation">,</span>\n    GREEN<span class="token punctuation">,</span>\n    CYAN<span class="token punctuation">,</span>\n    PURPLE<span class="token punctuation">,</span>\n    BLUE<span class="token punctuation">,</span>\n    LIGHT_BLUE<span class="token punctuation">,</span>\n    WHITE\n<span class="token punctuation">]</span>\n\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.3</span>\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>BLACK<span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">for</span> color <span class="token keyword">in</span> colors<span class="token punctuation">:</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>cp<span class="token punctuation">.</span>pixels<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n            cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> color\n            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">.05</span><span class="token punctuation">)</span>\n        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(e.p,null,"Notice how there’s a loop within a loop - this is sometimes called a ",s.createElement(e.em,null,"nested loop"),", and is an extremely powerful programming construct. If we were to re-write this program without any loops it would require 10x(10x2+1)=210 lines of Python code!"),"\n",s.createElement(e.h3,{id:"built-in-functions",style:{position:"relative"}},s.createElement(e.a,{href:"#built-in-functions","aria-label":"built in functions permalink",className:"anchor before"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Built-in Functions"),"\n",s.createElement(e.p,null,"Notice the use of ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">len</code>'}})," and ",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">range</code>'}})," in the above programs - these are built-in functions. Built-in functions are handy tools built into the Python language (and other languages) that help programmers do common things."),"\n",s.createElement(e.h4,{id:"lens",style:{position:"relative"}},s.createElement(e.a,{href:"#lens","aria-label":"lens permalink",className:"anchor before"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">len(s)</code>'}})),"\n",s.createElement(e.p,null,"Return the length (the number of items) of an object. The argument may be a sequence (such as a string, bytes, tuple, list, or range) or a collection (such as a dictionary, set, or frozen set)."),"\n",s.createElement(e.h4,{id:"rangestop",style:{position:"relative"}},s.createElement(e.a,{href:"#rangestop","aria-label":"rangestop permalink",className:"anchor before"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">range(stop)</code>'}})),"\n",s.createElement(e.p,null,"Rather than being a function, range is actually an immutable sequence type, as documented in ",s.createElement(e.a,{href:"https://docs.python.org/fr/3/library/stdtypes.html#range"},"Ranges and Sequence Types — list, tuple, range"),"."),"\n",s.createElement(e.h3,{id:"challenge-problem",style:{position:"relative"}},s.createElement(e.a,{href:"#challenge-problem","aria-label":"challenge problem permalink",className:"anchor before"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Challenge Problem"),"\n",s.createElement(e.p,null,"Modify the program above to make Button A a “clear” button: when the user presses A turn off all the pixels. Allow the program to continue running, turning them back on one-by-one."),"\n",s.createElement(e.h3,{id:"references",style:{position:"relative"}},s.createElement(e.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),"\n",s.createElement(e.ul,null,"\n",s.createElement(e.li,null,"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://www.w3schools.com/python/python_for_loops.asp"},"Python: for loops")),"\n"),"\n",s.createElement(e.li,null,"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://www.w3schools.com/python/python_lists.asp"},"Python: lists")),"\n"),"\n",s.createElement(e.li,null,"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://www.w3schools.com/python/ref_func_len.asp"},"Python: len")),"\n"),"\n",s.createElement(e.li,null,"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://www.w3schools.com/python/ref_func_range.asp"},"Python: range")),"\n"),"\n",s.createElement(e.li,null,"\n",s.createElement(e.p,null,s.createElement(e.a,{href:"https://docs.python.org/fr/3/library/functions.html"},"Built-In Function Reference")),"\n"),"\n"))}var l=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.RP)(),n.components);return e?s.createElement(e,n,s.createElement(o,n)):o(n)},c=a(4810),p=a(6273),r=a(9975),u=a(8509),i=a(3562);const m=n=>{var e,a,t,o;let{children:l,data:u,pageContext:m,location:k}=n;const h=m.frontmatter.title,d=u.mdx.tableOfContents.items,f=u.mdx.fields.slug,E=(0,s.useMemo)((()=>u.allDirectory.nodes.map((n=>n.base))),[u.allDirectory.nodes]),g=(0,i.U)(f,E),b=(0,i.Z)(u.allMdx.nodes,g),[v,y]=function(n,e){const a=n.length,t=n.findIndex((n=>e.pathname.includes(n.fields.slug))),s=0!==t&&n[t-1];return[t!==a-1&&n[t+1],s]}(b,k);return s.createElement(r.A,{location:k},s.createElement("article",{className:"exercise-main content"},s.createElement(p.A,{location:k,nodes:b,toc:d}),s.createElement("div",{className:"exercise-content"},s.createElement("header",null,s.createElement("h2",null,h)),l)),s.createElement("nav",{className:"content"},s.createElement("ul",{className:"exercise-nav"},s.createElement("li",null,y&&s.createElement(c.N_,{to:y.fields.slug,rel:"prev"},"← Exercise ",null===(e=y.frontmatter)||void 0===e?void 0:e.exercise," |"," ",null===(a=y.frontmatter)||void 0===a?void 0:a.title)),s.createElement("li",null,v&&s.createElement(c.N_,{to:v.fields.slug,rel:"next"},"Exercise ",null===(t=v.frontmatter)||void 0===t?void 0:t.exercise," |"," ",null===(o=v.frontmatter)||void 0===o?void 0:o.title," →")))))};function k(n){return s.createElement(m,n,s.createElement(l,n))}const h=n=>{let{pageContext:e}=n;const a=`${e.frontmatter.title} | Level ${e.frontmatter.level} | Exercise ${e.frontmatter.exercise}`;return s.createElement(u.A,{title:a},s.createElement("meta",{name:"description",content:e.description}))}},6273:function(n,e,a){var t=a(6540),s=a(4810);const o=n=>{let{location:e,nodes:a,toc:o}=n;return a.map(((n,a)=>{const l=e.pathname.includes(n.fields.slug),c=n.frontmatter.title;return t.createElement("li",{className:l?"current":"",key:`exercise-${a}`},t.createElement(s.N_,{to:n.fields.slug},n.frontmatter.exercise," ) ",c),l&&o&&t.createElement("nav",{className:"nav exercise-content-nav"},t.createElement("ul",null,o.map(((n,e)=>t.createElement("li",{key:`toc-${e}`},t.createElement(s.N_,{to:n.url},n.title)))))))}))};e.A=n=>{let{location:e,nodes:a,toc:s}=n;const l=function(n){const e=[];return n.forEach((n=>{e.includes(n.frontmatter.level)||e.push(n.frontmatter.level)})),e}(a);return t.createElement("nav",{className:"nav exercise-nav"},l.map(((n,l)=>{const c=a.filter((e=>e.frontmatter.level===n&&!!e.frontmatter.exercise));return t.createElement("div",{key:`level-${l}`},null!==n&&t.createElement("h3",null,"Level ",n),t.createElement("ul",null,t.createElement(o,{location:e,nodes:c,toc:s})))})))}},8509:function(n,e,a){var t=a(6540),s=a(4810);e.A=function(n){let{title:e,children:a}=n;const o=(0,s.GR)("3103987098");return t.createElement(t.Fragment,null,t.createElement("title",null,e," | ",o.site.siteMetadata.title),a)}},7203:function(n,e,a){var t=a(6540);e.A=function(n){let{title:e,subtitle:a}=n;const s=`hero hero-${e.split(" ").join("-").toLowerCase()}`;return t.createElement("article",{className:s},t.createElement("div",{className:"pane"},t.createElement("header",{className:"content"},t.createElement("h2",null,t.createElement("span",{className:"cpx-title"},e))),t.createElement("section",{className:"content"},t.createElement("span",{className:"cpx-title"},a))))}},9975:function(n,e,a){a.d(e,{A:function(){return i}});var t=a(6540),s=a(8453);var o=()=>t.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",t.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),l=a(4810);var c=n=>{let{location:e}=n;const a={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return t.createElement("div",{className:"content"},t.createElement("h1",null,t.createElement(l.N_,{className:"logo-link",to:"/"},"Makerspace")),t.createElement("div",{className:"header-nav"},t.createElement("ul",null,Object.keys(a).map((function(n){const s=a[n],o=s===e.pathname?"nav-link-current":"nav-link";return t.createElement("li",{key:n},t.createElement(l.N_,{className:o,to:s},n))})))))};function p(n){let{term:e,definition:a}=n;return t.createElement("div",null,t.createElement("dt",null,e),t.createElement("dd",null,a))}var r=function(n){let{name:e,computerType:a,mpType:s,language:o}=n;return t.createElement("div",{className:"summary-card"},t.createElement("h3",null,e),t.createElement("dl",null,a&&t.createElement(p,{term:"Computer",definition:a}),s&&t.createElement(p,{term:"Microprocessor",definition:s}),o&&t.createElement(p,{term:"Language",definition:o})))};const u={Hero:a(7203).A,Link:l.N_,SummaryCard:r,Translations:function(){const n=(0,l.GR)("2398385559").allDirectory.nodes.map((n=>n.base));return t.createElement("ul",null,n.map((n=>{const e=`/exercises/${n}/`;return t.createElement("li",null,t.createElement(l.N_,{to:e},n))})))}};var i=function(n){let{location:e,children:a}=n;return t.createElement("div",{className:"main"},t.createElement("header",{className:"header-main"},t.createElement(c,{location:e})),t.createElement("main",{className:"body-main"},t.createElement(s.xA,{components:u},a)),t.createElement("footer",{className:"footer-main"},t.createElement(o,null)))}},3562:function(n,e,a){function t(n,e){return n.filter((n=>n.fields.slug.includes(`/${e}/`)))}function s(n,e){let a;const t=n.split("/");return e.forEach((n=>{t.includes(n)&&(a=n)})),a}a.d(e,{U:function(){return s},Z:function(){return t}})},8453:function(n,e,a){a.d(e,{RP:function(){return o},xA:function(){return c}});var t=a(6540);const s=t.createContext({});function o(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function c({components:n,children:e,disableParentContext:a}){let c;return c=a?"function"==typeof n?n({}):n||l:o(n),t.createElement(s.Provider,{value:c},e)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-fr-ca-circuitpython-robotics-e-7-index-md-a7d665ffe0046620928d.js.map