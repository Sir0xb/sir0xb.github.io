(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(160),s=a(158),o=(a(29),a(179)),l=a(36),c=a(180),d=a.n(c),u=function(e){return r.a.createElement(l.StaticQuery,{query:"498042933",render:function(t){return r.a.createElement(d.a,Object.assign({},e,{fluid:t.placeholderImage.childImageSharp.fluid}))},data:o})};a(181),t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"About"}),r.a.createElement("div",{className:"about"},r.a.createElement("h2",null,"关于博客"),r.a.createElement("hr",null),r.a.createElement("h4",null,"为什么选择自己做博客，而不是直接用博客"),r.a.createElement("p",null,r.a.createElement(u,{className:"test"}),"xxxx"),r.a.createElement("hr",null),r.a.createElement("h4",null,"为什么选择自己做博客，而不是直接用博客"),r.a.createElement("p",null,"yyy")))}},153:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball"}}}}},154:function(e,t,a){},155:function(e,t,a){},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){"use strict";var n=a(159),r=a(0),i=a.n(r),s=a(1),o=a.n(s),l=a(161),c=a.n(l),d=a(36);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title;return i.a.createElement(d.StaticQuery,{query:A,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:o},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:o},{name:"twitter:description",content:n}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string.isRequired},t.a=u;var A="2515784693"},159:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball",description:"Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.",author:"@Sir0xb"}}}}},160:function(e,t,a){"use strict";var n=a(153),r=a(0),i=a.n(r),s=a(1),o=a.n(s),l=a(36),c=a(7),d=a.n(c),u=a(37),A=a.n(u),f=(a(154),function(e){function t(t){var a;return(a=e.call(this,t)||this).scrollHandle=a.scrollHandle.bind(A()(A()(a))),a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandle)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandle)},a.scrollHandle=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;this.refs.progress_bar.style.width=e+"%"},a.render=function(){return i.a.createElement("div",{className:"scroll-indicator"},i.a.createElement("div",{ref:"progress_bar",className:"progress-bar"}))},t}(i.a.Component)),p=(a(76),a(155),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={currentMenu:"home"},a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=window.location.pathname.split("/")[1];this.setState({currentMenu:""===e?"home":e}),""===e||/^[0-9]+$/.test(e)?this.setState({currentMenu:"home"}):"about"===e?this.setState({currentMenu:"about"}):"blog"===e||24===e.length?this.setState({currentMenu:"blog"}):this.setState({currentMenu:"null"})},a.render=function(){var e=this.props.siteTitle,t=this.state.currentMenu;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"container"},i.a.createElement("ul",null,i.a.createElement("li",{className:"site-title"},i.a.createElement("h1",null,i.a.createElement(l.Link,{to:"/"},e))),i.a.createElement("li",{className:"home"===t?"menu-item currentMenu":"menu-item"},i.a.createElement("h3",null,i.a.createElement(l.Link,{to:"/"},"Home"))),i.a.createElement("li",{className:"blog"===t?"menu-item currentMenu":"menu-item"},i.a.createElement("h3",null,i.a.createElement(l.Link,{to:"/blog"},"Blog"))),i.a.createElement("li",{className:"about"===t?"menu-item currentMenu":"menu-item"},i.a.createElement("h3",null,i.a.createElement(l.Link,{to:"/about"},"About"))))))},t}(i.a.Component));p.propTypes={siteTitle:o.a.string},p.defaultProps={siteTitle:""};var m=p,h=function(){return i.a.createElement("footer",{style:{background:"#F4F4F4",color:"#b3b3b3",margin:"0 auto",padding:"1rem 1.0875rem",textAlign:"center"}},"Copyright © ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.gatsbyjs.org/"},"Gatsby"))},g=(a(156),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={show:!1},a.timer=void 0,a.scrollHandle=a.scrollHandle.bind(A()(A()(a))),a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandle)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandle)},a.scrollHandle=function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.setState({show:document.body.scrollTop>700||document.documentElement.scrollTop>700})},100)},a.render=function(){return this.state.show&&i.a.createElement("div",{className:"back-to-top"},i.a.createElement("button",{onClick:function(){window.scrollTo(0,0)}},"⬆︎"))},t}(i.a.Component)),E=(a(157),i.a.Fragment),b=function(e){var t=e.children;return i.a.createElement(l.StaticQuery,{query:"86343720",render:function(e){return i.a.createElement(E,null,i.a.createElement(f,null),i.a.createElement(m,{siteTitle:e.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,minHeight:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(h,null),i.a.createElement(g,null))},data:n})};b.propTypes={children:o.a.node.isRequired};t.a=b},179:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHWn7AmijJXmkxAv//EAB0QAAIBBAMAAAAAAAAAAAAAAAECAwAEERIiMTP/2gAIAQEAAQUCLaiFzTO2T52+4keTDHqE8pXZW//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEj/8QAHBABAAEEAwAAAAAAAAAAAAAAAQACEDJxESFh/9oACAEBAAY/AnmZtXjZ1ErcS7qdM//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFBMVFhkfD/2gAIAQEAAT8hK0QD1EC0ukguUC0tKssF/nDXmYCiAZT5bYZ2Fz//2gAMAwEAAgADAAAAEATXPf/EABcRAAMBAAAAAAAAAAAAAAAAAAAQEUH/2gAIAQMBAT8Qwqh//8QAGREBAAIDAAAAAAAAAAAAAAAAAQARECFB/9oACAECAQE/EK2YdIrc/8QAHhABAAICAgMBAAAAAAAAAAAAAQARITFRYUGBkaH/2gAIAQEAAT8QvhjaUArfUAShiwO7AxKADXEqRFAax5gLCL6oufUZgmOYpEwlPc23dfhH5DpCt9qs/9k=",aspectRatio:1,src:"/static/1a16a9d79513b7cc3441ac1626576df3/53b4a/favicon.jpg",srcSet:"/static/1a16a9d79513b7cc3441ac1626576df3/bf99b/favicon.jpg 75w,\n/static/1a16a9d79513b7cc3441ac1626576df3/9d7df/favicon.jpg 150w,\n/static/1a16a9d79513b7cc3441ac1626576df3/53b4a/favicon.jpg 300w,\n/static/1a16a9d79513b7cc3441ac1626576df3/79db1/favicon.jpg 341w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},180:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(37)),o=n(a(83)),l=n(a(84)),c=n(a(0)),d=n(a(1)),u=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},p=[];var m=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){p.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),p.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+o+l+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,o.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=f(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&m(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,p=e.fluid,m=e.fixed,E=e.backgroundColor,b=e.Tag,y="boolean"==typeof E?"lightgray":E,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,A),v=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),S={title:t,alt:this.state.isVisible?"":a,style:w,className:f};if(p){var j=p;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(j.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/j.aspectRatio+"%"}}),j.base64&&c.default.createElement(g,(0,l.default)({src:j.base64},S)),j.tracedSVG&&c.default.createElement(g,(0,l.default)({src:j.tracedSVG},S)),y&&c.default.createElement(b,{title:t,style:{backgroundColor:y,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,j.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:j.srcSetWebp,sizes:j.sizes}),c.default.createElement("source",{srcSet:j.srcSet,sizes:j.sizes}),c.default.createElement(g,{alt:a,title:t,src:j.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},j))}}))}if(m){var B=m,L=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete L.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:L,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},B.base64&&c.default.createElement(g,(0,l.default)({src:B.base64},S)),B.tracedSVG&&c.default.createElement(g,(0,l.default)({src:B.tracedSVG},S)),y&&c.default.createElement(b,{title:t,style:{backgroundColor:y,width:B.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:B.height}}),this.state.isVisible&&c.default.createElement("picture",null,B.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),c.default.createElement("source",{srcSet:B.srcSet,sizes:B.sizes}),c.default.createElement(g,{alt:a,title:t,width:B.width,height:B.height,src:B.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:B.width,height:B.height},B))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),y=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:b,sizes:y,fixed:b,fluid:y,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var w=E;t.default=w},181:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-about-index-jsx-ad2ef02489e81b689614.js.map