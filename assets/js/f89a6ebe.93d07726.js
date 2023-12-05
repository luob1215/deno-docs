"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3389],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var i=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},c="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(n),u=o,m=c["".concat(s,".").concat(u)]||c[u]||h[u]||a;return n?i.createElement(m,r(r({ref:t},d),{},{components:n})):i.createElement(m,r({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,r=new Array(a);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:o,r[1]=l;for(var p=2;p<a;p++)r[p]=n[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"},23382:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=n(87462),o=(n(67294),n(3905));const a={},r="Types and Type Declarations",l={unversionedId:"manual/advanced/typescript/types",id:"manual/advanced/typescript/types",title:"Types and Type Declarations",description:"One of the design principles of Deno is no non-standard module resolution. When",source:"@site/runtime/manual/advanced/typescript/types.md",sourceDirName:"manual/advanced/typescript",slug:"/manual/advanced/typescript/types",permalink:"/deno-docs/runtime/manual/advanced/typescript/types",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Overview of TypeScript in Deno",permalink:"/deno-docs/runtime/manual/advanced/typescript/overview"},next:{title:"Configuring TypeScript in Deno",permalink:"/deno-docs/runtime/manual/advanced/typescript/configuration"}},s={},p=[{value:"Providing types when importing",id:"providing-types-when-importing",level:2},{value:"Providing types when hosting",id:"providing-types-when-hosting",level:2},{value:"Using the triple-slash reference directive",id:"using-the-triple-slash-reference-directive",level:3},{value:"Using X-TypeScript-Types header",id:"using-x-typescript-types-header",level:3},{value:"Using ambient or global types",id:"using-ambient-or-global-types",level:2},{value:"Using a triple-slash directive",id:"using-a-triple-slash-directive",level:3},{value:"Using a configuration file",id:"using-a-configuration-file",level:3},{value:"Type Checking Web Workers",id:"type-checking-web-workers",level:2},{value:"Using triple-slash directives",id:"using-triple-slash-directives",level:3},{value:"Using a configuration file",id:"using-a-configuration-file-1",level:3},{value:"Important points",id:"important-points",level:2},{value:"Type declaration semantics",id:"type-declaration-semantics",level:3},{value:"Deno Friendly CDNs",id:"deno-friendly-cdns",level:3},{value:"Behavior of JavaScript when type checking",id:"behavior-of-javascript-when-type-checking",level:2},{value:"Internals",id:"internals",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"types-and-type-declarations"},"Types and Type Declarations"),(0,o.kt)("p",null,"One of the design principles of Deno is no non-standard module resolution. When\nTypeScript is type checking a file, it only cares about the types for the file,\nand the ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc")," compiler has a lot of logic to try to resolve those types. By\ndefault, it expects ",(0,o.kt)("em",{parentName:"p"},"ambiguous")," module specifiers with an extension, and will\nattempt to look for the file under the ",(0,o.kt)("inlineCode",{parentName:"p"},".ts")," specifier, then ",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts"),", and\nfinally ",(0,o.kt)("inlineCode",{parentName:"p"},".js")," (plus a whole other set of logic when the module resolution is set\nto ",(0,o.kt)("inlineCode",{parentName:"p"},'"node"'),"). Deno deals with explicit specifiers."),(0,o.kt)("p",null,"This can cause a couple problems though. For example, let's say I want to\nconsume a TypeScript file that has already been transpiled to JavaScript along\nwith a type definition file. So I have ",(0,o.kt)("inlineCode",{parentName:"p"},"mod.js")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"mod.d.ts"),". If I try to\nimport ",(0,o.kt)("inlineCode",{parentName:"p"},"mod.js")," into Deno, it will only do what I ask it to do, and import\n",(0,o.kt)("inlineCode",{parentName:"p"},"mod.js"),", but that means my code won't be as well type checked as if TypeScript\nwas considering the ",(0,o.kt)("inlineCode",{parentName:"p"},"mod.d.ts")," file in place of the ",(0,o.kt)("inlineCode",{parentName:"p"},"mod.js")," file."),(0,o.kt)("p",null,"In order to support this in Deno, Deno has two solutions, of which there is a\nvariation of a solution to enhance support. The two main situations you come\nacross would be:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"As the importer of a JavaScript module, I know what types should be applied to\nthe module."),(0,o.kt)("li",{parentName:"ul"},"As the supplier of the JavaScript module, I know what types should be applied\nto the module.")),(0,o.kt)("p",null,"The latter case is the better case, meaning you as the provider or host of the\nmodule, everyone can consume it without having to figure out how to resolve the\ntypes for the JavaScript module, but when consuming modules that you may not\nhave direct control over, the ability to do the former is also required."),(0,o.kt)("h2",{id:"providing-types-when-importing"},"Providing types when importing"),(0,o.kt)("p",null,"If you are consuming a JavaScript module and you have either created types (a\n",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," file) or have otherwise obtained the types, you want to use, you can\ninstruct Deno to use that file when type checking instead of the JavaScript file\nusing the ",(0,o.kt)("inlineCode",{parentName:"p"},"@deno-types")," compiler hint. ",(0,o.kt)("inlineCode",{parentName:"p"},"@deno-types")," needs to be a single line\ndouble slash comment, where when used impacts the next import or re-export\nstatement."),(0,o.kt)("p",null,"For example if I have a JavaScript modules ",(0,o.kt)("inlineCode",{parentName:"p"},"coolLib.js")," and I had a separate\n",(0,o.kt)("inlineCode",{parentName:"p"},"coolLib.d.ts")," file that I wanted to use, I would import it like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'// @deno-types="./coolLib.d.ts"\nimport * as coolLib from "./coolLib.js";\n')),(0,o.kt)("p",null,"When type checking ",(0,o.kt)("inlineCode",{parentName:"p"},"coolLib")," and your usage of it in the file, the\n",(0,o.kt)("inlineCode",{parentName:"p"},"coolLib.d.ts")," types will be used instead of looking at the JavaScript file."),(0,o.kt)("p",null,"The pattern matching for the compiler hint is somewhat forgiving and will accept\nquoted and non-question values for the specifier as well as it accepts\nwhitespace before and after the equals sign."),(0,o.kt)("h2",{id:"providing-types-when-hosting"},"Providing types when hosting"),(0,o.kt)("p",null,"If you are in control of the source code of the module, or you are in control of\nhow the file is hosted on a web server, there are two ways to inform Deno of the\ntypes for a given module, without requiring the importer to do anything special."),(0,o.kt)("h3",{id:"using-the-triple-slash-reference-directive"},"Using the triple-slash reference directive"),(0,o.kt)("p",null,"Deno supports using the triple-slash reference ",(0,o.kt)("inlineCode",{parentName:"p"},"types")," directive, which adopts\nthe reference comment used by TypeScript in TypeScript files to ",(0,o.kt)("em",{parentName:"p"},"include")," other\nfiles and applies it only to JavaScript files."),(0,o.kt)("p",null,"For example, if I had created ",(0,o.kt)("inlineCode",{parentName:"p"},"coolLib.js")," and along side of it I had created my\ntype definitions for my library in ",(0,o.kt)("inlineCode",{parentName:"p"},"coolLib.d.ts")," I could do the following in\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"coolLib.js")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js,",metastring:"ignore",ignore:!0},'/// <reference types="./coolLib.d.ts" />\n\n// ... the rest of the JavaScript ...\n')),(0,o.kt)("p",null,"When Deno encounters this directive, it would resolve the ",(0,o.kt)("inlineCode",{parentName:"p"},"./coolLib.d.ts")," file\nand use that instead of the JavaScript file when TypeScript was type checking\nthe file, but still load the JavaScript file when running the program."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2139\ufe0f ",(0,o.kt)("em",{parentName:"p"},"Note")," this is a repurposed directive for TypeScript that only applies to\nJavaScript files. Using the triple-slash reference directive of ",(0,o.kt)("inlineCode",{parentName:"p"},"types")," in a\nTypeScript file works under Deno as well, but has essentially the same\nbehavior as the ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," directive.")),(0,o.kt)("h3",{id:"using-x-typescript-types-header"},"Using X-TypeScript-Types header"),(0,o.kt)("p",null,"Similar to the triple-slash directive, Deno supports a header for remote modules\nthat instructs Deno where to locate the types for a given module. For example, a\nresponse for ",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/coolLib.js")," might look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nContent-Type: application/javascript; charset=UTF-8\nContent-Length: 648\nX-TypeScript-Types: ./coolLib.d.ts\n")),(0,o.kt)("p",null,"When seeing this header, Deno would attempt to retrieve\n",(0,o.kt)("inlineCode",{parentName:"p"},"https://example.com/coolLib.d.ts")," and use that when type checking the original\nmodule."),(0,o.kt)("h2",{id:"using-ambient-or-global-types"},"Using ambient or global types"),(0,o.kt)("p",null,"Overall it is better to use module/UMD type definitions with Deno, where a\nmodule expressly imports the types it depends upon. Modular type definitions can\nexpress\n",(0,o.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/declaration-files/templates/global-modifying-module-d-ts.html"},"augmentation of the global scope"),"\nvia the ",(0,o.kt)("inlineCode",{parentName:"p"},"declare global")," in the type definition. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"declare global {\n  var AGlobalString: string;\n}\n")),(0,o.kt)("p",null,"This would make ",(0,o.kt)("inlineCode",{parentName:"p"},"AGlobalString")," available in the global namespace when importing\nthe type definition."),(0,o.kt)("p",null,"In some cases though, when leveraging other existing type libraries, it may not\nbe possible to leverage modular type definitions. Therefore there are ways to\ninclude arbitrary type definitions when type checking programmes."),(0,o.kt)("h3",{id:"using-a-triple-slash-directive"},"Using a triple-slash directive"),(0,o.kt)("p",null,"This option couples the type definitions to the code itself. By adding a\ntriple-slash ",(0,o.kt)("inlineCode",{parentName:"p"},"types")," directive near the type of a module, type checking the file\nwill include the type definition. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'/// <reference types="./types.d.ts" />\n')),(0,o.kt)("p",null,"The specifier provided is resolved just like any other specifier in Deno, which\nmeans it requires an extension, and is relative to the module referencing it. It\ncan be a fully qualified URL as well:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'/// <reference types="https://deno.land/x/pkg@1.0.0/types.d.ts" />\n')),(0,o.kt)("h3",{id:"using-a-configuration-file"},"Using a configuration file"),(0,o.kt)("p",null,"Another option is to use a configuration file that is configured to include the\ntype definitions, by supplying a ",(0,o.kt)("inlineCode",{parentName:"p"},'"types"')," value to the ",(0,o.kt)("inlineCode",{parentName:"p"},'"compilerOptions"'),". For\nexample:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "types": [\n      "./types.d.ts",\n      "https://deno.land/x/pkg@1.0.0/types.d.ts",\n      "/Users/me/pkg/types.d.ts"\n    ]\n  }\n}\n')),(0,o.kt)("p",null,"Like the triple-slash reference above, the specifier supplied in the ",(0,o.kt)("inlineCode",{parentName:"p"},'"types"'),"\narray will be resolved like other specifiers in Deno. In the case of relative\nspecifiers, it will be resolved relative to the path to the config file. Make\nsure to tell Deno to use this file by specifying ",(0,o.kt)("inlineCode",{parentName:"p"},"--config=path/to/file")," flag."),(0,o.kt)("h2",{id:"type-checking-web-workers"},"Type Checking Web Workers"),(0,o.kt)("p",null,"When Deno loads a TypeScript module in a web worker, it will automatically type\ncheck the module and its dependencies against the Deno web worker library. This\ncan present a challenge in other contexts like ",(0,o.kt)("inlineCode",{parentName:"p"},"deno cache")," or in editors. There\nare a couple of ways to instruct Deno to use the worker libraries instead of the\nstandard Deno libraries."),(0,o.kt)("h3",{id:"using-triple-slash-directives"},"Using triple-slash directives"),(0,o.kt)("p",null,"This option couples the library settings with the code itself. By adding the\nfollowing triple-slash directives near the top of the entry point file for the\nworker script, Deno will now type check it as a Deno worker script, irrespective\nof how the module is analyzed:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts,",metastring:"ignore",ignore:!0},'/// <reference no-default-lib="true" />\n/// <reference lib="deno.worker" />\n')),(0,o.kt)("p",null,"The first directive ensures that no other default libraries are used. If this is\nomitted, you will get some conflicting type definitions, because Deno will try\nto apply the standard Deno library as well. The second instructs Deno to apply\nthe built-in Deno worker type definitions plus dependent libraries (like\n",(0,o.kt)("inlineCode",{parentName:"p"},'"esnext"'),")."),(0,o.kt)("p",null,"When you run a ",(0,o.kt)("inlineCode",{parentName:"p"},"deno cache")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"deno bundle")," command or use an IDE which uses\nthe Deno language server, Deno should automatically detect these directives and\napply the correct libraries when type checking."),(0,o.kt)("p",null,"The one disadvantage of this, is that it makes the code less portable to other\nnon-Deno platforms like ",(0,o.kt)("inlineCode",{parentName:"p"},"tsc"),", as it is only Deno which has the ",(0,o.kt)("inlineCode",{parentName:"p"},'"deno.worker"'),"\nlibrary built into it."),(0,o.kt)("h3",{id:"using-a-configuration-file-1"},"Using a configuration file"),(0,o.kt)("p",null,"Another option is to use a configuration file that is configured to apply the\nlibrary files. A minimal file that would work would look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "target": "esnext",\n    "lib": ["deno.worker"]\n  }\n}\n')),(0,o.kt)("p",null,"Then when running a command on the command line, you would need to pass the\n",(0,o.kt)("inlineCode",{parentName:"p"},"--config path/to/file")," argument, or if you are using an IDE which leverages the\nDeno language server, set the ",(0,o.kt)("inlineCode",{parentName:"p"},"deno.config")," setting."),(0,o.kt)("p",null,"If you also have non-worker scripts, you will either need to omit the ",(0,o.kt)("inlineCode",{parentName:"p"},"--config"),"\nargument, or have one that is configured to meet the needs of your non-worker\nscripts."),(0,o.kt)("h2",{id:"important-points"},"Important points"),(0,o.kt)("h3",{id:"type-declaration-semantics"},"Type declaration semantics"),(0,o.kt)("p",null,"Type declaration files (",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," files) follow the same semantics as other files\nin Deno. This means that declaration files are assumed to be module declarations\n(",(0,o.kt)("em",{parentName:"p"},"UMD declarations"),") and not ambient/global declarations. It is unpredictable\nhow Deno will handle ambient/global declarations."),(0,o.kt)("p",null,"In addition, if a type declaration imports something else, like another ",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts"),"\nfile, its resolution follow the normal import rules of Deno. For a lot of the\n",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," files that are generated and available on the web, they may not be\ncompatible with Deno."),(0,o.kt)("p",null,"To overcome this problem, some solution providers, like the\n",(0,o.kt)("a",{parentName:"p",href:"https://www.skypack.dev/"},"Skypack CDN"),", will automatically bundle type\ndeclarations just like they provide bundles of JavaScript as ESM."),(0,o.kt)("h3",{id:"deno-friendly-cdns"},"Deno Friendly CDNs"),(0,o.kt)("p",null,"There are CDNs which host JavaScript modules that integrate well with Deno."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://esm.sh"},"esm.sh")," is a CDN which provides type declarations by default\n(via the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-TypeScript-Types")," header). It can be disabled by appending\n",(0,o.kt)("inlineCode",{parentName:"p"},"?no-dts")," to the import URL:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "https://esm.sh/react?no-dts";\n'))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("a",{parentName:"p",href:"https://docs.skypack.dev/skypack-cdn/code/deno"},"Skypack.dev")," is another CDN\nwhich also provides type declarations (via the ",(0,o.kt)("inlineCode",{parentName:"p"},"X-TypeScript-Types")," header)\nwhen you append ",(0,o.kt)("inlineCode",{parentName:"p"},"?dts")," as a query string to your remote module import\nstatements. Here's an example:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import React from "https://cdn.skypack.dev/react?dts";\n')))),(0,o.kt)("h2",{id:"behavior-of-javascript-when-type-checking"},"Behavior of JavaScript when type checking"),(0,o.kt)("p",null,"If you import JavaScript into TypeScript in Deno and there are no types, even if\nyou have ",(0,o.kt)("inlineCode",{parentName:"p"},"checkJs")," set to ",(0,o.kt)("inlineCode",{parentName:"p"},"false")," (the default for Deno), the TypeScript\ncompiler will still access the JavaScript module and attempt to do some static\nanalysis on it, to at least try to determine the shape of the exports of that\nmodule to validate the import in the TypeScript file."),(0,o.kt)("p",null,'This is usually never a problem when trying to import a "regular" ES module, but\nin some cases if the module has special packaging, or is a global ',(0,o.kt)("em",{parentName:"p"},"UMD")," module,\nTypeScript's analysis of the module can fail and cause misleading errors. The\nbest thing to do in this situation is provide some form of types using one of\nthe methods mention above."),(0,o.kt)("h3",{id:"internals"},"Internals"),(0,o.kt)("p",null,"While it isn't required to understand how Deno works internally to be able to\nleverage TypeScript with Deno well, it can help to understand how it works."),(0,o.kt)("p",null,"Before any code is executed or compiled, Deno generates a module graph by\nparsing the root module, and then detecting all of its dependencies, and then\nretrieving and parsing those modules, recursively, until all the dependencies\nare retrieved."),(0,o.kt)("p",null,'For each dependency, there are two potential "slots" that are used. There is the\ncode slot and the type slot. As the module graph is filled out, if the module is\nsomething that is or can be emitted to JavaScript, it fills the code slot, and\ntype only dependencies, like ',(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," files fill the type slot."),(0,o.kt)("p",null,"When the module graph is built, and there is a need to type check the graph,\nDeno starts up the TypeScript compiler and feeds it the names of the modules\nthat need to be potentially emitted as JavaScript. During that process, the\nTypeScript compiler will request additional modules, and Deno will look at the\nslots for the dependency, offering it the type slot if it is filled before\noffering it the code slot."),(0,o.kt)("p",null,"This means when you import a ",(0,o.kt)("inlineCode",{parentName:"p"},".d.ts")," module, or you use one of the solutions\nabove to provide alternative type modules for JavaScript code, that is what is\nprovided to TypeScript instead when resolving the module."))}h.isMDXComponent=!0}}]);