(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{217:function(e,t,a){"use strict";a.r(t),a.d(t,"postsQuery",(function(){return u}));var r=a(0),i=a.n(r),n=a(1),s=a.n(n),l=a(211),o=a(212),d=a(232),c=function(e){var t=e.data.allMarkdownRemark.edges;return i.a.createElement(i.a.Fragment,null,i.a.createElement(l.a,null),i.a.createElement(o.a,null,t.map((function(e){var t=e.node;return i.a.createElement(d.a,{key:t.id,title:t.frontmatter.title,date:t.frontmatter.date,path:t.frontmatter.path,coverImage:t.frontmatter.coverImage,tags:t.frontmatter.tags,excerpt:t.frontmatter.excerpt||t.autoExcerpt})}))))};c.propTypes={data:s.a.object.isRequired};var u="2846324661";t.default=c},231:function(e,t,a){a(143),a(21),e.exports.toKebabCase=function(e){return e.replace(new RegExp("(\\s|_|-)+","gmi"),"-")}},232:function(e,t,a){"use strict";var r=a(0),i=a.n(r),n=a(1),s=a.n(n),l=a(30),o=a(233),d=a.n(o),c=a(231),u=a(213),f=a.n(u),g=function(e){var t=e.title,a=e.date,r=e.path,n=e.coverImage,s=e.excerpt,o=e.tags,u=e.html;e.previousPost,e.nextPost;return i.a.createElement("div",{className:f.a.post+" "+(u?"":f.a.postShort)},i.a.createElement("div",{className:f.a.postContent},i.a.createElement("h1",{className:f.a.title},i.a.createElement(l.a,{to:r},t)),i.a.createElement("div",{className:f.a.meta},a),n&&i.a.createElement(d.a,{fluid:n.childImageSharp.fluid,className:f.a.coverImage}),u?i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}),i.a.createElement("br",null),o?i.a.createElement("div",{className:f.a.tags},o.map((function(e){return i.a.createElement("span",{key:e},i.a.createElement(l.a,{to:"/blog/tag/"+Object(c.toKebabCase)(e)+"/",key:Object(c.toKebabCase)(e)},i.a.createElement("span",{className:f.a.tag},"#",e)),i.a.createElement("span",null,"  "))}))):null):i.a.createElement(i.a.Fragment,null,s?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,s)):null)))};g.propTypes={title:s.a.string,date:s.a.string,path:s.a.string,coverImage:s.a.object,excerpt:s.a.string,html:s.a.string,tags:s.a.arrayOf(s.a.string),previousPost:s.a.object,nextPost:s.a.object},t.a=g},233:function(e,t,a){"use strict";a(18),a(19),a(9),a(106),a(145),a(234);var r=a(24);t.__esModule=!0,t.default=void 0;var i,n=r(a(85)),s=r(a(12)),l=r(a(146)),o=r(a(147)),d=r(a(0)),c=r(a(1)),u=function(e){var t=(0,o.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=S([].concat(t.fluid))),t.fixed&&(t.fixed=S([].concat(t.fixed))),t},f=function(e){var t=e.fluid,a=e.fixed;return(t&&t[0]||a&&a[0]).src},g=Object.create({}),p=function(e){var t=u(e),a=f(t);return g[a]||!1},m="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,h="undefined"!=typeof window,b=h&&window.IntersectionObserver,y=new WeakMap;function v(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function S(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function E(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function w(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(y.has(e.target)){var t=y.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),y.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),y.set(e,t)),function(){a.unobserve(e),y.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",l=e.height?'height="'+e.height+'" ':"",o=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+d+s+l+a+r+t+n+i+o+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},R=function(e){var t=e.src,a=e.imageVariants,r=e.generateSources,i=e.spreadProps,n=d.default.createElement(C,(0,o.default)({src:t},i));return a.length>1?d.default.createElement("picture",null,r(a),n):n},C=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=(0,l.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable"]);return d.default.createElement("img",(0,o.default)({sizes:a,srcSet:r,src:i},g,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=h&&p(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!m&&b&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||h&&(m||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=p(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){return t.setState({imgLoaded:e,imgCached:!!t.imageRef.current.currentSrc})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=f(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,l=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,p=e.fluid,m=e.fixed,h=e.backgroundColor,b=e.durationFadeIn,y=e.Tag,S=e.itemProp,L=e.loading,I=e.draggable,V=!1===this.state.fadeIn||this.state.imgLoaded,z=!0===this.state.fadeIn&&!this.state.imgCached,x=(0,o.default)({opacity:V?1:0,transition:z?"opacity "+b+"ms":"none"},l),N="boolean"==typeof h?"lightgray":h,k={transitionDelay:b+"ms"},j=(0,o.default)({opacity:this.state.imgLoaded?0:1},z&&k,{},l,{},f),T={title:t,alt:this.state.isVisible?"":a,style:j,className:g};if(p){var P=p,q=P[0];return d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(q.srcSet)},d.default.createElement(y,{style:{width:"100%",paddingBottom:100/q.aspectRatio+"%"}}),N&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:N,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},z&&k)}),q.base64&&d.default.createElement(R,{src:q.base64,spreadProps:T,imageVariants:P,generateSources:w}),q.tracedSVG&&d.default.createElement(R,{src:q.tracedSVG,spreadProps:T,imageVariants:P,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,v(P),d.default.createElement(C,{alt:a,title:t,sizes:q.sizes,src:q.src,crossOrigin:this.props.crossOrigin,srcSet:q.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:L},q,{imageVariants:P}))}}))}if(m){var F=m,M=F[0],W=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:M.width,height:M.height},n);return"inherit"===n.display&&delete W.display,d.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:W,ref:this.handleRef,key:"fixed-"+JSON.stringify(M.srcSet)},N&&d.default.createElement(y,{title:t,style:(0,o.default)({backgroundColor:N,width:M.width,opacity:this.state.imgLoaded?0:1,height:M.height},z&&k)}),M.base64&&d.default.createElement(R,{src:M.base64,spreadProps:T,imageVariants:F,generateSources:w}),M.tracedSVG&&d.default.createElement(R,{src:M.tracedSVG,spreadProps:T,imageVariants:F,generateSources:E}),this.state.isVisible&&d.default.createElement("picture",null,v(F),d.default.createElement(C,{alt:a,title:t,width:M.width,height:M.height,sizes:M.sizes,src:M.src,crossOrigin:this.props.crossOrigin,srcSet:M.srcSet,style:x,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:L,draggable:I})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,o.default)({alt:a,title:t,loading:L},M,{imageVariants:F}))}}))}return null},t}(d.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var z=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),x=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string});V.propTypes={resolutions:z,sizes:x,fixed:c.default.oneOfType([z,c.default.arrayOf(z)]),fluid:c.default.oneOfType([x,c.default.arrayOf(x)]),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var N=V;t.default=N},234:function(e,t,a){"use strict";a(235)("fixed",(function(e){return function(){return e(this,"tt","","")}}))},235:function(e,t,a){var r=a(2),i=a(10),n=a(42),s=/"/g,l=function(e,t,a,r){var i=String(n(e)),l="<"+t;return""!==a&&(l+=" "+a+'="'+String(r).replace(s,"&quot;")+'"'),l+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(l),r(r.P+r.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}}}]);
//# sourceMappingURL=component---src-pages-blog-index-js-b1604698f02339c41edc.js.map