"use strict";(self.webpackChunkMyPRJ=self.webpackChunkMyPRJ||[]).push([[781],{6781:(Z,s,d)=>{d.r(s),d.d(s,{WelcomeModule:()=>M});var f=d(3742),e=d(5879),g=d(95),p=d(824);const m=[{path:"",component:(()=>{class r{constructor(){this.curdate="",this.countf=20,this.curt=0,this.curtraffi=0,this.curtraffm=0,this.basetraff=14,this.costs=0,this.differ=0}ngOnInit(){this.setCurrentDate()}setCurrentDate(){const a=new Date,u=a.getFullYear(),t=String(a.getMonth()+1).padStart(2,"0"),n=String(a.getDate()).padStart(2,"0");this.curdate=`${u}-${t}-${n}`}intF1(a){let u=new Date(a);return u.getFullYear()+"-"+("0"+u.getMonth()+1).slice(-2)+"-"+("0"+a.getDate()).slice(-2)}diffDates(a,u){return(new Date(a).setHours(0,0,0,0)-new Date(u).setHours(0,0,0,0))/864e5}recalc(){this.basetraff=this.countf+this.curtraffi+this.curtraffm+this.countf+this.costs;const n=this.curdate,o=this.countf;var c=new Date,l=new Date,i=new Date,h=new Date(n);i.setFullYear(h.getFullYear(),h.getMonth(),o-2),this.intF1(i)>n?((c=new Date(i)).setMonth(c.getMonth()-1),l=new Date(i)):(c=new Date(i),(l=new Date(i)).setMonth(l.getMonth()+1)),this.intF1(i)==n&&(c=new Date(i),(l=new Date(i)).setMonth(l.getMonth()+1)),this.diffDates(l,new Date(n))}static#e=this.\u0275fac=function(u){return new(u||r)};static#t=this.\u0275cmp=e.Xpm({type:r,selectors:[["app-welcome"]],decls:50,vars:8,consts:[["id","ost"],["id","curdate","type","date","nz-input","",3,"ngModel","ngModelChange"],["id","countf","type","number","nz-input","",3,"ngModel","ngModelChange"],["id","sum"],["id","curtraffi","type","number","nz-input","",3,"ngModel","ngModelChange"],["id","curtraffm","type","number","nz-input","",3,"ngModel","ngModelChange"],["id","basetraff","type","number","nz-input","",3,"ngModel","ngModelChange"],["id","clr"],["id","costs","type","number","nz-input","",3,"ngModel","ngModelChange"],["id","curt","type","number","nz-input","",3,"ngModel","ngModelChange"],["id","differ","type","number","nz-input","",3,"ngModel","ngModelChange"],["colspan","3","align","center",2,"border-block","solid"],["id","prc","align","right"]],template:function(u,t){1&u&&(e.TgZ(0,"table")(1,"tr")(2,"td"),e._uU(3," \u0414\u043d\u0435\u0439 "),e.qZA(),e.TgZ(4,"td"),e._uU(5," \u0422\u0435\u043a\u0443\u0449\u0430\u044f \u0434\u0430\u0442\u0430 "),e.qZA(),e.TgZ(6,"td"),e._uU(7," \u0414\u0435\u043d\u044c "),e.qZA()(),e.TgZ(8,"tr"),e._UZ(9,"td",0),e.TgZ(10,"td")(11,"input",1),e.NdJ("ngModelChange",function(o){return t.curdate=o})("ngModelChange",function(){return t.recalc()}),e.qZA()(),e.TgZ(12,"td")(13,"input",2),e.NdJ("ngModelChange",function(o){return t.countf=o})("ngModelChange",function(){return t.recalc()}),e.qZA()()(),e.TgZ(14,"tr")(15,"td"),e._uU(16," \u0412\u0441\u0435\u0433\u043e "),e.qZA(),e.TgZ(17,"td"),e._uU(18," \u0422\u0435\u043a\u0420\u0430\u0441\u0445\u043e\u0434 "),e.qZA(),e.TgZ(19,"td"),e._uU(20," \u0422\u0440\u0444\u0444\u041f\u0430\u043a\u0435\u0442\u0430 "),e.qZA()(),e.TgZ(21,"tr"),e._UZ(22,"td",3),e.TgZ(23,"td")(24,"input",4),e.NdJ("ngModelChange",function(o){return t.curtraffi=o})("ngModelChange",function(){return t.recalc()}),e.qZA(),e.TgZ(25,"input",5),e.NdJ("ngModelChange",function(o){return t.curtraffm=o})("ngModelChange",function(){return t.recalc()}),e.qZA()(),e.TgZ(26,"td")(27,"input",6),e.NdJ("ngModelChange",function(o){return t.basetraff=o})("ngModelChange",function(){return t.recalc()}),e.qZA()()(),e.TgZ(28,"tr"),e._UZ(29,"td"),e.TgZ(30,"td"),e._uU(31," \u0420\u0422\u0440\u0430\u0444\u0444 \u0422\u0422\u0440\u0430\u0444\u0444 "),e.qZA(),e.TgZ(32,"td"),e._uU(33," \u041f\u0440\u0435\u0432\u044b\u0448\u0435\u043d\u0438\u0435 "),e.qZA()(),e.TgZ(34,"tr"),e._UZ(35,"td",7),e.TgZ(36,"td")(37,"input",8),e.NdJ("ngModelChange",function(o){return t.costs=o})("ngModelChange",function(){return t.recalc()}),e.qZA(),e.TgZ(38,"input",9),e.NdJ("ngModelChange",function(o){return t.curt=o})("ngModelChange",function(){return t.recalc()}),e.qZA()(),e.TgZ(39,"td")(40,"input",10),e.NdJ("ngModelChange",function(o){return t.differ=o})("ngModelChange",function(){return t.recalc()}),e.qZA()()(),e.TgZ(41,"tr")(42,"td",11),e._uU(43," \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 "),e.qZA()(),e.TgZ(44,"tr")(45,"td"),e._uU(46," \u041f\u0440\u043e\u0446\u0435\u043d\u0442 "),e.qZA(),e._UZ(47,"td"),e.TgZ(48,"td"),e._UZ(49,"p",12),e.qZA()()()),2&u&&(e.xp6(11),e.Q6J("ngModel",t.curdate),e.xp6(2),e.Q6J("ngModel",t.countf),e.xp6(11),e.Q6J("ngModel",t.curtraffi),e.xp6(1),e.Q6J("ngModel",t.curtraffm),e.xp6(2),e.Q6J("ngModel",t.basetraff),e.xp6(10),e.Q6J("ngModel",t.costs),e.xp6(1),e.Q6J("ngModel",t.curt),e.xp6(2),e.Q6J("ngModel",t.differ))},dependencies:[g.Fj,g.wV,g.JJ,g.On,p.Zp],styles:["#curdate[_ngcontent-%COMP%]{width:10em;border-color:#00f;border-width:2px}#countf[_ngcontent-%COMP%], #costs[_ngcontent-%COMP%], #basetraff[_ngcontent-%COMP%]{width:8em;border-color:#00f;border-width:2px}#curtraffi[_ngcontent-%COMP%], #curtraffm[_ngcontent-%COMP%], #costs[_ngcontent-%COMP%], #curt[_ngcontent-%COMP%]{width:5em;border-color:#00f;border-width:2px}#differ[_ngcontent-%COMP%]{width:8em;border-color:#00f;border-width:2px}"]})}return r})()}];let _=(()=>{class r{static#e=this.\u0275fac=function(u){return new(u||r)};static#t=this.\u0275mod=e.oAB({type:r});static#n=this.\u0275inj=e.cJS({imports:[f.Bz.forChild(m),f.Bz]})}return r})(),M=(()=>{class r{static#e=this.\u0275fac=function(u){return new(u||r)};static#t=this.\u0275mod=e.oAB({type:r});static#n=this.\u0275inj=e.cJS({imports:[_,g.u5,g.UX,p.o7]})}return r})()}}]);