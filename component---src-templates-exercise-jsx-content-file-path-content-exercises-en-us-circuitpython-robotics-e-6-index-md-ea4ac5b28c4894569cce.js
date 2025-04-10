"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[1858],{4655:function(n,a,s){s.r(a),s.d(a,{Head:function(){return h},default:function(){return m}});var e=s(8453),t=s(6540);function p(n){const a=Object.assign({p:"p",h3:"h3",a:"a",span:"span",ul:"ul",li:"li"},(0,e.RP)(),n.components);return t.createElement(t.Fragment,null,t.createElement(a.p,null,"In this lesson, we are going to learn about variables and how we can use them to store information in order to use it again later."),"\n",t.createElement(a.p,null,"Recall that using variables in Makecode involves clicking “Make a Variable”, typing in the name of the variable you want to create, and then dragging the blocks into your code. Things are much easier in Python - we just type the name of the variable and start using it!"),"\n",t.createElement(a.h3,{id:"color-variables",style:{position:"relative"}},t.createElement(a.a,{href:"#color-variables","aria-label":"color variables permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Color Variables"),"\n",t.createElement(a.p,null,t.createElement(a.a,{href:"../E2"},"From exercise 2"),", we ran the following program:"),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.3</span>\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n\n    <span class="token comment"># notice how these lines are similar</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>\n\n    <span class="token comment"># the [] with a number determines which light to turn on</span>\n    <span class="token comment"># and the numbers in () deterine the color!</span>\n    <span class="token comment"># It says how much (red, green, blue) we want.</span>\n    <span class="token comment"># Try changing the numbers!</span>\n\n    <span class="token comment"># this line turns on the lights!</span></code></pre></div>'}}),"\n",t.createElement(a.p,null,"What do those numbers mean? How can we make this more readable?"),"\n",t.createElement(a.p,null,"Make a list of color variables by color name."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n\n<span class="token comment"># Colors</span>\nBLACK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nRED <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nPINK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span>\nORANGE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nYELLOW <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nGREEN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nCYAN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nPURPLE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nBLUE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nLIGHT_BLUE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">)</span>\nWHITE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.3</span>\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>BLACK<span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> RED\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> ORANGE\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> GREEN\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> CYAN\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> PURPLE\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> BLUE\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> WHITE\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> YELLOW\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> PINK\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> LIGHT_BLUE</code></pre></div>'}}),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,"a variable is used to store data to be used by the program"),"\n",t.createElement(a.li,null,"this data can be a number, a string, a Boolean, a list or some other data type"),"\n",t.createElement(a.li,null,"every variable has a name which can consist of letters, numbers, and the underscore character (_)."),"\n",t.createElement(a.li,null,"no other type of characters can be used to create the variable name and the variable may NOT start with a number."),"\n",t.createElement(a.li,null,"the equal sign = is used to assign a value to a variable."),"\n",t.createElement(a.li,null,"that assignment can be from a fixed value or taken from another existing variable"),"\n",t.createElement(a.li,null,"it can also be used to change the value of a variable from one value to another after the initial assignment is made"),"\n"),"\n",t.createElement(a.h3,{id:"changing-colors",style:{position:"relative"}},t.createElement(a.a,{href:"#changing-colors","aria-label":"changing colors permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Changing Colors"),"\n",t.createElement(a.p,null,"Now let’s use the buttons on the device to change the pixel colors. We do this by assigning the value of a variable based on which button is pressed, and then setting the pixel color to the value of the variable."),"\n",t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n\n<span class="token comment"># Colors</span>\nBLACK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nRED <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nGREEN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.3</span>\ncolor <span class="token operator">=</span> BLACK\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>color<span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> cp<span class="token punctuation">.</span>button_a<span class="token punctuation">:</span>\n        color <span class="token operator">=</span> RED\n    <span class="token keyword">elif</span> cp<span class="token punctuation">.</span>button_b<span class="token punctuation">:</span>\n        color <span class="token operator">=</span> GREEN\n    cp<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> color</code></pre></div>'}}),"\n",t.createElement(a.h3,{id:"challenge-problem",style:{position:"relative"}},t.createElement(a.a,{href:"#challenge-problem","aria-label":"challenge problem permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Challenge Problem"),"\n",t.createElement(a.p,null,"Modify the code so that the buttons change the color for all LEDs, not just LED 0."),"\n",t.createElement(a.h3,{id:"references",style:{position:"relative"}},t.createElement(a.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},t.createElement(a.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),"\n",t.createElement(a.ul,null,"\n",t.createElement(a.li,null,t.createElement(a.a,{href:"https://www.w3schools.com/python/python_variables.asp"},"Python: variables")),"\n"))}var o=function(n){void 0===n&&(n={});const{wrapper:a}=Object.assign({},(0,e.RP)(),n.components);return a?t.createElement(a,n,t.createElement(p,n)):p(n)},c=s(4810),l=s(6273),u=s(9975),r=s(8509),i=s(3562);const k=n=>{var a,s,e,p;let{children:o,data:r,pageContext:k,location:m}=n;const h=k.frontmatter.title,b=r.mdx.tableOfContents.items,d=r.mdx.fields.slug,E=(0,t.useMemo)((()=>r.allDirectory.nodes.map((n=>n.base))),[r.allDirectory.nodes]),f=(0,i.U)(d,E),g=(0,i.Z)(r.allMdx.nodes,f),[v,y]=function(n,a){const s=n.length,e=n.findIndex((n=>a.pathname.includes(n.fields.slug))),t=0!==e&&n[e-1];return[e!==s-1&&n[e+1],t]}(g,m);return t.createElement(u.A,{location:m},t.createElement("article",{className:"exercise-main content"},t.createElement(l.A,{location:m,nodes:g,toc:b}),t.createElement("div",{className:"exercise-content"},t.createElement("header",null,t.createElement("h2",null,h)),o)),t.createElement("nav",{className:"content"},t.createElement("ul",{className:"exercise-nav"},t.createElement("li",null,y&&t.createElement(c.N_,{to:y.fields.slug,rel:"prev"},"← Exercise ",null===(a=y.frontmatter)||void 0===a?void 0:a.exercise," |"," ",null===(s=y.frontmatter)||void 0===s?void 0:s.title)),t.createElement("li",null,v&&t.createElement(c.N_,{to:v.fields.slug,rel:"next"},"Exercise ",null===(e=v.frontmatter)||void 0===e?void 0:e.exercise," |"," ",null===(p=v.frontmatter)||void 0===p?void 0:p.title," →")))))};function m(n){return t.createElement(k,n,t.createElement(o,n))}const h=n=>{let{pageContext:a}=n;const s=`${a.frontmatter.title} | Level ${a.frontmatter.level} | Exercise ${a.frontmatter.exercise}`;return t.createElement(r.A,{title:s},t.createElement("meta",{name:"description",content:a.description}))}},6273:function(n,a,s){var e=s(6540),t=s(4810);const p=n=>{let{location:a,nodes:s,toc:p}=n;return s.map(((n,s)=>{const o=a.pathname.includes(n.fields.slug),c=n.frontmatter.title;return e.createElement("li",{className:o?"current":"",key:`exercise-${s}`},e.createElement(t.N_,{to:n.fields.slug},n.frontmatter.exercise," ) ",c),o&&p&&e.createElement("nav",{className:"nav exercise-content-nav"},e.createElement("ul",null,p.map(((n,a)=>e.createElement("li",{key:`toc-${a}`},e.createElement(t.N_,{to:n.url},n.title)))))))}))};a.A=n=>{let{location:a,nodes:s,toc:t}=n;const o=function(n){const a=[];return n.forEach((n=>{a.includes(n.frontmatter.level)||a.push(n.frontmatter.level)})),a}(s);return e.createElement("nav",{className:"nav exercise-nav"},o.map(((n,o)=>{const c=s.filter((a=>a.frontmatter.level===n&&!!a.frontmatter.exercise));return e.createElement("div",{key:`level-${o}`},null!==n&&e.createElement("h3",null,"Level ",n),e.createElement("ul",null,e.createElement(p,{location:a,nodes:c,toc:t})))})))}},8509:function(n,a,s){var e=s(6540),t=s(4810);a.A=function(n){let{title:a,children:s}=n;const p=(0,t.GR)("3103987098");return e.createElement(e.Fragment,null,e.createElement("title",null,a," | ",p.site.siteMetadata.title),s)}},7203:function(n,a,s){var e=s(6540);a.A=function(n){let{title:a,subtitle:s}=n;const t=`hero hero-${a.split(" ").join("-").toLowerCase()}`;return e.createElement("article",{className:t},e.createElement("div",{className:"pane"},e.createElement("header",{className:"content"},e.createElement("h2",null,e.createElement("span",{className:"cpx-title"},a))),e.createElement("section",{className:"content"},e.createElement("span",{className:"cpx-title"},s))))}},9975:function(n,a,s){s.d(a,{A:function(){return i}});var e=s(6540),t=s(8453);var p=()=>e.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",e.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),o=s(4810);var c=n=>{let{location:a}=n;const s={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return e.createElement("div",{className:"content"},e.createElement("h1",null,e.createElement(o.N_,{className:"logo-link",to:"/"},"Makerspace")),e.createElement("div",{className:"header-nav"},e.createElement("ul",null,Object.keys(s).map((function(n){const t=s[n],p=t===a.pathname?"nav-link-current":"nav-link";return e.createElement("li",{key:n},e.createElement(o.N_,{className:p,to:t},n))})))))};function l(n){let{term:a,definition:s}=n;return e.createElement("div",null,e.createElement("dt",null,a),e.createElement("dd",null,s))}var u=function(n){let{name:a,computerType:s,mpType:t,language:p}=n;return e.createElement("div",{className:"summary-card"},e.createElement("h3",null,a),e.createElement("dl",null,s&&e.createElement(l,{term:"Computer",definition:s}),t&&e.createElement(l,{term:"Microprocessor",definition:t}),p&&e.createElement(l,{term:"Language",definition:p})))};const r={Hero:s(7203).A,Link:o.N_,SummaryCard:u,Translations:function(){const n=(0,o.GR)("2398385559").allDirectory.nodes.map((n=>n.base));return e.createElement("ul",null,n.map((n=>{const a=`/exercises/${n}/`;return e.createElement("li",null,e.createElement(o.N_,{to:a},n))})))}};var i=function(n){let{location:a,children:s}=n;return e.createElement("div",{className:"main"},e.createElement("header",{className:"header-main"},e.createElement(c,{location:a})),e.createElement("main",{className:"body-main"},e.createElement(t.xA,{components:r},s)),e.createElement("footer",{className:"footer-main"},e.createElement(p,null)))}},3562:function(n,a,s){function e(n,a){return n.filter((n=>n.fields.slug.includes(`/${a}/`)))}function t(n,a){let s;const e=n.split("/");return a.forEach((n=>{e.includes(n)&&(s=n)})),s}s.d(a,{U:function(){return t},Z:function(){return e}})},8453:function(n,a,s){s.d(a,{RP:function(){return p},xA:function(){return c}});var e=s(6540);const t=e.createContext({});function p(n){const a=e.useContext(t);return e.useMemo((()=>"function"==typeof n?n(a):{...a,...n}),[a,n])}const o={};function c({components:n,children:a,disableParentContext:s}){let c;return c=s?"function"==typeof n?n({}):n||o:p(n),e.createElement(t.Provider,{value:c},a)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-en-us-circuitpython-robotics-e-6-index-md-ea4ac5b28c4894569cce.js.map