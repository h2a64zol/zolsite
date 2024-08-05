"use strict";(self.webpackChunkMyPRJ=self.webpackChunkMyPRJ||[]).push([[959],{4959:(S,c,s)=>{s.r(c),s.d(c,{EnglishModule:()=>J});var m=s(6814),p=s(3742),e=s(5879),C=s(9862);let f=(()=>{class i{constructor(n){this.http=n,this.url="https://dairy-data.onrender.com/Dairy"}getDairys(){return this.http.get(this.url)}getDairy(n){return this.http.get("{this.url}/{id}")}postDairy(n){return this.http.post(this.url,n)}deleteDairy(n){return this.http.delete(`${this.url}/${n}`)}updateDairy(n,a){return this.http.put(`${this.url}/${n}`,a)}static#e=this.\u0275fac=function(a){return new(a||i)(e.LFG(C.eN))};static#n=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var _=s(5619);let y=(()=>{class i{constructor(){this.dataSource=new _.X(0),this.currentData=this.dataSource.asObservable()}changeData(n){this.dataSource.next(n)}static#e=this.\u0275fac=function(a){return new(a||i)};static#n=this.\u0275prov=e.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"})}return i})();var l=s(95),u=s(824),g=s(7595),T=s(2920),h=s(3649),z=s(2962);function M(i,b){if(1&i){const n=e.EpF();e.TgZ(0,"nz-card",28),e.NdJ("click",function(){const r=e.CHM(n).$implicit,o=e.oxw();return e.KtG(o.onCardClick(r))}),e.TgZ(1,"p",29),e._uU(2),e.qZA(),e.TgZ(3,"p"),e._uU(4),e.qZA()()}if(2&i){const n=b.$implicit;e.xp6(2),e.Oqu(n.date),e.xp6(2),e.Oqu(n.q1)}}const d=function(){return{minRows:5,maxRows:10}},W=[{path:"",component:(()=>{class i{constructor(n,a,t){this.DairyService=n,this.sharedService=a,this.router=t,this.When="",this.What="",this.Where="",this.Who="",this.Why="",this.Tale="",this.STale="",this.RTale="",this.Resum=""}ngOnInit(){this.dairySubscription=this.DairyService.getDairys().subscribe(n=>{this.dairys=n})}onCardClick(n){this.idCard=n.id,this.CDate=n.date,this.When=n.q1,this.Who=n.q2,this.What=n.q3,this.Where=n.q4,this.Why=n.q5,this.Tale=n.Tale,this.STale=n.STale,this.RTale=n.RTale,this.Resum=n.Resum}MakeADD(){this.dairy={id:0,date:this.CDate,q1:this.When,q2:this.Who,q3:this.What,q4:this.Where,q5:this.Why,Tale:this.Tale,STale:this.STale,RTale:this.RTale,Resum:this.Resum},console.log(this.dairy),this.DairyService.postDairy(this.dairy).subscribe(n=>{alert("Dairy added successfully:"),this.refreshPage()},n=>{alert("Error adding dairy:")}),console.log(this.dairy)}MakeDel(n){this.idCard>0&&this.DairyService.deleteDairy(this.idCard).subscribe(a=>{alert("Dairy delete successfully:"),this.refreshPage()},a=>{alert("Error delete dairy:")})}MakePUT(){this.dairy={id:0,date:this.CDate,q1:this.When,q2:this.Who,q3:this.What,q4:this.Where,q5:this.Why,Tale:this.Tale,STale:this.STale,RTale:this.RTale,Resum:this.Resum},this.DairyService.updateDairy(this.idCard,this.dairy).subscribe(n=>{alert("Dairy update successfully:"),this.refreshPage()},n=>{alert("Error update dairy:")})}MakeCompile(){this.Tale=this.When+" "+this.Who+" "+this.What+" "+this.Where+" "+this.Why}ngOnDestroy(){this.dairySubscription&&this.dairySubscription.unsubscribe()}refreshPage(){this.router.navigate([this.router.url]).then(()=>{window.location.reload()})}openTranslate(n){const r=`https://www.deepl.com/ru/translator#ru/en/${encodeURIComponent(n)}`;window.open(r,"_blank")}downloadFile(){let a=JSON.stringify(this.dairys);a='{"Dairy":'+a+"}";const t=new Blob([a],{type:"application/json"}),r=window.URL.createObjectURL(t),o=document.createElement("a");o.href=r,o.download="Dairy.json",document.body.appendChild(o),o.click(),window.URL.revokeObjectURL(r),document.body.removeChild(o)}static#e=this.\u0275fac=function(a){return new(a||i)(e.Y36(f),e.Y36(y),e.Y36(p.F0))};static#n=this.\u0275cmp=e.Xpm({type:i,selectors:[["app-english"]],decls:61,vars:32,consts:[["nzTitle","Dairy"],[2,"background","#dbb8e9","padding","5px"],["nz-row","",3,"nzGutter"],["style","width:200px; margin:10px; padding:5px;",3,"click",4,"ngFor","ngForOf"],["nzTitle","Questions"],["nz-form",""],["name","ADD",3,"click"],["name","DEL",3,"click"],["name","PUT",3,"click"],["href","https://dairy-data.onrender.com/Dairy","target","_blank"],[3,"click"],["nzFor","Date",3,"nzSpan"],[3,"nzSpan"],["nz-input","","name","CDate","type","date","id","CDate",3,"ngModel","ngModelChange"],["nzFor","When",3,"nzSpan"],["nz-input","","name","When","type","text","id","When",3,"ngModel","ngModelChange"],["nzFor","Who",3,"nzSpan"],["nz-input","","name","Who","type","text","id","Who",3,"ngModel","ngModelChange"],["nzFor","What",3,"nzSpan"],["nz-input","","name","What","type","text","id","What",3,"ngModel","ngModelChange"],["nzFor","Where",3,"nzSpan"],["nz-input","","name","Where","type","text","id","Where",3,"ngModel","ngModelChange"],["nzFor","Why",3,"nzSpan"],["nz-input","","name","Why","type","text","id","Why",3,"ngModel","ngModelChange"],["nzTitle","Tale"],["name","CMP",3,"click"],["nz-input","","placeholder","Controlled autosize",3,"ngModel","nzAutosize","ngModelChange"],["nzTitle","Resum"],[2,"width","200px","margin","10px","padding","5px",3,"click"],[2,"margin","1px","padding","1px"]],template:function(a,t){1&a&&(e.TgZ(0,"nz-tabset")(1,"nz-tab",0)(2,"div",1)(3,"div",2),e.YNc(4,M,5,2,"nz-card",3),e.qZA()()(),e.TgZ(5,"nz-tab",4)(6,"form",5)(7,"button",6),e.NdJ("click",function(){return t.MakeADD()}),e._uU(8,"ADD"),e.qZA(),e.TgZ(9,"button",7),e.NdJ("click",function(){return t.MakeDel(1)}),e._uU(10,"DEL"),e.qZA(),e.TgZ(11,"button",8),e.NdJ("click",function(){return t.MakePUT()}),e._uU(12,"PUT"),e.qZA(),e.TgZ(13,"button")(14,"a",9),e._uU(15,"SAV"),e.qZA()(),e.TgZ(16,"button",10),e.NdJ("click",function(){return t.downloadFile()}),e._uU(17,"Download JSON"),e.qZA(),e.TgZ(18,"div",1)(19,"nz-form-item")(20,"nz-form-label",11),e._uU(21,"CDate"),e.qZA(),e.TgZ(22,"nz-form-control",12)(23,"input",13),e.NdJ("ngModelChange",function(o){return t.CDate=o}),e.qZA()()(),e.TgZ(24,"nz-form-item")(25,"nz-form-label",14),e._uU(26,"When?"),e.qZA(),e.TgZ(27,"nz-form-control",12)(28,"input",15),e.NdJ("ngModelChange",function(o){return t.When=o}),e.qZA()()(),e.TgZ(29,"nz-form-item")(30,"nz-form-label",16),e._uU(31,"Who?"),e.qZA(),e.TgZ(32,"nz-form-control",12)(33,"input",17),e.NdJ("ngModelChange",function(o){return t.Who=o}),e.qZA()()(),e.TgZ(34,"nz-form-item")(35,"nz-form-label",18),e._uU(36,"What?"),e.qZA(),e.TgZ(37,"nz-form-control",12)(38,"input",19),e.NdJ("ngModelChange",function(o){return t.What=o}),e.qZA()()(),e.TgZ(39,"nz-form-item")(40,"nz-form-label",20),e._uU(41,"Where?"),e.qZA(),e.TgZ(42,"nz-form-control",12)(43,"input",21),e.NdJ("ngModelChange",function(o){return t.Where=o}),e.qZA()()(),e.TgZ(44,"nz-form-item")(45,"nz-form-label",22),e._uU(46,"Why?"),e.qZA(),e.TgZ(47,"nz-form-control",12)(48,"input",23),e.NdJ("ngModelChange",function(o){return t.Why=o}),e.qZA()()()()()(),e.TgZ(49,"nz-tab",24)(50,"div",1)(51,"button",25),e.NdJ("click",function(){return t.MakeCompile()}),e._uU(52,"CMP"),e.qZA(),e.TgZ(53,"textarea",26),e.NdJ("ngModelChange",function(o){return t.Tale=o}),e.qZA(),e.TgZ(54,"textarea",26),e.NdJ("ngModelChange",function(o){return t.STale=o}),e.qZA(),e.TgZ(55,"button",10),e.NdJ("click",function(){return t.openTranslate(t.RTale)}),e._uU(56,"TRN"),e.qZA(),e.TgZ(57,"textarea",26),e.NdJ("ngModelChange",function(o){return t.RTale=o}),e.qZA()()(),e.TgZ(58,"nz-tab",27)(59,"div",1)(60,"textarea",26),e.NdJ("ngModelChange",function(o){return t.Resum=o}),e.qZA()()()()),2&a&&(e.xp6(3),e.Q6J("nzGutter",2),e.xp6(1),e.Q6J("ngForOf",t.dairys),e.xp6(16),e.Q6J("nzSpan",2),e.xp6(2),e.Q6J("nzSpan",26),e.xp6(1),e.Q6J("ngModel",t.CDate),e.xp6(2),e.Q6J("nzSpan",2),e.xp6(2),e.Q6J("nzSpan",26),e.xp6(1),e.Q6J("ngModel",t.When),e.xp6(2),e.Q6J("nzSpan",2),e.xp6(2),e.Q6J("nzSpan",26),e.xp6(1),e.Q6J("ngModel",t.Who),e.xp6(2),e.Q6J("nzSpan",2),e.xp6(2),e.Q6J("nzSpan",26),e.xp6(1),e.Q6J("ngModel",t.What),e.xp6(2),e.Q6J("nzSpan",2),e.xp6(2),e.Q6J("nzSpan",26),e.xp6(1),e.Q6J("ngModel",t.Where),e.xp6(2),e.Q6J("nzSpan",2),e.xp6(2),e.Q6J("nzSpan",26),e.xp6(1),e.Q6J("ngModel",t.Why),e.xp6(5),e.Q6J("ngModel",t.Tale)("nzAutosize",e.DdM(28,d)),e.xp6(1),e.Q6J("ngModel",t.STale)("nzAutosize",e.DdM(29,d)),e.xp6(3),e.Q6J("ngModel",t.RTale)("nzAutosize",e.DdM(30,d)),e.xp6(3),e.Q6J("ngModel",t.Resum)("nzAutosize",e.DdM(31,d)))},dependencies:[l._Y,l.Fj,l.JJ,l.JL,l.On,l.F,u.Zp,u.rh,m.sg,g.xH,g.xw,T.t3,T.SK,h.Lr,h.Nx,h.iK,h.Fd,z.bd],styles:[".bordered-form[_ngcontent-%COMP%]{border:1px solid #e72727;padding:16px;border-radius:4px}"]})}return i})()}];let Z=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#n=this.\u0275mod=e.oAB({type:i});static#t=this.\u0275inj=e.cJS({imports:[p.Bz.forChild(W),p.Bz]})}return i})(),J=(()=>{class i{static#e=this.\u0275fac=function(a){return new(a||i)};static#n=this.\u0275mod=e.oAB({type:i});static#t=this.\u0275inj=e.cJS({imports:[Z,l.u5,l.UX,u.o7,m.ez,g.we,h.U5,z.vh]})}return i})()}}]);