"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[1273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||c[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},24753:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>u});var a=n(87462),o=(n(67294),n(3905));const r={},i="Private Modules and Repositories",s={unversionedId:"manual/basics/modules/private",id:"manual/basics/modules/private",title:"Private Modules and Repositories",description:"There may be instances where you want to load a remote module that is located in",source:"@site/runtime/manual/basics/modules/private.md",sourceDirName:"manual/basics/modules",slug:"/manual/basics/modules/private",permalink:"/deno-docs/runtime/manual/basics/modules/private",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Reloading Modules",permalink:"/deno-docs/runtime/manual/basics/modules/reloading_modules"},next:{title:"Proxies",permalink:"/deno-docs/runtime/manual/basics/modules/proxies"}},l={},u=[{value:"DENO_AUTH_TOKENS",id:"deno_auth_tokens",level:2},{value:"GitHub",id:"github",level:2}],p={toc:u},d="wrapper";function c(e){let{components:t,...r}=e;return(0,o.kt)(d,(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"private-modules-and-repositories"},"Private Modules and Repositories"),(0,o.kt)("p",null,"There may be instances where you want to load a remote module that is located in\na ",(0,o.kt)("em",{parentName:"p"},"private")," repository, like a private repository on GitHub."),(0,o.kt)("p",null,"Deno supports sending bearer tokens when requesting a remote module. Bearer\ntokens are the predominant type of access token used with OAuth 2.0, and are\nbroadly supported by hosting services (e.g., GitHub, GitLab, Bitbucket,\nCloudsmith, etc.)."),(0,o.kt)("h2",{id:"deno_auth_tokens"},"DENO_AUTH_TOKENS"),(0,o.kt)("p",null,"The Deno CLI will look for an environment variable named ",(0,o.kt)("inlineCode",{parentName:"p"},"DENO_AUTH_TOKENS")," to\ndetermine what authentication tokens it should consider using when requesting\nremote modules. The value of the environment variable is in the format of ",(0,o.kt)("em",{parentName:"p"},"n"),"\nnumber of tokens delimited by a semi-colon (",(0,o.kt)("inlineCode",{parentName:"p"},";"),") where each token is either:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"a bearer token in the format of ",(0,o.kt)("inlineCode",{parentName:"p"},"{token}@{hostname[:port]}")," or")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"basic auth data in the format of ",(0,o.kt)("inlineCode",{parentName:"p"},"{username}:{password}@{hostname[:port]}")))),(0,o.kt)("p",null,"For example, a single token for ",(0,o.kt)("inlineCode",{parentName:"p"},"deno.land")," would look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"DENO_AUTH_TOKENS=a1b2c3d4e5f6@deno.land\n")),(0,o.kt)("p",null,"or:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"DENO_AUTH_TOKENS=username:password@deno.land\n")),(0,o.kt)("p",null,"And multiple tokens would look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"DENO_AUTH_TOKENS=a1b2c3d4e5f6@deno.land;f1e2d3c4b5a6@example.com:8080;username:password@deno.land\n")),(0,o.kt)("p",null,"When Deno goes to fetch a remote module, where the hostname matches the hostname\nof the remote module, Deno will set the ",(0,o.kt)("inlineCode",{parentName:"p"},"Authorization")," header of the request to\nthe value of ",(0,o.kt)("inlineCode",{parentName:"p"},"Bearer {token}")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Basic {base64EncodedData}"),". This allows the\nremote server to recognize that the request is an authorized request tied to a\nspecific authenticated user, and provide access to the appropriate resources and\nmodules on the server."),(0,o.kt)("h2",{id:"github"},"GitHub"),(0,o.kt)("p",null,"To access private repositories on GitHub, you would need to issue yourself a\n",(0,o.kt)("em",{parentName:"p"},"personal access token"),". You do this by logging into GitHub and going under\n",(0,o.kt)("em",{parentName:"p"},"Settings -> Developer settings -> Personal access tokens"),":"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Personal access tokens settings on GitHub",src:n(87887).Z,width:"248",height:"200"})),(0,o.kt)("p",null,"You would then choose to ",(0,o.kt)("em",{parentName:"p"},"Generate new token")," and give your token a description\nand appropriate access:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Creating a new personal access token on GitHub",src:n(53081).Z,width:"755",height:"463"})),(0,o.kt)("p",null,"And once created GitHub will display the new token a single time, the value of\nwhich you would want to use in the environment variable:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Display of newly created token on GitHub",src:n(24544).Z,width:"755",height:"234"})),(0,o.kt)("p",null,"In order to access modules that are contained in a private repository on GitHub,\nyou would want to use the generated token in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DENO_AUTH_TOKENS")," environment\nvariable scoped to the ",(0,o.kt)("inlineCode",{parentName:"p"},"raw.githubusercontent.com")," hostname. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"DENO_AUTH_TOKENS=a1b2c3d4e5f6@raw.githubusercontent.com\n")),(0,o.kt)("p",null,"This should allow Deno to access any modules that the user who the token was\nissued for has access to."),(0,o.kt)("p",null,"When the token is incorrect, or the user does not have access to the module,\nGitHub will issue a ",(0,o.kt)("inlineCode",{parentName:"p"},"404 Not Found")," status, instead of an unauthorized status.\nSo if you are getting errors that the modules you are trying to access are not\nfound on the command line, check the environment variable settings and the\npersonal access token settings."),(0,o.kt)("p",null,"In addition, ",(0,o.kt)("inlineCode",{parentName:"p"},"deno run -L debug")," should print out a debug message about the\nnumber of tokens that are parsed out of the environment variable. It will print\nan error message if it feels any of the tokens are malformed. It won't print any\ndetails about the tokens for security purposes."))}c.isMDXComponent=!0},53081:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/private-github-new-token-7f0fc024284acf5508d0d72f413eb5f6.png"},24544:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/private-github-token-display-df54e96df6f12169f00ea8c10b39cfb5.png"},87887:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/private-pat-d7ff98c43545ab0d56bf324802db4076.png"}}]);