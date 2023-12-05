"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[5763],{3905:(e,n,a)=>{a.d(n,{Zo:()=>u,kt:()=>m});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function o(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function s(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?o(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=t.createContext({}),p=function(e){var n=t.useContext(l),a=n;return e&&(a="function"==typeof e?e(n):s(s({},n),e)),a},u=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},k=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(a),k=r,m=c["".concat(l,".").concat(k)]||c[k]||d[k]||o;return a?t.createElement(m,s(s({ref:n},u),{},{components:a})):t.createElement(m,s({ref:n},u))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=k;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=a[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,a)}k.displayName="MDXCreateElement"},20647:(e,n,a)=>{a.d(n,{ZP:()=>i});var t=a(87462),r=(a(67294),a(3905));const o={toc:[]},s="wrapper";function i(e){let{components:n,...a}=e;return(0,r.kt)(s,(0,t.Z)({},o,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("admonition",{title:"Deno KV is currently in beta",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Deno KV and related cloud primitive APIs like queues and cron are currently\n",(0,r.kt)("strong",{parentName:"p"},"experimental")," and ",(0,r.kt)("strong",{parentName:"p"},"subject to change"),". While we do our best to ensure data\ndurability, data loss is possible, especially around Deno updates."),(0,r.kt)("p",{parentName:"admonition"},"Deno programs that use KV require the ",(0,r.kt)("inlineCode",{parentName:"p"},"--unstable")," flag when launching the\nprogram, as shown below:"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"deno run -A --unstable my_kv_code.ts\n"))))}i.isMDXComponent=!0},63616:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>p,contentTitle:()=>i,default:()=>k,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var t=a(87462),r=(a(67294),a(3905)),o=a(20647);const s={},i="Deno KV Quick Start",l={unversionedId:"manual/index",id:"manual/index",title:"Deno KV Quick Start",description:"Deno KV is a",source:"@site/kv/manual/index.mdx",sourceDirName:"manual",slug:"/manual/",permalink:"/deno-docs/kv/manual/",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"kvGuideHome",next:{title:"Key Space",permalink:"/deno-docs/kv/manual/key_space"}},p={},u=[{value:"Opening a database",id:"opening-a-database",level:2},{value:"Creating, updating, and reading a key-value pair",id:"creating-updating-and-reading-a-key-value-pair",level:2},{value:"Listing several key-value pairs",id:"listing-several-key-value-pairs",level:2},{value:"Deleting key-value pairs",id:"deleting-key-value-pairs",level:2},{value:"Atomic transactions",id:"atomic-transactions",level:2},{value:"Improve querying with secondary indexes",id:"improve-querying-with-secondary-indexes",level:2},{value:"Production usage",id:"production-usage",level:2},{value:"Next steps",id:"next-steps",level:2}],c={toc:u},d="wrapper";function k(e){let{components:n,...a}=e;return(0,r.kt)(d,(0,t.Z)({},c,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"deno-kv-quick-start"},"Deno KV Quick Start"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Deno KV")," is a\n",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Key%E2%80%93value_database"},"key-value database"),"\nbuilt directly into the Deno runtime, available in the\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/api?unstable&s=Deno.Kv"},(0,r.kt)("inlineCode",{parentName:"a"},"Deno.Kv")," namespace"),". It can be used\nfor many kinds of data storage use cases, but excels at storing simple data\nstructures that benefit from very fast reads and writes. Deno KV is available in\nthe Deno CLI and on ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/on_deploy"},"Deno Deploy"),"."),(0,r.kt)(o.ZP,{mdxType:"Admonition"}),(0,r.kt)("p",null,"Let's walk through the key features of Deno KV."),(0,r.kt)("h2",{id:"opening-a-database"},"Opening a database"),(0,r.kt)("p",null,"In your Deno program, you can get a reference to a KV database using\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/api?unstable=&s=Deno.openKv"},(0,r.kt)("inlineCode",{parentName:"a"},"Deno.openKv()")),". You may pass\nin an optional file system path to where you'd like to store your database,\notherwise one will be created for you based on the current working directory of\nyour script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const kv = await Deno.openKv();\n")),(0,r.kt)("h2",{id:"creating-updating-and-reading-a-key-value-pair"},"Creating, updating, and reading a key-value pair"),(0,r.kt)("p",null,"Data in Deno KV is stored as key-value pairs, much like properties of a\nJavaScript object literal or a\n",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map"},"Map"),".\n",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/key_space"},"Keys")," are represented as an array of JavaScript types, like\n",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"bigint"),", or ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),". Values can be arbitrary JavaScript\nobjects. In this example, we create a key-value pair representing a user's UI\npreferences, and save it with\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.Kv&unstable=&p=prototype.set"},(0,r.kt)("inlineCode",{parentName:"a"},"kv.set()")),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const kv = await Deno.openKv();\n\nconst prefs = {\n  username: "ada",\n  theme: "dark",\n  language: "en-US",\n};\n\nconst result = await kv.set(["preferences", "ada"], prefs);\n')),(0,r.kt)("p",null,"Once a key-value pair is set, you can read it from the database with\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.Kv&unstable=&p=prototype.get"},(0,r.kt)("inlineCode",{parentName:"a"},"kv.get()")),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const entry = await kv.get(["preferences", "ada"]);\nconsole.log(entry.key);\nconsole.log(entry.value);\nconsole.log(entry.versionstamp);\n')),(0,r.kt)("p",null,"Both ",(0,r.kt)("inlineCode",{parentName:"p"},"get")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"list")," ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/operations"},"operations")," return a\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.KvEntry&unstable="},"KvEntry")," object with the\nfollowing properties:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"key")," - the array key you used to set the value"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"value")," - the JavaScript object you set for this key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"versionstamp")," - a generated value used to determine if a key has been\nupdated.")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"set")," operation is also used to update objects that already exist for a\ngiven key. When a key's value is updated, its ",(0,r.kt)("inlineCode",{parentName:"p"},"versionstamp")," will change to a\nnew generated value."),(0,r.kt)("h2",{id:"listing-several-key-value-pairs"},"Listing several key-value pairs"),(0,r.kt)("p",null,"To get values for a finite number of keys, you may use\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.Kv&unstable=&p=prototype.getMany"},(0,r.kt)("inlineCode",{parentName:"a"},"kv.getMany()")),".\nPass in several keys as arguments, and you'll receive an array of values for\neach key. Note that ",(0,r.kt)("strong",{parentName:"p"},"values and versionstamps can be ",(0,r.kt)("inlineCode",{parentName:"strong"},"null"))," if no value\nexists for the given key(s)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const kv = await Deno.openKv();\nconst result = await kv.getMany([\n  ["preferences", "ada"],\n  ["preferences", "grace"],\n]);\nresult[0].key; // ["preferences", "ada"]\nresult[0].value; // { ... }\nresult[0].versionstamp; // "00000000000000010000"\nresult[1].key; // ["preferences", "grace"]\nresult[1].value; // null\nresult[1].versionstamp; // null\n')),(0,r.kt)("p",null,"Often, it is useful to retrieve a list of key-value pairs from all keys that\nshare a given prefix. This type of operation is possible using\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.Kv&unstable=&p=prototype.list"},(0,r.kt)("inlineCode",{parentName:"a"},"kv.list()")),". In\nthis example, we get a list of key-value pairs that share the ",(0,r.kt)("inlineCode",{parentName:"p"},'"preferences"'),"\nprefix."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const kv = await Deno.openKv();\nconst entries = kv.list({ prefix: ["preferences"] });\nfor await (const entry of entries) {\n  console.log(entry.key); // ["preferences", "ada"]\n  console.log(entry.value); // { ... }\n  console.log(entry.versionstamp); // "00000000000000010000"\n}\n')),(0,r.kt)("p",null,"Returned keys are ordered lexicographically based on the next component of the\nkey after the prefix. So KV pairs with these keys:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'["preferences", "ada"]')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'["preferences", "bob"]')),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},'["preferences", "cassie"]'))),(0,r.kt)("p",null,"Will be returned in that order by ",(0,r.kt)("inlineCode",{parentName:"p"},"kv.list()"),"."),(0,r.kt)("p",null,"Read operations can either be performed in\n",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/operations"},(0,r.kt)("strong",{parentName:"a"},"strong or eventual consistency mode")),". Strong consistency\nmode guarantees that the read operation will return the most recently written\nvalue. Eventual consistency mode may return a stale value, but is faster. By\ncontrast, writes are always performed in strong consistency mode."),(0,r.kt)("h2",{id:"deleting-key-value-pairs"},"Deleting key-value pairs"),(0,r.kt)("p",null,"You can delete a key from the database using\n",(0,r.kt)("a",{parentName:"p",href:"https://deno.land/api?s=Deno.Kv&unstable=&p=prototype.delete"},(0,r.kt)("inlineCode",{parentName:"a"},"kv.delete()")),".\nNo action is taken if no value is found for the given key."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const kv = await Deno.openKv();\nawait kv.delete(["preferences", "alan"]);\n')),(0,r.kt)("h2",{id:"atomic-transactions"},"Atomic transactions"),(0,r.kt)("p",null,"Deno KV is capable of executing ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/transactions"},"atomic transactions"),", which\nenables you to conditionally execute one or many data manipulation operations at\nonce. In the following example, we create a new preferences object only if it\nhasn't been created already."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const kv = await Deno.openKv();\n\nconst key = ["preferences", "alan"];\nconst value = {\n  username: "alan",\n  theme: "light",\n  language: "en-GB",\n};\n\nconst res = await kv.atomic()\n  .check({ key, versionstamp: null }) // `null` versionstamps mean \'no value\'\n  .set(key, value)\n  .commit();\nif (res.ok) {\n  console.log("Preferences did not yet exist. Inserted!");\n} else {\n  console.error("Preferences already exist.");\n}\n')),(0,r.kt)("p",null,"Learn more about transactions in Deno KV ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/transactions"},"here"),"."),(0,r.kt)("h2",{id:"improve-querying-with-secondary-indexes"},"Improve querying with secondary indexes"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/secondary_indexes"},"Secondary indexes")," store the same data by multiple\nkeys, allowing for simpler queries of the data you need. Let's say that we need\nto be able to access user preferences by both username AND email. To enable\nthis, you could provide a function that wraps the logic to save the preferences\nto create two indexes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'const kv = await Deno.openKv();\n\nasync function savePreferences(prefs) {\n  const key = ["preferences", prefs.username];\n\n  // Set the primary key\n  const r = await kv.set(key, prefs);\n\n  // Set the secondary key\'s value to be the primary key\n  await kv.set(["preferencesByEmail", prefs.email], key);\n\n  return r;\n}\n\nasync function getByUsername(username) {\n  // Use as before...\n  const r = await kv.get(["preferences", username]);\n  return r;\n}\n\nasync function getByEmail(email) {\n  // Look up the key by email, then second lookup for actual data\n  const r1 = await kv.get(["preferencesByEmail", email]);\n  const r2 = await kv.get(r1.value);\n  return r2;\n}\n')),(0,r.kt)("p",null,"Learn more about ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/secondary_indexes"},"secondary indexes in the manual here"),"."),(0,r.kt)("h2",{id:"production-usage"},"Production usage"),(0,r.kt)("p",null,"Deno KV is available for use in live applications on\n",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/on_deploy"},"Deno Deploy"),". In production, Deno KV is backed by\n",(0,r.kt)("a",{parentName:"p",href:"https://www.foundationdb.org/"},"FoundationDB"),", the open source key-value store\ncreated by Apple."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"No additional configuration is necessary")," to run your Deno programs that use\nKV on Deploy - a new Deploy database will be provisioned for you when required\nby your code. Learn more about Deno KV on Deno Deploy ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/on_deploy"},"here"),"."),(0,r.kt)("h2",{id:"next-steps"},"Next steps"),(0,r.kt)("p",null,"At this point, you're just beginning to scratch the surface with Deno KV. Be\nsure to check out our guide on the ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/manual/key_space"},"Deno KV key space"),", and a\ncollection of ",(0,r.kt)("a",{parentName:"p",href:"/deno-docs/kv/tutorials/"},"tutorials and example applications")," here."))}k.isMDXComponent=!0}}]);