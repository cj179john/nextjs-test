(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{4742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show/[id]",function(){return n(6139)}])},7376:function(e,t,n){"use strict";n.d(t,{Z:function(){return h},y:function(){return f}});var r=n(5893),a=n(9008),o=n.n(a),i=n(8721),s=n.n(i),l=n(5794),c=n.n(l),u=n(1664),d=n.n(u),f="TV Bland";function h(e){var t=e.children,n=e.home;return(0,r.jsxs)("div",{className:s().container,children:[(0,r.jsx)(o(),{children:(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})}),!n&&(0,r.jsx)("div",{className:s().backToHome,children:(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)("a",{children:"\u2190 Back to home"})})}),(0,r.jsx)("header",{className:s().header,children:(0,r.jsx)("h2",{className:c().heading2Xl,children:f})}),(0,r.jsx)("main",{children:t})]})}},6139:function(e,t,n){"use strict";function r(e,t,n,r,a,o,i){try{var s=e[o](i),l=s.value}catch(c){return void n(c)}s.done?t(l):Promise.resolve(l).then(r,a)}function a(e){return function(){var t=this,n=arguments;return new Promise((function(a,o){var i=e.apply(t,n);function s(e){r(i,a,o,s,l,"next",e)}function l(e){r(i,a,o,s,l,"throw",e)}s(void 0)}))}}n.r(t),n.d(t,{default:function(){return _}});var o=n(4051),i=n.n(o),s=n(5893),l=n(9008),c=n.n(l),u=n(1163),d=n(7294),f=n(7376),h=n(1312),v=n(5061),m=n.n(v),p=function(e){return e.reduce((function(t,n,r){return t+n+(r<e.length-1?", ":"")}),"")},_=function(){var e,t,n=(0,u.useRouter)(),r=(0,d.useState)(null),o=r[0],l=r[1],v=(0,d.useState)(null),_=v[0],x=v[1],y=n.query.id;return(0,d.useEffect)((function(){var e=function(){var e=a(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://api.tvmaze.com/shows/".concat(y));case 4:return t=e.sent,e.next=7,t.json();case 7:(n=e.sent).rating.average>5&&(n.rating.average=5),l(n);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=a(i().mark((function e(){var t,n;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,fetch("https://api.tvmaze.com/shows/".concat(y,"/cast"));case 4:return t=e.sent,e.next=7,t.json();case 7:n=e.sent,x(n);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),t()}),[y]),o?(0,s.jsxs)(f.Z,{home:!1,children:[(0,s.jsx)(c(),{children:(0,s.jsx)("title",{children:f.y})}),(0,s.jsxs)("section",{className:m().showSection,children:[(0,s.jsx)("div",{className:m().showImg,children:(0,s.jsx)("img",{src:o.image.original})}),(0,s.jsxs)("div",{className:m().showDescriptions,children:[(0,s.jsxs)("div",{className:m().showRating,children:[(0,s.jsx)(h.Z,{count:5,value:o.rating.average,size:24,edit:!1,isHalf:!0,emptyIcon:(0,s.jsx)("i",{className:"far fa-star"}),halfIcon:(0,s.jsx)("i",{className:"fa fa-star-half-alt"}),fullIcon:(0,s.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700"}),(0,s.jsxs)("span",{className:m().showRatingNumber,children:[o.rating.average,"/5"]})]}),(0,s.jsx)("h2",{children:o.name}),(0,s.jsx)("div",{dangerouslySetInnerHTML:{__html:o.summary}})]})]}),(0,s.jsxs)("section",{className:m().showSection,children:[(0,s.jsxs)("div",{className:m().showInfo,children:[(0,s.jsx)("h3",{children:"Show Info"}),(0,s.jsx)("table",{children:(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Streamed on"}),(0,s.jsx)("td",{children:(null===(e=o.network)||void 0===e?void 0:e.name)||"No Available"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Schedule"}),(0,s.jsx)("td",{children:p((null===(t=o.schedule)||void 0===t?void 0:t.days)||[])})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Status"}),(0,s.jsx)("td",{children:o.status||"No Available"})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:"Genres"}),(0,s.jsx)("td",{children:p(o.genres)||"No Available"})]})]})})]}),(0,s.jsxs)("div",{className:m().showCasts,children:[(0,s.jsx)("h3",{children:"Starring"}),(0,s.jsx)("table",{children:(0,s.jsx)("tbody",{children:_&&_.map((function(e){var t,n;return(0,s.jsxs)("tr",{children:[(0,s.jsxs)("td",{className:m().thumbnail,children:[(0,s.jsx)("img",{src:null===(t=e.person.image)||void 0===t?void 0:t.medium}),!(null===(n=e.person.image)||void 0===n?void 0:n.medium)&&(0,s.jsx)("span",{children:"No Image"})]}),(0,s.jsx)("td",{className:m().thumbnail,children:e.person.name}),(0,s.jsx)("td",{children:e.character.name})]},e.id)}))})})]})]})]}):(0,s.jsx)("div",{children:"loading...."})}},8721:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_"}},5061:function(e){e.exports={showSection:"show_showSection__H29OQ",showImg:"show_showImg__d_GoS",showInfo:"show_showInfo__ICXFE",showDescriptions:"show_showDescriptions__Q8HA1",showCasts:"show_showCasts__GtsJd",showRating:"show_showRating__xlAwF",showRatingNumber:"show_showRatingNumber__5VgbS",thumbnail:"show_thumbnail__u4NWO"}},5794:function(e){e.exports={headingText:"utils_headingText__85fY1",boldText:"utils_boldText__NhTA_",mainContent:"utils_mainContent__U42HC",cardImg:"utils_cardImg__L7aHB",cards:"utils_cards__eCvYq",card:"utils_card__L8D_y",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}},1163:function(e,t,n){e.exports=n(387)},2703:function(e,t,n){"use strict";var r=n(414);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,i){if(i!==r){var s=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw s.name="Invariant Violation",s}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4955:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,a.useState)(e.count),n=r(t,2),o=n[0],i=n[1],s=(0,a.useState)(e.size),l=r(s,2),c=l[0],u=l[1],d=(0,a.useState)(e.char),f=r(d,2),h=f[0],v=f[1],m=(0,a.useState)(e.color),p=r(m,2),_=p[0],x=p[1],y=(0,a.useState)(e.activeColor),g=r(y,2),b=g[0],w=g[1],j=(0,a.useState)(e.isHalf),I=r(j,2),S=I[0],N=I[1],C=(0,a.useState)(e.edit),T=r(C,2),k=T[0],H=T[1],O=(0,a.useState)(e.emptyIcon),M=r(O,2),E=M[0],A=M[1],P=(0,a.useState)(e.halfIcon),R=r(P,2),z=R[0],L=R[1],D=(0,a.useState)(e.filledIcon),U=r(D,2),q=U[0],B=U[1],W=(0,a.useState)(e.a11y),X=r(W,2),Y=X[0],G=X[1];return[{count:o,size:c,char:h,color:_,activeColor:b,isHalf:S,edit:k,emptyIcon:E,halfIcon:z,filledIcon:q,a11y:Y},function(e){i(e.count),u(e.size),v(e.char),x(e.color),w(e.activeColor),N(e.isHalf),H(e.edit),A(e.emptyIcon),L(e.halfIcon),B(e.filledIcon),G(e.a11y)}]};var a=n(7294)},1312:function(e,t,n){"use strict";var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,o=void 0;try{for(var i,s=e[Symbol.iterator]();!(r=(i=s.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,o=l}finally{try{!r&&s.return&&s.return()}finally{if(a)throw o}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(7294),o=c(a),i=c(n(5697)),s=c(n(4955)),l=c(n(7719));function c(e){return e&&e.__esModule?e:{default:e}}var u={overflow:"hidden",position:"relative"};function d(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function f(e){var t=(0,a.useState)(""),n=r(t,2),i=n[0],c=n[1],f=(0,a.useState)(0),h=r(f,2),v=h[0],m=h[1],p=(0,a.useState)([]),_=r(p,2),x=_[0],y=_[1],g=(0,a.useState)(!1),b=r(g,2),w=b[0],j=b[1],I=(0,s.default)(e),S=r(I,2),N=S[0],C=S[1],T=(0,a.useState)(0),k=r(T,2),H=k[0],O=k[1],M=(0,a.useState)(!1),E=r(M,2),A=E[0],P=E[1],R=(0,a.useState)(""),z=r(R,2),L=z[0],D=z[1];function U(e){"undefined"===typeof e&&(e=N.isHalf?Math.floor(v):Math.round(v));for(var t=[],n=0;n<N.count;n++)t.push({active:n<=e-1});return t}function q(e){if(N.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(N.isHalf){var n=B(e);P(n),n&&(t+=1),O(t)}else t+=1;!function(e){var t=x.filter((function(e){return e.active}));e!==t.length&&y(U(e))}(t)}}function B(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left;return(n=Math.round(Math.abs(n)))>t.width/2}function W(){N.edit&&(X(v),y(U()))}function X(e){N.isHalf&&(P(function(e){return e%1===0}(e)),O(Math.floor(e)))}function Y(e){if(N.edit){var t=Number(e.currentTarget.getAttribute("data-index")),n=void 0;if(N.isHalf){var r=B(e);P(r),r&&(t+=1),n=r?t:t+.5,O(t)}else n=t+=1;G(n)}}function G(t){t!==v&&(y(U(t)),m(t),e.onChange(t))}return(0,a.useEffect)((function(){var t,n;!function(){var t="react-stars";D(e.classNames+" "+t)}(),t=e.value,n=e.count,m(t<0||t>n?0:t),y(U(e.value)),C(e),c((Math.random()+"").replace(".","")),j(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),O(Math.floor(e.value)),P(e.isHalf&&e.value%1<.5)}),[]),o.default.createElement("div",{className:"react-stars-wrapper-"+i,style:{display:"flex"}},o.default.createElement("div",{tabIndex:N.a11y&&N.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(N.a11y||N.edit){var t=e.key,n=v,r=Number(t);r?Number.isInteger(r)&&r>0&&r<=N.count&&(n=r):("ArrowUp"===t||"ArrowRight"===t)&&n<N.count?(e.preventDefault(),n+=N.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&n>.5&&(e.preventDefault(),n-=N.isHalf?.5:1),X(n),G(n)}},className:L,style:u},N.isHalf&&function(){return o.default.createElement("style",{dangerouslySetInnerHTML:{__html:w?(e=N.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):d(N.activeColor,i)}});var e}(),x.map((function(e,t){return o.default.createElement(l.default,{key:t,index:t,active:e.active,config:N,onMouseOver:q,onMouseLeave:W,onClick:Y,halfStarHidden:A,halfStarAt:H,isUsingIcons:w,uniqueness:i})})),o.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},v)))}f.propTypes={classNames:i.default.string,edit:i.default.bool,half:i.default.bool,value:i.default.number,count:i.default.number,char:i.default.string,size:i.default.number,color:i.default.string,activeColor:i.default.string,emptyIcon:i.default.element,halfIcon:i.default.element,filledIcon:i.default.element,a11y:i.default.bool},f.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.Z=f},7719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.index,n=e.active,a=e.config,o=e.onMouseOver,l=e.onMouseLeave,c=e.onClick,u=e.halfStarHidden,d=e.halfStarAt,f=e.isUsingIcons,h=e.uniqueness,v=a.color,m=a.activeColor,p=a.size,_=a.char,x=a.isHalf,y=a.edit,g=a.halfIcon,b=a.emptyIcon,w=a.filledIcon,j="",I=!1;x&&!u&&d===t&&(j=f?"react-stars-half":"react-stars-"+h,I=!0);var S=r({},s,{color:n?m:v,cursor:y?"pointer":"default",fontSize:p+"px"});return i.default.createElement("span",{className:j,style:S,key:t,"data-index":t,"data-forhalf":w?t:_,onMouseOver:o,onMouseMove:o,onMouseLeave:l,onClick:c},f?n?w:!n&&I?g:b:_)};var a,o=n(7294),i=(a=o)&&a.__esModule?a:{default:a};var s={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}}},function(e){e.O(0,[996,774,888,179],(function(){return t=4742,e(e.s=t);var t}));var t=e.O();_N_E=t}]);