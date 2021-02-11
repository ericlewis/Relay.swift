(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{122:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),s=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(a),b=n,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return a?r.a.createElement(h,l(l({ref:t},u),{},{components:a})):r.a.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=b;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var u=2;u<i;u++)o[u]=a[u];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},97:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return u}));var n=a(3),r=(a(0),a(122));const i={title:"@Query"},o={unversionedId:"api/query",id:"api/query",isDocsHomePage:!1,title:"@Query",description:"The @Query property wrapper loads the data for a GraphQL query when a SwiftUI view is rendered.",source:"@site/docs/api/query.md",slug:"/api/query",permalink:"/Relay.swift/docs/api/query",editUrl:"https://github.com/relay-tools/Relay.swift/edit/main/website/docs/api/query.md",version:"current",sidebar:"docs",previous:{title:"@RelayEnvironment",permalink:"/Relay.swift/docs/api/relay-environment-wrapper"},next:{title:"@Fragment",permalink:"/Relay.swift/docs/api/fragment"}},l=[{value:"Example",id:"example",children:[]},{value:"Convenience API for getting query results",id:"convenience-api-for-getting-query-results",children:[]}],c={toc:l};function u({components:e,...t}){return Object(r.b)("wrapper",Object(n.a)({},c,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@Query")," property wrapper loads the data for a GraphQL query when a SwiftUI view is rendered."),Object(r.b)("p",null,"A query will usually map one-to-one to a screen of your app. The query can fetch all of the data needed to render that screen in one roundtrip to the server, using ",Object(r.b)("a",{parentName:"p",href:"/Relay.swift/docs/api/fragment"},"@Fragment"),"s to provide the data that each child view needs."),Object(r.b)("h2",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-swift"},'private let query = graphql("""\nquery ToDoListQuery {\n  list(id: "abc") {\n        items {\n            text\n        }\n    }\n}\n""")\n\nstruct ToDoList: View {\n    @Query<ToDoListQuery> var query\n\n    var body: some View {\n        switch query.get() {\n            case .loading:\n                Text("Loading...")\n            case .failure(let error):\n                Text("Error: \\(error.localizedDescription)")\n            case .success(let data):\n                List(data?.list?.items ?? [], id: \\.id) { toDoItem in\n                    Text("\\(toDoItem.text)")\n                }\n        }\n    }\n}\n')),Object(r.b)("h4",{id:"parameters"},"Parameters"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"O"),": A type parameter (surrounded in ",Object(r.b)("inlineCode",{parentName:"li"},"<>"),") for the type of the query operation to run. The type will be generated by the Relay compiler with a name matching the operation name in the GraphQL query. The Relay compiler will enforce that the operation name is ",Object(r.b)("inlineCode",{parentName:"li"},"<FileName>Query"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fetchPolicy"),": ",Object(r.b)("em",{parentName:"li"},"(optional)")," The policy for how to fetch data for the query. Valid options are:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".networkOnly"),": (default) Don't use cached data from the store, and show a loading state until data is fetched from the network."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".storeAndNetwork"),": Load any available cached data from the store first, then fetch the current data from the network and update the view when it's loaded."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".storeOrNetwork"),": Load cached data from the store if possible. If any data is missing or any data has been marked invalid in a mutation updater, fetch the current data from the network."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},".storeOnly"),": Load the cached data from the store. Do not make a network request, even if the data in the store is incomplete. Only use this if you're sure that the data you need will be in the store already when your view is rendered.")))),Object(r.b)("h4",{id:"property-value"},"Property value"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"@Query")," property will have a value with a ",Object(r.b)("inlineCode",{parentName:"p"},"get")," function for retrieving the current state of the query:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-swift"},"func get(\n    _ variables: O.Variables,\n    fetchKey: Any? = nil\n) -> Result\n")),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"get")," function returns already fetched data for the query and/or starts fetching new data, and returns a ",Object(r.b)("inlineCode",{parentName:"p"},"Result")," value describing the current state of the data."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"variables"),": The variables that your query accepts as input. The values usually come from other properties like ",Object(r.b)("inlineCode",{parentName:"li"},"@State")," on your view, if you have any."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"fetchKey"),": An optional arbitrary value that can be used to trigger a refetch of the query's data manually. If you pass in a fetch key that doesn't match the one that was passed in the last time the view was rendered, the query's data will be refetched.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-swift"},"enum Result {\n    case loading\n  case failure(Error)\n  case success(O.Data?)\n}\n")),Object(r.b)("p",null,"A ",Object(r.b)("inlineCode",{parentName:"p"},"Result")," is returned by ",Object(r.b)("inlineCode",{parentName:"p"},"get")," to indicate the state of query."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"loading"),": The query is currently fetching the data it needs. You should show some kind of loading/progress indicator in your UI."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"failure(Error)"),": The query failed to fetch the data it needed. You can present an error in your UI, optionally using the attached ",Object(r.b)("inlineCode",{parentName:"li"},"Error")," for more detailed information."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"success(O.Data?)"),": The query has the data it needs. The attached structure will have fields that match the shape of the GraphQL query. Note that it's possible for the query to succeed but have ",Object(r.b)("inlineCode",{parentName:"li"},"nil")," data, so you need to handle that case, usually by not showing a view at all.")),Object(r.b)("h2",{id:"convenience-api-for-getting-query-results"},"Convenience API for getting query results"),Object(r.b)("p",null,"The Relay compiler will generate some nicer extensions to the ",Object(r.b)("inlineCode",{parentName:"p"},"@Query")," API that make it easier to pass variables to ",Object(r.b)("inlineCode",{parentName:"p"},"query.get"),"."),Object(r.b)("p",null,"If your query does not take in any variables, you'll get a variant that looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-swift"},"func get(fetchKey: Any? = nil) -> Result\n")),Object(r.b)("p",null,"If your query does take in some variables, you'll get a variant that allows you to pass them as individual arguments, rather than requiring you to create a variables structure. For example, if a query has ",Object(r.b)("inlineCode",{parentName:"p"},"$id")," and ",Object(r.b)("inlineCode",{parentName:"p"},"$name")," variables, it will have a ",Object(r.b)("inlineCode",{parentName:"p"},"get")," method that looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-swift"},"func get(\n    id: String,\n    name: String,\n    fetchKey: Any? = nil\n) -> Result\n")))}u.isMDXComponent=!0}}]);