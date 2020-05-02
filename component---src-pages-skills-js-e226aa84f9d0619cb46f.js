(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{DJPI:function(e){e.exports=JSON.parse('{"data":{"skillsJson":{"updated_at":"12 November 2019","skillGroups":[{"name":"Backend & Data Analysis","skills":[{"name":"Python","level":4.5,"description":"Flask, Django, Jupyter, Numpy, Pandas, Packages"},{"name":"Node.JS","level":4,"description":"Express, Sequelize, Mocha, middlewares"},{"name":"Ruby on Rails","level":3,"description":""},{"name":"APIs","level":4.5,"description":"building, leveraging, security, Swagger, Postman"}]},{"name":"Storage","skills":[{"name":"PostgreSQL","level":3.5,"description":""},{"name":"MongoDB","level":3.5,"description":""},{"name":"ElasticSearch","level":4,"description":""},{"name":"Graph Databases","level":3.5,"description":"AWS Neptune, Neo4j"},{"name":"Cassandra","level":1.5,"description":""}]},{"name":"CI / DevOps","skills":[{"name":"AWS","level":4,"description":""},{"name":"Heroku","level":4,"description":""},{"name":"Docker","level":3.5,"description":""},{"name":"Testing","level":null,"description":"Mocha, Chai, Selenium, Webdriver"}]},{"name":"Frontend","skills":[{"name":"Javascript","level":4.5,"description":"TypeScript, AngularJS 1-7, D3.js, Web Components, Gatsby (React), ES6"},{"name":"CSS / SCSS","level":3.5,"description":""},{"name":"HTML","level":4,"description":""},{"name":"Mobile","level":2.5,"description":"Ionic"}]},{"name":"Design","skills":[{"name":"Sketch","level":2.5,"description":""},{"name":"Balsamiq","level":3,"description":""},{"name":"inVision","level":3,"description":""}]},{"name":"Tools","skills":[{"name":"Git","level":4,"description":"Gitlab, Github"},{"name":"Atlassian","level":null,"description":"JIRA, Confluence, Bitbucket"}]},{"name":"Certifications","skills":[{"name":"AWS Solutions Architect","level":null,"description":"2019"},{"name":"Blockchain Developer Program (ConsenSys Academy)","level":null,"description":"2018"},{"name":"Scrum Master (PSM I)","level":null,"description":"2017"},{"name":"TOEIC","level":null,"description":"2014"}]}]}}}')},TSYQ:function(e,t,n){var a;n("MIFh"),function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e=[],t=0;t<arguments.length;t++){var a=arguments[t];if(a){var l=typeof a;if("string"===l||"number"===l)e.push(a);else if(Array.isArray(a)&&a.length){var o=r.apply(null,a);o&&e.push(o)}else if("object"===l)for(var i in a)n.call(a,i)&&a[i]&&e.push(i)}}return e.join(" ")}e.exports?(r.default=r,e.exports=r):void 0===(a=function(){return r}.apply(t,[]))||(e.exports=a)}()},VfgA:function(e,t,n){"use strict";n.r(t);n("pJf4");var a=n("DJPI"),r=n("q1tI"),l=n.n(r),o=n("qj80"),i=n.n(o),s=n("IP2g"),u=n("wHSu"),c=n("twK/"),p=n("vrFN"),d=n("Bl7J");t.default=function(){var e=a.data;return l.a.createElement(l.a.Fragment,null,l.a.createElement(p.a,null),l.a.createElement(d.a,null,l.a.createElement("h1",null,"Skills"),e.skillsJson.skillGroups.map((function(e,t){return l.a.createElement("section",{key:t},l.a.createElement("h3",null,e.name),l.a.createElement("ul",{className:"margin-top-0"},e.skills.map((function(e,t){return l.a.createElement("li",{key:t,style:{marginBottom:"7px"}},e.name," ",l.a.createElement("span",{hidden:!e.level,style:{verticalAlign:"sub",fontSize:"0.8em"}},l.a.createElement(i.a,{name:e.name,value:e.level,renderStarIcon:function(e,t){return e<=t?l.a.createElement(s.a,{icon:u.c}):l.a.createElement(s.a,{icon:c.a})},renderStarIconHalf:function(){return l.a.createElement(s.a,{icon:u.d})},starCount:5,starColor:"#a9a9b3",emptyStarColor:"#a9a9b3"})),l.a.createElement("br",null)," ",l.a.createElement("small",null,l.a.createElement("i",null,e.description)))}))))})),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("i",null,"Last updated: ",e.skillsJson.updated_at)))}},qj80:function(e,t,n){"use strict";n("n7j8"),n("pJf4"),n("LagC"),n("pS08"),n("R48M"),Object.defineProperty(t,"__esModule",{value:!0});var a=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=n("q1tI"),l=s(r),o=s(n("17x9")),i=s(n("TSYQ"));function s(e){return e&&e.__esModule?e:{default:e}}var u=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this));return n.state={value:e.value},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.value;null!=t&&t!==this.state.value&&this.setState({value:t})}},{key:"onChange",value:function(e){var t=this.props,n=t.editing,a=t.value;n&&null==a&&this.setState({value:e})}},{key:"onStarClick",value:function(e,t,n,a){a.stopPropagation();var r=this.props,l=r.onStarClick;r.editing&&l&&l(e,t,n,a)}},{key:"onStarHover",value:function(e,t,n,a){a.stopPropagation();var r=this.props,l=r.onStarHover;r.editing&&l&&l(e,t,n,a)}},{key:"onStarHoverOut",value:function(e,t,n,a){a.stopPropagation();var r=this.props,l=r.onStarHoverOut;r.editing&&l&&l(e,t,n,a)}},{key:"renderStars",value:function(){for(var e=this,t=this.props,n=t.name,a=t.starCount,r=t.starColor,o=t.emptyStarColor,i=t.editing,s=this.state.value,u=function(e,t){return{float:"right",cursor:i?"pointer":"default",color:t>=e?r:o}},c={display:"none",position:"absolute",marginLeft:-9999},p=[],d=function(t){var a=n+"_"+t,r=l.default.createElement("input",{key:"input_"+a,style:c,className:"dv-star-rating-input",type:"radio",name:n,id:a,value:t,checked:s===t,onChange:e.onChange.bind(e,t,n)}),o=l.default.createElement("label",{key:"label_"+a,style:u(t,s),className:"dv-star-rating-star "+(s>=t?"dv-star-rating-full-star":"dv-star-rating-empty-star"),htmlFor:a,onClick:function(a){return e.onStarClick(t,s,n,a)},onMouseOver:function(a){return e.onStarHover(t,s,n,a)},onMouseLeave:function(a){return e.onStarHoverOut(t,s,n,a)}},e.renderIcon(t,s,n,a));p.push(r),p.push(o)},f=a;f>0;f--)d(f);return p.length?p:null}},{key:"renderIcon",value:function(e,t,n,a){var r=this.props,o=r.renderStarIcon,i=r.renderStarIconHalf;return"function"==typeof i&&Math.ceil(t)===e&&t%1!=0?i(e,t,n,a):"function"==typeof o?o(e,t,n,a):l.default.createElement("i",{key:"icon_"+a,style:{fontStyle:"normal"}},"★")}},{key:"render",value:function(){var e=this.props,t=e.editing,n=e.className,a=(0,i.default)("dv-star-rating",{"dv-star-rating-non-editable":!t},n);return l.default.createElement("div",{style:{display:"inline-block",position:"relative"},className:a},this.renderStars())}}]),t}(r.Component);u.propTypes={name:o.default.string.isRequired,value:o.default.number,editing:o.default.bool,starCount:o.default.number,starColor:o.default.string,onStarClick:o.default.func,onStarHover:o.default.func,onStarHoverOut:o.default.func,renderStarIcon:o.default.func,renderStarIconHalf:o.default.func},u.defaultProps={starCount:5,editing:!0,starColor:"#ffb400",emptyStarColor:"#333"},t.default=u,e.exports=t.default},"twK/":function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var a={prefix:"far",iconName:"star",icon:[576,512,[],"f005","M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"]}}}]);
//# sourceMappingURL=component---src-pages-skills-js-e226aa84f9d0619cb46f.js.map