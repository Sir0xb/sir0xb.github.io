(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{148:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(36),i=n(160),l=n(158);n(173);t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(l.a,{title:"404: Not found"}),r.a.createElement("section",{className:"page_404"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"four_zero_four_bg"},r.a.createElement("h1",null,"404")),r.a.createElement("div",{className:"contant_box_404"},r.a.createElement("h3",null,"Look like you're lost"),r.a.createElement("p",null,"the page you are looking for not avaible!"),r.a.createElement(o.Link,{to:"/"},"Go to Home")))))}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball"}}}}},154:function(e,t,n){},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){},158:function(e,t,n){"use strict";var a=n(159),r=n(0),o=n.n(r),i=n(1),l=n.n(i),c=n(161),s=n.n(c),u=n(36);function m(e){var t=e.description,n=e.lang,r=e.meta,i=e.keywords,l=e.title;return o.a.createElement(u.StaticQuery,{query:d,render:function(e){var a=t||e.site.siteMetadata.description;return o.a.createElement(s.a,{htmlAttributes:{lang:n},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:a},{property:"og:title",content:l},{property:"og:description",content:a},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:a}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})},data:a})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=m;var d="2515784693"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@Sir0xb"}}}}},160:function(e,t,n){"use strict";var a=n(153),r=n(0),o=n.n(r),i=n(1),l=n.n(i),c=n(36),s=n(7),u=n.n(s),m=n(37),d=n.n(m),p=(n(154),function(e){function t(t){var n;return(n=e.call(this,t)||this).scrollHandle=n.scrollHandle.bind(d()(d()(n))),n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandle)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandle)},n.scrollHandle=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;this.refs.progress_bar.style.width=e+"%"},n.render=function(){return o.a.createElement("div",{className:"scroll-indicator"},o.a.createElement("div",{ref:"progress_bar",className:"progress-bar"}))},t}(o.a.Component)),h=(n(76),n(155),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentMenu:"home"},n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=window.location.pathname.split("/")[1];this.setState({currentMenu:""===e?"home":e}),""===e?this.setState({currentMenu:"home"}):"about"===e?this.setState({currentMenu:"about"}):"blog"===e||24===e.length?this.setState({currentMenu:"blog"}):this.setState({currentMenu:"null"})},n.render=function(){var e=this.props.siteTitle,t=this.state.currentMenu;return o.a.createElement("div",{className:"header"},o.a.createElement("div",{className:"container"},o.a.createElement("ul",null,o.a.createElement("li",{className:"site-title"},o.a.createElement("h1",null,o.a.createElement(c.Link,{to:"/"},e))),o.a.createElement("li",{className:"home"===t?"menu-item currentMenu":"menu-item"},o.a.createElement("h3",null,o.a.createElement(c.Link,{to:"/"},"Home"))),o.a.createElement("li",{className:"blog"===t?"menu-item currentMenu":"menu-item"},o.a.createElement("h3",null,o.a.createElement(c.Link,{to:"/blog"},"Blog"))),o.a.createElement("li",{className:"about"===t?"menu-item currentMenu":"menu-item"},o.a.createElement("h3",null,o.a.createElement(c.Link,{to:"/about"},"About"))))))},t}(o.a.Component));h.propTypes={siteTitle:l.a.string},h.defaultProps={siteTitle:""};var f=h,E=function(){return o.a.createElement("footer",{style:{background:"#F4F4F4",color:"#b3b3b3",margin:"0 auto",padding:"1rem 1.0875rem",textAlign:"center"}},"Copyright © ",(new Date).getFullYear(),", Built with"," ",o.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.gatsbyjs.org/"},"Gatsby"))},g=(n(156),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={show:!1},n.timer=void 0,n.scrollHandle=n.scrollHandle.bind(d()(d()(n))),n}u()(t,e);var n=t.prototype;return n.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandle)},n.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandle)},n.scrollHandle=function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.setState({show:document.body.scrollTop>700||document.documentElement.scrollTop>700})},100)},n.render=function(){return this.state.show&&o.a.createElement("div",{className:"back-to-top"},o.a.createElement("button",{onClick:function(){window.scrollTo(0,0)}},"⬆︎"))},t}(o.a.Component)),b=(n(157),function(e){var t=e.children;return o.a.createElement(c.StaticQuery,{query:"86343720",render:function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement(p,null),o.a.createElement(f,{siteTitle:e.site.siteMetadata.title}),o.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,minHeight:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),o.a.createElement(E,null),o.a.createElement(g,null))},data:a})});b.propTypes={children:l.a.node.isRequired};t.a=b},173:function(e,t,n){}}]);
//# sourceMappingURL=component---src-pages-404-index-jsx-e1116c52d0660100b91d.js.map