(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{148:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return d});n(77);var a=n(7),r=n.n(a),o=n(0),i=n.n(o),l=n(178),c=n.n(l),s=n(154),m=n(153),u=(n(179),n(180),n(181),function(e){function t(t){return e.call(this,t)||this}r()(t,e);var n=t.prototype;return n.componentDidMount=function(){document.querySelectorAll('[data-inline-script="pass-it"]').forEach(function(e){if(""===e.src)window.eval(e.innerHTML);else{var t=document.createElement("script");t.type="text/javascript",t.src=e.src,t.onload=function(){return window.eval(e.innerHTML)},document.body.appendChild(t)}});var e=new c.a({clientID:"de04802a3102524b19dc",clientSecret:"d36e4f7aecf8fd5c303f0738e79f5e0b1b2bfb64",repo:"sir0xb.github.io",owner:"sir0xb",admin:["Sir0xb@live.com"],id:location.pathname,distractionFreeMode:!1});console.log("Yo",this.props.data.markdownRemark.frontmatter.path),e.render("gitalk-container")},n.render=function(){var e=this.props.data.markdownRemark;return i.a.createElement(s.a,{categories:e.frontmatter.categories},i.a.createElement(m.a,{title:e.frontmatter.title}),i.a.createElement("button",{className:"go-back",onClick:function(){window.history.back()}},"Go back"),i.a.createElement("div",{className:"blog-post"},i.a.createElement("h2",{className:"title"},e.frontmatter.title),i.a.createElement("h6",{className:"information"},"Posted by ",e.frontmatter.author," on ",e.frontmatter.date),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}})),i.a.createElement("div",{id:"gitalk-container"}))},t}(i.a.Component)),d="2752245121";t.default=u},153:function(e,t,n){"use strict";var a=n(161),r=n(0),o=n.n(r),i=n(1),l=n.n(i),c=n(162),s=n.n(c),m=n(36);function u(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(m.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a},{name:"google-site-verification",content:"QBAgtxRn8b3k4fE3JJGBPLzwXBQGVr_Ao__qAN7KAd8"}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var d="2515784693"},154:function(e,t,n){"use strict";var a=n(155),r=n(0),o=n.n(r),i=n(1),l=n.n(i),c=n(36),s=n(7),m=n.n(s),u=n(37),d=n.n(u),p=(n(156),function(e){function t(t){var n;return(n=e.call(this,t)||this).scrollHandle=n.scrollHandle.bind(d()(d()(n))),n}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandle)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandle)},n.scrollHandle=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;this.refs.progress_bar.style.width=e+"%"},n.render=function(){return o.a.createElement("div",{className:"scroll-indicator"},o.a.createElement("div",{ref:"progress_bar",className:"progress-bar"}))},t}(o.a.Component)),h=(n(76),n(157),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentMenu:"home"},n}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=window.location.pathname.split("/")[1];this.setState({currentMenu:""===e?"home":e}),""===e||/^[0-9]+$/.test(e)?this.setState({currentMenu:"home"}):"programming"===e?this.setState({currentMenu:"programming"}):"conversation"===e?this.setState({currentMenu:"conversation"}):"music"===e?this.setState({currentMenu:"music"}):"about"===e?this.setState({currentMenu:"about"}):this.setState({currentMenu:this.props.categories||"null"})},n.render=function(){var e=this.props.siteTitle,t=this.state.currentMenu;return o.a.createElement("div",{className:"header mobile-menu"},o.a.createElement("div",{className:"container"},o.a.createElement("ul",{className:"mobile-site-title"},o.a.createElement("li",null,o.a.createElement(c.Link,{to:"/"},e))),o.a.createElement("ul",null,o.a.createElement("li",{className:"site-title"},o.a.createElement("h1",null,o.a.createElement(c.Link,{to:"/"},e))),o.a.createElement("li",{className:"home"===t?"menu-item currentMenu":"menu-item"},o.a.createElement("h3",null,o.a.createElement(c.Link,{className:"mobile-menu",to:"/"},"首页"))),o.a.createElement("li",{className:"programming"===t?"menu-item currentMenu":"menu-item"},o.a.createElement("h3",null,o.a.createElement(c.Link,{className:"mobile-menu",to:"/programming"},"编程"))),o.a.createElement("li",{className:"conversation"===t?"menu-item currentMenu":"menu-item"},o.a.createElement("h3",null,o.a.createElement(c.Link,{className:"mobile-menu",to:"/conversation"},"话题"))),o.a.createElement("li",{className:"music"===t?"menu-item currentMenu":"menu-item"},o.a.createElement("h3",null,o.a.createElement(c.Link,{className:"mobile-menu",to:"/music"},"音乐"))),o.a.createElement("li",{className:"about"===t?"menu-item currentMenu":"menu-item"},o.a.createElement("h3",null,o.a.createElement(c.Link,{className:"mobile-menu",to:"/about"},"关于"))))))},t}(o.a.Component));h.propTypes={siteTitle:l.a.string},h.defaultProps={siteTitle:""};var f=h,E=(n(158),function(){return o.a.createElement("footer",{className:"footer"},"Copyright © ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.gatsbyjs.org/"},"Gatsby"))}),g=(n(159),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={show:!1},n.timer=void 0,n.scrollHandle=n.scrollHandle.bind(d()(d()(n))),n}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandle)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandle)},n.scrollHandle=function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.setState({show:document.body.scrollTop>700||document.documentElement.scrollTop>700})},100)},n.render=function(){return this.state.show&&o.a.createElement("div",{className:"back-to-top"},o.a.createElement("button",{onClick:function(){window.scrollTo(0,0)}},"⬆︎"))},t}(o.a.Component)),b=(n(160),o.a.Fragment),v=function(e){var t=e.children,n=e.categories;return o.a.createElement(c.StaticQuery,{query:"86343720",render:function(e){return o.a.createElement(b,null,o.a.createElement(p,null),o.a.createElement(f,{siteTitle:e.site.siteMetadata.title,categories:n}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,minHeight:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),o.a.createElement(E,null),o.a.createElement(g,null))},data:a})};v.propTypes={children:l.a.node.isRequired};t.a=v},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball"}}}}},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){},159:function(e,t,n){},160:function(e,t,n){},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball",description:"热爱生活、喜欢编程、喜欢旅游.",author:"@Sir0xb"}}}}},180:function(e,t,n){},181:function(e,t,n){}}]);
//# sourceMappingURL=component---src-templates-post-js-9a92f03febebcdecb691.js.map