"use strict";(self.webpackChunkMyPRJ=self.webpackChunkMyPRJ||[]).push([[134],{8134:(w,f,d)=>{d.r(f),d.d(f,{EnglishLmgModule:()=>E});var p=d(6814),_=d(3742),n=d(5879);const M={randomUUID:typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var m,J=new Uint8Array(16);function U(){if(!m&&!(m=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return m(J)}for(var l=[],y=0;y<256;++y)l.push((y+256).toString(16).slice(1));const q=function x(t,r,e){if(M.randomUUID&&!r&&!t)return M.randomUUID();var o=(t=t||{}).random||(t.rng||U)();if(o[6]=15&o[6]|64,o[8]=63&o[8]|128,r){e=e||0;for(var i=0;i<16;++i)r[e+i]=o[i];return r}return function S(t,r=0){return(l[t[r+0]]+l[t[r+1]]+l[t[r+2]]+l[t[r+3]]+"-"+l[t[r+4]]+l[t[r+5]]+"-"+l[t[r+6]]+l[t[r+7]]+"-"+l[t[r+8]]+l[t[r+9]]+"-"+l[t[r+10]]+l[t[r+11]]+l[t[r+12]]+l[t[r+13]]+l[t[r+14]]+l[t[r+15]]).toLowerCase()}(o)};let D=(()=>{class t{constructor(){}generateUUID(){return q()}static#n=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})(),A=(()=>{class t{constructor(){this.DairyItems=[]}setItems(e){this.DairyItems=e}getItems(){return this.DairyItems}addItem(e){this.DairyItems.push(e)}delItem(e){this.DairyItems.splice(e,1)}editItem(e,o){this.DairyItems[e]=o}static#n=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"})}return t})();var u=d(95),z=d(824),C=d(7595),Z=d(2920),g=d(3649),v=d(2962);function R(t,r){if(1&t){const e=n.EpF();n.TgZ(0,"nz-card",32),n.NdJ("click",function(){const a=n.CHM(e).$implicit,s=n.oxw();return n.KtG(s.onCardClick(a))}),n.TgZ(1,"p",33),n._uU(2),n.qZA(),n.TgZ(3,"p"),n._uU(4),n.qZA()()}if(2&t){const e=r.$implicit;n.xp6(2),n.Oqu(e.date),n.xp6(2),n.Oqu(e.q1)}}const T=function(){return{minRows:5,maxRows:10}},I=[{path:"",component:(()=>{class t{constructor(e,o,i,a){this.router=e,this.uuidService=o,this.datePipe=i,this.dairyService=a,this.When="",this.What="",this.Where="",this.Who="",this.Why="",this.Tale="",this.STale="",this.RTale="",this.Resum="",this.dairys=[]}ngOnInit(){this.uniqueId=this.uuidService.generateUUID(),this.dairys=JSON.parse(localStorage.getItem("dairys")||"{}"),this.dairyService.setItems(this.dairys)}onCardClick(e){this.idCard=e.id,this.CDate=e.date,this.When=e.q1,this.Who=e.q2,this.What=e.q3,this.Where=e.q4,this.Why=e.q5,this.Tale=e.Tale,this.STale=e.STale,this.RTale=e.RTale,this.Resum=e.Resum}MakeADD(){const e=this.uuidService.generateUUID();this.dairy={id:e,date:this.CDate,q1:this.When,q2:this.Who,q3:this.What,q4:this.Where,q5:this.Why,Tale:this.Tale,STale:this.STale,RTale:this.RTale,Resum:this.Resum},confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0442\u0435\u043a\u0443\u0449\u044e\u044e \u0437\u0430\u043f\u0438\u0441\u044c \u043e\u0442  "+this.CDate+" ?")&&this.dairyService.addItem(this.dairy)}MakeDel(){if(confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u043f\u0438\u0441\u044c \u043e\u0442  "+this.CDate+" ?")){const o=this.idCard,i=this.dairys.findIndex(a=>a.id===o);i>-1&&this.dairyService.delItem(i)}}MakePUT(){const e=this.idCard,o=this.dairys.findIndex(i=>i.id===e);o>-1&&(this.dairy={id:this.idCard,date:this.CDate,q1:this.When,q2:this.Who,q3:this.What,q4:this.Where,q5:this.Why,Tale:this.Tale,STale:this.STale,RTale:this.RTale,Resum:this.Resum},confirm("\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0441\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u0438\u0437\u043c\u0435\u043d\u0435\u043d\u0438\u044f \u0432 \u0442\u0435\u043a\u0443\u0449\u0435\u0439 \u0437\u0430\u043f\u0438\u0441\u0438 \u043e\u0442  "+this.CDate+" ?")&&this.dairyService.editItem(o,this.dairy))}MakeCompile(){this.Tale=this.When+" "+this.Who+" "+this.What+" "+this.Where+" "+this.Why}ngOnDestroy(){}refreshPage(){this.router.navigate([this.router.url]).then(()=>{window.location.reload()})}openTranslate(e){const a=`https://www.deepl.com/ru/translator#ru/en/${encodeURIComponent(e)}`;window.open(a,"_blank")}get DairyItems(){return this.dairyService.getItems()}onFileSelected(e){const o=e.target;if(o.files&&o.files.length){const i=o.files[0];console.log(o.files[0]);const a=new FileReader;a.onload=s=>{const L=s.target?.result;try{const c=JSON.parse(L);if(!c.Dairy||!Array.isArray(c.Dairy))throw new Error("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u0444\u043e\u0440\u043c\u0430\u0442 JSON");this.dairys=c.Dairy.map(h=>({id:h.id,date:h.date,q1:h.q1,q2:h.q2,q3:h.q3,q4:h.q4,q5:h.q5,Tale:h.Tale,STale:h.STale,RTale:h.RTale,Resum:h.Resum})),this.dairyService.setItems(this.dairys)}catch(c){console.error("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043f\u0430\u0440\u0441\u0438\u043d\u0433\u0435 JSON",c)}},a.readAsText(i)}}formatDate(e){return this.datePipe.transform(e,"dd-MM-yyyy")||""}downloadFile(){let e=JSON.stringify(this.dairyService.getItems());localStorage.setItem("dairys",e),e='{"Dairy":'+e+"}";const o=new Blob([e],{type:"application/json"}),i=window.URL.createObjectURL(o),a=document.createElement("a");a.href=i,a.download="Dairy.json",document.body.appendChild(a),a.click(),window.URL.revokeObjectURL(i),document.body.removeChild(a)}static#n=this.\u0275fac=function(o){return new(o||t)(n.Y36(_.F0),n.Y36(D),n.Y36(p.uU),n.Y36(A))};static#e=this.\u0275cmp=n.Xpm({type:t,selectors:[["app-english-lng"]],features:[n._Bn([p.uU])],decls:65,vars:32,consts:[["nzTitle","Dairy"],["type","file",3,"change"],[3,"click"],[2,"background","#dbb8e9","padding","5px"],["nz-row","",3,"nzGutter"],["style","width:200px; margin:10px; padding:5px;",3,"click",4,"ngFor","ngForOf"],["nzTitle","Questions"],["nz-form",""],["name","ADD",3,"click"],["name","DEL",3,"click"],["name","PUT",3,"click"],["nzFor","Date",3,"nzSpan"],[3,"nzSpan"],["nz-input","","name","CDate","type","date","id","CDate",3,"ngModel","ngModelChange"],["nzFor","When",3,"nzSpan"],["nz-input","","name","When","type","text","id","When",3,"ngModel","ngModelChange"],["nzFor","Who",3,"nzSpan"],["nz-input","","name","Who","type","text","id","Who",3,"ngModel","ngModelChange"],["nzFor","What",3,"nzSpan"],["nz-input","","name","What","type","text","id","What",3,"ngModel","ngModelChange"],["nzFor","Where",3,"nzSpan"],["nz-input","","name","Where","type","text","id","Where",3,"ngModel","ngModelChange"],["nzFor","Why",3,"nzSpan"],["nz-input","","name","Why","type","text","id","Why",3,"ngModel","ngModelChange"],["nzTitle","Tale"],["name","CMP",3,"click"],["nz-input","","placeholder","Controlled autosize",3,"ngModel","nzAutosize","ngModelChange"],["nzTitle","Resum"],["nzTitle","Metod"],[1,"video-container"],["controls",""],["src","assets/panda.svg","type","video/mp4"],[2,"width","200px","margin","10px","padding","5px",3,"click"],[2,"margin","1px","padding","1px"]],template:function(o,i){1&o&&(n.TgZ(0,"nz-tabset")(1,"nz-tab",0)(2,"input",1),n.NdJ("change",function(s){return i.onFileSelected(s)}),n.qZA(),n.TgZ(3,"button",2),n.NdJ("click",function(){return i.downloadFile()}),n._uU(4,"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"),n.qZA(),n.TgZ(5,"div",3)(6,"div",4),n.YNc(7,R,5,2,"nz-card",5),n.qZA()()(),n.TgZ(8,"nz-tab",6)(9,"form",7)(10,"button",8),n.NdJ("click",function(){return i.MakeADD()}),n._uU(11,"ADD"),n.qZA(),n.TgZ(12,"button",9),n.NdJ("click",function(){return i.MakeDel()}),n._uU(13,"DEL"),n.qZA(),n.TgZ(14,"button",10),n.NdJ("click",function(){return i.MakePUT()}),n._uU(15,"PUT"),n.qZA(),n.TgZ(16,"div",3)(17,"nz-form-item")(18,"nz-form-label",11),n._uU(19,"CDate"),n.qZA(),n.TgZ(20,"nz-form-control",12)(21,"input",13),n.NdJ("ngModelChange",function(s){return i.CDate=s}),n.qZA()()(),n.TgZ(22,"nz-form-item")(23,"nz-form-label",14),n._uU(24,"When?"),n.qZA(),n.TgZ(25,"nz-form-control",12)(26,"input",15),n.NdJ("ngModelChange",function(s){return i.When=s}),n.qZA()()(),n.TgZ(27,"nz-form-item")(28,"nz-form-label",16),n._uU(29,"Who?"),n.qZA(),n.TgZ(30,"nz-form-control",12)(31,"input",17),n.NdJ("ngModelChange",function(s){return i.Who=s}),n.qZA()()(),n.TgZ(32,"nz-form-item")(33,"nz-form-label",18),n._uU(34,"What?"),n.qZA(),n.TgZ(35,"nz-form-control",12)(36,"input",19),n.NdJ("ngModelChange",function(s){return i.What=s}),n.qZA()()(),n.TgZ(37,"nz-form-item")(38,"nz-form-label",20),n._uU(39,"Where?"),n.qZA(),n.TgZ(40,"nz-form-control",12)(41,"input",21),n.NdJ("ngModelChange",function(s){return i.Where=s}),n.qZA()()(),n.TgZ(42,"nz-form-item")(43,"nz-form-label",22),n._uU(44,"Why?"),n.qZA(),n.TgZ(45,"nz-form-control",12)(46,"input",23),n.NdJ("ngModelChange",function(s){return i.Why=s}),n.qZA()()()()()(),n.TgZ(47,"nz-tab",24)(48,"div",3)(49,"button",25),n.NdJ("click",function(){return i.MakeCompile()}),n._uU(50,"CMP"),n.qZA(),n.TgZ(51,"textarea",26),n.NdJ("ngModelChange",function(s){return i.Tale=s}),n.qZA(),n.TgZ(52,"textarea",26),n.NdJ("ngModelChange",function(s){return i.STale=s}),n.qZA(),n.TgZ(53,"button",2),n.NdJ("click",function(){return i.openTranslate(i.RTale)}),n._uU(54,"TRN"),n.qZA(),n.TgZ(55,"textarea",26),n.NdJ("ngModelChange",function(s){return i.RTale=s}),n.qZA()()(),n.TgZ(56,"nz-tab",27)(57,"div",3)(58,"textarea",26),n.NdJ("ngModelChange",function(s){return i.Resum=s}),n.qZA()()(),n.TgZ(59,"nz-tab",28)(60,"div",3)(61,"div",29)(62,"video",30),n._UZ(63,"source",31),n._uU(64," \u0412\u0430\u0448 \u0431\u0440\u0430\u0443\u0437\u0435\u0440 \u043d\u0435 \u043f\u043e\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u0432\u0438\u0434\u0435\u043e. "),n.qZA()()()()()),2&o&&(n.xp6(6),n.Q6J("nzGutter",2),n.xp6(1),n.Q6J("ngForOf",i.DairyItems),n.xp6(11),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzSpan",26),n.xp6(1),n.Q6J("ngModel",i.CDate),n.xp6(2),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzSpan",26),n.xp6(1),n.Q6J("ngModel",i.When),n.xp6(2),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzSpan",26),n.xp6(1),n.Q6J("ngModel",i.Who),n.xp6(2),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzSpan",26),n.xp6(1),n.Q6J("ngModel",i.What),n.xp6(2),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzSpan",26),n.xp6(1),n.Q6J("ngModel",i.Where),n.xp6(2),n.Q6J("nzSpan",2),n.xp6(2),n.Q6J("nzSpan",26),n.xp6(1),n.Q6J("ngModel",i.Why),n.xp6(5),n.Q6J("ngModel",i.Tale)("nzAutosize",n.DdM(28,T)),n.xp6(1),n.Q6J("ngModel",i.STale)("nzAutosize",n.DdM(29,T)),n.xp6(3),n.Q6J("ngModel",i.RTale)("nzAutosize",n.DdM(30,T)),n.xp6(3),n.Q6J("ngModel",i.Resum)("nzAutosize",n.DdM(31,T)))},dependencies:[u._Y,u.Fj,u.JJ,u.JL,u.On,u.F,z.Zp,z.rh,p.sg,C.xH,C.xw,Z.t3,Z.SK,g.Lr,g.Nx,g.iK,g.Fd,v.bd],styles:[".bordered-form[_ngcontent-%COMP%]{border:1px solid #e72727;padding:16px;border-radius:4px}.video-container[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100%}video[_ngcontent-%COMP%]{max-width:100%;height:auto}"]})}return t})()}];let b=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275mod=n.oAB({type:t});static#t=this.\u0275inj=n.cJS({imports:[_.Bz.forChild(I),_.Bz]})}return t})(),E=(()=>{class t{static#n=this.\u0275fac=function(o){return new(o||t)};static#e=this.\u0275mod=n.oAB({type:t});static#t=this.\u0275inj=n.cJS({imports:[b,u.u5,u.UX,z.o7,p.ez,C.we,g.U5,v.vh]})}return t})()}}]);