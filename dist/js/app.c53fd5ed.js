(function(e){function t(t){for(var o,a,r=t[0],c=t[1],l=t[2],u=0,f=[];u<r.length;u++)a=r[u],s[a]&&f.push(s[a][0]),s[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);v&&v(t);while(f.length)f.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],o=!0,a=1;a<n.length;a++){var r=n[a];0!==s[r]&&(o=!1)}o&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var o={},a={app:0},s={app:0},i=[];function r(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-12dc":"0d7a7746","chunk-439e":"89007f0a","chunk-7791":"9c4a7f8b","chunk-cf25":"3466c6c6","chunk-fe89":"75cc196f"}[e]+".js"}function c(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-12dc":1,"chunk-439e":1,"chunk-7791":1,"chunk-cf25":1,"chunk-fe89":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var o="css/"+({}[e]||e)+"."+{"chunk-12dc":"cc2d609a","chunk-439e":"019cb4a4","chunk-7791":"997ab34c","chunk-cf25":"8ec9a1ce","chunk-fe89":"1f2d9e97"}[e]+".css",a=c.p+o,s=document.getElementsByTagName("link"),i=0;i<s.length;i++){var r=s[i],l=r.getAttribute("data-href")||r.getAttribute("href");if("stylesheet"===r.rel&&(l===o||l===a))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){r=u[i],l=r.getAttribute("data-href");if(l===o||l===a)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var o=t&&t.target&&t.target.src||a,s=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");s.request=o,n(s)},f.href=a;var v=document.getElementsByTagName("head")[0];v.appendChild(f)}).then(function(){a[e]=0}));var o=s[e];if(0!==o)if(o)t.push(o[2]);else{var i=new Promise(function(t,n){o=s[e]=[t,n]});t.push(o[2]=i);var l,u=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=r(e),l=function(t){f.onerror=f.onload=null,clearTimeout(v);var n=s[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,i=new Error("Loading chunk "+e+" failed.\n("+o+": "+a+")");i.type=o,i.request=a,n[1](i)}s[e]=void 0}};var v=setTimeout(function(){l({type:"timeout",target:f})},12e4);f.onerror=f.onload=l,u.appendChild(f)}return Promise.all(t)},c.m=e,c.c=o,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)c.d(n,o,function(t){return e[t]}.bind(null,o));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var f=0;f<l.length;f++)t(l[f]);var v=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"140b":function(e,t,n){},"1f10":function(e,t,n){"use strict";var o=n("8502"),a=n.n(o);a.a},"2bdf":function(e,t,n){"use strict";var o=n("b3ca"),a=n.n(o);a.a},"3d2e":function(e,t,n){},"45f9":function(e,t,n){"use strict";var o=n("5540"),a=n.n(o);a.a},4830:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Banner",style:{flexDirection:"row"+(e.imageRight?"-reverse":"")}},[n("div",{staticClass:"Banner BannerImage"},[n("div",{staticClass:"Img",style:{backgroundImage:"url("+e.imageSource+")"}})]),n("div",{staticClass:"BannerText",class:{left:!e.imageRight,right:e.imageRight},style:{fontWeight:e.isBoldText?"bold":""}},[e.title?n("div",{staticClass:"BannerTitle"},[e._v("\n\t\t\t\t"+e._s(e.title)+"\n\t\t\t")]):e._e(),e._v("\n\t\t\t"+e._s(e.text)+"\n\t\t\t"),e.buttonText?n("div",{staticClass:"BannerButton"},[n("Button",{attrs:{title:e.buttonText,link:e.buttonLink}})],1):e._e()])])},a=[],s=n("9489"),i={name:"Banner",components:{Button:s["a"]},props:{imageRight:Boolean,imageSource:String,title:String,text:String,buttonText:String,buttonLink:String,isBoldText:Boolean}},r=i,c=(n("1f10"),n("2877")),l=Object(c["a"])(r,o,a,!1,null,null,null);l.options.__file="Banner.vue";t["a"]=l.exports},5540:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d"),n("357d"),n("2aeb8"),n("7f10"),n("cfbd");var o=n("2b0e"),a=n("b25f"),s=n.n(a),i=n("3222"),r=n.n(i),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Welcome"),n("AppHeader"),n("Intro"),n("Speakers"),n("Sponsors"),n("Team"),n("Location"),n("AppFooter")],1)},l=[],u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"Welcome",attrs:{id:"Welcome"}},[n("div",{staticClass:"Network",class:{"-visible":e.netoworkVisible}}),n("div",{staticClass:"Logo",class:{"-visible":e.logoVisible}})])},f=[],v={data:function(){return{netoworkVisible:!1,logoVisible:!1}},methods:{showLogo:function(){var e=this;setTimeout(function(){e.netoworkVisible=!0},1200)},showNetwork:function(){var e=this;requestAnimationFrame(function(){e.logoVisible=!0})},scrollToIntro:function(){window.location.hash||setTimeout(function(){document.documentElement.scrollTop<=100&&document.getElementById("IntroLogo").click()},2500)}},mounted:function(){var e=this;window.onload=function(){e.showLogo(),e.showNetwork(),e.scrollToIntro()}}},d=v,h=(n("95cc"),n("2877")),p=Object(h["a"])(d,u,f,!1,null,"27800878",null);p.options.__file="Welcome.vue";var m=p.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Header",class:{"-open":e.isOpen,"-sticked":e.isSticked}},[n("div",{staticClass:"Container HeaderContainer"},[n("div",{staticClass:"LogoContainer"},[n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Intro",id:"IntroLogo"},on:{click:e.close}},[n("Logo")],1)]),n("a",{staticClass:"NavBtn",on:{click:e.toggle}},[n("i",{staticClass:"fa",class:{"fa-bars":!e.isOpen,"fa-times":e.isOpen},attrs:{"aria-hidden":"true"}})]),n("nav",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Navigation"},[n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Intro"},on:{click:e.close}},[e._v("Intro")]),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Speakers"},on:{click:e.close}},[e._v("Speakers")]),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Sponsors"},on:{click:e.close}},[e._v("Sponsors")]),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Team"},on:{click:e.close}},[e._v("Team")]),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],staticClass:"Item",attrs:{href:"#Location"},on:{click:e.close}},[e._v("Location")]),n("div",{staticClass:"RequestInvite"},[n("Button",{attrs:{title:"Register",link:"http://bit.ly/joinNodeConfAM20"}})],1)])])])},_=[],C=n("0f32"),b=n.n(C),k=n("6f3a"),w=n("9489"),y={components:{Logo:k["a"],Button:w["a"]},data:function(){return{scrollPos:window.scrollY,isOpen:!1,navConfig:{duration:2e3,offset:-66}}},methods:{handleScroll:function(){this.scrollPos=window.scrollY},toggle:function(e){e.preventDefault(),this.isOpen=!this.isOpen},close:function(){this.isOpen=!1}},computed:{isSticked:function(){return this.scrollPos>.8*window.innerHeight}},created:function(){window.addEventListener("scroll",b()(this.handleScroll,100))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)}},A=y,T=(n("ed10"),Object(h["a"])(A,g,_,!1,null,"c841a284",null));T.options.__file="Header.vue";var S=T.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"Intro",attrs:{id:"Intro"}},[e._m(0),n("Banner",{attrs:{title:"A one-day event for JavaScript enthusiasts.",text:"Node Conf Armenia is a conference, gathering backend and full-stack Node.js developers in one place to share knowledge, skills with starter or master Node.js developers, have new connections, friends and fun.","image-source":e.imageSource,"image-right":!1}})],1)},N=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Container"},[n("div",{attrs:{id:"Titles"}},[n("h1",{staticClass:"Title HeadTitle"},[n("span",[e._v("JavaScript Summit")]),e._v(" Armenia")]),n("span",{staticClass:"Title Subtitle Simple"},[e._v("January 19, 10:30   -   AUA, Yerevan")])])])}],B=n("4830"),I=n("7eac"),O={components:{Banner:B["a"]},data:function(){return{imageSource:"".concat(I["a"],"/banners/polygons.png")}}},E=O,j=(n("d008"),Object(h["a"])(E,x,N,!1,null,"db2c63d4",null));j.options.__file="Intro.vue";var L=j.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Faq",attrs:{id:"Faq"}},[e._m(0),n("div",{staticClass:"row Answers"},[n("div",{staticClass:"col-md-6"},[n("h3",{staticClass:"Question"},[e._v("What is Node Conference Armenia?")]),n("p",{staticClass:"Answer"},[e._v("\n                Node Conference is a tech conference that brings together more than 600 tech\n                professionals to attend talks, workshops, participate in\n                competitions, get informed about open positions at sponsor IT companies and to have fun.\n            ")]),n("h3",{staticClass:"Question"},[e._v("Who are the speakers?")]),n("p",{staticClass:"Answer"},[e._v("\n                To learn more about our speakers, please,\n                "),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Speakers"}},[e._v("click here")]),e._v(".\n            ")]),n("h3",{staticClass:"Question"},[e._v("What are the talk topics?")]),n("p",{staticClass:"Answer"},[e._v("\n                To see the talk sessions timetable and topics, please\n                "),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Schedule"}},[e._v("click here")]),e._v(".\n            ")]),n("h3",{staticClass:"Question"},[e._v("What is the conference language?")]),n("p",{staticClass:"Answer"},[e._v("\n                The conference will be held mainly in Armenian but there are also\n                English talks included in the program.\n            ")]),n("h3",{staticClass:"Question"},[e._v("When is it going to take place?")]),n("p",{staticClass:"Answer"},[e._v("\n                The conference will take place from 10:00 to 17:00 on April 25, 2020.\n            ")]),n("h3",{staticClass:"Question"},[e._v("How to participate?")]),e._m(1)]),n("div",{staticClass:"col-md-6"},[n("h3",{staticClass:"Question"},[e._v("How much is the entry-ticket?")]),n("p",{staticClass:"Answer"},[e._v("\n                The event entry is free of charge before March 16. Later it will cost 5000AMD.\n            ")]),n("h3",{staticClass:"Question"},[e._v("Where is it going to be held?")]),e._m(2),n("h3",{staticClass:"Question"},[e._v("When is the deadline for registration?")]),n("p",{staticClass:"Answer"},[e._v("\n                The deadline for requesting free tickets ends March 15.\n            ")]),n("h3",{staticClass:"Question"},[e._v("Who supports Node Conference Armenia?")]),n("p",{staticClass:"Answer"},[e._v("\n                To learn about our sponsors and partners, please,\n                "),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Sponsors"}},[e._v("click here")]),e._v(".\n            ")]),n("h3",{staticClass:"Question"},[e._v("How can I help the team?")]),e._m(3),n("h3",{staticClass:"Question"},[e._v("Will I get a certificate of participation?")]),n("p",{staticClass:"Answer"},[e._v("\n                Your certificate of participation in Node Conference is going to be\n                your larger network in IT, updated knowledge,\n                nice little gifts and good memories. Do you still need that piece of paper?\n            ")]),n("h3",{staticClass:"Question"},[e._v("Who are behind the Node Conference Armenia? ")]),n("p",{staticClass:"Answer"},[e._v("\n                To see the Node Conference Armenia team, please,\n                "),n("a",{directives:[{name:"smooth-scroll",rawName:"v-smooth-scroll",value:e.navConfig,expression:"navConfig"}],attrs:{href:"#Team"}},[e._v("click here")]),e._v(".\n            ")])])])])},M=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("h2",{staticClass:"Title"},[e._v(" Frequently Asked "),n("span",[e._v("Questions")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"Answer"},[e._v("\n                The entry of NodeConfAM20 is invitation-only so\n                please make sure to request your free invite\n                "),n("a",{attrs:{href:"http://bit.ly/joinNodeConfAM20",target:"_blank"}},[e._v("here")]),e._v("\n                in 4 weeks after the application opens. Starting from March 16 the tickets will cost 5000AMD.\n            ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"Answer"},[e._v("\n                NodeConfAM20 will be held at the B Building of\n                "),n("a",{attrs:{href:"https://goo.gl/maps/HmDBXyu3G9z",target:"_blank"}},[e._v("American University of Armenia")]),e._v("\n                (40 Marshal Baghramyan Ave, Yerevan)․\n            ")])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("p",{staticClass:"Answer"},[e._v("\n                Oh, thank you for your kindness.\n                To help us make the NodeConfAM20 happen please "),n("a",{attrs:{href:"http://bit.ly/NodeConfAM20team",target:"_blank"}},[e._v("apply here")]),e._v("\n                to become a Node Conf super volunteer!\n            ")])}],W={data:function(){return{navConfig:{duration:1e3,offset:-66}}}},F=W,Q=(n("45f9"),Object(h["a"])(F,$,M,!1,null,"64984166",null));Q.options.__file="Faq.vue";var P=Q.exports,q=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div")},H=[],D={},R=D,V=(n("8aed"),Object(h["a"])(R,q,H,!1,null,"5117e12a",null));V.options.__file="Dummy.vue";var J=V.exports;function Y(e){var t,n=e.componentFactory,o=e.loading,a=e.loadingData;return function(){return{component:new Promise(function(e){t=e}),loading:{mounted:function(){var e=this;if("IntersectionObserver"in window){var o=new IntersectionObserver(function(a){a[0].intersectionRatio<=0||(o.unobserve(e.$el),n().then(t))});o.observe(this.$el)}else n().then(t)},render:function(e){return e(o,a)}}}}}var z={name:"app",components:{Welcome:m,AppHeader:S,Intro:L,Faq:P,Dummy:J,AppFooter:Y({componentFactory:function(){return n.e("chunk-12dc").then(n.bind(null,"d371"))},loading:J}),Location:Y({componentFactory:function(){return n.e("chunk-7791").then(n.bind(null,"6aa6"))},loading:J}),Team:Y({componentFactory:function(){return n.e("chunk-439e").then(n.bind(null,"a1e9"))},loading:J}),Sponsors:Y({componentFactory:function(){return n.e("chunk-fe89").then(n.bind(null,"0e6f"))},loading:J}),Speakers:Y({componentFactory:function(){return n.e("chunk-cf25").then(n.bind(null,"2dfd"))},loading:J})}},U=z,G=(n("5c0b"),Object(h["a"])(U,c,l,!1,null,null,null));G.options.__file="App.vue";var X=G.exports;o["a"].config.productionTip=!1,o["a"].use(s.a),o["a"].use(r.a),new o["a"]({render:function(e){return e(X)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(e,t,n){},"6f3a":function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Logo"},[n("div",{staticClass:"LogoImg",class:[{},e.variation],style:{width:e.size+"px"}})])},a=[],s=(n("c5f6"),{props:{size:{type:Number,default:120},variation:{type:String,default:"full"}}}),i=s,r=(n("2bdf"),n("2877")),c=Object(r["a"])(i,o,a,!1,null,"b8103e7e",null);c.options.__file="Logo.vue";t["a"]=c.exports},"7eac":function(e,t,n){"use strict";n.d(t,"a",function(){return o});var o="https://topentol.sirv.com/jssummit"},8502:function(e,t,n){},"8aed":function(e,t,n){"use strict";var o=n("9a6e"),a=n.n(o);a.a},9489:function(e,t,n){"use strict";var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a",{staticClass:"Button",attrs:{href:e.link,target:"_blank"}},[e._v("\n\t"+e._s(e.title)+"\n")])},a=[],s={name:"Button",props:{title:{type:String},link:{type:String}}},i=s,r=(n("9a10"),n("2877")),c=Object(r["a"])(i,o,a,!1,null,null,null);c.options.__file="Button.vue";t["a"]=c.exports},"95cc":function(e,t,n){"use strict";var o=n("e4c6"),a=n.n(o);a.a},"9a10":function(e,t,n){"use strict";var o=n("140b"),a=n.n(o);a.a},"9a6e":function(e,t,n){},b3ca:function(e,t,n){},d008:function(e,t,n){"use strict";var o=n("d90d"),a=n.n(o);a.a},d90d:function(e,t,n){},e4c6:function(e,t,n){},ed10:function(e,t,n){"use strict";var o=n("3d2e"),a=n.n(o);a.a}});
//# sourceMappingURL=app.c53fd5ed.js.map