(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4GT2":function(e,t,a){},"Ac1+":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),c=a("Wbzz"),o=(a("4GT2"),function(e){void 0===e&&(e=15);for(var t="",a="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=0;n<e;n++)t+=a.charAt(Math.floor(Math.random()*a.length));return t});t.a=function(e){var t=e.index,a=e.pageCount,n=e.relativeUrl,l=[];return a>=11&&(t<=2?l.push(r.a.createElement(c.Link,{key:o(),to:n},"<")):l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(t-1)},"<"))),a<11?Object.keys(Array.from({length:a})).forEach((function(e,a){l.push(r.a.createElement(c.Link,{key:o(),className:a+1===t?"currentPage":"",to:n+"/"+(0===a?"":a+1)},a+1))})):t<=5?(Object.keys(Array.from({length:t+2})).forEach((function(e,a){l.push(r.a.createElement(c.Link,{key:o(),className:a+1===t?"currentPage":"",to:n+"/"+(0===a?"":a+1)},a+1))})),l.push(r.a.createElement("span",{key:o()},"...")),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(a-2)},a-2)),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(a-1)},a-1)),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+a},a))):t>=a-4?(l.push(r.a.createElement(c.Link,{key:o(),to:""+n},"1")),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/2"},"2")),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/3"},"3")),l.push(r.a.createElement("span",{key:o()},"...")),Object.keys(Array.from({length:a-t+3})).forEach((function(e,a){var m=a+t-3;l.push(r.a.createElement(c.Link,{key:o(),className:m+1===t?"currentPage":"",to:n+"/"+(0===m?"":m+1)},m+1))}))):(l.push(r.a.createElement(c.Link,{key:o(),to:""+n},"1")),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/2"},"2")),l.push(r.a.createElement("span",{key:o()},"...")),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(t-2)},t-2)),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(t-1)},t-1)),l.push(r.a.createElement(c.Link,{key:o(),className:"currentPage",to:n+"/"+t},t)),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(t+1)},t+1)),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(t+2)},t+2)),l.push(r.a.createElement("span",{key:o()},"...")),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(a-1)},a-1)),l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+a},a))),a>=11&&(t===a?l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+a},">")):l.push(r.a.createElement(c.Link,{key:o(),to:n+"/"+(t+1)},">"))),r.a.createElement("div",{className:"paginator"},l)}},zOlY:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),c=a("+ZDr"),o=a.n(c),l=a("Bl7J"),m=a("vrFN"),s=a("Ac1+");t.default=function(e){var t=e.pageContext,a=t.group,n=t.index,c=t.pageCount,u=t.pathPrefix;return r.a.createElement(l.a,null,r.a.createElement(m.a,{title:"Blog"}),r.a.createElement(s.a,{index:n,pageCount:c,relativeUrl:"/"+u}),a.map((function(e){var t=e.node;return r.a.createElement("div",{className:"normal-homepage-item",key:t.id},r.a.createElement(o.a,{className:"title",to:t.frontmatter.path},r.a.createElement("h3",null,t.frontmatter.title)),r.a.createElement("h6",{className:"information"},"Posted by ",t.frontmatter.author," on ",t.frontmatter.date),r.a.createElement(o.a,{className:"readMore",to:t.frontmatter.path},"Read More"),r.a.createElement("br",null))})),r.a.createElement(s.a,{index:n,pageCount:c,relativeUrl:"/"+u}))}}}]);
//# sourceMappingURL=component---src-templates-posts-js-c8489b92bf15cf93fb0e.js.map