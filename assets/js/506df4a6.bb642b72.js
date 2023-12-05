"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[5721],{3905:(t,n,e)=>{e.d(n,{Zo:()=>c,kt:()=>y});var s=e(67294);function d(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function o(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);n&&(s=s.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,s)}return e}function a(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?o(Object(e),!0).forEach((function(n){d(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):o(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function p(t,n){if(null==t)return{};var e,s,d=function(t,n){if(null==t)return{};var e,s,d={},o=Object.keys(t);for(s=0;s<o.length;s++)e=o[s],n.indexOf(e)>=0||(d[e]=t[e]);return d}(t,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(s=0;s<o.length;s++)e=o[s],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(d[e]=t[e])}return d}var r=s.createContext({}),l=function(t){var n=s.useContext(r),e=n;return t&&(e="function"==typeof t?t(n):a(a({},n),t)),e},c=function(t){var n=l(t.components);return s.createElement(r.Provider,{value:n},t.children)},i="mdxType",h={inlineCode:"code",wrapper:function(t){var n=t.children;return s.createElement(s.Fragment,{},n)}},u=s.forwardRef((function(t,n){var e=t.components,d=t.mdxType,o=t.originalType,r=t.parentName,c=p(t,["components","mdxType","originalType","parentName"]),i=l(e),u=d,y=i["".concat(r,".").concat(u)]||i[u]||h[u]||o;return e?s.createElement(y,a(a({ref:n},c),{},{components:e})):s.createElement(y,a({ref:n},c))}));function y(t,n){var e=arguments,d=n&&n.mdxType;if("string"==typeof t||d){var o=e.length,a=new Array(o);a[0]=u;var p={};for(var r in n)hasOwnProperty.call(n,r)&&(p[r]=n[r]);p.originalType=t,p[i]="string"==typeof t?t:d,a[1]=p;for(var l=2;l<o;l++)a[l]=e[l];return s.createElement.apply(null,a)}return s.createElement.apply(null,e)}u.displayName="MDXCreateElement"},8039:(t,n,e)=>{e.r(n),e.d(n,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var s=e(87462),d=(e(67294),e(3905));const o={},a="Dependency Inspector",p={unversionedId:"manual/tools/dependency_inspector",id:"manual/tools/dependency_inspector",title:"Dependency Inspector",description:"deno info [URL] will inspect an ES module and all of its dependencies.",source:"@site/runtime/manual/tools/dependency_inspector.md",sourceDirName:"manual/tools",slug:"/manual/tools/dependency_inspector",permalink:"/deno-docs/runtime/manual/tools/dependency_inspector",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Compiling Executables",permalink:"/deno-docs/runtime/manual/tools/compiler"},next:{title:"Documentation Generator",permalink:"/deno-docs/runtime/manual/tools/documentation_generator"}},r={},l=[{value:"Cache location",id:"cache-location",level:2}],c={toc:l},i="wrapper";function h(t){let{components:n,...e}=t;return(0,d.kt)(i,(0,s.Z)({},c,e,{components:n,mdxType:"MDXLayout"}),(0,d.kt)("h1",{id:"dependency-inspector"},"Dependency Inspector"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"deno info [URL]")," will inspect an ES module and all of its dependencies."),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-shell"},"deno info https://deno.land/std@0.178.0/http/file_server.ts\nDownload https://deno.land/std@0.178.0/http/file_server.ts\n...\nlocal: /home/deno/.cache/deno/deps/https/deno.land/cca7626bf190e39a7fec3bc79f68f356f8010f6d78afdcb43daae4accbfd4155\ntype: TypeScript\ndependencies: 52 unique\nsize: 651.67KB\n\nhttps://deno.land/std@0.178.0/http/file_server.ts (19.08KB)\n\u251c\u2500\u252c https://deno.land/std@0.178.0/path/mod.ts (1.32KB)\n\u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/_util/os.ts (644B)\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/path/win32.ts (27.84KB)\n\u2502 \u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/_interface.ts (728B)\n\u2502 \u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/_constants.ts (1.97KB)\n\u2502 \u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/path/_util.ts (4.9KB)\n\u2502 \u2502 \u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/_interface.ts *\n\u2502 \u2502 \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/path/_constants.ts *\n\u2502 \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/_util/asserts.ts (854B)\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/path/posix.ts (13.53KB)\n\u2502 \u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/_interface.ts *\n\u2502 \u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/_constants.ts *\n\u2502 \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/path/_util.ts *\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/path/common.ts (1.16KB)\n\u2502 \u2502 \u2514\u2500\u252c https://deno.land/std@0.178.0/path/separator.ts (259B)\n\u2502 \u2502   \u2514\u2500\u2500 https://deno.land/std@0.178.0/_util/os.ts *\n\u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/separator.ts *\n\u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/_interface.ts *\n\u2502 \u2514\u2500\u252c https://deno.land/std@0.178.0/path/glob.ts (12.39KB)\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/_util/os.ts *\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/_util/os.ts *\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/separator.ts *\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/path/win32.ts *\n\u2502   \u2514\u2500\u2500 https://deno.land/std@0.178.0/path/posix.ts *\n\u251c\u2500\u252c https://deno.land/std@0.178.0/media_types/content_type.ts (2.78KB)\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/media_types/parse_media_type.ts (3.39KB)\n\u2502 \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/media_types/_util.ts (3.27KB)\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/media_types/type_by_extension.ts (906B)\n\u2502 \u2502 \u2514\u2500\u252c https://deno.land/std@0.178.0/media_types/_db.ts (1.25KB)\n\u2502 \u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/media_types/vendor/mime-db.v1.52.0.ts (182.13KB)\n\u2502 \u2502   \u2514\u2500\u2500 https://deno.land/std@0.178.0/media_types/_util.ts *\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/media_types/get_charset.ts (1.17KB)\n\u2502 \u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/media_types/parse_media_type.ts *\n\u2502 \u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/media_types/_util.ts *\n\u2502 \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/media_types/_db.ts *\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/media_types/format_media_type.ts (1.72KB)\n\u2502 \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/media_types/_util.ts *\n\u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/media_types/_db.ts *\n\u251c\u2500\u252c https://deno.land/std@0.178.0/http/server.ts (21.18KB)\n\u2502 \u2514\u2500\u252c https://deno.land/std@0.178.0/async/mod.ts (465B)\n\u2502   \u251c\u2500\u252c https://deno.land/std@0.178.0/async/abortable.ts (3.95KB)\n\u2502   \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/async/deferred.ts (1.51KB)\n\u2502   \u251c\u2500\u252c https://deno.land/std@0.178.0/async/deadline.ts (1.04KB)\n\u2502   \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/async/deferred.ts *\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/async/debounce.ts (2.18KB)\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/async/deferred.ts *\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/async/delay.ts (1.8KB)\n\u2502   \u251c\u2500\u252c https://deno.land/std@0.178.0/async/mux_async_iterator.ts (2.45KB)\n\u2502   \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/async/deferred.ts *\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/async/pool.ts (3.13KB)\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/async/tee.ts (2.1KB)\n\u2502   \u2514\u2500\u2500 https://deno.land/std@0.178.0/async/retry.ts (2.35KB)\n\u251c\u2500\u2500 https://deno.land/std@0.178.0/http/http_status.ts (9.96KB)\n\u251c\u2500\u252c https://deno.land/std@0.178.0/flags/mod.ts (22.05KB)\n\u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/_util/asserts.ts *\n\u251c\u2500\u2500 https://deno.land/std@0.178.0/_util/asserts.ts *\n\u251c\u2500\u2500 https://deno.land/std@0.178.0/fmt/colors.ts (12.13KB)\n\u251c\u2500\u252c https://deno.land/std@0.178.0/http/util.ts (1020B)\n\u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/http/http_status.ts *\n\u2502 \u2514\u2500\u252c https://deno.land/std@0.178.0/collections/deep_merge.ts (10.98KB)\n\u2502   \u2514\u2500\u2500 https://deno.land/std@0.178.0/collections/_utils.ts (790B)\n\u251c\u2500\u252c https://deno.land/std@0.178.0/crypto/crypto.ts (11.88KB)\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/crypto/_wasm/mod.ts (1.11KB)\n\u2502 \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/crypto/_wasm/lib/deno_std_wasm_crypto.generated.mjs (238.72KB)\n\u2502 \u251c\u2500\u252c https://deno.land/std@0.178.0/crypto/timing_safe_equal.ts (983B)\n\u2502 \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/_util/asserts.ts *\n\u2502 \u2514\u2500\u252c https://deno.land/std@0.178.0/crypto/_fnv/mod.ts (621B)\n\u2502   \u251c\u2500\u252c https://deno.land/std@0.178.0/crypto/_fnv/fnv32.ts (825B)\n\u2502   \u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/crypto/_fnv/util.ts (1.44KB)\n\u2502   \u2514\u2500\u252c https://deno.land/std@0.178.0/crypto/_fnv/fnv64.ts (1.02KB)\n\u2502     \u2514\u2500\u2500 https://deno.land/std@0.178.0/crypto/_fnv/util.ts *\n\u251c\u2500\u252c https://deno.land/std@0.178.0/crypto/to_hash_string.ts (1021B)\n\u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/encoding/hex.ts (2.23KB)\n\u2502 \u2514\u2500\u2500 https://deno.land/std@0.178.0/encoding/base64.ts (2.48KB)\n\u251c\u2500\u252c https://deno.land/std@0.178.0/crypto/_util.ts (1.06KB)\n\u2502 \u2514\u2500\u252c https://deno.land/std@0.178.0/crypto/mod.ts (439B)\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/crypto/crypto.ts *\n\u2502   \u251c\u2500\u252c https://deno.land/std@0.178.0/crypto/keystack.ts (5.37KB)\n\u2502   \u2502 \u251c\u2500\u2500 https://deno.land/std@0.178.0/crypto/timing_safe_equal.ts *\n\u2502   \u2502 \u2514\u2500\u252c https://deno.land/std@0.178.0/encoding/base64url.ts (1.95KB)\n\u2502   \u2502   \u2514\u2500\u2500 https://deno.land/std@0.178.0/encoding/base64.ts *\n\u2502   \u251c\u2500\u2500 https://deno.land/std@0.178.0/crypto/timing_safe_equal.ts *\n\u2502   \u2514\u2500\u2500 https://deno.land/std@0.178.0/crypto/to_hash_string.ts *\n\u2514\u2500\u2500 https://deno.land/std@0.178.0/version.ts (371B)\n")),(0,d.kt)("p",null,"Dependency inspector works with any local or remote ES modules."),(0,d.kt)("h2",{id:"cache-location"},"Cache location"),(0,d.kt)("p",null,(0,d.kt)("inlineCode",{parentName:"p"},"deno info")," can be used to display information about cache location:"),(0,d.kt)("pre",null,(0,d.kt)("code",{parentName:"pre",className:"language-shell"},'deno info\nDENO_DIR location: "/Users/deno/Library/Caches/deno"\nRemote modules cache: "/Users/deno/Library/Caches/deno/deps"\nTypeScript compiler cache: "/Users/deno/Library/Caches/deno/gen"\n')))}h.isMDXComponent=!0}}]);