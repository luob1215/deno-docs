"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[6896],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var s=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,s,a=function(e,t){if(null==e)return{};var n,s,a={},r=Object.keys(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(s=0;s<r.length;s++)n=r[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=s.createContext({}),c=function(e){var t=s.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return s.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},m=s.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||r;return n?s.createElement(h,o(o({ref:t},p),{},{components:n})):s.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return s.createElement.apply(null,o)}return s.createElement.apply(null,n)}m.displayName="MDXCreateElement"},76540:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var s=n(87462),a=(n(67294),n(3905));const r={},o="Assertions",i={unversionedId:"manual/basics/testing/assertions",id:"manual/basics/testing/assertions",title:"Assertions",description:"To help developers write tests the Deno standard library comes with a built-in",source:"@site/runtime/manual/basics/testing/assertions.md",sourceDirName:"manual/basics/testing",slug:"/manual/basics/testing/assertions",permalink:"/runtime/manual/basics/testing/assertions",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Testing in Deno",permalink:"/runtime/manual/basics/testing/"},next:{title:"Test Coverage",permalink:"/runtime/manual/basics/testing/coverage"}},l={},c=[{value:"Assert",id:"assert",level:2},{value:"Exists",id:"exists",level:2},{value:"Equality",id:"equality",level:2},{value:"Equality for numbers",id:"equality-for-numbers",level:3},{value:"Instance types",id:"instance-types",level:3},{value:"Contains",id:"contains",level:2},{value:"Regex",id:"regex",level:2},{value:"Object",id:"object",level:2},{value:"Throws",id:"throws",level:2},{value:"Custom Messages",id:"custom-messages",level:2},{value:"Custom Tests",id:"custom-tests",level:2}],p={toc:c},u="wrapper";function d(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"assertions"},"Assertions"),(0,a.kt)("p",null,"To help developers write tests the Deno standard library comes with a built-in\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/std/assert/mod.ts"},"assertions module")," which can be imported\nfrom ",(0,a.kt)("inlineCode",{parentName:"p"},"https://deno.land/std/assert/mod.ts"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'import { assert } from "https://deno.land/std@0.208.0/assert/mod.ts";\n\nDeno.test("Hello Test", () => {\n  assert("Hello");\n});\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Some popular assertion libraries, like ",(0,a.kt)("a",{parentName:"p",href:"https://www.chaijs.com/"},"Chai"),", can\nbe used in Deno too, for example usage see\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/std/testing/chai_example.ts"},"https://deno.land/std/testing/chai_example.ts"),".")),(0,a.kt)("p",null,"The assertions module provides 14 assertions:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'assert(expr: unknown, msg = ""): asserts expr')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertEquals(actual: unknown, expected: unknown, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertExists(actual: unknown, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertNotEquals(actual: unknown, expected: unknown, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertStrictEquals(actual: unknown, expected: unknown, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertAlmostEquals(actual: number, expected: number, epsilon = 1e-7, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertInstanceOf(actual: unknown, expectedType: unknown, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertStringIncludes(actual: string, expected: string, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertArrayIncludes(actual: unknown[], expected: unknown[], msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertMatch(actual: string, expected: RegExp, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertNotMatch(actual: string, expected: RegExp, msg?: string): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertObjectMatch( actual: Record<PropertyKey, unknown>, expected: Record<PropertyKey, unknown>): void")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertThrows(fn: () => void, ErrorClass?: Constructor, msgIncludes?: string | undefined, msg?: string | undefined): Error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"assertRejects(fn: () => Promise<unknown>, ErrorClass?: Constructor, msgIncludes?: string | undefined, msg?: string | undefined): Promise<void>"))),(0,a.kt)("p",null,"In addition to the above assertions, the\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/std/testing/snapshot.ts"},"snapshot module")," also exposes an\n",(0,a.kt)("inlineCode",{parentName:"p"},"assertSnapshot")," function. The documentation for this module can be found\n",(0,a.kt)("a",{parentName:"p",href:"/runtime/manual/basics/testing/snapshot_testing"},"here"),"."),(0,a.kt)("h2",{id:"assert"},"Assert"),(0,a.kt)("p",null,"The assert method is a simple 'truthy' assertion and can be used to assert any\nvalue which can be inferred as true."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert", () => {\n  assert(1);\n  assert("Hello");\n  assert(true);\n});\n')),(0,a.kt)("h2",{id:"exists"},"Exists"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"assertExists")," can be used to check if a value is not ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"undefined"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'assertExists("Denosaurus");\nDeno.test("Test Assert Exists", () => {\n  assertExists("Denosaurus");\n  assertExists(false);\n  assertExists(0);\n});\n')),(0,a.kt)("h2",{id:"equality"},"Equality"),(0,a.kt)("p",null,"There are three equality assertions available, ",(0,a.kt)("inlineCode",{parentName:"p"},"assertEquals()"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"assertNotEquals()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"assertStrictEquals()"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"assertEquals()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"assertNotEquals()")," methods provide a general equality\ncheck and are capable of asserting equality between primitive types and objects."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert Equals", () => {\n  assertEquals(1, 1);\n  assertEquals("Hello", "Hello");\n  assertEquals(true, true);\n  assertEquals(undefined, undefined);\n  assertEquals(null, null);\n  assertEquals(new Date(), new Date());\n  assertEquals(new RegExp("abc"), new RegExp("abc"));\n\n  class Foo {}\n  const foo1 = new Foo();\n  const foo2 = new Foo();\n\n  assertEquals(foo1, foo2);\n});\n\nDeno.test("Test Assert Not Equals", () => {\n  assertNotEquals(1, 2);\n  assertNotEquals("Hello", "World");\n  assertNotEquals(true, false);\n  assertNotEquals(undefined, "");\n  assertNotEquals(new Date(), Date.now());\n  assertNotEquals(new RegExp("abc"), new RegExp("def"));\n});\n')),(0,a.kt)("p",null,"By contrast ",(0,a.kt)("inlineCode",{parentName:"p"},"assertStrictEquals()")," provides a simpler, stricter equality check\nbased on the ",(0,a.kt)("inlineCode",{parentName:"p"},"===")," operator. As a result it will not assert two instances of\nidentical objects as they won't be referentially the same."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert Strict Equals", () => {\n  assertStrictEquals(1, 1);\n  assertStrictEquals("Hello", "Hello");\n  assertStrictEquals(true, true);\n  assertStrictEquals(undefined, undefined);\n});\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"assertStrictEquals()")," assertion is best used when you wish to make a\nprecise check against two primitive types."),(0,a.kt)("h3",{id:"equality-for-numbers"},"Equality for numbers"),(0,a.kt)("p",null,"When testing equality between numbers, it is important to keep in mind that some\nof them cannot be accurately depicted by IEEE-754 double-precision\nfloating-point representation."),(0,a.kt)("p",null,"That's especially true when working with decimal numbers, where\n",(0,a.kt)("inlineCode",{parentName:"p"},"assertStrictEquals()")," may work in some cases but not in others:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  assertStrictEquals,\n  assertThrows,\n} from "https://deno.land/std@0.208.0/assert/mod.ts";\n\nDeno.test("Test Assert Strict Equals with float numbers", () => {\n  assertStrictEquals(0.25 + 0.25, 0.25);\n  assertThrows(() => assertStrictEquals(0.1 + 0.2, 0.3));\n  //0.1 + 0.2 will be stored as 0.30000000000000004 instead of 0.3\n});\n')),(0,a.kt)("p",null,"Instead, ",(0,a.kt)("inlineCode",{parentName:"p"},"assertAlmostEquals()")," provides a way to test that given numbers are\nclose enough to be considered equals. Default tolerance is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"1e-7")," though\nit is possible to change it by passing a third optional parameter."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import {\n  assertAlmostEquals,\n  assertThrows,\n} from "https://deno.land/std@0.208.0/assert/mod.ts";\n\nDeno.test("Test Assert Almost Equals", () => {\n  assertAlmostEquals(0.1 + 0.2, 0.3);\n  assertAlmostEquals(0.1 + 0.2, 0.3, 1e-16);\n  assertThrows(() => assertAlmostEquals(0.1 + 0.2, 0.3, 1e-17));\n});\n')),(0,a.kt)("h3",{id:"instance-types"},"Instance types"),(0,a.kt)("p",null,"To check if an object is an instance of a specific constructor, you can use\n",(0,a.kt)("inlineCode",{parentName:"p"},"assertInstanceOf()"),". This has the added benefit that it lets TypeScript know\nthe passed in variable has a specific type:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { assertInstanceOf } from "https://deno.land/std@0.208.0/assert/mod.ts";\n\nDeno.test("Test Assert Instance Type", () => {\n  const variable = new Date() as unknown;\n\n  assertInstanceOf(variable, Date);\n\n  // This won\'t cause type errors now that\n  // it\'s type has been asserted against.\n  variable.getDay();\n});\n')),(0,a.kt)("h2",{id:"contains"},"Contains"),(0,a.kt)("p",null,"There are two methods available to assert a value contains a value,\n",(0,a.kt)("inlineCode",{parentName:"p"},"assertStringIncludes()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"assertArrayIncludes()"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"assertStringIncludes()")," assertion does a simple includes check on a string\nto see if it contains the expected string."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert String Contains", () => {\n  assertStringIncludes("Hello World", "Hello");\n});\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"assertArrayIncludes()")," assertion is slightly more advanced and can find\nboth a value within an array and an array of values within an array."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert Array Contains", () => {\n  assertArrayIncludes([1, 2, 3], [1]);\n  assertArrayIncludes([1, 2, 3], [1, 2]);\n  assertArrayIncludes(Array.from("Hello World"), Array.from("Hello"));\n});\n')),(0,a.kt)("h2",{id:"regex"},"Regex"),(0,a.kt)("p",null,"You can assert regular expressions via ",(0,a.kt)("inlineCode",{parentName:"p"},"assertMatch()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"assertNotMatch()"),"\nassertions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert Match", () => {\n  assertMatch("abcdefghi", new RegExp("def"));\n\n  const basicUrl = new RegExp("^https?://[a-z.]+.com$");\n  assertMatch("https://www.google.com", basicUrl);\n  assertMatch("http://facebook.com", basicUrl);\n});\n\nDeno.test("Test Assert Not Match", () => {\n  assertNotMatch("abcdefghi", new RegExp("jkl"));\n\n  const basicUrl = new RegExp("^https?://[a-z.]+.com$");\n  assertNotMatch("https://deno.land/", basicUrl);\n});\n')),(0,a.kt)("h2",{id:"object"},"Object"),(0,a.kt)("p",null,"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"assertObjectMatch")," to check that a JavaScript object matches a subset of\nthe properties of an object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// Simple subset\nassertObjectMatch(\n  { foo: true, bar: false },\n  {\n    foo: true,\n  },\n);\n")),(0,a.kt)("h2",{id:"throws"},"Throws"),(0,a.kt)("p",null,"There are two ways to assert whether something throws an error in Deno,\n",(0,a.kt)("inlineCode",{parentName:"p"},"assertThrows()")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"assertRejects()"),". Both assertions allow you to check an\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error"},"Error"),"\nhas been thrown, the type of error thrown and what the message was."),(0,a.kt)("p",null,"The difference between the two assertions is ",(0,a.kt)("inlineCode",{parentName:"p"},"assertThrows()")," accepts a standard\nfunction and ",(0,a.kt)("inlineCode",{parentName:"p"},"assertRejects()")," accepts a function which returns a\n",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise"},"Promise"),"."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"assertThrows()")," assertion will check an error has been thrown, and\noptionally will check the thrown error is of the correct type, and assert the\nerror message is as expected."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert Throws", () => {\n  assertThrows(\n    () => {\n      throw new Error("Panic!");\n    },\n    Error,\n    "Panic!",\n  );\n});\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"assertRejects()")," assertion is a little more complicated, mainly because it\ndeals with Promises. But basically it will catch thrown errors or rejections in\nPromises. You can also optionally check for the error type and error message.\nThis can be used similar to ",(0,a.kt)("inlineCode",{parentName:"p"},"assertThrows()")," but with async functions."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert Throws Async", async () => {\n  await assertRejects(\n    () => {\n      return new Promise(() => {\n        throw new Error("Panic! Threw Error");\n      });\n    },\n    Error,\n    "Panic! Threw Error",\n  );\n\n  await assertRejects(\n    () => {\n      return Promise.reject(new Error("Panic! Reject Error"));\n    },\n    Error,\n    "Panic! Reject Error",\n  );\n});\n')),(0,a.kt)("h2",{id:"custom-messages"},"Custom Messages"),(0,a.kt)("p",null,"Each of Deno's built-in assertions allow you to overwrite the standard CLI error\nmessage if you wish. For instance this example will output \"Values Don't Match!\"\nrather than the standard CLI error message."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert Equal Fail Custom Message", () => {\n  assertEquals(1, 2, "Values Don\'t Match!");\n});\n')),(0,a.kt)("h2",{id:"custom-tests"},"Custom Tests"),(0,a.kt)("p",null,"While Deno comes with powerful\n",(0,a.kt)("a",{parentName:"p",href:"https://deno.land/std/assert/mod.ts"},"assertions modules")," but there is always\nsomething specific to the project you can add. Creating\n",(0,a.kt)("inlineCode",{parentName:"p"},"custom assertion function")," can improve readability and reduce the amount of\ncode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},'import { AssertionError } from "https://deno.land/std@0.208.0/assert/mod.ts";\n\nfunction assertPowerOf(actual: number, expected: number, msg?: string): void {\n  let received = actual;\n  while (received % expected === 0) received = received / expected;\n  if (received !== 1) {\n    if (!msg) {\n      msg = `actual: "${actual}" expected to be a power of : "${expected}"`;\n    }\n    throw new AssertionError(msg);\n  }\n}\n')),(0,a.kt)("p",null,"Use this matcher in your code like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'Deno.test("Test Assert PowerOf", () => {\n  assertPowerOf(8, 2);\n  assertPowerOf(11, 4);\n});\n')))}d.isMDXComponent=!0}}]);