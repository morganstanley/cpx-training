"use strict";(self.webpackChunkmakerspace_cpx_intro=self.webpackChunkmakerspace_cpx_intro||[]).push([[5972],{9332:function(e,n,t){t.r(n),t.d(n,{Head:function(){return h},default:function(){return m}});var a=t(8453),s=t(6540);function l(e){const n=Object.assign({p:"p",span:"span",h3:"h3",a:"a",ul:"ul",li:"li"},(0,a.RP)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,"Both the Circuit Playgound Express and Bluefruit contain a light sensor, so the device can do things like turn on a light automatically, turn off a light, or adjust the brightness of the pixels."),"\n",s.createElement(n.p,null,"First, let’s get a feel for the ambient light in the room - use ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cp.light</code>'}})," to read the light level from the sensor, and then print it to the serial console:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n<span class="token keyword">import</span> time\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span>cp<span class="token punctuation">.</span>light<span class="token punctuation">)</span>\n    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.p,null,"With the program running, try generating a wide range of values by moving around the device, holding it under a bright light source, holding your hand over the sensor, etc."),"\n",s.createElement(n.p,null,"Now let’s program the device to be an automatic light switch - it will turn on if the ambient light drops below a certain threshold:"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n<span class="token keyword">import</span> time\n\nBLACK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nWHITE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.05</span>\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>BLACK<span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token comment"># you may have to adjust the threshold based on your environment</span>\n    <span class="token keyword">if</span> cp<span class="token punctuation">.</span>light <span class="token operator">&lt;</span> <span class="token number">50</span><span class="token punctuation">:</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>WHITE<span class="token punctuation">)</span>\n    <span class="token keyword">else</span><span class="token punctuation">:</span>\n        cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>BLACK<span class="token punctuation">)</span>\n    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.h3,{id:"challenge-problem",style:{position:"relative"}},s.createElement(n.a,{href:"#challenge-problem","aria-label":"challenge problem permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Challenge Problem"),"\n",s.createElement(n.p,null,"Most modern smartphones are equipped with an ambient light sensor that automatically adjusts the brightness of the screen based on the lighting in the room. Try programming the device to do the same: set the pixels to a color of your choice, then adjust the pixel brightness based on the light sensor (dimmer for lower light levels and brighter for higher light levels)."),"\n",s.createElement(n.h3,{id:"references",style:{position:"relative"}},s.createElement(n.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"https://docs.circuitpython.org/projects/circuitplayground/en/latest/api.html#adafruit_circuitplayground.circuit_playground_base.CircuitPlaygroundBase.light"},"cp.light")),"\n"))}var r=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)},c=t(4810),o=t(6273),i=t(9975),p=t(8509);const u=e=>{var n,t,a,l;let{children:r,data:p,pageContext:u,location:m}=e;const h=u.frontmatter.title,d=p.mdx.tableOfContents.items,f=p.allMdx.nodes,[g,k]=function(e,n){const t=e.length,a=e.findIndex((e=>n.pathname.includes(e.fields.slug))),s=0!==a&&e[a-1];return[a!==t-1&&e[a+1],s]}(f,m);return s.createElement(i.A,{location:m},s.createElement("article",{className:"exercise-main content"},s.createElement(o.A,{location:m,nodes:f,toc:d}),s.createElement("div",{className:"exercise-content"},s.createElement("header",null,s.createElement("h2",null,h)),r)),s.createElement("nav",{className:"content"},s.createElement("ul",{className:"exercise-nav"},s.createElement("li",null,k&&s.createElement(c.N_,{to:k.fields.slug,rel:"prev"},"← Exercise ",null===(n=k.frontmatter)||void 0===n?void 0:n.exercise," |"," ",null===(t=k.frontmatter)||void 0===t?void 0:t.title)),s.createElement("li",null,g&&s.createElement(c.N_,{to:g.fields.slug,rel:"next"},"Exercise ",null===(a=g.frontmatter)||void 0===a?void 0:a.exercise," |"," ",null===(l=g.frontmatter)||void 0===l?void 0:l.title," →")))))};function m(e){return s.createElement(u,e,s.createElement(r,e))}const h=e=>{let{pageContext:n}=e;const t=`${n.frontmatter.title} | Level ${n.frontmatter.level} | Exercise ${n.frontmatter.exercise}`;return s.createElement(p.A,{title:t},s.createElement("meta",{name:"description",content:n.description}))}},6273:function(e,n,t){var a=t(6540),s=t(4810);const l=e=>{let{location:n,nodes:t,toc:l}=e;return t.map(((e,t)=>{const r=n.pathname.includes(e.fields.slug),c=e.frontmatter.title;return a.createElement("li",{className:r?"current":"",key:`exercise-${t}`},a.createElement(s.N_,{to:e.fields.slug},e.frontmatter.exercise," ) ",c),r&&l&&a.createElement("nav",{className:"nav exercise-content-nav"},a.createElement("ul",null,l.map(((e,n)=>a.createElement("li",{key:`toc-${n}`},a.createElement(s.N_,{to:e.url},e.title)))))))}))};n.A=e=>{let{location:n,nodes:t,toc:s}=e;const r=function(e){const n=[];return e.forEach((e=>{n.includes(e.frontmatter.level)||n.push(e.frontmatter.level)})),n}(t);return a.createElement("nav",{className:"nav exercise-nav"},r.map(((e,r)=>{const c=t.filter((n=>n.frontmatter.level===e&&!!n.frontmatter.exercise));return a.createElement("div",{key:`level-${r}`},null!==e&&a.createElement("h3",null,"Level ",e),a.createElement("ul",null,a.createElement(l,{location:n,nodes:c,toc:s})))})))}},8509:function(e,n,t){var a=t(6540),s=t(4810);n.A=function(e){let{title:n,children:t}=e;const l=(0,s.GR)("3103987098");return a.createElement(a.Fragment,null,a.createElement("title",null,n," | ",l.site.siteMetadata.title),t)}},7203:function(e,n,t){var a=t(6540);n.A=function(e){let{title:n,subtitle:t}=e;const s=`hero hero-${n.split(" ").join("-").toLowerCase()}`;return a.createElement("article",{className:s},a.createElement("div",{className:"pane"},a.createElement("header",{className:"content"},a.createElement("h2",null,a.createElement("span",{className:"cpx-title"},n))),a.createElement("section",{className:"content"},a.createElement("span",{className:"cpx-title"},t))))}},9975:function(e,n,t){t.d(n,{A:function(){return u}});var a=t(6540),s=t(8453);var l=()=>a.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",a.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),r=t(4810);var c=e=>{let{location:n}=e;const t={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return a.createElement("div",{className:"content"},a.createElement("h1",null,a.createElement(r.N_,{className:"logo-link",to:"/"},"Makerspace")),a.createElement("div",{className:"header-nav"},a.createElement("ul",null,Object.keys(t).map((function(e){const s=t[e],l=s===n.pathname?"nav-link-current":"nav-link";return a.createElement("li",{key:e},a.createElement(r.N_,{className:l,to:s},e))})))))};function o(e){let{term:n,definition:t}=e;return a.createElement("div",null,a.createElement("dt",null,n),a.createElement("dd",null,t))}var i=function(e){let{name:n,computerType:t,mpType:s,language:l}=e;return a.createElement("div",{className:"summary-card"},a.createElement("h3",null,n),a.createElement("dl",null,t&&a.createElement(o,{term:"Computer",definition:t}),s&&a.createElement(o,{term:"Microprocessor",definition:s}),l&&a.createElement(o,{term:"Language",definition:l})))};const p={Hero:t(7203).A,Link:r.N_,SummaryCard:i,Translations:function(){const e=(0,r.GR)("2398385559").allDirectory.nodes.map((e=>e.base));return a.createElement("ul",null,e.map((e=>{const n=`/exercises/${e}/`;return a.createElement("li",null,a.createElement(r.N_,{to:n},e))})))}};var u=function(e){let{location:n,children:t}=e;return a.createElement("div",{className:"main"},a.createElement("header",{className:"header-main"},a.createElement(c,{location:n})),a.createElement("main",{className:"body-main"},a.createElement(s.xA,{components:p},t)),a.createElement("footer",{className:"footer-main"},a.createElement(l,null)))}},8453:function(e,n,t){t.d(n,{RP:function(){return l},xA:function(){return c}});var a=t(6540);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const r={};function c({components:e,children:n,disableParentContext:t}){let c;return c=t?"function"==typeof e?e({}):e||r:l(e),a.createElement(s.Provider,{value:c},n)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-en-us-circuitpython-robotics-e-11-index-md-38dd40b6edf2c4058e7d.js.map