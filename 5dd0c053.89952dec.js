(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{122:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return b}));var n=r(0),a=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=a.a.createContext({}),d=function(e){var t=a.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=d(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},p=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(r),p=n,b=u["".concat(o,".").concat(p)]||u[p]||f[p]||i;return r?a.a.createElement(b,c(c({ref:t},s),{},{components:r})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var s=2;s<i;s++)o[s]=r[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},94:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var n=r(3),a=(r(0),r(122));const i={title:"0.5.0"},o={permalink:"/Relay.swift/releases/2020/08/08/0.5.0",source:"@site/release-notes/2020-08-08-0.5.0.md",description:"Added",date:"2020-08-08T00:00:00.000Z",tags:[],title:"0.5.0",truncated:!1,prevItem:{title:"1.0.0",permalink:"/Relay.swift/releases/2020/12/29/1.0.0"},nextItem:{title:"0.4.0",permalink:"/Relay.swift/releases/2020/07/25/0.4.0"}},c=[{value:"Added",id:"added",children:[]},{value:"Changed",id:"changed",children:[]},{value:"Fixed",id:"fixed",children:[]}],l={toc:c};function s({components:e,...t}){return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"added"},"Added"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"When running on iOS 14 or equivalent, various parts of Relay.swift will now emit more debug logging, which can help track the flow of requests and data through the store.")),Object(a.b)("h3",{id:"changed"},"Changed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The ",Object(a.b)("inlineCode",{parentName:"li"},"cacheConfig")," parameter passed to a ",Object(a.b)("a",{parentName:"li",href:"/Relay.swift/docs/api/network"},"network layer"),"'s ",Object(a.b)("inlineCode",{parentName:"li"},"execute")," method now includes a ",Object(a.b)("inlineCode",{parentName:"li"},"force")," property. When this property is ",Object(a.b)("inlineCode",{parentName:"li"},"true"),", the network layer should skip any response cache it may be using and always perform the network request. Note that this does not affect any caching of data that Relay.swift itself may be doing."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",{parentName:"li",href:"/Relay.swift/docs/api/refetchable-fragment"},"@RefetchableFragment")," supports refetching with variables that will change which node the fragment is targeting. If you refetch with variables that point to a different record, the fragment will show data and receive updates for that record rather than the original one it first rendered."),Object(a.b)("li",{parentName:"ul"},"When a view using a ",Object(a.b)("a",{parentName:"li",href:"/Relay.swift/docs/api/query"},"@Query")," is disposed, there is now a five-second delay before the query is released and garbage collection is triggered. This was added to workaround an iOS 14 beta bug, though that bug has been fixed in beta 4. Even so, this change is being left in to allow a bit of tolerance for a transition between two views that use the same query.")),Object(a.b)("h3",{id:"fixed"},"Fixed"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"The garbage collector will correctly mark references to records through an inline fragment and not delete them.")))}s.isMDXComponent=!0}}]);