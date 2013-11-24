/*!
 * reveal.js 2.6.0-dev (2013-09-11, 21:54)
 * http://lab.hakim.se/reveal-js
 * MIT licensed
 *
 * Copyright (C) 2013 Hakim El Hattab, http://hakim.se
 */
function paginate(){$(".card-section").length==Reveal.getIndices().v+1?($(".next-page").hide(),$(".previous-page").css("display","inline-block")):1==Reveal.getIndices().v+1?($(".next-page").css("display","inline-block"),$(".previous-page").hide()):($(".next-page").css("display","inline-block"),$(".previous-page").css("display","inline-block"))}function js_flash(e){$(".flash.js").html(e).slideDown(),setTimeout(function(){$(".flash.js").slideUp()},5e3)}function allOptionsComplete(){return complete=!1,cardChosen()?messageWritten()?addressFormComplete()?complete=!0:js_flash("Make sure you're done with the address form before submitting your postcard."):(Reveal.slide(2,0,void 0),js_flash("Don't forget to write a message.")):(Reveal.slide(1,0,void 0),js_flash("Don't forget to choose a card.")),complete}function cardChosen(){return chosen=!1,$(".card").each(function(e,t){$(t).hasClass("selected")&&(chosen=!0)}),chosen}function messageWritten(){return written=!1,""!=$(".message").val()&&(written=!0),written}function addressFormComplete(){return $(".destination")[0].checkValidity()}function maskLoad(){$("body").prepend('<div class="loading-mask"><div class="processing-message">Processing<br><br><i class="fa fa-spinner fa-spin"></i></div></div>'),$(".processing-message").css("top",$(document).height()/2)}function unmaskLoad(){$(".loading-mask").remove()}var Reveal=function(){"use strict";function e(e){return t(),It||Pt?(window.addEventListener("load",T,!1),u(Wt,e),y(),n(),void 0):(document.body.setAttribute("class","no-transforms"),void 0)}function t(){Pt="WebkitPerspective"in document.body.style||"MozPerspective"in document.body.style||"msPerspective"in document.body.style||"OPerspective"in document.body.style||"perspective"in document.body.style,It="WebkitTransform"in document.body.style||"MozTransform"in document.body.style||"msTransform"in document.body.style||"OTransform"in document.body.style||"transform"in document.body.style,Ht=navigator.userAgent.match(/(iphone|ipod|android)/gi)}function n(){function e(){n.length&&head.js.apply(null,n),r()}for(var t=[],n=[],a=0,o=Wt.dependencies.length;o>a;a++){var i=Wt.dependencies[a];(!i.condition||i.condition())&&(i.async?n.push(i.src):t.push(i.src),"function"==typeof i.callback&&head.ready(i.src.match(/([\w\d_\-]*)\.?js$|[^\\\/]*$/i)[0],i.callback))}t.length?(head.ready(e),head.js.apply(null,t)):e()}function r(){o(),a(),c(),J(),setTimeout(function(){Bt.slides.classList.remove("no-transition"),Xt=!0,w("ready",{indexh:Ct,indexv:Nt,currentSlide:Rt})},1)}function a(){var e=f(document.querySelectorAll(jt));e.forEach(function(e){var t=f(e.querySelectorAll("section"));t.forEach(function(e,t){t>0&&e.classList.add("future")})})}function o(){Bt.theme=document.querySelector("#theme"),Bt.wrapper=document.querySelector(".reveal"),Bt.slides=document.querySelector(".reveal .slides"),Bt.slides.classList.add("no-transition"),Bt.background=i(Bt.wrapper,"div","backgrounds",null),Bt.progress=i(Bt.wrapper,"div","progress","<span></span>"),Bt.progressbar=Bt.progress.querySelector("span"),i(Bt.wrapper,"aside","controls",'<div class="navigate-left"></div><div class="navigate-right"></div><div class="navigate-up"></div><div class="navigate-down"></div>'),i(Bt.wrapper,"div","state-background",null),i(Bt.wrapper,"div","pause-overlay",null),Bt.controls=document.querySelector(".reveal .controls"),Bt.controlsLeft=f(document.querySelectorAll(".navigate-left")),Bt.controlsRight=f(document.querySelectorAll(".navigate-right")),Bt.controlsUp=f(document.querySelectorAll(".navigate-up")),Bt.controlsDown=f(document.querySelectorAll(".navigate-down")),Bt.controlsPrev=f(document.querySelectorAll(".navigate-prev")),Bt.controlsNext=f(document.querySelectorAll(".navigate-next"))}function i(e,t,n,r){var a=e.querySelector("."+n);return a||(a=document.createElement(t),a.classList.add(n),null!==r&&(a.innerHTML=r),e.appendChild(a)),a}function s(){function e(e,t){var n={background:e.getAttribute("data-background"),backgroundSize:e.getAttribute("data-background-size"),backgroundImage:e.getAttribute("data-background-image"),backgroundColor:e.getAttribute("data-background-color"),backgroundRepeat:e.getAttribute("data-background-repeat"),backgroundPosition:e.getAttribute("data-background-position"),backgroundTransition:e.getAttribute("data-background-transition")},r=document.createElement("div");return r.className="slide-background",n.background&&(/^(http|file|\/\/)/gi.test(n.background)||/\.(png|jpg|jpeg|gif|bmp)$/gi.test(n.background)?r.style.backgroundImage="url("+n.background+")":r.style.background=n.background),n.backgroundSize&&(r.style.backgroundSize=n.backgroundSize),n.backgroundImage&&(r.style.backgroundImage='url("'+n.backgroundImage+'")'),n.backgroundColor&&(r.style.backgroundColor=n.backgroundColor),n.backgroundRepeat&&(r.style.backgroundRepeat=n.backgroundRepeat),n.backgroundPosition&&(r.style.backgroundPosition=n.backgroundPosition),n.backgroundTransition&&r.setAttribute("data-background-transition",n.backgroundTransition),t.appendChild(r),r}h()&&document.body.classList.add("print-pdf"),Bt.background.innerHTML="",Bt.background.classList.add("no-transition"),f(document.querySelectorAll(jt)).forEach(function(t){var n;n=h()?e(t,t):e(t,Bt.background),f(t.querySelectorAll("section")).forEach(function(t){h()?e(t,t):e(t,n)})})}function c(e){if(Bt.wrapper.classList.remove(Wt.transition),"object"==typeof e&&u(Wt,e),Pt===!1&&(Wt.transition="linear"),Bt.wrapper.classList.add(Wt.transition),Bt.wrapper.setAttribute("data-transition-speed",Wt.transitionSpeed),Bt.wrapper.setAttribute("data-background-transition",Wt.backgroundTransition),Bt.controls.style.display=Wt.controls?"block":"none",Bt.progress.style.display=Wt.progress?"block":"none",Wt.rtl?Bt.wrapper.classList.add("rtl"):Bt.wrapper.classList.remove("rtl"),Wt.center?Bt.wrapper.classList.add("center"):Bt.wrapper.classList.remove("center"),Wt.mouseWheel?(document.addEventListener("DOMMouseScroll",bt,!1),document.addEventListener("mousewheel",bt,!1)):(document.removeEventListener("DOMMouseScroll",bt,!1),document.removeEventListener("mousewheel",bt,!1)),Wt.rollingLinks?L():k(),Wt.previewLinks?E():(S(),E("[data-preview-link]")),Wt.theme&&Bt.theme){var t=Bt.theme.getAttribute("href"),n=/[^\/]*?(?=\.css)/,r=t.match(n)[0];Wt.theme!==r&&(t=t.replace(n,Wt.theme),Bt.theme.setAttribute("href",t))}X()}function l(){Jt=!0,window.addEventListener("hashchange",qt,!1),window.addEventListener("resize",Tt,!1),Wt.touch&&(Bt.wrapper.addEventListener("touchstart",vt,!1),Bt.wrapper.addEventListener("touchmove",pt,!1),Bt.wrapper.addEventListener("touchend",gt,!1),window.navigator.msPointerEnabled&&(Bt.wrapper.addEventListener("MSPointerDown",mt,!1),Bt.wrapper.addEventListener("MSPointerMove",ht,!1),Bt.wrapper.addEventListener("MSPointerUp",yt,!1))),Wt.keyboard&&document.addEventListener("keydown",ft,!1),Wt.progress&&Bt.progress&&Bt.progress.addEventListener("click",wt,!1),["touchstart","click"].forEach(function(e){Bt.controlsLeft.forEach(function(t){t.addEventListener(e,Lt,!1)}),Bt.controlsRight.forEach(function(t){t.addEventListener(e,kt,!1)}),Bt.controlsUp.forEach(function(t){t.addEventListener(e,Et,!1)}),Bt.controlsDown.forEach(function(t){t.addEventListener(e,St,!1)}),Bt.controlsPrev.forEach(function(t){t.addEventListener(e,At,!1)}),Bt.controlsNext.forEach(function(t){t.addEventListener(e,xt,!1)})})}function d(){Jt=!1,document.removeEventListener("keydown",ft,!1),window.removeEventListener("hashchange",qt,!1),window.removeEventListener("resize",Tt,!1),Bt.wrapper.removeEventListener("touchstart",vt,!1),Bt.wrapper.removeEventListener("touchmove",pt,!1),Bt.wrapper.removeEventListener("touchend",gt,!1),window.navigator.msPointerEnabled&&(Bt.wrapper.removeEventListener("MSPointerDown",mt,!1),Bt.wrapper.removeEventListener("MSPointerMove",ht,!1),Bt.wrapper.removeEventListener("MSPointerUp",yt,!1)),Wt.progress&&Bt.progress&&Bt.progress.removeEventListener("click",wt,!1),["touchstart","click"].forEach(function(e){Bt.controlsLeft.forEach(function(t){t.removeEventListener(e,Lt,!1)}),Bt.controlsRight.forEach(function(t){t.removeEventListener(e,kt,!1)}),Bt.controlsUp.forEach(function(t){t.removeEventListener(e,Et,!1)}),Bt.controlsDown.forEach(function(t){t.removeEventListener(e,St,!1)}),Bt.controlsPrev.forEach(function(t){t.removeEventListener(e,At,!1)}),Bt.controlsNext.forEach(function(t){t.removeEventListener(e,xt,!1)})})}function u(e,t){for(var n in t)e[n]=t[n]}function f(e){return Array.prototype.slice.call(e)}function v(e,t){var n=e.x-t.x,r=e.y-t.y;return Math.sqrt(n*n+r*r)}function p(e,t){e.style.WebkitTransform=t,e.style.MozTransform=t,e.style.msTransform=t,e.style.OTransform=t,e.style.transform=t}function g(e){var t=0;if(e){var n=0;f(e.childNodes).forEach(function(e){"number"==typeof e.offsetTop&&e.style&&("absolute"===e.style.position&&(n+=1),t=Math.max(t,e.offsetTop+e.offsetHeight))}),0===n&&(t=e.offsetHeight)}return t}function m(e,t){if(t=t||0,e){var n=e.parentNode,r=n.childNodes;f(r).forEach(function(n){if("number"==typeof n.offsetHeight&&n!==e){var r=window.getComputedStyle(n),a=parseInt(r.marginTop,10),o=parseInt(r.marginBottom,10);t-=n.offsetHeight+a+o}});var a=window.getComputedStyle(e);t-=parseInt(a.marginTop,10)+parseInt(a.marginBottom,10)}return t}function h(){return/print-pdf/gi.test(window.location.search)}function y(){Wt.hideAddressBar&&Ht&&(window.addEventListener("load",b,!1),window.addEventListener("orientationchange",b,!1))}function b(){0!==window.orientation||/crios/gi.test(navigator.userAgent)?(document.documentElement.style.overflow="",document.body.style.height="100%"):(document.documentElement.style.overflow="scroll",document.body.style.height="120%"),setTimeout(function(){window.scrollTo(0,1)},10)}function w(e,t){var n=document.createEvent("HTMLEvents",1,2);n.initEvent(e,!0,!0),u(n,t),Bt.wrapper.dispatchEvent(n)}function L(){if(Pt&&!("msPerspective"in document.body.style))for(var e=document.querySelectorAll(Yt+" a:not(.image)"),t=0,n=e.length;n>t;t++){var r=e[t];if(!(!r.textContent||r.querySelector("*")||r.className&&r.classList.contains(r,"roll"))){var a=document.createElement("span");a.setAttribute("data-title",r.text),a.innerHTML=r.innerHTML,r.classList.add("roll"),r.innerHTML="",r.appendChild(a)}}}function k(){for(var e=document.querySelectorAll(Yt+" a.roll"),t=0,n=e.length;n>t;t++){var r=e[t],a=r.querySelector("span");a&&(r.classList.remove("roll"),r.innerHTML=a.innerHTML)}}function E(e){var t=f(document.querySelectorAll(e?e:"a"));t.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.addEventListener("click",$t,!1)})}function S(){var e=f(document.querySelectorAll("a"));e.forEach(function(e){/^(http|www)/gi.test(e.getAttribute("href"))&&e.removeEventListener("click",$t,!1)})}function A(e){x(),Bt.preview=document.createElement("div"),Bt.preview.classList.add("preview-link-overlay"),Bt.wrapper.appendChild(Bt.preview),Bt.preview.innerHTML=["<header>",'<a class="close" href="#"><span class="icon"></span></a>','<a class="external" href="'+e+'" target="_blank"><span class="icon"></span></a>',"</header>",'<div class="spinner"></div>','<div class="viewport">','<iframe src="'+e+'"></iframe>',"</div>"].join(""),Bt.preview.querySelector("iframe").addEventListener("load",function(){Bt.preview.classList.add("loaded")},!1),Bt.preview.querySelector(".close").addEventListener("click",function(e){x(),e.preventDefault()},!1),Bt.preview.querySelector(".external").addEventListener("click",function(){x()},!1),setTimeout(function(){Bt.preview.classList.add("visible")},1)}function x(){Bt.preview&&(Bt.preview.setAttribute("src",""),Bt.preview.parentNode.removeChild(Bt.preview),Bt.preview=null)}function q(e){var t=f(e);return t.forEach(function(e,t){e.hasAttribute("data-fragment-index")||e.setAttribute("data-fragment-index",t)}),t.sort(function(e,t){return e.getAttribute("data-fragment-index")-t.getAttribute("data-fragment-index")}),t}function T(){if(Bt.wrapper&&!h()){var e=Bt.wrapper.offsetWidth,t=Bt.wrapper.offsetHeight;e-=t*Wt.margin,t-=t*Wt.margin;var n=Wt.width,r=Wt.height,a=20;M(Wt.width,Wt.height,a),"string"==typeof n&&/%$/.test(n)&&(n=parseInt(n,10)/100*e),"string"==typeof r&&/%$/.test(r)&&(r=parseInt(r,10)/100*t),Bt.slides.style.width=n+"px",Bt.slides.style.height=r+"px",Ft=Math.min(e/n,t/r),Ft=Math.max(Ft,Wt.minScale),Ft=Math.min(Ft,Wt.maxScale),"undefined"==typeof Bt.slides.style.zoom||navigator.userAgent.match(/(iphone|ipod|ipad|android)/gi)?p(Bt.slides,"translate(-50%, -50%) scale("+Ft+") translate(50%, 50%)"):Bt.slides.style.zoom=Ft;for(var o=f(document.querySelectorAll(Yt)),i=0,s=o.length;s>i;i++){var c=o[i];"none"!==c.style.display&&(c.style.top=Wt.center?c.classList.contains("stack")?0:Math.max(-(g(c)/2)-a,-r/2)+"px":"")}F()}}function M(e,t,n){f(Bt.slides.querySelectorAll("section > .stretch")).forEach(function(r){var a=m(r,t-2*n);if(/(img|video)/gi.test(r.nodeName)){var o=r.naturalWidth||r.videoWidth,i=r.naturalHeight||r.videoHeight,s=Math.min(e/o,a/i);r.style.width=o*s+"px",r.style.height=i*s+"px"}else r.style.width=e+"px",r.style.height=a+"px"})}function $(e,t){"object"==typeof e&&"function"==typeof e.setAttribute&&e.setAttribute("data-previous-indexv",t||0)}function C(e){if("object"==typeof e&&"function"==typeof e.setAttribute&&e.classList.contains("stack")){var t=e.hasAttribute("data-start-indexv")?"data-start-indexv":"data-previous-indexv";return parseInt(e.getAttribute(t)||0,10)}return 0}function N(){if(Wt.overview){ot();var e=Bt.wrapper.classList.contains("overview"),t=window.innerWidth<400?1e3:2500;Bt.wrapper.classList.add("overview"),Bt.wrapper.classList.remove("overview-deactivating"),clearTimeout(Gt),clearTimeout(Qt),Gt=setTimeout(function(){for(var n=document.querySelectorAll(jt),r=0,a=n.length;a>r;r++){var o=n[r],i=Wt.rtl?-105:105;if(o.setAttribute("data-index-h",r),p(o,"translateZ(-"+t+"px) translate("+(r-Ct)*i+"%, 0%)"),o.classList.contains("stack"))for(var s=o.querySelectorAll("section"),c=0,l=s.length;l>c;c++){var d=r===Ct?Nt:C(o),u=s[c];u.setAttribute("data-index-h",r),u.setAttribute("data-index-v",c),p(u,"translate(0%, "+105*(c-d)+"%)"),u.addEventListener("click",Mt,!0)}else o.addEventListener("click",Mt,!0)}_(),T(),e||w("overviewshown",{indexh:Ct,indexv:Nt,currentSlide:Rt})},10)}}function D(){Wt.overview&&(clearTimeout(Gt),clearTimeout(Qt),Bt.wrapper.classList.remove("overview"),Bt.wrapper.classList.add("overview-deactivating"),Qt=setTimeout(function(){Bt.wrapper.classList.remove("overview-deactivating")},1),f(document.querySelectorAll(Yt)).forEach(function(e){p(e,""),e.removeEventListener("click",Mt,!0)}),W(Ct,Nt),at(),w("overviewhidden",{indexh:Ct,indexv:Nt,currentSlide:Rt}))}function R(e){"boolean"==typeof e?e?N():D():P()?D():N()}function P(){return Bt.wrapper.classList.contains("overview")}function I(e){return e=e?e:Rt,e&&e.parentNode&&!!e.parentNode.nodeName.match(/section/i)}function H(){var e=document.body,t=e.requestFullScreen||e.webkitRequestFullscreen||e.webkitRequestFullScreen||e.mozRequestFullScreen||e.msRequestFullScreen;t&&t.apply(e)}function Y(){var e=Bt.wrapper.classList.contains("paused");ot(),Bt.wrapper.classList.add("paused"),e===!1&&w("paused")}function j(){var e=Bt.wrapper.classList.contains("paused");Bt.wrapper.classList.remove("paused"),at(),e&&w("resumed")}function O(){U()?j():Y()}function U(){return Bt.wrapper.classList.contains("paused")}function W(e,t,n,r){Dt=Rt;var a=document.querySelectorAll(jt);void 0===t&&(t=C(a[e])),Dt&&Dt.parentNode&&Dt.parentNode.classList.contains("stack")&&$(Dt.parentNode,Nt);var o=_t.concat();_t.length=0;var i=Ct||0,s=Nt||0;Ct=z(jt,void 0===e?Ct:e),Nt=z(Ot,void 0===t?Nt:t),_(),T();e:for(var c=0,l=_t.length;l>c;c++){for(var d=0;d<o.length;d++)if(o[d]===_t[c]){o.splice(d,1);continue e}document.documentElement.classList.add(_t[c]),w(_t[c])}for(;o.length;)document.documentElement.classList.remove(o.pop());P()&&N();var u=a[Ct],v=u.querySelectorAll("section");if(Rt=v[Nt]||u,"undefined"!=typeof n){var p=q(Rt.querySelectorAll(".fragment"));f(p).forEach(function(e,t){n>t?e.classList.add("visible"):e.classList.remove("visible")})}var g=Ct!==i||Nt!==s;g?w("slidechanged",{indexh:Ct,indexv:Nt,previousSlide:Dt,currentSlide:Rt,origin:r}):Dt=null,Dt&&(Dt.classList.remove("present"),document.querySelector(Ut).classList.contains("present")&&setTimeout(function(){var e,t=f(document.querySelectorAll(jt+".stack"));for(e in t)t[e]&&$(t[e],0)},0)),g&&(Q(Dt),G(Rt)),B(),F(),K(),et()}function X(){d(),l(),T(),zt=Wt.autoSlide,at(),s(),B(),F(),K()}function z(e,t){var n=f(document.querySelectorAll(e)),r=n.length;if(r){Wt.loop&&(t%=r,0>t&&(t=r+t)),t=Math.max(Math.min(t,r-1),0);for(var a=0;r>a;a++){var o=n[a],i=Wt.rtl&&!I(o);if(o.classList.remove("past"),o.classList.remove("present"),o.classList.remove("future"),o.setAttribute("hidden",""),t>a)o.classList.add(i?"future":"past");else if(a>t){o.classList.add(i?"past":"future");for(var s=f(o.querySelectorAll(".fragment.visible"));s.length;)s.pop().classList.remove("visible")}o.querySelector("section")&&o.classList.add("stack")}n[t].classList.add("present"),n[t].removeAttribute("hidden");var c=n[t].getAttribute("data-state");c&&(_t=_t.concat(c.split(" ")));var l=n[t].getAttribute("data-autoslide");zt=l?parseInt(l,10):Wt.autoSlide,at()}else t=0;return t}function _(){var e,t,n=f(document.querySelectorAll(jt)),r=n.length;if(r){var a=P()?10:Wt.viewDistance;Ht&&(a=P()?6:1);for(var o=0;r>o;o++){var i=n[o],s=f(i.querySelectorAll("section")),c=s.length;if(e=Math.abs((Ct-o)%(r-a))||0,i.style.display=e>a?"none":"block",c)for(var l=C(i),d=0;c>d;d++){var u=s[d];t=o===Ct?Math.abs(Nt-d):Math.abs(d-l),u.style.display=e+t>a?"none":"block"}}}}function F(){if(Wt.progress&&Bt.progress){var e=f(document.querySelectorAll(jt)),t=document.querySelectorAll(Yt+":not(.stack)").length,n=0;e:for(var r=0;r<e.length;r++){for(var a=e[r],o=f(a.querySelectorAll("section")),i=0;i<o.length;i++){if(o[i].classList.contains("present"))break e;n++}if(a.classList.contains("present"))break;a.classList.contains("stack")===!1&&n++}Bt.progressbar.style.width=n/(t-1)*window.innerWidth+"px"}}function B(){var e=V(),t=Z();Bt.controlsLeft.concat(Bt.controlsRight).concat(Bt.controlsUp).concat(Bt.controlsDown).concat(Bt.controlsPrev).concat(Bt.controlsNext).forEach(function(e){e.classList.remove("enabled"),e.classList.remove("fragmented")}),e.left&&Bt.controlsLeft.forEach(function(e){e.classList.add("enabled")}),e.right&&Bt.controlsRight.forEach(function(e){e.classList.add("enabled")}),e.up&&Bt.controlsUp.forEach(function(e){e.classList.add("enabled")}),e.down&&Bt.controlsDown.forEach(function(e){e.classList.add("enabled")}),(e.left||e.up)&&Bt.controlsPrev.forEach(function(e){e.classList.add("enabled")}),(e.right||e.down)&&Bt.controlsNext.forEach(function(e){e.classList.add("enabled")}),Rt&&(t.prev&&Bt.controlsPrev.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Bt.controlsNext.forEach(function(e){e.classList.add("fragmented","enabled")}),I(Rt)?(t.prev&&Bt.controlsUp.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Bt.controlsDown.forEach(function(e){e.classList.add("fragmented","enabled")})):(t.prev&&Bt.controlsLeft.forEach(function(e){e.classList.add("fragmented","enabled")}),t.next&&Bt.controlsRight.forEach(function(e){e.classList.add("fragmented","enabled")})))}function K(){f(Bt.background.childNodes).forEach(function(e,t){var n=Wt.rtl?"future":"past",r=Wt.rtl?"past":"future";e.className="slide-background "+(Ct>t?n:t>Ct?r:"present"),f(e.childNodes).forEach(function(e,t){e.className="slide-background "+(Nt>t?"past":t>Nt?"future":"present")})}),setTimeout(function(){Bt.background.classList.remove("no-transition")},1)}function V(){var e=document.querySelectorAll(jt),t=document.querySelectorAll(Ot),n={left:Ct>0||Wt.loop,right:Ct<e.length-1||Wt.loop,up:Nt>0,down:Nt<t.length-1};if(Wt.rtl){var r=n.left;n.left=n.right,n.right=r}return n}function Z(){if(Rt&&Wt.fragments){var e=Rt.querySelectorAll(".fragment"),t=Rt.querySelectorAll(".fragment:not(.visible)");return{prev:e.length-t.length>0,next:!!t.length}}return{prev:!1,next:!1}}function G(e){e&&(f(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-autoplay")&&e.play()}),f(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-autoplay")&&e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*")}))}function Q(e){e&&(f(e.querySelectorAll("video, audio")).forEach(function(e){e.hasAttribute("data-ignore")||e.pause()}),f(e.querySelectorAll('iframe[src*="youtube.com/embed/"]')).forEach(function(e){e.hasAttribute("data-ignore")||"function"!=typeof e.contentWindow.postMessage||e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*")}))}function J(){var e=window.location.hash,t=e.slice(2).split("/"),n=e.replace(/#|\//gi,"");if(isNaN(parseInt(t[0],10))&&n.length){var r=document.querySelector("#"+n);if(r){var a=Reveal.getIndices(r);W(a.h,a.v)}else W(Ct||0,Nt||0)}else{var o=parseInt(t[0],10)||0,i=parseInt(t[1],10)||0;(o!==Ct||i!==Nt)&&W(o,i)}}function et(e){if(Wt.history)if(clearTimeout(Zt),"number"==typeof e)Zt=setTimeout(et,e);else{var t="/";Rt&&"string"==typeof Rt.getAttribute("id")?t="/"+Rt.getAttribute("id"):((Ct>0||Nt>0)&&(t+=Ct),Nt>0&&(t+="/"+Nt)),window.location.hash=t}}function tt(e){var t,n=Ct,r=Nt;if(e){var a=I(e),o=a?e.parentNode:e,i=f(document.querySelectorAll(jt));n=Math.max(i.indexOf(o),0),a&&(r=Math.max(f(e.parentNode.querySelectorAll("section")).indexOf(e),0))}if(!e&&Rt){var s=Rt.querySelectorAll(".fragment").length>0;if(s){var c=Rt.querySelectorAll(".fragment.visible");t=c.length}}return{h:n,v:r,f:t}}function nt(){if(Rt&&Wt.fragments){var e=q(Rt.querySelectorAll(".fragment:not(.visible)"));if(e.length){var t=e[0].getAttribute("data-fragment-index");return e=Rt.querySelectorAll('.fragment[data-fragment-index="'+t+'"]'),f(e).forEach(function(e){e.classList.add("visible")}),w("fragmentshown",{fragment:e[0],fragments:e}),B(),!0}}return!1}function rt(){if(Rt&&Wt.fragments){var e=q(Rt.querySelectorAll(".fragment.visible"));if(e.length){var t=e[e.length-1].getAttribute("data-fragment-index");return e=Rt.querySelectorAll('.fragment[data-fragment-index="'+t+'"]'),f(e).forEach(function(e){e.classList.remove("visible")}),w("fragmenthidden",{fragment:e[0],fragments:e}),B(),!0}}return!1}function at(){clearTimeout(Vt),!zt||U()||P()||(Vt=setTimeout(ut,zt))}function ot(){clearTimeout(Vt)}function it(){Wt.rtl?(P()||nt()===!1)&&V().left&&W(Ct+1):(P()||rt()===!1)&&V().left&&W(Ct-1)}function st(){Wt.rtl?(P()||rt()===!1)&&V().right&&W(Ct-1):(P()||nt()===!1)&&V().right&&W(Ct+1)}function ct(){(P()||rt()===!1)&&V().up&&W(Ct,Nt-1)}function lt(){(P()||nt()===!1)&&V().down&&W(Ct,Nt+1)}function dt(){if(rt()===!1)if(V().up)ct();else{var e=document.querySelector(jt+".past:nth-child("+Ct+")");if(e){var t=e.querySelectorAll("section").length-1||void 0,n=Ct-1;W(n,t)}}}function ut(){nt()===!1&&(V().down?lt():st()),at()}function ft(e){document.activeElement;var t=!(!document.activeElement||!document.activeElement.type&&!document.activeElement.href&&"inherit"===document.activeElement.contentEditable);if(!(t||e.shiftKey&&32!==e.keyCode||e.altKey||e.ctrlKey||e.metaKey)){if(U()&&-1===[66,190,191].indexOf(e.keyCode))return!1;var n=!1;if("object"==typeof Wt.keyboard)for(var r in Wt.keyboard)if(parseInt(r,10)===e.keyCode){var a=Wt.keyboard[r];"function"==typeof a?a.apply(null,[e]):"string"==typeof a&&"function"==typeof Reveal[a]&&Reveal[a].call(),n=!0}if(n===!1)switch(n=!0,e.keyCode){case 80:case 33:dt();break;case 78:case 34:ut();break;case 72:case 37:it();break;case 76:case 39:st();break;case 75:case 38:ct();break;case 74:case 40:lt();break;case 36:W(0);break;case 35:W(Number.MAX_VALUE);break;case 32:P()?D():e.shiftKey?dt():ut();break;case 13:P()?D():n=!1;break;case 66:case 190:case 191:O();break;case 70:H();break;default:n=!1}n?e.preventDefault():27!==e.keyCode&&79!==e.keyCode||!Pt||(R(),e.preventDefault()),at()}}function vt(e){en.startX=e.touches[0].clientX,en.startY=e.touches[0].clientY,en.startCount=e.touches.length,2===e.touches.length&&Wt.overview&&(en.startSpan=v({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:en.startX,y:en.startY}))}function pt(e){if(en.captured)navigator.userAgent.match(/android/gi)&&e.preventDefault();else{var t=e.touches[0].clientX,n=e.touches[0].clientY;if(2===e.touches.length&&2===en.startCount&&Wt.overview){var r=v({x:e.touches[1].clientX,y:e.touches[1].clientY},{x:en.startX,y:en.startY});Math.abs(en.startSpan-r)>en.threshold&&(en.captured=!0,r<en.startSpan?N():D()),e.preventDefault()}else if(1===e.touches.length&&2!==en.startCount){var a=t-en.startX,o=n-en.startY;a>en.threshold&&Math.abs(a)>Math.abs(o)?(en.captured=!0,it()):a<-en.threshold&&Math.abs(a)>Math.abs(o)?(en.captured=!0,st()):o>en.threshold?(en.captured=!0,ct()):o<-en.threshold&&(en.captured=!0,lt()),Wt.embedded?(en.captured||I(Rt))&&e.preventDefault():e.preventDefault()}}}function gt(){en.captured=!1}function mt(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],vt(e))}function ht(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],pt(e))}function yt(e){e.pointerType===e.MSPOINTER_TYPE_TOUCH&&(e.touches=[{clientX:e.clientX,clientY:e.clientY}],gt(e))}function bt(e){if(Date.now()-Kt>600){Kt=Date.now();var t=e.detail||-e.wheelDelta;t>0?ut():dt()}}function wt(e){e.preventDefault();var t=f(document.querySelectorAll(jt)).length,n=Math.floor(e.clientX/Bt.wrapper.offsetWidth*t);W(n)}function Lt(e){e.preventDefault(),it()}function kt(e){e.preventDefault(),st()}function Et(e){e.preventDefault(),ct()}function St(e){e.preventDefault(),lt()}function At(e){e.preventDefault(),dt()}function xt(e){e.preventDefault(),ut()}function qt(){J()}function Tt(){T()}function Mt(e){if(Jt&&P()){e.preventDefault();for(var t=e.target;t&&!t.nodeName.match(/section/gi);)t=t.parentNode;if(t&&!t.classList.contains("disabled")&&(D(),t.nodeName.match(/section/gi))){var n=parseInt(t.getAttribute("data-index-h"),10),r=parseInt(t.getAttribute("data-index-v"),10);W(n,r)}}}function $t(e){var t=e.target.getAttribute("href");t&&(A(t),e.preventDefault())}var Ct,Nt,Dt,Rt,Pt,It,Ht,Yt=".reveal .slides section",jt=".reveal .slides>section",Ot=".reveal .slides>section.present>section",Ut=".reveal .slides>section:first-child",Wt={width:960,height:700,margin:.1,minScale:.2,maxScale:1,controls:!0,progress:!0,history:!1,keyboard:!0,overview:!0,center:!0,touch:!0,loop:!1,rtl:!1,fragments:!0,embedded:!1,autoSlide:0,mouseWheel:!1,rollingLinks:!1,hideAddressBar:!0,previewLinks:!1,theme:null,transition:"default",transitionSpeed:"default",backgroundTransition:"default",viewDistance:3,dependencies:[]},Xt=!1,zt=0,_t=[],Ft=1,Bt={},Kt=0,Vt=0,Zt=0,Gt=0,Qt=0,Jt=!1,en={startX:0,startY:0,startSpan:0,startCount:0,captured:!1,threshold:40};return{initialize:e,configure:c,sync:X,slide:W,left:it,right:st,up:ct,down:lt,prev:dt,next:ut,prevFragment:rt,nextFragment:nt,navigateTo:W,navigateLeft:it,navigateRight:st,navigateUp:ct,navigateDown:lt,navigatePrev:dt,navigateNext:ut,layout:T,availableRoutes:V,availableFragments:Z,toggleOverview:R,togglePause:O,isOverview:P,isPaused:U,addEventListeners:l,removeEventListeners:d,getIndices:tt,getSlide:function(e,t){var n=document.querySelectorAll(jt)[e],r=n&&n.querySelectorAll("section");return"undefined"!=typeof t?r?r[t]:void 0:n},getPreviousSlide:function(){return Dt},getCurrentSlide:function(){return Rt},getScale:function(){return Ft},getConfig:function(){return Wt},getQueryHash:function(){var e={};return location.search.replace(/[A-Z0-9]+?=(\w*)/gi,function(t){e[t.split("=").shift()]=t.split("=").pop()}),e},isFirstSlide:function(){return null==document.querySelector(Yt+".past")?!0:!1},isLastSlide:function(){return Rt?Rt.nextElementSibling?!1:I(Rt)&&Rt.parentNode.nextElementSibling?!1:!0:!1},isReady:function(){return Xt},addEventListener:function(e,t,n){"addEventListener"in window&&(Bt.wrapper||document.querySelector(".reveal")).addEventListener(e,t,n)},removeEventListener:function(e,t,n){"addEventListener"in window&&(Bt.wrapper||document.querySelector(".reveal")).removeEventListener(e,t,n)}}}();Reveal.initialize({controls:!1,progress:!1,history:!0,transition:"fade",transitionSpeed:"default",backgroundTransition:"default"});var handler=StripeCheckout.configure({key:$("#stripe_key").data("key"),image:"/assets/square-image.png",token:function(e){$("#payment_token").val(e.id),maskLoad(),$(".destination").submit()}});$(".next").click(function(){Reveal.right(),paginate()}),$(".prev").click(function(){Reveal.left(),paginate()}),$(".next-page").click(function(){Reveal.down(),paginate()}),$(".previous-page").click(function(){Reveal.up(),paginate()}),paginate(),Reveal.addEventListener("slidechanged",function(){paginate()}),$(".card").click(function(e){$(".card").removeClass("selected"),$(e.currentTarget).addClass("selected"),$(".photo-chosen").val($(e.currentTarget).attr("src")),$("textarea.message").focus(),Reveal.slide(2,0,0)}),$(".where").click(function(){""==$(".message").val()?js_flash("You should write a message before you continue!"):($(".final-message").val($(".message").val()),Reveal.next())}),setTimeout(function(){$(".flash.notice").slideUp()},5e3),$(".flash").click(function(){$(".flash").slideUp()}),$(".purchase").click(function(e){e.preventDefault(),allOptionsComplete()&&(amount="US"==$("#country").val()?200:300,handler.open({name:"postperfect.co",description:"1 postcard",amount:amount,email:$("#email").val()}))}),function(e,t,n,r,a,o,i){e.GoogleAnalyticsObject=a,e[a]=e[a]||function(){(e[a].q=e[a].q||[]).push(arguments)},e[a].l=1*new Date,o=t.createElement(n),i=t.getElementsByTagName(n)[0],o.async=1,o.src=r,i.parentNode.insertBefore(o,i)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-45980938-1","postperfect.co"),ga("send","pageview"),$(document).ready(function(){$(".fancybox").fancybox({maxWidth:800,maxHeight:150,fitToView:!1,width:"70%",height:"70%",autoSize:!1,closeClick:!1,openEffect:"none",closeEffect:"none"}),"Your postcard was created successfully. It should arrive in a few days!"==$(".flash").text()&&$(".fancybox").trigger("click")});