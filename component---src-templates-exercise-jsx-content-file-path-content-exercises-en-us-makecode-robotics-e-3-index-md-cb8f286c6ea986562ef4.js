"use strict";(self.webpackChunkmakerspace_cpx_intro=self.webpackChunkmakerspace_cpx_intro||[]).push([[6545],{9172:function(e,t,n){n.r(t),n.d(t,{Head:function(){return f},default:function(){return E}});var a=n(8453),r=n(6540);function l(e){const t=Object.assign({p:"p",a:"a"},(0,a.RP)(),e.components);return r.createElement(t.p,null,"Refer to ",r.createElement(t.a,{href:"../../intro/E3/"},"This Lesson"))}var c=function(e){void 0===e&&(e={});const{wrapper:t}=Object.assign({},(0,a.RP)(),e.components);return t?r.createElement(t,e,r.createElement(l,e)):l(e)},o=n(4810),i=n(6273),s=n(9975),m=n(8509);const u=e=>{var t,n,a,l;let{children:c,data:m,pageContext:u,location:E}=e;const f=u.frontmatter.title,d=m.mdx.tableOfContents.items,v=m.allMdx.nodes,[p,h]=function(e,t){const n=e.length,a=e.findIndex((e=>t.pathname.includes(e.fields.slug))),r=0!==a&&e[a-1];return[a!==n-1&&e[a+1],r]}(v,E);return r.createElement(s.A,{location:E},r.createElement("article",{className:"exercise-main content"},r.createElement(i.A,{location:E,nodes:v,toc:d}),r.createElement("div",{className:"exercise-content"},r.createElement("header",null,r.createElement("h2",null,f)),c)),r.createElement("nav",{className:"content"},r.createElement("ul",{className:"exercise-nav"},r.createElement("li",null,h&&r.createElement(o.N_,{to:h.fields.slug,rel:"prev"},"← Exercise ",null===(t=h.frontmatter)||void 0===t?void 0:t.exercise," |"," ",null===(n=h.frontmatter)||void 0===n?void 0:n.title)),r.createElement("li",null,p&&r.createElement(o.N_,{to:p.fields.slug,rel:"next"},"Exercise ",null===(a=p.frontmatter)||void 0===a?void 0:a.exercise," |"," ",null===(l=p.frontmatter)||void 0===l?void 0:l.title," →")))))};function E(e){return r.createElement(u,e,r.createElement(c,e))}const f=e=>{let{pageContext:t}=e;const n=`${t.frontmatter.title} | Level ${t.frontmatter.level} | Exercise ${t.frontmatter.exercise}`;return r.createElement(m.A,{title:n},r.createElement("meta",{name:"description",content:t.description}))}},6273:function(e,t,n){var a=n(6540),r=n(4810);const l=e=>{let{location:t,nodes:n,toc:l}=e;return n.map(((e,n)=>{const c=t.pathname.includes(e.fields.slug),o=e.frontmatter.title;return a.createElement("li",{className:c?"current":"",key:`exercise-${n}`},a.createElement(r.N_,{to:e.fields.slug},e.frontmatter.exercise," ) ",o),c&&l&&a.createElement("nav",{className:"nav exercise-content-nav"},a.createElement("ul",null,l.map(((e,t)=>a.createElement("li",{key:`toc-${t}`},a.createElement(r.N_,{to:e.url},e.title)))))))}))};t.A=e=>{let{location:t,nodes:n,toc:r}=e;const c=function(e){const t=[];return e.forEach((e=>{t.includes(e.frontmatter.level)||t.push(e.frontmatter.level)})),t}(n);return a.createElement("nav",{className:"nav exercise-nav"},c.map(((e,c)=>{const o=n.filter((t=>t.frontmatter.level===e&&!!t.frontmatter.exercise));return a.createElement("div",{key:`level-${c}`},null!==e&&a.createElement("h3",null,"Level ",e),a.createElement("ul",null,a.createElement(l,{location:t,nodes:o,toc:r})))})))}},8509:function(e,t,n){var a=n(6540),r=n(4810);t.A=function(e){let{title:t,children:n}=e;const l=(0,r.GR)("3103987098");return a.createElement(a.Fragment,null,a.createElement("title",null,t," | ",l.site.siteMetadata.title),n)}},7203:function(e,t,n){var a=n(6540);t.A=function(e){let{title:t,subtitle:n}=e;const r=`hero hero-${t.split(" ").join("-").toLowerCase()}`;return a.createElement("article",{className:r},a.createElement("div",{className:"pane"},a.createElement("header",{className:"content"},a.createElement("h2",null,a.createElement("span",{className:"cpx-title"},t))),a.createElement("section",{className:"content"},a.createElement("span",{className:"cpx-title"},n))))}},9975:function(e,t,n){n.d(t,{A:function(){return u}});var a=n(6540),r=n(8453);var l=()=>a.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",a.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),c=n(4810);var o=e=>{let{location:t}=e;const n={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return a.createElement("div",{className:"content"},a.createElement("h1",null,a.createElement(c.N_,{className:"logo-link",to:"/"},"Makerspace")),a.createElement("div",{className:"header-nav"},a.createElement("ul",null,Object.keys(n).map((function(e){const r=n[e],l=r===t.pathname?"nav-link-current":"nav-link";return a.createElement("li",{key:e},a.createElement(c.N_,{className:l,to:r},e))})))))};function i(e){let{term:t,definition:n}=e;return a.createElement("div",null,a.createElement("dt",null,t),a.createElement("dd",null,n))}var s=function(e){let{name:t,computerType:n,mpType:r,language:l}=e;return a.createElement("div",{className:"summary-card"},a.createElement("h3",null,t),a.createElement("dl",null,n&&a.createElement(i,{term:"Computer",definition:n}),r&&a.createElement(i,{term:"Microprocessor",definition:r}),l&&a.createElement(i,{term:"Language",definition:l})))};const m={Hero:n(7203).A,Link:c.N_,SummaryCard:s,Translations:function(){const e=(0,c.GR)("2398385559").allDirectory.nodes.map((e=>e.base));return a.createElement("ul",null,e.map((e=>{const t=`/exercises/${e}/`;return a.createElement("li",null,a.createElement(c.N_,{to:t},e))})))}};var u=function(e){let{location:t,children:n}=e;return a.createElement("div",{className:"main"},a.createElement("header",{className:"header-main"},a.createElement(o,{location:t})),a.createElement("main",{className:"body-main"},a.createElement(r.xA,{components:m},n)),a.createElement("footer",{className:"footer-main"},a.createElement(l,null)))}},8453:function(e,t,n){n.d(t,{RP:function(){return l},xA:function(){return o}});var a=n(6540);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:l(e),a.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-en-us-makecode-robotics-e-3-index-md-cb8f286c6ea986562ef4.js.map