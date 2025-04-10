"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[7427],{7533:function(n,e,a){a.r(e),a.d(e,{Head:function(){return d},default:function(){return k}});var s=a(8453),t=a(6540);function c(n){const e=Object.assign({p:"p",strong:"strong",span:"span"},(0,s.RP)(),n.components);return t.createElement(t.Fragment,null,t.createElement(e.p,null,"Continuons à explorer un peu plus loin."),"\n",t.createElement(e.p,null,"Nous pouvons faire toutes sorte de choses amusantes en ajoutant du code a la ",t.createElement(e.strong,null,"boucle while")," (tant que)"),"\n",t.createElement(e.p,null,"Ici nous allons indiquer au circuit d’allumer des lumières avec diverses couleurs."),"\n",t.createElement(e.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground<span class="token punctuation">.</span>express <span class="token keyword">import</span> cpx\n\ncpx<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.3</span>\ncpx<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n\n    <span class="token comment"># remarque comme ces lignes sont similaires</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">127</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">130</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">60</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span>\n\n    <span class="token comment"># les [] avec un chiffre déterminent quelle lumière allumer</span>\n    <span class="token comment"># et les nombres entre parenthèses déterminent la couleur !</span>\n    <span class="token comment"># Cela indique combien de (rouge, vert, bleu) nous voulons.</span>\n    <span class="token comment"># Essaye de changer les nombres!</span>\n\n    <span class="token comment"># Cette ligne allume les lumières</span>\n    cpx<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span></code></pre></div>'}}))}var o=function(n){void 0===n&&(n={});const{wrapper:e}=Object.assign({},(0,s.RP)(),n.components);return e?t.createElement(e,n,t.createElement(c,n)):c(n)},p=a(4810),l=a(6273),u=a(9975),r=a(8509),i=a(3562);const m=n=>{var e,a,s,c;let{children:o,data:r,pageContext:m,location:k}=n;const d=m.frontmatter.title,f=r.mdx.tableOfContents.items,E=r.mdx.fields.slug,b=(0,t.useMemo)((()=>r.allDirectory.nodes.map((n=>n.base))),[r.allDirectory.nodes]),x=(0,i.U)(E,b),v=(0,i.Z)(r.allMdx.nodes,x),[h,g]=function(n,e){const a=n.length,s=n.findIndex((n=>e.pathname.includes(n.fields.slug))),t=0!==s&&n[s-1];return[s!==a-1&&n[s+1],t]}(v,k);return t.createElement(u.A,{location:k},t.createElement("article",{className:"exercise-main content"},t.createElement(l.A,{location:k,nodes:v,toc:f}),t.createElement("div",{className:"exercise-content"},t.createElement("header",null,t.createElement("h2",null,d)),o)),t.createElement("nav",{className:"content"},t.createElement("ul",{className:"exercise-nav"},t.createElement("li",null,g&&t.createElement(p.N_,{to:g.fields.slug,rel:"prev"},"← Exercise ",null===(e=g.frontmatter)||void 0===e?void 0:e.exercise," |"," ",null===(a=g.frontmatter)||void 0===a?void 0:a.title)),t.createElement("li",null,h&&t.createElement(p.N_,{to:h.fields.slug,rel:"next"},"Exercise ",null===(s=h.frontmatter)||void 0===s?void 0:s.exercise," |"," ",null===(c=h.frontmatter)||void 0===c?void 0:c.title," →")))))};function k(n){return t.createElement(m,n,t.createElement(o,n))}const d=n=>{let{pageContext:e}=n;const a=`${e.frontmatter.title} | Level ${e.frontmatter.level} | Exercise ${e.frontmatter.exercise}`;return t.createElement(r.A,{title:a},t.createElement("meta",{name:"description",content:e.description}))}},6273:function(n,e,a){var s=a(6540),t=a(4810);const c=n=>{let{location:e,nodes:a,toc:c}=n;return a.map(((n,a)=>{const o=e.pathname.includes(n.fields.slug),p=n.frontmatter.title;return s.createElement("li",{className:o?"current":"",key:`exercise-${a}`},s.createElement(t.N_,{to:n.fields.slug},n.frontmatter.exercise," ) ",p),o&&c&&s.createElement("nav",{className:"nav exercise-content-nav"},s.createElement("ul",null,c.map(((n,e)=>s.createElement("li",{key:`toc-${e}`},s.createElement(t.N_,{to:n.url},n.title)))))))}))};e.A=n=>{let{location:e,nodes:a,toc:t}=n;const o=function(n){const e=[];return n.forEach((n=>{e.includes(n.frontmatter.level)||e.push(n.frontmatter.level)})),e}(a);return s.createElement("nav",{className:"nav exercise-nav"},o.map(((n,o)=>{const p=a.filter((e=>e.frontmatter.level===n&&!!e.frontmatter.exercise));return s.createElement("div",{key:`level-${o}`},null!==n&&s.createElement("h3",null,"Level ",n),s.createElement("ul",null,s.createElement(c,{location:e,nodes:p,toc:t})))})))}},8509:function(n,e,a){var s=a(6540),t=a(4810);e.A=function(n){let{title:e,children:a}=n;const c=(0,t.GR)("3103987098");return s.createElement(s.Fragment,null,s.createElement("title",null,e," | ",c.site.siteMetadata.title),a)}},7203:function(n,e,a){var s=a(6540);e.A=function(n){let{title:e,subtitle:a}=n;const t=`hero hero-${e.split(" ").join("-").toLowerCase()}`;return s.createElement("article",{className:t},s.createElement("div",{className:"pane"},s.createElement("header",{className:"content"},s.createElement("h2",null,s.createElement("span",{className:"cpx-title"},e))),s.createElement("section",{className:"content"},s.createElement("span",{className:"cpx-title"},a))))}},9975:function(n,e,a){a.d(e,{A:function(){return i}});var s=a(6540),t=a(8453);var c=()=>s.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",s.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),o=a(4810);var p=n=>{let{location:e}=n;const a={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return s.createElement("div",{className:"content"},s.createElement("h1",null,s.createElement(o.N_,{className:"logo-link",to:"/"},"Makerspace")),s.createElement("div",{className:"header-nav"},s.createElement("ul",null,Object.keys(a).map((function(n){const t=a[n],c=t===e.pathname?"nav-link-current":"nav-link";return s.createElement("li",{key:n},s.createElement(o.N_,{className:c,to:t},n))})))))};function l(n){let{term:e,definition:a}=n;return s.createElement("div",null,s.createElement("dt",null,e),s.createElement("dd",null,a))}var u=function(n){let{name:e,computerType:a,mpType:t,language:c}=n;return s.createElement("div",{className:"summary-card"},s.createElement("h3",null,e),s.createElement("dl",null,a&&s.createElement(l,{term:"Computer",definition:a}),t&&s.createElement(l,{term:"Microprocessor",definition:t}),c&&s.createElement(l,{term:"Language",definition:c})))};const r={Hero:a(7203).A,Link:o.N_,SummaryCard:u,Translations:function(){const n=(0,o.GR)("2398385559").allDirectory.nodes.map((n=>n.base));return s.createElement("ul",null,n.map((n=>{const e=`/exercises/${n}/`;return s.createElement("li",null,s.createElement(o.N_,{to:e},n))})))}};var i=function(n){let{location:e,children:a}=n;return s.createElement("div",{className:"main"},s.createElement("header",{className:"header-main"},s.createElement(p,{location:e})),s.createElement("main",{className:"body-main"},s.createElement(t.xA,{components:r},a)),s.createElement("footer",{className:"footer-main"},s.createElement(c,null)))}},3562:function(n,e,a){function s(n,e){return n.filter((n=>n.fields.slug.includes(`/${e}/`)))}function t(n,e){let a;const s=n.split("/");return e.forEach((n=>{s.includes(n)&&(a=n)})),a}a.d(e,{U:function(){return t},Z:function(){return s}})},8453:function(n,e,a){a.d(e,{RP:function(){return c},xA:function(){return p}});var s=a(6540);const t=s.createContext({});function c(n){const e=s.useContext(t);return s.useMemo((()=>"function"==typeof n?n(e):{...e,...n}),[e,n])}const o={};function p({components:n,children:e,disableParentContext:a}){let p;return p=a?"function"==typeof n?n({}):n||o:c(n),s.createElement(t.Provider,{value:p},e)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-fr-ca-circuitpython-level-1-l-1-e-2-index-md-9986fba24466ed1f06bd.js.map