(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(165),a(167)),i=a(169);t.default=function(e){e.data;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,null),r.a.createElement(i.a,null,r.a.createElement("h1",null,"Now"),r.a.createElement("p",null,"Coming soon :)")))}},165:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(33),s=a.n(o);a.d(t,"a",function(){return s.a});a(166),r.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},166:function(e,t,a){var n;e.exports=(n=a(172))&&n.default||n},167:function(e,t,a){"use strict";var n=a(170),r=a(0),l=a.n(r),i=a(4),o=a.n(i),s=a(168),u=a.n(s),m=function(e){var t=e.description,a=e.lang,r=e.meta,i=e.keywords,o=e.title,s=n.data.site.siteMetadata,m=s.title,c=s.description,g=s.author,p=o||m,d=t||c;return l.a.createElement(u.a,{htmlAttributes:{lang:a},title:p,titleTemplate:o?o+" :: "+m:m,meta:[{name:"description",content:d},{property:"og:title",content:p},{property:"og:description",content:d},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:title",content:p},{name:"twitter:description",content:d},{name:"twitter:creator",content:g}].concat(i.length>0?{name:"keywords",content:i.join(", ")}:[]).concat(r)})};m.defaultProps={lang:"en",meta:[],keywords:["gatsby","blog","dark","light","personal site"]},m.propTypes={description:o.a.string,lang:o.a.string,meta:o.a.array,keywords:o.a.arrayOf(o.a.string),title:o.a.string},t.a=m},169:function(e,t,a){"use strict";var n=a(171),r=a(0),l=a.n(r),i=a(4),o=a.n(i),s=a(165),u=a(168),m=a(146),c=a.n(m),g=function(e){var t=e.d,a=e.size,n=void 0===a?"1em":a,r=e.label,i=e.style;return l.a.createElement("span",{className:c.a.root,style:i,role:"figure"},l.a.createElement("svg",{version:"1.1",width:n,height:n,viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},l.a.createElement("path",{d:t,className:c.a.icon})),r&&l.a.createElement("span",{className:c.a.label},r))};g.propTypes={d:o.a.string,size:o.a.number,label:o.a.string,style:o.a.object};var p=g,d=a(147),M=a.n(d),h=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.isMobileMenu,r=t.slice(0);return!n&&r.splice(a),r.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(s.a,{to:e.path},e.title))})},b=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.onToggleSubMenu,r=t.slice(0);r.splice(0,a);var i=r.map(function(e,t){return l.a.createElement("li",{key:t},l.a.createElement(s.a,{to:e.path},e.title))});return l.a.createElement(l.a.Fragment,null,i,l.a.createElement("div",{className:M.a.subMenuOverlay,role:"button",tabIndex:0,onClick:n}))},E=function(e){var t=e.mainMenu,a=e.mainMenuItems,n=e.menuMoreText,r=e.isMobileMenuVisible,i=e.isSubMenuVisible,o=e.onToggleMobileMenu,s=e.onToggleSubMenu,u=e.onChangeTheme,m=!(a>=t.length)&&a>0;return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:M.a.mobileMenuContainer},l.a.createElement(l.a.Fragment,null,r?l.a.createElement(l.a.Fragment,null,l.a.createElement("ul",{className:M.a.mobileMenu},l.a.createElement(h,{mainMenu:t,isMobileMenu:!0})),l.a.createElement("div",{onClick:o,className:M.a.mobileMenuOverlay})):null,l.a.createElement("button",{className:M.a.menuTrigger,style:{color:"inherit"},onClick:o,type:"button","aria-label":"Menu"},l.a.createElement(p,{style:{cursor:"pointer"},size:24,d:"M4 34H40V30H4V34ZM4 24H40V20H4V24ZM4 10V14H40V10H4Z"})))),l.a.createElement("div",{className:M.a.desktopMenuContainer},l.a.createElement("ul",{className:M.a.menu},l.a.createElement(h,{mainMenu:t,mainMenuItems:a}),m?l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{className:M.a.subMenuTrigger,onClick:s,type:"button","aria-label":"Menu"},n||"Menu"," ",l.a.createElement("span",{className:M.a.menuArrow},">")),i?l.a.createElement("ul",{className:M.a.subMenu},l.a.createElement(b,{mainMenu:t,mainMenuItems:a,onToggleSubMenu:s})):null):null)),l.a.createElement("button",{className:M.a.themeToggle,onClick:u,type:"button","aria-label":"Theme toggle"},l.a.createElement(p,{style:{cursor:"pointer"},size:24,d:"M22 41C32.4934 41 41 32.4934 41 22C41 11.5066 32.4934 3 22\n3C11.5066 3 3 11.5066 3 22C3 32.4934 11.5066 41 22 41ZM7 22C7\n13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22Z"})))};E.propTypes={mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,menuMoreText:o.a.string,isMobileMenuVisible:o.a.bool,isSubMenuVisible:o.a.bool,onToggleMobileMenu:o.a.func,onToggleSubMenu:o.a.func,onChangeTheme:o.a.func},b.propTypes={mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,onToggleSubMenu:o.a.func};var f=E,y=a(148),T=a.n(y),v=function(e){var t=e.siteLogo,a=e.logoText,n=e.mainMenu,i=e.mainMenuItems,o=e.menuMoreText,m=e.defaultTheme,c="undefined"!=typeof window&&window.localStorage.getItem("theme")||null,g=Object(r.useState)(c),p=g[0],d=g[1],M=Object(r.useState)(!1),h=M[0],b=M[1],E=Object(r.useState)(!1),y=E[0],v=E[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement(u.Helmet,null,l.a.createElement("body",{className:"light"===(p||m)?"light-theme":"dark-theme"})),l.a.createElement("header",{className:T.a.header},l.a.createElement("div",{className:T.a.inner},l.a.createElement(s.a,{to:"/"},l.a.createElement("div",{className:T.a.logo},t.src?l.a.createElement("img",{src:t.src,alt:t.alt}):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:T.a.text},"// ",a)))),l.a.createElement("span",{className:T.a.right},l.a.createElement(f,{mainMenu:n,mainMenuItems:i,isMobileMenuVisible:h,isSubMenuVisible:y,menuMoreText:o,onToggleMobileMenu:function(){return b(!h)},onToggleSubMenu:function(){return v(!y)},onChangeTheme:function(){var e="light"===(p||m)?"dark":"light";d(e),"undefined"!=typeof window&&window.localStorage.setItem("theme",e)}})))))};v.propTypes={siteLogo:o.a.object,logoText:o.a.string,defaultTheme:o.a.string,mainMenu:o.a.arrayOf(o.a.shape({title:o.a.string,path:o.a.string})),mainMenuItems:o.a.number,menuMoreText:o.a.string};var w=v,N=a(149),x=a.n(N),k=function(e){var t=e.copyrights;return l.a.createElement("footer",{className:x.a.footer},t?l.a.createElement("div",{dangerouslySetInnerHTML:{__html:t}}):l.a.createElement(l.a.Fragment,null,l.a.createElement("span",{className:x.a.footerCopyrights},"© 2019 Raphael Odini"),l.a.createElement("span",{className:x.a.footerCopyrights},l.a.createElement(s.a,{to:"/sitemap"},"Sitemap"))))};k.propTypes={copyrights:o.a.string};var C=k,I=(a(150),function(e){var t=e.children,a=n.data.site.siteMetadata,r=a.title,i=a.logo,o=a.logoText,s=a.defaultTheme,u=a.mainMenu,m=a.showMenuItems,c=a.menuMoreText,g=a.copyrights;return l.a.createElement("div",{className:"container"},l.a.createElement(w,{siteTitle:r,siteLogo:i,logoText:o,defaultTheme:s,mainMenu:u,mainMenuItems:m,menuMoreText:c}),l.a.createElement("div",{className:"content"},t),l.a.createElement(C,{copyrights:g}))});I.propTypes={children:o.a.node.isRequired};t.a=I},170:function(e){e.exports={data:{site:{siteMetadata:{title:"Raphael Odini · datalover & full-stack software engineer",description:"A space to share things I care about, projects and notes. Also my resume :)",author:"@raphodn"}}}}},171:function(e){e.exports={data:{site:{siteMetadata:{title:"Raphael Odini · datalover & full-stack software engineer",logo:{src:"",alt:""},logoText:"Raphael Odini",defaultTheme:"dark",copyrights:"",mainMenu:[{title:"About",path:"/about"},{title:"Projects",path:"/projects"},{title:"Blog",path:"/blog"}],showMenuItems:3,menuMoreText:"Show more"}}}}},172:function(e,t,a){"use strict";a.r(t);a(34);var n=a(0),r=a.n(n),l=a(4),i=a.n(l),o=a(55),s=a(2),u=function(e){var t=e.location,a=s.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json))};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u}}]);
//# sourceMappingURL=component---src-pages-now-js-b5826eb7c3b86b95082c.js.map