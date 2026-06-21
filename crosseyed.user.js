// ==UserScript==
// @name         Crosseyed
// @namespace    crosseyed
// @version      2026.06.21.094358
// @commit       c6a505d
// @description  NYT Crossword enhancements
// @author       Tim Martin
// @releaseURL   https://github.com/t-mart/crosseyed/releases/tag/2026.06.21.094358
// @homepageURL  https://github.com/t-mart/crosseyed
// @supportURL   https://github.com/t-mart/crosseyed/issues
// @license      MIT
// @match        https://www.nytimes.com/crosswords*
// @run-at       document-idle
// @grant        none
// ==/UserScript==

(function(){try{if(typeof document<`u`){var e=document.createElement(`style`);e.appendChild(document.createTextNode(`body.crosseyed-ready .pz-header{position:static}body.crosseyed-ready #pz-game-root main{flex-direction:column;height:100vh;display:flex}body.crosseyed-ready .xwd__layout_container{flex:1;min-height:0}body.crosseyed-ready .xwd__layout_container>*{height:100%;min-height:0}body.crosseyed-ready .xwd__layout_puzzle--desktop{box-sizing:border-box;justify-content:space-between;gap:24px;width:100%;max-width:none;height:100%;max-height:none;margin:0}body.crosseyed-ready .xwd__layout_puzzle--desktop>*{width:auto;height:100%}body.crosseyed-ready .xwd__layout_clueBarAndBoard{flex:60%;min-width:0}body.crosseyed-ready .xwd__layout--cluelists{flex:40%;height:100%;min-height:0;max-height:none;overflow:hidden}body.crosseyed-ready .xwd__clue-list--wrapper{flex-direction:column;width:calc(50% - 1px);min-height:0;padding-left:1px;font-size:2em;display:flex}body.crosseyed-ready .xwd__clue--li{align-items:baseline;column-gap:.5ch}body.crosseyed-ready .xwd__clue--li .xwd__clue--label{flex:none;width:3ch;min-width:0;margin-inline:0;font-size:.75em}body.crosseyed-ready .xwd__clue--li .xwd__clue--text{margin-inline:0}body.crosseyed-ready .xwd__clue-bar-desktop--bar{font-size:2em}body.crosseyed-ready .xwd__clue-list--list{outline:1px solid #a8a8a8;flex:1;height:auto;min-height:0;overflow-y:auto}body.crosseyed-ready .xwd__clue-bar-desktop--number{margin-inline:2rem}html:has(body.crosseyed-ready){scroll-padding-top:0}.crosseyed-tool{width:auto}.crosseyed-tool button{white-space:nowrap;padding:0 12px}.crosseyed-tool button svg{width:20px;height:20px;margin:0 auto;display:block}body.crosseyed-ready .xwd__toolbar--tools button{font-size:1.5em}body.crosseyed-ready .xwd__toolbar--wrapper{max-width:none}.crosseyed-version-badge{white-space:nowrap;align-self:center;margin-left:auto;padding:0 12px;font-size:.75rem}a.customNavLink,a.customNavLink:hover{background:0 0}a.customNavLink{flex:none;width:fit-content;max-width:100%}a.customNavLink>div{text-decoration:underline;text-decoration-thickness:1px}a.customNavLink:hover>div{text-decoration-thickness:3px}button.customNavLink{cursor:pointer}button.customNavLink .pz-icon-arrow-up,button.customNavLink .pz-icon-arrow-down{background-position:50%;background-size:100%}button.customNavLink .pz-icon-arrow-up{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m18 15-6-6-6 6'/%3E%3C/svg%3E")}button.customNavLink .pz-icon-arrow-down{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23000' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")}button.customNavLink:hover .pz-icon{background-color:#00000014;border-radius:50%}body.crosseyed-ready{--cell-shaded:oklch(82.7% .119 306.383);--cell-highlighted:oklch(80.9% .105 251.813);--cell-selected:oklch(87.9% .169 91.605);--cell-related:oklch(89.7% .196 126.665)}body.crosseyed-ready .xwd__cell--shaded{fill:var(--cell-shaded)}body.crosseyed-ready .xwd__cell--highlighted{fill:var(--cell-highlighted)}body.crosseyed-ready .xwd__cell--highlighted.xwd__cell--shaded{fill:color-mix(in oklab, var(--cell-highlighted) 45%, var(--cell-shaded))}body.crosseyed-ready .xwd__cell--selected{fill:var(--cell-selected)}body.crosseyed-ready .xwd__cell--selected.xwd__cell--shaded{fill:color-mix(in oklab, var(--cell-selected) 75%, var(--cell-shaded))}body.crosseyed-ready .xwd__cell--related{fill:var(--cell-related)}body.crosseyed-ready .xwd__cell--related.xwd__cell--highlighted{fill:color-mix(in oklab, var(--cell-related) 60%, var(--cell-highlighted))}body.crosseyed-ready .xwd__cell--related.xwd__cell--shaded{fill:color-mix(in oklab, var(--cell-related) 60%, var(--cell-shaded))}body.crosseyed-ready .xwd__cell--related.xwd__cell--highlighted.xwd__cell--selected{fill:color-mix(in oklab, var(--cell-selected) 75%, var(--cell-related))}/*$vite$:1*/`)),document.head.appendChild(e)}}catch(e){console.error(`vite-plugin-css-injected-by-js`,e)}})();
(function(){var e=`ABCDEFGHIJKLMNOPQRSTUVWXYZ`,t=`.xwd__cell--selected`,n=`main.xwd__franklin`,r=80,i=!1;function a(e){return new Promise(t=>setTimeout(t,e))}function o(e,t){let n=e.getBoundingClientRect(),r={bubbles:!0,cancelable:!0,view:window,clientX:n.left+n.width/2,clientY:n.top+n.height/2},i=t.startsWith(`pointer`)?new PointerEvent(t,r):new MouseEvent(t,r);e.dispatchEvent(i)}function s(e){o(e,`click`)}function c(e,t){let n=t.toLowerCase(),r=n.codePointAt(0)??0;for(let i of[`keydown`,`keypress`,`keyup`]){let a=new KeyboardEvent(i,{key:n,code:`Key${t}`,bubbles:!0,cancelable:!0});Object.defineProperties(a,{keyCode:{get:()=>r},which:{get:()=>r},charCode:{get:()=>r}}),e.dispatchEvent(a)}}async function l(){if(i)return;let o=document.querySelector(t)?.parentElement,l=document.querySelector(n);if(!(!o||!l)){i=!0;try{for(let t of e)c(l,t),await a(r),s(o),await a(r)}finally{i=!1}}}var u={className:`crosseyed-spam-button`,run:()=>void l(),view:()=>({label:`Spam`})},d=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-gallery-vertical-icon lucide-gallery-vertical">
  <path d="M3 2h18"/>
  <rect width="18" height="12" x="3" y="6" rx="2"/>
  <path d="M3 22h18"/>
</svg>`,f=`#pz-game-root`;function p(){document.querySelector(f)?.scrollIntoView({behavior:`smooth`,block:`start`})}var m={className:`crosseyed-scroll-button`,run:p,view:()=>({label:`Scroll Into View`,icon:d})};function h(e,t){t();let n=new MutationObserver(t);return n.observe(e,{subtree:!0,childList:!0}),()=>n.disconnect()}function g(e,t){if(document.querySelector(e)){t();return}let n=new MutationObserver(()=>{document.querySelector(e)&&(n.disconnect(),t())});n.observe(document.body,{subtree:!0,childList:!0})}function _(e){let{storageKey:t,rootSelector:n,buttonSelector:r}=e,i,a,o=()=>localStorage.getItem(t)===`true`;function s(){let e=document.querySelectorAll(r);for(let t of e)if(t.offsetParent!==null)return t}function c(){let e=s();!e||e===i||(i=e,e.click())}function l(){a?.(),a=void 0,o()&&(a=h(document.querySelector(n)??document.body,c))}return{isEnabled:o,setEnabled:e=>{localStorage.setItem(t,String(e)),l()},start:l}}var v=_({storageKey:`crosseyed-auto-play`,rootSelector:`#pz-game-root`,buttonSelector:`.pz-moment__button-wrapper button`}),y=_({storageKey:`crosseyed-auto-resume`,rootSelector:`#portal-game-modals`,buttonSelector:`.pause-modal .xwd__modal--button-container button`}),b=`#portal-game-modals`,x=`#settings-panel`,S=`.xwd__settings-modal--column`,C=`crosseyed-settings-section`,w=[{name:`crosseyedAutoPlay`,label:`Auto play (skip the start screen)`,clicker:v},{name:`crosseyedAutoResume`,label:`Auto resume (skip the pause screen)`,clicker:y}];function T(e){let t=document.createElement(`label`),n=document.createElement(`input`);n.type=`checkbox`,n.name=e.name,n.checked=e.clicker.isEnabled(),n.addEventListener(`change`,()=>e.clicker.setEnabled(n.checked));let r=document.createElement(`span`);return r.textContent=e.label,t.append(n,r),t}function E(){let e=document.createElement(`section`);e.className=`xwd__settings-modal--section ${C}`;let t=document.createElement(`header`);t.className=`xwd__settings-modal--heading`,t.textContent=`Crosseyed`;let n=document.createElement(`div`);n.className=`xwd__settings-modal--inset`;for(let e of w)n.append(T(e));return e.append(t,n),e}function D(){let e=document.querySelector(x);if(!e||e.querySelector(`.${C}`))return;let t=[...e.querySelectorAll(S)];(t.length>0?t.at(-1):e).append(E())}function O(){h(document.querySelector(b)??document.body,D)}var k=`<!-- @license lucide-static v1.21.0 - ISC -->
<svg
  class="lucide lucide-expand"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 15 6 6" />
  <path d="m15 9 6-6" />
  <path d="M21 16v5h-5" />
  <path d="M21 8V3h-5" />
  <path d="M3 16v5h5" />
  <path d="m3 21 6-6" />
  <path d="M3 8V3h5" />
  <path d="M9 9 3 3" />
</svg>
`,A=`<!-- @license lucide-static v1.21.0 - ISC -->
<svg
  class="lucide lucide-shrink"
  xmlns="http://www.w3.org/2000/svg"
  width="24"
  height="24"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="2"
  stroke-linecap="round"
  stroke-linejoin="round"
>
  <path d="m15 15 6 6m-6-6v4.8m0-4.8h4.8" />
  <path d="M9 19.8V15m0 0H4.2M9 15l-6 6" />
  <path d="M15 4.2V9m0 0h4.8M15 9l6-6" />
  <path d="M9 4.2V9m0 0H4.2M9 9 3 3" />
</svg>
`;function j(e,t){e.setAttribute(`aria-label`,t.label),t.icon?(e.title=t.label,e.innerHTML=t.icon):e.textContent=t.label}function M(e){let t=e.view(),n=document.createElement(`li`);n.className=`xwd__tool--button${t.icon?``:` xwd__tool--texty`} crosseyed-tool ${e.className}`;let r=document.createElement(`button`);return r.type=`button`,j(r,t),r.addEventListener(`click`,e.run),n.append(r),n}function N(e){let t=document.querySelector(`.${e.className} > button`);t&&j(t,e.view())}var P=()=>document.fullscreenElement!==null;async function F(){try{P()?await document.exitFullscreen():await document.documentElement.requestFullscreen()}catch{}}function I(){F()}var L={className:`crosseyed-fullscreen-button`,run:I,view:()=>P()?{label:`Exit fullscreen`,icon:A}:{label:`Enter fullscreen`,icon:k}};function R(){document.addEventListener(`fullscreenchange`,()=>N(L))}var z={daily:``,midi:`midi/`,mini:`mini/`},ee=/\/crosswords\/game\/([a-z]+)\/(\d{4})\/(\d{2})\/(\d{2})/;function B(e){let t=ee.exec(e);if(!t)return;let[,n,r,i,a]=t,o=z[n];if(o!==void 0)return`https://xwstats.com/puzzles/${o}${r}-${i}-${a}`}function V(){let e=B(location.pathname);open(e??`https://xwstats.com`,`_blank`,`noopener`)}var H={className:`crosseyed-xwstats-button`,run:V,view:()=>({label:`XWStats`})},U=`#js-global-nav`,W=`crosseyed-version-badge`;function G(){let e=globalThis.GM_info?.script?.version;return e?`v${e}`:`development build`}function K(e){if(e.querySelector(`.${W}`))return;let t=document.createElement(`span`);t.className=W,t.textContent=`crosseyed (${G()})`,e.append(t)}function q(){g(U,()=>{let e=document.querySelector(U);e&&h(e,()=>K(e))})}var J=`crosseyed-ready`,Y=`.xwd__toolbar--wrapper`,X=`.xwd__toolbar--tools`,Z=`.xwd__toolbar--expandedMenu`,Q=[u,H,m,L];function $(){let e=document.querySelector(X);if(!e)return;let t=document.querySelector(Z)??e;for(let n of Q)e.querySelector(`.${n.className}`)||t.append(M(n))}function te(){document.body.classList.add(J),p();let e=document.querySelector(Y);e&&h(e,$)}var ne=[v.start,y.start,O,R,q];for(let e of ne)e();g(X,te)})();