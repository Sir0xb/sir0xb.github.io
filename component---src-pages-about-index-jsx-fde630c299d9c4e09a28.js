(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(154),s=a(153),l=(a(29),a(180)),o=a(36),c=a(181),d=a.n(c),u=function(e){return r.a.createElement(o.StaticQuery,{query:"498042933",render:function(t){return r.a.createElement(d.a,Object.assign({},e,{fluid:t.placeholderImage.childImageSharp.fluid}))},data:l})};a(182),t.default=function(){return r.a.createElement(i.a,null,r.a.createElement(s.a,{title:"About"}),r.a.createElement("div",{className:"about"},r.a.createElement("h2",{className:"title"},"关于博客"),r.a.createElement("hr",null),r.a.createElement(u,{className:"avatar"}),r.a.createElement("h4",null,"为啥不用博客站点，非要自己做一个博客？"),r.a.createElement("p",null,"2010年第一次接触博客，一晃已经过去了好多年。"),r.a.createElement("p",null,"一开始跟其他人一样，也是在一个博客站点写博客。当时，热情很高，曾经做过的笔记一一发到博客上。 还把珍藏的口琴谱拿出来分享。因为有些口琴谱是自己根据曲子还原出来的，网上我这里是独一家，于是给博客带来了不错的访问量，有时一天能有个上千的访问量。"),r.a.createElement("p",null,"2012年走完青藏线，把路上的点点滴滴通过博文的方式分享了出来。忙了一阵子很快到了年底，回头看之前写的文章发现很多都不翼而飞了，其实就是青藏线后半截的内容消失了。 可能是内容的原因，也可能是博文的配图，总之就那么消失了。"),r.a.createElement("p",null,"虽然，跟站点的客服交流了很多次，但结论是一样的：他们从来没动作我的文章。 当时还从来没有想过自己做博客，愤怒之后的第一个念头就是换个博客站点。 折腾了半天，总算把原博客的内容搬到了新浪博客上。不过，每种博客都是有自己的特点的，不可能每个功能都跟以前一样。 在适应新功能的过程中，总算冷静了下来，也能有心力去思考之前发生的事情。只要大环境是一样的，那么再怎么挪站点都是于事无补的，文章还是一样被删除。"),r.a.createElement("p",null,"试着在几个国外博客站点注册了账号尝试了下。但很快就放弃了。说实话，博客功能实在是太弱了，界面也不是很好看，整体感觉很糟糕。 这次尝试也令我萌生了是不是可以自己做个博客的想法。"),r.a.createElement("p",null,"有了目标事情基本就成一半了。在网上找了很多文章，还是有很多牛人也曾遭遇过跟我类似的经历，于是他们自己做了博客，还把宝贵的经验分享了出来。 参考大牛们的文章，最后在github上安了家。整体来说还不错，文章也很容易发布，界面也可以自己动手优化，对于程序员来说再适合不过了。"),r.a.createElement("hr",null),r.a.createElement("h4",null,"博客都发些什么内容"),r.a.createElement("p",null,"作为程序员肯定少不了技术文章，可以给自己的成长留下脚印。"),r.a.createElement("p",null,"有一阵挺喜欢订阅和阅读公众号上的文章，看到精彩之处总是要收藏回头再看看。 也许是因为公众号的文章亦是博文，也免不了同样的命运，曾经收藏的文章有时候就再也无缘再见了。 于是开始将不错的、有感触的文章转录到博客上，至少也给这些文章一些机会，哪怕被迫不翼而飞，也至少有个地方可以追溯。"),r.a.createElement("hr",null)))}},153:function(e,t,a){"use strict";var n=a(161),r=a(0),i=a.n(r),s=a(1),l=a.n(s),o=a(162),c=a.n(o),d=a(36);function u(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,l=e.title;return i.a.createElement(d.StaticQuery,{query:A,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n},{name:"google-site-verification",content:"QBAgtxRn8b3k4fE3JJGBPLzwXBQGVr_Ao__qAN7KAd8"}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})},data:n})}u.defaultProps={lang:"en",meta:[],keywords:[]},u.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.array,keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired},t.a=u;var A="2515784693"},154:function(e,t,a){"use strict";var n=a(155),r=a(0),i=a.n(r),s=a(1),l=a.n(s),o=a(36),c=a(7),d=a.n(c),u=a(37),A=a.n(u),f=(a(156),function(e){function t(t){var a;return(a=e.call(this,t)||this).scrollHandle=a.scrollHandle.bind(A()(A()(a))),a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandle)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandle)},a.scrollHandle=function(){var e=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;this.refs.progress_bar.style.width=e+"%"},a.render=function(){return i.a.createElement("div",{className:"scroll-indicator"},i.a.createElement("div",{ref:"progress_bar",className:"progress-bar"}))},t}(i.a.Component)),m=(a(76),a(157),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={currentMenu:"home"},a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=window.location.pathname.split("/")[1];this.setState({currentMenu:""===e?"home":e}),""===e||/^[0-9]+$/.test(e)?this.setState({currentMenu:"home"}):"programming"===e?this.setState({currentMenu:"programming"}):"conversation"===e?this.setState({currentMenu:"conversation"}):"music"===e?this.setState({currentMenu:"music"}):"about"===e?this.setState({currentMenu:"about"}):this.setState({currentMenu:this.props.categories||"null"})},a.render=function(){var e=this.props.siteTitle,t=this.state.currentMenu;return i.a.createElement("div",{className:"header"},i.a.createElement("div",{className:"container"},i.a.createElement("ul",null,i.a.createElement("li",{className:"site-title"},i.a.createElement("h1",null,i.a.createElement(o.Link,{to:"/"},e))),i.a.createElement("li",{className:"home"===t?"menu-item currentMenu":"menu-item"},i.a.createElement("h3",null,i.a.createElement(o.Link,{to:"/"},"首 页"))),i.a.createElement("li",{className:"programming"===t?"menu-item currentMenu":"menu-item"},i.a.createElement("h3",null,i.a.createElement(o.Link,{to:"/programming"},"编 程"))),i.a.createElement("li",{className:"conversation"===t?"menu-item currentMenu":"menu-item"},i.a.createElement("h3",null,i.a.createElement(o.Link,{to:"/conversation"},"话 题"))),i.a.createElement("li",{className:"music"===t?"menu-item currentMenu":"menu-item"},i.a.createElement("h3",null,i.a.createElement(o.Link,{to:"/music"},"音 乐"))),i.a.createElement("li",{className:"about"===t?"menu-item currentMenu":"menu-item"},i.a.createElement("h3",null,i.a.createElement(o.Link,{to:"/about"},"关 于"))))))},t}(i.a.Component));m.propTypes={siteTitle:l.a.string},m.defaultProps={siteTitle:""};var p=m,h=(a(158),function(){return i.a.createElement("footer",{className:"footer"},"Copyright © ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.gatsbyjs.org/"},"Gatsby"))}),g=(a(159),function(e){function t(t){var a;return(a=e.call(this,t)||this).state={show:!1},a.timer=void 0,a.scrollHandle=a.scrollHandle.bind(A()(A()(a))),a}d()(t,e);var a=t.prototype;return a.componentDidMount=function(){window.addEventListener("scroll",this.scrollHandle)},a.componentWillUnmount=function(){window.removeEventListener("scroll",this.scrollHandle)},a.scrollHandle=function(){var e=this;clearTimeout(this.timer),this.timer=setTimeout(function(){e.setState({show:document.body.scrollTop>700||document.documentElement.scrollTop>700})},100)},a.render=function(){return this.state.show&&i.a.createElement("div",{className:"back-to-top"},i.a.createElement("button",{onClick:function(){window.scrollTo(0,0)}},"⬆︎"))},t}(i.a.Component)),E=(a(160),i.a.Fragment),b=function(e){var t=e.children,a=e.categories;return i.a.createElement(o.StaticQuery,{query:"86343720",render:function(e){return i.a.createElement(E,null,i.a.createElement(f,null),i.a.createElement(p,{siteTitle:e.site.siteMetadata.title,categories:a}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:1200,minHeight:700,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},t),i.a.createElement(h,null),i.a.createElement(g,null))},data:n})};b.propTypes={children:l.a.node.isRequired};t.a=b},155:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball"}}}}},156:function(e,t,a){},157:function(e,t,a){},158:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){},161:function(e){e.exports={data:{site:{siteMetadata:{title:"Boliball",description:"热爱生活、喜欢编程、喜欢旅游.",author:"@Sir0xb"}}}}},180:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAUABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQFAf/EABUBAQEAAAAAAAAAAAAAAAAAAAEA/9oADAMBAAIQAxAAAAHWn7AmijJXmkxAv//EAB0QAAIBBAMAAAAAAAAAAAAAAAECAwAEERIiMTP/2gAIAQEAAQUCLaiFzTO2T52+4keTDHqE8pXZW//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABYRAAMAAAAAAAAAAAAAAAAAAAAQEf/aAAgBAgEBPwEj/8QAHBABAAEEAwAAAAAAAAAAAAAAAQACEDJxESFh/9oACAEBAAY/AnmZtXjZ1ErcS7qdM//EAB0QAQACAgIDAAAAAAAAAAAAAAEAESFBMVFhkfD/2gAIAQEAAT8hK0QD1EC0ukguUC0tKssF/nDXmYCiAZT5bYZ2Fz//2gAMAwEAAgADAAAAEATXPf/EABcRAAMBAAAAAAAAAAAAAAAAAAAQEUH/2gAIAQMBAT8Qwqh//8QAGREBAAIDAAAAAAAAAAAAAAAAAQARECFB/9oACAECAQE/EK2YdIrc/8QAHhABAAICAgMBAAAAAAAAAAAAAQARITFRYUGBkaH/2gAIAQEAAT8QvhjaUArfUAShiwO7AxKADXEqRFAax5gLCL6oufUZgmOYpEwlPc23dfhH5DpCt9qs/9k=",aspectRatio:1,src:"/static/1a16a9d79513b7cc3441ac1626576df3/53b4a/favicon.jpg",srcSet:"/static/1a16a9d79513b7cc3441ac1626576df3/bf99b/favicon.jpg 75w,\n/static/1a16a9d79513b7cc3441ac1626576df3/9d7df/favicon.jpg 150w,\n/static/1a16a9d79513b7cc3441ac1626576df3/53b4a/favicon.jpg 300w,\n/static/1a16a9d79513b7cc3441ac1626576df3/79db1/favicon.jpg 341w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},181:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(37)),l=n(a(82)),o=n(a(83)),c=n(a(0)),d=n(a(1)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},A={},f=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return A[a]||!1},m=[];var p=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+l+o+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},g=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});g.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var E=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,l=f(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:f(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&p(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:f(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,A[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,A=void 0===d?{}:d,f=e.placeholderClassName,m=e.fluid,p=e.fixed,E=e.backgroundColor,b=e.Tag,w="boolean"==typeof E?"lightgray":E,y=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,A),v=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),S={title:t,alt:this.state.isVisible?"":a,style:y,className:f};if(m){var L=m;return c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(L.srcSet)},c.default.createElement(b,{style:{width:"100%",paddingBottom:100/L.aspectRatio+"%"}}),L.base64&&c.default.createElement(g,(0,o.default)({src:L.base64},S)),L.tracedSVG&&c.default.createElement(g,(0,o.default)({src:L.tracedSVG},S)),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,L.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:L.srcSetWebp,sizes:L.sizes}),c.default.createElement("source",{srcSet:L.srcSet,sizes:L.sizes}),c.default.createElement(g,{alt:a,title:t,src:L.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t},L))}}))}if(p){var B=p,N=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:B.width,height:B.height},i);return"inherit"===i.display&&delete N.display,c.default.createElement(b,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(B.srcSet)},B.base64&&c.default.createElement(g,(0,o.default)({src:B.base64},S)),B.tracedSVG&&c.default.createElement(g,(0,o.default)({src:B.tracedSVG},S)),w&&c.default.createElement(b,{title:t,style:{backgroundColor:w,width:B.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:B.height}}),this.state.isVisible&&c.default.createElement("picture",null,B.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:B.srcSetWebp,sizes:B.sizes}),c.default.createElement("source",{srcSet:B.srcSet,sizes:B.sizes}),c.default.createElement(g,{alt:a,title:t,width:B.width,height:B.height,src:B.src,style:v,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,o.default)({alt:a,title:t,width:B.width,height:B.height},B))}}))}return null},t}(c.default.Component);E.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var b=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),w=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});E.propTypes={resolutions:b,sizes:w,fixed:b,fluid:w,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var y=E;t.default=y},182:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-about-index-jsx-fde630c299d9c4e09a28.js.map