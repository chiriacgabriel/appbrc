(self.webpackChunkpaper_dashboard_pro_angular=self.webpackChunkpaper_dashboard_pro_angular||[]).push([[677],{7677:function(t,e,n){"use strict";n.r(e),n.d(e,{DashboardModule:function(){return P}});var r,i=n(29996),o=n(61116),a=n(31041),s=n(28784),c=n(52250),u=(n(54568),n(15121),n(41998)),d=n(31112),g=(n(88774),n(64762)),p=n(93820),f=(n(99129),n(78512),n(83163),n(81110),n(55959),n(56465),n(31906),n(26019),n(73982),n(42325),n(44689),n(79996),n(68303),n(98720),n(25416),n(56238),n(84698),function(){var t=function t(){(0,d.Z)(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=p.Yz7({token:t,factory:function(e){return t.\u0275fac(e)}}),t}()),h=function(){function t(){(0,d.Z)(this,t)}return(0,u.Z)(t,[{key:"getNativeWindow",value:function(){return window}}]),t}(),l=function(){function t(){(0,d.Z)(this,t)}return(0,u.Z)(t,[{key:"getNativeDocument",value:function(){return document}}]),t}(),Z=[h,l],v=function(t){return t[t.HTTP=1]="HTTP",t[t.HTTPS=2]="HTTPS",t[t.AUTO=3]="AUTO",t}({}),m=new p.OlP("angular-google-maps LAZY_MAPS_API_CONFIG"),y=function(){var t=function(t){(0,s.Z)(n,t);var e=(0,c.Z)(n);function n(){var t,r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,i=arguments.length>1?arguments[1]:void 0,o=arguments.length>2?arguments[2]:void 0,a=arguments.length>3?arguments[3]:void 0;return(0,d.Z)(this,n),(t=e.call(this)).localeId=a,t._SCRIPT_ID="agmGoogleMapsApiScript",t.callbackName="agmLazyMapsAPILoader",t._config=r||{},t._windowRef=i,t._documentRef=o,t}return(0,u.Z)(n,[{key:"load",value:function(){var t=this._windowRef.getNativeWindow();if(t.google&&t.google.maps)return Promise.resolve();if(this._scriptLoadingPromise)return this._scriptLoadingPromise;var e=this._documentRef.getNativeDocument().getElementById(this._SCRIPT_ID);if(e)return this._assignScriptLoadingPromise(e),this._scriptLoadingPromise;var n=this._documentRef.getNativeDocument().createElement("script");return n.type="text/javascript",n.async=!0,n.defer=!0,n.id=this._SCRIPT_ID,n.src=this._getScriptSrc(this.callbackName),this._assignScriptLoadingPromise(n),this._documentRef.getNativeDocument().body.appendChild(n),this._scriptLoadingPromise}},{key:"_assignScriptLoadingPromise",value:function(t){var e=this;this._scriptLoadingPromise=new Promise(function(n,r){e._windowRef.getNativeWindow()[e.callbackName]=function(){n()},t.onerror=function(t){r(t)}})}},{key:"_getScriptSrc",value:function(t){var e;switch(this._config&&this._config.protocol||v.HTTPS){case v.AUTO:e="";break;case v.HTTP:e="http:";break;case v.HTTPS:e="https:"}var n=this._config.hostAndPath||"maps.googleapis.com/maps/api/js",r={v:this._config.apiVersion||"quarterly",callback:t,key:this._config.apiKey,client:this._config.clientId,channel:this._config.channel,libraries:this._config.libraries,region:this._config.region,language:this._config.language||"en-US"!==this.localeId?this.localeId:null},i=Object.keys(r).filter(function(t){return null!=r[t]}).filter(function(t){return!Array.isArray(r[t])||Array.isArray(r[t])&&r[t].length>0}).map(function(t){var e=r[t];return Array.isArray(e)?{key:t,value:e.join(",")}:{key:t,value:r[t]}}).map(function(t){return"".concat(t.key,"=").concat(t.value)}).join("&");return"".concat(e,"//").concat(n,"?").concat(i)}}]),n}(f);return t.\u0275fac=function(e){return new(e||t)(p.LFG(m,8),p.LFG(h),p.LFG(l),p.LFG(p.soG))},t.\u0275prov=p.Yz7({token:t,factory:function(e){return t.\u0275fac(e)}}),t=(0,g.gn)([(0,g.fM)(0,(0,p.FiY)()),(0,g.fM)(0,(0,p.tBr)(m)),(0,g.fM)(3,(0,p.tBr)(p.soG)),(0,g.w6)("design:paramtypes",[Object,h,l,String])],t)}(),A=function(){var t=r=function(){function t(){(0,d.Z)(this,t)}return(0,u.Z)(t,null,[{key:"forRoot",value:function(t){return{ngModule:r,providers:[].concat(Z,[{provide:f,useClass:y},{provide:m,useValue:t}])}}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({}),t}(),T=n(42693),_=n(529),q=n(38760),U=function(){function t(t,e){this.http=t,this.token=e,this.apiServerUrl=_.N.apiBaseUrl}return t.prototype.getComponentsAdded=function(t){return this.http.get(this.apiServerUrl+"/api/reports/componentsAdded",{params:t})},t.prototype.getNumberOfUsersOnline=function(){return this.http.get(this.apiServerUrl+"/api/reports/numberOfUsersLoggedIn")},t.\u0275fac=function(e){return new(e||t)(p.LFG(T.eN),p.LFG(q.i))},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),b=n(98647),w=function(){function t(){}return t.prototype.previousMondayAsNumber=function(t){return 0===t.getDay()?-6:1},t.prototype.calculateDifference=function(t){return t.getDate()-t.getDay()+this.previousMondayAsNumber(t)},t.prototype.previousMonday=function(t){return new Date(t.setDate(this.calculateDifference(t)))},t.prototype.startOfCurrentMonth=function(t){return new Date(t.getFullYear(),t.getMonth(),1)},t.prototype.startOfPastMonth=function(t){var e=t.getFullYear(),n=t.getMonth()-1;return new Date(e,n,1)},t.prototype.lastDayOfPastMonth=function(t){var e=t.getFullYear(),n=t.getMonth(),r=new Date(e,n);return r.setDate(0),r.setHours(0,0,0,0),r},t.\u0275prov=p.Yz7({token:t,factory:t.\u0275fac=function(e){return new(e||t)},providedIn:"root"}),t}(),D=[{path:"",children:[{path:"dashboard",component:function(){function t(t,e,n,r){this.datePipe=t,this.reportsService=e,this.nirService=n,this.transformDate=r,this.errorMessage="",this.params=new T.LE,this.componentsAdded=0,this.numberOfUnreceived=0,this.today=new Date,this.stringToday=this.datePipe.transform(this.today,"yyyy-MM-dd")}return t.prototype.ngOnInit=function(){this.params=this.params.set("startDate",this.stringToday).set("endDate",this.stringToday),this.getComponentsCount(),this.unreceivedList(),this.getNumberOfUsersOnline()},t.prototype.show=function(t){var e=this.datePipe.transform(this.transformDate.previousMonday(new Date),"yyyy-MM-dd"),n=this.datePipe.transform(this.transformDate.startOfCurrentMonth(new Date),"yyyy-MM-dd"),r=this.datePipe.transform(this.transformDate.startOfPastMonth(new Date),"yyyy-MM-dd"),i=this.datePipe.transform(this.transformDate.lastDayOfPastMonth(new Date),"yyyy-MM-dd");switch(t.target.value){case"today":this.params=this.params.set("startDate",this.stringToday).set("endDate",this.stringToday),this.getComponentsCount();break;case"currentWeek":this.params=this.params.set("startDate",e).set("endDate",this.stringToday),this.getComponentsCount();break;case"currentMonth":this.params=this.params.set("startDate",n).set("endDate",this.stringToday),this.getComponentsCount();break;case"pastMonth":this.params=this.params.set("startDate",r).set("endDate",i),this.getComponentsCount()}},t.prototype.getComponentsCount=function(){var t=this;this.reportsService.getComponentsAdded(this.params).subscribe(function(e){t.componentsAdded=e},function(e){t.errorMessage=e.error.message})},t.prototype.getNumberOfUsersOnline=function(){var t=this;this.reportsService.getNumberOfUsersOnline().subscribe(function(e){t.numberOfActiveUsers=e},function(e){t.errorMessage=e.error.message})},t.prototype.unreceivedList=function(){var t=this;return this.nirService.getAllUnreceived().subscribe(function(e){t.numberOfUnreceived=e.length},function(e){t.errorMessage=e.error.message}),this.numberOfUnreceived},t.\u0275fac=function(e){return new(e||t)(p.Y36(o.uU),p.Y36(U),p.Y36(b.w),p.Y36(w))},t.\u0275cmp=p.Xpm({type:t,selectors:[["app-dashboard"]],decls:84,vars:3,consts:[[1,"main-content"],[1,"row"],[1,"col-lg-3","col-md-6","col-sm-6"],[1,"card","card-stats"],[1,"card-body"],[1,"col-5","col-md-4"],[1,"icon-big","text-center","icon-warning"],[1,"nc-icon","nc-globe","text-warning"],[1,"col-7","col-md-8"],[1,"numbers"],[1,"card-category"],[1,"card-title"],[1,"card-footer"],[1,"row","stats"],[1,"col-md-6"],[1,"fa","fa-refresh"],[1,"col-md-6","d-flex","justify-content-end"],["title","Single Select",1,"date-range-selection",3,"change"],["value","today","selected",""],["value","currentWeek"],["value","currentMonth"],["value","pastMonth"],[1,"col-5","col-md-3"],[1,"nc-icon","nc-money-coins","text-success"],[1,"col-7","col-md-9"],[1,"stats"],[1,"fa","fa-calendar-o"],[1,"nc-icon","nc-vector","text-danger"],[1,"fa","fa-clock-o"],[1,"nc-icon","nc-favourite-28","text-primary"]],template:function(t,e){1&t&&(p.TgZ(0,"div",0),p.TgZ(1,"div",1),p.TgZ(2,"div",2),p.TgZ(3,"div",3),p.TgZ(4,"div",4),p.TgZ(5,"div",1),p.TgZ(6,"div",5),p.TgZ(7,"div",6),p._UZ(8,"i",7),p.qZA(),p.qZA(),p.TgZ(9,"div",8),p.TgZ(10,"div",9),p.TgZ(11,"p",10),p._uU(12,"Componente adaugate"),p.qZA(),p.TgZ(13,"p",11),p._uU(14),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(15,"div",12),p._UZ(16,"hr"),p.TgZ(17,"div",13),p.TgZ(18,"div",14),p._UZ(19,"i",15),p.qZA(),p.TgZ(20,"div",16),p.TgZ(21,"select",17),p.NdJ("change",function(t){return e.show(t)}),p.TgZ(22,"option",18),p._uU(23,"Astazi"),p.qZA(),p.TgZ(24,"option",19),p._uU(25,"Saptamana curenta"),p.qZA(),p.TgZ(26,"option",20),p._uU(27,"Luna curenta"),p.qZA(),p.TgZ(28,"option",21),p._uU(29,"Luna trecuta"),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(30,"div",2),p.TgZ(31,"div",3),p.TgZ(32,"div",4),p.TgZ(33,"div",1),p.TgZ(34,"div",22),p.TgZ(35,"div",6),p._UZ(36,"i",23),p.qZA(),p.qZA(),p.TgZ(37,"div",24),p.TgZ(38,"div",9),p.TgZ(39,"p",10),p._uU(40,"Componente Nereceptionate"),p.qZA(),p.TgZ(41,"p",11),p.TgZ(42,"span"),p._uU(43),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(44,"div",12),p._UZ(45,"hr"),p.TgZ(46,"div",25),p._UZ(47,"i",26),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(48,"div",2),p.TgZ(49,"div",3),p.TgZ(50,"div",4),p.TgZ(51,"div",1),p.TgZ(52,"div",5),p.TgZ(53,"div",6),p._UZ(54,"i",27),p.qZA(),p.qZA(),p.TgZ(55,"div",8),p.TgZ(56,"div",9),p.TgZ(57,"p",10),p._uU(58,"Useri online"),p.qZA(),p.TgZ(59,"p",11),p._uU(60),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(61,"div",12),p._UZ(62,"hr"),p.TgZ(63,"div",25),p._UZ(64,"i",28),p._uU(65," In ultimele 15 min "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(66,"div",2),p.TgZ(67,"div",3),p.TgZ(68,"div",4),p.TgZ(69,"div",1),p.TgZ(70,"div",5),p.TgZ(71,"div",6),p._UZ(72,"i",29),p.qZA(),p.qZA(),p.TgZ(73,"div",8),p.TgZ(74,"div",9),p.TgZ(75,"p",10),p._uU(76,"Followers"),p.qZA(),p.TgZ(77,"p",11),p._uU(78,"+45K "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.TgZ(79,"div",12),p._UZ(80,"hr"),p.TgZ(81,"div",25),p._UZ(82,"i",15),p._uU(83," Update now "),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA(),p.qZA()),2&t&&(p.xp6(14),p.hij("",e.componentsAdded," "),p.xp6(29),p.Oqu(e.numberOfUnreceived),p.xp6(17),p.hij("",e.numberOfActiveUsers," "))},directives:[a.YN,a.Kr],styles:[".date-range-selection[_ngcontent-%COMP%]{color:#9a9a9a;text-align:center;font-weight:600;font-size:.8571em;line-height:1.35em;text-transform:uppercase;border:2px solid #cfcfcf;border-radius:5px;padding:1px 5px;cursor:pointer;background-color:#fff;transition:all .15s linear}"]}),t}()}]}],M=n(14391),P=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=p.oAB({type:t}),t.\u0275inj=p.cJS({providers:[o.uU],imports:[[o.ez,i.Bz.forChild(D),a.u5,A.forRoot({apiKey:"YOUR_GOOGLE_MAPS_API_KEY"}),M.A0,a.u5,a.UX]]}),t}()}}]);