"use strict";(self.webpackChunkmakerspace_cpx_intro=self.webpackChunkmakerspace_cpx_intro||[]).push([[6084],{9135:function(e,n,t){t.r(n),t.d(n,{Head:function(){return d},default:function(){return m}});var a=t(8453),s=t(6540);function l(e){const n=Object.assign({p:"p",ul:"ul",li:"li",a:"a",em:"em",span:"span",h3:"h3"},(0,a.RP)(),e.components);return s.createElement(s.Fragment,null,s.createElement(n.p,null,"In this lesson we will use the Adafruit Bluefruit Connect mobile app to remote-control the LEDs on our Circuit Playground Bluefruit device."),"\n",s.createElement(n.p,null,"Start by installing the Bluefruit Connect app from the mobile app store:"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"https://apps.apple.com/us/app/bluefruit-connect/id830125974"},"Apple Store")),"\n",s.createElement(n.li,null,s.createElement(n.a,{href:"https://play.google.com/store/apps/details?id=com.adafruit.bluefruit.le.connect"},"Google Play")),"\n"),"\n",s.createElement(n.p,null,"Bluetooth Low Energy (BLE) is a wireless technology for pairing two devices and then transmitting information between them. One device ",s.createElement(n.em,null,"advertises")," it’s availability, while the other ",s.createElement(n.em,null,"scans")," the environment for available devices."),"\n",s.createElement(n.p,null,"In this exercise we will program the Bluefruit device to advertise it’s availability, and then use the Bluefruit Connect mobile app to scan the environment, connect to the device, and begin transmitting information. Specifically we will transmit a color from our mobile app, and program the device to change the LEDs to that color."),"\n",s.createElement(n.p,null,"Adafruit provides helper functions to make this relatively straightforward to implement. We’ll use a variable named ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">connected</code>'}})," to determine whether another device (i.e., our mobile phone) is paired with the bluefruit:"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,"If it isn’t connected, then we keep advertising availability."),"\n",s.createElement(n.li,null,"If it is connected, then we keep listening for ColorPackets, and change the color of the LEDs when we receive one."),"\n"),"\n",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">from</span> adafruit_circuitplayground <span class="token keyword">import</span> cp\n\n<span class="token keyword">from</span> adafruit_bluefruit_connect<span class="token punctuation">.</span>packet <span class="token keyword">import</span> Packet\n<span class="token keyword">from</span> adafruit_bluefruit_connect<span class="token punctuation">.</span>color_packet <span class="token keyword">import</span> ColorPacket\n\n<span class="token keyword">from</span> adafruit_ble <span class="token keyword">import</span> BLERadio\n<span class="token keyword">from</span> adafruit_ble<span class="token punctuation">.</span>advertising<span class="token punctuation">.</span>standard <span class="token keyword">import</span> ProvideServicesAdvertisement\n<span class="token keyword">from</span> adafruit_ble<span class="token punctuation">.</span>services<span class="token punctuation">.</span>nordic <span class="token keyword">import</span> UARTService\n\n<span class="token comment"># Start with the LEDs turned off</span>\nBLACK <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>brightness <span class="token operator">=</span> <span class="token number">0.3</span>\ncp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>BLACK<span class="token punctuation">)</span>\n\nble <span class="token operator">=</span> BLERadio<span class="token punctuation">(</span><span class="token punctuation">)</span>\nuart_service <span class="token operator">=</span> UARTService<span class="token punctuation">(</span><span class="token punctuation">)</span>\nadvertisement <span class="token operator">=</span> ProvideServicesAdvertisement<span class="token punctuation">(</span>uart_service<span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n    <span class="token comment"># Keep advertising until another device connects</span>\n    ble<span class="token punctuation">.</span>start_advertising<span class="token punctuation">(</span>advertisement<span class="token punctuation">)</span>\n    <span class="token keyword">while</span> <span class="token keyword">not</span> ble<span class="token punctuation">.</span>connected<span class="token punctuation">:</span>\n        <span class="token keyword">pass</span>\n    ble<span class="token punctuation">.</span>stop_advertising<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n    <span class="token comment"># Keep listening for packets while connected</span>\n    <span class="token keyword">while</span> ble<span class="token punctuation">.</span>connected<span class="token punctuation">:</span>\n        <span class="token keyword">if</span> uart_service<span class="token punctuation">.</span>in_waiting<span class="token punctuation">:</span>\n            packet <span class="token operator">=</span> Packet<span class="token punctuation">.</span>from_stream<span class="token punctuation">(</span>uart_service<span class="token punctuation">)</span>\n            <span class="token keyword">if</span> <span class="token builtin">isinstance</span><span class="token punctuation">(</span>packet<span class="token punctuation">,</span> ColorPacket<span class="token punctuation">)</span><span class="token punctuation">:</span>\n                <span class="token keyword">print</span><span class="token punctuation">(</span>packet<span class="token punctuation">.</span>color<span class="token punctuation">)</span>\n                cp<span class="token punctuation">.</span>pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>packet<span class="token punctuation">.</span>color<span class="token punctuation">)</span></code></pre></div>'}}),"\n",s.createElement(n.h3,{id:"challenge-problem",style:{position:"relative"}},s.createElement(n.a,{href:"#challenge-problem","aria-label":"challenge problem permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"Challenge Problem"),"\n",s.createElement(n.p,null,"Instead of setting the LEDs to the color received from the mobile app, set the LEDs to the ",s.createElement(n.a,{href:"https://www.w3schools.com/colors/colors_complementary.asp"},"complementary color"),"."),"\n",s.createElement(n.p,null,s.createElement(n.em,null,"Hint: create a new color variable based on the value of ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">packet.color</code>'}}),", then use it in the call to ",s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">cp.pixels.fill</code>'}}))),"\n",s.createElement(n.h3,{id:"references",style:{position:"relative"}},s.createElement(n.a,{href:"#references","aria-label":"references permalink",className:"anchor before"},s.createElement(n.span,{dangerouslySetInnerHTML:{__html:'<svg aria-hidden="true" focusable="false" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>'}})),"References"),"\n",s.createElement(n.ul,null,"\n",s.createElement(n.li,null,"\n",s.createElement(n.p,null,s.createElement(n.a,{href:"https://www.w3schools.com/python/ref_keyword_pass.asp"},"Python: pass keyword")),"\n"),"\n",s.createElement(n.li,null,"\n",s.createElement(n.p,null,s.createElement(n.a,{href:"https://docs.circuitpython.org/projects/ble/en/latest/api.html#adafruit_ble.BLERadio"},"BLERadio: start_advertising & stop_advertising")),"\n"),"\n",s.createElement(n.li,null,"\n",s.createElement(n.p,null,s.createElement(n.a,{href:"https://docs.circuitpython.org/projects/ble/en/latest/api.html#adafruit_ble.BLERadio.connected"},"BLERadio: connected")),"\n"),"\n",s.createElement(n.li,null,"\n",s.createElement(n.p,null,s.createElement(n.a,{href:"https://docs.circuitpython.org/projects/ble/en/latest/services.html#adafruit_ble.services.nordic.UARTService"},"UARTService")),"\n"),"\n",s.createElement(n.li,null,"\n",s.createElement(n.p,null,s.createElement(n.a,{href:"https://docs.circuitpython.org/projects/ble/en/latest/advertising.html#adafruit_ble.advertising.standard.ProvideServicesAdvertisement"},"ProvideServicesAdvertisement")),"\n"),"\n",s.createElement(n.li,null,"\n",s.createElement(n.p,null,s.createElement(n.a,{href:"https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit_bluefruit_connect.packet.Packet"},"Packet")),"\n"),"\n",s.createElement(n.li,null,"\n",s.createElement(n.p,null,s.createElement(n.a,{href:"https://docs.circuitpython.org/projects/bluefruitconnect/en/latest/api.html#adafruit_bluefruit_connect.color_packet.ColorPacket"},"ColorPacket")),"\n"),"\n"))}var c=function(e){void 0===e&&(e={});const{wrapper:n}=Object.assign({},(0,a.RP)(),e.components);return n?s.createElement(n,e,s.createElement(l,e)):l(e)},r=t(4810),o=t(6273),i=t(9975),p=t(8509);const u=e=>{var n,t,a,l;let{children:c,data:p,pageContext:u,location:m}=e;const d=u.frontmatter.title,h=p.mdx.tableOfContents.items,k=p.allMdx.nodes,[f,E]=function(e,n){const t=e.length,a=e.findIndex((e=>n.pathname.includes(e.fields.slug))),s=0!==a&&e[a-1];return[a!==t-1&&e[a+1],s]}(k,m);return s.createElement(i.A,{location:m},s.createElement("article",{className:"exercise-main content"},s.createElement(o.A,{location:m,nodes:k,toc:h}),s.createElement("div",{className:"exercise-content"},s.createElement("header",null,s.createElement("h2",null,d)),c)),s.createElement("nav",{className:"content"},s.createElement("ul",{className:"exercise-nav"},s.createElement("li",null,E&&s.createElement(r.N_,{to:E.fields.slug,rel:"prev"},"← Exercise ",null===(n=E.frontmatter)||void 0===n?void 0:n.exercise," |"," ",null===(t=E.frontmatter)||void 0===t?void 0:t.title)),s.createElement("li",null,f&&s.createElement(r.N_,{to:f.fields.slug,rel:"next"},"Exercise ",null===(a=f.frontmatter)||void 0===a?void 0:a.exercise," |"," ",null===(l=f.frontmatter)||void 0===l?void 0:l.title," →")))))};function m(e){return s.createElement(u,e,s.createElement(c,e))}const d=e=>{let{pageContext:n}=e;const t=`${n.frontmatter.title} | Level ${n.frontmatter.level} | Exercise ${n.frontmatter.exercise}`;return s.createElement(p.A,{title:t},s.createElement("meta",{name:"description",content:n.description}))}},6273:function(e,n,t){var a=t(6540),s=t(4810);const l=e=>{let{location:n,nodes:t,toc:l}=e;return t.map(((e,t)=>{const c=n.pathname.includes(e.fields.slug),r=e.frontmatter.title;return a.createElement("li",{className:c?"current":"",key:`exercise-${t}`},a.createElement(s.N_,{to:e.fields.slug},e.frontmatter.exercise," ) ",r),c&&l&&a.createElement("nav",{className:"nav exercise-content-nav"},a.createElement("ul",null,l.map(((e,n)=>a.createElement("li",{key:`toc-${n}`},a.createElement(s.N_,{to:e.url},e.title)))))))}))};n.A=e=>{let{location:n,nodes:t,toc:s}=e;const c=function(e){const n=[];return e.forEach((e=>{n.includes(e.frontmatter.level)||n.push(e.frontmatter.level)})),n}(t);return a.createElement("nav",{className:"nav exercise-nav"},c.map(((e,c)=>{const r=t.filter((n=>n.frontmatter.level===e&&!!n.frontmatter.exercise));return a.createElement("div",{key:`level-${c}`},null!==e&&a.createElement("h3",null,"Level ",e),a.createElement("ul",null,a.createElement(l,{location:n,nodes:r,toc:s})))})))}},8509:function(e,n,t){var a=t(6540),s=t(4810);n.A=function(e){let{title:n,children:t}=e;const l=(0,s.GR)("3103987098");return a.createElement(a.Fragment,null,a.createElement("title",null,n," | ",l.site.siteMetadata.title),t)}},7203:function(e,n,t){var a=t(6540);n.A=function(e){let{title:n,subtitle:t}=e;const s=`hero hero-${n.split(" ").join("-").toLowerCase()}`;return a.createElement("article",{className:s},a.createElement("div",{className:"pane"},a.createElement("header",{className:"content"},a.createElement("h2",null,a.createElement("span",{className:"cpx-title"},n))),a.createElement("section",{className:"content"},a.createElement("span",{className:"cpx-title"},t))))}},9975:function(e,n,t){t.d(n,{A:function(){return u}});var a=t(6540),s=t(8453);var l=()=>a.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",a.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),c=t(4810);var r=e=>{let{location:n}=e;const t={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return a.createElement("div",{className:"content"},a.createElement("h1",null,a.createElement(c.N_,{className:"logo-link",to:"/"},"Makerspace")),a.createElement("div",{className:"header-nav"},a.createElement("ul",null,Object.keys(t).map((function(e){const s=t[e],l=s===n.pathname?"nav-link-current":"nav-link";return a.createElement("li",{key:e},a.createElement(c.N_,{className:l,to:s},e))})))))};function o(e){let{term:n,definition:t}=e;return a.createElement("div",null,a.createElement("dt",null,n),a.createElement("dd",null,t))}var i=function(e){let{name:n,computerType:t,mpType:s,language:l}=e;return a.createElement("div",{className:"summary-card"},a.createElement("h3",null,n),a.createElement("dl",null,t&&a.createElement(o,{term:"Computer",definition:t}),s&&a.createElement(o,{term:"Microprocessor",definition:s}),l&&a.createElement(o,{term:"Language",definition:l})))};const p={Hero:t(7203).A,Link:c.N_,SummaryCard:i,Translations:function(){const e=(0,c.GR)("2398385559").allDirectory.nodes.map((e=>e.base));return a.createElement("ul",null,e.map((e=>{const n=`/exercises/${e}/`;return a.createElement("li",null,a.createElement(c.N_,{to:n},e))})))}};var u=function(e){let{location:n,children:t}=e;return a.createElement("div",{className:"main"},a.createElement("header",{className:"header-main"},a.createElement(r,{location:n})),a.createElement("main",{className:"body-main"},a.createElement(s.xA,{components:p},t)),a.createElement("footer",{className:"footer-main"},a.createElement(l,null)))}},8453:function(e,n,t){t.d(n,{RP:function(){return l},xA:function(){return r}});var a=t(6540);const s=a.createContext({});function l(e){const n=a.useContext(s);return a.useMemo((()=>"function"==typeof e?e(n):{...n,...e}),[n,e])}const c={};function r({components:e,children:n,disableParentContext:t}){let r;return r=t?"function"==typeof e?e({}):e||c:l(e),a.createElement(s.Provider,{value:r},n)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-en-us-circuitpython-robotics-e-8-index-md-6990eb76d095bf1f37b4.js.map