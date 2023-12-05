"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[8466],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=o.createContext({}),u=function(e){var t=o.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=u(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(r),y=n,m=p["".concat(s,".").concat(y)]||p[y]||d[y]||i;return r?o.createElement(m,a(a({ref:t},c),{},{components:r})):o.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=y;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,a[1]=l;for(var u=2;u<i;u++)a[u]=r[u];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}y.displayName="MDXCreateElement"},85944:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var o=r(87462),n=(r(67294),r(3905));const i={},a="Security and responsible disclosure",l={unversionedId:"manual/security",id:"manual/security",title:"Security and responsible disclosure",description:"We consider the security of our systems, and all data controlled by those",source:"@site/deploy/manual/security.md",sourceDirName:"manual",slug:"/manual/security",permalink:"/deno-docs/deploy/manual/security",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"Deno Privacy Policy",permalink:"/deno-docs/deploy/manual/privacy-policy"}},s={},u=[{value:"Reporting a vulnerability",id:"reporting-a-vulnerability",level:2},{value:"Please do the following:",id:"please-do-the-following",level:2},{value:"Our commitment",id:"our-commitment",level:2}],c={toc:u},p="wrapper";function d(e){let{components:t,...r}=e;return(0,n.kt)(p,(0,o.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"security-and-responsible-disclosure"},"Security and responsible disclosure"),(0,n.kt)("p",null,"We consider the security of our systems, and all data controlled by those\nsystems a top priority. No matter how much effort we put into system security,\nit is still possible that security vulnerabilities are present. We appreciate\ninvestigative work into system security carried out by well-intentioned, ethical\nsecurity researchers. If you discover a vulnerability, however small, we would\nlike to know about it so we can address it with appropriate measures, as quickly\nas possible. This page outlines the method we use to work with the security\nresearch community to address our system security."),(0,n.kt)("h2",{id:"reporting-a-vulnerability"},"Reporting a vulnerability"),(0,n.kt)("p",null,"Please email you findings to ",(0,n.kt)("a",{parentName:"p",href:"mailto:security@deno.com."},"security@deno.com.")," We strive to resolve all\nproblems as quickly as possible, and are more than happy to play an active role\nin publication of writeups after the problem is resolved."),(0,n.kt)("h2",{id:"please-do-the-following"},"Please do the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Do not take advantage of the vulnerability or problem you have discovered. For\nexample only download data that is necessary to demonstrate the\nvulnerability - do not download any more. Also do not delete, modify, or view\nother people's data."),(0,n.kt)("li",{parentName:"ul"},"Do not publish or reveal the problem until it has been resolved."),(0,n.kt)("li",{parentName:"ul"},"Do not use attacks on physical security, social engineering, distributed\ndenial of service, spam or applications of third parties."),(0,n.kt)("li",{parentName:"ul"},"Do provide sufficient information to reproduce the problem, so we will be able\nto resolve it as quickly as possible. Usually, the IP address or the URL of\nthe affected system and a description of the vulnerability will be sufficient,\nbut complex vulnerabilities may require further explanation.")),(0,n.kt)("h2",{id:"our-commitment"},"Our commitment"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"If you act in accordance with this policy, we will not take legal action\nagainst you in regard to your report."),(0,n.kt)("li",{parentName:"ul"},"We will handle your report with strict confidentiality, and not pass on your\npersonal details to third parties without your permission.")))}d.isMDXComponent=!0}}]);