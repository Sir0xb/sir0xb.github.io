(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{146:function(e,t,n){"use strict";n.r(t),n.d(t,"postQuery",function(){return u});var a=n(0),r=n.n(a),l=n(36),i=n(157),u="4276369529";t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,null,r.a.createElement(l.Link,{to:"/blog"},"Go back"),r.a.createElement("hr",null),r.a.createElement("h1",null,t.frontmatter.title),r.a.createElement("h4",null,"Posted by ",t.frontmatter.auther," on ",t.frontmatter.date),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:t.html}}))}},154:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball"}}}}},155:function(e,t,n){},156:function(e,t,n){},157:function(e,t,n){"use strict";var a=n(154),r=n(0),l=n.n(r),i=n(1),u=n.n(i),c=n(36),o=(n(76),n(7)),m=n.n(o),s=(n(155),function(e){function t(t){var n;return(n=e.call(this,t)||this).state={currentMenu:"home"},n}m()(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=window.location.pathname.split("/")[1];this.setState({currentMenu:""===e?"home":e}),""===e?this.setState({currentMenu:"home"}):"about"===e?this.setState({currentMenu:"about"}):"services"===e?this.setState({currentMenu:"services"}):this.setState({currentMenu:"blog"})},n.render=function(){var e=this.props.siteTitle,t=this.state.currentMenu;return l.a.createElement("div",{className:"header"},l.a.createElement("div",{className:"container"},l.a.createElement("ul",null,l.a.createElement("li",{className:"site-title"},l.a.createElement("h1",null,l.a.createElement(c.Link,{to:"/"},e))),l.a.createElement("li",{className:"home"===t?"menu-item currentMenu":"menu-item"},l.a.createElement("h3",null,l.a.createElement(c.Link,{to:"/"},"Home"))),l.a.createElement("li",{className:"blog"===t?"menu-item currentMenu":"menu-item"},l.a.createElement("h3",null,l.a.createElement(c.Link,{to:"/blog"},"Blog"))),l.a.createElement("li",{className:"services"===t?"menu-item currentMenu":"menu-item"},l.a.createElement("h3",null,l.a.createElement(c.Link,{to:"/services"},"Services"))),l.a.createElement("li",{className:"about"===t?"menu-item currentMenu":"menu-item"},l.a.createElement("h3",null,l.a.createElement(c.Link,{to:"/about"},"About"))))))},t}(l.a.Component));s.propTypes={siteTitle:u.a.string},s.defaultProps={siteTitle:""};var d=s,h=function(){return l.a.createElement("footer",{style:{background:"#F4F4F4",color:"#b3b3b3",margin:"0 auto",padding:"1rem 1.0875rem",textAlign:"center"}},"Copyright © ",(new Date).getFullYear(),", Built with"," ",l.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.boliball.com"},"Sir0xb"))},E=(n(156),function(e){var t=e.children;return l.a.createElement(c.StaticQuery,{query:"86343720",render:function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d,{siteTitle:e.site.siteMetadata.title}),l.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,minHeight:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),l.a.createElement(h,null))},data:a})});E.propTypes={children:u.a.node.isRequired};t.a=E}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-49ef67088d32eaa7f341.js.map