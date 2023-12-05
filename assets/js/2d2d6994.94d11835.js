"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[8914],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(s,".").concat(m)]||u[m]||c[m]||o;return n?a.createElement(h,i(i({ref:t},d),{},{components:n})):a.createElement(h,i({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},37369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const o={},i="Contributing",l={unversionedId:"manual/references/contributing/index",id:"manual/references/contributing/index",title:"Contributing",description:"We welcome and appreciate all contributions to Deno.",source:"@site/runtime/manual/references/contributing/index.md",sourceDirName:"manual/references/contributing",slug:"/manual/references/contributing/",permalink:"/deno-docs/runtime/manual/references/contributing/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Testing API",permalink:"/deno-docs/runtime/manual/advanced/language_server/testing_api"},next:{title:"Internal Details",permalink:"/deno-docs/runtime/manual/references/contributing/architecture"}},s={},p=[{value:"Projects",id:"projects",level:2},{value:"<code>deno</code>",id:"deno",level:3},{value:"<code>deno_std</code>",id:"deno_std",level:3},{value:"<code>fresh</code>",id:"fresh",level:3},{value:"<code>deno_lint</code>",id:"deno_lint",level:3},{value:"<code>deno_doc</code>",id:"deno_doc",level:3},{value:"<code>docland</code>",id:"docland",level:3},{value:"<code>rusty_v8</code>",id:"rusty_v8",level:3},{value:"<code>serde_v8</code>",id:"serde_v8",level:3},{value:"<code>deno_docker</code>",id:"deno_docker",level:3},{value:"General remarks",id:"general-remarks",level:2},{value:"Submitting a pull request",id:"submitting-a-pull-request",level:2},{value:"Submitting a PR to <code>deno</code>",id:"submitting-a-pr-to-deno",level:2},{value:"Submitting a PR to <code>deno_std</code>",id:"submitting-a-pr-to-deno_std",level:2},{value:"Submitting a PR to <code>fresh</code>",id:"submitting-a-pr-to-fresh",level:2},{value:"Documenting APIs",id:"documenting-apis",level:2},{value:"JavaScript and TypeScript",id:"javascript-and-typescript",level:3},{value:"Rust",id:"rust",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"contributing"},"Contributing"),(0,r.kt)("p",null,"We welcome and appreciate all contributions to Deno."),(0,r.kt)("p",null,"This page serves as a helper to get you started on contributing."),(0,r.kt)("h2",{id:"projects"},"Projects"),(0,r.kt)("p",null,"There are numerous repositories in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/denoland"},(0,r.kt)("inlineCode",{parentName:"a"},"denoland")),"\norganization that are part of the Deno ecosystem."),(0,r.kt)("p",null,"Repositories have different scopes, use different programming languages and have\nvarying difficulty level when it comes to contributions."),(0,r.kt)("p",null,"To help you decide which repository might be the best to start contributing\n(and/or falls into your interest), here's a short comparison (",(0,r.kt)("strong",{parentName:"p"},"codebases\nprimarily comprise the languages in bold"),"):"),(0,r.kt)("h3",{id:"deno"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/deno"},(0,r.kt)("inlineCode",{parentName:"a"},"deno"))),(0,r.kt)("p",null,"This is the main repository that provides the ",(0,r.kt)("inlineCode",{parentName:"p"},"deno")," CLI."),(0,r.kt)("p",null,"If you want to fix a bug or add a new feature to ",(0,r.kt)("inlineCode",{parentName:"p"},"deno")," this is the repository\nyou want to contribute to."),(0,r.kt)("p",null,"Some systems, including a large part of the Node.js compatibility layer are\nimplemented in JavaScript and TypeScript modules. These are a good place to\nstart if you are looking to make your first contribution."),(0,r.kt)("p",null,"While iterating on such modules it is recommended to include\n",(0,r.kt)("inlineCode",{parentName:"p"},"--features __runtime_js_sources")," in your ",(0,r.kt)("inlineCode",{parentName:"p"},"cargo")," flags. This is a special\ndevelopment mode where the JS/TS sources are not included in the binary but read\nat runtime, meaning the binary will not have to be rebuilt if they are changed."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"# cargo build\ncargo build --features __runtime_js_sources\n\n# cargo run -- run hello.ts\ncargo run --features __runtime_js_sources -- run hello.ts\n\n# cargo test integration::node_unit_tests::os_test\ncargo test --features __runtime_js_sources integration::node_unit_tests::os_test\n")),(0,r.kt)("p",null,"Also remember to reference this feature flag in your editor settings. For VSCode\nusers, combine the following into your workspace file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "settings": {\n    "rust-analyzer.cargo.features": ["__runtime_js_sources"]\n  }\n}\n')),(0,r.kt)("p",null,"Languages: ",(0,r.kt)("strong",{parentName:"p"},"Rust"),", ",(0,r.kt)("strong",{parentName:"p"},"JavaScript"),", ",(0,r.kt)("strong",{parentName:"p"},"TypeScript")),(0,r.kt)("h3",{id:"deno_std"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/deno_std"},(0,r.kt)("inlineCode",{parentName:"a"},"deno_std"))),(0,r.kt)("p",null,"The standard library for Deno."),(0,r.kt)("p",null,"Languages: ",(0,r.kt)("strong",{parentName:"p"},"TypeScript"),", WebAssembly"),(0,r.kt)("h3",{id:"fresh"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/fresh"},(0,r.kt)("inlineCode",{parentName:"a"},"fresh"))),(0,r.kt)("p",null,"The next-gen web framework."),(0,r.kt)("p",null,"Languages: ",(0,r.kt)("strong",{parentName:"p"},"TypeScript"),", TSX"),(0,r.kt)("h3",{id:"deno_lint"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/deno_lint"},(0,r.kt)("inlineCode",{parentName:"a"},"deno_lint"))),(0,r.kt)("p",null,"Linter that powers ",(0,r.kt)("inlineCode",{parentName:"p"},"deno lint")," subcommand."),(0,r.kt)("p",null,"Languages: ",(0,r.kt)("strong",{parentName:"p"},"Rust")),(0,r.kt)("h3",{id:"deno_doc"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/deno_doc"},(0,r.kt)("inlineCode",{parentName:"a"},"deno_doc"))),(0,r.kt)("p",null,"Documentation generator that powers ",(0,r.kt)("inlineCode",{parentName:"p"},"deno doc")," subcommand and\n",(0,r.kt)("a",{parentName:"p",href:"https://doc.deno.land"},"https://doc.deno.land")),(0,r.kt)("p",null,"Languages: ",(0,r.kt)("strong",{parentName:"p"},"Rust")),(0,r.kt)("h3",{id:"docland"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/docland"},(0,r.kt)("inlineCode",{parentName:"a"},"docland"))),(0,r.kt)("p",null,"Frontend for documentation generator: ",(0,r.kt)("a",{parentName:"p",href:"https://doc.deno.land"},"https://doc.deno.land")),(0,r.kt)("p",null,"Languages: ",(0,r.kt)("strong",{parentName:"p"},"TypeScript"),", TSX, CSS"),(0,r.kt)("h3",{id:"rusty_v8"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/rusty_v8"},(0,r.kt)("inlineCode",{parentName:"a"},"rusty_v8"))),(0,r.kt)("p",null,"Rust bindings for the V8 JavaScript engine. Very technical and low-level."),(0,r.kt)("p",null,"Languages: ",(0,r.kt)("strong",{parentName:"p"},"Rust")),(0,r.kt)("h3",{id:"serde_v8"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/deno_core/tree/main/serde_v8"},(0,r.kt)("inlineCode",{parentName:"a"},"serde_v8"))),(0,r.kt)("p",null,"Library that provides bijection layer between V8 and Rust objects. Based on\n",(0,r.kt)("a",{parentName:"p",href:"https://crates.io/crates/serde"},(0,r.kt)("inlineCode",{parentName:"a"},"serde"))," library. Very technical and low-level."),(0,r.kt)("p",null,"Languages: ",(0,r.kt)("strong",{parentName:"p"},"Rust")),(0,r.kt)("h3",{id:"deno_docker"},(0,r.kt)("a",{parentName:"h3",href:"https://github.com/denoland/deno_docker"},(0,r.kt)("inlineCode",{parentName:"a"},"deno_docker"))),(0,r.kt)("p",null,"Official Docker images for Deno."),(0,r.kt)("h2",{id:"general-remarks"},"General remarks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Read the ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/references/contributing/style_guide"},"style guide"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please don't make ",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/benchmarks"},"the benchmarks")," worse.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Ask for help in the ",(0,r.kt)("a",{parentName:"p",href:"https://discord.gg/deno"},"community chat room"),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are going to work on an issue, mention so in the issue's comments\n",(0,r.kt)("em",{parentName:"p"},"before")," you start working on the issue.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"If you are going to work on a new feature, create an issue and discuss with\nother contributors ",(0,r.kt)("em",{parentName:"p"},"before")," you start working on the feature; we appreciate\nall contributions but not all proposed features will be accepted. We don't\nwant you to spend hours working on code that might not be accepted.")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Please be professional in the forums. We follow\n",(0,r.kt)("a",{parentName:"p",href:"https://www.rust-lang.org/policies/code-of-conduct"},"Rust's code of conduct"),"\n(CoC). Have a problem? Email ",(0,r.kt)("a",{parentName:"p",href:"mailto:ry@tinyclouds.org"},"ry@tinyclouds.org"),"."))),(0,r.kt)("h2",{id:"submitting-a-pull-request"},"Submitting a pull request"),(0,r.kt)("p",null,"Before submitting a PR to any of the repos, please make sure the following is\ndone:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Give the PR a descriptive title.")),(0,r.kt)("p",null,"Examples of good PR title:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fix(std/http): Fix race condition in server"),(0,r.kt)("li",{parentName:"ul"},"docs(console): Update docstrings"),(0,r.kt)("li",{parentName:"ul"},"feat(doc): Handle nested re-exports")),(0,r.kt)("p",null,"Examples of bad PR title:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"fix #7123"),(0,r.kt)("li",{parentName:"ul"},"update docs"),(0,r.kt)("li",{parentName:"ul"},"fix bugs")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Ensure there is a related issue and that it is referenced in the PR text."),(0,r.kt)("li",{parentName:"ol"},"Ensure there are tests that cover the changes.")),(0,r.kt)("h2",{id:"submitting-a-pr-to-deno"},"Submitting a PR to ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/denoland/deno"},(0,r.kt)("inlineCode",{parentName:"a"},"deno"))),(0,r.kt)("p",null,"In addition to the above make sure that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"cargo test")," passes - this will run full test suite for ",(0,r.kt)("inlineCode",{parentName:"p"},"deno")," including unit\ntests, integration tests and Web Platform Tests")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"./tools/format.js")," - this will format all of the code to adhere to the\nconsistent style in the repository")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"./tools/lint.js")," - this will check Rust and JavaScript code for common\nmistakes and errors using ",(0,r.kt)("inlineCode",{parentName:"p"},"clippy")," (for Rust) and ",(0,r.kt)("inlineCode",{parentName:"p"},"dlint")," (for JavaScript)"))),(0,r.kt)("h2",{id:"submitting-a-pr-to-deno_std"},"Submitting a PR to ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/denoland/deno_std"},(0,r.kt)("inlineCode",{parentName:"a"},"deno_std"))),(0,r.kt)("p",null,"In addition to the above make sure that:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"All of the code you wrote is in ",(0,r.kt)("inlineCode",{parentName:"p"},"TypeScript")," (ie. don't use ",(0,r.kt)("inlineCode",{parentName:"p"},"JavaScript"),")")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"deno test --unstable --allow-all")," passes - this will run full test suite for\nthe standard library")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"deno fmt")," in the root of repository - this will format all of the code\nto adhere to the consistent style in the repository.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Run ",(0,r.kt)("inlineCode",{parentName:"p"},"deno lint")," - this will check TypeScript code for common mistakes and\nerrors."))),(0,r.kt)("h2",{id:"submitting-a-pr-to-fresh"},"Submitting a PR to ",(0,r.kt)("a",{parentName:"h2",href:"https://github.com/denoland/fresh"},(0,r.kt)("inlineCode",{parentName:"a"},"fresh"))),(0,r.kt)("p",null,"First, please be sure to\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/lucacasonato/deno-puppeteer#installation"},"install Puppeteer"),".\nThen, please ensure ",(0,r.kt)("inlineCode",{parentName:"p"},"deno task ok")," is run and successfully passes."),(0,r.kt)("h2",{id:"documenting-apis"},"Documenting APIs"),(0,r.kt)("p",null,"It is important to document all public APIs and we want to do that inline with\nthe code. This helps ensure that code and documentation are tightly coupled\ntogether."),(0,r.kt)("h3",{id:"javascript-and-typescript"},"JavaScript and TypeScript"),(0,r.kt)("p",null,"All publicly exposed APIs and types, both via the ",(0,r.kt)("inlineCode",{parentName:"p"},"deno")," module as well as the\nglobal/",(0,r.kt)("inlineCode",{parentName:"p"},"window")," namespace should have JSDoc documentation. This documentation is\nparsed and available to the TypeScript compiler, and therefore easy to provide\nfurther downstream. JSDoc blocks come just prior to the statement they apply to\nand are denoted by a leading ",(0,r.kt)("inlineCode",{parentName:"p"},"/**")," before terminating with a ",(0,r.kt)("inlineCode",{parentName:"p"},"*/"),". For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'/** A simple JSDoc comment */\nexport const FOO = "foo";\n')),(0,r.kt)("p",null,"Find more at: ",(0,r.kt)("a",{parentName:"p",href:"https://jsdoc.app/"},"https://jsdoc.app/")),(0,r.kt)("h3",{id:"rust"},"Rust"),(0,r.kt)("p",null,"Use\n",(0,r.kt)("a",{parentName:"p",href:"https://doc.rust-lang.org/rustdoc/how-to-write-documentation.html"},"this guide"),"\nfor writing documentation comments in Rust code."))}c.isMDXComponent=!0}}]);