"use strict";(self.webpackChunkteste=self.webpackChunkteste||[]).push([[817],{7817:(le,A,x)=>{x.r(A),x.d(A,{ContatoModule:()=>re});var V=x(6895),P=x(1706),m=x(433),s=x(1571);function Z(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse Campo precisa de no m\xednimo 4 caracteres. "),s.qZA())}function $(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function j(a,o){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,Z,2,0,"small",11),s.YNc(2,$,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.nome.hasError("required"))}}function F(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse Campo precisa de no m\xednimo 10 caracteres. "),s.qZA())}function L(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function J(a,o){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,F,2,0,"small",11),s.YNc(2,L,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.assunto.hasError("required"))}}function q(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse Campo precisa de no m\xednimo 11 caracteres. "),s.qZA())}function B(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function U(a,o){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,q,2,0,"small",11),s.YNc(2,B,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.telefone.hasError("required"))}}function Y(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse Campo precisa ser um e-mail v\xe1lido. "),s.qZA())}function Q(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function W(a,o){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,Y,2,0,"small",11),s.YNc(2,Q,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.hasError("email")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.email.hasError("required"))}}function z(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse Campo precisa de no m\xednimo 20 caracteres. "),s.qZA())}function G(a,o){1&a&&(s.TgZ(0,"small",12),s._uU(1," Esse campo precisa ser preenchido "),s.qZA())}function K(a,o){if(1&a&&(s.TgZ(0,"div"),s.YNc(1,z,2,0,"small",11),s.YNc(2,G,2,0,"small",11),s.qZA()),2&a){const e=s.oxw();s.xp6(1),s.Q6J("ngIf",e.formContato.controls.mensagem.hasError("minlength")),s.xp6(1),s.Q6J("ngIf",e.formContato.controls.mensagem.hasError("required"))}}const X=[{path:"",component:(()=>{class a{constructor(e){this.fb=e,this.formContato=this.fb.group({nome:["",[m.kI.minLength(4),m.kI.required]],assunto:["",[m.kI.minLength(10),m.kI.required]],telefone:["",[m.kI.minLength(11),m.kI.required]],email:["",[m.kI.email,m.kI.required]],mensagem:["",[m.kI.minLength(20),m.kI.required]]})}ngOnInit(){}enviarFormulario(){alert("A mensagem foi enviada"),this.formContato.reset()}}return a.\u0275fac=function(e){return new(e||a)(s.Y36(m.qu))},a.\u0275cmp=s.Xpm({type:a,selectors:[["app-contato"]],decls:20,vars:27,consts:[[1,"contact__title"],[1,"contact__container"],[1,"contact-form",3,"formGroup","ngSubmit"],["type","text","placeholder","Digite o seu nome","formControlName","nome"],[4,"ngIf"],["type","assunto","placeholder","Digite o assunto","formControlName","assunto"],["type","tel","placeholder","(00) 0 0000-000","formControlName","telefone"],["type","email","placeholder","digite o seu e-mail","formControlName","email"],["maxlength","300","placeholder","Digite a sua mensagem...","rows","4","formControlName","mensagem"],["type","submit",3,"disabled"],["src","https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14230.300361031368!2d-49.0703074!3d-26.9169772!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5ec9dd8406a6a7!2sProWay!5e0!3m2!1spt-BR!2sbr!4v1655928696085!5m2!1spt-BR!2sbr","width","600","height","450","allowfullscreen","","loading","lazy","referrerpolicy","no-referrer-when-downgrade",2,"border","0"],["class","error-message",4,"ngIf"],[1,"error-message"]],template:function(e,t){1&e&&(s.TgZ(0,"h2",0),s._uU(1,"Entre em contato"),s.qZA(),s.TgZ(2,"section",1)(3,"form",2),s.NdJ("ngSubmit",function(){return t.enviarFormulario()}),s._UZ(4,"input",3),s.YNc(5,j,3,2,"div",4),s._UZ(6,"input",5),s.YNc(7,J,3,2,"div",4),s._UZ(8,"input",6),s.YNc(9,U,3,2,"div",4),s._UZ(10,"input",7),s.YNc(11,W,3,2,"div",4),s._UZ(12,"textarea",8),s.YNc(13,K,3,2,"div",4),s.TgZ(14,"button",9),s._uU(15,"Enviar"),s.qZA()(),s.TgZ(16,"address"),s._UZ(17,"iframe",10),s.TgZ(18,"p"),s._uU(19,"R. 7 de Setembro, 1600 - 14\xba andar - Centro, Blumenau - SC, 89010-204"),s.qZA()()()),2&e&&(s.xp6(3),s.Q6J("formGroup",t.formContato),s.xp6(1),s.ekj("valid",t.formContato.controls.nome.valid)("invalid",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.nome.invalid&&(t.formContato.controls.nome.touched||t.formContato.controls.nome.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.assunto.valid)("invalid",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.assunto.invalid&&(t.formContato.controls.assunto.touched||t.formContato.controls.assunto.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.telefone.valid)("invalid",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.telefone.invalid&&(t.formContato.controls.telefone.touched||t.formContato.controls.telefone.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.email.valid)("invalid",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.email.invalid&&(t.formContato.controls.email.touched||t.formContato.controls.email.dirty)),s.xp6(1),s.ekj("valid",t.formContato.controls.mensagem.valid)("invalid",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),s.xp6(1),s.Q6J("ngIf",t.formContato.controls.mensagem.invalid&&(t.formContato.controls.mensagem.touched||t.formContato.controls.mensagem.dirty)),s.xp6(1),s.Q6J("disabled",t.formContato.invalid))},dependencies:[V.O5,m._Y,m.Fj,m.JJ,m.JL,m.nD,m.sg,m.u],styles:[".contact__title[_ngcontent-%COMP%]{font-size:44px;color:var(--gray);font-weight:700;padding:8px 0}.contact-form[_ngcontent-%COMP%]{display:flex;flex:1;flex-direction:column;row-gap:20px;margin-bottom:50px;min-width:300px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{align-self:flex-end;background-color:var(--blue);border:none;color:#fff;font-size:20px;padding:6px 12px;width:200px}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{filter:brightness(1.1)}.contact__container[_ngcontent-%COMP%]{display:flex;flex-flow:row wrap;column-gap:20px;padding:20px 0}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled{background-color:var(--gray)}.contact-form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:disabled:hover{filter:none}"]}),a})()}];let ee=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[P.Bz.forChild(X),P.Bz]}),a})();const R=new s.OlP("ngx-mask config"),O=new s.OlP("new ngx-mask config"),D=new s.OlP("initial ngx-mask config"),te={suffix:"",prefix:"",thousandSeparator:" ",decimalMarker:[".",","],clearIfNotMatch:!1,showTemplate:!1,showMaskTyped:!1,placeHolderCharacter:"_",dropSpecialCharacters:!0,hiddenInput:void 0,shownMaskExpression:"",separatorLimit:"",allowNegativeNumbers:!1,validation:!0,specialCharacters:["-","/","(",")",".",":"," ","+",",","@","[","]",'"',"'"],leadZeroDateTime:!1,triggerOnMaskChange:!1,maskFilled:new s.vpe,patterns:{0:{pattern:new RegExp("\\d")},9:{pattern:new RegExp("\\d"),optional:!0},X:{pattern:new RegExp("\\d"),symbol:"*"},A:{pattern:new RegExp("[a-zA-Z0-9]")},S:{pattern:new RegExp("[a-zA-Z]")},U:{pattern:new RegExp("[A-Z]")},L:{pattern:new RegExp("[a-z]")},d:{pattern:new RegExp("\\d")},m:{pattern:new RegExp("\\d")},M:{pattern:new RegExp("\\d")},H:{pattern:new RegExp("\\d")},h:{pattern:new RegExp("\\d")},s:{pattern:new RegExp("\\d")}}};let se=(()=>{class a{constructor(e){this._config=e,this.maskExpression="",this.actualValue="",this.shownMaskExpression="",this._formatWithSeparators=(t,r,n,p)=>{let d=[],i="";if(Array.isArray(n)){const _=new RegExp(n.map(f=>"[\\^$.|?*+()".indexOf(f)>=0?`\\${f}`:f).join("|"));d=t.split(_),i=t.match(_)?.[0]??""}else d=t.split(n),i=n;const l=d.length>1?`${i}${d[1]}`:"";let u=d[0];const g=this.separatorLimit.replace(/\s/g,"");g&&+g&&(u="-"===u[0]?`-${u.slice(1,u.length).slice(0,g.length)}`:u.slice(0,g.length));const k=/(\d+)(\d{3})/;for(;r&&k.test(u);)u=u.replace(k,"$1"+r+"$2");return void 0===p?u+l:0===p?u:u+l.substr(0,p+1)},this.percentage=t=>Number(t)>=0&&Number(t)<=100,this.getPrecision=t=>{const r=t.split(".");return r.length>1?Number(r[r.length-1]):1/0},this.checkAndRemoveSuffix=t=>{for(let r=this.suffix?.length-1;r>=0;r--){const n=this.suffix.substr(r,this.suffix?.length);if(t.includes(n)&&(r-1<0||!t.includes(this.suffix.substr(r-1,this.suffix?.length))))return t.replace(n,"")}return t},this.checkInputPrecision=(t,r,n)=>{if(r<1/0){if(Array.isArray(n)){const i=n.find(l=>l!==this.thousandSeparator);n=i||n[0]}const p=new RegExp(this._charToRegExpExpression(n)+`\\d{${r}}.*$`),d=t.match(p);d&&d[0].length-1>r&&(t=t.substring(0,t.length-(d[0].length-1-r))),0===r&&this._compareOrIncludes(t[t.length-1],n,this.thousandSeparator)&&(t=t.substring(0,t.length-1))}return t},this._shift=new Set,this.clearIfNotMatch=this._config.clearIfNotMatch,this.dropSpecialCharacters=this._config.dropSpecialCharacters,this.maskSpecialCharacters=this._config.specialCharacters,this.maskAvailablePatterns=this._config.patterns,this.prefix=this._config.prefix,this.suffix=this._config.suffix,this.thousandSeparator=this._config.thousandSeparator,this.decimalMarker=this._config.decimalMarker,this.hiddenInput=this._config.hiddenInput,this.showMaskTyped=this._config.showMaskTyped,this.placeHolderCharacter=this._config.placeHolderCharacter,this.validation=this._config.validation,this.separatorLimit=this._config.separatorLimit,this.allowNegativeNumbers=this._config.allowNegativeNumbers,this.leadZeroDateTime=this._config.leadZeroDateTime}applyMaskWithPattern(e,t){const[r,n]=t;return this.customPattern=n,this.applyMask(e,r)}applyMask(e,t,r=0,n=!1,p=!1,d=(()=>{})){if(!t||"string"!=typeof e)return"";let i=0,l="",u=!1,g=!1,k=1,_=!1;e.slice(0,this.prefix.length)===this.prefix&&(e=e.slice(this.prefix.length,e.length)),this.suffix&&e?.length>0&&(e=this.checkAndRemoveSuffix(e));const f=e.toString().split("");if("IP"===t){const c=e.split(".");this.ipError=this._validIP(c),t="099.099.099.099"}const y=[];for(let c=0;c<e.length;c++)e[c]?.match("\\d")&&y.push(e[c]);if("CPF_CNPJ"===t&&(this.cpfCnpjError=11!==y.length&&14!==y.length,t=y.length>11?"00.000.000/0000-00":"000.000.000-00"),t.startsWith("percent")){if(e.match("[a-z]|[A-Z]")||e.match(/[-!$%^&*()_+|~=`{}\[\]:";'<>?,\/.]/)){e=this._stripToDecimal(e);const c=this.getPrecision(t);e=this.checkInputPrecision(e,c,this.decimalMarker)}e.indexOf(".")>0&&!this.percentage(e.substring(0,e.indexOf(".")))&&(e=`${e.substring(0,e.indexOf(".")-1)}${e.substring(e.indexOf("."),e.length)}`),l=this.percentage(e)?e:e.substring(0,e.length-1)}else if(t.startsWith("separator")){(e.match("[w\u0430-\u044f\u0410-\u042f]")||e.match("[\u0401\u0451\u0410-\u044f]")||e.match("[a-z]|[A-Z]")||e.match(/[-@#!$%\\^&*()_\xa3\xac'+|~=`{}\[\]:";<>.?\/]/)||e.match("[^A-Za-z0-9,]"))&&(e=this._stripToDecimal(e)),e=e.length>1&&"0"===e[0]&&!this._compareOrIncludes(e[1],this.decimalMarker,this.thousandSeparator)&&!p?e.slice(1,e.length):e,p&&(e=this._compareOrIncludes(e[e.length-1],this.decimalMarker,this.thousandSeparator)?e.slice(0,e.length-1):e);const c=this._charToRegExpExpression(this.thousandSeparator);let h='@#!$%^&*()_+|~=`{}\\[\\]:\\s,\\.";<>?\\/'.replace(c,"");if(Array.isArray(this.decimalMarker))for(const C of this.decimalMarker)h=h.replace(this._charToRegExpExpression(C),"");else h=h.replace(this._charToRegExpExpression(this.decimalMarker),"");const v=new RegExp("["+h+"]");(e.match(v)||1===e.length&&this._compareOrIncludes(e,this.decimalMarker,this.thousandSeparator))&&(e=e.substring(0,e.length-1));const M=this.getPrecision(t),T=(e=this.checkInputPrecision(e,M,this.decimalMarker)).replace(new RegExp(c,"g"),"");l=this._formatWithSeparators(T,this.thousandSeparator,this.decimalMarker,M);const N=l.indexOf(",")-e.indexOf(","),S=l.length-e.length;if(S>0&&","!==l[r]){g=!0;let C=0;do{this._shift.add(r+C),C++}while(C<S)}else 0!==N&&r>0&&!(l.indexOf(",")>=r&&r>3)||!(l.indexOf(".")>=r&&r>3)&&S<=0?(this._shift.clear(),g=!0,k=S,this._shift.add(r+=S)):this._shift.clear()}else for(let c=0,h=f[0];c<f.length&&i!==t.length;c++,h=f[c])if(this._checkSymbolMask(h,t[i])&&"?"===t[i+1])l+=h,i+=2;else if("*"===t[i+1]&&u&&this._checkSymbolMask(h,t[i+2]))l+=h,i+=3,u=!1;else if(this._checkSymbolMask(h,t[i])&&"*"===t[i+1])l+=h,u=!0;else if("?"===t[i+1]&&this._checkSymbolMask(h,t[i+2]))l+=h,i+=3;else if(this._checkSymbolMask(h,t[i])){if("H"===t[i]&&Number(h)>2){i+=1,this._shiftStep(t,i,f.length),c--,this.leadZeroDateTime&&(l+="0");continue}if("h"===t[i]&&"2"===l&&Number(h)>3){i+=1,c--;continue}if("m"===t[i]&&Number(h)>5){i+=1,this._shiftStep(t,i,f.length),c--,this.leadZeroDateTime&&(l+="0");continue}if("s"===t[i]&&Number(h)>5){i+=1,this._shiftStep(t,i,f.length),c--,this.leadZeroDateTime&&(l+="0");continue}const v=31;if("d"===t[i]&&(Number(h)>3&&this.leadZeroDateTime||Number(e.slice(i,i+2))>v||"/"===e[i+1])){i+=1,this._shiftStep(t,i,f.length),c--,this.leadZeroDateTime&&(l+="0");continue}if("M"===t[i]){const T=0===i&&(Number(h)>2||Number(e.slice(i,i+2))>12||"/"===e[i+1]),N=e.slice(i-3,i-1).includes("/")&&("/"===e[i-2]&&Number(e.slice(i-1,i+1))>12&&"/"!==e[i]||"/"===e[i]||"/"===e[i-3]&&Number(e.slice(i-2,i))>12&&"/"!==e[i-1]||"/"===e[i-1]),S=Number(e.slice(i-3,i-1))<=v&&!e.slice(i-3,i-1).includes("/")&&"/"===e[i-1]&&(Number(e.slice(i,i+2))>12||"/"===e[i+1]),C=Number(e.slice(i-3,i-1))>v&&!e.slice(i-3,i-1).includes("/")&&!e.slice(i-2,i).includes("/")&&Number(e.slice(i-2,i))>12,ne=Number(e.slice(i-3,i-1))<=v&&!e.slice(i-3,i-1).includes("/")&&"/"!==e[i-1]&&Number(e.slice(i-1,i+1))>12;if(Number(h)>1&&this.leadZeroDateTime||T||N||S||C||ne){i+=1,this._shiftStep(t,i,f.length),c--,this.leadZeroDateTime&&(l+="0");continue}}l+=h,i++}else" "===h&&" "===t[i]?(l+=h,i++):-1!==this.maskSpecialCharacters.indexOf(t[i])?(l+=t[i],i++,this._shiftStep(t,i,f.length),c--):this.maskSpecialCharacters.indexOf(h)>-1&&this.maskAvailablePatterns[t[i]]&&this.maskAvailablePatterns[t[i]]?.optional?(!!f[i]&&"099.099.099.099"!==t&&"000.000.000-00"!==t&&"00.000.000/0000-00"!==t&&!t.match(/^9+\.0+$/)&&(l+=f[i]),i++,c--):"*"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(h)===this.maskExpression[i+2]&&u||"?"===this.maskExpression[i+1]&&this._findSpecialChar(this.maskExpression[i+2])&&this._findSpecialChar(h)===this.maskExpression[i+2]&&u?(i+=3,l+=h):this.showMaskTyped&&this.maskSpecialCharacters.indexOf(h)<0&&h!==this.placeHolderCharacter&&(_=!0);l.length+1===t.length&&-1!==this.maskSpecialCharacters.indexOf(t[t.length-1])&&(l+=t[t.length-1]);let b=r+1;for(;this._shift.has(b);)k++,b++;let E=n&&!t.startsWith("separator")?i:this._shift.has(r)?k:0;_&&E--,d(E,g),k<0&&this._shift.clear();let w=!1;p&&(w=f.every(c=>this.maskSpecialCharacters.includes(c)));let I=`${this.prefix}${w?"":l}${this.suffix}`;return 0===l.length&&(I=`${this.prefix}${l}`),I}_findSpecialChar(e){return this.maskSpecialCharacters.find(t=>t===e)}_checkSymbolMask(e,t){return this.maskAvailablePatterns=this.customPattern?this.customPattern:this.maskAvailablePatterns,this.maskAvailablePatterns[t]&&this.maskAvailablePatterns[t].pattern&&this.maskAvailablePatterns[t].pattern.test(e)}_stripToDecimal(e){return e.split("").filter((t,r)=>t.match("^-?\\d")||t.match("\\s")||"."===t||","===t||"-"===t&&0===r&&this.allowNegativeNumbers).join("")}_charToRegExpExpression(e){return e&&(" "===e?"\\s":"[\\^$.|?*+()".indexOf(e)>=0?`\\${e}`:e)}_shiftStep(e,t,r){const n=/[*?]/g.test(e.slice(0,t))?r:t;this._shift.add(n+this.prefix.length||0)}_compareOrIncludes(e,t,r){return Array.isArray(t)?t.filter(n=>n!==r).includes(e):e===t}_validIP(e){return!(4===e.length&&!e.some((t,r)=>e.length!==r+1?""===t||Number(t)>255:""===t||Number(t.substring(0,3))>255))}}return a.\u0275fac=function(e){return new(e||a)(s.LFG(R))},a.\u0275prov=s.Yz7({token:a,factory:a.\u0275fac}),a})();function ie(a,o){return o instanceof Function?{...a,...o()}:{...a,...o}}let ae=(()=>{class a{static forRoot(e){return{ngModule:a,providers:[{provide:O,useValue:e},{provide:D,useValue:te},{provide:R,useFactory:ie,deps:[D,O]},se]}}static forChild(){return{ngModule:a}}}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({}),a})();const H=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};H.KeyboardEvent||(H.KeyboardEvent=function(a,o){});let re=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=s.oAB({type:a}),a.\u0275inj=s.cJS({imports:[V.ez,ee,m.UX,ae.forRoot()]}),a})()}}]);