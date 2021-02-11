(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{122:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var o=r(0),n=r.n(o);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),p=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},d=function(e){var t=p(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=p(r),b=o,h=d["".concat(i,".").concat(b)]||d[b]||u[b]||a;return r?n.a.createElement(h,c(c({ref:t},s),{},{components:r})):n.a.createElement(h,c({ref:t},s))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.a.createElement.apply(null,i)}return n.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return s}));var o=r(3),n=(r(0),r(122));const a={title:"RecordSourceSelectorProxy"},i={unversionedId:"api/record-source-selector-proxy",id:"api/record-source-selector-proxy",isDocsHomePage:!1,title:"RecordSourceSelectorProxy",description:"`swift",source:"@site/docs/api/record-source-selector-proxy.md",slug:"/api/record-source-selector-proxy",permalink:"/Relay.swift/docs/api/record-source-selector-proxy",editUrl:"https://github.com/relay-tools/Relay.swift/edit/main/website/docs/api/record-source-selector-proxy.md",version:"current",sidebar:"docs",previous:{title:"Store",permalink:"/Relay.swift/docs/api/store"},next:{title:"RecordProxy",permalink:"/Relay.swift/docs/api/record-proxy"}},c=[{value:"Getting records from the store",id:"getting-records-from-the-store",children:[]},{value:"Updating the store&#39;s contents",id:"updating-the-stores-contents",children:[]}],l={toc:c};function s({components:e,...t}){return Object(n.b)("wrapper",Object(o.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},"protocol RecordSourceSelectorProxy: RecordSourceProxy\n")),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"RecordSourceSelectorProxy")," provides API for reading from and updating the Relay store in response to a mutation. This proxy is passed to ",Object(n.b)("inlineCode",{parentName:"p"},"updater")," and ",Object(n.b)("inlineCode",{parentName:"p"},"optimisticUpdater")," functions you provide with your mutations. It allows you to update the client-side store to reflect the new state after the mutation has been performed."),Object(n.b)("p",null,"Relay automatically uses the responses to your mutations to update records in the store with matching IDs, but there are other kinds of state changes that you'd like to reflect in your UI that Relay can't figure out automatically. For example:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Adding a new record to a list"),Object(n.b)("li",{parentName:"ul"},"Deleting a record"),Object(n.b)("li",{parentName:"ul"},"Moving a record within a list"),Object(n.b)("li",{parentName:"ul"},"Moving a record between different lists")),Object(n.b)("p",null,"One way to handle these would be to refetch any affected queries. But doing so would make your app less responsive by needing to wait for at least one extra network call, and it may get complicated keeping track of which queries will be affected. Updaters are fast, because they don't perform any extra network calls (you can even do them optimistically before the mutation has responded), and they keep the logic for how to update the state in one place with the mutation itself."),Object(n.b)("p",null,"If you're using ",Object(n.b)("inlineCode",{parentName:"p"},"@connection")," fields for pagination, see ",Object(n.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/connection-handler"},"ConnectionHandler")," for some convenient methods for manipulating those fields."),Object(n.b)("h2",{id:"getting-records-from-the-store"},"Getting records from the store"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},"var root: RecordProxy { get }\n")),Object(n.b)("p",null,"The ",Object(n.b)("inlineCode",{parentName:"p"},"root")," property gives you a ",Object(n.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/record-proxy"},"RecordProxy")," for the root type in your schema (usually ",Object(n.b)("inlineCode",{parentName:"p"},"Query")," or ",Object(n.b)("inlineCode",{parentName:"p"},"Root"),"). You can use the record proxy to traverse to the parts of your schema that you want to update."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},"subscript(_ dataID: DataID) -> RecordProxy? { get }\n")),Object(n.b)("p",null,"You can provide a specific ID of a record as a subscript to the record source proxy to get a ",Object(n.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/record-proxy"},"RecordProxy")," for that record. If the record is not in the store, this will be ",Object(n.b)("inlineCode",{parentName:"p"},"nil"),"."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},"func getRootField(_ fieldName: String) -> RecordProxy?\n")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"getRootField")," lets you access a singular field from the root of the mutation response."),Object(n.b)("p",null,"For example, if I execute this mutation:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-graphql"},"mutation ChangeTodoStatusMutation($input: ChangeTodoStatusInput!) {\n    changeTodoStatus(input: $input) {\n        todo {\n            id\n            complete\n        }\n    }\n}\n")),Object(n.b)("p",null,"Then I can access the ",Object(n.b)("inlineCode",{parentName:"p"},"todo")," returned in the response like this:"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},'func updater(store: inout RecordSourceSelectorProxy, data: SelectorData?) {\n    guard\n        let changeTodoStatus = store.getRootField("changeTodoStatus"),\n        let todo = changeTodoStatus.getLinkedField("todo")\n    else {\n        return\n    }\n\n    // now do things with todo\n}\n')),Object(n.b)("p",null,"Since this is accessing records in the store, you may find that parts of the graph contain more fields than just those requested in the mutation, as the mutation response got merged with existing data in the store."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},"func getPluralRootField(_ fieldName: String) -> [RecordProxy?]?\n")),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"getPluralRootField")," lets you access a plural field from the root of the mutation response."),Object(n.b)("p",null,"This is just like ",Object(n.b)("inlineCode",{parentName:"p"},"getRootField")," except it returns an array of records instead of a single record. Use this when the return type of your mutation is a list."),Object(n.b)("h2",{id:"updating-the-stores-contents"},"Updating the store's contents"),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},"mutating func create(dataID: DataID, typeName: String) -> RecordProxy\n")),Object(n.b)("p",null,"Creates a new empty record in the store."),Object(n.b)("h4",{id:"parameters"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"dataID"),": The ID of the new record. If the record type has an ",Object(n.b)("inlineCode",{parentName:"li"},"id")," field, that value should be used for the ",Object(n.b)("inlineCode",{parentName:"li"},"dataID"),". Otherwise, you can generate an emphemeral client-local ID by using ",Object(n.b)("inlineCode",{parentName:"li"},".generateClientID()"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"typeName"),": The name of the type of the record. This should be one of the types defined in your GraphQL schema.")),Object(n.b)("h4",{id:"returns"},"Returns"),Object(n.b)("p",null,"A ",Object(n.b)("inlineCode",{parentName:"p"},"RecordProxy")," for the newly created record. You can use the proxy to set other fields on the record or to reference it from other records."),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},"mutating func delete(dataID: DataID)\n")),Object(n.b)("p",null,"Deletes an existing record from the store."),Object(n.b)("p",null,"This won't automatically remove references to the record throughout the store, but Relay gracefully treats missing records as though they were ",Object(n.b)("inlineCode",{parentName:"p"},"nil"),"."),Object(n.b)("h4",{id:"parameters-1"},"Parameters"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"dataID"),": The ID of the record to delete.")),Object(n.b)("pre",null,Object(n.b)("code",{parentName:"pre",className:"language-swift"},"func invalidateStore()\n")),Object(n.b)("p",null,"Marks the entire Relay store as invalid and needing to be refetched."),Object(n.b)("p",null,"If the store is invalidated, all of records currently present in the store will still exist, but when a ",Object(n.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/query"},"@Query")," is rendered with a ",Object(n.b)("inlineCode",{parentName:"p"},".storeOrNetwork")," or ",Object(n.b)("inlineCode",{parentName:"p"},".storeAndNetwork")," fetch policy, those records will not be considered valid and will be ignored, requiring a network request to get the latest data. You can use this to ensure your UI doesn't display data that is known to be stale."))}s.isMDXComponent=!0}}]);