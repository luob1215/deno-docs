"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[9008],{3905:(t,e,n)=>{n.d(e,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},u="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),u=d(n),c=r,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||l;return n?a.createElement(k,o(o({ref:e},s),{},{components:n})):a.createElement(k,o({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=c;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[u]="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},21707:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const l={},o="Read-Eval-Print-Loop",i={unversionedId:"manual/tools/repl",id:"manual/tools/repl",title:"Read-Eval-Print-Loop",description:"deno repl starts a read-eval-print-loop, which lets you interactively build up",source:"@site/runtime/manual/tools/repl.md",sourceDirName:"manual/tools",slug:"/manual/tools/repl",permalink:"/deno-docs/runtime/manual/tools/repl",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Linter",permalink:"/deno-docs/runtime/manual/tools/linter"},next:{title:"Script Installer",permalink:"/deno-docs/runtime/manual/tools/script_installer"}},p={},d=[{value:"Special variables",id:"special-variables",level:2},{value:"Special functions",id:"special-functions",level:2},{value:"<code>--eval</code> flag",id:"--eval-flag",level:2},{value:"<code>--eval-file</code> flag",id:"--eval-file-flag",level:2},{value:"Relative Import Path Resolution",id:"relative-import-path-resolution",level:3},{value:"Tab completions",id:"tab-completions",level:2},{value:"Keyboard shortcuts",id:"keyboard-shortcuts",level:2},{value:"<code>DENO_REPL_HISTORY</code>",id:"deno_repl_history",level:2}],s={toc:d},u="wrapper";function m(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"read-eval-print-loop"},"Read-Eval-Print-Loop"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"deno repl")," starts a read-eval-print-loop, which lets you interactively build up\nprogram state in the global context, it is especially useful for quick\nprototyping and checking snippets of code."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f Deno REPL supports JavaScript as well as TypeScript, however TypeScript code\nis not type-checked, instead it is transpiled to JavaScript behind the scenes.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u26a0\ufe0f To make it easier to copy-paste code samples, Deno REPL supports import and\nexport declarations. It means that you can paste code containing\n",(0,r.kt)("inlineCode",{parentName:"p"},"import ... from ...;"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"export class ...")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"export function ...")," and it\nwill work as if you were executing a regular ES module.")),(0,r.kt)("h2",{id:"special-variables"},"Special variables"),(0,r.kt)("p",null,"The REPL provides a couple of special variables, that are always available:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Identifier"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_"),(0,r.kt)("td",{parentName:"tr",align:null},"Yields the last evaluated expression")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"_error"),(0,r.kt)("td",{parentName:"tr",align:null},"Yields the last thrown error")))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'Deno 1.14.3\nexit using ctrl+d or close()\n> "hello world!"\n"hello world!"\n> _\n"hello world!"\n> const foo = "bar";\nundefined\n> _\nundefined\n')),(0,r.kt)("h2",{id:"special-functions"},"Special functions"),(0,r.kt)("p",null,"The REPL provides several functions in the global scope:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Function"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"clear()"),(0,r.kt)("td",{parentName:"tr",align:null},"Clears the entire terminal screen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"close()"),(0,r.kt)("td",{parentName:"tr",align:null},"Close the current REPL session")))),(0,r.kt)("h2",{id:"--eval-flag"},(0,r.kt)("inlineCode",{parentName:"h2"},"--eval")," flag"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--eval")," flag allows you to run some code in the runtime before you are dropped\ninto the REPL. This is useful for importing some code you commonly use in the\nREPL, or modifying the runtime in some way:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ deno repl --allow-net --eval 'import { assert } from \"https://deno.land/std/assert/mod.ts\"'\nDeno 1.36.0\nexit using ctrl+d, ctrl+c, or close()\n> assert(true)\nundefined\n> assert(false)\nUncaught AssertionError\n    at assert (https://deno.land/std@0.197.0/assert/assert.ts:7:11)\n    at <anonymous>:2:1\n")),(0,r.kt)("h2",{id:"--eval-file-flag"},(0,r.kt)("inlineCode",{parentName:"h2"},"--eval-file")," flag"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"--eval-file")," flag allows you to run code from specified files before you are\ndropped into the REPL. Like the ",(0,r.kt)("inlineCode",{parentName:"p"},"--eval")," flag, this is useful for importing code\nyou commonly use in the REPL, or modifying the runtime in some way."),(0,r.kt)("p",null,"Files can be specified as paths or URLs. URL files are cached and can be\nreloaded via the ",(0,r.kt)("inlineCode",{parentName:"p"},"--reload")," flag."),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"--eval")," is also specified, then ",(0,r.kt)("inlineCode",{parentName:"p"},"--eval-file")," files are run before the\n",(0,r.kt)("inlineCode",{parentName:"p"},"--eval")," code."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ deno repl --eval-file=https://examples.deno.land/hello-world.ts,https://deno.land/std/encoding/ascii85.ts\nDownload https://examples.deno.land/hello-world.ts\nHello, World!\nDownload https://deno.land/std/encoding/ascii85.ts\nDeno 1.20.5\nexit using ctrl+d or close()\n> rfc1924 // local (not exported) variable defined in ascii85.ts\n"0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&()*+-;<=>?@^_`{|}~"\n')),(0,r.kt)("h3",{id:"relative-import-path-resolution"},"Relative Import Path Resolution"),(0,r.kt)("p",null,"If ",(0,r.kt)("inlineCode",{parentName:"p"},"--eval-file"),' specifies a code file that contains relative imports, then the\nruntime will try to resolve the imports relative to the current working\ndirectory. It will not try to resolve them relative to the code file\'s location.\nThis can cause "Module not found" errors when ',(0,r.kt)("inlineCode",{parentName:"p"},"--eval-file")," is used with module\nfiles:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ deno repl --eval-file=https://deno.land/std/hash/md5.ts\nerror in --eval-file file https://deno.land/std/hash/md5.ts. Uncaught TypeError: Module not found "file:///home/encoding/hex.ts".\n    at async <anonymous>:2:13\nDeno 1.20.5\nexit using ctrl+d or close()\n> close()\n$ deno repl --eval-file=https://deno.land/std/encoding/hex.ts\nDownload https://deno.land/std/encoding/hex.ts\nDeno 1.20.5\nexit using ctrl+d or close()\n>\n')),(0,r.kt)("h2",{id:"tab-completions"},"Tab completions"),(0,r.kt)("p",null,"Tab completions are crucial feature for quick navigation in REPL. After hitting\n",(0,r.kt)("inlineCode",{parentName:"p"},"tab")," key, Deno will now show a list of all possible completions."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ deno repl\nDeno 1.14.3\nexit using ctrl+d or close()\n> Deno.read\nreadTextFile      readFile          readDirSync       readLinkSync      readAll           read\nreadTextFileSync  readFileSync      readDir           readLink          readAllSync       readSync\n")),(0,r.kt)("h2",{id:"keyboard-shortcuts"},"Keyboard shortcuts"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Keystroke"),(0,r.kt)("th",{parentName:"tr",align:null},"Action"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-A, Home"),(0,r.kt)("td",{parentName:"tr",align:null},"Move cursor to the beginning of line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-B, Left"),(0,r.kt)("td",{parentName:"tr",align:null},"Move cursor one character left")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-C"),(0,r.kt)("td",{parentName:"tr",align:null},"Interrupt and cancel the current edit")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-D"),(0,r.kt)("td",{parentName:"tr",align:null},"If if line ",(0,r.kt)("em",{parentName:"td"},"is")," empty, signal end of line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-D, Del"),(0,r.kt)("td",{parentName:"tr",align:null},"If line is ",(0,r.kt)("em",{parentName:"td"},"not")," empty, delete character under cursor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-E, End"),(0,r.kt)("td",{parentName:"tr",align:null},"Move cursor to end of line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-F, Right"),(0,r.kt)("td",{parentName:"tr",align:null},"Move cursor one character right")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-H, Backspace"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete character before cursor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-I, Tab"),(0,r.kt)("td",{parentName:"tr",align:null},"Next completion")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-J, Ctrl-M, Enter"),(0,r.kt)("td",{parentName:"tr",align:null},"Finish the line entry")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-K"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete from cursor to end of line")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-L"),(0,r.kt)("td",{parentName:"tr",align:null},"Clear screen")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-N, Down"),(0,r.kt)("td",{parentName:"tr",align:null},"Next match from history")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-P, Up"),(0,r.kt)("td",{parentName:"tr",align:null},"Previous match from history")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-R"),(0,r.kt)("td",{parentName:"tr",align:null},"Reverse Search history (Ctrl-S forward, Ctrl-G cancel)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-T"),(0,r.kt)("td",{parentName:"tr",align:null},"Transpose previous character with current character")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-U"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete from start of line to cursor")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-V"),(0,r.kt)("td",{parentName:"tr",align:null},"Insert any special character without performing its associated action")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-W"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete word leading up to cursor (using white space as a word boundary)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-X Ctrl-U"),(0,r.kt)("td",{parentName:"tr",align:null},"Undo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Paste from Yank buffer")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-Y"),(0,r.kt)("td",{parentName:"tr",align:null},"Paste from Yank buffer (Meta-Y to paste next yank instead)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-Z"),(0,r.kt)("td",{parentName:"tr",align:null},"Suspend (Unix only)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-_"),(0,r.kt)("td",{parentName:"tr",align:null},"Undo")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-0, 1, ..., -"),(0,r.kt)("td",{parentName:"tr",align:null},"Specify the digit to the argument. ",(0,r.kt)("inlineCode",{parentName:"td"},"\u2013")," starts a negative argument.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-<"),(0,r.kt)("td",{parentName:"tr",align:null},"Move to first entry in history")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta->"),(0,r.kt)("td",{parentName:"tr",align:null},"Move to last entry in history")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-B, Alt-Left"),(0,r.kt)("td",{parentName:"tr",align:null},"Move cursor to previous word")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-Backspace"),(0,r.kt)("td",{parentName:"tr",align:null},"Kill from the start of the current word, or, if between words, to the start of the previous word")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-C"),(0,r.kt)("td",{parentName:"tr",align:null},"Capitalize the current word")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-D"),(0,r.kt)("td",{parentName:"tr",align:null},"Delete forwards one word")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-F, Alt-Right"),(0,r.kt)("td",{parentName:"tr",align:null},"Move cursor to next word")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-L"),(0,r.kt)("td",{parentName:"tr",align:null},"Lower-case the next word")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-T"),(0,r.kt)("td",{parentName:"tr",align:null},"Transpose words")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-U"),(0,r.kt)("td",{parentName:"tr",align:null},"Upper-case the next word")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Meta-Y"),(0,r.kt)("td",{parentName:"tr",align:null},"See Ctrl-Y")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ctrl-S"),(0,r.kt)("td",{parentName:"tr",align:null},"Insert a new line")))),(0,r.kt)("h2",{id:"deno_repl_history"},(0,r.kt)("inlineCode",{parentName:"h2"},"DENO_REPL_HISTORY")),(0,r.kt)("p",null,"You can use ",(0,r.kt)("inlineCode",{parentName:"p"},"DENO_REPL_HISTORY")," environmental variable to control where Deno\nstores the REPL history file. You can set it to an empty value, Deno will not\nstore the history file."))}m.isMDXComponent=!0}}]);