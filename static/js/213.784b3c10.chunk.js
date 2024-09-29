/*! For license information please see 213.784b3c10.chunk.js.LICENSE.txt */
(self.webpackChunkhorizon_ui_tailwind_react=self.webpackChunkhorizon_ui_tailwind_react||[]).push([[213],{6213:function(e){e.exports=function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,n){return t=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},t(e,n)}function n(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}function r(e,o,a){return r=n()?Reflect.construct:function(e,n,r){var o=[null];o.push.apply(o,n);var a=new(Function.bind.apply(e,o));return r&&t(a,r.prototype),a},r.apply(null,arguments)}function o(e){return a(e)||i(e)||l(e)||u()}function a(e){if(Array.isArray(e))return c(e)}function i(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}function l(e,t){if(e){if("string"===typeof e)return c(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(e,t):void 0}}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function u(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var s=Object.hasOwnProperty,m=Object.setPrototypeOf,f=Object.isFrozen,p=Object.getPrototypeOf,d=Object.getOwnPropertyDescriptor,h=Object.freeze,g=Object.seal,y=Object.create,b="undefined"!==typeof Reflect&&Reflect,T=b.apply,v=b.construct;T||(T=function(e,t,n){return e.apply(t,n)}),h||(h=function(e){return e}),g||(g=function(e){return e}),v||(v=function(e,t){return r(e,o(t))});var N=R(Array.prototype.forEach),E=R(Array.prototype.pop),A=R(Array.prototype.push),_=R(String.prototype.toLowerCase),w=R(String.prototype.toString),S=R(String.prototype.match),k=R(String.prototype.replace),x=R(String.prototype.indexOf),O=R(String.prototype.trim),C=R(RegExp.prototype.test),L=D(TypeError);function R(e){return function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),o=1;o<n;o++)r[o-1]=arguments[o];return T(e,t,r)}}function D(e){return function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return v(e,n)}}function M(e,t,n){var r;n=null!==(r=n)&&void 0!==r?r:_,m&&m(e,null);for(var o=t.length;o--;){var a=t[o];if("string"===typeof a){var i=n(a);i!==a&&(f(t)||(t[o]=i),a=i)}e[a]=!0}return e}function I(e){var t,n=y(null);for(t in e)!0===T(s,e,[t])&&(n[t]=e[t]);return n}function F(e,t){for(;null!==e;){var n=d(e,t);if(n){if(n.get)return R(n.get);if("function"===typeof n.value)return R(n.value)}e=p(e)}function r(e){return console.warn("fallback value for",e),null}return r}var U=h(["a","abbr","acronym","address","area","article","aside","audio","b","bdi","bdo","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","content","data","datalist","dd","decorator","del","details","dfn","dialog","dir","div","dl","dt","element","em","fieldset","figcaption","figure","font","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","img","input","ins","kbd","label","legend","li","main","map","mark","marquee","menu","menuitem","meter","nav","nobr","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","section","select","shadow","small","source","spacer","span","strike","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","track","tt","u","ul","var","video","wbr"]),H=h(["svg","a","altglyph","altglyphdef","altglyphitem","animatecolor","animatemotion","animatetransform","circle","clippath","defs","desc","ellipse","filter","font","g","glyph","glyphref","hkern","image","line","lineargradient","marker","mask","metadata","mpath","path","pattern","polygon","polyline","radialgradient","rect","stop","style","switch","symbol","text","textpath","title","tref","tspan","view","vkern"]),z=h(["feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence"]),P=h(["animate","color-profile","cursor","discard","fedropshadow","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignobject","hatch","hatchpath","mesh","meshgradient","meshpatch","meshrow","missing-glyph","script","set","solidcolor","unknown","use"]),B=h(["math","menclose","merror","mfenced","mfrac","mglyph","mi","mlabeledtr","mmultiscripts","mn","mo","mover","mpadded","mphantom","mroot","mrow","ms","mspace","msqrt","mstyle","msub","msup","msubsup","mtable","mtd","mtext","mtr","munder","munderover"]),j=h(["maction","maligngroup","malignmark","mlongdiv","mscarries","mscarry","msgroup","mstack","msline","msrow","semantics","annotation","annotation-xml","mprescripts","none"]),G=h(["#text"]),W=h(["accept","action","align","alt","autocapitalize","autocomplete","autopictureinpicture","autoplay","background","bgcolor","border","capture","cellpadding","cellspacing","checked","cite","class","clear","color","cols","colspan","controls","controlslist","coords","crossorigin","datetime","decoding","default","dir","disabled","disablepictureinpicture","disableremoteplayback","download","draggable","enctype","enterkeyhint","face","for","headers","height","hidden","high","href","hreflang","id","inputmode","integrity","ismap","kind","label","lang","list","loading","loop","low","max","maxlength","media","method","min","minlength","multiple","muted","name","nonce","noshade","novalidate","nowrap","open","optimum","pattern","placeholder","playsinline","poster","preload","pubdate","radiogroup","readonly","rel","required","rev","reversed","role","rows","rowspan","spellcheck","scope","selected","shape","size","sizes","span","srclang","start","src","srcset","step","style","summary","tabindex","title","translate","type","usemap","valign","value","width","xmlns","slot"]),q=h(["accent-height","accumulate","additive","alignment-baseline","ascent","attributename","attributetype","azimuth","basefrequency","baseline-shift","begin","bias","by","class","clip","clippathunits","clip-path","clip-rule","color","color-interpolation","color-interpolation-filters","color-profile","color-rendering","cx","cy","d","dx","dy","diffuseconstant","direction","display","divisor","dur","edgemode","elevation","end","fill","fill-opacity","fill-rule","filter","filterunits","flood-color","flood-opacity","font-family","font-size","font-size-adjust","font-stretch","font-style","font-variant","font-weight","fx","fy","g1","g2","glyph-name","glyphref","gradientunits","gradienttransform","height","href","id","image-rendering","in","in2","k","k1","k2","k3","k4","kerning","keypoints","keysplines","keytimes","lang","lengthadjust","letter-spacing","kernelmatrix","kernelunitlength","lighting-color","local","marker-end","marker-mid","marker-start","markerheight","markerunits","markerwidth","maskcontentunits","maskunits","max","mask","media","method","mode","min","name","numoctaves","offset","operator","opacity","order","orient","orientation","origin","overflow","paint-order","path","pathlength","patterncontentunits","patterntransform","patternunits","points","preservealpha","preserveaspectratio","primitiveunits","r","rx","ry","radius","refx","refy","repeatcount","repeatdur","restart","result","rotate","scale","seed","shape-rendering","specularconstant","specularexponent","spreadmethod","startoffset","stddeviation","stitchtiles","stop-color","stop-opacity","stroke-dasharray","stroke-dashoffset","stroke-linecap","stroke-linejoin","stroke-miterlimit","stroke-opacity","stroke","stroke-width","style","surfacescale","systemlanguage","tabindex","targetx","targety","transform","transform-origin","text-anchor","text-decoration","text-rendering","textlength","type","u1","u2","unicode","values","viewbox","visibility","version","vert-adv-y","vert-origin-x","vert-origin-y","width","word-spacing","wrap","writing-mode","xchannelselector","ychannelselector","x","x1","x2","xmlns","y","y1","y2","z","zoomandpan"]),Y=h(["accent","accentunder","align","bevelled","close","columnsalign","columnlines","columnspan","denomalign","depth","dir","display","displaystyle","encoding","fence","frame","height","href","id","largeop","length","linethickness","lspace","lquote","mathbackground","mathcolor","mathsize","mathvariant","maxsize","minsize","movablelimits","notation","numalign","open","rowalign","rowlines","rowspacing","rowspan","rspace","rquote","scriptlevel","scriptminsize","scriptsizemultiplier","selection","separator","separators","stretchy","subscriptshift","supscriptshift","symmetric","voffset","width","xmlns"]),$=h(["xlink:href","xml:id","xlink:title","xml:space","xmlns:xlink"]),K=g(/\{\{[\w\W]*|[\w\W]*\}\}/gm),V=g(/<%[\w\W]*|[\w\W]*%>/gm),X=g(/\${[\w\W]*}/gm),Z=g(/^data-[\-\w.\u00B7-\uFFFF]/),J=g(/^aria-[\-\w]+$/),Q=g(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),ee=g(/^(?:\w+script|data):/i),te=g(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),ne=g(/^html$/i),re=g(/^[a-z][.\w]*(-[.\w]+)+$/i),oe=function(){return"undefined"===typeof window?null:window},ae=function(t,n){if("object"!==e(t)||"function"!==typeof t.createPolicy)return null;var r=null,o="data-tt-policy-suffix";n.currentScript&&n.currentScript.hasAttribute(o)&&(r=n.currentScript.getAttribute(o));var a="dompurify"+(r?"#"+r:"");try{return t.createPolicy(a,{createHTML:function(e){return e},createScriptURL:function(e){return e}})}catch(i){return console.warn("TrustedTypes policy "+a+" could not be created."),null}};function ie(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe(),n=function(e){return ie(e)};if(n.version="2.5.6",n.removed=[],!t||!t.document||9!==t.document.nodeType)return n.isSupported=!1,n;var r=t.document,a=t.document,i=t.DocumentFragment,l=t.HTMLTemplateElement,c=t.Node,u=t.Element,s=t.NodeFilter,m=t.NamedNodeMap,f=void 0===m?t.NamedNodeMap||t.MozNamedAttrMap:m,p=t.HTMLFormElement,d=t.DOMParser,g=t.trustedTypes,y=u.prototype,b=F(y,"cloneNode"),T=F(y,"nextSibling"),v=F(y,"childNodes"),R=F(y,"parentNode");if("function"===typeof l){var D=a.createElement("template");D.content&&D.content.ownerDocument&&(a=D.content.ownerDocument)}var le=ae(g,r),ce=le?le.createHTML(""):"",ue=a,se=ue.implementation,me=ue.createNodeIterator,fe=ue.createDocumentFragment,pe=ue.getElementsByTagName,de=r.importNode,he={};try{he=I(a).documentMode?a.documentMode:{}}catch(Ft){}var ge={};n.isSupported="function"===typeof R&&se&&void 0!==se.createHTMLDocument&&9!==he;var ye,be,Te=K,ve=V,Ne=X,Ee=Z,Ae=J,_e=ee,we=te,Se=re,ke=Q,xe=null,Oe=M({},[].concat(o(U),o(H),o(z),o(B),o(G))),Ce=null,Le=M({},[].concat(o(W),o(q),o(Y),o($))),Re=Object.seal(Object.create(null,{tagNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},attributeNameCheck:{writable:!0,configurable:!1,enumerable:!0,value:null},allowCustomizedBuiltInElements:{writable:!0,configurable:!1,enumerable:!0,value:!1}})),De=null,Me=null,Ie=!0,Fe=!0,Ue=!1,He=!0,ze=!1,Pe=!0,Be=!1,je=!1,Ge=!1,We=!1,qe=!1,Ye=!1,$e=!0,Ke=!1,Ve="user-content-",Xe=!0,Ze=!1,Je={},Qe=null,et=M({},["annotation-xml","audio","colgroup","desc","foreignobject","head","iframe","math","mi","mn","mo","ms","mtext","noembed","noframes","noscript","plaintext","script","style","svg","template","thead","title","video","xmp"]),tt=null,nt=M({},["audio","video","img","source","image","track"]),rt=null,ot=M({},["alt","class","for","id","label","name","pattern","placeholder","role","summary","title","value","style","xmlns"]),at="http://www.w3.org/1998/Math/MathML",it="http://www.w3.org/2000/svg",lt="http://www.w3.org/1999/xhtml",ct=lt,ut=!1,st=null,mt=M({},[at,it,lt],w),ft=["application/xhtml+xml","text/html"],pt="text/html",dt=null,ht=a.createElement("form"),gt=function(e){return e instanceof RegExp||e instanceof Function},yt=function(t){dt&&dt===t||(t&&"object"===e(t)||(t={}),t=I(t),ye=ye=-1===ft.indexOf(t.PARSER_MEDIA_TYPE)?pt:t.PARSER_MEDIA_TYPE,be="application/xhtml+xml"===ye?w:_,xe="ALLOWED_TAGS"in t?M({},t.ALLOWED_TAGS,be):Oe,Ce="ALLOWED_ATTR"in t?M({},t.ALLOWED_ATTR,be):Le,st="ALLOWED_NAMESPACES"in t?M({},t.ALLOWED_NAMESPACES,w):mt,rt="ADD_URI_SAFE_ATTR"in t?M(I(ot),t.ADD_URI_SAFE_ATTR,be):ot,tt="ADD_DATA_URI_TAGS"in t?M(I(nt),t.ADD_DATA_URI_TAGS,be):nt,Qe="FORBID_CONTENTS"in t?M({},t.FORBID_CONTENTS,be):et,De="FORBID_TAGS"in t?M({},t.FORBID_TAGS,be):{},Me="FORBID_ATTR"in t?M({},t.FORBID_ATTR,be):{},Je="USE_PROFILES"in t&&t.USE_PROFILES,Ie=!1!==t.ALLOW_ARIA_ATTR,Fe=!1!==t.ALLOW_DATA_ATTR,Ue=t.ALLOW_UNKNOWN_PROTOCOLS||!1,He=!1!==t.ALLOW_SELF_CLOSE_IN_ATTR,ze=t.SAFE_FOR_TEMPLATES||!1,Pe=!1!==t.SAFE_FOR_XML,Be=t.WHOLE_DOCUMENT||!1,We=t.RETURN_DOM||!1,qe=t.RETURN_DOM_FRAGMENT||!1,Ye=t.RETURN_TRUSTED_TYPE||!1,Ge=t.FORCE_BODY||!1,$e=!1!==t.SANITIZE_DOM,Ke=t.SANITIZE_NAMED_PROPS||!1,Xe=!1!==t.KEEP_CONTENT,Ze=t.IN_PLACE||!1,ke=t.ALLOWED_URI_REGEXP||ke,ct=t.NAMESPACE||lt,Re=t.CUSTOM_ELEMENT_HANDLING||{},t.CUSTOM_ELEMENT_HANDLING&&gt(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck)&&(Re.tagNameCheck=t.CUSTOM_ELEMENT_HANDLING.tagNameCheck),t.CUSTOM_ELEMENT_HANDLING&&gt(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck)&&(Re.attributeNameCheck=t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck),t.CUSTOM_ELEMENT_HANDLING&&"boolean"===typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements&&(Re.allowCustomizedBuiltInElements=t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements),ze&&(Fe=!1),qe&&(We=!0),Je&&(xe=M({},o(G)),Ce=[],!0===Je.html&&(M(xe,U),M(Ce,W)),!0===Je.svg&&(M(xe,H),M(Ce,q),M(Ce,$)),!0===Je.svgFilters&&(M(xe,z),M(Ce,q),M(Ce,$)),!0===Je.mathMl&&(M(xe,B),M(Ce,Y),M(Ce,$))),t.ADD_TAGS&&(xe===Oe&&(xe=I(xe)),M(xe,t.ADD_TAGS,be)),t.ADD_ATTR&&(Ce===Le&&(Ce=I(Ce)),M(Ce,t.ADD_ATTR,be)),t.ADD_URI_SAFE_ATTR&&M(rt,t.ADD_URI_SAFE_ATTR,be),t.FORBID_CONTENTS&&(Qe===et&&(Qe=I(Qe)),M(Qe,t.FORBID_CONTENTS,be)),Xe&&(xe["#text"]=!0),Be&&M(xe,["html","head","body"]),xe.table&&(M(xe,["tbody"]),delete De.tbody),h&&h(t),dt=t)},bt=M({},["mi","mo","mn","ms","mtext"]),Tt=M({},["foreignobject","annotation-xml"]),vt=M({},["title","style","font","a","script"]),Nt=M({},H);M(Nt,z),M(Nt,P);var Et=M({},B);M(Et,j);var At=function(e){var t=R(e);t&&t.tagName||(t={namespaceURI:ct,tagName:"template"});var n=_(e.tagName),r=_(t.tagName);return!!st[e.namespaceURI]&&(e.namespaceURI===it?t.namespaceURI===lt?"svg"===n:t.namespaceURI===at?"svg"===n&&("annotation-xml"===r||bt[r]):Boolean(Nt[n]):e.namespaceURI===at?t.namespaceURI===lt?"math"===n:t.namespaceURI===it?"math"===n&&Tt[r]:Boolean(Et[n]):e.namespaceURI===lt?!(t.namespaceURI===it&&!Tt[r])&&!(t.namespaceURI===at&&!bt[r])&&!Et[n]&&(vt[n]||!Nt[n]):!("application/xhtml+xml"!==ye||!st[e.namespaceURI]))},_t=function(e){A(n.removed,{element:e});try{e.parentNode.removeChild(e)}catch(Ft){try{e.outerHTML=ce}catch(Ft){e.remove()}}},wt=function(e,t){try{A(n.removed,{attribute:t.getAttributeNode(e),from:t})}catch(Ft){A(n.removed,{attribute:null,from:t})}if(t.removeAttribute(e),"is"===e&&!Ce[e])if(We||qe)try{_t(t)}catch(Ft){}else try{t.setAttribute(e,"")}catch(Ft){}},St=function(e){var t,n;if(Ge)e="<remove></remove>"+e;else{var r=S(e,/^[\r\n\t ]+/);n=r&&r[0]}"application/xhtml+xml"===ye&&ct===lt&&(e='<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>'+e+"</body></html>");var o=le?le.createHTML(e):e;if(ct===lt)try{t=(new d).parseFromString(o,ye)}catch(Ft){}if(!t||!t.documentElement){t=se.createDocument(ct,"template",null);try{t.documentElement.innerHTML=ut?ce:o}catch(Ft){}}var i=t.body||t.documentElement;return e&&n&&i.insertBefore(a.createTextNode(n),i.childNodes[0]||null),ct===lt?pe.call(t,Be?"html":"body")[0]:Be?t.documentElement:i},kt=function(e){return me.call(e.ownerDocument||e,e,s.SHOW_ELEMENT|s.SHOW_COMMENT|s.SHOW_TEXT|s.SHOW_PROCESSING_INSTRUCTION|s.SHOW_CDATA_SECTION,null,!1)},xt=function(e){return e instanceof p&&("string"!==typeof e.nodeName||"string"!==typeof e.textContent||"function"!==typeof e.removeChild||!(e.attributes instanceof f)||"function"!==typeof e.removeAttribute||"function"!==typeof e.setAttribute||"string"!==typeof e.namespaceURI||"function"!==typeof e.insertBefore||"function"!==typeof e.hasChildNodes)},Ot=function(t){return"object"===e(c)?t instanceof c:t&&"object"===e(t)&&"number"===typeof t.nodeType&&"string"===typeof t.nodeName},Ct=function(e,t,r){ge[e]&&N(ge[e],(function(e){e.call(n,t,r,dt)}))},Lt=function(e){var t;if(Ct("beforeSanitizeElements",e,null),xt(e))return _t(e),!0;if(C(/[\u0080-\uFFFF]/,e.nodeName))return _t(e),!0;var r=be(e.nodeName);if(Ct("uponSanitizeElement",e,{tagName:r,allowedTags:xe}),e.hasChildNodes()&&!Ot(e.firstElementChild)&&(!Ot(e.content)||!Ot(e.content.firstElementChild))&&C(/<[/\w]/g,e.innerHTML)&&C(/<[/\w]/g,e.textContent))return _t(e),!0;if("select"===r&&C(/<template/i,e.innerHTML))return _t(e),!0;if(7===e.nodeType)return _t(e),!0;if(Pe&&8===e.nodeType&&C(/<[/\w]/g,e.data))return _t(e),!0;if(!xe[r]||De[r]){if(!De[r]&&Dt(r)){if(Re.tagNameCheck instanceof RegExp&&C(Re.tagNameCheck,r))return!1;if(Re.tagNameCheck instanceof Function&&Re.tagNameCheck(r))return!1}if(Xe&&!Qe[r]){var o=R(e)||e.parentNode,a=v(e)||e.childNodes;if(a&&o)for(var i=a.length-1;i>=0;--i){var l=b(a[i],!0);l.__removalCount=(e.__removalCount||0)+1,o.insertBefore(l,T(e))}}return _t(e),!0}return e instanceof u&&!At(e)?(_t(e),!0):"noscript"!==r&&"noembed"!==r&&"noframes"!==r||!C(/<\/no(script|embed|frames)/i,e.innerHTML)?(ze&&3===e.nodeType&&(t=e.textContent,t=k(t,Te," "),t=k(t,ve," "),t=k(t,Ne," "),e.textContent!==t&&(A(n.removed,{element:e.cloneNode()}),e.textContent=t)),Ct("afterSanitizeElements",e,null),!1):(_t(e),!0)},Rt=function(e,t,n){if($e&&("id"===t||"name"===t)&&(n in a||n in ht))return!1;if(Fe&&!Me[t]&&C(Ee,t));else if(Ie&&C(Ae,t));else if(!Ce[t]||Me[t]){if(!(Dt(e)&&(Re.tagNameCheck instanceof RegExp&&C(Re.tagNameCheck,e)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(e))&&(Re.attributeNameCheck instanceof RegExp&&C(Re.attributeNameCheck,t)||Re.attributeNameCheck instanceof Function&&Re.attributeNameCheck(t))||"is"===t&&Re.allowCustomizedBuiltInElements&&(Re.tagNameCheck instanceof RegExp&&C(Re.tagNameCheck,n)||Re.tagNameCheck instanceof Function&&Re.tagNameCheck(n))))return!1}else if(rt[t]);else if(C(ke,k(n,we,"")));else if("src"!==t&&"xlink:href"!==t&&"href"!==t||"script"===e||0!==x(n,"data:")||!tt[e])if(Ue&&!C(_e,k(n,we,"")));else if(n)return!1;return!0},Dt=function(e){return"annotation-xml"!==e&&S(e,Se)},Mt=function(t){var r,o,a,i;Ct("beforeSanitizeAttributes",t,null);var l=t.attributes;if(l){var c={attrName:"",attrValue:"",keepAttr:!0,allowedAttributes:Ce};for(i=l.length;i--;){var u=r=l[i],s=u.name,m=u.namespaceURI;if(o="value"===s?r.value:O(r.value),a=be(s),c.attrName=a,c.attrValue=o,c.keepAttr=!0,c.forceKeepAttr=void 0,Ct("uponSanitizeAttribute",t,c),o=c.attrValue,Pe&&C(/((--!?|])>)|<\/(style|title)/i,o))wt(s,t);else if(!c.forceKeepAttr&&(wt(s,t),c.keepAttr))if(He||!C(/\/>/i,o)){ze&&(o=k(o,Te," "),o=k(o,ve," "),o=k(o,Ne," "));var f=be(t.nodeName);if(Rt(f,a,o)){if(!Ke||"id"!==a&&"name"!==a||(wt(s,t),o=Ve+o),le&&"object"===e(g)&&"function"===typeof g.getAttributeType)if(m);else switch(g.getAttributeType(f,a)){case"TrustedHTML":o=le.createHTML(o);break;case"TrustedScriptURL":o=le.createScriptURL(o)}try{m?t.setAttributeNS(m,s,o):t.setAttribute(s,o),xt(t)?_t(t):E(n.removed)}catch(Ft){}}}else wt(s,t)}Ct("afterSanitizeAttributes",t,null)}},It=function e(t){var n,r=kt(t);for(Ct("beforeSanitizeShadowDOM",t,null);n=r.nextNode();)Ct("uponSanitizeShadowNode",n,null),Lt(n)||(n.content instanceof i&&e(n.content),Mt(n));Ct("afterSanitizeShadowDOM",t,null)};return n.sanitize=function(o){var a,l,u,s,m,f=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if((ut=!o)&&(o="\x3c!--\x3e"),"string"!==typeof o&&!Ot(o)){if("function"!==typeof o.toString)throw L("toString is not a function");if("string"!==typeof(o=o.toString()))throw L("dirty is not a string, aborting")}if(!n.isSupported){if("object"===e(t.toStaticHTML)||"function"===typeof t.toStaticHTML){if("string"===typeof o)return t.toStaticHTML(o);if(Ot(o))return t.toStaticHTML(o.outerHTML)}return o}if(je||yt(f),n.removed=[],"string"===typeof o&&(Ze=!1),Ze){if(o.nodeName){var p=be(o.nodeName);if(!xe[p]||De[p])throw L("root node is forbidden and cannot be sanitized in-place")}}else if(o instanceof c)1===(l=(a=St("\x3c!----\x3e")).ownerDocument.importNode(o,!0)).nodeType&&"BODY"===l.nodeName||"HTML"===l.nodeName?a=l:a.appendChild(l);else{if(!We&&!ze&&!Be&&-1===o.indexOf("<"))return le&&Ye?le.createHTML(o):o;if(!(a=St(o)))return We?null:Ye?ce:""}a&&Ge&&_t(a.firstChild);for(var d=kt(Ze?o:a);u=d.nextNode();)3===u.nodeType&&u===s||Lt(u)||(u.content instanceof i&&It(u.content),Mt(u),s=u);if(s=null,Ze)return o;if(We){if(qe)for(m=fe.call(a.ownerDocument);a.firstChild;)m.appendChild(a.firstChild);else m=a;return(Ce.shadowroot||Ce.shadowrootmod)&&(m=de.call(r,m,!0)),m}var h=Be?a.outerHTML:a.innerHTML;return Be&&xe["!doctype"]&&a.ownerDocument&&a.ownerDocument.doctype&&a.ownerDocument.doctype.name&&C(ne,a.ownerDocument.doctype.name)&&(h="<!DOCTYPE "+a.ownerDocument.doctype.name+">\n"+h),ze&&(h=k(h,Te," "),h=k(h,ve," "),h=k(h,Ne," ")),le&&Ye?le.createHTML(h):h},n.setConfig=function(e){yt(e),je=!0},n.clearConfig=function(){dt=null,je=!1},n.isValidAttribute=function(e,t,n){dt||yt({});var r=be(e),o=be(t);return Rt(r,o,n)},n.addHook=function(e,t){"function"===typeof t&&(ge[e]=ge[e]||[],A(ge[e],t))},n.removeHook=function(e){if(ge[e])return E(ge[e])},n.removeHooks=function(e){ge[e]&&(ge[e]=[])},n.removeAllHooks=function(){ge={}},n}return ie()}()}}]);
//# sourceMappingURL=213.784b3c10.chunk.js.map