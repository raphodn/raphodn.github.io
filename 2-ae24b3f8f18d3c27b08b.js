(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{175:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(33),l=a.n(o);a.d(t,"a",function(){return l.a});a(176),r.a.createContext({});s.a.object,s.a.string.isRequired,s.a.func,s.a.func},176:function(e,t,a){var n;e.exports=(n=a(182))&&n.default||n},177:function(e,t,a){"use strict";var n=a(180),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(179),c=a.n(l),u=function(e){var t=e.description,a=e.lang,r=e.meta,s=e.keywords,o=e.title,l=n.data.site.siteMetadata,u=l.title,d=l.description,m=l.author,p=o||u,f=t||d;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:p,titleTemplate:o?o+" :: "+u:u,meta:[{name:"description",content:f},{property:"og:title",content:p},{property:"og:description",content:f},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:p},{name:"twitter:description",content:f},{name:"twitter:creator",content:m}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(r)})};u.defaultProps={lang:"en",meta:[],keywords:["gatsby","blog","dark","light","personal site"]},u.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string},t.a=u},178:function(e,t,a){"use strict";var n=a(181),r=a(0),i=a.n(r),s=a(4),o=a.n(s),l=a(175),c=a(179),u=a(153),d=a.n(u),m=function(e){var t=e.d,a=e.size,n=void 0===a?"1em":a,r=e.label,s=e.style;return i.a.createElement("span",{className:d.a.root,style:s,role:"figure"},i.a.createElement("svg",{version:"1.1",width:n,height:n,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},i.a.createElement("path",{d:t,className:d.a.icon})),r&&i.a.createElement("span",{className:d.a.label},r))};m.propTypes={d:o.a.string,size:o.a.number,label:o.a.string,style:o.a.object};var p=m,f=a(154),g=a.n(f),h=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.isMobileMenu,r=t.slice(0);return!n&&r.splice(a),r.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(l.a,{to:e.path},e.title))})},b=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.onToggleSubMenu,r=t.slice(0);r.splice(0,a);var s=r.map(function(e,t){return i.a.createElement("li",{key:t},i.a.createElement(l.a,{to:e.path},e.title))});return i.a.createElement(i.a.Fragment,null,s,i.a.createElement("div",{className:g.a.subMenuOverlay,role:"button",tabIndex:0,onClick:n}))},y=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.menuMoreText,r=e.isMobileMenuVisible,s=e.isSubMenuVisible,o=e.onToggleMobileMenu,l=e.onToggleSubMenu,c=e.onChangeTheme,u=!(a>=t.length)&&a>0;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:g.a.mobileMenuContainer},i.a.createElement(i.a.Fragment,null,r?i.a.createElement(i.a.Fragment,null,i.a.createElement("ul",{className:g.a.mobileMenu},i.a.createElement(h,{mainMenu:t,isMobileMenu:!0})),i.a.createElement("div",{onClick:o,className:g.a.mobileMenuOverlay})):null,i.a.createElement("button",{className:g.a.menuTrigger,style:{color:"inherit"},onClick:o,type:"button","aria-label":"Menu"},i.a.createElement(p,{style:{cursor:"pointer"},size:24,d:"M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z"})))),i.a.createElement("div",{className:g.a.desktopMenuContainer},i.a.createElement("ul",{className:g.a.menu},i.a.createElement(h,{mainMenu:t,mainMenuItems:a}),u?i.a.createElement(i.a.Fragment,null,i.a.createElement("button",{className:g.a.subMenuTrigger,onClick:l,type:"button","aria-label":"Menu"},n||"Menu"," ",i.a.createElement("span",{className:g.a.menuArrow},">")),s?i.a.createElement("ul",{className:g.a.subMenu},i.a.createElement(b,{mainMenu:t,mainMenuItems:a,onToggleSubMenu:l})):null):null)),i.a.createElement("button",{className:g.a.themeToggle,onClick:c,type:"button","aria-label":"Theme toggle"},i.a.createElement(p,{style:{cursor:"pointer"},size:24,d:"M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22\n3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7\n13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"})))};y.propTypes={mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,menuMoreText:o.a.string,isMobileMenuVisible:o.a.bool,isSubMenuVisible:o.a.bool,onToggleMobileMenu:o.a.func,onToggleSubMenu:o.a.func,onChangeTheme:o.a.func},b.propTypes={mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,onToggleSubMenu:o.a.func};var E=y,v=a(155),M=a.n(v),w=function(e){var t=e.siteLogo,a=e.logoText,n=e.mainMenu,s=e.mainMenuItems,o=e.menuMoreText,u=e.defaultTheme,d="undefined"!=typeof window&&window.localStorage.getItem("theme")||null,m=Object(r.useState)(d),p=m[0],f=m[1],g=Object(r.useState)(!1),h=g[0],b=g[1],y=Object(r.useState)(!1),v=y[0],w=y[1];return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.Helmet,null,i.a.createElement("body",{className:"light"===(p||u)?"light-theme":"dark-theme"})),i.a.createElement("header",{className:M.a.header},i.a.createElement("div",{className:M.a.inner},i.a.createElement(l.a,{to:"/"},i.a.createElement("div",{className:M.a.logo},t.src?i.a.createElement("img",{src:t.src,alt:t.alt}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:M.a.text},"// ",a)))),i.a.createElement("span",{className:M.a.right},i.a.createElement(E,{mainMenu:n,mainMenuItems:s,isMobileMenuVisible:h,isSubMenuVisible:v,menuMoreText:o,onToggleMobileMenu:function(){return b(!h)},onToggleSubMenu:function(){return w(!v)},onChangeTheme:function(){var e="light"===(p||u)?"dark":"light";f(e),"undefined"!=typeof window&&window.localStorage.setItem("theme",e)}})))))};w.propTypes={siteLogo:o.a.object,logoText:o.a.string,defaultTheme:o.a.string,mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,menuMoreText:o.a.string};var S=w,T=a(156),O=a.n(T),I=function(e){var t=e.copyrights;return i.a.createElement("footer",{className:O.a.footer},t?i.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):i.a.createElement(i.a.Fragment,null,i.a.createElement("span",{className:O.a.footerCopyrights},"© 2019 Raphael Odini"),i.a.createElement("span",{className:O.a.footerCopyrights},i.a.createElement(l.a,{to:"/sitemap"},"Sitemap"))))};I.propTypes={copyrights:o.a.string};var N=I,x=(a(157),function(e){var t=e.children,a=n.data.site.siteMetadata,r=a.title,s=a.logo,o=a.logoText,l=a.defaultTheme,c=a.mainMenu,u=a.showMenuItems,d=a.menuMoreText,m=a.copyrights;return i.a.createElement("div",{className:"container"},i.a.createElement(S,{siteTitle:r,siteLogo:s,logoText:o,defaultTheme:l,mainMenu:c,mainMenuItems:u,menuMoreText:d}),i.a.createElement("div",{className:"content"},i.a.createElement("div",null,t)),i.a.createElement(N,{copyrights:m}))});x.propTypes={children:o.a.node.isRequired};t.a=x},180:function(e){e.exports={data:{site:{siteMetadata:{title:"Raphael Odini · datalover & full-stack software engineer",description:"A space to share things I care about, projects and notes. Also my resume :)",author:"@raphodn"}}}}},181:function(e){e.exports={data:{site:{siteMetadata:{title:"Raphael Odini · datalover & full-stack software engineer",logo:{src:"",alt:""},logoText:"Raphael Odini",defaultTheme:"dark",copyrights:"",mainMenu:[{title:"About",path:"/about"},{title:"Projects",path:"/projects"},{title:"Blog",path:"/blog"}],showMenuItems:3,menuMoreText:"Show more"}}}}},182:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(55),l=a(2),c=function(e){var t=e.location,a=l.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},t.default=c},184:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(4),s=a.n(i),o=a(175),l=a(202),c=a.n(l),u=a(185),d=a(158),m=a.n(d),p=function(e){var t=e.title,a=e.date,n=e.path,i=e.coverImage,s=e.excerpt,l=e.tags,d=e.html;e.previousPost,e.nextPost;return r.a.createElement("div",{className:m.a.post+" "+(d?"":m.a.postShort)},r.a.createElement("div",{className:m.a.postContent},r.a.createElement("h1",{className:m.a.title},r.a.createElement(o.a,{to:n},t)),r.a.createElement("div",{className:m.a.meta},a),i&&r.a.createElement(c.a,{fluid:i.childImageSharp.fluid,className:m.a.coverImage}),d?r.a.createElement(r.a.Fragment,null,r.a.createElement("br",null),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:d}}),r.a.createElement("br",null),l?r.a.createElement("div",{className:m.a.tags},l.map(function(e){return r.a.createElement("span",{key:e},r.a.createElement(o.a,{to:"/blog/tag/"+Object(u.toKebabCase)(e)+"/",key:Object(u.toKebabCase)(e)},r.a.createElement("span",{className:m.a.tag},"#",e)),r.a.createElement("span",null,"  "))})):null):r.a.createElement(r.a.Fragment,null,s?r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,s)):null)))};p.propTypes={title:s.a.string,date:s.a.string,path:s.a.string,coverImage:s.a.object,excerpt:s.a.string,html:s.a.string,tags:s.a.arrayOf(s.a.string),previousPost:s.a.object,nextPost:s.a.object},t.a=p},185:function(e,t,a){a(186),a(36),e.exports.toKebabCase=function(e){return e.replace(new RegExp("(\\s|_|-)+","gmi"),"-")}},186:function(e,t,a){var n=a(6),r=a(187),i=a(25).f,s=a(190).f,o=a(58),l=a(74),c=n.RegExp,u=c,d=c.prototype,m=/a/g,p=/a/g,f=new c(m)!==m;if(a(18)&&(!f||a(19)(function(){return p[a(3)("match")]=!1,c(m)!=m||c(p)==p||"/a/i"!=c(m,"i")}))){c=function(e,t){var a=this instanceof c,n=o(e),i=void 0===t;return!a&&n&&e.constructor===c&&i?e:r(f?new u(n&&!i?e.source:e,t):u((n=e instanceof c)?e.source:e,n&&i?l.call(e):t),a?this:d,c)};for(var g=function(e){e in c||i(c,e,{configurable:!0,get:function(){return u[e]},set:function(t){u[e]=t}})},h=s(u),b=0;h.length>b;)g(h[b++]);d.constructor=c,c.prototype=d,a(14)(n,"RegExp",c)}a(79)("RegExp")},187:function(e,t,a){var n=a(11),r=a(188).set;e.exports=function(e,t,a){var i,s=t.constructor;return s!==a&&"function"==typeof s&&(i=s.prototype)!==a.prototype&&n(i)&&r&&r(e,i),e}},188:function(e,t,a){var n=a(11),r=a(5),i=function(e,t){if(r(e),!n(t)&&null!==t)throw TypeError(t+": can't set as prototype!")};e.exports={set:Object.setPrototypeOf||("__proto__"in{}?function(e,t,n){try{(n=a(20)(Function.call,a(189).f(Object.prototype,"__proto__").set,2))(e,[]),t=!(e instanceof Array)}catch(r){t=!0}return function(e,a){return i(e,a),t?e.__proto__=a:n(e,a),e}}({},!1):void 0),check:i}},189:function(e,t,a){var n=a(78),r=a(56),i=a(35),s=a(76),o=a(26),l=a(75),c=Object.getOwnPropertyDescriptor;t.f=a(18)?c:function(e,t){if(e=i(e),t=s(t,!0),l)try{return c(e,t)}catch(a){}if(o(e,t))return r(!n.f.call(e,t),e[t])}},190:function(e,t,a){var n=a(77),r=a(57).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,r)}},202:function(e,t,a){"use strict";var n=a(8);t.__esModule=!0,t.default=void 0;var r,i=n(a(7)),s=n(a(39)),o=n(a(82)),l=n(a(83)),c=n(a(0)),u=n(a(203)),d=function(e){var t=(0,l.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},m=Object.create({}),p=function(e){var t=d(e),a=t.fluid?t.fluid.src:t.fixed.src;return m[a]||!1},f=new WeakMap;var g=function(e,t){var a=(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){if(f.has(e.target)){var t=f.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(e.target),f.delete(e.target),t())}})},{rootMargin:"200px"})),r);return a&&(a.observe(e),f.set(e,t)),function(){a.unobserve(e),f.delete(e)}},h=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcset=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1",u=e.transitionDelay?e.transitionDelay:"0.5s";return"<picture>"+n+"<img "+o+l+a+r+t+s+i+(e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"")+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+u+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.sizes,n=e.srcSet,r=e.src,i=e.style,s=e.onLoad,u=e.onError,d=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError"]);return c.default.createElement("img",(0,l.default)({sizes:a,srcSet:n,src:r},d,{onLoad:s,onError:u,ref:t,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},i)}))});b.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,o=p(t);!o&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var l=!(t.critical&&!t.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:l,seenBefore:o},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&(this.cleanUpListeners=g(e,function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0,imgLoaded:e})}))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=d(e),a=t.fluid?t.fluid.src:t.fixed.src,m[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=d(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,m=void 0===u?{}:u,p=e.placeholderClassName,f=e.fluid,g=e.fixed,y=e.backgroundColor,E=e.Tag,v=e.itemProp,M="boolean"==typeof y?"lightgray":y,w=(0,l.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},o,m),S=(0,l.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},o),T={title:t,alt:this.state.isVisible?"":a,style:w,className:p};if(f){var O=f;return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(O.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/O.aspectRatio+"%"}}),M&&c.default.createElement(E,{title:t,style:{backgroundColor:M,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",right:0,left:0}}),O.base64&&c.default.createElement(b,(0,l.default)({src:O.base64},T)),O.tracedSVG&&c.default.createElement(b,(0,l.default)({src:O.tracedSVG},T)),this.state.isVisible&&c.default.createElement("picture",null,O.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:O.srcSetWebp,sizes:O.sizes}),c.default.createElement(b,{alt:a,title:t,sizes:O.sizes,src:O.src,crossOrigin:this.props.crossOrigin,srcSet:O.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t},O))}}))}if(g){var I=g,N=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete N.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:N,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},M&&c.default.createElement(E,{title:t,style:{backgroundColor:M,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),I.base64&&c.default.createElement(b,(0,l.default)({src:I.base64},T)),I.tracedSVG&&c.default.createElement(b,(0,l.default)({src:I.tracedSVG},T)),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement(b,{alt:a,title:t,width:I.width,height:I.height,sizes:I.sizes,src:I.src,crossOrigin:this.props.crossOrigin,srcSet:I.srcSet,style:S,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:h((0,l.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string}),v=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string});y.propTypes={resolutions:E,sizes:v,fixed:E,fluid:v,fadeIn:u.default.bool,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string};var M=y;t.default=M},203:function(e,t,a){e.exports=a(204)()},204:function(e,t,a){"use strict";var n=a(205);function r(){}function i(){}i.resetWarningCache=r,e.exports=function(){function e(e,t,a,r,i,s){if(s!==n){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var a={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:r};return a.PropTypes=a,a}},205:function(e,t,a){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=2-ae24b3f8f18d3c27b08b.js.map