"use strict";(self.webpackChunkmakerspace_cpx_intro=self.webpackChunkmakerspace_cpx_intro||[]).push([[5125],{8509:function(e,t,n){var a=n(6540),r=n(4810);t.A=function(e){let{title:t,children:n}=e;const l=(0,r.GR)("3103987098");return a.createElement(a.Fragment,null,a.createElement("title",null,t," | ",l.site.siteMetadata.title),n)}},7203:function(e,t,n){var a=n(6540);t.A=function(e){let{title:t,subtitle:n}=e;const r=`hero hero-${t.split(" ").join("-").toLowerCase()}`;return a.createElement("article",{className:r},a.createElement("div",{className:"pane"},a.createElement("header",{className:"content"},a.createElement("h2",null,a.createElement("span",{className:"cpx-title"},t))),a.createElement("section",{className:"content"},a.createElement("span",{className:"cpx-title"},n))))}},9975:function(e,t,n){n.d(t,{A:function(){return u}});var a=n(6540),r=n(8453);var l=()=>a.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",a.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),c=n(4810);var o=e=>{let{location:t}=e;const n={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return a.createElement("div",{className:"content"},a.createElement("h1",null,a.createElement(c.N_,{className:"logo-link",to:"/"},"Makerspace")),a.createElement("div",{className:"header-nav"},a.createElement("ul",null,Object.keys(n).map((function(e){const r=n[e],l=r===t.pathname?"nav-link-current":"nav-link";return a.createElement("li",{key:e},a.createElement(c.N_,{className:l,to:r},e))})))))};function s(e){let{term:t,definition:n}=e;return a.createElement("div",null,a.createElement("dt",null,t),a.createElement("dd",null,n))}var i=function(e){let{name:t,computerType:n,mpType:r,language:l}=e;return a.createElement("div",{className:"summary-card"},a.createElement("h3",null,t),a.createElement("dl",null,n&&a.createElement(s,{term:"Computer",definition:n}),r&&a.createElement(s,{term:"Microprocessor",definition:r}),l&&a.createElement(s,{term:"Language",definition:l})))};const m={Hero:n(7203).A,Link:c.N_,SummaryCard:i,Translations:function(){const e=(0,c.GR)("2398385559").allDirectory.nodes.map((e=>e.base));return a.createElement("ul",null,e.map((e=>{const t=`/exercises/${e}/`;return a.createElement("li",null,a.createElement(c.N_,{to:t},e))})))}};var u=function(e){let{location:t,children:n}=e;return a.createElement("div",{className:"main"},a.createElement("header",{className:"header-main"},a.createElement(o,{location:t})),a.createElement("main",{className:"body-main"},a.createElement(r.xA,{components:m},n)),a.createElement("footer",{className:"footer-main"},a.createElement(l,null)))}},5083:function(e,t,n){var a=n(6540),r=n(4810);const l=e=>{let{nodes:t}=e;return t.map(((e,t)=>{const n=e.frontmatter.title,l=e.frontmatter.exercise,c=e.tableOfContents.items;return a.createElement("li",{key:`exercise-${t}`},a.createElement(r.N_,{to:e.fields.slug},l?`${l} ) `:"",n),a.createElement("nav",{className:"nav exercise-content-nav"},a.createElement("ul",null,c&&c.map(((e,t)=>a.createElement("li",{key:`toc-${t}`},a.createElement(r.N_,{to:e.url},e.title)))))))}))},c=e=>{let{levels:t,location:n,nodes:r}=e;return a.createElement("nav",{className:"nav exercise-nav"},t.map(((e,t)=>{const c=r.filter((t=>t.frontmatter.level===e));return a.createElement("div",{key:`level-${t}`},null!==e&&a.createElement("h3",null,"Level ",e),a.createElement("ul",null,a.createElement(l,{location:n,nodes:c})))})))},o=e=>{let{categories:t,location:n,nodes:r}=e;return t.map(((e,t)=>{const l=r.filter((t=>t.frontmatter.category===e)),o=function(e){const t=[];return e.forEach((e=>{const n=e.frontmatter.level;void 0===n||t.includes(n)||t.push(n)})),t}(l);return a.createElement(a.Fragment,null,null!==e&&a.createElement("h2",null,e),a.createElement(c,{levels:o,location:n,nodes:l}))}))};t.A=e=>{let{location:t,nodes:n}=e;const r=function(e){const t=[];return e.forEach((e=>{const n=e.frontmatter.category;void 0===n||t.includes(n)||t.push(n)})),t}(n);return a.createElement(o,{categories:r,location:t,nodes:n})}},3331:function(e,t,n){n.r(t),n.d(t,{Head:function(){return o}});var a=n(6540),r=n(9975),l=n(8509),c=n(5083);t.default=e=>{let{data:t,location:n}=e;const l=t.allMdx.nodes;return a.createElement(r.A,{location:n},a.createElement("div",{className:"content"},a.createElement("h2",null,"404 Not Found"),a.createElement("p",null,"Sorry, the url you're looking for appears to be missing. Check out the sitemap below to find your expected page."),a.createElement(c.A,{location:n,nodes:l})))};const o=()=>a.createElement(l.A,{title:"404 Not Found"})},8453:function(e,t,n){n.d(t,{RP:function(){return l},xA:function(){return o}});var a=n(6540);const r=a.createContext({});function l(e){const t=a.useContext(r);return a.useMemo((()=>"function"==typeof e?e(t):{...t,...e}),[t,e])}const c={};function o({components:e,children:t,disableParentContext:n}){let o;return o=n?"function"==typeof e?e({}):e||c:l(e),a.createElement(r.Provider,{value:o},t)}}}]);
//# sourceMappingURL=component---src-pages-404-js-b0b411872ec81e59073a.js.map