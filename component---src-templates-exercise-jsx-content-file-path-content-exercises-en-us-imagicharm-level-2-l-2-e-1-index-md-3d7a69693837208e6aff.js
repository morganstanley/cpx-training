"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[8444],{6086:function(e,n,t){t.r(n),t.d(n,{Head:function(){return h},default:function(){return d}});var a=t(8453),s=t(6540);function l(e){const n=Object.assign({h3:"h3",a:"a",span:"span",p:"p",hr:"hr"},(0,a.RP)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.h3,{id:"moving-pixels-lesson",style:{position:"relative"}},s.createElement(n.a,{href:"#moving-pixels-lesson","aria-label":"moving pixels lesson permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Moving Pixels Lesson"),"\n",s.createElement(n.p,null,"This lesson teaches you how to create a pixel that moves across the ImagiCharm and bounces back when it reaches the edges."),"\n",s.createElement(n.hr),"\n",s.createElement(n.h3,{id:"full-code-moving-and-bouncing-pixel",style:{position:"relative"}},s.createElement(n.a,{href:"#full-code-moving-and-bouncing-pixel","aria-label":"full code moving and bouncing pixel permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Full Code: Moving and Bouncing Pixel"),"\n",s.createElement(n.p,null,"Copy and paste the code below into your ImagiCharm to see the moving and bouncing pixel in action!"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> time\n\n<span class="token comment"># Make the pixel bounce in the first row</span>\ndirection <span class="token operator">=</span> <span class="token number">1</span>  <span class="token comment"># 1 for moving right, -1 for moving left</span>\nposition <span class="token operator">=</span> <span class="token number">0</span>  <span class="token comment"># Start at the first column</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    pixels<span class="token punctuation">.</span>clear<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># Clear the display</span>\n    pixels<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span>position<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>  <span class="token comment"># Green pixel</span>\n    pixels<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># Update the ImagiCharm display</span>\n    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">)</span>  <span class="token comment"># Pause to make movement visible</span>\n\n    <span class="token comment"># Update the position</span>\n    position <span class="token operator">+=</span> direction\n\n    <span class="token comment"># Reverse direction if the pixel reaches the edges</span>\n    <span class="token keyword">if</span> position <span class="token operator">==</span> <span class="token number">7</span> <span class="token keyword">or</span> position <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>\n        direction <span class="token operator">*=</span> <span class="token operator">-</span><span class="token number">1</span></code></pre></div>'}}))}var o=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)},c=t(4810),r=t(6273),i=t(9975),p=t(8509),m=t(3562);const u=e=>{var n,t,a,l;let{children:o,data:p,pageContext:u,location:d}=e;const h=u.frontmatter.title,f=p.mdx.tableOfContents.items,v=p.mdx.fields.slug,E=(0,s.useMemo)((()=>p.allDirectory.nodes.map((e=>e.base))),[p.allDirectory.nodes]),k=(0,m.U)(v,E),g=(0,m.Z)(p.allMdx.nodes,k),[x,b]=function(e,n){const t=e.length,a=e.findIndex((e=>n.pathname.includes(e.fields.slug))),s=0!==a&&e[a-1];return[a!==t-1&&e[a+1],s]}(g,d);return s.createElement(i.A,{location:d},s.createElement("article",{className:"exercise-main content"},s.createElement(r.A,{location:d,nodes:g,toc:f}),s.createElement("div",{className:"exercise-content"},s.createElement("header",null,s.createElement("h2",null,h)),o)),s.createElement("nav",{className:"content"},s.createElement("ul",{className:"exercise-nav"},s.createElement("li",null,b&&s.createElement(c.N_,{to:b.fields.slug,rel:"prev"},"← Exercise ",null===(n=b.frontmatter)||void 0===n?void 0:n.exercise," |"," ",null===(t=b.frontmatter)||void 0===t?void 0:t.title)),s.createElement("li",null,x&&s.createElement(c.N_,{to:x.fields.slug,rel:"next"},"Exercise ",null===(a=x.frontmatter)||void 0===a?void 0:a.exercise," |"," ",null===(l=x.frontmatter)||void 0===l?void 0:l.title," →")))))};function d(e){return s.createElement(u,e,s.createElement(o,e))}const h=e=>{let{pageContext:n}=e;const t=`${n.frontmatter.title} | Level ${n.frontmatter.level} | Exercise ${n.frontmatter.exercise}`;return s.createElement(p.A,{title:t},s.createElement("meta",{name:"description",content:n.description}))}},6273:function(e,n,t){var a=t(6540),s=t(4810);const l=e=>{let{location:n,nodes:t,toc:l}=e;return t.map(((e,t)=>{const o=n.pathname.includes(e.fields.slug),c=e.frontmatter.title;return a.createElement("li",{className:o?"current":"",key:`exercise-${t}`},a.createElement(s.N_,{to:e.fields.slug},e.frontmatter.exercise," ) ",c),o&&l&&a.createElement("nav",{className:"nav exercise-content-nav"},a.createElement("ul",null,l.map(((e,n)=>a.createElement("li",{key:`toc-${n}`},a.createElement(s.N_,{to:e.url},e.title)))))))}))};n.A=e=>{let{location:n,nodes:t,toc:s}=e;const o=function(e){const n=[];return e.forEach((e=>{n.includes(e.frontmatter.level)||n.push(e.frontmatter.level)})),n}(t);return a.createElement("nav",{className:"nav exercise-nav"},o.map(((e,o)=>{const c=t.filter((n=>n.frontmatter.level===e&&!!n.frontmatter.exercise));return a.createElement("div",{key:`level-${o}`},null!==e&&a.createElement("h3",null,"Level ",e),a.createElement("ul",null,a.createElement(l,{location:n,nodes:c,toc:s})))})))}},8509:function(e,n,t){var a=t(6540),s=t(4810);n.A=function(e){let{title:n,children:t}=e;const l=(0,s.GR)("3103987098");return a.createElement(a.Fragment,null,a.createElement("title",null,n," | ",l.site.siteMetadata.title),t)}},7203:function(e,n,t){var a=t(6540);n.A=function(e){let{title:n,subtitle:t}=e;const s=`hero hero-${n.split(" ").join("-").toLowerCase()}`;return a.createElement("article",{className:s},a.createElement("div",{className:"pane"},a.createElement("header",{className:"content"},a.createElement("h2",null,a.createElement("span",{className:"cpx-title"},n))),a.createElement("section",{className:"content"},a.createElement("span",{className:"cpx-title"},t))))}},9975:function(e,n,t){t.d(n,{A:function(){return m}});var a=t(6540),s=t(8453);var l=()=>a.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",a.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),o=t(4810);var c=e=>{let{location:n}=e;const t={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return a.createElement("div",{className:"content"},a.createElement("h1",null,a.createElement(o.N_,{className:"logo-link",to:"/"},"Makerspace")),a.createElement("div",{className:"header-nav"},a.createElement("ul",null,Object.keys(t).map((function(e){const s=t[e],l=s===n.pathname?"nav-link-current":"nav-link";return a.createElement("li",{key:e},a.createElement(o.N_,{className:l,to:s},e))})))))};function r(e){let{term:n,definition:t}=e;return a.createElement("div",null,a.createElement("dt",null,n),a.createElement("dd",null,t))}var i=function(e){let{name:n,computerType:t,mpType:s,language:l}=e;return a.createElement("div",{className:"summary-card"},a.createElement("h3",null,n),a.createElement("dl",null,t&&a.createElement(r,{term:"Computer",definition:t}),s&&a.createElement(r,{term:"Microprocessor",definition:s}),l&&a.createElement(r,{term:"Language",definition:l})))};const p={Hero:t(7203).A,Link:o.N_,SummaryCard:i,Translations:function(){const e=(0,o.GR)("2398385559").allDirectory.nodes.map((e=>e.base));return a.createElement("ul",null,e.map((e=>{const n=`/exercises/${e}/`;return a.createElement("li",null,a.createElement(o.N_,{to:n},e))})))}};var m=function(e){let{location:n,children:t}=e;return a.createElement("div",{className:"main"},a.createElement("header",{className:"header-main"},a.createElement(c,{location:n})),a.createElement("main",{className:"body-main"},a.createElement(s.xA,{components:p},t)),a.createElement("footer",{className:"footer-main"},a.createElement(l,null)))}},3562:function(e,n,t){function a(e,n){return e.filter((e=>e.fields.slug.includes(`/${n}/`)))}function s(e,n){let t;const a=e.split("/");return n.forEach((e=>{a.includes(e)&&(t=e)})),t}t.d(n,{U:function(){return s},Z:function(){return a}})},8453:function(e,n,t){t.d(n,{RP:function(){return l},xA:function(){return c}});var a=t(6540);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const o={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||o:l(e),a.createElement(s.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-en-us-imagicharm-level-2-l-2-e-1-index-md-3d7a69693837208e6aff.js.map