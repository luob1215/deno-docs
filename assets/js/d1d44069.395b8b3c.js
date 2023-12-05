"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[2584],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=u(n),m=l,g=d["".concat(i,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(g,o(o({ref:t},c),{},{components:n})):a.createElement(g,o({ref:t},c))}));function g(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=m;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[d]="string"==typeof e?e:l,o[1]=s;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85162:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(67294),l=n(86010);const r={tabItem:"tabItem_Ymn6"};function o(e){let{children:t,hidden:n,className:o}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r.tabItem,o),hidden:n},t)}},74866:(e,t,n)=>{n.d(t,{Z:()=>N});var a=n(87462),l=n(67294),r=n(86010),o=n(12466),s=n(16550),i=n(91980),u=n(67392),c=n(50012);function d(e){return function(e){return l.Children.map(e,(e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:l}}=e;return{value:t,label:n,attributes:a,default:l}}))}function p(e){const{values:t,children:n}=e;return(0,l.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,s.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(r),(0,l.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[o,s]=(0,l.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[i,u]=g({queryString:n,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,c.Nk)(n);return[a,(0,l.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),h=(()=>{const e=i??d;return m({value:e,tabValues:r})?e:null})();(0,l.useLayoutEffect)((()=>{h&&s(h)}),[h]);return{selectedValue:o,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);s(e),u(e),f(e)}),[u,f,r]),tabValues:r}}var h=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function k(e){let{className:t,block:n,selectedValue:s,selectValue:i,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),a=u[n].value;a!==s&&(d(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:o}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},o,{className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":s===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return l.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function v(e){const t=f(e);return l.createElement("div",{className:(0,r.Z)("tabs-container",b.tabList)},l.createElement(k,(0,a.Z)({},e,t)),l.createElement(y,(0,a.Z)({},e,t)))}function N(e){const t=(0,h.Z)();return l.createElement(v,(0,a.Z)({key:String(t)},e))}},24270:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>g,frontMatter:()=>s,metadata:()=>u,toc:()=>d});var a=n(87462),l=(n(67294),n(3905)),r=n(74866),o=n(85162);const s={},i="Installation",u={unversionedId:"manual/getting_started/installation",id:"manual/getting_started/installation",title:"Installation",description:"Deno works on macOS, Linux, and Windows. Deno is a single binary executable. It",source:"@site/runtime/manual/getting_started/installation.md",sourceDirName:"manual/getting_started",slug:"/manual/getting_started/installation",permalink:"/deno-docs/runtime/manual/getting_started/installation",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"runtimeGuideHome",previous:{title:"Deno Runtime Quick Start",permalink:"/deno-docs/runtime/manual/"},next:{title:"First Steps",permalink:"/deno-docs/runtime/manual/getting_started/first_steps"}},c={},d=[{value:"Download and install",id:"download-and-install",level:2},{value:"Docker",id:"docker",level:2},{value:"Testing your installation",id:"testing-your-installation",level:2},{value:"Updating",id:"updating",level:2},{value:"Building from source",id:"building-from-source",level:2}],p={toc:d},m="wrapper";function g(e){let{components:t,...n}=e;return(0,l.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"installation"},"Installation"),(0,l.kt)("p",null,"Deno works on macOS, Linux, and Windows. Deno is a single binary executable. It\nhas no external dependencies. On macOS, both M1 (arm64) and Intel (x64)\nexecutables are provided. On Linux and Windows, only x64 is supported."),(0,l.kt)("h2",{id:"download-and-install"},"Download and install"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno_install"},"deno_install")," provides convenience\nscripts to download and install the binary."),(0,l.kt)(r.Z,{groupId:"operating-systems",mdxType:"Tabs"},(0,l.kt)(o.Z,{value:"mac",label:"macOS",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Using Shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://deno.land/x/install/install.sh | sh\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://formulae.brew.sh/formula/deno"},"Homebrew"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"brew install deno\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://ports.macports.org/port/deno/"},"MacPorts"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"sudo port install deno\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://nixos.org/download.html"},"Nix"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nix-shell -p deno\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://asdf-vm.com/"},"asdf"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"asdf plugin-add deno https://github.com/asdf-community/asdf-deno.git\nasdf install deno latest\n\n# To install globally\nasdf global deno latest\n\n# To install locally (current project only)\nasdf local deno latest\n"))),(0,l.kt)(o.Z,{value:"windows",label:"Windows",mdxType:"TabItem"},(0,l.kt)("p",null,"Using PowerShell (Windows):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-powershell"},"irm https://deno.land/install.ps1 | iex\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://scoop.sh/"},"Scoop"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"scoop install deno\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://chocolatey.org/packages/deno"},"Chocolatey"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"choco install deno\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/winget-cli"},"Winget"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"winget install deno\n"))),(0,l.kt)(o.Z,{value:"linux",label:"Linux",mdxType:"TabItem"},(0,l.kt)("p",null,"Using Shell:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://deno.land/x/install/install.sh | sh\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://nixos.org/download.html"},"Nix"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"nix-shell -p deno\n")),(0,l.kt)("p",null,"Using ",(0,l.kt)("a",{parentName:"p",href:"https://asdf-vm.com/"},"asdf"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"asdf plugin-add deno https://github.com/asdf-community/asdf-deno.git\nasdf install deno latest\n\n# To install globally\nasdf global deno latest\n\n# To install locally (current project only)\nasdf local deno latest\n")))),(0,l.kt)("p",null,"You can also build and install from source using\n",(0,l.kt)("a",{parentName:"p",href:"https://crates.io/crates/deno"},"Cargo"),":"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cargo install deno --locked\n")),(0,l.kt)("p",null,"Deno binaries can also be installed manually, by downloading a zip file at\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/releases"},"github.com/denoland/deno/releases"),".\nThese packages contain just a single executable file. You will have to set the\nexecutable bit on macOS and Linux."),(0,l.kt)("h2",{id:"docker"},"Docker"),(0,l.kt)("p",null,"For more information and instructions on the official Docker images:\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno_docker"},"https://github.com/denoland/deno_docker")),(0,l.kt)("h2",{id:"testing-your-installation"},"Testing your installation"),(0,l.kt)("p",null,"To test your installation, run ",(0,l.kt)("inlineCode",{parentName:"p"},"deno --version"),". If this prints the Deno version\nto the console the installation was successful."),(0,l.kt)("p",null,"Use ",(0,l.kt)("inlineCode",{parentName:"p"},"deno help")," to see help text documenting Deno's flags and usage. Get a\ndetailed guide on the CLI ",(0,l.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/getting_started/command_line_interface"},"here"),"."),(0,l.kt)("h2",{id:"updating"},"Updating"),(0,l.kt)("p",null,"To update a previously installed version of Deno, you can run:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"deno upgrade\n")),(0,l.kt)("p",null,"Or using ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/microsoft/winget-cli"},"Winget")," (Windows):"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"winget upgrade deno\n")),(0,l.kt)("p",null,"This will fetch the latest release from\n",(0,l.kt)("a",{parentName:"p",href:"https://github.com/denoland/deno/releases"},"github.com/denoland/deno/releases"),",\nunzip it, and replace your current executable with it."),(0,l.kt)("p",null,"You can also use this utility to install a specific version of Deno:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"deno upgrade --version 1.0.1\n")),(0,l.kt)("h2",{id:"building-from-source"},"Building from source"),(0,l.kt)("p",null,"Information about how to build from source can be found in the\n",(0,l.kt)("a",{parentName:"p",href:"/deno-docs/runtime/manual/references/contributing/building_from_source"},(0,l.kt)("inlineCode",{parentName:"a"},"Contributing"))," chapter."))}g.isMDXComponent=!0}}]);