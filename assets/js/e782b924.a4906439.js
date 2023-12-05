"use strict";(self.webpackChunkdeno_docs=self.webpackChunkdeno_docs||[]).push([[3276],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var d=n.createContext({}),c=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=c(a),m=o,h=l["".concat(d,".").concat(m)]||l[m]||u[m]||r;return a?n.createElement(h,i(i({ref:t},p),{},{components:a})):n.createElement(h,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=m;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[l]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},31317:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var n=a(87462),o=(a(67294),a(3905));const r={},i="Custom domains",s={unversionedId:"manual/custom-domains",id:"manual/custom-domains",title:"Custom domains",description:"By default a project can be reached at its preview URL, which is",source:"@site/deploy/manual/custom-domains.md",sourceDirName:"manual",slug:"/manual/custom-domains",permalink:"/deploy/manual/custom-domains",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"deployGuideHome",previous:{title:"Deployments",permalink:"/deploy/manual/deployments"},next:{title:"Environment variables",permalink:"/deploy/manual/environment-variables"}},d={},c=[{value:"<strong>Step 1:</strong> Add your custom domain in the Deno Deploy dashboard",id:"step-1-add-your-custom-domain-in-the-deno-deploy-dashboard",level:2},{value:"<strong>Step 2:</strong> Update your custom domain&#39;s DNS records",id:"step-2-update-your-custom-domains-dns-records",level:2},{value:"<strong>Step 3:</strong> Validate that the DNS records have been updated",id:"step-3-validate-that-the-dns-records-have-been-updated",level:2},{value:"<strong>Step 4:</strong> Provision a certificate for your custom domain",id:"step-4-provision-a-certificate-for-your-custom-domain",level:2}],p={toc:c},l="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(l,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"custom-domains"},"Custom domains"),(0,o.kt)("p",null,"By default a project can be reached at its preview URL, which is\n",(0,o.kt)("inlineCode",{parentName:"p"},"$PROJECT_ID.deno.dev"),", e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"dead-clam-55.deno.dev"),". You can also add a custom\ndomain by following the instructions below."),(0,o.kt)("h2",{id:"step-1-add-your-custom-domain-in-the-deno-deploy-dashboard"},(0,o.kt)("strong",{parentName:"h2"},"Step 1:")," Add your custom domain in the Deno Deploy dashboard"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click the "Settings" button on the project page, then select "Domains" from\nthe sidebar.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Enter the domain name you wish to add to the project and press "Add." Note\nthat you must own the domain that you want to add to a project. If you do not\nown a domain yet, you can register one at a domain registrar like Google\nDomains, Namecheap, or gandi.net.\n',(0,o.kt)("img",{alt:"add_custom_domain",src:a(11804).Z,width:"718",height:"267"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'The domain is added to the domains list and will have a "setup" badge.')),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Click on the "setup" badge to visit the domain setup page, which will display\nthe list of DNS records that need to be created/updated for your domain.\n',(0,o.kt)("img",{alt:"dns_records_modal",src:a(4176).Z,width:"876",height:"552"})))),(0,o.kt)("h2",{id:"step-2-update-your-custom-domains-dns-records"},(0,o.kt)("strong",{parentName:"h2"},"Step 2:")," Update your custom domain's DNS records"),(0,o.kt)("p",null,"Go to the DNS configuration panel of your domain registrar (or the service\nyou're using to manage DNS) and enter the records as described on the domain\nsetup page."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"change_dns_records",src:a(18045).Z,width:"1075",height:"775"})),(0,o.kt)("h2",{id:"step-3-validate-that-the-dns-records-have-been-updated"},(0,o.kt)("strong",{parentName:"h2"},"Step 3:")," Validate that the DNS records have been updated"),(0,o.kt)("p",null,"Go back to the Deno Deploy dashboard and click the ",(0,o.kt)("strong",{parentName:"p"},"Validate"),' button on the\ndomain setup page. It will check if the DNS records are correctly set and if so,\nupdate the status to "Validated, awaiting certificate provisioning."'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"get_certificates",src:a(81538).Z,width:"857",height:"589"})),(0,o.kt)("h2",{id:"step-4-provision-a-certificate-for-your-custom-domain"},(0,o.kt)("strong",{parentName:"h2"},"Step 4:")," Provision a certificate for your custom domain"),(0,o.kt)("p",null,"At this point you have two options. 99% of the time, you should choose the first\noption."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Let us automatically provision a certificate using Let's Encrypt."),(0,o.kt)("p",{parentName:"li"},"To do this, press the ",(0,o.kt)("strong",{parentName:"p"},"Get automatic certificates")," button. Provisioning a\nTLS certificate can take up to a minute. It is possible that the provisioning\nfails if your domain specifies a CAA record that prevents\n",(0,o.kt)("a",{parentName:"p",href:"https://letsencrypt.org/"},"Let's Encrypt")," from provisioning certificates.\nCertificates will be automatically renewed around 30 days before the\ncertificate expires. When you have been issued certificates successfully, you\nwill see a green checkmark like this:"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{alt:"green_check",src:a(26724).Z,width:"708",height:"270"}))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Manually upload a certificate and private key."),(0,o.kt)("p",{parentName:"li"},"To manually upload a certificate chain and private key, press the ",(0,o.kt)("strong",{parentName:"p"},"Upload\nyour own certificates")," button. You will be prompted to upload a certificate\nchain and private key. The certificate chain needs to be complete and valid,\nand your leaf certificate needs to be at the top of the chain."))))}u.isMDXComponent=!0},11804:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add_custom_domain-b26c6ba7030a2a7775dadae408ca6fec.png"},18045:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/change_dns_records-a9854a0c0cf358ee6e8921a95a5ac7ff.png"},4176:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/dns_records_modal-02b7159983498b4a603cf1a6924ac293.png"},81538:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/get_certificates-8a46948663d5965a55861480c90c447d.png"},26724:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/green_check-cdefc7272688c99ed83f62dcdf6f4bc8.png"}}]);