/*!
 * reveal.js 2.6.0-dev (2013-09-11, 21:54)
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
function js_flash(e){$(".flash.js").html(e).slideDown(),setTimeout(function(){$(".flash.js").slideUp()},5e3)}function allOptionsComplete(){return complete=!1,cardChosen()?messageWritten()?addressFormComplete()?complete=!0:js_flash("Make sure you're done with the address form before submitting your postcard."):(Reveal.slide(2,0,void 0),js_flash("Don't forget to write a message.")):(Reveal.slide(1,0,void 0),js_flash("Don't forget to choose a card.")),complete}function cardChosen(){return chosen=!1,$(".card").each(function(e,t){$(t).hasClass("selected")&&(chosen=!0)}),chosen}function messageWritten(){return written=!1,""!=$(".message").val()&&(written=!0),written}function addressFormComplete(){return $(".destination")[0].checkValidity()}function maskLoad(){$("body").prepend('<div class="loading-mask"></div>')}var Reveal=function(){"use strict";function e(e){return t(),It||Rt?(window.addEventListener("load",T,!1),u(Xt,e),y(),n(),void 0):(document.body.setAttribute("class","no-transforms"),void 0)}function t(){Rt="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,It="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,Ht=navigator.userAgent.match(/(iphone|ipod|android)/gi)}function n(){function e(){n.length&&head.js.apply(null,n),r()}for(var t=[],n=[],a=0,o=Xt.dependencies.length;o>a;a++){var i=Xt.dependencies[a];(!i.condition||i.condition())&&(i.async?n.push(i.src):t.push(i.src),"function"==typeof i.callback&&head.ready(i.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],i.callback))}t.length?(head.ready(e),head.js.apply(null,t)):e()}function r(){o(),a(),c(),J(),setTimeout(function(){Kt.slides.classList.remove("no-transition"),Wt=!0,w("ready",{indexh:Dt,indexv:Nt,currentSlide:Pt})},1)}function a(){var e=f(document.querySelectorAll(Ot));e.forEach(function(e){var t=f(e.querySelectorAll("section"));t.forEach(function(e,t){t>0&&e.classList.add("future")})})}function o(){Kt.theme=document.querySelector("#theme"),Kt.wrapper=document.querySelector(".reveal"),Kt.slides=document.querySelector(".reveal .slides"),Kt.slides.classList.add("no-transition"),Kt.background=i(Kt.wrapper,"div","backgrounds",null),Kt.progress=i(Kt.wrapper,"div","progress","<span></span>"),Kt.progressbar=Kt.progress.querySelector("span"),i(Kt.wrapper,"aside","controls",'<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),i(Kt.wrapper,"div","state-background",null),i(Kt.wrapper,"div","pause-overlay",null),Kt.controls=document.querySelector(".reveal .controls"),Kt.controlsLeft=f(document.querySelectorAll(".navigate-left")),Kt.controlsRight=f(document.querySelectorAll(".navigate-right")),Kt.controlsUp=f(document.querySelectorAll(".navigate-up")),Kt.controlsDown=f(document.querySelectorAll(".navigate-down")),Kt.controlsPrev=f(document.querySelectorAll(".navigate-prev")),Kt.controlsNext=f(document.querySelectorAll(".navigate-next"))}function i(e,t,n,r){var a=e.querySelector("."+n);return a||(a=document.createElement(t),a.classList.add(n),null!==r&&(a.innerHTML=r),e.appendChild(a)),a}function s(){function e(e,t){var n={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundColor:e.getAttribute("data-background-color"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition")},r=document.createElement("div");return r.className="slide-background",n.background&&(/^(http|file|\/\/)/gi.test(n.background)||/\.(png|jpg|jpeg|gif|bmp)$/gi.test(n.background)?r.style.backgroundImage="url("+n.background+")":r.style.background=n.background),n.backgroundSize&&(r.style.backgroundSize=n.backgroundSize),n.backgroundImage&&(r.style.backgroundImage='url("'+n.backgroundImage+'")'),n.backgroundColor&&(r.style.backgroundColor=n.backgroundColor),n.backgroundRepeat&&(r.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(r.style.backgroundPosition=n.backgroundPosition),n.backgroundTransition&&r.setAttribute("data-background-transition",n.backgroundTransition),t.appendChild(r),r}g()&&document.body.classList.add("print-pdf"),Kt.background.innerHTML="",Kt.background.classList.add("no-transition"),f(document.querySelectorAll(Ot)).forEach(function(t){var n;n=g()?e(t,t):e(t,Kt.background),f(t.querySelectorAll("section")).forEach(function(t){g()?e(t,t):e(t,n)})})}function c(e){if(Kt.wrapper.classList.remove(Xt.transition),"object"==typeof e&&u(Xt,e),Rt===!1&&(Xt.transition="linear"),Kt.wrapper.classList.add(Xt.transition),Kt.wrapper.setAttribute("data-transition-speed",Xt.transitionSpeed),Kt.wrapper.setAttribute("data-background-transition",Xt.backgroundTransition),Kt.controls.style.display=Xt.controls?"block":"none",Kt.progress.style.display=Xt.progress?"block":"none",Xt.rtl?Kt.wrapper.classList.add("rtl"):Kt.wrapper.classList.remove("rtl"),Xt.center?Kt.wrapper.classList.add("center"):Kt.wrapper.classList.remove("center"),Xt.mouseWheel?(document.addEventListener("DOMMouseScroll",bt,!1),document.addEventListener("mousewheel",bt,!1)):(document.removeEventListener("DOMMouseScroll",bt,!1),document.removeEventListener("mousewheel",bt,!1)),Xt.rollingLinks?L():k(),Xt.previewLinks?E():(S(),E("[data-preview-link]")),Xt.theme&&Kt.theme){var t=Kt.theme.getAttribute("href"),n=/[^\/]*?(?=\.css)/,r=t.match(n)[0];Xt.theme!==r&&(t=t.replace(n,Xt.theme),Kt.theme.setAttribute("href",t))}W()}function l(){Jt=!0,window.addEventListener("hashchange",qt,!1),window.addEventListener("resize",Tt,!1),Xt.touch&&(Kt.wrapper.addEventListener("touchstart",vt,!1),Kt.wrapper.addEventListener("touchmove",pt,!1),Kt.wrapper.addEventListener("touchend",mt,!1),window.navigator.msPointerEnabled&&(Kt.wrapper.addEventListener("MSPointerDown",ht,!1),Kt.wrapper.addEventListener("MSPointerMove",gt,!1),Kt.wrapper.addEventListener("MSPointerUp",yt,!1))),Xt.keyboard&&document.addEventListener("keydown",ft,!1),Xt.progress&&Kt.progress&&Kt.progress.addEventListener("click",wt,!1),["touchstart","click"].forEach(function(e){Kt.controlsLeft.forEach(function(t){t.addEventListener(e,Lt,!1)}),Kt.controlsRight.forEach(function(t){t.addEventListener(e,kt,!1)}),Kt.controlsUp.forEach(function(t){t.addEventListener(e,Et,!1)}),Kt.controlsDown.forEach(function(t){t.addEventListener(e,St,!1)}),Kt.controlsPrev.forEach(function(t){t.addEventListener(e,At,!1)}),Kt.controlsNext.forEach(function(t){t.addEventListener(e,xt,!1)})})}function d(){Jt=!1,document.removeEventListener("keydown",ft,!1),window.removeEventListener("hashchange",qt,!1),window.removeEventListener("resize",Tt,!1),Kt.wrapper.removeEventListener("touchstart",vt,!1),Kt.wrapper.removeEventListener("touchmove",pt,!1),Kt.wrapper.removeEventListener("touchend",mt,!1),window.navigator.msPointerEnabled&&(Kt.wrapper.removeEventListener("MSPointerDown",ht,!1),Kt.wrapper.removeEventListener("MSPointerMove",gt,!1),Kt.wrapper.removeEventListener("MSPointerUp",yt,!1)),Xt.progress&&Kt.progress&&Kt.progress.removeEventListener("click",wt,!1),["touchstart","click"].forEach(function(e){Kt.controlsLeft.forEach(function(t){t.removeEventListener(e,Lt,!1)}),Kt.controlsRight.forEach(function(t){t.removeEventListener(e,kt,!1)}),Kt.controlsUp.forEach(function(t){t.removeEventListener(e,Et,!1)}),Kt.controlsDown.forEach(function(t){t.removeEventListener(e,St,!1)}),Kt.controlsPrev.forEach(function(t){t.removeEventListener(e,At,!1)}),Kt.controlsNext.forEach(function(t){t.removeEventListener(e,xt,!1)})})}function u(e,t){for(var n in t)e[n]=t[n]}function f(e){return Array.prototype.slice.call(e)}function v(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function p(e,t){e.style.WebkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function m(e){var t=0;if(e){var n=0;f(e.childNodes).forEach(function(e){"number"==typeof e.offsetTop&&e.style&&("absolute"===e.style.position&&(n+=1),t=Math.max(t,e.offsetTop+e.offsetHeight))}),0===n&&(t=e.offsetHeight)}return t}function h(e,t){if(t=t||0,e){var n=e.parentNode,r=n.childNodes;f(r).forEach(function(n){if("number"==typeof n.offsetHeight&&n!==e){var r=window.getComputedStyle(n),a=parseInt(r.marginTop,10),o=parseInt(r.marginBottom,10);t-=n.offsetHeight+a+o}});var a=window.getComputedStyle(e);t-=parseInt(a.marginTop,10)+parseInt(a.marginBottom,10)}return t}function g(){return/print-pdf/gi.test(window.location.search)}function y(){Xt.hideAddressBar&&Ht&&(window.addEventListener("load",b,!1),window.addEventListener("orientationchange",b,!1))}function b(){0!==window.orientation||/crios/gi.test(navigator.userAgent)?(document.documentElement.style.overflow="",document.body.style.height="100%"):(document.documentElement.style.overflow="scroll",document.body.style.height="120%"),setTimeout(function(){window.scrollTo(0,1)},10)}function w(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),u(n,t),Kt.wrapper.dispatchEvent(n)}function L(){if(Rt&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(Yt+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var a=document.createElement("span");a.setAttribute("data-title",r.text),a.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(a)}}}function k(){for(var e=document.querySelectorAll(Yt+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],a=r.querySelector("span");a&&(r.classList.remove("roll"),r.innerHTML=a.innerHTML)}}function E(e){var t=f(document.querySelectorAll(e?e:"a"));t.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",Ct,!1)})}function S(){var e=f(document.querySelectorAll("a"));e.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",Ct,!1)})}function A(e){x(),Kt.preview=document.createElement("div"),Kt.preview.classList.add("preview-link-overlay"),Kt.wrapper.appendChild(Kt.preview),Kt.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+e+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+e+'"></iframe>',"</div>"].join(""),Kt.preview.querySelector("iframe").addEventListener("load",function(){Kt.preview.classList.add("loaded")},!1),Kt.preview.querySelector(".close").addEventListener("click",function(e){x(),e.preventDefault()},!1),Kt.preview.querySelector(".external").addEventListener("click",function(){x()},!1),setTimeout(function(){Kt.preview.classList.add("visible")},1)}function x(){Kt.preview&&(Kt.preview.setAttribute("src",""),Kt.preview.parentNode.removeChild(Kt.preview),Kt.preview=null)}function q(e){var t=f(e);return t.forEach(function(e,t){e.hasAttribute("data-fragment-index")||e.setAttribute("data-fragment-index",t)}),t.sort(function(e,t){return e.getAttribute("data-fragment-index")-t.getAttribute("data-fragment-index")}),t}function T(){if(Kt.wrapper&&!g()){var e=Kt.wrapper.offsetWidth,t=Kt.wrapper.offsetHeight;e-=t*Xt.margin,t-=t*Xt.margin;var n=Xt.width,r=Xt.height,a=20;M(Xt.width,Xt.height,a),"string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),Kt.slides.style.width=n+"px",Kt.slides.style.height=r+"px",Ft=Math.min(e/n,t/r),Ft=Math.max(Ft,Xt.minScale),Ft=Math.min(Ft,Xt.maxScale),"undefined"==typeof Kt.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?p(Kt.slides,"translate(-50%, -50%) scale("+Ft+") translate(50%, 50%)"):Kt.slides.style.zoom=Ft;for(var o=f(document.querySelectorAll(Yt)),i=0,s=o.length;s>i;i++){var c=o[i];"none"!==c.style.display&&(c.style.top=Xt.center?c.classList.contains("stack")?0:Math.max(-(m(c)/2)-a,-r/2)+"px":"")}F()}}function M(e,t,n){f(Kt.slides.querySelectorAll("section > .stretch")).forEach(function(r){var a=h(r,t-2*n);if(/(img|video)/gi.test(r.nodeName)){var o=r.naturalWidth||r.videoWidth,i=r.naturalHeight||r.videoHeight,s=Math.min(e/o,a/i);r.style.width=o*s+"px",r.style.height=i*s+"px"}else r.style.width=e+"px",r.style.height=a+"px"})}function C(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function D(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){var t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function N(){if(Xt.overview){ot();var e=Kt.wrapper.classList.contains("overview"),t=window.innerWidth<400?1e3:2500;Kt.wrapper.classList.add("overview"),Kt.wrapper.classList.remove("overview-deactivating"),clearTimeout(Qt),clearTimeout(Gt),Qt=setTimeout(function(){for(var n=document.querySelectorAll(Ot),r=0,a=n.length;a>r;r++){var o=n[r],i=Xt.rtl?-105:105;if(o.setAttribute("data-index-h",r),p(o,"translateZ(-"+t+"px) translate("+(r-Dt)*i+"%, 0%)"),o.classList.contains("stack"))for(var s=o.querySelectorAll("section"),c=0,l=s.length;l>c;c++){var d=r===Dt?Nt:D(o),u=s[c];u.setAttribute("data-index-h",r),u.setAttribute("data-index-v",c),p(u,"translate(0%, "+105*(c-d)+"%)"),u.addEventListener("click",Mt,!0)}else o.addEventListener("click",Mt,!0)}z(),T(),e||w("overviewshown",{indexh:Dt,indexv:Nt,currentSlide:Pt})},10)}}function $(){Xt.overview&&(clearTimeout(Qt),clearTimeout(Gt),Kt.wrapper.classList.remove("overview"),Kt.wrapper.classList.add("overview-deactivating"),Gt=setTimeout(function(){Kt.wrapper.classList.remove("overview-deactivating")},1),f(document.querySelectorAll(Yt)).forEach(function(e){p(e,""),e.removeEventListener("click",Mt,!0)}),X(Dt,Nt),at(),w("overviewhidden",{indexh:Dt,indexv:Nt,currentSlide:Pt}))}function P(e){"boolean"==typeof e?e?N():$():R()?$():N()}function R(){return Kt.wrapper.classList.contains("overview")}function I(e){return e=e?e:Pt,e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function H(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function Y(){var e=Kt.wrapper.classList.contains("paused");ot(),Kt.wrapper.classList.add("paused"),e===!1&&w("paused")}function O(){var e=Kt.wrapper.classList.contains("paused");Kt.wrapper.classList.remove("paused"),at(),e&&w("resumed")}function j(){U()?O():Y()}function U(){return Kt.wrapper.classList.contains("paused")}function X(e,t,n,r){$t=Pt;var a=document.querySelectorAll(Ot);void 0===t&&(t=D(a[e])),$t&&$t.parentNode&&$t.parentNode.classList.contains("stack")&&C($t.parentNode,Nt);var o=zt.concat();zt.length=0;var i=Dt||0,s=Nt||0;Dt=_(Ot,void 0===e?Dt:e),Nt=_(jt,void 0===t?Nt:t),z(),T();e:for(var c=0,l=zt.length;l>c;c++){for(var d=0;d<o.length;d++)if(o[d]===zt[c]){o.splice(d,1);continue e}document.documentElement.classList.add(zt[c]),w(zt[c])}for(;o.length;)document.documentElement.classList.remove(o.pop());R()&&N();var u=a[Dt],v=u.querySelectorAll("section");if(Pt=v[Nt]||u,"undefined"!=typeof n){var p=q(Pt.querySelectorAll(".fragment"));f(p).forEach(function(e,t){n>t?e.classList.add("visible"):e.classList.remove("visible")})}var m=Dt!==i||Nt!==s;m?w("slidechanged",{indexh:Dt,indexv:Nt,previousSlide:$t,currentSlide:Pt,origin:r}):$t=null,$t&&($t.classList.remove("present"),document.querySelector(Ut).classList.contains("present")&&setTimeout(function(){var e,t=f(document.querySelectorAll(Ot+".stack"));for(e in t)t[e]&&C(t[e],0)},0)),m&&(G($t),Q(Pt)),K(),F(),B(),et()}function W(){d(),l(),T(),_t=Xt.autoSlide,at(),s(),K(),F(),B()}function _(e,t){var n=f(document.querySelectorAll(e)),r=n.length;if(r){Xt.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var a=0;r>a;a++){var o=n[a],i=Xt.rtl&&!I(o);if(o.classList.remove("past"),o.classList.remove("present"),o.classList.remove("future"),o.setAttribute("hidden",""),t>a)o.classList.add(i?"future":"past");else if(a>t){o.classList.add(i?"past":"future");for(var s=f(o.querySelectorAll(".fragment.visible"));s.length;)s.pop().classList.remove("visible")}o.querySelector("section")&&o.classList.add("stack")}n[t].classList.add("present"),n[t].removeAttribute("hidden");var c=n[t].getAttribute("data-state");c&&(zt=zt.concat(c.split(" ")));var l=n[t].getAttribute("data-autoslide");_t=l?parseInt(l,10):Xt.autoSlide,at()}else t=0;return t}function z(){var e,t,n=f(document.querySelectorAll(Ot)),r=n.length;if(r){var a=R()?10:Xt.viewDistance;Ht&&(a=R()?6:1);for(var o=0;r>o;o++){var i=n[o],s=f(i.querySelectorAll("section")),c=s.length;if(e=Math.abs((Dt-o)%(r-a))||0,i.style.display=e>a?"none":"block",c)for(var l=D(i),d=0;c>d;d++){var u=s[d];t=o===Dt?Math.abs(Nt-d):Math.abs(d-l),u.style.display=e+t>a?"none":"block"}}}}function F(){if(Xt.progress&&Kt.progress){var e=f(document.querySelectorAll(Ot)),t=document.querySelectorAll(Yt+":not(.stack)").length,n=0;e:for(var r=0;r<e.length;r++){for(var a=e[r],o=f(a.querySelectorAll("section")),i=0;i<o.length;i++){if(o[i].classList.contains("present"))break e;n++}if(a.classList.contains("present"))break;a.classList.contains("stack")===!1&&n++}Kt.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function K(){var e=V(),t=Z();Kt.controlsLeft.concat(Kt.controlsRight).concat(Kt.controlsUp).concat(Kt.controlsDown).concat(Kt.controlsPrev).concat(Kt.controlsNext).forEach(function(e){e.classList.remove("enabled"),e.classList.remove("fragmented")}),e.left&&Kt.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&Kt.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&Kt.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&Kt.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&Kt.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&Kt.controlsNext.forEach(function(e){e.classList.add("enabled")}),Pt&&(t.prev&&Kt.controlsPrev.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Kt.controlsNext.forEach(function(e){e.classList.add("fragmented","enabled")}),I(Pt)?(t.prev&&Kt.controlsUp.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Kt.controlsDown.forEach(function(e){e.classList.add("fragmented","enabled")})):(t.prev&&Kt.controlsLeft.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Kt.controlsRight.forEach(function(e){e.classList.add("fragmented","enabled")})))}function B(){f(Kt.background.childNodes).forEach(function(e,t){var n=Xt.rtl?"future":"past",r=Xt.rtl?"past":"future";e.className="slide-background "+(Dt>t?n:t>Dt?r:"present"),f(e.childNodes).forEach(function(e,t){e.className="slide-background "+(Nt>t?"past":t>Nt?"future":"present")})}),setTimeout(function(){Kt.background.classList.remove("no-transition")},1)}function V(){var e=document.querySelectorAll(Ot),t=document.querySelectorAll(jt),n={left:Dt>0||Xt.loop,right:Dt<e.length-1||Xt.loop,up:Nt>0,down:Nt<t.length-1};if(Xt.rtl){var r=n.left;n.left=n.right,n.right=r}return n}function Z(){if(Pt&&Xt.fragments){var e=Pt.querySelectorAll(".fragment"),t=Pt.querySelectorAll(".fragment:not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}function Q(e){e&&(f(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&e.play()}),f(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function G(e){e&&(f(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-ignore")||e.pause()}),f(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-ignore")||"function"!=typeof e.contentWindow.postMessage||e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function J(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var a=Reveal.getIndices(r);X(a.h,a.v)}else X(Dt||0,Nt||0)}else{var o=parseInt(t[0],10)||0,i=parseInt(t[1],10)||0;(o!==Dt||i!==Nt)&&X(o,i)}}function et(e){if(Xt.history)if(clearTimeout(Zt),"number"==typeof e)Zt=setTimeout(et,e);else{var t="/";Pt&&"string"==typeof Pt.getAttribute("id")?t="/"+Pt.getAttribute("id"):((Dt>0||Nt>0)&&(t+=Dt),Nt>0&&(t+="/"+Nt)),window.location.hash=t}}function tt(e){var t,n=Dt,r=Nt;if(e){var a=I(e),o=a?e.parentNode:e,i=f(document.querySelectorAll(Ot));n=Math.max(i.indexOf(o),0),a&&(r=Math.max(f(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&Pt){var s=Pt.querySelectorAll(".fragment").length>0;if(s){var c=Pt.querySelectorAll(".fragment.visible");t=c.length}}return{h:n,v:r,f:t}}function nt(){if(Pt&&Xt.fragments){var e=q(Pt.querySelectorAll(".fragment:not(.visible)"));if(e.length){var t=e[0].getAttribute("data-fragment-index");return e=Pt.querySelectorAll('.fragment[data-fragment-index="'+t+'"]'),f(e).forEach(function(e){e.classList.add("visible")}),w("fragmentshown",{fragment:e[0],fragments:e}),K(),!0}}return!1}function rt(){if(Pt&&Xt.fragments){var e=q(Pt.querySelectorAll(".fragment.visible"));if(e.length){var t=e[e.length-1].getAttribute("data-fragment-index");return e=Pt.querySelectorAll('.fragment[data-fragment-index="'+t+'"]'),f(e).forEach(function(e){e.classList.remove("visible")}),w("fragmenthidden",{fragment:e[0],fragments:e}),K(),!0}}return!1}function at(){clearTimeout(Vt),!_t||U()||R()||(Vt=setTimeout(ut,_t))}function ot(){clearTimeout(Vt)}function it(){Xt.rtl?(R()||nt()===!1)&&V().left&&X(Dt+1):(R()||rt()===!1)&&V().left&&X(Dt-1)}function st(){Xt.rtl?(R()||rt()===!1)&&V().right&&X(Dt-1):(R()||nt()===!1)&&V().right&&X(Dt+1)}function ct(){(R()||rt()===!1)&&V().up&&X(Dt,Nt-1)}function lt(){(R()||nt()===!1)&&V().down&&X(Dt,Nt+1)}function dt(){if(rt()===!1)if(V().up)ct();else{var e=document.querySelector(Ot+".past:nth-child("+Dt+")");if(e){var t=e.querySelectorAll("section").length-1||void 0,n=Dt-1;X(n,t)}}}function ut(){nt()===!1&&(V().down?lt():st()),at()}function ft(e){document.activeElement;var t=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){if(U()&&-1===[66,190,191].indexOf(e.keyCode))return!1;var n=!1;if("object"==typeof Xt.keyboard)for(var r in Xt.keyboard)if(parseInt(r,10)===e.keyCode){var a=Xt.keyboard[r];"function"==typeof a?a.apply(null,[e]):"string"==typeof a&&"function"==typeof Reveal[a]&&Reveal[a].call(),n=!0}if(n===!1)switch(n=!0,e.keyCode){case 80:case 33:dt();break;case 78:case 34:ut();break;case 72:case 37:it();break;case 76:case 39:st();break;case 75:case 38:ct();break;case 74:case 40:lt();break;case 36:X(0);break;case 35:X(Number.MAX_VALUE);break;case 32:R()?$():e.shiftKey?dt():ut();break;case 13:R()?$():n=!1;break;case 66:case 190:case 191:j();break;case 70:H();break;default:n=!1}n?e.preventDefault():27!==e.keyCode&&79!==e.keyCode||!Rt||(P(),e.preventDefault()),at()}}function vt(e){en.startX=e.touches[0].clientX,en.startY=e.touches[0].clientY,en.startCount=e.touches.length,2===e.touches.length&&Xt.overview&&(en.startSpan=v({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:en.startX,y:en.startY}))}function pt(e){if(en.captured)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===en.startCount&&Xt.overview){var r=v({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:en.startX,y:en.startY});Math.abs(en.startSpan-r)>en.threshold&&(en.captured=!0,r<en.startSpan?N():$()),e.preventDefault()}else if(1===e.touches.length&&2!==en.startCount){var a=t-en.startX,o=n-en.startY;a>en.threshold&&Math.abs(a)>Math.abs(o)?(en.captured=!0,it()):a<-en.threshold&&Math.abs(a)>Math.abs(o)?(en.captured=!0,st()):o>en.threshold?(en.captured=!0,ct()):o<-en.threshold&&(en.captured=!0,lt()),Xt.embedded?(en.captured||I(Pt))&&e.preventDefault():e.preventDefault()}}}function mt(){en.captured=!1}function ht(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],vt(e))}function gt(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],pt(e))}function yt(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],mt(e))}function bt(e){if(Date.now()-Bt>600){Bt=Date.now();var t=e.detail||-e.wheelDelta;t>0?ut():dt()}}function wt(e){e.preventDefault();var t=f(document.querySelectorAll(Ot)).length,n=Math.floor(e.clientX/Kt.wrapper.offsetWidth*t);X(n)}function Lt(e){e.preventDefault(),it()}function kt(e){e.preventDefault(),st()}function Et(e){e.preventDefault(),ct()}function St(e){e.preventDefault(),lt()}function At(e){e.preventDefault(),dt()}function xt(e){e.preventDefault(),ut()}function qt(){J()}function Tt(){T()}function Mt(e){if(Jt&&R()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&($(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);X(n,r)}}}function Ct(e){var t=e.target.getAttribute("href");t&&(A(t),e.preventDefault())}var Dt,Nt,$t,Pt,Rt,It,Ht,Yt=".reveal .slides section",Ot=".reveal .slides>section",jt=".reveal .slides>section.present>section",Ut=".reveal .slides>section:first-child",Xt={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,previewLinks:!1,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",viewDistance:3,dependencies:[]},Wt=!1,_t=0,zt=[],Ft=1,Kt={},Bt=0,Vt=0,Zt=0,Qt=0,Gt=0,Jt=!1,en={startX:0,startY:0,startSpan:0,startCount:0,captured:!1,threshold:40};return{initialize:e,configure:c,sync:W,slide:X,left:it,right:st,up:ct,down:lt,prev:dt,next:ut,prevFragment:rt,nextFragment:nt,navigateTo:X,navigateLeft:it,navigateRight:st,navigateUp:ct,navigateDown:lt,navigatePrev:dt,navigateNext:ut,layout:T,availableRoutes:V,availableFragments:Z,toggleOverview:P,togglePause:j,isOverview:R,isPaused:U,addEventListeners:l,removeEventListeners:d,getIndices:tt,getSlide:function(e,t){var n=document.querySelectorAll(Ot)[e],r=n&&n.querySelectorAll("section");return"undefined"!=typeof t?r?r[t]:void 0:n},getPreviousSlide:function(){return $t},getCurrentSlide:function(){return Pt},getScale:function(){return Ft},getConfig:function(){return Xt},getQueryHash:function(){var e={};return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()}),e},isFirstSlide:function(){return null==document.querySelector(Yt+".past")?!0:!1},isLastSlide:function(){return Pt?Pt.nextElementSibling?!1:I(Pt)&&Pt.parentNode.nextElementSibling?!1:!0:!1},isReady:function(){return Wt},addEventListener:function(e,t,n){"addEventListener"in window&&(Kt.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(Kt.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();Reveal.initialize({controls:!1,progress:!1,history:!0,transition:"fade",transitionSpeed:"default",backgroundTransition:"default"});var handler=StripeCheckout.configure({key:$("#stripe_key").data("key"),image:"/assets/square-image.png",token:function(e){$("#payment_token").val(e.id),$(".destination").submit()}});$(".next").click(function(){Reveal.next()}),$(".prev").click(function(){Reveal.prev()}),$(".card").click(function(e){$(".card").removeClass("selected"),$(e.currentTarget).addClass("selected"),$(".photo-chosen").val($(e.currentTarget).attr("src")),$("textarea.message").focus(),Reveal.next()}),$(".where").click(function(){""==$(".message").val()?js_flash("You should write a message before you continue!"):($(".final-message").val($(".message").val()),Reveal.next())}),setTimeout(function(){$(".flash.notice").slideUp()},5e3),$(".flash").click(function(){$(".flash").slideUp()}),$(".purchase").click(function(e){console.log($("#email").val()),e.preventDefault(),allOptionsComplete()&&(amount="US"==$("#country").val()?200:300,handler.open({name:"postperfect.co",description:"1 postcard",amount:amount,email:$("#email").val()}))});