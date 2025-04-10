"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[8418],{8800:function(n,e,a){a.r(e),a.d(e,{Head:function(){return d},default:function(){return k}});var t=a(8453),s=a(6540);function c(n){const e=Object.assign({p:"p",strong:"strong",span:"span"},(0,t.RP)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.p,null,"Let’s explore further."),"\n",s.createElement(e.p,null,"We can do all sorts of crazy things by adding to the ",s.createElement(e.strong,null,"while loop"),"."),"\n",s.createElement(e.p,null,"Here we will tell the circuit to turn on some colorful lights."),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground<span class="token punctuation">.</span>express <span class="token keyword">import</span> cpx\n\ncpx<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.3</span>\ncpx<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n\n    <span class="token comment"># notice how these lines are similar</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>\n\n    <span class="token comment"># the [] with a number determines which light to turn on</span>\n    <span class="token comment"># and the numbers in () deterine the color!</span>\n    <span class="token comment"># It says how much (red, green, blue) we want.</span>\n    <span class="token comment"># Try changing the numbers!</span>\n\n    <span class="token comment"># this line turns on the lights!</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div>'}}))}var o=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,t.RP)(),n.components);return e?s.createElement(e,n,s.createElement(c,n)):c(n)},p=a(4810),l=a(6273),r=a(9975),u=a(8509),i=a(3562);const m=n=>{var e,a,t,c;let{children:o,data:u,pageContext:m,location:k}=n;const d=m.frontmatter.title,f=u.mdx.tableOfContents.items,E=u.mdx.fields.slug,b=(0,s.useMemo)((()=>u.allDirectory.nodes.map((n=>n.base))),[u.allDirectory.nodes]),h=(0,i.U)(E,b),x=(0,i.Z)(u.allMdx.nodes,h),[v,g]=function(n,e){const a=n.length,t=n.findIndex((n=>e.pathname.includes(n.fields.slug))),s=0!==t&&n[t-1];return[t!==a-1&&n[t+1],s]}(x,k);return s.createElement(r.A,{location:k},s.createElement("article",{className:"exercise-main content"},s.createElement(l.A,{location:k,nodes:x,toc:f}),s.createElement("div",{className:"exercise-content"},s.createElement("header",null,s.createElement("h2",null,d)),o)),s.createElement("nav",{className:"content"},s.createElement("ul",{className:"exercise-nav"},s.createElement("li",null,g&&s.createElement(p.N_,{to:g.fields.slug,rel:"prev"},"← Exercise ",null===(e=g.frontmatter)||void 0===e?void 0:e.exercise," |"," ",null===(a=g.frontmatter)||void 0===a?void 0:a.title)),s.createElement("li",null,v&&s.createElement(p.N_,{to:v.fields.slug,rel:"next"},"Exercise ",null===(t=v.frontmatter)||void 0===t?void 0:t.exercise," |"," ",null===(c=v.frontmatter)||void 0===c?void 0:c.title," →")))))};function k(n){return s.createElement(m,n,s.createElement(o,n))}const d=n=>{let{pageContext:e}=n;const a=`${e.frontmatter.title} | Level ${e.frontmatter.level} | Exercise ${e.frontmatter.exercise}`;return s.createElement(u.A,{title:a},s.createElement("meta",{name:"description",content:e.description}))}},6273:function(n,e,a){var t=a(6540),s=a(4810);const c=n=>{let{location:e,nodes:a,toc:c}=n;return a.map(((n,a)=>{const o=e.pathname.includes(n.fields.slug),p=n.frontmatter.title;return t.createElement("li",{className:o?"current":"",key:`exercise-${a}`},t.createElement(s.N_,{to:n.fields.slug},n.frontmatter.exercise," ) ",p),o&&c&&t.createElement("nav",{className:"nav exercise-content-nav"},t.createElement("ul",null,c.map(((n,e)=>t.createElement("li",{key:`toc-${e}`},t.createElement(s.N_,{to:n.url},n.title)))))))}))};e.A=n=>{let{location:e,nodes:a,toc:s}=n;const o=function(n){const e=[];return n.forEach((n=>{e.includes(n.frontmatter.level)||e.push(n.frontmatter.level)})),e}(a);return t.createElement("nav",{className:"nav exercise-nav"},o.map(((n,o)=>{const p=a.filter((e=>e.frontmatter.level===n&&!!e.frontmatter.exercise));return t.createElement("div",{key:`level-${o}`},null!==n&&t.createElement("h3",null,"Level ",n),t.createElement("ul",null,t.createElement(c,{location:e,nodes:p,toc:s})))})))}},8509:function(n,e,a){var t=a(6540),s=a(4810);e.A=function(n){let{title:e,children:a}=n;const c=(0,s.GR)("3103987098");return t.createElement(t.Fragment,null,t.createElement("title",null,e," | ",c.site.siteMetadata.title),a)}},7203:function(n,e,a){var t=a(6540);e.A=function(n){let{title:e,subtitle:a}=n;const s=`hero hero-${e.split(" ").join("-").toLowerCase()}`;return t.createElement("article",{className:s},t.createElement("div",{className:"pane"},t.createElement("header",{className:"content"},t.createElement("h2",null,t.createElement("span",{className:"cpx-title"},e))),t.createElement("section",{className:"content"},t.createElement("span",{className:"cpx-title"},a))))}},9975:function(n,e,a){a.d(e,{A:function(){return i}});var t=a(6540),s=a(8453);var c=()=>t.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",t.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),o=a(4810);var p=n=>{let{location:e}=n;const a={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return t.createElement("div",{className:"content"},t.createElement("h1",null,t.createElement(o.N_,{className:"logo-link",to:"/"},"Makerspace")),t.createElement("div",{className:"header-nav"},t.createElement("ul",null,Object.keys(a).map((function(n){const s=a[n],c=s===e.pathname?"nav-link-current":"nav-link";return t.createElement("li",{key:n},t.createElement(o.N_,{className:c,to:s},n))})))))};function l(n){let{term:e,definition:a}=n;return t.createElement("div",null,t.createElement("dt",null,e),t.createElement("dd",null,a))}var r=function(n){let{name:e,computerType:a,mpType:s,language:c}=n;return t.createElement("div",{className:"summary-card"},t.createElement("h3",null,e),t.createElement("dl",null,a&&t.createElement(l,{term:"Computer",definition:a}),s&&t.createElement(l,{term:"Microprocessor",definition:s}),c&&t.createElement(l,{term:"Language",definition:c})))};const u={Hero:a(7203).A,Link:o.N_,SummaryCard:r,Translations:function(){const n=(0,o.GR)("2398385559").allDirectory.nodes.map((n=>n.base));return t.createElement("ul",null,n.map((n=>{const e=`/exercises/${n}/`;return t.createElement("li",null,t.createElement(o.N_,{to:e},n))})))}};var i=function(n){let{location:e,children:a}=n;return t.createElement("div",{className:"main"},t.createElement("header",{className:"header-main"},t.createElement(p,{location:e})),t.createElement("main",{className:"body-main"},t.createElement(s.xA,{components:u},a)),t.createElement("footer",{className:"footer-main"},t.createElement(c,null)))}},3562:function(n,e,a){function t(n,e){return n.filter((n=>n.fields.slug.includes(`/${e}/`)))}function s(n,e){let a;const t=n.split("/");return e.forEach((n=>{t.includes(n)&&(a=n)})),a}a.d(e,{U:function(){return s},Z:function(){return t}})},8453:function(n,e,a){a.d(e,{RP:function(){return c},xA:function(){return p}});var t=a(6540);const s=t.createContext({});function c(n){const e=t.useContext(s);return t.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function p({components:n,children:e,disableParentContext:a}){let p;return p=a?"function"==typeof n?n({}):n||o:c(n),t.createElement(s.Provider,{value:p},e)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-en-us-circuitpython-level-1-l-1-e-2-index-md-7fd2a5d3b05de83dc311.js.map