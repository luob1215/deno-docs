"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[1099],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>y});var o=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),d=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=d(e.components);return o.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),s=d(n),u=r,y=s["".concat(p,".").concat(u)]||s[u]||m[u]||a;return n?o.createElement(y,i(i({ref:t},c),{},{components:n})):o.createElement(y,i({ref:t},c))}));function y(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:r,i[1]=l;for(var d=2;d<a;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},33625:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var o=n(87462),r=(n(67294),n(3905));const a={},i="Deployments",l={unversionedId:"manual/deployments",id:"manual/deployments",title:"Deployments",description:"A deployment is a snapshot of all code and environment variables required to run",source:"@site/deploy/manual/deployments.md",sourceDirName:"manual",slug:"/manual/deployments",permalink:"/deno-docs/deploy/manual/deployments",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"Pricing and limitations",permalink:"/deno-docs/deploy/manual/pricing-and-limits"},next:{title:"Custom domains",permalink:"/deno-docs/deploy/manual/custom-domains"}},p={},d=[{value:"Custom domains",id:"custom-domains",level:2},{value:"Branch domains",id:"branch-domains",level:2},{value:"Production vs. preview deployments",id:"production-vs-preview-deployments",level:2},{value:"Promoting preview deployments to production deployments via Deno Deploy UI",id:"promoting-preview-deployments-to-production-deployments-via-deno-deploy-ui",level:2},{value:"Creating production deployments via <code>deployctl</code>",id:"creating-production-deployments-via-deployctl",level:2}],c={toc:d},s="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(s,(0,o.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deployments"},"Deployments"),(0,r.kt)("p",null,"A deployment is a snapshot of all code and environment variables required to run\nan application. Deployments are immutable after they have been created. To\ndeploy a new version of the code for an application, a new deployment must be\ncreated."),(0,r.kt)("h2",{id:"custom-domains"},"Custom domains"),(0,r.kt)("p",null,"There can also be other URLs that can point to a deployment, like\n",(0,r.kt)("a",{parentName:"p",href:"custom-domains"},"custom domains"),"."),(0,r.kt)("h2",{id:"branch-domains"},"Branch domains"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"<projectname--branchname>.deno.dev")," is also supported."),(0,r.kt)("h2",{id:"production-vs-preview-deployments"},"Production vs. preview deployments"),(0,r.kt)("p",null,"All deployments have a preview URL that can be used to view this specific\ndeployment. Preview URLs have the format\n",(0,r.kt)("inlineCode",{parentName:"p"},"{project_name}-{deployment_id}.deno.dev"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image",src:n(16575).Z,width:"1007",height:"322"})),(0,r.kt)("p",null,"A deployment can either be a production or a preview deployment. These\ndeployments do not have any differences in runtime functionality. The only\ndistinguishing factor is that a project's production deployment will receive\ntraffic from the project URL (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"myproject.deno.dev"),"), and from custom\ndomains in addition to traffic to the deployment's preview URL."),(0,r.kt)("h2",{id:"promoting-preview-deployments-to-production-deployments-via-deno-deploy-ui"},"Promoting preview deployments to production deployments via Deno Deploy UI"),(0,r.kt)("p",null,'Preview deployments can be "promoted" to production via the Deno Deploy UI:'),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Navigate to the project page."),(0,r.kt)("li",{parentName:"ol"},"Click on the ",(0,r.kt)("strong",{parentName:"li"},"Deployments")," tab."),(0,r.kt)("li",{parentName:"ol"},"Click on the three dots next to the deployment you want to promote to\nproduction and select ",(0,r.kt)("strong",{parentName:"li"},"Promote to Production"),(0,r.kt)("img",{alt:"promote_to_production",src:n(35658).Z,width:"1117",height:"405"}))),(0,r.kt)("h2",{id:"creating-production-deployments-via-deployctl"},"Creating production deployments via ",(0,r.kt)("inlineCode",{parentName:"h2"},"deployctl")),(0,r.kt)("p",null,"If you are deploying your Deno code with ",(0,r.kt)("inlineCode",{parentName:"p"},"deployctl"),", you can deploy to\nproduction with the ",(0,r.kt)("inlineCode",{parentName:"p"},"--prod")," flag:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"deployctl deploy --prod --project=helloworld main.ts\n")))}m.isMDXComponent=!0},16575:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/preview_deployment-ab5f4d8ed88cde4b79d19ea7ca58de31.png"},35658:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/promote_to_production-580599cc71054eae72773289200de72b.png"}}]);