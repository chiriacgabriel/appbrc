(self.webpackChunkpaper_dashboard_pro_angular=self.webpackChunkpaper_dashboard_pro_angular||[]).push([[407],{68407:function(t,e,n){"use strict";n.r(e),n.d(e,{CompanyDataModule:function(){return m}});var o=n(61116),a=n(29996),r=n(31041),i=n(14391),l=n(93820),c=n(529),d=n(75715),g=n(42693),p=function(){function t(t){this.http=t,this.apiServerUrl=c.N.apiBaseUrl}return t.prototype.getAll=function(){return this.http.get(this.apiServerUrl+"/api/company-data/profile")},t.prototype.add=function(t){return this.http.post(this.apiServerUrl+"/api/company-data",t,d.c)},t.prototype.editById=function(t,e){return this.http.put(this.apiServerUrl+"/api/company-data/"+t,e,d.c)},t.prototype.deleteById=function(t){return this.http.delete(this.apiServerUrl+"/api/company-data/"+t)},t.\u0275fac=function(e){return new(e||t)(l.LFG(g.eN))},t.\u0275prov=l.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t}(),Z=[{path:"",children:[{path:"company-data",component:function(){function t(t,e){this.companyService=t,this.formBuilder=e,this.errorMessage="",this.existCompanyData=!1}return t.prototype.ngOnInit=function(){this.getCompanyData(),this.companyForm()},t.prototype.companyForm=function(){this.validatingForm=this.formBuilder.group({id:new r.NI(""),name:new r.NI("",r.kI.required),cif:new r.NI("",r.kI.required),tradeRegister:new r.NI("",r.kI.required),socialCapital:new r.NI("",r.kI.required),county:new r.NI("",r.kI.required),streetAddress:new r.NI("",r.kI.required),city:new r.NI("",r.kI.required),vatPayer:new r.NI("",r.kI.required),bank:new r.NI("",r.kI.required),iban:new r.NI("",r.kI.required),phone:new r.NI("",r.kI.required),fax:new r.NI("",r.kI.required),email:new r.NI("",r.kI.required),webAddress:new r.NI("",r.kI.required),additionalData:new r.NI("",r.kI.required)})},t.prototype.getCompanyData=function(){var t=this;this.companyService.getAll().subscribe(function(e){e&&(t.existCompanyData=!0),t.validatingForm.patchValue(e)},function(e){t.errorMessage=e.error.message})},t.prototype.onSubmit=function(){var t=this,e=this.validatingForm.get("id").value;e?this.companyService.editById(Number(e),this.validatingForm.value).toPromise().then(function(e){t.getCompanyData()}).catch(function(e){t.errorMessage=e.error.message}):this.companyService.add(this.validatingForm.value).toPromise().then(function(){t.getCompanyData()}).catch(function(e){t.errorMessage=e.error.message})},t.\u0275fac=function(e){return new(e||t)(l.Y36(p),l.Y36(r.qu))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-company-data"]],decls:109,vars:2,consts:[[1,"main-content"],[1,"row"],[1,"col-md-12"],["id","companyTab","role","contaTab",1,"nav","nav-tabs-navigation","custom-tab-pane"],[1,"nav-item"],["id","company-data-tab","data-toggle","tab","href","#company-data","role","tab","aria-controls","company-data","aria-selected","true",1,"nav-link","active"],["id","contaTabContent",1,"tab-content"],["id","company-data","role","tabpanel","aria-labelledby","companyTab",1,"tab-pane","fade","show","active","mx-3"],[3,"formGroup","ngSubmit"],[1,"col-md-6"],[1,"card","card-custom"],[1,"card-header"],[1,"title"],[1,"card-body"],[1,"form-group"],["type","text","placeholder","Nume Companie","formControlName","name",1,"form-control"],["type","text","placeholder","CIF","formControlName","cif",1,"form-control"],["type","text","placeholder","Registrul Comertului","formControlName","tradeRegister",1,"form-control"],["type","text","placeholder","Localitate","formControlName","city",1,"form-control"],["type","text","placeholder","Adresa","formControlName","streetAddress",1,"form-control"],["type","text","placeholder","Judet","formControlName","county",1,"form-control"],["type","text","placeholder","Capital Social","formControlName","socialCapital",1,"form-control"],["type","radio","formControlName","vatPayer",1,"form-control"],["value","","disabled","","selected",""],["value","true"],["value","false"],["type","text","placeholder","Banca","formControlName","bank",1,"form-control"],["type","text","placeholder","IBAN","formControlName","iban",1,"form-control"],["type","text","placeholder","Telefon","formControlName","phone",1,"form-control"],["type","text","placeholder","FAX","formControlName","fax",1,"form-control"],["type","email","placeholder","Email","formControlName","email",1,"form-control"],["type","text","placeholder","Adresa web","formControlName","webAddress",1,"form-control"],["type","text","placeholder","Date aditionale","formControlName","additionalData",1,"form-control"],[1,"row","mx-auto","float-right"],["type","submit",1,"btn","btn-success"]],template:function(t,e){1&t&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"ul",3),l.TgZ(4,"li",4),l.TgZ(5,"a",5),l._uU(6),l.qZA(),l.qZA(),l.qZA(),l.TgZ(7,"div",6),l.TgZ(8,"div",7),l.TgZ(9,"form",8),l.NdJ("ngSubmit",function(){return e.onSubmit()}),l.TgZ(10,"div",1),l.TgZ(11,"div",9),l.TgZ(12,"div",10),l.TgZ(13,"div",11),l.TgZ(14,"h5",12),l._uU(15,"OBLIGATORIU"),l.qZA(),l.qZA(),l.TgZ(16,"div",13),l.TgZ(17,"div",1),l.TgZ(18,"div",2),l.TgZ(19,"div",14),l.TgZ(20,"label"),l._uU(21,"Nume companie"),l.qZA(),l._UZ(22,"input",15),l.qZA(),l.qZA(),l.TgZ(23,"div",2),l.TgZ(24,"div",14),l.TgZ(25,"label"),l._uU(26,"CIF"),l.qZA(),l._UZ(27,"input",16),l.qZA(),l.qZA(),l.TgZ(28,"div",2),l.TgZ(29,"div",14),l.TgZ(30,"label"),l._uU(31,"Registrul Comertului"),l.qZA(),l._UZ(32,"input",17),l.qZA(),l.qZA(),l.TgZ(33,"div",2),l.TgZ(34,"div",14),l.TgZ(35,"label"),l._uU(36,"Localitate"),l.qZA(),l._UZ(37,"input",18),l.qZA(),l.qZA(),l.TgZ(38,"div",2),l.TgZ(39,"div",14),l.TgZ(40,"label"),l._uU(41,"Adresa"),l.qZA(),l._UZ(42,"input",19),l.qZA(),l.qZA(),l.TgZ(43,"div",2),l.TgZ(44,"div",14),l.TgZ(45,"label"),l._uU(46,"Judet"),l.qZA(),l._UZ(47,"input",20),l.qZA(),l.qZA(),l.TgZ(48,"div",2),l.TgZ(49,"div",14),l.TgZ(50,"label"),l._uU(51,"Capital Social"),l.qZA(),l._UZ(52,"input",21),l.qZA(),l.qZA(),l.TgZ(53,"div",2),l.TgZ(54,"div",14),l.TgZ(55,"label"),l._uU(56,"Platitor TVA"),l.qZA(),l.TgZ(57,"select",22),l.TgZ(58,"option",23),l._uU(59,"Platitor TVA"),l.qZA(),l.TgZ(60,"option",24),l._uU(61,"DA"),l.qZA(),l.TgZ(62,"option",25),l._uU(63,"NU"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(64,"div",9),l.TgZ(65,"div",10),l.TgZ(66,"div",11),l.TgZ(67,"h5",12),l._uU(68,"OPTIONAL"),l.qZA(),l.qZA(),l.TgZ(69,"div",13),l.TgZ(70,"div",1),l.TgZ(71,"div",2),l.TgZ(72,"div",14),l.TgZ(73,"label"),l._uU(74,"Banca"),l.qZA(),l._UZ(75,"input",26),l.qZA(),l.qZA(),l.TgZ(76,"div",2),l.TgZ(77,"div",14),l.TgZ(78,"label"),l._uU(79,"IBAN"),l.qZA(),l._UZ(80,"input",27),l.qZA(),l.qZA(),l.TgZ(81,"div",2),l.TgZ(82,"div",14),l.TgZ(83,"label"),l._uU(84,"Telefon"),l.qZA(),l._UZ(85,"input",28),l.qZA(),l.qZA(),l.TgZ(86,"div",2),l.TgZ(87,"div",14),l.TgZ(88,"label"),l._uU(89,"FAX"),l.qZA(),l._UZ(90,"input",29),l.qZA(),l.qZA(),l.TgZ(91,"div",2),l.TgZ(92,"div",14),l.TgZ(93,"label"),l._uU(94,"Adresa de email"),l.qZA(),l._UZ(95,"input",30),l.qZA(),l.qZA(),l.TgZ(96,"div",2),l.TgZ(97,"div",14),l.TgZ(98,"label"),l._uU(99,"Adresa web"),l.qZA(),l._UZ(100,"input",31),l.qZA(),l.qZA(),l.TgZ(101,"div",2),l.TgZ(102,"div",14),l.TgZ(103,"label"),l._uU(104,"Date aditionale"),l.qZA(),l._UZ(105,"input",32),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(106,"div",33),l.TgZ(107,"button",34),l._uU(108,"Salveaza modificarile"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&t&&(l.xp6(6),l.Oqu(e.existCompanyData?"Date companie":"Adauga companie"),l.xp6(3),l.Q6J("formGroup",e.validatingForm))},directives:[r._Y,r.JL,r.sg,r.Fj,r.JJ,r.u,r.EJ,r.YN,r.Kr],styles:["",".table-format[_ngcontent-%COMP%]{font-size:11px;white-space:nowrap}.card-custom[_ngcontent-%COMP%]{border-top-left-radius:0;border-top-right-radius:0}.table-format[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]{font-size:.8rem!important}.table-format[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:first-child, .table-format[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(2), .table-format[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child, .table-format[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(2){text-align:center}.table-format[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(7), .table-format[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(8), .table-format[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(7), .table-format[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(8){text-align:end}.table-format[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+3):nth-child(-n+6), .table-format[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:nth-child(n+9):nth-child(-n+10), .table-format[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+3):nth-child(-n+6), .table-format[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:nth-child(n+9):nth-child(-n+10){text-align:start}",".nav-tabs-navigation[_ngcontent-%COMP%]{border-bottom:3px solid #fbc658}.custom-tab-pane[_ngcontent-%COMP%]{margin:auto;max-width:calc(100% - 2.2em)}.nav-tabs-navigation[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%]{margin-bottom:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,Liberation Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-weight:500;color:#2e353d}.nav-tabs-navigation[_ngcontent-%COMP%]   .nav-item.show[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%], .nav-tabs-navigation[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%]{background-color:#2e353d!important;border-color:transparent;border-top-left-radius:10px;border-top-right-radius:10px;color:#fbc658}"]}),t}()}]}],m=function(){function t(){}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,a.Bz.forChild(Z),r.u5,r.UX,i.A0]]}),t}()}}]);