(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"5iVK":function(l,n,u){"use strict";u.r(n);var t=u("8Y7J"),o=u("hUol");class i{constructor(l){this.actorsService=l}ngOnInit(){this.actors$=this.actorsService.list()}deleteMovie(l){const n={next:()=>{this.actors$=this.actorsService.list(),o.success("Ator exclu\xeddo com sucesso.")},error:l=>{o.error(l)}};this.actorsService.delete(l).subscribe(n)}}var e=u("s7LF");class a{constructor(l,n,u,t){this.formBuilder=l,this.actorService=n,this.route=u,this.router=t,this.currentAction="edit"}ngOnInit(){this.buildForm(),this.setCurrentAction(),this.populateForm()}ngAfterContentChecked(){this.setPageTitle()}onSubmit(){const l=this.route.snapshot.params.id;"new"===this.currentAction?this.actorService.create(this.formGroup.value).subscribe(l=>this.router.navigateByUrl("/actors")):this.actorService.update(l,this.formGroup.value).subscribe(l=>{this.router.navigateByUrl("/actors")})}onReset(){this.formGroup.reset()}get nameValidation(){const{name:l}=this.formGroup.controls;return!!(l.errors&&l.errors.required&&l.touched)}buildForm(){this.formGroup=this.formBuilder.group({name:[null,e.q.required],bio:null,avatar:null,nationality:null})}populateForm(){"edit"===this.currentAction&&this.actorService.get(this.route.snapshot.params.id).subscribe(l=>{this.formGroup.setValue({name:l.name,bio:l.bio,avatar:l.avatar,nationality:l.nationality})})}setCurrentAction(){this.currentAction="new"===this.route.snapshot.url[0].path?"new":"edit"}setPageTitle(){this.pageTitle="new"===this.currentAction?"Cadastrando um novo ator:":`Editando o ator: ${this.formGroup.value.name||""}`}}class r{}var s=u("pMnS"),b=u("OxGy"),c=u("iInd"),p=u("JTP3"),d=u("Pv0w"),m=u("sJGO"),g=u("8q+G"),h=u("jUvn"),v=u("SVse"),f=u("TzR2"),B=t.nb({encapsulation:0,styles:[["li.media[_ngcontent-%COMP%]{padding:1.6em;border-bottom:1px solid #ece4e4}img[_ngcontent-%COMP%]{width:200px}"]],data:{}});function J(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,29,"li",[["class","media"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.pb(2,0,null,null,0,"img",[["class","mr-3"]],[[8,"src",4]],null,null,null,null)),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.pb(4,0,null,null,24,"div",[["class","media-body"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(6,0,null,null,1,"h2",[["class","mt-0 mb-1"]],null,null,null,null,null)),(l()(),t.Jb(7,null,["",""])),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(9,0,null,null,0,"hr",[["class","my-4"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(11,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),t.Jb(12,null,["\n        ","\n      "])),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(14,0,null,null,13,"p",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.pb(16,0,null,null,3,"app-pencil-button",[],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Bb(l,17).onClick()&&o),o}),b.b,b.a)),t.ob(17,16384,null,0,c.l,[c.k,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.Cb(18,2),t.ob(19,114688,null,0,p.a,[],null,null),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.pb(21,0,null,null,1,"app-trash-button",[],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.deleteMovie(l.context.$implicit.id)&&t),t}),d.b,d.a)),t.ob(22,114688,null,0,m.a,[],null,null),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.pb(24,0,null,null,2,"app-add-button",[["routerLink","new"]],null,[[null,"click"]],(function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Bb(l,25).onClick()&&o),o}),g.b,g.a)),t.ob(25,16384,null,0,c.l,[c.k,c.a,[8,null],t.B,t.k],{routerLink:[0,"routerLink"]},null),t.ob(26,114688,null,0,h.a,[],null,null),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.Jb(-1,null,["\n  "]))],(function(l,n){var u=l(n,18,0,n.context.$implicit.id,"edit");l(n,17,0,u),l(n,19,0),l(n,22,0),l(n,25,0,"new"),l(n,26,0)}),(function(l,n){l(n,2,0,n.context.$implicit.avatar),l(n,7,0,n.context.$implicit.name),l(n,12,0,n.context.$implicit.bio)}))}function C(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,5,"ul",[["class","list-unstyled"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n  "])),(l()(),t.eb(16777216,null,null,2,null,J)),t.ob(3,278528,null,0,v.k,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),t.Db(131072,v.b,[t.h]),(l()(),t.Jb(-1,null,["\n"]))],(function(l,n){var u=n.component;l(n,3,0,t.Kb(n,3,0,t.Bb(n,4).transform(u.actors$)))}),null)}function k(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-actors",[],null,null,null,C,B)),t.ob(1,114688,null,0,i,[f.a],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.lb("app-actors",i,k,{},{},[]),S=u("oFJo"),G=u("dNxI"),w=t.nb({encapsulation:0,styles:[[""]],data:{}});function P(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"div",[["class","invalid-feedback"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n            O nome do ator \xe9 obrigat\xf3rio.\n          "]))],null,null)}function T(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-page-header",[],null,null,null,S.b,S.a)),t.ob(1,49152,null,0,G.a,[],{title:[0,"title"]},null),(l()(),t.Jb(-1,null,["\n\n"])),(l()(),t.pb(3,0,null,null,89,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngSubmit"],[null,"submit"],[null,"reset"]],(function(l,n,u){var o=!0,i=l.component;return"submit"===n&&(o=!1!==t.Bb(l,5).onSubmit(u)&&o),"reset"===n&&(o=!1!==t.Bb(l,5).onReset()&&o),"ngSubmit"===n&&(o=!1!==i.onSubmit()&&o),o}),null,null)),t.ob(4,16384,null,0,e.v,[],null,null),t.ob(5,540672,null,0,e.f,[[8,null],[8,null]],{form:[0,"form"]},{ngSubmit:"ngSubmit"}),t.Gb(2048,null,e.b,null,[e.f]),t.ob(7,16384,null,0,e.l,[[4,e.b]],null,null),(l()(),t.Jb(-1,null,["\n  "])),(l()(),t.pb(9,0,null,null,52,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.pb(11,0,null,null,49,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(13,0,null,null,17,"div",[["class","col-sm"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.pb(15,0,null,null,14,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n          "])),(l()(),t.pb(17,0,null,null,1,"label",[["for","name"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Nome:"])),(l()(),t.Jb(-1,null,["\n          "])),(l()(),t.pb(20,0,null,null,5,"input",[["class","form-control"],["formControlName","name"],["id","name"],["placeholder","Nome do ator"],["type","text"]],[[2,"is-invalid",null],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Bb(l,21)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Bb(l,21).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Bb(l,21)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Bb(l,21)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(21,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Gb(1024,null,e.i,(function(l){return[l]}),[e.c]),t.ob(23,671744,null,0,e.e,[[3,e.b],[8,null],[8,null],[6,e.i],[2,e.t]],{name:[0,"name"]},null),t.Gb(2048,null,e.j,null,[e.e]),t.ob(25,16384,null,0,e.k,[[4,e.j]],null,null),(l()(),t.Jb(-1,null,["\n          "])),(l()(),t.eb(16777216,null,null,1,null,P)),t.ob(28,16384,null,0,v.l,[t.M,t.J],{ngIf:[0,"ngIf"]},null),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(32,0,null,null,14,"div",[["class","col-sm"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.pb(34,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n          "])),(l()(),t.pb(36,0,null,null,1,"label",[["for","avatar"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Foto:"])),(l()(),t.Jb(-1,null,["\n          "])),(l()(),t.pb(39,0,null,null,5,"input",[["class","form-control"],["formControlName","avatar"],["id","avatar"],["placeholder","URL da foto do ator"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Bb(l,40)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Bb(l,40).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Bb(l,40)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Bb(l,40)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(40,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Gb(1024,null,e.i,(function(l){return[l]}),[e.c]),t.ob(42,671744,null,0,e.e,[[3,e.b],[8,null],[8,null],[6,e.i],[2,e.t]],{name:[0,"name"]},null),t.Gb(2048,null,e.j,null,[e.e]),t.ob(44,16384,null,0,e.k,[[4,e.j]],null,null),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(48,0,null,null,11,"div",[["class","form-group"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.pb(50,0,null,null,1,"label",[["for","nationality"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Nacionalidade:"])),(l()(),t.Jb(-1,null,["\n        "])),(l()(),t.pb(53,0,null,null,5,"input",[["class","form-control"],["formControlName","nationality"],["id","nationality"],["placeholder","brasileiro"],["type","text"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Bb(l,54)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Bb(l,54).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Bb(l,54)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Bb(l,54)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(54,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.Gb(1024,null,e.i,(function(l){return[l]}),[e.c]),t.ob(56,671744,null,0,e.e,[[3,e.b],[8,null],[8,null],[6,e.i],[2,e.t]],{name:[0,"name"]},null),t.Gb(2048,null,e.j,null,[e.e]),t.ob(58,16384,null,0,e.k,[[4,e.j]],null,null),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.Jb(-1,null,["\n  "])),(l()(),t.Jb(-1,null,["\n  "])),(l()(),t.pb(63,0,null,null,16,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.pb(65,0,null,null,13,"div",[["class","mb-3"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(67,0,null,null,1,"label",[["for","bio"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Sinopse:"])),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(70,0,null,null,7,"textarea",[["class","form-control"],["formControlName","bio"],["id","bio"],["placeholder","Biografia do ator..."],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(l,n,u){var o=!0;return"input"===n&&(o=!1!==t.Bb(l,71)._handleInput(u.target.value)&&o),"blur"===n&&(o=!1!==t.Bb(l,71).onTouched()&&o),"compositionstart"===n&&(o=!1!==t.Bb(l,71)._compositionStart()&&o),"compositionend"===n&&(o=!1!==t.Bb(l,71)._compositionEnd(u.target.value)&&o),o}),null,null)),t.ob(71,16384,null,0,e.c,[t.B,t.k,[2,e.a]],null,null),t.ob(72,16384,null,0,e.o,[],{required:[0,"required"]},null),t.Gb(1024,null,e.h,(function(l){return[l]}),[e.o]),t.Gb(1024,null,e.i,(function(l){return[l]}),[e.c]),t.ob(75,671744,null,0,e.e,[[3,e.b],[6,e.h],[8,null],[6,e.i],[2,e.t]],{name:[0,"name"]},null),t.Gb(2048,null,e.j,null,[e.e]),t.ob(77,16384,null,0,e.k,[[4,e.j]],null,null),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.Jb(-1,null,["\n  "])),(l()(),t.Jb(-1,null,["\n\n  "])),(l()(),t.pb(81,0,null,null,10,"div",[["class","container"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.pb(83,0,null,null,7,"div",[["class","float-right"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(85,0,null,null,1,"button",[["class","btn btn-primary"],["type","submit"]],null,null,null,null,null)),(l()(),t.Jb(-1,null,["Submit"])),(l()(),t.Jb(-1,null,["\n      "])),(l()(),t.pb(88,0,null,null,1,"button",[["class","btn btn-outline-danger"],["type","reset"]],null,[[null,"click"]],(function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.onReset()&&t),t}),null,null)),(l()(),t.Jb(-1,null,["Reset"])),(l()(),t.Jb(-1,null,["\n    "])),(l()(),t.Jb(-1,null,["\n  "])),(l()(),t.Jb(-1,null,["\n"]))],(function(l,n){var u=n.component;l(n,1,0,u.pageTitle),l(n,5,0,u.formGroup),l(n,23,0,"name"),l(n,28,0,u.nameValidation),l(n,42,0,"avatar"),l(n,56,0,"nationality"),l(n,72,0,""),l(n,75,0,"bio")}),(function(l,n){var u=n.component;l(n,3,0,t.Bb(n,7).ngClassUntouched,t.Bb(n,7).ngClassTouched,t.Bb(n,7).ngClassPristine,t.Bb(n,7).ngClassDirty,t.Bb(n,7).ngClassValid,t.Bb(n,7).ngClassInvalid,t.Bb(n,7).ngClassPending),l(n,20,0,u.nameValidation,t.Bb(n,25).ngClassUntouched,t.Bb(n,25).ngClassTouched,t.Bb(n,25).ngClassPristine,t.Bb(n,25).ngClassDirty,t.Bb(n,25).ngClassValid,t.Bb(n,25).ngClassInvalid,t.Bb(n,25).ngClassPending),l(n,39,0,t.Bb(n,44).ngClassUntouched,t.Bb(n,44).ngClassTouched,t.Bb(n,44).ngClassPristine,t.Bb(n,44).ngClassDirty,t.Bb(n,44).ngClassValid,t.Bb(n,44).ngClassInvalid,t.Bb(n,44).ngClassPending),l(n,53,0,t.Bb(n,58).ngClassUntouched,t.Bb(n,58).ngClassTouched,t.Bb(n,58).ngClassPristine,t.Bb(n,58).ngClassDirty,t.Bb(n,58).ngClassValid,t.Bb(n,58).ngClassInvalid,t.Bb(n,58).ngClassPending),l(n,70,0,t.Bb(n,72).required?"":null,t.Bb(n,77).ngClassUntouched,t.Bb(n,77).ngClassTouched,t.Bb(n,77).ngClassPristine,t.Bb(n,77).ngClassDirty,t.Bb(n,77).ngClassValid,t.Bb(n,77).ngClassInvalid,t.Bb(n,77).ngClassPending)}))}function x(l){return t.Lb(0,[(l()(),t.pb(0,0,null,null,1,"app-actor-form",[],null,null,null,T,w)),t.ob(1,2211840,null,0,a,[e.d,f.a,c.a,c.k],null,null)],(function(l,n){l(n,1,0)}),null)}var I=t.lb("app-actor-form",a,x,{},{},[]),_=u("PCNd");u.d(n,"ActorsModuleNgFactory",(function(){return L}));var L=t.mb(r,[],(function(l){return t.yb([t.zb(512,t.j,t.X,[[8,[s.a,y,I]],[3,t.j],t.v]),t.zb(4608,v.n,v.m,[t.s,[2,v.w]]),t.zb(4608,e.d,e.d,[]),t.zb(4608,e.s,e.s,[]),t.zb(1073742336,v.c,v.c,[]),t.zb(1073742336,c.n,c.n,[[2,c.s],[2,c.k]]),t.zb(1073742336,e.r,e.r,[]),t.zb(1073742336,e.n,e.n,[]),t.zb(1073742336,_.a,_.a,[]),t.zb(1073742336,r,r,[]),t.zb(1024,c.i,(function(){return[[{path:"",component:i},{path:"new",component:a},{path:":id/edit",component:a},{path:"**",redirectTo:""}]]}),[])])}))}}]);