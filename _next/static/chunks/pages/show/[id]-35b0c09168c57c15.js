(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[120],{4742:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/show/[id]",function(){return n(454)}])},7376:function(e,t,n){"use strict";n.d(t,{Z:function(){return h},y:function(){return f}});var r=n(5893),a=n(9008),s=n.n(a),i=n(8721),o=n.n(i),l=n(5794),c=n.n(l),u=n(1664),d=n.n(u),f="TV Bland";function h(e){var t=e.children,n=e.home;return(0,r.jsxs)("div",{className:o().container,children:[(0,r.jsx)(s(),{children:(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})}),!n&&(0,r.jsx)("div",{className:o().backToHome,children:(0,r.jsx)(d(),{href:"/",children:(0,r.jsx)("a",{children:"\u2190 Back to home"})})}),(0,r.jsx)("header",{className:o().header,children:(0,r.jsx)("h2",{className:c().heading2Xl,children:f})}),(0,r.jsx)("main",{children:t})]})}},454:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return _}});var r=n(7568),a=n(4051),s=n.n(a),i=n(5893),o=n(9008),l=n.n(o),c=n(1163),u=n(7294),d=n(7376),f=n(1312),h=n(5061),v=n.n(h),p=function(e){return e.reduce((function(t,n,r){return t+n+(r<e.length-1?", ":"")}),"")},m=n(1529),_=function(){var e,t,n=(0,c.useRouter)(),a=(0,u.useState)(null),o=a[0],h=a[1],_=(0,u.useState)(null),x=_[0],y=_[1],b=(0,u.useState)(!1),g=b[0],w=b[1],j=n.query.id;return(0,u.useEffect)((function(){var e=function(){var e=(0,r.Z)(s().mark((function e(){var t,n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=3;break}return e.abrupt("return");case 3:return e.next=5,(0,m.r)("https://api.tvmaze.com/shows/".concat(j));case 5:if(n=e.sent){e.next=9;break}return w(!0),e.abrupt("return");case 9:(null===(t=n.rating)||void 0===t?void 0:t.average)>5&&(n.rating.average=5),h(n);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),t=function(){var e=(0,r.Z)(s().mark((function e(){var t;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,(0,m.r)("https://api.tvmaze.com/shows/".concat(j,"/cast"));case 4:t=e.sent,y(t);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e(),o&&t()}),[j]),g?(0,i.jsxs)(d.Z,{home:!1,children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:d.y})}),(0,i.jsx)("p",{children:"Show not found"})]}):o?(0,i.jsxs)(d.Z,{home:!1,children:[(0,i.jsx)(l(),{children:(0,i.jsx)("title",{children:d.y})}),(0,i.jsxs)("section",{className:v().showSection,children:[(0,i.jsx)("div",{className:v().showImg,children:(0,i.jsx)("img",{src:o.image.original})}),(0,i.jsxs)("div",{className:v().showDescriptions,children:[(0,i.jsxs)("div",{className:v().showRating,children:[(0,i.jsx)(f.Z,{count:5,value:o.rating.average,size:24,edit:!1,isHalf:!0,emptyIcon:(0,i.jsx)("i",{className:"far fa-star"}),halfIcon:(0,i.jsx)("i",{className:"fa fa-star-half-alt"}),fullIcon:(0,i.jsx)("i",{className:"fa fa-star"}),activeColor:"#ffd700"}),(0,i.jsxs)("span",{className:v().showRatingNumber,children:[o.rating.average,"/5"]})]}),(0,i.jsx)("h2",{children:o.name}),(0,i.jsx)("div",{dangerouslySetInnerHTML:{__html:o.summary}})]})]}),(0,i.jsxs)("section",{className:v().showSection,children:[(0,i.jsxs)("div",{className:v().showInfo,children:[(0,i.jsx)("h3",{children:"Show Info"}),(0,i.jsx)("table",{children:(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Streamed on"}),(0,i.jsx)("td",{children:(null===(e=o.network)||void 0===e?void 0:e.name)||"No Available"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Schedule"}),(0,i.jsx)("td",{children:p((null===(t=o.schedule)||void 0===t?void 0:t.days)||[])})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Status"}),(0,i.jsx)("td",{children:o.status||"No Available"})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:"Genres"}),(0,i.jsx)("td",{children:p(o.genres)||"No Available"})]})]})})]}),(0,i.jsxs)("div",{className:v().showCasts,children:[(0,i.jsx)("h3",{children:"Starring"}),(0,i.jsx)("table",{children:(0,i.jsx)("tbody",{children:x&&x.map((function(e){var t,n;return(0,i.jsxs)("tr",{children:[(0,i.jsxs)("td",{className:v().thumbnail,children:[(0,i.jsx)("img",{src:null===(t=e.person.image)||void 0===t?void 0:t.medium}),!(null===(n=e.person.image)||void 0===n?void 0:n.medium)&&(0,i.jsx)("span",{children:"No Image"})]}),(0,i.jsx)("td",{className:v().thumbnail,children:e.person.name}),(0,i.jsx)("td",{children:e.character.name})]},e.id)}))})})]})]})]}):(0,i.jsx)("div",{children:"loading...."})}},1529:function(e,t,n){"use strict";n.d(t,{r:function(){return i}});var r=n(7568),a=n(4051),s=n.n(a),i=function(){var e=(0,r.Z)(s().mark((function e(t){var n;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:if(200===(n=e.sent).status){e.next=5;break}return e.abrupt("return",null);case 5:return e.next=7,n.json();case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},8721:function(e){e.exports={container:"layout_container__fbLkO",header:"layout_header__kY0Lt",backToHome:"layout_backToHome__9sjx_"}},5061:function(e){e.exports={showSection:"show_showSection__H29OQ",showImg:"show_showImg__d_GoS",showInfo:"show_showInfo__ICXFE",showDescriptions:"show_showDescriptions__Q8HA1",showCasts:"show_showCasts__GtsJd",showRating:"show_showRating__xlAwF",showRatingNumber:"show_showRatingNumber__5VgbS",thumbnail:"show_thumbnail__u4NWO"}},5794:function(e){e.exports={headingText:"utils_headingText__85fY1",boldText:"utils_boldText__NhTA_",mainContent:"utils_mainContent__U42HC",cardImg:"utils_cardImg__L7aHB",cards:"utils_cards__eCvYq",card:"utils_card__L8D_y",borderCircle:"utils_borderCircle__s2nTm",colorInherit:"utils_colorInherit__mSH_x",padding1px:"utils_padding1px__PWQKR",list:"utils_list__4Mu4l",listItem:"utils_listItem__s2m6i",lightText:"utils_lightText__eUzGY"}},1163:function(e,t,n){e.exports=n(387)},2703:function(e,t,n){"use strict";var r=n(414);function a(){}function s(){}s.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,s,i){if(i!==r){var o=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw o.name="Invariant Violation",o}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:a};return n.PropTypes=n,n}},5697:function(e,t,n){e.exports=n(2703)()},414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},4955:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,s=l}finally{try{!r&&o.return&&o.return()}finally{if(a)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")};t.default=function(e){var t=(0,a.useState)(e.count),n=r(t,2),s=n[0],i=n[1],o=(0,a.useState)(e.size),l=r(o,2),c=l[0],u=l[1],d=(0,a.useState)(e.char),f=r(d,2),h=f[0],v=f[1],p=(0,a.useState)(e.color),m=r(p,2),_=m[0],x=m[1],y=(0,a.useState)(e.activeColor),b=r(y,2),g=b[0],w=b[1],j=(0,a.useState)(e.isHalf),I=r(j,2),S=I[0],N=I[1],k=(0,a.useState)(e.edit),C=r(k,2),T=C[0],H=C[1],O=(0,a.useState)(e.emptyIcon),M=r(O,2),E=M[0],A=M[1],R=(0,a.useState)(e.halfIcon),P=r(R,2),z=P[0],L=P[1],D=(0,a.useState)(e.filledIcon),Z=r(D,2),U=Z[0],q=Z[1],B=(0,a.useState)(e.a11y),W=r(B,2),X=W[0],Y=W[1];return[{count:s,size:c,char:h,color:_,activeColor:g,isHalf:S,edit:T,emptyIcon:E,halfIcon:z,filledIcon:U,a11y:X},function(e){i(e.count),u(e.size),v(e.char),x(e.color),w(e.activeColor),N(e.isHalf),H(e.edit),A(e.emptyIcon),L(e.halfIcon),q(e.filledIcon),Y(e.a11y)}]};var a=n(7294)},1312:function(e,t,n){"use strict";var r=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var n=[],r=!0,a=!1,s=void 0;try{for(var i,o=e[Symbol.iterator]();!(r=(i=o.next()).done)&&(n.push(i.value),!t||n.length!==t);r=!0);}catch(l){a=!0,s=l}finally{try{!r&&o.return&&o.return()}finally{if(a)throw s}}return n}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},a=n(7294),s=c(a),i=c(n(5697)),o=c(n(4955)),l=c(n(7719));function c(e){return e&&e.__esModule?e:{default:e}}var u={overflow:"hidden",position:"relative"};function d(e,t){return"\n    .react-stars-"+t+":before {\n      position: absolute;\n      overflow: hidden;\n      display: block;\n      z-index: 1;\n      top: 0; left: 0;\n      width: 50%;\n      content: attr(data-forhalf);\n      color: "+e+";\n  }"}function f(e){var t=(0,a.useState)(""),n=r(t,2),i=n[0],c=n[1],f=(0,a.useState)(0),h=r(f,2),v=h[0],p=h[1],m=(0,a.useState)([]),_=r(m,2),x=_[0],y=_[1],b=(0,a.useState)(!1),g=r(b,2),w=g[0],j=g[1],I=(0,o.default)(e),S=r(I,2),N=S[0],k=S[1],C=(0,a.useState)(0),T=r(C,2),H=T[0],O=T[1],M=(0,a.useState)(!1),E=r(M,2),A=E[0],R=E[1],P=(0,a.useState)(""),z=r(P,2),L=z[0],D=z[1];function Z(e){"undefined"===typeof e&&(e=N.isHalf?Math.floor(v):Math.round(v));for(var t=[],n=0;n<N.count;n++)t.push({active:n<=e-1});return t}function U(e){if(N.edit){var t=Number(e.currentTarget.getAttribute("data-index"));if(N.isHalf){var n=q(e);R(n),n&&(t+=1),O(t)}else t+=1;!function(e){var t=x.filter((function(e){return e.active}));e!==t.length&&y(Z(e))}(t)}}function q(e){var t=e.target.getBoundingClientRect(),n=e.clientX-t.left;return(n=Math.round(Math.abs(n)))>t.width/2}function B(){N.edit&&(W(v),y(Z()))}function W(e){N.isHalf&&(R(function(e){return e%1===0}(e)),O(Math.floor(e)))}function X(e){if(N.edit){var t=Number(e.currentTarget.getAttribute("data-index")),n=void 0;if(N.isHalf){var r=q(e);R(r),r&&(t+=1),n=r?t:t+.5,O(t)}else n=t+=1;Y(n)}}function Y(t){t!==v&&(y(Z(t)),p(t),e.onChange(t))}return(0,a.useEffect)((function(){var t,n;!function(){var t="react-stars";D(e.classNames+" "+t)}(),t=e.value,n=e.count,p(t<0||t>n?0:t),y(Z(e.value)),k(e),c((Math.random()+"").replace(".","")),j(function(e){return!e.isHalf&&e.emptyIcon&&e.filledIcon||e.isHalf&&e.emptyIcon&&e.halfIcon&&e.filledIcon}(e)),O(Math.floor(e.value)),R(e.isHalf&&e.value%1<.5)}),[]),s.default.createElement("div",{className:"react-stars-wrapper-"+i,style:{display:"flex"}},s.default.createElement("div",{tabIndex:N.a11y&&N.edit?0:null,"aria-label":"add rating by typing an integer from 0 to 5 or pressing arrow keys",onKeyDown:function(e){if(N.a11y||N.edit){var t=e.key,n=v,r=Number(t);r?Number.isInteger(r)&&r>0&&r<=N.count&&(n=r):("ArrowUp"===t||"ArrowRight"===t)&&n<N.count?(e.preventDefault(),n+=N.isHalf?.5:1):("ArrowDown"===t||"ArrowLeft"===t)&&n>.5&&(e.preventDefault(),n-=N.isHalf?.5:1),W(n),Y(n)}},className:L,style:u},N.isHalf&&function(){return s.default.createElement("style",{dangerouslySetInnerHTML:{__html:w?(e=N.activeColor,"\n          span.react-stars-half > * {\n          color: "+e+";\n      }"):d(N.activeColor,i)}});var e}(),x.map((function(e,t){return s.default.createElement(l.default,{key:t,index:t,active:e.active,config:N,onMouseOver:U,onMouseLeave:B,onClick:X,halfStarHidden:A,halfStarAt:H,isUsingIcons:w,uniqueness:i})})),s.default.createElement("p",{style:{position:"absolute",left:"-200rem"},role:"status"},v)))}f.propTypes={classNames:i.default.string,edit:i.default.bool,half:i.default.bool,value:i.default.number,count:i.default.number,char:i.default.string,size:i.default.number,color:i.default.string,activeColor:i.default.string,emptyIcon:i.default.element,halfIcon:i.default.element,filledIcon:i.default.element,a11y:i.default.bool},f.defaultProps={edit:!0,half:!1,value:0,count:5,char:"\u2605",size:15,color:"gray",activeColor:"#ffd700",a11y:!0,onChange:function(){}},t.Z=f},7719:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e};t.default=function(e){var t=e.index,n=e.active,a=e.config,s=e.onMouseOver,l=e.onMouseLeave,c=e.onClick,u=e.halfStarHidden,d=e.halfStarAt,f=e.isUsingIcons,h=e.uniqueness,v=a.color,p=a.activeColor,m=a.size,_=a.char,x=a.isHalf,y=a.edit,b=a.halfIcon,g=a.emptyIcon,w=a.filledIcon,j="",I=!1;x&&!u&&d===t&&(j=f?"react-stars-half":"react-stars-"+h,I=!0);var S=r({},o,{color:n?p:v,cursor:y?"pointer":"default",fontSize:m+"px"});return i.default.createElement("span",{className:j,style:S,key:t,"data-index":t,"data-forhalf":w?t:_,onMouseOver:s,onMouseMove:s,onMouseLeave:l,onClick:c},f?n?w:!n&&I?b:g:_)};var a,s=n(7294),i=(a=s)&&a.__esModule?a:{default:a};var o={position:"relative",overflow:"hidden",cursor:"pointer",display:"block",float:"left"}}},function(e){e.O(0,[289,774,888,179],(function(){return t=4742,e(e.s=t);var t}));var t=e.O();_N_E=t}]);