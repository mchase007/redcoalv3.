(function(e){function t(t){for(var a,r,o=t[0],l=t[1],i=t[2],d=0,b=[];d<o.length;d++)r=o[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&b.push(n[r][0]),n[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);u&&u(t);while(b.length)b.shift()();return s.push.apply(s,i||[]),c()}function c(){for(var e,t=0;t<s.length;t++){for(var c=s[t],a=!0,o=1;o<c.length;o++){var l=c[o];0!==n[l]&&(a=!1)}a&&(s.splice(t--,1),e=r(r.s=c[0]))}return e}var a={},n={app:0},s=[];function r(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=a,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var u=l;s.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0b02":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23");function n(e,t,c,n,s,r){var o=Object(a["x"])("router-view");return Object(a["q"])(),Object(a["d"])(o)}var s=c("260b"),r=(c("e71f"),c("ca8a"),{apiKey:"AIzaSyD5F2KooUgE4PLsA9TJjjyphyni-jS6zWM",authDomain:"redcoalv3.firebaseapp.com",projectId:"redcoalv3",storageBucket:"redcoalv3.appspot.com",messagingSenderId:"118869332116",appId:"1:118869332116:web:55ad9890c08fa4f613a481",measurementId:"G-600KT7LRM5"}),o=s["a"].initializeApp(r),l=o.firestore(),i=l.collection("test"),u=function(e){return console.log("test"),i.add(e)},d=function(){console.log("Performance")},b={mounted:function(){d()}};c("e770");b.render=n;var h=b,p=c("6c02"),O={class:"hero is-fullheight is-medium"},f={class:"hero-head"},j={class:"hero-body"},m=Object(a["h"])("div",{class:"hero-foot"},null,-1);function v(e,t,c,n,s,r){var o=Object(a["x"])("Header"),l=Object(a["x"])("Hero");return Object(a["q"])(),Object(a["d"])("section",O,[Object(a["h"])("div",f,[Object(a["h"])(o)]),Object(a["h"])("div",j,[Object(a["h"])(l)]),m])}var y={class:"container flex flex-jc-sb flex-ai-c"},g={key:0,class:"gg-close"},k={key:1,class:"gg-menu"},x=Object(a["g"])("Contact Us"),P={class:"header_logo is-size-5 is-size-4-desktop"},C=Object(a["g"])("redcoal"),w={class:"header_cart"},I=Object(a["h"])("i",{class:"gg-shopping-cart"},null,-1);function S(e,t,c,n,s,r){var o=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",null,[Object(a["h"])("div",y,[Object(a["h"])("div",null,[Object(a["h"])("div",{onClick:t[1]||(t[1]=function(){return r.displayMenu&&r.displayMenu.apply(r,arguments)}),class:["header-hamburger",{open:s.open}]},[s.open?(Object(a["q"])(),Object(a["d"])("i",g)):Object(a["e"])("",!0),s.open?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("i",k))],2),Object(a["h"])("div",{class:["mobile-menu",{open:s.open}]},[Object(a["h"])("span",null,[Object(a["h"])(o,{to:"/contact-us"},{default:Object(a["C"])((function(){return[x]})),_:1})])],2)]),Object(a["h"])("div",P,[Object(a["h"])("a",null,[Object(a["h"])(o,{to:"/"},{default:Object(a["C"])((function(){return[C]})),_:1})])]),Object(a["h"])("div",w,[Object(a["h"])(o,{to:"/cart"},{default:Object(a["C"])((function(){return[I]})),_:1}),Object(a["h"])(o,{to:"/cart"},{default:Object(a["C"])((function(){return[Object(a["h"])("p",null,Object(a["z"])(r.cartItemNum),1)]})),_:1})])])])}var $={name:"Header",data:function(){return{open:!1,addressLink:"../assets/menu.svg"}},computed:{cartItemNum:function(){return this.$store.getters.cartLength}},methods:{displayMenu:function(e){console.log("Menu"+this.open),this.open=!this.open}}};$.render=S;var M=$,Q={class:"heroOne"},T=Object(a["h"])("div",{class:"container has-text-centered"},[Object(a["h"])("p",{class:"title"}," Title "),Object(a["h"])("p",{class:"subtitle"}," Subtitle ")],-1),A={class:"button is-primary"},N=Object(a["g"])("Order Now");function z(e,t,c,n,s,r){var o=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("div",Q,[T,Object(a["h"])("div",A,[Object(a["h"])(o,{to:{name:"Product",params:{id:r.product.productID}},onClick:t[1]||(t[1]=function(e){return r.selectMeal(r.product)})},{default:Object(a["C"])((function(){return[N]})),_:1},8,["to"])])])}var L={name:"Hero",computed:{product:function(){return this.$store.state.products[0]}},methods:{selectMeal:function(e){this.$store.commit("selectMeal",e)}}};L.render=z;var q=L,B={name:"CoalSite",components:{Header:M,Hero:q},data:function(){return{}},mounted:function(){this.$store.commit("updateCartFromLocalStorage")},methods:{updateCart:function(e){this.$store.commit("addToCart",e)}}};B.render=v;var D=B,F={class:"hero is-fullheight is-medium"},H={class:"hero-head"},R={class:"hero-body"};function _(e,t,c,n,s,r){var o=Object(a["x"])("Header"),l=Object(a["x"])("ProductList"),i=Object(a["x"])("ProductItem");return Object(a["q"])(),Object(a["d"])("section",F,[Object(a["h"])("div",H,[Object(a["h"])(o),Object(a["h"])(l)]),Object(a["h"])("div",R,[Object(a["h"])(i)])])}var E={class:"productView container"},G={class:"content"},K={class:"is-size-4 is-size-3-tablet"},J={class:"bill"},U={class:"is-size-5 is-size-4-tablet"},V=Object(a["h"])("div",{class:"promo"},[Object(a["h"])("p",{class:" is-size-7 is-size-6-tablet"},"+ FREE Delivery")],-1),W={class:"controlSet"},X={class:"quantity"},Y={class:"field pepper flex"},Z=Object(a["h"])("span",null,"Pepper Spice:",-1),ee={class:"control"},te={class:""},ce=Object(a["h"])("span",null," No Spice ",-1),ae={key:0,class:"extraSet"},ne={key:0},se={key:1},re={class:"controlSet"},oe={class:"quantity"},le={class:"is-size-5 packList"},ie={type:"1"},ue=Object(a["h"])("li",null," A bottle of water. ",-1),de=Object(a["h"])("li",null," Mint. ",-1);function be(e,t,c,n,s,r){return Object(a["q"])(),Object(a["d"])("div",E,[Object(a["h"])("div",G,[Object(a["h"])("h4",K,"Charcoal Grilled "+Object(a["z"])(r.userMeal.productName),1),Object(a["h"])("div",J,[Object(a["h"])("div",null,[Object(a["h"])("h5",U,"GHS "+Object(a["z"])(r.userMeal.productPrice)+".00",1)]),V]),Object(a["h"])("div",W,[Object(a["h"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return r.decreaseQuantity&&r.decreaseQuantity.apply(r,arguments)})},"-"),Object(a["h"])("p",X,Object(a["z"])(r.userMeal.productQuantity),1),Object(a["h"])("button",{class:"button",onClick:t[2]||(t[2]=function(){return r.increaseQuantity&&r.increaseQuantity.apply(r,arguments)})},"+")]),Object(a["h"])("div",Y,[Z,Object(a["h"])("div",ee,[Object(a["h"])("label",te,[Object(a["h"])("input",{onClick:t[3]||(t[3]=function(){return e.spicey&&e.spicey.apply(e,arguments)}),value:"",type:"checkbox"}),ce])])]),Object(a["h"])("div",{onClick:t[4]||(t[4]=function(){return r.superPack&&r.superPack.apply(r,arguments)}),class:"theButtonz"},"Super Pack"),s.extras?(Object(a["q"])(),Object(a["d"])("div",ae,[!r.userMeal.addOnQuantity>0?(Object(a["q"])(),Object(a["d"])("p",ne,"Banku with Pepper: GHS 5.00")):Object(a["e"])("",!0),r.userMeal.addOnQuantity>0?(Object(a["q"])(),Object(a["d"])("p",se,"Banku with Pepper: GHS "+Object(a["z"])(r.userMeal.addOnPrice)+".00",1)):Object(a["e"])("",!0),Object(a["h"])("div",re,[Object(a["h"])("div",{class:"button btn2",onClick:t[5]||(t[5]=function(){return r.decreaseQuantity1&&r.decreaseQuantity1.apply(r,arguments)})},"-"),Object(a["h"])("p",oe,Object(a["z"])(r.userMeal.addOnQuantity),1),Object(a["h"])("div",{class:"button btn2",onClick:t[6]||(t[6]=function(){return r.increaseQuantity1&&r.increaseQuantity1.apply(r,arguments)})},"+")])])):Object(a["e"])("",!0),Object(a["h"])("div",le,[Object(a["h"])("ol",ie,[Object(a["h"])("li",null,Object(a["z"])(r.userMeal.productQuantity)+" grilled "+Object(a["z"])(r.userMeal.productID)+"s ",1),ue,de])]),Object(a["h"])("p",{class:["is-size-5 more",{pack:s.pack}]},Object(a["z"])(r.userMeal.productDescription),3),s.extras?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("span",{key:1,onClick:t[7]||(t[7]=function(){return r.viewPack&&r.viewPack.apply(r,arguments)}),class:"clicker"},"Extra Details")),s.extras?(Object(a["q"])(),Object(a["d"])("span",{key:2,onClick:t[8]||(t[8]=function(){return r.viewPack&&r.viewPack.apply(r,arguments)}),class:"clicker"},"Less Details")):Object(a["e"])("",!0)]),Object(a["h"])("div",{class:"is-primary next",onClick:t[9]||(t[9]=function(e){return r.updateCart(r.userMeal)})},Object(a["z"])(r.isActive?"Added":"Add to Basket"),1)])}var he={data:function(){return{pack:!1,noSpice:!1,extras:!1}},components:{},computed:{view:function(){return this.$store.state.productView},userMeal:function(){return this.$store.state.meal},isActive:function(){return this.$store.state.isActive}},mounted:function(){},methods:{updateCart:function(e){this.$store.commit("addToCart",e)},closeProductView:function(){this.$store.commit("closeProductTask"),console.log("product close")},decreaseQuantity:function(){this.$store.commit("decreaseQuantity"),this.$store.commit("decreasePrice")},increaseQuantity:function(){this.$store.commit("increaseQuantity"),this.$store.commit("increasePrice")},increaseQuantity1:function(){this.$store.commit("increaseQuantity1"),this.$store.commit("increasePrice1")},decreaseQuantity1:function(){this.$store.commit("decreaseQuantity1"),this.$store.commit("decreasePrice1")},viewPack:function(){console.log("View Pack"),this.pack=!this.pack},superPack:function(){this.extras=!this.extras}}};he.render=be;var pe=he,Oe={class:"container"},fe={class:""},je={class:"mealList"};function me(e,t,c,n,s,r){var o=Object(a["x"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",null,[Object(a["h"])("div",Oe,[Object(a["h"])("div",fe,[Object(a["h"])("div",je,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(r.products,(function(e){return Object(a["q"])(),Object(a["d"])("div",{class:"mealItem",key:e.id},[Object(a["h"])(o,{ref:"link",to:{name:"Product",params:{id:e.productID}},onClick:function(t){return r.selectMeal(e)}},{default:Object(a["C"])((function(){return[Object(a["g"])(Object(a["z"])(e.productName),1)]})),_:2},1032,["to","onClick"])])})),128))])])])])}var ve={name:"ProductList",data:function(){return{}},mounted:function(){},computed:{products:function(){return this.$store.state.products},meal:function(){return this.$store.state.meal}},methods:{selectMeal:function(e){this.Active=!0,this.$store.commit("selectMeal",e)}}};ve.render=me;var ye=ve,ge={components:{Header:M,ProductItem:pe,ProductList:ye}};ge.render=_;var ke=ge;function xe(e,t,c,n,s,r){return Object(a["q"])(),Object(a["d"])("p",null,"404")}var Pe={};Pe.render=xe;var Ce=Pe,we={class:"hero is-fullheight is-medium"},Ie={class:"hero-head"},Se={class:"hero-body content contact-page"},$e={class:"contact-form"},Me=Object(a["h"])("h1",null,"Talk to us",-1),Qe={class:"field"},Te=Object(a["h"])("label",{class:"label"},"Full Name",-1),Ae={class:"control"},Ne=Object(a["h"])("p",{class:"help"},"Kofi Grills",-1),ze={class:"field"},Le=Object(a["h"])("label",{class:"label"},"Email",-1),qe={class:"control"},Be=Object(a["h"])("p",{class:"help"},"kofi@redcoal.com",-1),De={class:"field"},Fe=Object(a["h"])("label",{class:"label"},"Message",-1),He={class:"control"},Re={class:"field"},_e={class:"control"},Ee=Object(a["f"])('<div class="contact-links"><div class="infor"><div class="flex"><i class="gg-pin"></i><p>KNUST</p></div><div class="flex"><i class="gg-phone"></i><p>0201234578</p></div><div class="flex"><i class="gg-mail"></i><p class="flex">redcoal@redcoal.com</p></div></div></div><div class="social flex"><span><i class="gg-instagram"></i></span><i class="gg-twitter"></i><i class="gg-facebook"></i></div>',2);function Ge(e,t,c,n,s,r){var o=Object(a["x"])("Header");return Object(a["q"])(),Object(a["d"])("section",we,[Object(a["h"])("div",Ie,[Object(a["h"])(o)]),Object(a["h"])("div",Se,[Object(a["h"])("div",$e,[Me,Object(a["h"])("div",Qe,[Te,Object(a["h"])("div",Ae,[Object(a["h"])("input",{onInput:t[1]||(t[1]=function(){return r.userFullName&&r.userFullName.apply(r,arguments)}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544)]),Ne]),Object(a["h"])("div",ze,[Le,Object(a["h"])("div",qe,[Object(a["h"])("input",{onInput:t[2]||(t[2]=function(){return r.userEmail&&r.userEmail.apply(r,arguments)}),ref:"email",class:"input",type:"email",placeholder:"kofi@redcoal.com"},null,544)]),Be]),Object(a["h"])("div",De,[Fe,Object(a["h"])("div",He,[Object(a["h"])("textarea",{onInput:t[3]||(t[3]=function(){return r.userContactMessage&&r.userContactMessage.apply(r,arguments)}),ref:"message",class:"textarea",placeholder:"Hi, I would like to"},null,544)])]),Object(a["h"])("div",Re,[Object(a["h"])("div",_e,[Object(a["h"])("button",{class:"theButton4 is-link",onClick:t[4]||(t[4]=function(){return r.firebaseTestTwo&&r.firebaseTestTwo.apply(r,arguments)})},"Submit Message")])])]),Ee])])}c("b0c0");var Ke={name:"Contact",components:{Header:M},methods:{userFullName:function(e){this.$store.commit("userFullName",e.target.value)},userEmail:function(e){this.$store.commit("userEmail",e.target.value)},userContactMessage:function(e){this.$store.commit("userContactMessage",e.target.value)},firebaseTestTwo:function(e){this.$store.commit("firebaseTestTwo"),this.$refs["name"].value="",this.$refs["email"].value="",this.$refs["message"].value="",console.log("shot fired")}}};Ke.render=Ge;var Je=Ke,Ue=Object(a["D"])("data-v-61165b13");Object(a["t"])("data-v-61165b13");var Ve={class:"cartBox hero is-fullheight is-medium"},We={key:0},Xe={class:"cart-control"},Ye=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("i",{class:"gg-arrow-left"}),Object(a["h"])("span",null,"Back to Shop")],-1),Ze=Object(a["f"])('<div class="map flex flex-fd-c" data-v-61165b13><div class="indicators flex flex-jc-sb" data-v-61165b13><div class="lng lat" data-v-61165b13></div><div class="lng" data-v-61165b13></div><div class="lng" data-v-61165b13></div></div><div class="labels flex flex-jc-sb" data-v-61165b13><span data-v-61165b13>Shopping Cart</span><span class="" data-v-61165b13>Delivery Address</span><span class="" data-v-61165b13>Secure Payment</span></div></div>',1),et={class:"card-content cartProduct"},tt={class:"box"},ct={class:"flex flex-jc-sb orderRow"},at={class:"flex flex-jc-sb"},nt={key:0,class:"addOnRow flex flex-jc-sb"},st={key:1},rt={class:"cart-control"},ot={class:"theButton2"},lt=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("i",{class:"gg-arrow-left"}),Object(a["h"])("span",null,"Back to Shop")],-1),it=Object(a["h"])("p",null,"There are no items in cart",-1),ut=Object(a["h"])("div",{class:"space"},null,-1);Object(a["r"])();var dt=Ue((function(e,t,c,n,s,r){var o=Object(a["x"])("router-link"),l=Object(a["x"])("CompletePurchase");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("div",Ve,[r.cart.length>0?(Object(a["q"])(),Object(a["d"])("div",We,[Object(a["h"])("div",Xe,[Object(a["h"])("div",{onClick:t[1]||(t[1]=function(){return r.toShop&&r.toShop.apply(r,arguments)}),class:"theButton2"},[Ye]),Object(a["h"])("div",null," Basket items: "+Object(a["z"])(r.cartItemLength),1)]),Ze,(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["w"])(r.cart,(function(e){return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])("div",et,[Object(a["h"])("div",tt,[Object(a["h"])("div",ct,[Object(a["h"])("div",at,[Object(a["h"])("div",null,[Object(a["h"])("p",null,Object(a["z"])(e.productQuantity)+" "+Object(a["z"])(e.productName)+"s",1)]),Object(a["h"])("div",null,[Object(a["h"])("p",null,"GHS "+Object(a["z"])(e.productPrice)+".00",1)]),Object(a["h"])("div",null,[Object(a["h"])("button",{onClick:function(t){return r.removeItem(e)}},"x",8,["onClick"])])]),e.addOnQuantity>1?(Object(a["q"])(),Object(a["d"])("div",nt,[Object(a["h"])("div",null,[Object(a["h"])("p",null,Object(a["z"])(e.addOnQuantity)+" Banku Pack",1)]),Object(a["h"])("p",null,"GHS "+Object(a["z"])(e.addOnPrice)+".00",1),Object(a["h"])("div",null,[Object(a["h"])("button",{onClick:function(t){return r.removeAddOn(e)}},"x",8,["onClick"])])])):Object(a["e"])("",!0)])])])])})),256))])):Object(a["e"])("",!0),0===r.cart.length?(Object(a["q"])(),Object(a["d"])("div",st,[Object(a["h"])("div",rt,[Object(a["h"])("div",ot,[Object(a["h"])(o,{to:"/"},{default:Ue((function(){return[lt]})),_:1})]),Object(a["h"])("div",null," Basket items: "+Object(a["z"])(r.cartItemLength),1)]),it,ut])):Object(a["e"])("",!0),r.cart.length>0?(Object(a["q"])(),Object(a["d"])("div",{key:2,class:"next2",onClick:t[2]||(t[2]=function(){return r.openCheckout&&r.openCheckout.apply(r,arguments)})}," Complete Address ")):Object(a["e"])("",!0)]),Object(a["h"])(l)],64)})),bt={class:"orderForm"},ht={class:"cartRoute"},pt=Object(a["h"])("div",{class:"flex"},[Object(a["h"])("i",{class:"gg-arrow-left"}),Object(a["h"])("span",null,"Back to cart")],-1),Ot=Object(a["f"])('<div class="map flex flex-fd-c"><div class="indicators flex flex-jc-sb"><div class="lng"></div><div class="lng lat"></div><div class="lng"></div></div><div class="labels flex flex-jc-sb"><span>Shopping Cart</span><span class="">Delivery Address</span><span class="">Secure Payment</span></div></div>',1),ft={class:"field one"},jt=Object(a["h"])("label",{class:"label"},"Full Name",-1),mt={class:"control"},vt=Object(a["h"])("p",{class:"help"},"Kofi Grills",-1),yt={class:"field"},gt=Object(a["h"])("label",{class:"label"},"Contact Number",-1),kt={class:"control"},xt=Object(a["h"])("p",{class:"help"},"021-123-1234",-1),Pt={class:"field locale"},Ct={class:"content"},wt={class:"flex localeResponse"},It=Object(a["h"])("h5",null,"Local Area: ",-1),St={key:0},$t={class:"control local"},Mt={class:"radio"},Qt={class:"flex inside"},Tt=Object(a["h"])("div",{class:"side"},[Object(a["h"])("span",null,"Ahodwo,"),Object(a["h"])("span",null,"Asokwa,"),Object(a["h"])("span",null,"Adiemmbra,"),Object(a["h"])("span",null,"Dakodwon,"),Object(a["h"])("span",null,"and surroundings.")],-1),At={class:"radio"},Nt={class:"flex inside"},zt=Object(a["h"])("div",{class:"side"},[Object(a["h"])("span",null,"Asokore Mampong,"),Object(a["h"])("span",null,"Ayeduase,"),Object(a["h"])("span",null,"Bomso,"),Object(a["h"])("span",null,"KNUST Campus,"),Object(a["h"])("span",null,"Kotei,"),Object(a["h"])("span",null,"New Site"),Object(a["h"])("span",null,"and surroundings.")],-1),Lt={class:"radio"},qt={class:"flex inside"},Bt=Object(a["h"])("div",{class:"side"},[Object(a["h"])("span",null,"Adum,"),Object(a["h"])("span",null,"Bantama,"),Object(a["h"])("span",null,"Bekwai,"),Object(a["h"])("span",null,"Kwadaso,"),Object(a["h"])("span",null,"and surroundings.")],-1),Dt=Object(a["h"])("p",{class:"help"},"* Delivering to entire Ashanti soon",-1),Ft={class:"field"},Ht=Object(a["h"])("label",{class:"label"},"GPS Number",-1),Rt={class:"control"},_t=Object(a["h"])("p",{class:"help"},"ABC-123",-1),Et={class:"field"},Gt=Object(a["h"])("label",{class:"label"},"Special Instructions",-1),Kt={class:"control"},Jt={class:"card-content cartProduct"},Ut={class:"box flex flex-jc-sb total content"},Vt=Object(a["h"])("div",null,[Object(a["h"])("p",null,"Number of Items:"),Object(a["h"])("p",null,"Total Price:"),Object(a["h"])("p",null,"Delivery:"),Object(a["h"])("p",null,"Total:")],-1),Wt=Object(a["h"])("p",null," Free",-1),Xt={class:"btns"};function Yt(e,t,c,n,s,r){return Object(a["q"])(),Object(a["d"])("div",{class:["checkout-box",{checkout:r.isCheckout}]},[Object(a["h"])("div",bt,[Object(a["h"])("div",ht,[Object(a["h"])("div",{class:"theButton3",onClick:t[1]||(t[1]=function(){return r.returnToCart&&r.returnToCart.apply(r,arguments)})},[pt])]),Ot,Object(a["h"])("div",ft,[jt,Object(a["h"])("div",mt,[Object(a["h"])("input",{onInput:t[2]||(t[2]=function(){return r.userFullName&&r.userFullName.apply(r,arguments)}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544)]),vt]),Object(a["h"])("div",yt,[gt,Object(a["h"])("div",kt,[Object(a["h"])("input",{onInput:t[3]||(t[3]=function(){return r.userMobile&&r.userMobile.apply(r,arguments)}),ref:"number",class:"input",type:"number",placeholder:"021-123-1234"},null,544)]),xt]),Object(a["h"])("div",Pt,[Object(a["h"])("div",Ct,[Object(a["h"])("div",wt,[It,Object(a["h"])("p",null,[Object(a["g"])(Object(a["z"])(r.userLocale)+" ",1),r.userLocale?(Object(a["q"])(),Object(a["d"])("span",St,"and surroundings")):Object(a["e"])("",!0)])]),Object(a["h"])("div",$t,[Object(a["h"])("label",Mt,[Object(a["h"])("div",Qt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[4]||(t[4]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Ahodwo",name:"location"},null,544),Tt])]),Object(a["h"])("label",At,[Object(a["h"])("div",Nt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[5]||(t[5]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"KNUST Campus",name:"location"},null,544),zt])]),Object(a["h"])("label",Lt,[Object(a["h"])("div",qt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[6]||(t[6]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Adum",name:"location"},null,544),Bt])])]),Dt])]),Object(a["h"])("div",Ft,[Ht,Object(a["h"])("div",Rt,[Object(a["h"])("input",{onInput:t[7]||(t[7]=function(){return r.userAddress&&r.userAddress.apply(r,arguments)}),ref:"gpsAddress",class:"input",type:"text",placeholder:""},null,544)]),_t]),Object(a["h"])("div",Et,[Gt,Object(a["h"])("div",Kt,[Object(a["h"])("textarea",{onInput:t[8]||(t[8]=function(){return r.plusInfor&&r.plusInfor.apply(r,arguments)}),ref:"plusInfor",class:"textarea",placeholder:"Textarea"},null,544)])]),Object(a["h"])("div",Jt,[Object(a["h"])("div",Ut,[Vt,Object(a["h"])("div",null,[Object(a["h"])("p",null,Object(a["z"])(r.cartItemLength),1),Object(a["h"])("p",null," GHS "+Object(a["z"])(r.cartTotal),1),Wt,Object(a["h"])("strong",null,[Object(a["h"])("p",null," GHS "+Object(a["z"])(r.cartTotal),1)])])])]),Object(a["h"])("div",Xt,[Object(a["h"])("div",{class:"theButton4",onClick:t[9]||(t[9]=function(){return r.firebaseTest&&r.firebaseTest.apply(r,arguments)})},"Submit Order"),Object(a["h"])("div",{class:"theButton4 payBtn",onClick:t[10]||(t[10]=function(){return r.runPaystack&&r.runPaystack.apply(r,arguments)})},"Pay Order")])])],2)}var Zt={components:{},data:function(){return{}},computed:{cartTotal:function(){return this.$store.getters.cartTotal},userLocale:function(){return this.$store.state.local},isCheckout:function(){return this.$store.state.checkout},mobile:function(){return this.$store.state.mobile},key:function(){return this.$store.state.key},email:function(){var e=this.mobile+"@redcoal.com";return e},payRef:function(){return this.$store.state.transactionRef},cartItemLength:function(){return this.$store.getters.cartLength}},methods:{returnToCart:function(){this.$store.commit("returnToCart")},userMobile:function(e){this.$store.commit("userMobile",e.target.value)},userFullName:function(e){this.$store.commit("userFullName",e.target.value)},userAddress:function(e){this.$store.commit("userAddress",e.target.value)},userLocal:function(e){this.$store.commit("userLocal",e.target.value)},plusInfor:function(e){this.$store.commit("plusInfor",e.target.value)},transactionRef:function(e){this.$store.commit("transactionRef",e),console.log(e)},firebaseTest:function(e){this.$store.commit("firebaseTest"),this.$refs["name"].value="",this.$refs["number"].value="",this.$refs["gpsAddress"].value="",this.$refs["plusInfor"].value="",this.$refs["local"].value="",console.log("shot fired")},logRef:function(){console.log(this.payRef)},runPaystack:function(){console.log("Start");var e=PaystackPop.setup({key:this.key,email:this.email,amount:100*this.cartTotal,currency:"GHS",callback:function(e){var t=e.reference;this.$store.commit("transactionRef",t),alert("Payment complete! Reference: "+t)},onClose:function(){alert("Transaction was not completed, window closed.")}});e.openIframe()}}};Zt.render=Yt;var ec=Zt,tc={components:{CompletePurchase:ec,Header:M},data:function(){return{}},computed:{cart:function(){return this.$store.state.cart},cartTotal:function(){return this.$store.getters.cartTotal},isRemoved:function(){return this.$store.state.remove},cartItemLength:function(){return this.$store.getters.cartLength}},methods:{openCheckout:function(){this.$store.commit("openCheckout")},removeItem:function(e){this.$store.commit("deleteFromCart",e)},removeAddOn:function(e){this.$store.commit("removeAddOn",e)},toShop:function(){this.$router.go(-1)}}};tc.render=dt,tc.__scopeId="data-v-61165b13";var cc=tc,ac=[{path:"/",name:"CoalSite",component:D},{path:"/meal/:id",name:"Product",component:ke,props:!0},{path:"/contact-us",name:"Contact",component:Je},{path:"/cart",name:"Cart",component:cc},{path:"/:catchAll(.*)",name:"NotFound",component:Ce}],nc=Object(p["a"])({history:Object(p["b"])("/"),routes:ac}),sc=nc,rc=(c("a434"),c("5502")),oc=[{productName:"Sausage",productID:"sausage",productPrice:10,productImage:"Image",productQuantity:2,productDescription:"Fresh sausages that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",noSpice:"",addOnQuantity:0,addOnPrice:0},{productName:"Chicken",productID:"chicken",productPrice:8,productImage:"Image",productQuantity:2,productDescription:"Fresh chicken that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",noSpice:"",addOnQuantity:0,addOnPrice:0},{productName:"Beef",productID:"beef",productPrice:8,productImage:"Image",productQuantity:2,productDescription:"Fresh beef that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",noSpice:"",addOnQuantity:0,addOnPrice:0}],lc=oc;function ic(e){console.log("local updated"),localStorage.setItem("cart",JSON.stringify(e))}var uc=Object(rc["a"])({state:{products:lc,cart:[],isActive:!1,exists:null,checkout:!1,remove:!1,meal:{},extraList:[],total:null,mobile:"",fullName:"",contactEmail:"",contactMessage:"",gpsAddress:"",local:"",transactionRef:"",plusInfor:"",key:"pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d"},getters:{cartTotal:function(e){return e.cart.reduce((function(e,t){return e+t.productPrice+t.addOnPrice}),0)},reference:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<10;c++)e+=t.charAt(Math.floor(Math.random()*t.length));return console.log(e),e},email:function(){var e="{{state.mobile}}@redcoal.com";return e},cartLength:function(e){var t=e.cart.length;return t}},mutations:{selectMeal:function(e,t){e.meal=t},addToCart:function(e,t){e.isActive=!e.isActive;var c=Math.floor(100*Math.random());t.uniqueID=c,e.cart.push(t),console.log("Loaded"+e.isActive),ic(e.cart),setTimeout((function(){e.isActive=!e.isActive}),300)},deleteFromCart:function(e,t){console.log(e.cart.indexOf(t)),e.cart.splice(e.cart.indexOf(t),1),ic(e.cart)},removeAddOn:function(e,t){var c=e.cart.indexOf(t);console.log(c),e.cart[c].addOnQuantity=0,ic(e.cart)},increaseCartQuantity:function(e,t){t.productQuantity++},closeProductTask:function(e){e.productView=!1},updateCartFromLocalStorage:function(e){var t=localStorage.getItem("cart");t&&(e.cart=JSON.parse(t))},openCheckout:function(e){e.open=!1,e.checkout=!0},increaseQuantity:function(e){e.meal.productQuantity++},increaseQuantity1:function(e){e.meal.addOnQuantity++},increasePrice:function(e){if("Sausage"===e.meal.productName){var t=e.meal.productPrice+3;e.meal.productPrice=t}else{var c=e.meal.productPrice+2;e.meal.productPrice=c}},increasePrice1:function(e){var t=e.meal.addOnPrice+5;e.meal.addOnPrice=t},decreaseQuantity:function(e){e.meal.productQuantity>2?e.meal.productQuantity--:console.log("Two or more")},decreaseQuantity1:function(e){e.meal.addOnQuantity>0?e.meal.addOnQuantity--:console.log("Enough")},decreasePrice:function(e){if("Sausage"===e.meal.productName)if(e.meal.productQuantity>2){var t=e.meal.productPrice-3;e.meal.productPrice=t}else 2===e.meal.productQuantity&&(e.meal.productPrice=10);else if("Beef"===e.meal.productName||"Chicken"===e.meal.productName)if(e.meal.productQuantity>2){var c=e.meal.productPrice-2;e.meal.productPrice=c}else 2===e.meal.productQuantity&&(e.meal.productPrice=8)},decreasePrice1:function(e){if(e.meal.addOnQuantity>0){var t=e.meal.addOnPrice-5;e.meal.addOnPrice=t}else 0===e.meal.addOnQuantity&&(e.meal.addOnPrice=0)},returnToCart:function(e){e.checkout=!1,e.open=!0},userMobile:function(e,t){e.mobile=t},userFullName:function(e,t){e.fullName=t},userEmail:function(e,t){e.contactEmail=t},userContactMessage:function(e,t){e.contactMessage=t},userAddress:function(e,t){e.gpsAddress=t},userLocal:function(e,t){e.local=t},plusInfor:function(e,t){e.plusInfor=t},transactionRef:function(e,t){e.transactionRef=t},firebaseTest:function(e){console.log("shoot"),u({userName:e.fullName,mobile:e.mobile,gpsAddress:e.gpsAddress,local:e.local,plusInfor:e.plusInfor,cart:e.cart}),console.log("clear"),console.log(e.cart),localStorage.clear(),e.cart=[],e.checkout=!1,e.open=!1},firebaseTestTwo:function(e){console.log("shoot2"),u({userName:e.fullName,email:e.contactEmail,contactMessage:e.contactMessage}),console.log("clear"),e.fullName="",e.contactEmail="",e.contactMessage=""}},actions:{},modules:{}});c("78a7"),Object(a["c"])(h).use(uc).use(sc).mount("#app")},"78a7":function(e,t,c){},e770:function(e,t,c){"use strict";c("0b02")}});
//# sourceMappingURL=app.3271fe00.js.map