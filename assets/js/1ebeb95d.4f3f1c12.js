"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[1464],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>h});var s=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,s)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,s,a=function(e,n){if(null==e)return{};var t,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)t=r[s],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=s.createContext({}),l=function(e){var n=s.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},m=function(e){var n=l(e.components);return s.createElement(p.Provider,{value:n},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var n=e.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,h=d["".concat(p,".").concat(u)]||d[u]||c[u]||r;return t?s.createElement(h,o(o({ref:n},m),{},{components:t})):s.createElement(h,o({ref:n},m))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[d]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<r;l++)o[l]=t[l];return s.createElement.apply(null,o)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},1841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>i,toc:()=>l});var s=t(87462),a=(t(67294),t(3905));const r={},o="Permission APIs",i={unversionedId:"manual/runtime/permission_apis",id:"manual/runtime/permission_apis",title:"Permission APIs",description:"Permissions are granted from the CLI when running the deno command. User code",source:"@site/runtime/manual/runtime/permission_apis.md",sourceDirName:"manual/runtime",slug:"/manual/runtime/permission_apis",permalink:"/deno-docs/runtime/manual/runtime/permission_apis",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"HTTP Server APIs",permalink:"/deno-docs/runtime/manual/runtime/http_server_apis"},next:{title:"import.meta API",permalink:"/deno-docs/runtime/manual/runtime/import_meta_api"}},p={},l=[{value:"Permission descriptors",id:"permission-descriptors",level:2},{value:"Query permissions",id:"query-permissions",level:2},{value:"Permission states",id:"permission-states",level:2},{value:"Permission strength",id:"permission-strength",level:2},{value:"Request permissions",id:"request-permissions",level:2},{value:"Revoke permissions",id:"revoke-permissions",level:2}],m={toc:l},d="wrapper";function c(e){let{components:n,...t}=e;return(0,a.kt)(d,(0,s.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permission-apis"},"Permission APIs"),(0,a.kt)("p",null,"Permissions are granted from the CLI when running the ",(0,a.kt)("inlineCode",{parentName:"p"},"deno")," command. User code\nwill often assume its own set of required permissions, but there is no guarantee\nduring execution that the set of ",(0,a.kt)("em",{parentName:"p"},"granted")," permissions will align with this."),(0,a.kt)("p",null,"In some cases, ensuring a fault-tolerant program requires a way to interact with\nthe permission system at runtime."),(0,a.kt)("h2",{id:"permission-descriptors"},"Permission descriptors"),(0,a.kt)("p",null,"On the CLI, read permission for ",(0,a.kt)("inlineCode",{parentName:"p"},"/foo/bar")," is represented as\n",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-read=/foo/bar"),". In runtime JS, it is represented as the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const desc = { name: "read", path: "/foo/bar" } as const;\n')),(0,a.kt)("p",null,"Other examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// Global write permission.\nconst desc1 = { name: "write" } as const;\n\n// Write permission to `$PWD/foo/bar`.\nconst desc2 = { name: "write", path: "foo/bar" } as const;\n\n// Global net permission.\nconst desc3 = { name: "net" } as const;\n\n// Net permission to 127.0.0.1:8000.\nconst desc4 = { name: "net", host: "127.0.0.1:8000" } as const;\n\n// High-resolution time permission.\nconst desc5 = { name: "hrtime" } as const;\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f See\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.PermissionDescriptor"},(0,a.kt)("inlineCode",{parentName:"a"},"PermissionDescriptor"))," in\nAPI reference for more details.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f In 1.30 and onwards, synchronous API counterparts (ex.\n",(0,a.kt)("inlineCode",{parentName:"p"},"Deno.permissions.querySync"),") exist for all the APIs described below.")),(0,a.kt)("h2",{id:"query-permissions"},"Query permissions"),(0,a.kt)("p",null,"Check, by descriptor, if a permission is granted or not."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run --allow-read=/foo main.ts\n\nconst desc1 = { name: "read", path: "/foo" } as const;\nconsole.log(await Deno.permissions.query(desc1));\n// PermissionStatus { state: "granted", partial: false }\n\nconst desc2 = { name: "read", path: "/foo/bar" } as const;\nconsole.log(await Deno.permissions.query(desc2));\n// PermissionStatus { state: "granted", partial: false }\n\nconst desc3 = { name: "read", path: "/bar" } as const;\nconsole.log(await Deno.permissions.query(desc3));\n// PermissionStatus { state: "prompt", partial: false }\n')),(0,a.kt)("p",null,"If ",(0,a.kt)("inlineCode",{parentName:"p"},"--deny-read")," flag was used to restrict some of the filepaths, the result\nwill contain ",(0,a.kt)("inlineCode",{parentName:"p"},"partial: true")," describing that not all subpaths have permissions\ngranted:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run --allow-read=/foo --deny-read=/foo/bar main.ts\n\nconst desc1 = { name: "read", path: "/foo" } as const;\nconsole.log(await Deno.permissions.query(desc1));\n// PermissionStatus { state: "granted", partial: true }\n\nconst desc2 = { name: "read", path: "/foo/bar" } as const;\nconsole.log(await Deno.permissions.query(desc2));\n// PermissionStatus { state: "denied", partial: false }\n\nconst desc3 = { name: "read", path: "/bar" } as const;\nconsole.log(await Deno.permissions.query(desc3));\n// PermissionStatus { state: "prompt", partial: false }\n')),(0,a.kt)("h2",{id:"permission-states"},"Permission states"),(0,a.kt)("p",null,'A permission state can be either "granted", "prompt" or "denied". Permissions\nwhich have been granted from the CLI will query to ',(0,a.kt)("inlineCode",{parentName:"p"},'{ state: "granted" }'),". Those\nwhich have not been granted query to ",(0,a.kt)("inlineCode",{parentName:"p"},'{ state: "prompt" }')," by default, while\n",(0,a.kt)("inlineCode",{parentName:"p"},'{ state: "denied" }')," reserved for those which have been explicitly refused.\nThis will come up in ",(0,a.kt)("a",{parentName:"p",href:"#request-permissions"},"Request permissions"),"."),(0,a.kt)("h2",{id:"permission-strength"},"Permission strength"),(0,a.kt)("p",null,"The intuitive understanding behind the result of the second query in\n",(0,a.kt)("a",{parentName:"p",href:"#query-permissions"},"Query permissions")," is that read access was granted to\n",(0,a.kt)("inlineCode",{parentName:"p"},"/foo")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"/foo/bar")," is within ",(0,a.kt)("inlineCode",{parentName:"p"},"/foo")," so ",(0,a.kt)("inlineCode",{parentName:"p"},"/foo/bar")," is allowed to be read. This\nhold true, unless the CLI-granted permission is ",(0,a.kt)("em",{parentName:"p"},"partial")," to the queried\npermissions (as an effect of using a ",(0,a.kt)("inlineCode",{parentName:"p"},"--deny-*")," flag)."),(0,a.kt)("p",null,"We can also say that ",(0,a.kt)("inlineCode",{parentName:"p"},"desc1")," is\n",(0,a.kt)("em",{parentName:"p"},(0,a.kt)("a",{parentName:"em",href:"https://www.w3.org/TR/permissions/#ref-for-permissiondescriptor-stronger-than"},"stronger than")),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"desc2"),". This means that for any set of CLI-granted permissions:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"desc1")," queries to ",(0,a.kt)("inlineCode",{parentName:"li"},'{ state: "granted", partial: false }')," then so must\n",(0,a.kt)("inlineCode",{parentName:"li"},"desc2"),"."),(0,a.kt)("li",{parentName:"ol"},"If ",(0,a.kt)("inlineCode",{parentName:"li"},"desc2")," queries to ",(0,a.kt)("inlineCode",{parentName:"li"},'{ state: "denied", partial: false }')," then so must\n",(0,a.kt)("inlineCode",{parentName:"li"},"desc1"),".")),(0,a.kt)("p",null,"More examples:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'const desc1 = { name: "write" } as const;\n// is stronger than\nconst desc2 = { name: "write", path: "/foo" } as const;\n\nconst desc3 = { name: "net", host: "127.0.0.1" } as const;\n// is stronger than\nconst desc4 = { name: "net", host: "127.0.0.1:8000" } as const;\n')),(0,a.kt)("h2",{id:"request-permissions"},"Request permissions"),(0,a.kt)("p",null,"Request an ungranted permission from the user via CLI prompt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run main.ts\n\nconst desc1 = { name: "read", path: "/foo" } as const;\nconst status1 = await Deno.permissions.request(desc1);\n// \u26a0\ufe0f Deno requests read access to "/foo". Grant? [y/n (y = yes allow, n = no deny)] y\nconsole.log(status1);\n// PermissionStatus { state: "granted", partial: false }\n\nconst desc2 = { name: "read", path: "/bar" } as const;\nconst status2 = await Deno.permissions.request(desc2);\n// \u26a0\ufe0f Deno requests read access to "/bar". Grant? [y/n (y = yes allow, n = no deny)] n\nconsole.log(status2);\n// PermissionStatus { state: "denied", partial: false }\n')),(0,a.kt)("p",null,'If the current permission state is "prompt", a prompt will appear on the user\'s\nterminal asking them if they would like to grant the request. The request for\n',(0,a.kt)("inlineCode",{parentName:"p"},"desc1")," was granted so its new status is returned and execution will continue as\nif ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-read=/foo")," was specified on the CLI. The request for ",(0,a.kt)("inlineCode",{parentName:"p"},"desc2"),' was\ndenied so its permission state is downgraded from "prompt" to "denied".'),(0,a.kt)("p",null,'If the current permission state is already either "granted" or "denied", the\nrequest will behave like a query and just return the current status. This\nprevents prompts both for already granted permissions and previously denied\nrequests.'),(0,a.kt)("h2",{id:"revoke-permissions"},"Revoke permissions"),(0,a.kt)("p",null,'Downgrade a permission from "granted" to "prompt".'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run --allow-read=/foo main.ts\n\nconst desc = { name: "read", path: "/foo" } as const;\nconsole.log(await Deno.permissions.revoke(desc));\n// PermissionStatus { state: "prompt", partial: false }\n')),(0,a.kt)("p",null,"What happens when you try to revoke a permission which is ",(0,a.kt)("em",{parentName:"p"},"partial")," to one\ngranted on the CLI?"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'// deno run --allow-read=/foo main.ts\n\nconst desc = { name: "read", path: "/foo/bar" } as const;\nconsole.log(await Deno.permissions.revoke(desc));\n// PermissionStatus { state: "prompt", partial: false }\nconst cliDesc = { name: "read", path: "/foo" } as const;\nconsole.log(await Deno.permissions.revoke(cliDesc));\n// PermissionStatus { state: "prompt", partial: false }\n')),(0,a.kt)("p",null,"The CLI-granted permission, which implies the revoked permission, was also\nrevoked."),(0,a.kt)("p",null,"To understand this behaviour, imagine that Deno stores an internal set of\n",(0,a.kt)("em",{parentName:"p"},"explicitly granted permission descriptors"),". Specifying ",(0,a.kt)("inlineCode",{parentName:"p"},"--allow-read=/foo,/bar"),"\non the CLI initializes this set to:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'[\n  { name: "read", path: "/foo" },\n  { name: "read", path: "/bar" },\n];\n')),(0,a.kt)("p",null,"Granting a runtime request for ",(0,a.kt)("inlineCode",{parentName:"p"},'{ name: "write", path: "/foo" }')," updates the set\nto:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'[\n  { name: "read", path: "/foo" },\n  { name: "read", path: "/bar" },\n  { name: "write", path: "/foo" },\n];\n')),(0,a.kt)("p",null,"Deno's permission revocation algorithm works by removing every element from this\nset which is ",(0,a.kt)("em",{parentName:"p"},"stronger than")," the argument permission descriptor."),(0,a.kt)("p",null,'Deno does not allow "fragmented" permission states, where some strong permission\nis granted with exclusions of weak permissions implied by it. Such a system\nwould prove increasingly complex and unpredictable as you factor in a wider\nvariety of use cases and the ',(0,a.kt)("inlineCode",{parentName:"p"},'"denied"')," state. This is a calculated trade-off of\ngranularity for security."))}c.isMDXComponent=!0}}]);