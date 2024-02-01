"use strict";(globalThis.webpackChunk=globalThis.webpackChunk||[]).push([["ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92"],{34232:(e,t,r)=>{r.d(t,{n:()=>o});var a=r(85893),n=r(67294),s=r(87487);function o({children:e,appName:t,category:r,metadata:o}){let i=(0,n.useMemo)(()=>({appName:t,category:r,metadata:o}),[t,r,o]);return(0,a.jsx)(s.f.Provider,{value:i,children:e})}try{o.displayName||(o.displayName="AnalyticsProvider")}catch{}},87487:(e,t,r)=>{r.d(t,{f:()=>n});var a=r(67294);let n=(0,a.createContext)(null)},65722:(e,t,r)=>{r.d(t,{Z:()=>a});let a=()=>void 0},45055:(e,t,r)=>{r.d(t,{I:()=>n});var a=r(67294);let n=(0,a.createContext)(null)},59112:(e,t,r)=>{r.d(t,{l:()=>n});var a=r(12599);function n(e={}){let t;let r=(0,a.lX)({...e,v5Compat:!0}),n=[],s=!1;function o(e){if(n.length>0)for(let t of n)t({retry(){e()}});else e()}return r.listen(e=>{if(s){s=!1;return}if(e.action===a.aU.Pop&&n.length&&null!==e.delta&&n.length>0){let t=e.delta;for(let e of(s=!0,r.go(-1*t),n))e({retry(){r.go(t)}})}else t?.(e)}),{get action(){return r.action},get location(){return r.location},createHref:e=>r.createHref(e),createURL:e=>r.createURL(e),encodeLocation:e=>r.encodeLocation(e),push(e,t){o(()=>r.push(e,t))},replace(e,t){o(()=>r.replace(e,t))},go(e){o(()=>r.go(e))},listen(e){if(t)throw Error("A history only accepts one active listener");return t=e,()=>{t=void 0}},block:e=>(n.push(e),()=>{n=n.filter(t=>t!==e)})}}},96843:(e,t,r)=>{r.d(t,{e:()=>DeferredRegistry});let DeferredRegistry=class DeferredRegistry{register(e,t){let r=this.registrationEntries[e];r?r.resolve?.(t):this.registrationEntries[e]={promise:Promise.resolve(t)}}getRegistration(e){var t;return(t=this.registrationEntries)[e]||(t[e]=new a),this.registrationEntries[e].promise}constructor(){this.registrationEntries={}}};let a=class Deferred{constructor(){this.promise=new Promise(e=>{this.resolve=e})}}},51145:(e,t,r)=>{r.d(t,{Z:()=>l});var a=r(44544);let{getItem:n,setItem:s,removeItem:o}=(0,a.Z)("localStorage"),i="REACT_PROFILING_ENABLED",l={enable:()=>s(i,"true"),disable:()=>o(i),isEnabled:()=>!!n(i)}},78249:(e,t,r)=>{r.d(t,{g:()=>s});var a=r(67294),n=r(86283);function s(e,t){n.Qg&&(0,a.useLayoutEffect)(e,t)}},37169:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(78249),n=r(67294);function s(){let e=(0,n.useRef)(!1),t=(0,n.useCallback)(()=>e.current,[]);return(0,a.g)(()=>(e.current=!0,()=>{e.current=!1}),[]),t}},77427:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(37169),n=r(67294);let s=function(e){let t=(0,a.Z)(),[r,s]=(0,n.useState)(e),o=(0,n.useCallback)(e=>{t()&&s(e)},[t]);return[r,o]}},58989:(e,t,r)=>{r.d(t,{i:()=>o});var a=r(85893),n=r(67294),s=r(45055);function o({routes:e,history:t,children:r}){let o=(0,n.useMemo)(()=>({routes:e,history:t}),[e,t]);return(0,a.jsx)(s.I.Provider,{value:o,children:r})}try{o.displayName||(o.displayName="AppContextProvider")}catch{}},1343:(e,t,r)=>{let a;r.d(t,{R:()=>p});var n=r(85893),s=r(98224),o=r(8386),i=r(67294);let l=globalThis.document;function c(e){let t=e.colorMode;return{colorMode:function(e){switch(e){case"light":return"day";case"dark":return"night";default:return"auto"}}(t),dayScheme:e.lightTheme,nightScheme:e.darkTheme}}let d=l?function(){let{documentElement:e}=l,[t,r]=(0,i.useState)(()=>c(e.dataset));return(0,i.useEffect)(()=>{let t=new MutationObserver(()=>r(c(e.dataset)));return t.observe(e,{attributes:!0,attributeFilter:["data-color-mode","data-light-theme","data-dark-theme"]}),()=>t.disconnect()},[e]),t}:function(){return c(a||{})};var u=r(64479),h=r(34232);let m={};function p({appName:e,children:t,wasServerRendered:r}){let{colorMode:a,dayScheme:i,nightScheme:l}=d();return(0,n.jsx)(s.DJ,{wasServerRendered:r,children:(0,n.jsx)(h.n,{appName:e,category:"",metadata:m,children:(0,n.jsx)(o.ZP,{colorMode:a,dayScheme:i,nightScheme:l,preventSSRMismatch:!0,children:(0,n.jsx)(u.sS,{children:t})})})})}try{p.displayName||(p.displayName="BaseProviders")}catch{}},33011:(e,t,r)=>{r.d(t,{P:()=>p});var a=r(85893),n=r(67294),s=r(64479),o=r(85529),i=r(70697),l=r(41905);let c={info:"",success:"Toast--success",error:"Toast--error"},d={info:(0,a.jsx)(o.InfoIcon,{}),success:(0,a.jsx)(o.CheckIcon,{}),error:(0,a.jsx)(o.StopIcon,{})},u=({message:e,timeToLive:t,icon:r,type:s="info",role:o="log"})=>{let[u,h]=n.useState(!0),{safeSetTimeout:m}=(0,i.Z)();return(0,n.useEffect)(()=>{t&&m(()=>h(!1),t-300)},[m,t]),(0,a.jsx)(l.h,{children:(0,a.jsx)("div",{className:"p-1 position-fixed bottom-0 left-0 mb-3 ml-3",children:(0,a.jsxs)("div",{className:`Toast ${c[s]} ${u?"Toast--animateIn":"Toast--animateOut"}`,id:"ui-app-toast","data-testid":`ui-app-toast-${s}`,role:o,children:[(0,a.jsx)("span",{className:"Toast-icon",children:r||d[s]}),(0,a.jsx)("span",{className:"Toast-content",children:e})]})})})};try{u.displayName||(u.displayName="Toast")}catch{}function h(){let{toasts:e,persistedToast:t}=(0,n.useContext)(s.Ww);return(0,a.jsxs)(a.Fragment,{children:[e.map((e,t)=>(0,a.jsx)(u,{message:e.message,icon:e.icon,timeToLive:s.hw,type:e.type,role:e.role},t)),t&&(0,a.jsx)(u,{message:t.message,icon:t.icon,type:t.type,role:t.role})]})}try{h.displayName||(h.displayName="Toasts")}catch{}function m(){let{addToast:e}=(0,s.V6)();return(0,n.useEffect)(()=>{e({type:"error",message:"SSR failed, see console for error details"})},[]),null}try{m.displayName||(m.displayName="SSRErrorToast")}catch{}function p({ssrError:e}){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(h,{}),e&&(0,a.jsx)(m,{})]})}try{p.displayName||(p.displayName="CommonElements")}catch{}},88003:(e,t,r)=>{r.d(t,{S:()=>ReactBaseElement});var a=r(85893),n=r(76006),s=r(20745),o=r(67294),i=r(51145);function l(e,t,r,a){var n,s=arguments.length,o=s<3?t:null===a?a=Object.getOwnPropertyDescriptor(t,r):a;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)o=Reflect.decorate(e,t,r,a);else for(var i=e.length-1;i>=0;i--)(n=e[i])&&(o=(s<3?n(o):s>3?n(t,r,o):n(t,r))||o);return s>3&&o&&Object.defineProperty(t,r,o),o}let ReactBaseElement=class ReactBaseElement extends HTMLElement{get name(){return this.getAttribute(this.nameAttribute)}get embeddedDataText(){let e=this.embeddedData?.textContent;if(!e)throw Error(`No embedded data provided for react element ${this.name}`);return e}get hasSSRContent(){return"true"===this.getAttribute("data-ssr")}connectedCallback(){this.renderReact()}disconnectedCallback(){this.root?.unmount(),this.root=void 0}async renderReact(){let e={createRoot:s.s,hydrateRoot:s.a};i.Z.isEnabled()&&(e=await this.getReactDomWithProfiling());let t=JSON.parse(this.embeddedDataText),r=this.ssrError?.textContent,n=await this.getReactNode(t),l=(0,a.jsx)(o.StrictMode,{children:n});if(r&&this.logSSRError(r),this.hasSSRContent){let t=this.querySelector('style[data-styled="true"]');t&&document.head.appendChild(t),this.root=e.hydrateRoot(this.reactRoot,l,{onRecoverableError:()=>{}}),t&&requestIdleCallback(()=>{t.parentElement?.removeChild(t)})}else this.root=e.createRoot(this.reactRoot),this.root.render(l);this.classList.add("loaded")}getReactDomWithProfiling(){return r.e("react-profiling").then(r.t.bind(r,62518,19))}logSSRError(e){let t=JSON.parse(e),r=function(e){if(!e.stacktrace)return"";let t="\n ",r=e.stacktrace.map(e=>{let{function:r,filename:a,lineno:n,colno:s}=e,o=`${t} at ${r} (${a}:${n}:${s})`;return t=" ",o});return r.join("\n")}(t);console.error("Error During Alloy SSR:",`${t.type}: ${t.value}
`,t,r)}};l([n.fA],ReactBaseElement.prototype,"embeddedData",void 0),l([n.fA],ReactBaseElement.prototype,"ssrError",void 0),l([n.fA],ReactBaseElement.prototype,"reactRoot",void 0)},98224:(e,t,r)=>{r.d(t,{DJ:()=>c,i$:()=>a,kb:()=>l});var a,n=r(85893),s=r(67294),o=r(86283),i=r(78249);!function(e){e.ServerRender="ServerRender",e.ClientHydrate="ClientHydrate",e.ClientRender="ClientRender"}(a||(a={}));let l=(0,s.createContext)("ClientRender");function c({wasServerRendered:e,children:t}){let[r,a]=(0,s.useState)(()=>o.W6?"ServerRender":e?"ClientHydrate":"ClientRender");return(0,i.g)(()=>{"ClientRender"!==r&&a("ClientRender")},[r]),(0,n.jsx)(l.Provider,{value:r,children:t})}try{l.displayName||(l.displayName="RenderPhaseContext")}catch{}try{c.displayName||(c.displayName="RenderPhaseProvider")}catch{}},64479:(e,t,r)=>{r.d(t,{V6:()=>h,Ww:()=>d,hw:()=>l,sS:()=>u});var a=r(85893),n=r(70697),s=r(67294),o=r(65722),i=r(77427);let l=5e3,c=(0,s.createContext)({addToast:o.Z,addPersistedToast:o.Z,clearPersistedToast:o.Z}),d=(0,s.createContext)({toasts:[],persistedToast:null});function u({children:e}){let[t,r]=(0,i.Z)([]),[o,u]=(0,s.useState)(null),{safeSetTimeout:h}=(0,n.Z)(),m=(0,s.useCallback)(function(e){r([...t,e]),h(()=>r(t.slice(1)),l)},[t,h,r]),p=(0,s.useCallback)(function(e){u(e)},[u]),f=(0,s.useCallback)(function(){u(null)},[u]),y=(0,s.useMemo)(()=>({addToast:m,addPersistedToast:p,clearPersistedToast:f}),[p,m,f]),g=(0,s.useMemo)(()=>({toasts:t,persistedToast:o}),[t,o]);return(0,a.jsx)(c.Provider,{value:y,children:(0,a.jsx)(d.Provider,{value:g,children:e})})}function h(){return(0,s.useContext)(c)}try{c.displayName||(c.displayName="ToastContext")}catch{}try{d.displayName||(d.displayName="InternalToastsContext")}catch{}try{u.displayName||(u.displayName="ToastContextProvider")}catch{}}}]);
//# sourceMappingURL=ui_packages_react-core_create-browser-history_ts-ui_packages_react-core_deferred-registry_ts--ebbb92-1fb94a936b3a.js.map