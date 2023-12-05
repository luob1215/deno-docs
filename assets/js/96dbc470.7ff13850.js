"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[2928],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>y});var o=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,l=function(e,t){if(null==e)return{};var n,o,l={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=o.createContext({}),d=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},i=function(e){var t=d(e.components);return o.createElement(c.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=d(n),m=l,y=s["".concat(c,".").concat(m)]||s[m]||u[m]||a;return n?o.createElement(y,r(r({ref:t},i),{},{components:n})):o.createElement(y,r({ref:t},i))}));function y(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var a=n.length,r=new Array(a);r[0]=m;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:l,r[1]=p;for(var d=2;d<a;d++)r[d]=n[d];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},63107:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>u,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var o=n(87462),l=(n(67294),n(3905));const a={},r="Using deployctl on the command line",p={unversionedId:"manual/deployctl",id:"manual/deployctl",title:"Using deployctl on the command line",description:"deployctl is a command line tool (CLI) that lets you work with the Deno Deploy",source:"@site/deploy/manual/deployctl.md",sourceDirName:"manual",slug:"/manual/deployctl",permalink:"/deno-docs/deploy/manual/deployctl",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"CI and GitHub Actions",permalink:"/deno-docs/deploy/manual/ci_github"},next:{title:"Regions",permalink:"/deno-docs/deploy/manual/regions"}},c={},d=[{value:"Install <code>deployctl</code>",id:"install-deployctl",level:2},{value:"Usage",id:"usage",level:2},{value:"<code>deno</code> CLI and local development",id:"deno-cli-and-local-development",level:2}],i={toc:d},s="wrapper";function u(e){let{components:t,...n}=e;return(0,l.kt)(s,(0,o.Z)({},i,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"using-deployctl-on-the-command-line"},"Using deployctl on the command line"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"deployctl")," is a command line tool (CLI) that lets you work with the Deno Deploy\nplatform."),(0,l.kt)("h2",{id:"install-deployctl"},"Install ",(0,l.kt)("inlineCode",{parentName:"h2"},"deployctl")),(0,l.kt)("p",null,"You can install the ",(0,l.kt)("inlineCode",{parentName:"p"},"deployctl")," command with the below command:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deno install --allow-all --no-check -r -f https://deno.land/x/deploy/deployctl.ts\n")),(0,l.kt)("p",null,"You also need to set the ",(0,l.kt)("inlineCode",{parentName:"p"},"DENO_DEPLOY_TOKEN")," environment variable to your\npersonal access token. You can generate your Personal Access Token in\n",(0,l.kt)("a",{parentName:"p",href:"https://dash.deno.com/account#access-tokens"},"https://dash.deno.com/account#access-tokens"),"."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("p",null,"To deploy a local script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deployctl deploy --project=helloworld main.ts\n")),(0,l.kt)("p",null,"To deploy a remote script:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deployctl deploy --project=helloworld https://deno.com/examples/hello.js\n")),(0,l.kt)("p",null,"To deploy a remote script without static files:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deployctl deploy --project=helloworld --no-static https://deno.com/examples/hello.js\n")),(0,l.kt)("p",null,"To ignore the node_modules directory while deploying:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"deployctl deploy --project=helloworld --exclude=node_modules main.tsx\n")),(0,l.kt)("p",null,"See the help message (",(0,l.kt)("inlineCode",{parentName:"p"},"deployctl -h"),") for more details."),(0,l.kt)("h2",{id:"deno-cli-and-local-development"},(0,l.kt)("inlineCode",{parentName:"h2"},"deno")," CLI and local development"),(0,l.kt)("p",null,"For local development you can use the ",(0,l.kt)("inlineCode",{parentName:"p"},"deno")," CLI. To install ",(0,l.kt)("inlineCode",{parentName:"p"},"deno"),", follow the\ninstructions in the\n",(0,l.kt)("a",{parentName:"p",href:"https://deno.land/manual/getting_started/installation"},"Deno manual"),"."),(0,l.kt)("p",null,"After installation, you can run your scripts locally:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ deno run --allow-net=:8000 https://deno.com/examples/hello.js\nListening on http://localhost:8000\n")),(0,l.kt)("p",null,"To watch for file changes add the ",(0,l.kt)("inlineCode",{parentName:"p"},"--watch")," flag:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"$ deno run --allow-net=:8000 --watch ./main.js\nListening on http://localhost:8000\n")),(0,l.kt)("p",null,"For more information about the Deno CLI, and how to configure your development\nenvironment and IDE, visit the Deno Manual's ",(0,l.kt)("a",{parentName:"p",href:"https://deno.land/manual/getting_started"},"Getting Started"),"\nsection."))}u.isMDXComponent=!0}}]);