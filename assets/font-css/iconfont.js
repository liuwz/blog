(function(window){var svgSprite='<svg><symbol id="icon-del" viewBox="0 0 1024 1024"><path d="M704 128c-8.384-49.536-50.56-64-92.8-64L407.872 64C365.632 64 328.448 78.464 320 128l0 64 384 0L704 128z"  ></path><path d="M204.8 412.416l0 473.216C204.8 934.144 228.288 960 281.6 960l460.8 0c53.376 0 76.8-25.856 76.8-74.368L819.2 412.416c53.952 0 76.8-29.76 76.8-78.208C896 285.696 872.512 256 819.2 256L550.4 256 204.8 256C151.488 256 128 285.696 128 334.208 128 382.656 151.488 412.416 204.8 412.416zM576 387.968C576 386.496 576.576 385.408 576.704 384l62.656 0C639.488 385.408 640 386.496 640 387.968l0 414.464c0 39.424-64 39.424-64 0L576 387.968zM384 387.968C384 386.496 384.448 385.408 384.64 384l59.136 0c0.128 1.408 0.704 2.496 0.704 3.968l0 414.464c0 39.424-60.48 39.424-60.48 0L384 387.968z"  ></path></symbol><symbol id="icon-list" viewBox="0 0 1024 1024"><path d="M157.538462 206.769231C157.538462 191.015385 143.753846 177.230769 128 177.230769h-59.076923C53.169231 177.230769 39.384615 191.015385 39.384615 206.769231v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538461h59.076923c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076923z m827.076923 0c0-15.753846-13.784615-29.538462-29.538462-29.538462h-689.230769c-15.753846 0-29.538462 13.784615-29.538462 29.538462v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538461h689.230769c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076923z m-827.076923 275.692307c0-15.753846-13.784615-29.538462-29.538462-29.538461h-59.076923c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538462 29.538461h59.076923c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076924z m748.307692 0c0-15.753846-13.784615-29.538462-29.538462-29.538461h-610.461538c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076924c0 15.753846 13.784615 29.538462 29.538462 29.538461h610.461538c15.753846 0 29.538462-13.784615 29.538462-29.538461v-59.076924z m-748.307692 275.692308c0-15.753846-13.784615-29.538462-29.538462-29.538461h-59.076923c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538462h59.076923c15.753846 0 29.538462-13.784615 29.538462-29.538462v-59.076923z m827.076923 0c0-15.753846-13.784615-29.538462-29.538462-29.538461h-689.230769c-15.753846 0-29.538462 13.784615-29.538462 29.538461v59.076923c0 15.753846 13.784615 29.538462 29.538462 29.538462h689.230769c15.753846 0 29.538462-13.784615 29.538462-29.538462v-59.076923z"  ></path></symbol><symbol id="icon-hone" viewBox="0 0 1024 1024"><path d="M909.37344 480.8704a40.93952 40.93952 0 0 1-56.44288 13.04576L512 281.00608l-340.93056 212.91008a40.93952 40.93952 0 1 1-43.39712-69.48864l362.63936-226.46784a40.96 40.96 0 0 1 43.39712 0l362.63936 226.46784a40.98048 40.98048 0 0 1 13.02528 56.44288z m-131.91168 22.05696l-243.75296-152.22784a40.96 40.96 0 0 0-43.39712 0l-243.75296 152.22784a40.91904 40.91904 0 0 0-19.2512 34.73408V791.28576a40.96 40.96 0 0 0 40.96 40.96h134.51264a40.96 40.96 0 0 0 40.96-40.96V675.84c0-37.64224 30.63808-68.25984 68.28032-68.25984s68.28032 30.63808 68.28032 68.25984v115.42528a40.96 40.96 0 0 0 40.96 40.96h134.51264a40.96 40.96 0 0 0 40.96-40.96V537.66144a41.00096 41.00096 0 0 0-19.27168-34.73408z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)