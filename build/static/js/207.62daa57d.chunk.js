(this["webpackJsonpvuexy-react-admin-dashboard"]=this["webpackJsonpvuexy-react-admin-dashboard"]||[]).push([[207],{2035:function(e,t,a){"use strict";a.r(t);var n=a(13),r=a(14),i=a(16),l=a(15),o=a(0),c=a.n(o),u=a(1239),d=a(1240),s=a(1241),m=a(1244),g=a(796),f=a(800),h=a(797),p=a(795),v=a(804),E=a(188),S=(a(809),a(278)),w=a(181),C=(a(572),a(811)),b=(a(43),a(35)),z=a(802),D=function(e){Object(i.a)(a,e);var t=Object(l.a)(a);function a(){var e;Object(n.a)(this,a);for(var r=arguments.length,i=new Array(r),l=0;l<r;l++)i[l]=arguments[l];return(e=t.call.apply(t,[this].concat(i))).state={rowData:[],chatData:[],paginationPageSize:20,currenPageSize:"",getPageSize:"",defaultColDef:{sortable:!0,editable:!0,resizable:!0,suppressMenu:!0},columnDefs:[{headerName:"S.No",valueGetter:"node.rowIndex + 1",field:"node.rowIndex + 1",width:100,filter:!0},{headerName:"Duration",field:"duration",filter:!0,width:180,cellRendererFramework:function(e){var t,a;return c.a.createElement("div",null,0===(null===e||void 0===e||null===(t=e.data)||void 0===t?void 0:t.userdeductedAmt)?c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,"Not Answered")):c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,null===(a=e.data)||void 0===a?void 0:a.totalDuration," Min")))}},{headerName:"UserName",field:"duration",filter:!0,width:200,cellRendererFramework:function(e){var t;return c.a.createElement("div",null,c.a.createElement(c.a.Fragment,null,c.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.userId.fullname)))}},{headerName:"Date",field:"date",filter:!0,width:200,cellRendererFramework:function(e){var t;return c.a.createElement("div",null,c.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.createdAt.split("T")[0]))}},{headerName:"Deducted Amount",field:"Deducted Amount",filter:!0,width:200,cellRendererFramework:function(e){var t;return c.a.createElement("div",null,c.a.createElement("span",null,null===(t=e.data)||void 0===t?void 0:t.userdeductedAmt))}}]},e.ChatHistoryList=function(){setInterval((function(){var t=localStorage.getItem("astroId");b.a.get("/user/astroChathistory/".concat(t)).then((function(t){var a=t.data.data,n=null===a||void 0===a?void 0:a.filter((function(e){if("Chat"===(null===e||void 0===e?void 0:e.type))return e}));e.setState({rowData:n})}))}),1e4)},e.onGridReady=function(t){e.gridApi=t.api,e.gridColumnApi=t.columnApi,e.setState({currenPageSize:e.gridApi.paginationGetCurrentPage()+1,getPageSize:e.gridApi.paginationGetPageSize(),totalPages:e.gridApi.paginationGetTotalPages()})},e.updateSearchQuery=function(t){e.gridApi.setQuickFilter(t)},e.filterSize=function(t){e.gridApi&&(e.gridApi.paginationSetPageSize(Number(t)),e.setState({currenPageSize:t,getPageSize:t}))},e}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this,t=localStorage.getItem("astroId");b.a.get("/user/astroChathistory/".concat(t)).then((function(t){console.log(t);var a=t.data.data,n=null===a||void 0===a?void 0:a.filter((function(e){if("Chat"===(null===e||void 0===e?void 0:e.type))return e}));e.setState({rowData:n})})),this.ChatHistoryList()}},{key:"render",value:function(){var e=this,t=this.state,a=t.rowData,n=t.columnDefs,r=t.defaultColDef;return c.a.createElement("div",null,c.a.createElement(z.a,{breadCrumbTitle:"Chat Report",breadCrumbParent:"Home",breadCrumbActive:"Chat Report"}),c.a.createElement(u.a,{className:"app-user-list"},c.a.createElement(d.a,{sm:"12"}),c.a.createElement(d.a,{sm:"12"},c.a.createElement(s.a,null,c.a.createElement(u.a,{className:"m-2"},c.a.createElement(d.a,null,c.a.createElement("h1",{sm:"6",className:"float-left"},"Chat Reports"))),c.a.createElement(m.a,null,null===this.state.rowData?null:c.a.createElement("div",{className:"ag-theme-material w-100 my-2 ag-grid-table"},c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between align-items-center"},c.a.createElement("div",{className:"mb-1"},c.a.createElement(g.a,{className:"p-1 ag-dropdown"},c.a.createElement(f.a,{tag:"div"},this.gridApi?this.state.currenPageSize:""*this.state.getPageSize-(this.state.getPageSize-1)," ","-"," ",this.state.rowData.length-this.state.currenPageSize*this.state.getPageSize>0?this.state.currenPageSize*this.state.getPageSize:this.state.rowData.length," ","of ",this.state.rowData.length,c.a.createElement(S.a,{className:"ml-50",size:15})),c.a.createElement(h.a,{right:!0},c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(20)}},"20"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(50)}},"50"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(100)}},"100"),c.a.createElement(p.a,{tag:"div",onClick:function(){return e.filterSize(134)}},"134")))),c.a.createElement("div",{className:"d-flex flex-wrap justify-content-between mb-1"},c.a.createElement("div",{className:"table-input mr-1"},c.a.createElement(v.a,{placeholder:"search...",onChange:function(t){return e.updateSearchQuery(t.target.value)},value:this.state.value})),c.a.createElement("div",{className:"export-btn"},c.a.createElement(E.a.Ripple,{color:"primary",onClick:function(){return e.gridApi.exportDataAsCsv()}},"Export as CSV")))),c.a.createElement(w.a.Consumer,null,(function(t){return c.a.createElement(C.AgGridReact,{gridOptions:{},rowSelection:"multiple",defaultColDef:r,columnDefs:n,rowData:a,onGridReady:e.onGridReady,colResizeDefault:"shift",animateRows:!0,floatingFilter:!1,pagination:!0,paginationPageSize:e.state.paginationPageSize,pivotPanelShow:"always",enableRtl:"rtl"===t.state.direction})}))))))))}}]),a}(c.a.Component);t.default=D}}]);
//# sourceMappingURL=207.62daa57d.chunk.js.map