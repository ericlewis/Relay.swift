(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{121:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(134),c=a(158),i=a(127);var s=function(e){const{nextItem:t,prevItem:a}=e;return l.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog post page navigation"},l.a.createElement("div",{className:"pagination-nav__item"},a&&l.a.createElement(i.a,{className:"pagination-nav__link",to:a.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Newer Post"),l.a.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),l.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&l.a.createElement(i.a,{className:"pagination-nav__link",to:t.permalink},l.a.createElement("div",{className:"pagination-nav__sublabel"},"Older Post"),l.a.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},o=a(159),m=a(149),d=a(145);t.default=function(e){const{content:t,sidebar:a}=e,{frontMatter:n,metadata:i}=t,{title:v,description:u,nextItem:E,prevItem:p,editUrl:g}=i,{hide_table_of_contents:f}=n;return l.a.createElement(r.a,{title:v,description:u,wrapperClassName:"blog-wrapper"},t&&l.a.createElement("div",{className:"container margin-vert--lg"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col col--2"},l.a.createElement(o.a,{sidebar:a})),l.a.createElement("main",{className:"col col--8"},l.a.createElement(c.a,{frontMatter:n,metadata:i,isBlogPostPage:!0},l.a.createElement(t,null)),l.a.createElement("div",null,g&&l.a.createElement("a",{href:g,target:"_blank",rel:"noreferrer noopener"},l.a.createElement(d.a,null),"Edit this page")),(E||p)&&l.a.createElement("div",{className:"margin-vert--xl"},l.a.createElement(s,{nextItem:E,prevItem:p}))),!f&&t.toc&&l.a.createElement("div",{className:"col col--2"},l.a.createElement(m.a,{toc:t.toc})))))}},145:function(e,t,a){"use strict";var n=a(3),l=a(0),r=a.n(l),c=a(124),i=a(54),s=a.n(i);t.a=({className:e,...t})=>r.a.createElement("svg",Object(n.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(c.a)(s.a.iconEdit,e)},t),r.a.createElement("g",null,r.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))},149:function(e,t,a){"use strict";var n=a(0),l=a.n(n),r=a(124);var c=function(e,t,a){const[l,r]=Object(n.useState)(void 0);Object(n.useEffect)((()=>{function n(){const n=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=a}));if(t){if(t.getBoundingClientRect().top>=a){const a=e[e.indexOf(t)-1];return null!=a?a:t}return t}return e[e.length-1]}();if(n){let a=0,c=!1;const i=document.getElementsByClassName(e);for(;a<i.length&&!c;){const e=i[a],{href:s}=e,o=decodeURIComponent(s.substring(s.indexOf("#")+1));n.id===o&&(l&&l.classList.remove(t),e.classList.add(t),r(e),c=!0),a+=1}}}return document.addEventListener("scroll",n),document.addEventListener("resize",n),n(),()=>{document.removeEventListener("scroll",n),document.removeEventListener("resize",n)}}))},i=a(53),s=a.n(i);const o="table-of-contents__link";function m({toc:e,isChild:t}){return e.length?l.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>l.a.createElement("li",{key:e.id},l.a.createElement("a",{href:`#${e.id}`,className:o,dangerouslySetInnerHTML:{__html:e.value}}),l.a.createElement(m,{isChild:!0,toc:e.children}))))):null}t.a=function({toc:e}){return c(o,"table-of-contents__link--active",100),l.a.createElement("div",{className:Object(r.a)(s.a.tableOfContents,"thin-scrollbar")},l.a.createElement(m,{toc:e}))}}}]);