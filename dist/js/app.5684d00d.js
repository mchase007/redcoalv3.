(function(e){function t(t){for(var a,s,l=t[0],o=t[1],i=t[2],d=0,b=[];d<l.length;d++)s=l[d],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&b.push(n[s][0]),n[s]=0;for(a in o)Object.prototype.hasOwnProperty.call(o,a)&&(e[a]=o[a]);u&&u(t);while(b.length)b.shift()();return r.push.apply(r,i||[]),c()}function c(){for(var e,t=0;t<r.length;t++){for(var c=r[t],a=!0,l=1;l<c.length;l++){var o=c[l];0!==n[o]&&(a=!1)}a&&(r.splice(t--,1),e=s(s.s=c[0]))}return e}var a={},n={app:0},r=[];function s(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,s),c.l=!0,c.exports}s.m=e,s.c=a,s.d=function(e,t,c){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(s.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(c,a,function(t){return e[t]}.bind(null,a));return c},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],o=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=o;r.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0b02":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23");function n(e,t,c,n,r,s){var l=Object(a["C"])("router-view");return Object(a["v"])(),Object(a["d"])(l)}var r=c("260b"),s=(c("e71f"),c("ca8a"),{apiKey:"AIzaSyD5F2KooUgE4PLsA9TJjjyphyni-jS6zWM",authDomain:"redcoalv3.firebaseapp.com",projectId:"redcoalv3",storageBucket:"redcoalv3.appspot.com",messagingSenderId:"118869332116",appId:"1:118869332116:web:55ad9890c08fa4f613a481",measurementId:"G-600KT7LRM5"}),l=r["a"].initializeApp(s),o=l.firestore(),i=o.collection("test"),u=function(e){return console.log("test"),i.add(e)},d=function(){console.log("Performance")},b={mounted:function(){d()}};c("e770");b.render=n;var h=b,p=c("6c02"),O={class:"hero is-fullheight is-medium"},j={class:"hero-head"},f={class:"hero-body"},m=Object(a["h"])("div",{class:"hero-foot"},null,-1);function v(e,t,c,n,r,s){var l=Object(a["C"])("Header"),o=Object(a["C"])("Hero");return Object(a["v"])(),Object(a["d"])("section",O,[Object(a["h"])("div",j,[Object(a["h"])(l)]),Object(a["h"])("div",f,[Object(a["h"])(o)]),m])}var y={class:"container flex flex-jc-sb flex-ai-c"},g={key:0,class:"gg-close"},k={key:1,class:"gg-menu"},P=Object(a["g"])("Contact Us"),C={class:"header_logo is-size-5 is-size-4-desktop"},x=Object(a["g"])("redcoal"),w={class:"header_cart"},$=Object(a["h"])("i",{class:"gg-shopping-cart"},null,-1);function I(e,t,c,n,r,s){var l=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("nav",null,[Object(a["h"])("div",y,[Object(a["h"])("div",null,[Object(a["h"])("div",{onClick:t[1]||(t[1]=function(){return s.displayMenu&&s.displayMenu.apply(s,arguments)}),class:["header-hamburger",{open:r.open}]},[r.open?(Object(a["v"])(),Object(a["d"])("i",g)):Object(a["e"])("",!0),r.open?Object(a["e"])("",!0):(Object(a["v"])(),Object(a["d"])("i",k))],2),Object(a["h"])("div",{class:["mobile-menu",{open:r.open}]},[Object(a["h"])("span",null,[Object(a["h"])(l,{to:"/contact-us"},{default:Object(a["I"])((function(){return[P]})),_:1})])],2)]),Object(a["h"])("div",C,[Object(a["h"])("a",null,[Object(a["h"])(l,{to:"/"},{default:Object(a["I"])((function(){return[x]})),_:1})])]),Object(a["h"])("div",w,[Object(a["h"])(l,{to:"/cart"},{default:Object(a["I"])((function(){return[$]})),_:1}),Object(a["h"])(l,{to:"/cart"},{default:Object(a["I"])((function(){return[Object(a["h"])("p",null,Object(a["E"])(s.cartItemNum),1)]})),_:1})])])])}var S={name:"Header",data:function(){return{open:!1,addressLink:"../assets/menu.svg"}},computed:{cartItemNum:function(){return this.$store.getters.cartLength}},methods:{displayMenu:function(e){console.log("Menu"+this.open),this.open=!this.open}}};S.render=I;var Q=S,T={class:"heroOne"},M=Object(a["h"])("div",{class:"container has-text-centered"},[Object(a["h"])("p",{class:"title"}," Title "),Object(a["h"])("p",{class:"subtitle"}," Subtitle ")],-1),N={class:"button is-primary"},A=Object(a["g"])("Order Now");function E(e,t,c,n,r,s){var l=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("div",T,[M,Object(a["h"])("div",N,[Object(a["h"])(l,{to:{name:"Product",params:{id:s.product.productID}},onClick:t[1]||(t[1]=function(e){return s.selectMeal(s.product)})},{default:Object(a["I"])((function(){return[A]})),_:1},8,["to"])])])}var L={name:"Hero",computed:{product:function(){return this.$store.state.products[0]}},methods:{selectMeal:function(e){this.$store.commit("selectMeal",e)}}};L.render=E;var B=L,G={name:"CoalSite",components:{Header:Q,Hero:B},data:function(){return{}},mounted:function(){this.$store.commit("updateCartFromLocalStorage")},methods:{updateCart:function(e){this.$store.commit("addToCart",e)}}};G.render=v;var D=G,F={class:"hero is-fullheight is-medium"},H={class:"hero-head"},R={class:"hero-body"};function _(e,t,c,n,r,s){var l=Object(a["C"])("Header"),o=Object(a["C"])("ProductList"),i=Object(a["C"])("ProductItem");return Object(a["v"])(),Object(a["d"])("section",F,[Object(a["h"])("div",H,[Object(a["h"])(l),Object(a["h"])(o)]),Object(a["h"])("div",R,[Object(a["h"])(i)])])}var K={class:"productView container"},z={class:"content"},q={class:"is-size-4 is-size-3-tablet"},J={class:"bill"},U={class:"is-size-5 is-size-4-tablet"},V=Object(a["h"])("div",{class:"promo"},[Object(a["h"])("p",{class:" is-size-7 is-size-6-tablet"},"+ FREE Delivery")],-1),W={class:"controlSet"},X={class:"quantity"},Y={class:"field pepper flex"},Z=Object(a["h"])("span",null,"Pepper Spice:",-1),ee={class:"control"},te={class:""},ce=Object(a["h"])("span",null," No Spice ",-1),ae=Object(a["h"])("span",null," Super Pack ",-1),ne={key:0,class:"gg-arrow-down-r"},re={key:0,class:"gg-arrow-up-r"},se={key:0,class:"extraSet"},le={key:0},oe={key:1},ie={class:"controlSet"},ue={class:"quantity"},de={class:"is-size-5 packList"},be=Object(a["h"])("p",null,"What you get",-1),he={type:"1"},pe=Object(a["h"])("li",null," Bottled water. ",-1),Oe=Object(a["h"])("li",null," Mint. ",-1),je={key:0};function fe(e,t,c,n,r,s){return Object(a["v"])(),Object(a["d"])("div",K,[Object(a["h"])("div",z,[Object(a["h"])("h4",q,"Charcoal Grilled "+Object(a["E"])(s.userMeal.productName),1),Object(a["h"])("div",J,[Object(a["h"])("div",null,[Object(a["h"])("h5",U,"GHS "+Object(a["E"])(s.userMeal.productPrice)+".00",1)]),V]),Object(a["h"])("div",W,[Object(a["h"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return s.decreaseQuantity&&s.decreaseQuantity.apply(s,arguments)})},"-"),Object(a["h"])("p",X,Object(a["E"])(s.userMeal.productQuantity),1),Object(a["h"])("button",{class:"button",onClick:t[2]||(t[2]=function(){return s.increaseQuantity&&s.increaseQuantity.apply(s,arguments)})},"+")]),Object(a["h"])("div",Y,[Z,Object(a["h"])("div",ee,[Object(a["h"])("label",te,[Object(a["h"])("input",{onClick:t[3]||(t[3]=function(){return e.spicey&&e.spicey.apply(e,arguments)}),value:"",type:"checkbox"}),ce])])]),Object(a["h"])("div",{onClick:t[4]||(t[4]=function(){return s.superPack&&s.superPack.apply(s,arguments)}),class:"theButtonz"},[ae,Object(a["h"])("div",null,[Object(a["h"])("span",null,[r.extras?Object(a["e"])("",!0):(Object(a["v"])(),Object(a["d"])("i",ne))]),Object(a["h"])("span",null,[r.extras?(Object(a["v"])(),Object(a["d"])("i",re)):Object(a["e"])("",!0)])])]),r.extras?(Object(a["v"])(),Object(a["d"])("div",se,[!s.userMeal.addOnQuantity>0?(Object(a["v"])(),Object(a["d"])("p",le,"Banku with Pepper: GHS 5.00")):Object(a["e"])("",!0),s.userMeal.addOnQuantity>0?(Object(a["v"])(),Object(a["d"])("p",oe,"Banku with Pepper: GHS "+Object(a["E"])(s.userMeal.addOnPrice)+".00",1)):Object(a["e"])("",!0),Object(a["h"])("div",ie,[Object(a["h"])("div",{class:"button btn2",onClick:t[5]||(t[5]=function(){return s.decreaseQuantity1&&s.decreaseQuantity1.apply(s,arguments)})},"-"),Object(a["h"])("p",ue,Object(a["E"])(s.userMeal.addOnQuantity),1),Object(a["h"])("div",{class:"button btn2",onClick:t[6]||(t[6]=function(){return s.increaseQuantity1&&s.increaseQuantity1.apply(s,arguments)})},"+")])])):Object(a["e"])("",!0),Object(a["h"])("div",de,[be,Object(a["h"])("ol",he,[Object(a["h"])("li",null," Grilled "+Object(a["E"])(s.userMeal.productID)+" kebab: "+Object(a["E"])(s.userMeal.productQuantity),1),pe,Oe,s.userMeal.addOnQuantity>0?(Object(a["v"])(),Object(a["d"])("li",je," Banku with pepper pack: "+Object(a["E"])(s.userMeal.addOnQuantity),1)):Object(a["e"])("",!0)])]),Object(a["h"])("p",{class:["is-size-5 more",{pack:r.pack}]},Object(a["E"])(s.userMeal.productDescription),3),r.extras?Object(a["e"])("",!0):(Object(a["v"])(),Object(a["d"])("span",{key:1,onClick:t[7]||(t[7]=function(){return s.viewPack&&s.viewPack.apply(s,arguments)}),class:"clicker"},"Extra Details")),r.extras?(Object(a["v"])(),Object(a["d"])("span",{key:2,onClick:t[8]||(t[8]=function(){return s.viewPack&&s.viewPack.apply(s,arguments)}),class:"clicker"},"Less Details")):Object(a["e"])("",!0)]),Object(a["h"])("div",{class:"is-primary next",onClick:t[9]||(t[9]=function(e){return s.updateCart(s.userMeal)})},Object(a["E"])(s.isActive?"Added":"Add to Basket"),1)])}var me={data:function(){return{pack:!1,noSpice:!1,extras:!1}},components:{},computed:{view:function(){return this.$store.state.productView},userMeal:function(){return this.$store.state.meal},isActive:function(){return this.$store.state.isActive}},mounted:function(){},methods:{updateCart:function(e){this.$store.commit("addToCart",e)},closeProductView:function(){this.$store.commit("closeProductTask"),console.log("product close")},decreaseQuantity:function(){this.$store.commit("decreaseQuantity"),this.$store.commit("decreasePrice")},increaseQuantity:function(){this.$store.commit("increaseQuantity"),this.$store.commit("increasePrice")},increaseQuantity1:function(){this.$store.commit("increaseQuantity1"),this.$store.commit("increasePrice1")},decreaseQuantity1:function(){this.$store.commit("decreaseQuantity1"),this.$store.commit("decreasePrice1")},viewPack:function(){console.log("View Pack"),this.pack=!this.pack},superPack:function(){this.extras=!this.extras}}};me.render=fe;var ve=me,ye={class:"container"},ge={class:""},ke={class:"mealList"};function Pe(e,t,c,n,r,s){var l=Object(a["C"])("router-link");return Object(a["v"])(),Object(a["d"])("nav",null,[Object(a["h"])("div",ye,[Object(a["h"])("div",ge,[Object(a["h"])("div",ke,[(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(s.products,(function(e){return Object(a["v"])(),Object(a["d"])("div",{class:"mealItem",key:e.id},[Object(a["h"])(l,{ref:"link",to:{name:"Product",params:{id:e.productID}},onClick:function(t){return s.selectMeal(e)}},{default:Object(a["I"])((function(){return[Object(a["g"])(Object(a["E"])(e.productName),1)]})),_:2},1032,["to","onClick"])])})),128))])])])])}var Ce={name:"ProductList",data:function(){return{}},mounted:function(){},computed:{products:function(){return this.$store.state.products},meal:function(){return this.$store.state.meal}},methods:{selectMeal:function(e){this.Active=!0,this.$store.commit("selectMeal",e)}}};Ce.render=Pe;var xe=Ce,we={components:{Header:Q,ProductItem:ve,ProductList:xe}};we.render=_;var $e=we;function Ie(e,t,c,n,r,s){return Object(a["v"])(),Object(a["d"])("p",null,"404")}var Se={};Se.render=Ie;var Qe=Se,Te={class:"hero is-fullheight is-medium"},Me={class:"hero-head"},Ne={class:"hero-body content contact-page"},Ae={class:"contact-form"},Ee=Object(a["h"])("h1",null,"Talk to us",-1),Le={class:"field"},Be=Object(a["h"])("label",{class:"label"},"Full Name",-1),Ge={class:"control"},De=Object(a["h"])("p",{class:"help"},"Kofi Grills",-1),Fe={class:"field"},He=Object(a["h"])("label",{class:"label"},"Email",-1),Re={class:"control"},_e=Object(a["h"])("p",{class:"help"},"kofi@redcoal.com",-1),Ke={class:"field"},ze=Object(a["h"])("label",{class:"label"},"Message",-1),qe={class:"control"},Je={class:"field"},Ue={class:"control"},Ve=Object(a["f"])('<div class="contact-links"><div class="infor"><div class="flex"><i class="gg-pin"></i><p>KNUST</p></div><div class="flex"><i class="gg-phone"></i><p>0201234578</p></div><div class="flex"><i class="gg-mail"></i><p class="flex">redcoal@redcoal.com</p></div></div></div><div class="social flex"><span><i class="gg-instagram"></i></span><i class="gg-twitter"></i><i class="gg-facebook"></i></div>',2);function We(e,t,c,n,r,s){var l=Object(a["C"])("Header");return Object(a["v"])(),Object(a["d"])("section",Te,[Object(a["h"])("div",Me,[Object(a["h"])(l)]),Object(a["h"])("div",Ne,[Object(a["h"])("div",Ae,[Ee,Object(a["h"])("div",Le,[Be,Object(a["h"])("div",Ge,[Object(a["h"])("input",{onInput:t[1]||(t[1]=function(){return s.userFullName&&s.userFullName.apply(s,arguments)}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544)]),De]),Object(a["h"])("div",Fe,[He,Object(a["h"])("div",Re,[Object(a["h"])("input",{onInput:t[2]||(t[2]=function(){return s.userEmail&&s.userEmail.apply(s,arguments)}),ref:"email",class:"input",type:"email",placeholder:"kofi@redcoal.com"},null,544)]),_e]),Object(a["h"])("div",Ke,[ze,Object(a["h"])("div",qe,[Object(a["h"])("textarea",{onInput:t[3]||(t[3]=function(){return s.userContactMessage&&s.userContactMessage.apply(s,arguments)}),ref:"message",class:"textarea",placeholder:"Hi, I would like to"},null,544)])]),Object(a["h"])("div",Je,[Object(a["h"])("div",Ue,[Object(a["h"])("button",{class:"theButton4 is-link",onClick:t[4]||(t[4]=function(){return s.firebaseTestTwo&&s.firebaseTestTwo.apply(s,arguments)})},"Submit Message")])])]),Ve])])}c("b0c0");var Xe={name:"Contact",components:{Header:Q},methods:{userFullName:function(e){this.$store.commit("userFullName",e.target.value)},userEmail:function(e){this.$store.commit("userEmail",e.target.value)},userContactMessage:function(e){this.$store.commit("userContactMessage",e.target.value)},firebaseTestTwo:function(e){this.$store.commit("firebaseTestTwo"),this.$refs["name"].value="",this.$refs["email"].value="",this.$refs["message"].value="",console.log("shot fired")}}};Xe.render=We;var Ye=Xe,Ze=Object(a["K"])("data-v-fea8687c");Object(a["y"])("data-v-fea8687c");var et={class:"cartBox hero is-fullheight is-medium"},tt={key:0},ct={class:"cart-control"},at=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("i",{class:"gg-arrow-left"}),Object(a["h"])("span",null,"Back to Shop")],-1),nt=Object(a["f"])('<div class="map flex flex-fd-c" data-v-fea8687c><div class="indicators flex flex-jc-sb" data-v-fea8687c><div class="lng lat" data-v-fea8687c></div><div class="lng" data-v-fea8687c></div><div class="lng" data-v-fea8687c></div></div><div class="labels flex flex-jc-sb" data-v-fea8687c><span data-v-fea8687c>Shopping Cart</span><span class="" data-v-fea8687c>Delivery Address</span><span class="" data-v-fea8687c>Secure Payment</span></div></div>',1),rt={class:"card-content cartProduct"},st={class:"box"},lt={class:"flex flex-jc-sb orderRow"},ot={class:"flex flex-jc-sb"},it={key:0,class:"addOnRow flex flex-jc-sb"},ut={key:1},dt={class:"cart-control"},bt={class:"theButton2"},ht=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("i",{class:"gg-arrow-left"}),Object(a["h"])("span",null,"Back to Shop")],-1),pt=Object(a["h"])("p",null,"There are no items in cart",-1),Ot=Object(a["h"])("div",{class:"space"},null,-1),jt={class:"totalContainer"},ft={key:0,class:"box flex total flex-jc-sb"},mt=Object(a["h"])("div",null,[Object(a["h"])("p",null,"Number of Items:"),Object(a["h"])("p",null,"Total Price:"),Object(a["h"])("p",null,"Delivery:"),Object(a["h"])("p",null,"Total:")],-1),vt=Object(a["h"])("p",null," Free",-1);Object(a["w"])();var yt=Ze((function(e,t,c,n,r,s){var l=Object(a["C"])("router-link"),o=Object(a["C"])("CompletePurchase");return Object(a["v"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("div",et,[s.cart.length>0?(Object(a["v"])(),Object(a["d"])("div",tt,[Object(a["h"])("div",ct,[Object(a["h"])("div",{onClick:t[1]||(t[1]=function(){return s.toShop&&s.toShop.apply(s,arguments)}),class:"theButton2"},[at]),Object(a["h"])("div",null," Basket items: "+Object(a["E"])(s.cartItemLength),1)]),nt,(Object(a["v"])(!0),Object(a["d"])(a["a"],null,Object(a["B"])(s.cart,(function(e){return Object(a["v"])(),Object(a["d"])("div",null,[Object(a["h"])("div",rt,[Object(a["h"])("div",st,[Object(a["h"])("div",lt,[Object(a["h"])("div",ot,[Object(a["h"])("div",null,[Object(a["h"])("p",null,Object(a["E"])(e.productQuantity)+" "+Object(a["E"])(e.productName)+"s",1)]),Object(a["h"])("div",null,[Object(a["h"])("p",null,"GHS "+Object(a["E"])(e.productPrice)+".00",1)]),Object(a["h"])("div",null,[Object(a["h"])("i",{class:"gg-close-r",onClick:function(t){return s.removeItem(e)}},null,8,["onClick"])])]),e.addOnQuantity>0?(Object(a["v"])(),Object(a["d"])("div",it,[Object(a["h"])("div",null,[Object(a["h"])("p",null,Object(a["E"])(e.addOnQuantity)+" Banku Pack",1)]),Object(a["h"])("p",null,"GHS "+Object(a["E"])(e.addOnPrice)+".00",1),Object(a["h"])("div",null,[Object(a["h"])("i",{class:"gg-close-r",onClick:function(t){return s.removeAddOn(e)}},null,8,["onClick"])])])):Object(a["e"])("",!0)])])])])})),256))])):Object(a["e"])("",!0),0===s.cart.length?(Object(a["v"])(),Object(a["d"])("div",ut,[Object(a["h"])("div",dt,[Object(a["h"])("div",bt,[Object(a["h"])(l,{to:"/"},{default:Ze((function(){return[ht]})),_:1})]),Object(a["h"])("div",null," Basket items: "+Object(a["E"])(s.cartItemLength),1)]),pt,Ot])):Object(a["e"])("",!0),Object(a["h"])("div",jt,[s.cart.length>0?(Object(a["v"])(),Object(a["d"])("div",ft,[mt,Object(a["h"])("div",null,[Object(a["h"])("p",null,Object(a["E"])(s.cartItemLength),1),Object(a["h"])("p",null," GHS "+Object(a["E"])(s.cartTotal),1),vt,Object(a["h"])("strong",null,[Object(a["h"])("p",null," GHS "+Object(a["E"])(s.cartTotal),1)])])])):Object(a["e"])("",!0)]),s.cart.length>0?(Object(a["v"])(),Object(a["d"])("div",{key:2,class:"next2",onClick:t[2]||(t[2]=function(){return s.openCheckout&&s.openCheckout.apply(s,arguments)})}," Complete Address ")):Object(a["e"])("",!0)]),Object(a["h"])(o)],64)})),gt={class:"orderForm"},kt={class:"cartRoute"},Pt=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("i",{class:"gg-arrow-left"}),Object(a["h"])("span",null,"Back to cart")],-1),Ct=Object(a["f"])('<div class="map flex flex-fd-c"><div class="indicators flex flex-jc-sb"><div class="lng"></div><div class="lng lat"></div><div class="lng"></div></div><div class="labels flex flex-jc-sb"><span>Shopping Cart</span><span class="">Delivery Address</span><span class="">Secure Payment</span></div></div>',1),xt={class:"field one"},wt=Object(a["h"])("label",{class:"label"},"Full Name",-1),$t={class:"control"},It={key:0,class:"help"},St={class:"field"},Qt=Object(a["h"])("label",{class:"label"},"Contact Number",-1),Tt={class:"control"},Mt={key:0,class:"help"},Nt=Object(a["h"])("p",{class:"help"},"0211231234",-1),At={class:"field locale"},Et={class:"content"},Lt={class:"flex localeResponse"},Bt=Object(a["h"])("h5",null,"Local Area: ",-1),Gt={key:0},Dt={class:"control local"},Ft={class:"radio"},Ht={class:"flex inside"},Rt=Object(a["h"])("div",{class:"side"},[Object(a["h"])("span",null,"Ahodwo,"),Object(a["h"])("span",null,"Asokwa,"),Object(a["h"])("span",null,"Adiemmbra,"),Object(a["h"])("span",null,"Dakodwon,"),Object(a["h"])("span",null,"and surroundings.")],-1),_t={class:"radio"},Kt={class:"flex inside"},zt=Object(a["h"])("div",{class:"side"},[Object(a["h"])("span",null,"Asokore Mampong,"),Object(a["h"])("span",null,"Ayeduase,"),Object(a["h"])("span",null,"Bomso,"),Object(a["h"])("span",null,"KNUST Campus,"),Object(a["h"])("span",null,"Kotei,"),Object(a["h"])("span",null,"New Site"),Object(a["h"])("span",null,"and surroundings.")],-1),qt={class:"radio"},Jt={class:"flex inside"},Ut=Object(a["h"])("div",{class:"side"},[Object(a["h"])("span",null,"Adum,"),Object(a["h"])("span",null,"Bantama,"),Object(a["h"])("span",null,"Bekwai,"),Object(a["h"])("span",null,"Kwadaso,"),Object(a["h"])("span",null,"and surroundings.")],-1),Vt=Object(a["h"])("p",{class:"help"},"* Delivering to entire Ashanti soon",-1),Wt={class:"field"},Xt=Object(a["h"])("label",{class:"label"},"GPS Number",-1),Yt={class:"control"},Zt={key:0,class:"help"},ec=Object(a["h"])("p",{class:"help"},"ABC1234567",-1),tc={class:"field"},cc=Object(a["h"])("label",{class:"label"},[Object(a["g"])("Special Instructions "),Object(a["h"])("span",{class:"help"},"Optional")],-1),ac={class:"control"},nc={class:"totalContainer2"},rc={class:"box flex total flex-jc-sb"},sc=Object(a["h"])("div",null,[Object(a["h"])("p",null,"Number of Items:"),Object(a["h"])("p",null,"Total Price:"),Object(a["h"])("p",null,"Delivery:"),Object(a["h"])("p",null,"Total:")],-1),lc=Object(a["h"])("p",null," Free",-1),oc={class:"btns"};function ic(e,t,c,n,r,s){return Object(a["v"])(),Object(a["d"])("div",{class:["checkout-box",{checkout:s.isCheckout}]},[Object(a["h"])("div",gt,[Object(a["h"])("div",kt,[Object(a["h"])("div",{class:"theButton3",onClick:t[1]||(t[1]=function(){return s.returnToCart&&s.returnToCart.apply(s,arguments)})},[Pt])]),Ct,Object(a["h"])("div",xt,[wt,Object(a["h"])("div",$t,[Object(a["J"])(Object(a["h"])("input",{onBlur:t[2]||(t[2]=function(){return s.userFullName&&s.userFullName.apply(s,arguments)}),"onUpdate:modelValue":t[3]||(t[3]=function(e){return r.userName=e}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544),[[a["G"],r.userName]])]),n.v$.userName.$error?(Object(a["v"])(),Object(a["d"])("span",It," Kindly enter Fullname correctly ")):Object(a["e"])("",!0)]),Object(a["h"])("div",St,[Qt,Object(a["h"])("div",Tt,[Object(a["J"])(Object(a["h"])("input",{onBlur:t[4]||(t[4]=function(){return s.userMobile&&s.userMobile.apply(s,arguments)}),"onUpdate:modelValue":t[5]||(t[5]=function(e){return r.userContact=e}),ref:"number",class:"input",type:"tel",placeholder:"0211231234"},null,544),[[a["G"],r.userContact]])]),n.v$.userContact.$error?(Object(a["v"])(),Object(a["d"])("span",Mt," Kindly enter your contact correctly ")):Object(a["e"])("",!0),Nt]),Object(a["h"])("div",At,[Object(a["h"])("div",Et,[Object(a["h"])("div",Lt,[Bt,Object(a["h"])("p",null,[Object(a["g"])(Object(a["E"])(s.userLocale)+" ",1),s.userLocale?(Object(a["v"])(),Object(a["d"])("span",Gt,"and surroundings")):Object(a["e"])("",!0)])]),Object(a["h"])("div",Dt,[Object(a["h"])("label",Ft,[Object(a["h"])("div",Ht,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[6]||(t[6]=function(){return s.userLocal&&s.userLocal.apply(s,arguments)}),value:"Ahodwo",name:"location"},null,544),Rt])]),Object(a["h"])("label",_t,[Object(a["h"])("div",Kt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[7]||(t[7]=function(){return s.userLocal&&s.userLocal.apply(s,arguments)}),value:"KNUST Campus",name:"location"},null,544),zt])]),Object(a["h"])("label",qt,[Object(a["h"])("div",Jt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[8]||(t[8]=function(){return s.userLocal&&s.userLocal.apply(s,arguments)}),value:"Adum",name:"location"},null,544),Ut])])]),Vt])]),Object(a["h"])("div",Wt,[Xt,Object(a["h"])("div",Yt,[Object(a["J"])(Object(a["h"])("input",{onBlur:t[9]||(t[9]=function(){return s.userAddress&&s.userAddress.apply(s,arguments)}),"onUpdate:modelValue":t[10]||(t[10]=function(e){return r.userGPS=e}),ref:"gpsAddress",class:"input",type:"text",placeholder:""},null,544),[[a["G"],r.userGPS]])]),n.v$.userGPS.$error?(Object(a["v"])(),Object(a["d"])("span",Zt," Kindly enter your contact correctly ")):Object(a["e"])("",!0),ec]),Object(a["h"])("div",tc,[cc,Object(a["h"])("div",ac,[Object(a["h"])("textarea",{onInput:t[11]||(t[11]=function(){return s.plusInfor&&s.plusInfor.apply(s,arguments)}),ref:"plusInfor",class:"textarea",placeholder:"Textarea"},null,544)])]),Object(a["h"])("div",nc,[Object(a["h"])("div",rc,[sc,Object(a["h"])("div",null,[Object(a["h"])("p",null,Object(a["E"])(s.cartItemLength),1),Object(a["h"])("p",null," GHS "+Object(a["E"])(s.cartTotal),1),lc,Object(a["h"])("strong",null,[Object(a["h"])("p",null," GHS "+Object(a["E"])(s.cartTotal),1)])])])]),Object(a["h"])("div",oc,[Object(a["h"])("div",{class:"theButton4",onClick:t[12]||(t[12]=function(){return s.firebaseTest&&s.firebaseTest.apply(s,arguments)})},"Submit Order"),Object(a["h"])("div",{class:"theButton4 payBtn",onClick:t[13]||(t[13]=function(){return s.runPaystack&&s.runPaystack.apply(s,arguments)})},"Pay Order")])])],2)}var uc=c("25a0"),dc=c("e3e1"),bc={setup:function(){return{v$:Object(uc["a"])()}},components:{},data:function(){return{userName:"",userContact:"",userGPS:"",userLocality:""}},validations:function(){return{userName:{required:dc["c"],minLength:Object(dc["b"])(3)},userContact:{required:dc["c"],minLength:Object(dc["b"])(10),maxLength:Object(dc["a"])(10)},userGPS:{required:dc["c"],minLength:Object(dc["b"])(9),maxLength:Object(dc["a"])(9)}}},computed:{cartTotal:function(){return this.$store.getters.cartTotal},userLocale:function(){return this.$store.state.local},isCheckout:function(){return this.$store.state.checkout},mobile:function(){return this.$store.state.mobile},key:function(){return this.$store.state.key},email:function(){var e=this.mobile+"@redcoal.com";return e},payRef:function(){return this.$store.state.transactionRef},cartItemLength:function(){return this.$store.getters.cartLength}},methods:{test:function(){},returnToCart:function(){this.$store.commit("returnToCart")},userMobile:function(e){this.v$.$touch(),this.$store.commit("userMobile",e.target.value)},userFullName:function(e){this.v$.$touch()},userAddress:function(e){this.v$.$touch(),this.$store.commit("userAddress",e.target.value)},userLocal:function(e){this.$store.commit("userLocal",e.target.value)},plusInfor:function(e){this.$store.commit("plusInfor",e.target.value)},transactionRef:function(e){this.$store.commit("transactionRef",e),console.log(e)},firebaseTest:function(e){this.$store.commit("firebaseTest"),this.$refs["name"].value="",this.$refs["number"].value="",this.$refs["gpsAddress"].value="",this.$refs["plusInfor"].value="",this.$refs["local"].value="",console.log("shot fired")},logRef:function(){console.log(this.payRef)},runPaystack:function(){console.log("Start");var e=PaystackPop.setup({key:this.key,email:this.email,amount:100*this.cartTotal,currency:"GHS",callback:function(e){var t=e.reference;this.$store.commit("transactionRef",t),alert("Payment complete! Reference: "+t)},onClose:function(){alert("Transaction was not completed, window closed.")}});e.openIframe()}}};bc.render=ic;var hc=bc,pc={components:{CompletePurchase:hc,Header:Q},data:function(){return{}},computed:{cart:function(){return this.$store.state.cart},cartTotal:function(){return this.$store.getters.cartTotal},isRemoved:function(){return this.$store.state.remove},cartItemLength:function(){return this.$store.getters.cartLength}},methods:{openCheckout:function(){this.$store.commit("openCheckout")},removeItem:function(e){this.$store.commit("deleteFromCart",e)},removeAddOn:function(e){this.$store.commit("removeAddOn",e)},toShop:function(){this.$router.go(-1)}}};pc.render=yt,pc.__scopeId="data-v-fea8687c";var Oc=pc,jc=[{path:"/",name:"CoalSite",component:D},{path:"/meal/:id",name:"Product",component:$e,props:!0},{path:"/contact-us",name:"Contact",component:Ye},{path:"/cart",name:"Cart",component:Oc},{path:"/:catchAll(.*)",name:"NotFound",component:Qe}],fc=Object(p["a"])({history:Object(p["b"])("/"),routes:jc}),mc=fc,vc=(c("7db0"),c("a434"),c("5502")),yc=[{productName:"Sausage",productID:"sausage",productPrice:10,id:0,productImage:"Image",productQuantity:2,productDescription:"Fresh sausages that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",noSpice:"",addOnQuantity:0,addOnPrice:0,packQuantity:0},{productName:"Chicken",productID:"chicken",productPrice:8,id:1,productImage:"Image",productQuantity:2,productDescription:"Fresh chicken that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",noSpice:"",addOnQuantity:0,addOnPrice:0,packQuantity:0},{productName:"Beef",productID:"beef",productPrice:8,id:2,productImage:"Image",productQuantity:2,productDescription:"Fresh beef that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",noSpice:"",addOnQuantity:0,addOnPrice:0,packQuantity:0}],gc=yc;function kc(e){console.log("local updated"),localStorage.setItem("cart",JSON.stringify(e))}var Pc=Object(vc["a"])({state:{products:gc,cart:[],isActive:!1,exists:null,checkout:!1,remove:!1,meal:{},extraList:[],total:null,mobile:"",fullName:"",contactEmail:"",contactMessage:"",gpsAddress:"",local:"",transactionRef:"",plusInfor:"",key:"pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d"},getters:{cartTotal:function(e){return e.cart.reduce((function(e,t){return e+t.productPrice+t.addOnPrice}),0)},reference:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<10;c++)e+=t.charAt(Math.floor(Math.random()*t.length));return console.log(e),e},email:function(){var e="{{state.mobile}}@redcoal.com";return e},cartLength:function(e){var t=e.cart.length;return t}},mutations:{selectMeal:function(e,t){e.meal=t},addToCart:function(e,t){e.isActive=!e.isActive;var c=e.cart.find((function(e){return e.id===t.id}));c?console.log(c.id):e.cart.push(t),kc(e.cart),setTimeout((function(){e.isActive=!e.isActive}),300)},deleteFromCart:function(e,t){console.log(e.cart.indexOf(t)),e.cart.splice(e.cart.indexOf(t),1),kc(e.cart)},removeAddOn:function(e,t){var c=e.cart.indexOf(t);console.log(c),e.cart[c].addOnQuantity=0,kc(e.cart)},increaseCartQuantity:function(e,t){t.productQuantity++},closeProductTask:function(e){e.productView=!1},updateCartFromLocalStorage:function(e){var t=localStorage.getItem("cart");t&&(e.cart=JSON.parse(t))},openCheckout:function(e){e.open=!1,e.checkout=!0},increaseQuantity:function(e){e.meal.productQuantity++},increaseQuantity1:function(e){e.meal.addOnQuantity++},increasePrice:function(e){if("Sausage"===e.meal.productName){var t=e.meal.productPrice+3;e.meal.productPrice=t}else{var c=e.meal.productPrice+2;e.meal.productPrice=c}},increasePrice1:function(e){var t=e.meal.addOnPrice+5;e.meal.addOnPrice=t},decreaseQuantity:function(e){e.meal.productQuantity>2?e.meal.productQuantity--:console.log("Two or more")},decreaseQuantity1:function(e){e.meal.addOnQuantity>0?e.meal.addOnQuantity--:console.log("Enough")},decreasePrice:function(e){if("Sausage"===e.meal.productName)if(e.meal.productQuantity>2){var t=e.meal.productPrice-3;e.meal.productPrice=t}else 2===e.meal.productQuantity&&(e.meal.productPrice=10);else if("Beef"===e.meal.productName||"Chicken"===e.meal.productName)if(e.meal.productQuantity>2){var c=e.meal.productPrice-2;e.meal.productPrice=c}else 2===e.meal.productQuantity&&(e.meal.productPrice=8)},decreasePrice1:function(e){if(e.meal.addOnQuantity>0){var t=e.meal.addOnPrice-5;e.meal.addOnPrice=t}else 0===e.meal.addOnQuantity&&(e.meal.addOnPrice=0)},returnToCart:function(e){e.checkout=!1,e.open=!0},userMobile:function(e,t){e.mobile=t},userFullName:function(e,t){e.fullName=t},userEmail:function(e,t){e.contactEmail=t},userContactMessage:function(e,t){e.contactMessage=t},userAddress:function(e,t){e.gpsAddress=t},userLocal:function(e,t){e.local=t},plusInfor:function(e,t){e.plusInfor=t},transactionRef:function(e,t){e.transactionRef=t},firebaseTest:function(e){console.log("shoot"),u({userName:e.fullName,mobile:e.mobile,gpsAddress:e.gpsAddress,local:e.local,plusInfor:e.plusInfor,cart:e.cart}),console.log("clear"),console.log(e.cart),localStorage.clear(),e.cart=[],e.checkout=!1,e.open=!1},firebaseTestTwo:function(e){console.log("shoot2"),u({userName:e.fullName,email:e.contactEmail,contactMessage:e.contactMessage}),console.log("clear"),e.fullName="",e.contactEmail="",e.contactMessage=""}},actions:{},modules:{}});c("78a7"),Object(a["c"])(h).use(Pc).use(mc).mount("#app")},"78a7":function(e,t,c){},e770:function(e,t,c){"use strict";c("0b02")}});
//# sourceMappingURL=app.5684d00d.js.map