"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[1358],{3719:function(n,e,t){t.r(e),t.d(e,{Head:function(){return d},default:function(){return k}});var a=t(8453),s=t(6540);function c(n){const e=Object.assign({p:"p",span:"span"},(0,a.RP)(),n.components);return s.createElement(s.Fragment,null,s.createElement(e.p,null,"Le CPX est équipé d’un accéléromètre et peut donc indiquer quand il bouge. Voyons ce que nous pouvons faire avec ça."),"\n",s.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground<span class="token punctuation">.</span>express <span class="token keyword">import</span> cpx\n<span class="token keyword">import</span> time\n\n<span class="token comment"># La boucle principale reçoit l\'accéleration sur les axes x, y, z, affiche les valeurs et allume les</span>\n<span class="token comment"># lumières proportionnellement à l\'accéleration sur chaque axe (rouge : axe x, vert : axe y, bleu : axe z).</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">if</span> cpx<span class="token punctuation">.</span>switch<span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Interrupteur à OFF!"</span><span class="token punctuation">)</span>\n        cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">continue</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        R <span class="token operator">=</span> <span class="token number">0</span>\n        G <span class="token operator">=</span> <span class="token number">0</span>\n        B <span class="token operator">=</span> <span class="token number">0</span>\n        x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z <span class="token operator">=</span> cpx<span class="token punctuation">.</span>acceleration\n\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">,</span> z<span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n        <span class="token keyword">if</span> x<span class="token punctuation">:</span>\n            R <span class="token operator">=</span> R <span class="token operator">+</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">if</span> y<span class="token punctuation">:</span>\n            G <span class="token operator">=</span> G <span class="token operator">+</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">if</span> z<span class="token punctuation">:</span>\n            B <span class="token operator">=</span> B <span class="token operator">+</span> <span class="token builtin">abs</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">(</span>z<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span>R<span class="token punctuation">,</span> G<span class="token punctuation">,</span> B<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.25</span><span class="token punctuation">)</span></code></pre></div>'}}))}var l=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,a.RP)(),n.components);return e?s.createElement(e,n,s.createElement(c,n)):c(n)},o=t(4810),r=t(6273),p=t(9975),u=t(8509),i=t(3562);const m=n=>{var e,t,a,c;let{children:l,data:u,pageContext:m,location:k}=n;const d=m.frontmatter.title,f=u.mdx.tableOfContents.items,E=u.mdx.fields.slug,v=(0,s.useMemo)((()=>u.allDirectory.nodes.map((n=>n.base))),[u.allDirectory.nodes]),x=(0,i.U)(E,v),h=(0,i.Z)(u.allMdx.nodes,x),[y,g]=function(n,e){const t=n.length,a=n.findIndex((n=>e.pathname.includes(n.fields.slug))),s=0!==a&&n[a-1];return[a!==t-1&&n[a+1],s]}(h,k);return s.createElement(p.A,{location:k},s.createElement("article",{className:"exercise-main content"},s.createElement(r.A,{location:k,nodes:h,toc:f}),s.createElement("div",{className:"exercise-content"},s.createElement("header",null,s.createElement("h2",null,d)),l)),s.createElement("nav",{className:"content"},s.createElement("ul",{className:"exercise-nav"},s.createElement("li",null,g&&s.createElement(o.N_,{to:g.fields.slug,rel:"prev"},"← Exercise ",null===(e=g.frontmatter)||void 0===e?void 0:e.exercise," |"," ",null===(t=g.frontmatter)||void 0===t?void 0:t.title)),s.createElement("li",null,y&&s.createElement(o.N_,{to:y.fields.slug,rel:"next"},"Exercise ",null===(a=y.frontmatter)||void 0===a?void 0:a.exercise," |"," ",null===(c=y.frontmatter)||void 0===c?void 0:c.title," →")))))};function k(n){return s.createElement(m,n,s.createElement(l,n))}const d=n=>{let{pageContext:e}=n;const t=`${e.frontmatter.title} | Level ${e.frontmatter.level} | Exercise ${e.frontmatter.exercise}`;return s.createElement(u.A,{title:t},s.createElement("meta",{name:"description",content:e.description}))}},6273:function(n,e,t){var a=t(6540),s=t(4810);const c=n=>{let{location:e,nodes:t,toc:c}=n;return t.map(((n,t)=>{const l=e.pathname.includes(n.fields.slug),o=n.frontmatter.title;return a.createElement("li",{className:l?"current":"",key:`exercise-${t}`},a.createElement(s.N_,{to:n.fields.slug},n.frontmatter.exercise," ) ",o),l&&c&&a.createElement("nav",{className:"nav exercise-content-nav"},a.createElement("ul",null,c.map(((n,e)=>a.createElement("li",{key:`toc-${e}`},a.createElement(s.N_,{to:n.url},n.title)))))))}))};e.A=n=>{let{location:e,nodes:t,toc:s}=n;const l=function(n){const e=[];return n.forEach((n=>{e.includes(n.frontmatter.level)||e.push(n.frontmatter.level)})),e}(t);return a.createElement("nav",{className:"nav exercise-nav"},l.map(((n,l)=>{const o=t.filter((e=>e.frontmatter.level===n&&!!e.frontmatter.exercise));return a.createElement("div",{key:`level-${l}`},null!==n&&a.createElement("h3",null,"Level ",n),a.createElement("ul",null,a.createElement(c,{location:e,nodes:o,toc:s})))})))}},8509:function(n,e,t){var a=t(6540),s=t(4810);e.A=function(n){let{title:e,children:t}=n;const c=(0,s.GR)("3103987098");return a.createElement(a.Fragment,null,a.createElement("title",null,e," | ",c.site.siteMetadata.title),t)}},7203:function(n,e,t){var a=t(6540);e.A=function(n){let{title:e,subtitle:t}=n;const s=`hero hero-${e.split(" ").join("-").toLowerCase()}`;return a.createElement("article",{className:s},a.createElement("div",{className:"pane"},a.createElement("header",{className:"content"},a.createElement("h2",null,a.createElement("span",{className:"cpx-title"},e))),a.createElement("section",{className:"content"},a.createElement("span",{className:"cpx-title"},t))))}},9975:function(n,e,t){t.d(e,{A:function(){return i}});var a=t(6540),s=t(8453);var c=()=>a.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",a.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),l=t(4810);var o=n=>{let{location:e}=n;const t={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return a.createElement("div",{className:"content"},a.createElement("h1",null,a.createElement(l.N_,{className:"logo-link",to:"/"},"Makerspace")),a.createElement("div",{className:"header-nav"},a.createElement("ul",null,Object.keys(t).map((function(n){const s=t[n],c=s===e.pathname?"nav-link-current":"nav-link";return a.createElement("li",{key:n},a.createElement(l.N_,{className:c,to:s},n))})))))};function r(n){let{term:e,definition:t}=n;return a.createElement("div",null,a.createElement("dt",null,e),a.createElement("dd",null,t))}var p=function(n){let{name:e,computerType:t,mpType:s,language:c}=n;return a.createElement("div",{className:"summary-card"},a.createElement("h3",null,e),a.createElement("dl",null,t&&a.createElement(r,{term:"Computer",definition:t}),s&&a.createElement(r,{term:"Microprocessor",definition:s}),c&&a.createElement(r,{term:"Language",definition:c})))};const u={Hero:t(7203).A,Link:l.N_,SummaryCard:p,Translations:function(){const n=(0,l.GR)("2398385559").allDirectory.nodes.map((n=>n.base));return a.createElement("ul",null,n.map((n=>{const e=`/exercises/${n}/`;return a.createElement("li",null,a.createElement(l.N_,{to:e},n))})))}};var i=function(n){let{location:e,children:t}=n;return a.createElement("div",{className:"main"},a.createElement("header",{className:"header-main"},a.createElement(o,{location:e})),a.createElement("main",{className:"body-main"},a.createElement(s.xA,{components:u},t)),a.createElement("footer",{className:"footer-main"},a.createElement(c,null)))}},3562:function(n,e,t){function a(n,e){return n.filter((n=>n.fields.slug.includes(`/${e}/`)))}function s(n,e){let t;const a=n.split("/");return e.forEach((n=>{a.includes(n)&&(t=n)})),t}t.d(e,{U:function(){return s},Z:function(){return a}})},8453:function(n,e,t){t.d(e,{RP:function(){return c},xA:function(){return o}});var a=t(6540);const s=a.createContext({});function c(n){const e=a.useContext(s);return a.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const l={};function o({components:n,children:e,disableParentContext:t}){let o;return o=t?"function"==typeof n?n({}):n||l:c(n),a.createElement(s.Provider,{value:o},e)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-fr-ca-circuitpython-level-1-l-1-e-5-index-md-a06432d79565b873e578.js.map