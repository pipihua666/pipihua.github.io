(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2mZ9":function(e,t,n){"use strict";n.r(t);var o=n("mXGw"),a=n.n(o),i=n("OgTa"),r=n("h8tv"),l=n("UutA"),c=n("LiT1"),s=n.n(c),d=l.default.nav.withConfig({displayName:"toc__StyledNav",componentId:"sc-1hwup8p-0"})([".toc-list{list-style-type:none;margin:0;padding:0;.toc-list{padding-left:17px;padding-top:10px;}}.toc-list-item{line-height:1.2em;padding-bottom:10px;&:last-child{padding-bottom:0;}}.toc-link{color:#808080;text-decoration:none;}.is-active-link{color:#404040;font-weight:700;}"]),u=function(e){var t=e.onClick;return Object(o.useEffect)((function(){return s.a.init({tocSelector:".toc",contentSelector:".post",headingSelector:"h2,h3",scrollSmooth:!0,scrollSmoothDuration:1}),function(){return s.a.destroy()}})),a.a.createElement(d,{className:"toc",onClick:t})},m=n("5EGp"),p=n.n(m),f=n("eOxE"),h=l.default.div.withConfig({displayName:"reading-progress__ReadingProgressBar",componentId:"vxjjnv-0"})(["position:sticky;height:5px;top:70px;background-color:",";z-index:500;"],(function(e){return e.color?e.color:f.a.layout.primaryColor})),g=function(e){var t=e.color,n=e.target,i=Object(o.useState)(0),r=i[0],l=i[1],c=function(){if(n.current){var e=n.current,t=e.clientHeight-e.offsetTop-window.innerHeight,o=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;return 0===o?l(0):o>t?l(100):void l(o/t*100)}};return Object(o.useEffect)((function(){return window.addEventListener("scroll",c),function(){return window.removeEventListener("scroll",c)}})),a.a.createElement(h,{style:{width:r+"%"},color:t})},y=n("Wbzz"),x=n("4dPn"),b=n.n(x),C=n("g+6s"),v=function(e){e.id;return a.a.createElement(a.a.Fragment,null)},E=n("foXd"),S=n("A4YR"),w=Object(l.default)(r.a).withConfig({displayName:"post__PostContainer",componentId:"h8gzap-0"})(["display:flex;justify-content:center;padding:0 !important;"]),k=l.default.div.withConfig({displayName:"post__LeftSidebar",componentId:"h8gzap-1"})(["min-width:255px;max-width:225px;transition:opacity .5s,z-index .5s;@media (max-width:","){position:fixed;opacity:",";z-index:",";background-color:#fff;width:100% !important;max-width:100%;padding:0 20px;margin-top:-5px;height:calc(100vh - 70px);}"],f.a.breakpoints.xl,(function(e){return e.show?1:0}),(function(e){return e.show?1e3:-1})),N=l.default.div.withConfig({displayName:"post__PostContent",componentId:"h8gzap-2"})(["margin-top:-5px;border-right:1px #e5eff5 solid;border-left:1px #e5eff5 solid;background-color:#fff;box-shadow:0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.1);z-index:10;width:1035px;max-width:100%;li > a,p > a{color:",";border-bottom:2px "," solid;}pre{margin:30px 0;}blockquote{border-left:4px "," solid;background-color:",';margin:30px 0;padding:5px 20px;border-radius:.3em;}h3::before,h4::before,h5::before,h6::before{display:block;content:" ";height:90px;margin-top:-90px;visibility:hidden;}h2{border-top:1px solid #ececec;margin-top:44px;padding-top:40px;line-height:1.2;}code[class*="language-text"]{padding:5px;}p > img{max-width:100%;border-radius:.3em;margin:30px 0;}hr{border-top:1px solid #ececec;border-bottom:0;margin-top:44px;margin-bottom:40px;}.gatsby-resp-image-link{margin:30px 0;max-width:100%;.gatsby-resp-image-image{border-radius:.3em;}}'],f.a.layout.linkColor,f.a.layout.linkColor,f.a.layout.primaryColor,f.a.layout.backgroundColor),L=l.default.div.withConfig({displayName:"post__TocWrapper",componentId:"h8gzap-3"})(["position:sticky;top:70px;padding:40px 30px 40px 0;"]),O=l.default.header.withConfig({displayName:"post__PostHeader",componentId:"h8gzap-4"})(["padding:40px;@media (max-width:","){padding:20px;}"],f.a.breakpoints.sm),_=Object(l.default)(p.a).withConfig({displayName:"post__FeaturedImage",componentId:"h8gzap-5"})(["border-radius:0;@media (max-width:","){margin-left:-1px;margin-right:-1px;}"],f.a.breakpoints.xl),A=l.default.section.withConfig({displayName:"post__StyledPost",componentId:"h8gzap-6"})(["padding:40px;@media (max-width:","){padding:20px;}"],f.a.breakpoints.sm),I=l.default.section.withConfig({displayName:"post__PostMeta",componentId:"h8gzap-7"})(["display:flex;justify-content:space-between;opacity:.8;font-size:.9em;"]),T=l.default.h1.withConfig({displayName:"post__PostTitle",componentId:"h8gzap-8"})(["margin:0;padding:0;"]),z=l.default.footer.withConfig({displayName:"post__PostFooter",componentId:"h8gzap-9"})(["background-color:#fafafa;font-size:.8em;color:#666;padding:40px;line-height:1em;p{margin:5px 0;}"]),j=Object(l.default)(y.Link).withConfig({displayName:"post__FooterTagLink",componentId:"h8gzap-10"})(["color:#000 !important;text-decoration:none;border-bottom:0 !important;"]),q=l.default.section.withConfig({displayName:"post__PostAddition",componentId:"h8gzap-11"})(["background-color:#fff;border-top:1px #e5eff5 solid;border-bottom:1px #e5eff5 solid;z-index:700;position:relative;padding:40px;"]),H=Object(l.default)(r.a).withConfig({displayName:"post__PostAdditionContent",componentId:"h8gzap-12"})(["display:flex;justify-content:space-between;"]),P=l.default.div.withConfig({displayName:"post__BioWrapper",componentId:"h8gzap-13"})(["width:50%;margin:auto;@media (max-width:","){width:100%;}"],f.a.breakpoints.sm),U=l.default.button.withConfig({displayName:"post__ToggleTocButton",componentId:"h8gzap-14"})(["display:flex;position:fixed;justify-content:center;right:20px;bottom:20px;border-radius:100%;box-shadow:0 0 3px rgba(0,0,0,.03),0 3px 46px rgba(0,0,0,.1);border:0;z-index:5000;width:50px;height:50px;background-color:#20232a;color:#fff;outline:none;@media (min-width:","){display:none;}"],f.a.breakpoints.xl);t.default=function(e){var t=e.data,n=e.location,r=Object(o.useState)(!1),l=r[0],c=r[1],s=t.post,d=Object(o.createRef)(),m=t.primaryTag,p=function(){return c(!l)};return a.a.createElement(i.a,{bigHeader:!1},a.a.createElement(E.a,{location:n,title:s.frontmatter.title,publishedAt:s.frontmatter.created,updatedAt:s.frontmatter.updated,tags:s.frontmatter.tags,description:s.frontmatter.excerpt,image:s.frontmatter.featuredImage?s.frontmatter.featuredImage.childImageSharp.sizes.src:null}),a.a.createElement(g,{target:d,color:m?m.color:void 0}),a.a.createElement(w,null,s.headings.find((function(e){return e.depth>1}))&&a.a.createElement(a.a.Fragment,null,a.a.createElement(k,{show:l},a.a.createElement(L,null,a.a.createElement(u,{onClick:p}))),a.a.createElement(U,{role:"button","aria-label":"Toggle table of contents",onClick:p},l?a.a.createElement(S.c,null):a.a.createElement(S.a,null))),a.a.createElement(N,null,a.a.createElement("article",{className:"post",ref:d},a.a.createElement(O,null,a.a.createElement(I,null,s.frontmatter.tags.length>0&&a.a.createElement(y.Link,{to:"/tag/"+b()(s.frontmatter.tags[0],{lower:!0})},s.frontmatter.tags[0]),a.a.createElement("time",{dateTime:s.frontmatter.created},s.frontmatter.createdPretty)),a.a.createElement(T,null,s.frontmatter.title)),s.frontmatter.featuredImage&&a.a.createElement(_,{sizes:s.frontmatter.featuredImage.childImageSharp.sizes}),a.a.createElement(A,{dangerouslySetInnerHTML:{__html:s.html},className:"post"}),a.a.createElement(z,null,a.a.createElement("p",null,"Published under ",s.frontmatter.tags.map((function(e,t){return a.a.createElement("span",{key:t},a.a.createElement(j,{to:"/tag/"+b()(e,{lower:!0})},e),s.frontmatter.tags.length>t+1&&a.a.createElement(a.a.Fragment,null,", "))}))," on ",a.a.createElement("time",{dateTime:s.frontmatter.created},s.frontmatter.createdPretty),"."),s.frontmatter.updated!==s.frontmatter.created&&a.a.createElement("p",null,"Last updated on ",a.a.createElement("time",{dateTime:s.frontmatter.updated},s.frontmatter.updatedPretty),"."))))),a.a.createElement(q,null,a.a.createElement(H,null,a.a.createElement(P,null,a.a.createElement(C.a,{textAlign:"center",showName:!0})))),a.a.createElement(v,{id:s.id}))}},"4dPn":function(e,t,n){var o;o=function(){var e=JSON.parse('{"$":"dollar","%":"percent","&":"and","<":"less",">":"greater","|":"or","¢":"cent","£":"pound","¤":"currency","¥":"yen","©":"(c)","ª":"a","®":"(r)","º":"o","À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","Æ":"AE","Ç":"C","È":"E","É":"E","Ê":"E","Ë":"E","Ì":"I","Í":"I","Î":"I","Ï":"I","Ð":"D","Ñ":"N","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","Ù":"U","Ú":"U","Û":"U","Ü":"U","Ý":"Y","Þ":"TH","ß":"ss","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","æ":"ae","ç":"c","è":"e","é":"e","ê":"e","ë":"e","ì":"i","í":"i","î":"i","ï":"i","ð":"d","ñ":"n","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","ù":"u","ú":"u","û":"u","ü":"u","ý":"y","þ":"th","ÿ":"y","Ā":"A","ā":"a","Ă":"A","ă":"a","Ą":"A","ą":"a","Ć":"C","ć":"c","Č":"C","č":"c","Ď":"D","ď":"d","Đ":"DJ","đ":"dj","Ē":"E","ē":"e","Ė":"E","ė":"e","Ę":"e","ę":"e","Ě":"E","ě":"e","Ğ":"G","ğ":"g","Ģ":"G","ģ":"g","Ĩ":"I","ĩ":"i","Ī":"i","ī":"i","Į":"I","į":"i","İ":"I","ı":"i","Ķ":"k","ķ":"k","Ļ":"L","ļ":"l","Ľ":"L","ľ":"l","Ł":"L","ł":"l","Ń":"N","ń":"n","Ņ":"N","ņ":"n","Ň":"N","ň":"n","Ō":"O","ō":"o","Ő":"O","ő":"o","Œ":"OE","œ":"oe","Ŕ":"R","ŕ":"r","Ř":"R","ř":"r","Ś":"S","ś":"s","Ş":"S","ş":"s","Š":"S","š":"s","Ţ":"T","ţ":"t","Ť":"T","ť":"t","Ũ":"U","ũ":"u","Ū":"u","ū":"u","Ů":"U","ů":"u","Ű":"U","ű":"u","Ų":"U","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","ź":"z","Ż":"Z","ż":"z","Ž":"Z","ž":"z","Ə":"E","ƒ":"f","Ơ":"O","ơ":"o","Ư":"U","ư":"u","ǈ":"LJ","ǉ":"lj","ǋ":"NJ","ǌ":"nj","Ș":"S","ș":"s","Ț":"T","ț":"t","ə":"e","˚":"o","Ά":"A","Έ":"E","Ή":"H","Ί":"I","Ό":"O","Ύ":"Y","Ώ":"W","ΐ":"i","Α":"A","Β":"B","Γ":"G","Δ":"D","Ε":"E","Ζ":"Z","Η":"H","Θ":"8","Ι":"I","Κ":"K","Λ":"L","Μ":"M","Ν":"N","Ξ":"3","Ο":"O","Π":"P","Ρ":"R","Σ":"S","Τ":"T","Υ":"Y","Φ":"F","Χ":"X","Ψ":"PS","Ω":"W","Ϊ":"I","Ϋ":"Y","ά":"a","έ":"e","ή":"h","ί":"i","ΰ":"y","α":"a","β":"b","γ":"g","δ":"d","ε":"e","ζ":"z","η":"h","θ":"8","ι":"i","κ":"k","λ":"l","μ":"m","ν":"n","ξ":"3","ο":"o","π":"p","ρ":"r","ς":"s","σ":"s","τ":"t","υ":"y","φ":"f","χ":"x","ψ":"ps","ω":"w","ϊ":"i","ϋ":"y","ό":"o","ύ":"y","ώ":"w","Ё":"Yo","Ђ":"DJ","Є":"Ye","І":"I","Ї":"Yi","Ј":"J","Љ":"LJ","Њ":"NJ","Ћ":"C","Џ":"DZ","А":"A","Б":"B","В":"V","Г":"G","Д":"D","Е":"E","Ж":"Zh","З":"Z","И":"I","Й":"J","К":"K","Л":"L","М":"M","Н":"N","О":"O","П":"P","Р":"R","С":"S","Т":"T","У":"U","Ф":"F","Х":"H","Ц":"C","Ч":"Ch","Ш":"Sh","Щ":"Sh","Ъ":"U","Ы":"Y","Ь":"","Э":"E","Ю":"Yu","Я":"Ya","а":"a","б":"b","в":"v","г":"g","д":"d","е":"e","ж":"zh","з":"z","и":"i","й":"j","к":"k","л":"l","м":"m","н":"n","о":"o","п":"p","р":"r","с":"s","т":"t","у":"u","ф":"f","х":"h","ц":"c","ч":"ch","ш":"sh","щ":"sh","ъ":"u","ы":"y","ь":"","э":"e","ю":"yu","я":"ya","ё":"yo","ђ":"dj","є":"ye","і":"i","ї":"yi","ј":"j","љ":"lj","њ":"nj","ћ":"c","ѝ":"u","џ":"dz","Ґ":"G","ґ":"g","Ғ":"GH","ғ":"gh","Қ":"KH","қ":"kh","Ң":"NG","ң":"ng","Ү":"UE","ү":"ue","Ұ":"U","ұ":"u","Һ":"H","һ":"h","Ә":"AE","ә":"ae","Ө":"OE","ө":"oe","฿":"baht","ა":"a","ბ":"b","გ":"g","დ":"d","ე":"e","ვ":"v","ზ":"z","თ":"t","ი":"i","კ":"k","ლ":"l","მ":"m","ნ":"n","ო":"o","პ":"p","ჟ":"zh","რ":"r","ს":"s","ტ":"t","უ":"u","ფ":"f","ქ":"k","ღ":"gh","ყ":"q","შ":"sh","ჩ":"ch","ც":"ts","ძ":"dz","წ":"ts","ჭ":"ch","ხ":"kh","ჯ":"j","ჰ":"h","Ẁ":"W","ẁ":"w","Ẃ":"W","ẃ":"w","Ẅ":"W","ẅ":"w","ẞ":"SS","Ạ":"A","ạ":"a","Ả":"A","ả":"a","Ấ":"A","ấ":"a","Ầ":"A","ầ":"a","Ẩ":"A","ẩ":"a","Ẫ":"A","ẫ":"a","Ậ":"A","ậ":"a","Ắ":"A","ắ":"a","Ằ":"A","ằ":"a","Ẳ":"A","ẳ":"a","Ẵ":"A","ẵ":"a","Ặ":"A","ặ":"a","Ẹ":"E","ẹ":"e","Ẻ":"E","ẻ":"e","Ẽ":"E","ẽ":"e","Ế":"E","ế":"e","Ề":"E","ề":"e","Ể":"E","ể":"e","Ễ":"E","ễ":"e","Ệ":"E","ệ":"e","Ỉ":"I","ỉ":"i","Ị":"I","ị":"i","Ọ":"O","ọ":"o","Ỏ":"O","ỏ":"o","Ố":"O","ố":"o","Ồ":"O","ồ":"o","Ổ":"O","ổ":"o","Ỗ":"O","ỗ":"o","Ộ":"O","ộ":"o","Ớ":"O","ớ":"o","Ờ":"O","ờ":"o","Ở":"O","ở":"o","Ỡ":"O","ỡ":"o","Ợ":"O","ợ":"o","Ụ":"U","ụ":"u","Ủ":"U","ủ":"u","Ứ":"U","ứ":"u","Ừ":"U","ừ":"u","Ử":"U","ử":"u","Ữ":"U","ữ":"u","Ự":"U","ự":"u","Ỳ":"Y","ỳ":"y","Ỵ":"Y","ỵ":"y","Ỷ":"Y","ỷ":"y","Ỹ":"Y","ỹ":"y","‘":"\'","’":"\'","“":"\\"","”":"\\"","†":"+","•":"*","…":"...","₠":"ecu","₢":"cruzeiro","₣":"french franc","₤":"lira","₥":"mill","₦":"naira","₧":"peseta","₨":"rupee","₩":"won","₪":"new shequel","₫":"dong","€":"euro","₭":"kip","₮":"tugrik","₯":"drachma","₰":"penny","₱":"peso","₲":"guarani","₳":"austral","₴":"hryvnia","₵":"cedi","₸":"kazakhstani tenge","₹":"indian rupee","₺":"turkish lira","₽":"russian ruble","₿":"bitcoin","℠":"sm","™":"tm","∂":"d","∆":"delta","∑":"sum","∞":"infinity","♥":"love","元":"yuan","円":"yen","﷼":"rial"}'),t=JSON.parse('{"de":{"Ä":"AE","ä":"ae","Ö":"OE","ö":"oe","Ü":"UE","ü":"ue","%":"prozent","&":"und","|":"oder","∑":"summe","∞":"unendlich","♥":"liebe"},"vi":{"Đ":"D","đ":"d"},"fr":{"%":"pourcent","&":"et","<":"plus petit",">":"plus grand","|":"ou","¢":"centime","£":"livre","¤":"devise","₣":"franc","∑":"somme","∞":"infini","♥":"amour"}}');function n(n,o){if("string"!=typeof n)throw new Error("slugify: string argument expected");var a=t[(o="string"==typeof o?{replacement:o}:o||{}).locale]||{},i=void 0===o.replacement?"-":o.replacement,r=n.normalize().split("").reduce((function(t,n){return t+(a[n]||e[n]||n).replace(o.remove||/[^\w\s$*_+~.()'"!\-:@]+/g,"")}),"").trim().replace(new RegExp("[\\s"+i+"]+","g"),i);return o.lower&&(r=r.toLowerCase()),o.strict&&(r=r.replace(new RegExp("[^a-zA-Z0-9"+i+"]","g"),"").replace(new RegExp("[\\s"+i+"]+","g"),i)),r}return n.extend=function(t){for(var n in t)e[n]=t[n]},n},e.exports=o(),e.exports.default=o()},ALjP:function(e,t){e.exports=function(e){var t=[].reduce;function n(e){return e[e.length-1]}function o(e){return+e.nodeName.split("H").join("")}function a(t){if(!(t instanceof window.HTMLElement))return t;if(e.ignoreHiddenElements&&(!t.offsetHeight||!t.offsetParent))return null;var n={id:t.id,children:[],nodeName:t.nodeName,headingLevel:o(t),textContent:e.headingLabelCallback?String(e.headingLabelCallback(t.textContent)):t.textContent.trim()};return e.includeHtml&&(n.childNodes=t.childNodes),e.headingObjectCallback?e.headingObjectCallback(n,t):n}return{nestHeadingsArray:function(o){return t.call(o,(function(t,o){var i=a(o);return i&&function(t,o){for(var i=a(t),r=i.headingLevel,l=o,c=n(l),s=r-(c?c.headingLevel:0);s>0;)(c=n(l))&&void 0!==c.children&&(l=c.children),s--;r>=e.collapseDepth&&(i.isCollapsed=!0),l.push(i)}(i,t.nest),t}),{nest:[]})},selectHeadings:function(t,n){var o=n;e.ignoreSelector&&(o=n.split(",").map((function(t){return t.trim()+":not("+e.ignoreSelector+")"})));try{return document.querySelector(t).querySelectorAll(o)}catch(a){return console.warn("Element not found: "+t),null}}}}},LiT1:function(e,t,n){(function(o){var a,i,r,l;l=void 0!==o?o:this.window||this.global,i=[],a=function(e){"use strict";var t,o,a,i=n("aTXG"),r={},l={},c=n("ffFi"),s=n("ALjP"),d=n("XibM"),u=!!(e&&e.document&&e.document.querySelector&&e.addEventListener);if("undefined"!=typeof window||u){var m=Object.prototype.hasOwnProperty;return l.destroy=function(){if(!r.skipRendering)try{document.querySelector(r.tocSelector).innerHTML=""}catch(e){console.warn("Element not found: "+r.tocSelector)}r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).removeEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).removeEventListener("resize",this._scrollListener,!1),t&&document.querySelector(r.scrollContainer).removeEventListener("click",this._clickListener,!1)):(document.removeEventListener("scroll",this._scrollListener,!1),document.removeEventListener("resize",this._scrollListener,!1),t&&document.removeEventListener("click",this._clickListener,!1))},l.init=function(e){if(u&&(r=function(){for(var e={},t=0;t<arguments.length;t++){var n=arguments[t];for(var o in n)m.call(n,o)&&(e[o]=n[o])}return e}(i,e||{}),this.options=r,this.state={},r.scrollSmooth&&(r.duration=r.scrollSmoothDuration,r.offset=r.scrollSmoothOffset,l.scrollSmooth=n("yVGw").initSmoothScrolling(r)),t=c(r),o=s(r),this._buildHtml=t,this._parseContent=o,l.destroy(),null!==(a=o.selectHeadings(r.contentSelector,r.headingSelector)))){var f=o.nestHeadingsArray(a).nest;r.skipRendering||t.render(r.tocSelector,f),this._scrollListener=p((function(e){t.updateToc(a),!r.disableTocScrollSync&&d(r);var n=e&&e.target&&e.target.scrollingElement&&0===e.target.scrollingElement.scrollTop;(e&&(0===e.eventPhase||null===e.currentTarget)||n)&&(t.updateToc(a),r.scrollEndCallback&&r.scrollEndCallback(e))}),r.throttleTimeout),this._scrollListener(),r.scrollContainer&&document.querySelector(r.scrollContainer)?(document.querySelector(r.scrollContainer).addEventListener("scroll",this._scrollListener,!1),document.querySelector(r.scrollContainer).addEventListener("resize",this._scrollListener,!1)):(document.addEventListener("scroll",this._scrollListener,!1),document.addEventListener("resize",this._scrollListener,!1));var h=null;return this._clickListener=p((function(e){r.scrollSmooth&&t.disableTocAnimation(e),t.updateToc(a),h&&clearTimeout(h),h=setTimeout((function(){t.enableTocAnimation()}),r.scrollSmoothDuration)}),r.throttleTimeout),r.scrollContainer&&document.querySelector(r.scrollContainer)?document.querySelector(r.scrollContainer).addEventListener("click",this._clickListener,!1):document.addEventListener("click",this._clickListener,!1),this}},l.refresh=function(e){l.destroy(),l.init(e||this.options)},e.tocbot=l,l}function p(e,t,n){var o,a;return t||(t=250),function(){var i=n||this,r=+new Date,l=arguments;o&&r<o+t?(clearTimeout(a),a=setTimeout((function(){o=r,e.apply(i,l)}),t)):(o=r,e.apply(i,l))}}}(l),void 0===(r="function"==typeof a?a.apply(t,i):a)||(e.exports=r)}).call(this,n("pCvA"))},XibM:function(e,t){e.exports=function(e){var t=document.querySelector(e.tocSelector);if(t&&t.scrollHeight>t.clientHeight){var n=t.querySelector("."+e.activeListItemClass);n&&(t.scrollTop=n.offsetTop)}}},aTXG:function(e,t){e.exports={tocSelector:".js-toc",contentSelector:".js-toc-content",headingSelector:"h1, h2, h3",ignoreSelector:".js-toc-ignore",hasInnerContainers:!1,linkClass:"toc-link",extraLinkClasses:"",activeLinkClass:"is-active-link",listClass:"toc-list",extraListClasses:"",isCollapsedClass:"is-collapsed",collapsibleClass:"is-collapsible",listItemClass:"toc-list-item",activeListItemClass:"is-active-li",collapseDepth:0,scrollSmooth:!0,scrollSmoothDuration:420,scrollSmoothOffset:0,scrollEndCallback:function(e){},headingsOffset:1,throttleTimeout:50,positionFixedSelector:null,positionFixedClass:"is-position-fixed",fixedSidebarOffset:"auto",includeHtml:!1,onClick:function(e){},orderedList:!0,scrollContainer:null,skipRendering:!1,headingLabelCallback:!1,ignoreHiddenElements:!1,headingObjectCallback:null,basePath:"",disableTocScrollSync:!1}},ffFi:function(e,t){e.exports=function(e){var t=[].forEach,n=[].some,o=document.body,a=!0;function i(n,o){var a=o.appendChild(function(n){var o=document.createElement("li"),a=document.createElement("a");e.listItemClass&&o.setAttribute("class",e.listItemClass);e.onClick&&(a.onclick=e.onClick);e.includeHtml&&n.childNodes.length?t.call(n.childNodes,(function(e){a.appendChild(e.cloneNode(!0))})):a.textContent=n.textContent;return a.setAttribute("href",e.basePath+"#"+n.id),a.setAttribute("class",e.linkClass+" node-name--"+n.nodeName+" "+e.extraLinkClasses),o.appendChild(a),o}(n));if(n.children.length){var l=r(n.isCollapsed);n.children.forEach((function(e){i(e,l)})),a.appendChild(l)}}function r(t){var n=e.orderedList?"ol":"ul",o=document.createElement(n),a=e.listClass+" "+e.extraListClasses;return t&&(a+=" "+e.collapsibleClass,a+=" "+e.isCollapsedClass),o.setAttribute("class",a),o}return{enableTocAnimation:function(){a=!0},disableTocAnimation:function(t){var n=t.target||t.srcElement;"string"==typeof n.className&&-1!==n.className.indexOf(e.linkClass)&&(a=!1)},render:function(e,t){var n=r(!1);t.forEach((function(e){i(e,n)}));var o=document.querySelector(e);if(null!==o)return o.firstChild&&o.removeChild(o.firstChild),0===t.length?o:o.appendChild(n)},updateToc:function(i){var r;r=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop,e.positionFixedSelector&&function(){var t;t=e.scrollContainer&&document.querySelector(e.scrollContainer)?document.querySelector(e.scrollContainer).scrollTop:document.documentElement.scrollTop||o.scrollTop;var n=document.querySelector(e.positionFixedSelector);"auto"===e.fixedSidebarOffset&&(e.fixedSidebarOffset=document.querySelector(e.tocSelector).offsetTop),t>e.fixedSidebarOffset?-1===n.className.indexOf(e.positionFixedClass)&&(n.className+=" "+e.positionFixedClass):n.className=n.className.split(" "+e.positionFixedClass).join("")}();var l,c=i;if(a&&null!==document.querySelector(e.tocSelector)&&c.length>0){n.call(c,(function(t,n){return function t(n){var o=0;return n!==document.querySelector(e.contentSelector&&null!=n)&&(o=n.offsetTop,e.hasInnerContainers&&(o+=t(n.offsetParent))),o}(t)>r+e.headingsOffset+10?(l=c[0===n?n:n-1],!0):n===c.length-1?(l=c[c.length-1],!0):void 0}));var s=document.querySelector(e.tocSelector).querySelectorAll("."+e.linkClass);t.call(s,(function(t){t.className=t.className.split(" "+e.activeLinkClass).join("")}));var d=document.querySelector(e.tocSelector).querySelectorAll("."+e.listItemClass);t.call(d,(function(t){t.className=t.className.split(" "+e.activeListItemClass).join("")}));var u=document.querySelector(e.tocSelector).querySelector("."+e.linkClass+".node-name--"+l.nodeName+'[href="'+e.basePath+"#"+l.id.replace(/([ #;&,.+*~':"!^$[\]()=>|/@])/g,"\\$1")+'"]');-1===u.className.indexOf(e.activeLinkClass)&&(u.className+=" "+e.activeLinkClass);var m=u.parentNode;m&&-1===m.className.indexOf(e.activeListItemClass)&&(m.className+=" "+e.activeListItemClass);var p=document.querySelector(e.tocSelector).querySelectorAll("."+e.listClass+"."+e.collapsibleClass);t.call(p,(function(t){-1===t.className.indexOf(e.isCollapsedClass)&&(t.className+=" "+e.isCollapsedClass)})),u.nextSibling&&-1!==u.nextSibling.className.indexOf(e.isCollapsedClass)&&(u.nextSibling.className=u.nextSibling.className.split(" "+e.isCollapsedClass).join("")),function t(n){if(-1!==n.className.indexOf(e.collapsibleClass)&&-1!==n.className.indexOf(e.isCollapsedClass))return n.className=n.className.split(" "+e.isCollapsedClass).join(""),t(n.parentNode.parentNode);return n}(u.parentNode.parentNode)}}}}},"g+6s":function(e,t,n){"use strict";var o=n("mXGw"),a=n.n(o),i=n("UutA"),r=n("Wbzz"),l=n("5EGp"),c=n.n(l),s=Object(i.default)(c.a).withConfig({displayName:"avatar__StyledAvatar",componentId:"sc-1v6bq9n-0"})(["max-width:55px;border-radius:100%;"]),d=function(e){var t=e.alt,n=e.style,o=Object(r.useStaticQuery)("3462520645");return a.a.createElement(s,{fixed:o.file.childImageSharp.fixed,alt:t,style:n})},u=i.default.section.withConfig({displayName:"bio__StyledBio",componentId:"sc-19adui4-0"})(["margin:auto;text-align:",";width:100%;"],(function(e){return e.textAlign})),m=i.default.p.withConfig({displayName:"bio__AuthorDescription",componentId:"sc-19adui4-1"})(["margin:10px 0 13px;a{color:#000;text-decoration:underline;}"]),p=i.default.h3.withConfig({displayName:"bio__AuthorName",componentId:"sc-19adui4-2"})(["margin:10px;"]),f=i.default.a.withConfig({displayName:"bio__FriendLink",componentId:"sc-19adui4-3"})(["text-decoration:underline;margin-left:5px;"]);t.a=function(e){var t=e.textAlign,n=void 0===t?"center":t,o=e.avatarStyle,i=e.showName,l=void 0!==i&&i,c=Object(r.useStaticQuery)("1116962356").site.siteMetadata.author;return a.a.createElement(u,{textAlign:n},a.a.createElement(d,{alt:c.name,style:o}),l&&a.a.createElement(p,null,c.name),a.a.createElement(m,{dangerouslySetInnerHTML:{__html:c.description}}),a.a.createElement("div",null,"Friend:",a.a.createElement(f,{href:"https://www.cnblogs.com/yahuian/",target:"_blank",rel:"noopener"},"Golang-就学45分钟")))}},yVGw:function(e,t){t.initSmoothScrolling=function(e){document.documentElement.style;var t=e.duration,n=e.offset,o=location.hash?a(location.href):location.href;function a(e){return e.slice(0,e.lastIndexOf("#"))}document.body.addEventListener("click",(function(i){var r;"a"!==(r=i.target).tagName.toLowerCase()||!(r.hash.length>0||"#"===r.href.charAt(r.href.length-1))||a(r.href)!==o&&a(r.href)+"#"!==o||i.target.className.indexOf("no-smooth-scroll")>-1||"#"===i.target.href.charAt(i.target.href.length-2)&&"!"===i.target.href.charAt(i.target.href.length-1)||-1===i.target.className.indexOf(e.linkClass)||function(e,t){var n,o,a=window.pageYOffset,i={duration:t.duration,offset:t.offset||0,callback:t.callback,easing:t.easing||function(e,t,n,o){return(e/=o/2)<1?n/2*e*e+t:(e--,-n/2*(e*(e-2)-1)+t)}},r=document.querySelector('[id="'+decodeURI(e).split("#").join("")+'"]'),l="string"==typeof e?i.offset+(e?r&&r.getBoundingClientRect().top||0:-(document.documentElement.scrollTop||document.body.scrollTop)):e,c="function"==typeof i.duration?i.duration(l):i.duration;function s(e){o=e-n,window.scrollTo(0,i.easing(o,a,l,c)),o<c?requestAnimationFrame(s):(window.scrollTo(0,a+l),"function"==typeof i.callback&&i.callback())}requestAnimationFrame((function(e){n=e,s(e)}))}(i.target.hash,{duration:t,offset:n,callback:function(){var e,t;e=i.target.hash,(t=document.getElementById(e.substring(1)))&&(/^(?:a|select|input|button|textarea)$/i.test(t.tagName)||(t.tabIndex=-1),t.focus())}})}),!1)}}}]);
//# sourceMappingURL=component---theme-src-templates-post-tsx-5ceb473ccfd9d725e5c8.js.map