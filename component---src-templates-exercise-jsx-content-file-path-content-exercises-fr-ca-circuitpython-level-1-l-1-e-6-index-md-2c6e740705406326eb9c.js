"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[8295],{9834:function(e,n,t){t.r(n),t.d(n,{Head:function(){return f},default:function(){return d}});var a=t(8453),s=t(6540);function r(e){const n=Object.assign({p:"p",span:"span"},(0,a.RP)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,"Ce programme va afficher la température actuelle dans l’affichage du MuEditor.\nClique sur le bouton Serial (Série) dans le MuEditor pour voir les données de sortie brut, ou utilise “Plotter” pour voir un graphique."),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> time\n<span class="token keyword">from</span> adafruit_circuitplayground<span class="token punctuation">.</span>express <span class="token keyword">import</span> cpx\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Température C:"</span><span class="token punctuation">,</span> cpx<span class="token punctuation">.</span>temperature<span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Température F:"</span><span class="token punctuation">,</span> cpx<span class="token punctuation">.</span>temperature <span class="token operator">*</span> <span class="token number">1.8</span> <span class="token operator">+</span> <span class="token number">32</span><span class="token punctuation">)</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">(</span>cpx<span class="token punctuation">.</span>temperature<span class="token punctuation">,</span> cpx<span class="token punctuation">.</span>temperature <span class="token operator">*</span> <span class="token number">1.8</span> <span class="token operator">+</span> <span class="token number">32</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></code></pre></div>'}}))}var l=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?s.createElement(n,e,s.createElement(r,e)):r(e)},c=t(4810),o=t(6273),i=t(9975),u=t(8509),p=t(3562);const m=e=>{var n,t,a,r;let{children:l,data:u,pageContext:m,location:d}=e;const f=m.frontmatter.title,E=u.mdx.tableOfContents.items,k=u.mdx.fields.slug,v=(0,s.useMemo)((()=>u.allDirectory.nodes.map((e=>e.base))),[u.allDirectory.nodes]),h=(0,p.U)(k,v),g=(0,p.Z)(u.allMdx.nodes,h),[x,y]=function(e,n){const t=e.length,a=e.findIndex((e=>n.pathname.includes(e.fields.slug))),s=0!==a&&e[a-1];return[a!==t-1&&e[a+1],s]}(g,d);return s.createElement(i.A,{location:d},s.createElement("article",{className:"exercise-main content"},s.createElement(o.A,{location:d,nodes:g,toc:E}),s.createElement("div",{className:"exercise-content"},s.createElement("header",null,s.createElement("h2",null,f)),l)),s.createElement("nav",{className:"content"},s.createElement("ul",{className:"exercise-nav"},s.createElement("li",null,y&&s.createElement(c.N_,{to:y.fields.slug,rel:"prev"},"← Exercise ",null===(n=y.frontmatter)||void 0===n?void 0:n.exercise," |"," ",null===(t=y.frontmatter)||void 0===t?void 0:t.title)),s.createElement("li",null,x&&s.createElement(c.N_,{to:x.fields.slug,rel:"next"},"Exercise ",null===(a=x.frontmatter)||void 0===a?void 0:a.exercise," |"," ",null===(r=x.frontmatter)||void 0===r?void 0:r.title," →")))))};function d(e){return s.createElement(m,e,s.createElement(l,e))}const f=e=>{let{pageContext:n}=e;const t=`${n.frontmatter.title} | Level ${n.frontmatter.level} | Exercise ${n.frontmatter.exercise}`;return s.createElement(u.A,{title:t},s.createElement("meta",{name:"description",content:n.description}))}},6273:function(e,n,t){var a=t(6540),s=t(4810);const r=e=>{let{location:n,nodes:t,toc:r}=e;return t.map(((e,t)=>{const l=n.pathname.includes(e.fields.slug),c=e.frontmatter.title;return a.createElement("li",{className:l?"current":"",key:`exercise-${t}`},a.createElement(s.N_,{to:e.fields.slug},e.frontmatter.exercise," ) ",c),l&&r&&a.createElement("nav",{className:"nav exercise-content-nav"},a.createElement("ul",null,r.map(((e,n)=>a.createElement("li",{key:`toc-${n}`},a.createElement(s.N_,{to:e.url},e.title)))))))}))};n.A=e=>{let{location:n,nodes:t,toc:s}=e;const l=function(e){const n=[];return e.forEach((e=>{n.includes(e.frontmatter.level)||n.push(e.frontmatter.level)})),n}(t);return a.createElement("nav",{className:"nav exercise-nav"},l.map(((e,l)=>{const c=t.filter((n=>n.frontmatter.level===e&&!!n.frontmatter.exercise));return a.createElement("div",{key:`level-${l}`},null!==e&&a.createElement("h3",null,"Level ",e),a.createElement("ul",null,a.createElement(r,{location:n,nodes:c,toc:s})))})))}},8509:function(e,n,t){var a=t(6540),s=t(4810);n.A=function(e){let{title:n,children:t}=e;const r=(0,s.GR)("3103987098");return a.createElement(a.Fragment,null,a.createElement("title",null,n," | ",r.site.siteMetadata.title),t)}},7203:function(e,n,t){var a=t(6540);n.A=function(e){let{title:n,subtitle:t}=e;const s=`hero hero-${n.split(" ").join("-").toLowerCase()}`;return a.createElement("article",{className:s},a.createElement("div",{className:"pane"},a.createElement("header",{className:"content"},a.createElement("h2",null,a.createElement("span",{className:"cpx-title"},n))),a.createElement("section",{className:"content"},a.createElement("span",{className:"cpx-title"},t))))}},9975:function(e,n,t){t.d(n,{A:function(){return p}});var a=t(6540),s=t(8453);var r=()=>a.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",a.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),l=t(4810);var c=e=>{let{location:n}=e;const t={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return a.createElement("div",{className:"content"},a.createElement("h1",null,a.createElement(l.N_,{className:"logo-link",to:"/"},"Makerspace")),a.createElement("div",{className:"header-nav"},a.createElement("ul",null,Object.keys(t).map((function(e){const s=t[e],r=s===n.pathname?"nav-link-current":"nav-link";return a.createElement("li",{key:e},a.createElement(l.N_,{className:r,to:s},e))})))))};function o(e){let{term:n,definition:t}=e;return a.createElement("div",null,a.createElement("dt",null,n),a.createElement("dd",null,t))}var i=function(e){let{name:n,computerType:t,mpType:s,language:r}=e;return a.createElement("div",{className:"summary-card"},a.createElement("h3",null,n),a.createElement("dl",null,t&&a.createElement(o,{term:"Computer",definition:t}),s&&a.createElement(o,{term:"Microprocessor",definition:s}),r&&a.createElement(o,{term:"Language",definition:r})))};const u={Hero:t(7203).A,Link:l.N_,SummaryCard:i,Translations:function(){const e=(0,l.GR)("2398385559").allDirectory.nodes.map((e=>e.base));return a.createElement("ul",null,e.map((e=>{const n=`/exercises/${e}/`;return a.createElement("li",null,a.createElement(l.N_,{to:n},e))})))}};var p=function(e){let{location:n,children:t}=e;return a.createElement("div",{className:"main"},a.createElement("header",{className:"header-main"},a.createElement(c,{location:n})),a.createElement("main",{className:"body-main"},a.createElement(s.xA,{components:u},t)),a.createElement("footer",{className:"footer-main"},a.createElement(r,null)))}},3562:function(e,n,t){function a(e,n){return e.filter((e=>e.fields.slug.includes(`/${n}/`)))}function s(e,n){let t;const a=e.split("/");return n.forEach((e=>{a.includes(e)&&(t=e)})),t}t.d(n,{U:function(){return s},Z:function(){return a}})},8453:function(e,n,t){t.d(n,{RP:function(){return r},xA:function(){return c}});var a=t(6540);const s=a.createContext({});function r(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const l={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||l:r(e),a.createElement(s.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-fr-ca-circuitpython-level-1-l-1-e-6-index-md-2c6e740705406326eb9c.js.map