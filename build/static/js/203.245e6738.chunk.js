(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[203],{2028:function(e,a,t){"use strict";t.r(a),t.d(a,"AddPredictoin",(function(){return _}));var n=t(44),l=t(13),r=t(14),c=t(16),m=t(15),s=t(0),o=t.n(s),i=t(1241),u=t(1239),d=t(1240),p=t(188),h=t(1244),g=t(810),E=t(807),b=t(804),f=t(35),v=(t(822),t(59)),y=t(802),N=t(925),_=function(e){Object(c.a)(t,e);var a=Object(m.a)(t);function t(){var e;Object(l.a)(this,t);for(var r=arguments.length,c=new Array(r),m=0;m<r;m++)c[m]=arguments[m];return(e=a.call.apply(a,[this].concat(c))).state={activeTab:"1"},e.toggle=function(a){e.setState({activeTab:a})},e.onChangeHandler=function(a){e.setState({selectedFile:a.target.files[0]}),e.setState({selectedName:a.target.files[0].name}),console.log(a.target.files[0])},e.changeHandler1=function(a){e.setState({status:a.target.value})},e.changeHandler=function(a){e.setState(Object(n.a)({},a.target.name,a.target.value))},e.submitHandler=function(a){a.preventDefault(),console.log(e.props.match.params,e.state);var t=e.props.match.params.id;f.a.post("/view_onecust/".concat(t),N.data).then((function(a){console.log(a),e.props.history.push("/app/customer/customerList")})).catch((function(e){console.log(e)}))},e}return Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;console.log(this.props.match.params);var a=this.props.match.params.id;f.a.get("/getonecustomer/".concat(a)).then((function(a){console.log(a),e.setState({first_name:"",last_name:"",customer_email:"",mobile_no:"",sortorder:"",selectedFile:null,status:a.data.data.status})}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement(y.a,{breadCrumbTitle:"User",breadCrumbParent:"Home",breadCrumbActive:"Add Predictoin "}),o.a.createElement(i.a,null,o.a.createElement(u.a,{className:"m-2"},o.a.createElement(d.a,null,o.a.createElement("h1",{"col-sm-6":!0,className:"float-left"},"Add Predictoin")),o.a.createElement(d.a,null,o.a.createElement(v.b,{render:function(e){var a=e.history;return o.a.createElement(p.a,{className:" btn btn-danger float-right",onClick:function(){return a.push("/app/prediction/predictionlist")}},"Back")}}))),o.a.createElement(h.a,null,o.a.createElement(g.a,{className:"m-1",onSubmit:this.submitHandler},o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,null,"Title"),o.a.createElement(b.a,{required:!0,type:"text",name:"first_name",placeholder:"Enter Title",value:this.state.first_name,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,null,"Prediction Type"),o.a.createElement("select",{className:"form-control"},o.a.createElement("option",{selected:!0},"---Select---"),o.a.createElement("option",null,"Daily"),o.a.createElement("option",null,"Weekly"),o.a.createElement("option",null,"Monthly"))),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,null,"Date"),o.a.createElement(b.a,{required:!0,type:"date",name:"customer_email",placeholder:"Email",value:this.state.customer_email,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,null,"Amount"),o.a.createElement(b.a,{required:!0,type:"text",name:"mobile_no",placeholder:"Mobile No.",value:this.state.mobile_no,onChange:this.changeHandler})),o.a.createElement(d.a,{lg:"12",md:"12",sm:"12",className:"mb-2"},o.a.createElement(E.a,null,"Description"),o.a.createElement("textarea",{className:"form-control",placeholder:"Description..."}))),o.a.createElement(u.a,null),o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(E.a,{className:"mb-1"},"Status"),o.a.createElement("div",{className:"form-label-group",onChange:function(a){return e.changeHandler1(a)}},o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Active"}),o.a.createElement("span",{style:{marginRight:"20px"}},"Active"),o.a.createElement("input",{style:{marginRight:"3px"},type:"radio",name:"status",value:"Inactive"}),o.a.createElement("span",{style:{marginRight:"3px"}},"Inactive"))),o.a.createElement(u.a,null,o.a.createElement(d.a,{lg:"6",md:"6",sm:"6",className:"mb-2"},o.a.createElement(p.a.Ripple,{color:"primary",type:"submit",className:"mr-1 mb-1"},"Save")))))))}}]),t}(s.Component);a.default=_}}]);
//# sourceMappingURL=203.245e6738.chunk.js.map