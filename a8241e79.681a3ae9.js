(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return o})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return c}));var a=n(3),i=(n(0),n(122));const r={title:"0.4.0"},o={permalink:"/Relay.swift/releases/2020/07/25/0.4.0",source:"@site/release-notes/2020-07-25-0.4.0.md",description:"Added",date:"2020-07-25T00:00:00.000Z",tags:[],title:"0.4.0",truncated:!1,prevItem:{title:"0.5.0",permalink:"/Relay.swift/releases/2020/08/08/0.5.0"},nextItem:{title:"0.3.0",permalink:"/Relay.swift/releases/2020/06/28/0.3.0"}},l=[{value:"Added",id:"added",children:[]},{value:"Changed",id:"changed",children:[]},{value:"Fixed",id:"fixed",children:[]}],s={toc:l};function c({components:e,...t}){return Object(i.b)("wrapper",Object(a.a)({},s,t,{components:e,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"added"},"Added"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Generated result data types with an ",Object(i.b)("inlineCode",{parentName:"li"},"id: String")," property are now generated with a conformance to ",Object(i.b)("inlineCode",{parentName:"li"},"Identifiable"),", which makes them easier to use in ",Object(i.b)("inlineCode",{parentName:"li"},"List")," and ",Object(i.b)("inlineCode",{parentName:"li"},"ForEach")," views."),Object(i.b)("li",{parentName:"ul"},"Generated structs for ",Object(i.b)("inlineCode",{parentName:"li"},"@connection")," fields conform to ",Object(i.b)("inlineCode",{parentName:"li"},"RandomAccessCollection")," if they include a selection of ",Object(i.b)("inlineCode",{parentName:"li"},"edges { node { ... } }"),". This means that you can replace something like ",Object(i.b)("inlineCode",{parentName:"li"},"data.allFilms.edges.map { $0.node }")," with just ",Object(i.b)("inlineCode",{parentName:"li"},"data.allFilms"),". See the ",Object(i.b)("a",{parentName:"li",href:"/Relay.swift/docs/api/pagination-fragment"},"@PaginationFragment")," docs for more info."),Object(i.b)("li",{parentName:"ul"},"Generated query and mutation types now include some convenience extensions to make it easier to work with their variables:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"The initializer for the operation can take the variables directly instead of having to initialize a variables struct. For example, instead of ",Object(i.b)("inlineCode",{parentName:"li"},'UserDetailsQuery(variables: .init(userID: "123"))'),", you can write ",Object(i.b)("inlineCode",{parentName:"li"},'UserDetailsQuery(userID: "123")')),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"get()")," method on the wrapped value for the ",Object(i.b)("inlineCode",{parentName:"li"},"QueryNext")," property wrapper (the beta version of ",Object(i.b)("a",{parentName:"li",href:"/Relay.swift/docs/api/query"},"@Query"),") can also take the query's variables directly. For example, instead of ",Object(i.b)("inlineCode",{parentName:"li"},'query.get(.init(userID: "123"))'),", you can write ",Object(i.b)("inlineCode",{parentName:"li"},'query.get(userID: "123")')))),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"QueryNext")," property wrapper supports refetching queries by passing in a ",Object(i.b)("inlineCode",{parentName:"li"},"fetchKey")," parameter to the ",Object(i.b)("inlineCode",{parentName:"li"},"get()")," method. Whenever the fetch key is changed from the last time ",Object(i.b)("inlineCode",{parentName:"li"},"get()")," was called, the query will be refetched. One way to use this is to have a ",Object(i.b)("inlineCode",{parentName:"li"},"@State")," property for the fetch key and have your view change the value (a counter or UUID, perhaps) when it wants to refetch."),Object(i.b)("li",{parentName:"ul"},"Queries can use two new fetch policies: ",Object(i.b)("inlineCode",{parentName:"li"},".storeOrNetwork")," and ",Object(i.b)("inlineCode",{parentName:"li"},".storeOnly"),". The former avoids a network request if the data in the local store is complete and valid. The latter always skips the network, and expects the data to be present locally already."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("inlineCode",{parentName:"li"},"RefetchableFragment")," property wrapper has been added to ",Object(i.b)("inlineCode",{parentName:"li"},"RelaySwiftUI"),". It supports fragments with a ",Object(i.b)("inlineCode",{parentName:"li"},"@refetchable")," directive in their GraphQL definition. This wrapper is like an ordinary ",Object(i.b)("a",{parentName:"li",href:"/Relay.swift/docs/api/fragment"},"@Fragment")," but it includes a ",Object(i.b)("inlineCode",{parentName:"li"},"refetch()")," method to refetch its data using a generated refetch query."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"RecordSource")," now conforms to ",Object(i.b)("inlineCode",{parentName:"li"},"Codable"),". This allows a store's records to be saved and loaded to disk, for instance. Until garbage collection is more configurable, this is probably of limited usefulness.")),Object(i.b)("h3",{id:"changed"},"Changed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"All generated types and methods are now public (previously they had the default internal access). This makes it possible to keep your generated code in a different module like a SwiftPM package.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Matching ",Object(i.b)("inlineCode",{parentName:"p"},"QueryNext"),", the ",Object(i.b)("inlineCode",{parentName:"p"},"FragmentNext")," and ",Object(i.b)("inlineCode",{parentName:"p"},"PaginationFragmentNext")," property wrappers don't have a projected value anymore (accessed with the ",Object(i.b)("inlineCode",{parentName:"p"},"$")," prefix). You must now set the key for a fragment property wrapper when it's initialized. This is closer to how Apple's own property wrappers, like ",Object(i.b)("inlineCode",{parentName:"p"},"@Binding"),", work."),Object(i.b)("p",{parentName:"li"},"To make this easier, types that conform to a fragment's ",Object(i.b)("inlineCode",{parentName:"p"},"Key")," protocol now also generate ",Object(i.b)("inlineCode",{parentName:"p"},"asFragment()")," methods to create the ",Object(i.b)("inlineCode",{parentName:"p"},"FragmentNext")," or ",Object(i.b)("inlineCode",{parentName:"p"},"PaginationFragmentNext")," to pass on to a child view. Using this lets you avoid writing initializers for fragment views in many cases."))),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-swift"},"// Before:\n\nstruct MoviesTab: View {\n    @QueryNext(MoviesTabQuery.self) var movies\n\n    var body: some View {\n        switch movies.get() {\n        // ...\n        case .success(let data):\n            if let data = data {\n                MoviesList(films: data) // MoviesTabQuery.Data conforms to MoviesList_films_Key\n            }\n        }\n    }\n}\n\nstruct MoviesList: View {\n    @PaginationFragmentNext(MoviesList_films.self) var films\n\n    init(films: MoviesList_films_Key) {\n        $films = films\n    }\n\n    var body: some View { /* ... */ }\n}\n\n// After:\n\nstruct MoviesTab: View {\n    @QueryNext<MoviesTabQuery> var movies\n\n    var body: some View {\n        switch movies.get() {\n        // ...\n        case .success(let data):\n            if let data = data {\n                // Use asFragment() to create the PaginationFragmentNext that\n                // MoviesList expects.\n                MoviesList(films: data.asFragment())\n            }\n        }\n    }\n}\n\nstruct MoviesList: View {\n    @PaginationFragmentNext<MoviesList_films> var films\n\n    // The default initializer is fine now because the parent view is passing\n    // a PaginationFragmentNext instead of a fragment key.\n\n    var body: some View { /* ... */ }\n}\n")),Object(i.b)("h3",{id:"fixed"},"Fixed"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The garbage collector will now only collect records on the final release of a query (instead of on every release)."),Object(i.b)("li",{parentName:"ul"},"A retain cycle between RecordSourceProxy and its RecordProxy instances has been fixed.")))}c.isMDXComponent=!0},122:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=i.a.createContext({}),p=function(e){var t=i.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,u=d["".concat(o,".").concat(m)]||d[m]||b[m]||r;return n?i.a.createElement(u,l(l({ref:t},c),{},{components:n})):i.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<r;c++)o[c]=n[c];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);