(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[100],{2018:function(e,a,t){"use strict";t.r(a),t.d(a,"UserQuestionReply",(function(){return R}));var n=t(44),s=t(13),r=t(14),l=t(16),o=t(15),i=t(0),c=t.n(i),u=t(1241),m=t(1239),p=t(1240),d=t(188),f=t(1244),h=t(810),b=t(807),g=t(804),v=t(35),y=(t(822),t(59)),E=t(802),O=t(81),j=t.n(O),R=function(e){Object(l.a)(t,e);var a=Object(o.a)(t);function t(e){var r;return Object(s.a)(this,t),(r=a.call(this,e)).changeHandler1=function(e){r.setState({status:e.target.value})},r.changeHandler=function(e){r.setState(Object(n.a)({},e.target.name,e.target.value))},r.submitHandler=function(e){e.preventDefault();var a=r.props.match.params.id;v.a.post("/user/reply/".concat(a),{answer:r.state.answer}).then((function(e){console.log(e.data.data),"success"===e.data.message&&j()("","Product Updated Successfully"),r.props.history.push("/app/askquestion/userAskQuesList")})).catch((function(e){console.log(e)}))},r.state={answer:""},r}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.props.match.params.id;v.a.get("/user/getone_ask_qus/".concat(a)).then((function(a){console.log(a),e.setState({question:a.data.data.question})})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this;return c.a.createElement("div",null,c.a.createElement(E.a,{breadCrumbTitle:" User Ask Question Reply",breadCrumbParent:"Home",breadCrumbActive:" User Ask Question Reply"}),c.a.createElement(u.a,null,c.a.createElement(m.a,{className:"m-2"},c.a.createElement(p.a,null,c.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"User Ask Question Reply")),c.a.createElement(p.a,null,c.a.createElement(y.b,{render:function(e){var a=e.history;return c.a.createElement(d.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/askquestion/userAskQuesList")}},"Back")}}))),c.a.createElement(f.a,null,c.a.createElement(h.a,{className:"m-1",onSubmit:this.submitHandler},c.a.createElement(m.a,null,c.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(b.a,null,"Question"),c.a.createElement(g.a,{required:!0,type:"text",name:"question",placeholder:"Question",value:this.state.question,onChange:this.changeHandler})),c.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(b.a,null,"Answer"),c.a.createElement("textarea",{className:"form-control",placeholder:"answer...",maxLength:200,name:"answer",value:this.state.answer,onChange:this.changeHandler}))),c.a.createElement(m.a,null),c.a.createElement(p.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},c.a.createElement(b.a,{className:"mb-1"},"Status"),c.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),c.a.createElement("span",{style:{marginRight:"20px"}},"Active"),c.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),c.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),c.a.createElement(m.a,null,c.a.createElement(p.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},c.a.createElement(d.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(i.Component);a.default=R},804:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),o=t(0),i=t.n(o),c=t(1),u=t.n(c),m=t(4),p=t.n(m),d=t(3),f=["className","cssModule","type","bsSize","valid","invalid","tag","addon","plaintext","innerRef"],h={children:u.a.node,type:u.a.string,size:u.a.oneOfType([u.a.number,u.a.string]),bsSize:u.a.string,valid:u.a.bool,invalid:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),plaintext:u.a.bool,addon:u.a.bool,className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.focus=t.focus.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.focus=function(){this.ref&&this.ref.focus()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.type,l=e.bsSize,o=e.valid,c=e.invalid,u=e.tag,m=e.addon,h=e.plaintext,b=e.innerRef,g=Object(s.a)(e,f),v=["radio","checkbox"].indexOf(r)>-1,y=new RegExp("\\D","g"),E=u||("select"===r||"textarea"===r?r:"input"),O="form-control";h?(O+="-plaintext",E=u||"input"):"file"===r?O+="-file":"range"===r?O+="-range":v&&(O=m?null:"form-check-input"),g.size&&y.test(g.size)&&(Object(d.warnOnce)('Please use the prop "bsSize" instead of the "size" to bootstrap\'s input sizing.'),l=g.size,delete g.size);var j=Object(d.mapToCssModules)(p()(a,c&&"is-invalid",o&&"is-valid",!!l&&"form-control-"+l,O),t);return("input"===E||u&&"function"===typeof u)&&(g.type=r),g.children&&!h&&"select"!==r&&"string"===typeof E&&"select"!==E&&(Object(d.warnOnce)('Input with a type of "'+r+'" cannot have children. Please use "value"/"defaultValue" instead.'),delete g.children),i.a.createElement(E,Object(n.a)({},g,{ref:b,className:j,"aria-invalid":c}))},a}(i.a.Component);b.propTypes=h,b.defaultProps={type:"text"},a.a=b},807:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(0),l=t.n(r),o=t(1),i=t.n(o),c=t(4),u=t.n(c),m=t(3),p=["className","cssModule","hidden","widths","tag","check","size","for"],d=i.a.oneOfType([i.a.number,i.a.string]),f=i.a.oneOfType([i.a.bool,i.a.string,i.a.number,i.a.shape({size:d,order:d,offset:d})]),h={children:i.a.node,hidden:i.a.bool,check:i.a.bool,size:i.a.string,for:i.a.string,tag:m.tagPropType,className:i.a.string,cssModule:i.a.object,xs:f,sm:f,md:f,lg:f,xl:f,widths:i.a.array},b={tag:"label",widths:["xs","sm","md","lg","xl"]},g=function(e,a,t){return!0===t||""===t?e?"col":"col-"+a:"auto"===t?e?"col-auto":"col-"+a+"-auto":e?"col-"+t:"col-"+a+"-"+t},v=function(e){var a=e.className,t=e.cssModule,r=e.hidden,o=e.widths,i=e.tag,c=e.check,d=e.size,f=e.for,h=Object(s.a)(e,p),b=[];o.forEach((function(a,n){var s=e[a];if(delete h[a],s||""===s){var r,l=!n;if(Object(m.isObject)(s)){var o,i=l?"-":"-"+a+"-";r=g(l,a,s.size),b.push(Object(m.mapToCssModules)(u()(((o={})[r]=s.size||""===s.size,o["order"+i+s.order]=s.order||0===s.order,o["offset"+i+s.offset]=s.offset||0===s.offset,o))),t)}else r=g(l,a,s),b.push(r)}}));var v=Object(m.mapToCssModules)(u()(a,!!r&&"sr-only",!!c&&"form-check-label",!!d&&"col-form-label-"+d,b,!!b.length&&"col-form-label"),t);return l.a.createElement(i,Object(n.a)({htmlFor:f},h,{className:v}))};v.propTypes=h,v.defaultProps=b,a.a=v},810:function(e,a,t){"use strict";var n=t(5),s=t(7),r=t(11),l=t(12),o=t(0),i=t.n(o),c=t(1),u=t.n(c),m=t(4),p=t.n(m),d=t(3),f=["className","cssModule","inline","tag","innerRef"],h={children:u.a.node,inline:u.a.bool,tag:d.tagPropType,innerRef:u.a.oneOfType([u.a.object,u.a.func,u.a.string]),className:u.a.string,cssModule:u.a.object},b=function(e){function a(a){var t;return(t=e.call(this,a)||this).getRef=t.getRef.bind(Object(r.a)(t)),t.submit=t.submit.bind(Object(r.a)(t)),t}Object(l.a)(a,e);var t=a.prototype;return t.getRef=function(e){this.props.innerRef&&this.props.innerRef(e),this.ref=e},t.submit=function(){this.ref&&this.ref.submit()},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,r=e.inline,l=e.tag,o=e.innerRef,c=Object(s.a)(e,f),u=Object(d.mapToCssModules)(p()(a,!!r&&"form-inline"),t);return i.a.createElement(l,Object(n.a)({},c,{ref:o,className:u}))},a}(o.Component);b.propTypes=h,b.defaultProps={tag:"form"},a.a=b},822:function(e,a,t){}}]);
//# sourceMappingURL=100.faafed25.chunk.js.map