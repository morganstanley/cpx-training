"use strict";(self.webpackChunk_morgan_stanley_makerspace_cpx_intro=self.webpackChunk_morgan_stanley_makerspace_cpx_intro||[]).push([[4065],{7330:function(n,s,a){a.r(s),a.d(s,{Head:function(){return d},default:function(){return m}});var t=a(8453),e=a(6540);function p(n){const s=Object.assign({p:"p",a:"a",span:"span",ul:"ul",li:"li",strong:"strong"},(0,t.RP)(),n.components);return e.createElement(e.Fragment,null,e.createElement(s.p,null,"Reprenons ",e.createElement(s.a,{href:"../L2-E1"},"là où nous en étions avec les variables"),"."),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">def</span> <span class="token function">ma_fonction</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>\n    <span class="token keyword">return</span> x <span class="token operator">+</span> <span class="token number">1</span>\n\n<span class="token keyword">def</span> <span class="token function">trouver_volume</span><span class="token punctuation">(</span>longueur<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> largeur<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">,</span> profondeur<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Longueur = "</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>longueur<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Largeur = "</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>largeur<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"Profondeur = "</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>profondeur<span class="token punctuation">)</span><span class="token punctuation">)</span>\n        <span class="token keyword">return</span> longueur <span class="token operator">*</span> largeur <span class="token operator">*</span> profondeur\n\ntrouver_volume<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>\ntrouver_volume<span class="token punctuation">(</span>longueur<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> profondeur<span class="token operator">=</span><span class="token number">2</span><span class="token punctuation">,</span> largeur<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span>\ntrouver_volume<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> profondeur<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> largeur<span class="token operator">=</span><span class="token number">4</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",e.createElement(s.ul,null,"\n",e.createElement(s.li,null,"Certaines tâches nécessitent d’être remplies plusieurs fois dans un programme."),"\n",e.createElement(s.li,null,"Plutôt que de réécrire le même code à plusieurs endroits, une fonction peut être définie en utilisant le mot-clé def."),"\n",e.createElement(s.li,null,"Les définitions de fonctions peuvent inclure des paramètres, fournissant des données d’entrée à la fonction."),"\n"),"\n",e.createElement(s.p,null,e.createElement(s.strong,null,"Appeler une fonction"),": ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">allumerLumiere()</code>'}})," en écrivant le nom de la fonction suivi de parenthèses"),"\n",e.createElement(s.p,null,e.createElement(s.strong,null,"Définir une fonction"),": mot-clé ",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<code class="language-text">def</code>'}})," suivi du nom de la fonction, de parenthèses et d’un deux-points"),"\n",e.createElement(s.ul,null,"\n",e.createElement(s.li,null,"Le corps de la fonction, ou le code de ce que la fonction fera réellement, vient après le deux-points sur une ligne ",e.createElement(s.strong,null,"indentée")),"\n"),"\n",e.createElement(s.p,null,e.createElement(s.strong,null,"Paramètres de fonction"),":"),"\n",e.createElement(s.ul,null,"\n",e.createElement(s.li,null,"Parfois, les fonctions nécessitent des entrées pour fournir des données à leur code. Ces entrées sont définies à l’aide de paramètres."),"\n",e.createElement(s.li,null,"Les paramètres sont des variables définies dans la définition de la fonction."),"\n",e.createElement(s.li,null,"Ils reçoivent les valeurs qui ont été passées en tant qu’arguments lorsque la fonction a été appelée, ailleurs dans le code."),"\n"),"\n",e.createElement(s.p,null,e.createElement(s.strong,null,"Arguments de fonction"),":"),"\n",e.createElement(s.ul,null,"\n",e.createElement(s.li,null,"Les paramètres en python sont des variables— des espaces réservés pour les valeurs réelles dont la fonction a besoin"),"\n",e.createElement(s.li,null,"Lorsque la fonction est appelée, ces valeurs sont passées en tant qu’arguments."),"\n"),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">import</span> time\n\n<span class="token keyword">import</span> board\n<span class="token keyword">import</span> neopixel\n\npixels <span class="token operator">=</span> neopixel<span class="token punctuation">.</span>NeoPixel<span class="token punctuation">(</span>board<span class="token punctuation">.</span>NEOPIXEL<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> brightness<span class="token operator">=</span><span class="token number">.1</span><span class="token punctuation">)</span>\n\n<span class="token comment"># Couleurs</span>\nNOIR <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nROUGE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nROSE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span>\nORANGE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nJAUNE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nVERT <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\nCYAN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nVIOLET <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nBLEU <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\nBLEU_CLAIR <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">)</span>\nBLANC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n\ncouleurs <span class="token operator">=</span> <span class="token punctuation">[</span>\n        ROSE<span class="token punctuation">,</span>\n        ROUGE<span class="token punctuation">,</span>\n        ORANGE<span class="token punctuation">,</span>\n        JAUNE<span class="token punctuation">,</span>\n        VERT<span class="token punctuation">,</span>\n        CYAN<span class="token punctuation">,</span>\n        VIOLET<span class="token punctuation">,</span>\n        BLEU<span class="token punctuation">,</span>\n        BLEU_CLAIR<span class="token punctuation">,</span>\n        BLANC\n<span class="token punctuation">]</span>\n\npixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span>NOIR<span class="token punctuation">)</span>\npixels<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>pixels<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n                pixels<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> couleurs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n                time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">.05</span><span class="token punctuation">)</span>\n        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n</code></pre></div>'}}),"\n",e.createElement(s.p,null,"Et faire une fonction du comportement:"),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token keyword">def</span> <span class="token function">cercleSimple</span><span class="token punctuation">(</span>temps<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token comment"># Couleurs</span>\n        ROUGE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        ROSE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span>\n        ORANGE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        JAUNE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        VERT <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        CYAN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n        VIOLET <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n        BLEU <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n        BLEU_CLAIR <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">)</span>\n        BLANC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n\n        couleurs <span class="token operator">=</span> <span class="token punctuation">[</span>\n                ROSE<span class="token punctuation">,</span>\n                ROUGE<span class="token punctuation">,</span>\n                ORANGE<span class="token punctuation">,</span>\n                JAUNE<span class="token punctuation">,</span>\n                VERT<span class="token punctuation">,</span>\n                CYAN<span class="token punctuation">,</span>\n                VIOLET<span class="token punctuation">,</span>\n                BLEU<span class="token punctuation">,</span>\n                BLEU_CLAIR<span class="token punctuation">,</span>\n                BLANC\n        <span class="token punctuation">]</span>\n\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>pixels<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n                pixels<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> couleurs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n                time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">.05</span><span class="token punctuation">)</span>\n        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span></code></pre></div>'}}),"\n",e.createElement(s.p,null,"Comment utiliser:"),"\n",e.createElement(s.span,{dangerouslySetInnerHTML:{__html:'<div class="gatsby-highlight" data-language="python"><pre class="language-python"><code class="language-python"><span class="token comment"># CircuitPlaygroundExpress_NeoPixel</span>\n<span class="token comment"># https://learn.adafruit.com/adafruit-circuit-playground-express/circuitpython-neopixel</span>\n\n<span class="token keyword">import</span> time\n\n<span class="token keyword">import</span> board\n<span class="token keyword">import</span> neopixel\n\npixels <span class="token operator">=</span> neopixel<span class="token punctuation">.</span>NeoPixel<span class="token punctuation">(</span>board<span class="token punctuation">.</span>NEOPIXEL<span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> brightness<span class="token operator">=</span><span class="token number">.1</span><span class="token punctuation">)</span>\npixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\npixels<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>\n\n<span class="token comment"># choisir quelles démos jouer</span>\n<span class="token comment"># 1 signifie jouer, 0 signifie ne pas jouer!</span>\ndemoCercleSimple <span class="token operator">=</span> <span class="token number">1</span>\n\n<span class="token keyword">def</span> <span class="token function">cercleSimple</span><span class="token punctuation">(</span>temps<span class="token punctuation">)</span><span class="token punctuation">:</span>\n        <span class="token comment"># Couleurs</span>\n        ROUGE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        ROSE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">120</span><span class="token punctuation">)</span>\n        ORANGE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        JAUNE <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        VERT <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>\n        CYAN <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n        VIOLET <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n        BLEU <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n        BLEU_CLAIR <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token number">175</span><span class="token punctuation">)</span>\n        BLANC <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">,</span> <span class="token number">255</span><span class="token punctuation">)</span>\n\n        couleurs <span class="token operator">=</span> <span class="token punctuation">[</span>\n                ROSE<span class="token punctuation">,</span>\n                ROUGE<span class="token punctuation">,</span>\n                ORANGE<span class="token punctuation">,</span>\n                JAUNE<span class="token punctuation">,</span>\n                VERT<span class="token punctuation">,</span>\n                CYAN<span class="token punctuation">,</span>\n                VIOLET<span class="token punctuation">,</span>\n                BLEU<span class="token punctuation">,</span>\n                BLEU_CLAIR<span class="token punctuation">,</span>\n                BLANC\n        <span class="token punctuation">]</span>\n\n        <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>pixels<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n                pixels<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">=</span> couleurs<span class="token punctuation">[</span>i<span class="token punctuation">]</span>\n                time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>temps<span class="token punctuation">)</span>\n        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>\n\n\n<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>\n        <span class="token keyword">if</span> demoCercleSimple<span class="token punctuation">:</span>\n                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">\'Démo Cercle Simple\'</span><span class="token punctuation">)</span>\n                cercleSimple<span class="token punctuation">(</span><span class="token number">.05</span><span class="token punctuation">)</span>\n        pixels<span class="token punctuation">.</span>fill<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span><span class="token punctuation">)</span></code></pre></div>'}}))}var o=function(n){void 0===n&&(n={});const{wrapper:s}=Object.assign({},(0,t.RP)(),n.components);return s?e.createElement(s,n,e.createElement(p,n)):p(n)},c=a(4810),l=a(6273),u=a(9975),r=a(8509),i=a(3562);const k=n=>{var s,a,t,p;let{children:o,data:r,pageContext:k,location:m}=n;const d=k.frontmatter.title,b=r.mdx.tableOfContents.items,E=r.mdx.fields.slug,f=(0,e.useMemo)((()=>r.allDirectory.nodes.map((n=>n.base))),[r.allDirectory.nodes]),g=(0,i.U)(E,f),v=(0,i.Z)(r.allMdx.nodes,g),[h,y]=function(n,s){const a=n.length,t=n.findIndex((n=>s.pathname.includes(n.fields.slug))),e=0!==t&&n[t-1];return[t!==a-1&&n[t+1],e]}(v,m);return e.createElement(u.A,{location:m},e.createElement("article",{className:"exercise-main content"},e.createElement(l.A,{location:m,nodes:v,toc:b}),e.createElement("div",{className:"exercise-content"},e.createElement("header",null,e.createElement("h2",null,d)),o)),e.createElement("nav",{className:"content"},e.createElement("ul",{className:"exercise-nav"},e.createElement("li",null,y&&e.createElement(c.N_,{to:y.fields.slug,rel:"prev"},"← Exercise ",null===(s=y.frontmatter)||void 0===s?void 0:s.exercise," |"," ",null===(a=y.frontmatter)||void 0===a?void 0:a.title)),e.createElement("li",null,h&&e.createElement(c.N_,{to:h.fields.slug,rel:"next"},"Exercise ",null===(t=h.frontmatter)||void 0===t?void 0:t.exercise," |"," ",null===(p=h.frontmatter)||void 0===p?void 0:p.title," →")))))};function m(n){return e.createElement(k,n,e.createElement(o,n))}const d=n=>{let{pageContext:s}=n;const a=`${s.frontmatter.title} | Level ${s.frontmatter.level} | Exercise ${s.frontmatter.exercise}`;return e.createElement(r.A,{title:a},e.createElement("meta",{name:"description",content:s.description}))}},6273:function(n,s,a){var t=a(6540),e=a(4810);const p=n=>{let{location:s,nodes:a,toc:p}=n;return a.map(((n,a)=>{const o=s.pathname.includes(n.fields.slug),c=n.frontmatter.title;return t.createElement("li",{className:o?"current":"",key:`exercise-${a}`},t.createElement(e.N_,{to:n.fields.slug},n.frontmatter.exercise," ) ",c),o&&p&&t.createElement("nav",{className:"nav exercise-content-nav"},t.createElement("ul",null,p.map(((n,s)=>t.createElement("li",{key:`toc-${s}`},t.createElement(e.N_,{to:n.url},n.title)))))))}))};s.A=n=>{let{location:s,nodes:a,toc:e}=n;const o=function(n){const s=[];return n.forEach((n=>{s.includes(n.frontmatter.level)||s.push(n.frontmatter.level)})),s}(a);return t.createElement("nav",{className:"nav exercise-nav"},o.map(((n,o)=>{const c=a.filter((s=>s.frontmatter.level===n&&!!s.frontmatter.exercise));return t.createElement("div",{key:`level-${o}`},null!==n&&t.createElement("h3",null,"Level ",n),t.createElement("ul",null,t.createElement(p,{location:s,nodes:c,toc:e})))})))}},8509:function(n,s,a){var t=a(6540),e=a(4810);s.A=function(n){let{title:s,children:a}=n;const p=(0,e.GR)("3103987098");return t.createElement(t.Fragment,null,t.createElement("title",null,s," | ",p.site.siteMetadata.title),a)}},7203:function(n,s,a){var t=a(6540);s.A=function(n){let{title:s,subtitle:a}=n;const e=`hero hero-${s.split(" ").join("-").toLowerCase()}`;return t.createElement("article",{className:e},t.createElement("div",{className:"pane"},t.createElement("header",{className:"content"},t.createElement("h2",null,t.createElement("span",{className:"cpx-title"},s))),t.createElement("section",{className:"content"},t.createElement("span",{className:"cpx-title"},a))))}},9975:function(n,s,a){a.d(s,{A:function(){return i}});var t=a(6540),e=a(8453);var p=()=>t.createElement("div",{className:"content"},"Thanks! We hope you found what you are looking for. Please feel free to contribute via"," ",t.createElement("a",{href:"https://github.com/MorganStanley/cpx-training",target:"_blank",rel:"noreferrer"},"Github"),"."),o=a(4810);var c=n=>{let{location:s}=n;const a={Learn:"/exercises",Teach:"/teach","Make a Makerspace":"/makerspace",About:"/about"};return t.createElement("div",{className:"content"},t.createElement("h1",null,t.createElement(o.N_,{className:"logo-link",to:"/"},"Makerspace")),t.createElement("div",{className:"header-nav"},t.createElement("ul",null,Object.keys(a).map((function(n){const e=a[n],p=e===s.pathname?"nav-link-current":"nav-link";return t.createElement("li",{key:n},t.createElement(o.N_,{className:p,to:e},n))})))))};function l(n){let{term:s,definition:a}=n;return t.createElement("div",null,t.createElement("dt",null,s),t.createElement("dd",null,a))}var u=function(n){let{name:s,computerType:a,mpType:e,language:p}=n;return t.createElement("div",{className:"summary-card"},t.createElement("h3",null,s),t.createElement("dl",null,a&&t.createElement(l,{term:"Computer",definition:a}),e&&t.createElement(l,{term:"Microprocessor",definition:e}),p&&t.createElement(l,{term:"Language",definition:p})))};const r={Hero:a(7203).A,Link:o.N_,SummaryCard:u,Translations:function(){const n=(0,o.GR)("2398385559").allDirectory.nodes.map((n=>n.base));return t.createElement("ul",null,n.map((n=>{const s=`/exercises/${n}/`;return t.createElement("li",null,t.createElement(o.N_,{to:s},n))})))}};var i=function(n){let{location:s,children:a}=n;return t.createElement("div",{className:"main"},t.createElement("header",{className:"header-main"},t.createElement(c,{location:s})),t.createElement("main",{className:"body-main"},t.createElement(e.xA,{components:r},a)),t.createElement("footer",{className:"footer-main"},t.createElement(p,null)))}},3562:function(n,s,a){function t(n,s){return n.filter((n=>n.fields.slug.includes(`/${s}/`)))}function e(n,s){let a;const t=n.split("/");return s.forEach((n=>{t.includes(n)&&(a=n)})),a}a.d(s,{U:function(){return e},Z:function(){return t}})},8453:function(n,s,a){a.d(s,{RP:function(){return p},xA:function(){return c}});var t=a(6540);const e=t.createContext({});function p(n){const s=t.useContext(e);return t.useMemo((()=>"function"==typeof n?n(s):{...s,...n}),[s,n])}const o={};function c({components:n,children:s,disableParentContext:a}){let c;return c=a?"function"==typeof n?n({}):n||o:p(n),t.createElement(e.Provider,{value:c},s)}}}]);
//# sourceMappingURL=component---src-templates-exercise-jsx-content-file-path-content-exercises-fr-ca-circuitpython-level-2-l-2-e-4-index-md-a32dc2b5d335425f98d4.js.map