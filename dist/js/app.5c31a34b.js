(function(e){function t(t){for(var a,r,l=t[0],s=t[1],i=t[2],d=0,p=[];d<l.length;d++)r=l[d],Object.prototype.hasOwnProperty.call(n,r)&&n[r]&&p.push(n[r][0]),n[r]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],a=!0,l=1;l<c.length;l++){var s=c[l];0!==n[s]&&(a=!1)}a&&(o.splice(t--,1),e=r(r.s=c[0]))}return e}var a={},n={app:0},o=[];function r(t){if(a[t])return a[t].exports;var c=a[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=e,r.c=a,r.d=function(e,t,c){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},r.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)r.d(c,a,function(t){return e[t]}.bind(null,a));return c},r.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=t,l=l.slice();for(var i=0;i<l.length;i++)t(l[i]);var u=s;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"0b02":function(e,t,c){},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var a=c("7a23");function n(e,t,c,n,o,r){var l=Object(a["v"])("router-view");return Object(a["q"])(),Object(a["d"])(l)}var o=c("260b"),r=(c("e71f"),c("ca8a"),{apiKey:"AIzaSyD5F2KooUgE4PLsA9TJjjyphyni-jS6zWM",authDomain:"redcoalv3.firebaseapp.com",projectId:"redcoalv3",storageBucket:"redcoalv3.appspot.com",messagingSenderId:"118869332116",appId:"1:118869332116:web:55ad9890c08fa4f613a481",measurementId:"G-600KT7LRM5"}),l=o["a"].initializeApp(r),s=l.firestore(),i=s.collection("test"),u=function(e){return console.log("test"),i.add(e)},d=function(){console.log("Performance"),l.performance()},p={mounted:function(){d()}};c("e770");p.render=n;var b=p,h=c("6c02"),f={class:"hero is-fullheight is-medium"},m={class:"hero-head"},O={class:"hero-body"},j=Object(a["h"])("div",{class:"hero-foot"},null,-1);function v(e,t,c,n,o,r){var l=Object(a["v"])("Header"),s=Object(a["v"])("Hero");return Object(a["q"])(),Object(a["d"])("section",f,[Object(a["h"])("div",m,[Object(a["h"])(l)]),Object(a["h"])("div",O,[Object(a["h"])(s)]),j])}var y={class:"container flex flex-jc-sb flex-ai-c"},g={key:0,class:"gg-close"},k={key:1,class:"gg-menu"},I=Object(a["g"])("Contact Us"),C={class:"header_logo is-size-5 is-size-4-desktop"},P=Object(a["g"])("redcoal"),x={class:"header_cart"},w=Object(a["h"])("i",{class:"gg-shopping-cart"},null,-1);function $(e,t,c,n,o,r){var l=Object(a["v"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",null,[Object(a["h"])("div",y,[Object(a["h"])("div",null,[Object(a["h"])("div",{onClick:t[1]||(t[1]=function(){return r.displayMenu&&r.displayMenu.apply(r,arguments)}),class:["header-hamburger",{open:o.open}]},[o.open?(Object(a["q"])(),Object(a["d"])("i",g)):Object(a["e"])("",!0),o.open?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("i",k))],2),Object(a["h"])("div",{class:["mobile-menu",{open:o.open}]},[Object(a["h"])("span",null,[Object(a["h"])(l,{to:"/contact-us"},{default:Object(a["A"])((function(){return[I]})),_:1})])],2)]),Object(a["h"])("div",C,[Object(a["h"])("a",null,[Object(a["h"])(l,{to:"/"},{default:Object(a["A"])((function(){return[P]})),_:1})])]),Object(a["h"])("div",x,[Object(a["h"])(l,{to:"/cart"},{default:Object(a["A"])((function(){return[w]})),_:1}),Object(a["h"])(l,{to:"/cart"},{default:Object(a["A"])((function(){return[Object(a["h"])("p",null,Object(a["x"])(r.cartItemNum),1)]})),_:1})])])])}var L={name:"Header",data:function(){return{open:!1,addressLink:"../assets/menu.svg"}},computed:{cartItemNum:function(){return this.$store.getters.cartLength}},methods:{displayMenu:function(e){console.log("Menu"+this.open),this.open=!this.open}}};L.render=$;var M=L,T={class:"heroOne"},A=Object(a["h"])("div",{class:"container has-text-centered"},[Object(a["h"])("p",{class:"title"}," Title "),Object(a["h"])("p",{class:"subtitle"}," Subtitle ")],-1),N={class:"button is-primary"},S=Object(a["g"])("Order Now");function Q(e,t,c,n,o,r){var l=Object(a["v"])("router-link");return Object(a["q"])(),Object(a["d"])("div",T,[A,Object(a["h"])("div",N,[Object(a["h"])(l,{to:{name:"Product",params:{id:r.product.productID}},onClick:t[1]||(t[1]=function(e){return r.selectMeal(r.product)})},{default:Object(a["A"])((function(){return[S]})),_:1},8,["to"])])])}var q={name:"Hero",computed:{product:function(){return this.$store.state.products[0]}},methods:{selectMeal:function(e){this.$store.commit("selectMeal",e)}}};q.render=Q;var F=q,D={name:"CoalSite",components:{Header:M,Hero:F},data:function(){return{}},mounted:function(){this.$store.commit("updateCartFromLocalStorage")},methods:{updateCart:function(e){this.$store.commit("addToCart",e)}}};D.render=v;var H=D,_={class:"hero is-fullheight is-medium"},B={class:"hero-head"},R={class:"hero-body"};function z(e,t,c,n,o,r){var l=Object(a["v"])("Header"),s=Object(a["v"])("ProductList"),i=Object(a["v"])("ProductItem");return Object(a["q"])(),Object(a["d"])("section",_,[Object(a["h"])("div",B,[Object(a["h"])(l),Object(a["h"])(s)]),Object(a["h"])("div",R,[Object(a["h"])(i)])])}var E={class:"productView container"},G={class:"content"},K={class:"is-size-4 is-size-3-tablet"},J={class:"bill"},V={class:"is-size-5 is-size-4-tablet"},U=Object(a["h"])("div",{class:"promo"},[Object(a["h"])("p",{class:" is-size-7 is-size-6-tablet"},"+ FREE Delivery")],-1),W={class:"controlSet"},X={class:"quantity"},Y=Object(a["h"])("div",{class:"field"},[Object(a["h"])("div",{class:"control"},[Object(a["h"])("label",{class:""},[Object(a["h"])("input",{type:"checkbox"}),Object(a["g"])(" Banku with Pepper - GHS 5.00 ")])])],-1),Z={class:"is-size-5"},ee={class:"button"},te=Object(a["h"])("span",null,"What you get",-1),ce={class:"is-small"},ae={key:0,class:"gg-arrow-up-r"},ne={key:1,class:"gg-arrow-down-r"},oe={type:"1"},re=Object(a["h"])("li",null," A bottle of water. ",-1),le=Object(a["h"])("li",null," Mint. ",-1);function se(e,t,c,n,o,r){return Object(a["q"])(),Object(a["d"])("div",E,[Object(a["h"])("div",G,[Object(a["h"])("h4",K,"Charcoal Grilled "+Object(a["x"])(r.userMeal.productName),1),Object(a["h"])("div",J,[Object(a["h"])("div",null,[Object(a["h"])("h5",V,"GHS "+Object(a["x"])(r.userMeal.productPrice)+".00",1)]),U]),Object(a["h"])("div",W,[Object(a["h"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return r.decreaseQuantity&&r.decreaseQuantity.apply(r,arguments)})},"-"),Object(a["h"])("p",X,Object(a["x"])(r.userMeal.productQuantity),1),Object(a["h"])("button",{class:"button",onClick:t[2]||(t[2]=function(){return r.increaseQuantity&&r.increaseQuantity.apply(r,arguments)})},"+")]),Y,Object(a["h"])("p",Z,Object(a["x"])(r.userMeal.productDescription),1),Object(a["h"])("div",{class:"clicker is-size-5",onClick:t[3]||(t[3]=function(){return r.viewPack&&r.viewPack.apply(r,arguments)})},[Object(a["h"])("button",ee,[te,Object(a["h"])("span",ce,[o.pack?(Object(a["q"])(),Object(a["d"])("i",ae)):Object(a["e"])("",!0),o.pack?Object(a["e"])("",!0):(Object(a["q"])(),Object(a["d"])("i",ne))])])]),Object(a["h"])("div",{class:["more is-size-5",{pack:o.pack}]},[Object(a["h"])("ol",oe,[Object(a["h"])("li",null,Object(a["x"])(r.userMeal.productQuantity)+" grilled "+Object(a["x"])(r.userMeal.productID)+"s neatly wrapped in foil and packaging paper ",1),re,le])],2)]),Object(a["h"])("button",{class:"is-primary next",onClick:t[4]||(t[4]=function(e){return r.updateCart(r.userMeal)})},"Buy Now")])}var ie={data:function(){return{pack:!1}},components:{},computed:{view:function(){return this.$store.state.productView},userMeal:function(){return this.$store.state.meal}},mounted:function(){},methods:{updateCart:function(e){this.$store.commit("addToCart",e)},closeProductView:function(){this.$store.commit("closeProductTask"),console.log("product close")},decreaseQuantity:function(){this.$store.commit("decreaseQuantity"),this.$store.commit("decreasePrice")},increaseQuantity:function(){this.$store.commit("increaseQuantity"),this.$store.commit("increasePrice")},userAddOn:function(e){this.$store.commit("userAddOn",e.target.value)},viewPack:function(){console.log("View Pack"),this.pack=!this.pack}}};ie.render=se;var ue=ie,de={class:"container"},pe={class:""},be={class:"mealList"};function he(e,t,c,n,o,r){var l=Object(a["v"])("router-link");return Object(a["q"])(),Object(a["d"])("nav",null,[Object(a["h"])("div",de,[Object(a["h"])("div",pe,[Object(a["h"])("div",be,[(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(r.products,(function(e){return Object(a["q"])(),Object(a["d"])("div",{class:"mealItem",key:e.id},[Object(a["h"])(l,{ref:"link",to:{name:"Product",params:{id:e.productID}},onClick:function(t){return r.selectMeal(e)}},{default:Object(a["A"])((function(){return[Object(a["g"])(Object(a["x"])(e.productName),1)]})),_:2},1032,["to","onClick"])])})),128))])])])])}var fe={name:"ProductList",data:function(){return{}},mounted:function(){},computed:{products:function(){return this.$store.state.products},meal:function(){return this.$store.state.meal}},methods:{selectMeal:function(e){this.Active=!0,this.$store.commit("selectMeal",e)}}};fe.render=he;var me=fe,Oe={components:{Header:M,ProductItem:ue,ProductList:me}};Oe.render=z;var je=Oe;function ve(e,t,c,n,o,r){return Object(a["q"])(),Object(a["d"])("p",null,"404")}var ye={};ye.render=ve;var ge=ye,ke={class:"hero is-fullheight is-medium"},Ie={class:"hero-head"},Ce={class:"hero-body content"},Pe={class:"contact-form"},xe=Object(a["h"])("h1",null,"Talk to us",-1),we={class:"field"},$e=Object(a["h"])("label",{class:"label"},"Full Name",-1),Le={class:"control"},Me=Object(a["h"])("p",{class:"help"},"Kofi Grills",-1),Te={class:"field"},Ae=Object(a["h"])("label",{class:"label"},"Email",-1),Ne={class:"control"},Se=Object(a["h"])("p",{class:"help"},"kofi@redcoal.com",-1),Qe={class:"field"},qe=Object(a["h"])("label",{class:"label"},"Message",-1),Fe={class:"control"},De={class:"field checkout-button"},He={class:"control"};function _e(e,t,c,n,o,r){var l=Object(a["v"])("Header");return Object(a["q"])(),Object(a["d"])("section",ke,[Object(a["h"])("div",Ie,[Object(a["h"])(l)]),Object(a["h"])("div",Ce,[Object(a["h"])("div",Pe,[xe,Object(a["h"])("div",we,[$e,Object(a["h"])("div",Le,[Object(a["h"])("input",{onInput:t[1]||(t[1]=function(){return r.userFullName&&r.userFullName.apply(r,arguments)}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544)]),Me]),Object(a["h"])("div",Te,[Ae,Object(a["h"])("div",Ne,[Object(a["h"])("input",{onInput:t[2]||(t[2]=function(){return r.userEmail&&r.userEmail.apply(r,arguments)}),ref:"email",class:"input",type:"email",placeholder:"kofi@redcoal.com"},null,544)]),Se]),Object(a["h"])("div",Qe,[qe,Object(a["h"])("div",Fe,[Object(a["h"])("textarea",{onInput:t[3]||(t[3]=function(){return r.userContactMessage&&r.userContactMessage.apply(r,arguments)}),ref:"message",class:"textarea",placeholder:"Hi, I would like to"},null,544)])]),Object(a["h"])("div",De,[Object(a["h"])("div",He,[Object(a["h"])("button",{class:"button is-link",onClick:t[4]||(t[4]=function(){return r.firebaseTestTwo&&r.firebaseTestTwo.apply(r,arguments)})},"Submit Message")])])])])])}c("b0c0");var Be={name:"Contact",components:{Header:M},methods:{userFullName:function(e){this.$store.commit("userFullName",e.target.value)},userEmail:function(e){this.$store.commit("userEmail",e.target.value)},userContactMessage:function(e){this.$store.commit("userContactMessage",e.target.value)},firebaseTestTwo:function(e){this.$store.commit("firebaseTestTwo"),this.$refs["name"].value="",this.$refs["email"].value="",this.$refs["message"].value="",console.log("shot fired")}}};Be.render=_e;var Re=Be,ze={class:""},Ee={key:0},Ge={class:"cart-control"},Ke={class:"button is-outlined is-primary"},Je=Object(a["g"])("Continue shopping"),Ve=Object(a["f"])('<div class="map flex flex-fd-c"><div class="indicators flex flex-jc-sb"><div class="lng lat"></div><div class="lng"></div><div class="lng"></div></div><div class="labels flex flex-jc-sb"><span>Cart</span><span class="">Delivery</span><span class="">Payment</span></div></div>',1),Ue={class:"card-content cartProduct"},We={class:"box"},Xe={class:"flex flex-jc-sb"},Ye=Object(a["h"])("p",null,"Image",-1),Ze={key:1},et={class:"cart-control"},tt={class:"button is-outlined is-primary"},ct=Object(a["g"])("Continue Shopping"),at=Object(a["h"])("p",null,"There are no items in cart",-1),nt={key:2,class:"box"};function ot(e,t,c,n,o,r){var l=Object(a["v"])("router-link"),s=Object(a["v"])("CompletePurchase");return Object(a["q"])(),Object(a["d"])(a["a"],null,[Object(a["h"])("div",ze,[r.cart.length>0?(Object(a["q"])(),Object(a["d"])("div",Ee,[Object(a["h"])("div",Ge,[Object(a["h"])("button",Ke,[Object(a["h"])(l,{to:"/"},{default:Object(a["A"])((function(){return[Je]})),_:1})]),Object(a["h"])("div",null," Basket items: "+Object(a["x"])(r.cartItemLength),1)]),Ve,(Object(a["q"])(!0),Object(a["d"])(a["a"],null,Object(a["u"])(r.cart,(function(e){return Object(a["q"])(),Object(a["d"])("div",null,[Object(a["h"])("div",Ue,[Object(a["h"])("div",We,[Object(a["h"])("div",Xe,[Ye,Object(a["h"])("p",null,Object(a["x"])(e.productName),1),Object(a["h"])("div",null,[Object(a["h"])("p",null,"GHS "+Object(a["x"])(e.productPrice),1),Object(a["h"])("p",null,"Quantity: "+Object(a["x"])(e.productQuantity),1)]),Object(a["h"])("div",null,[Object(a["h"])("button",{onClick:function(t){return r.removeItem(e)}},"Delete",8,["onClick"])])])])])])})),256))])):Object(a["e"])("",!0),0===r.cart.length?(Object(a["q"])(),Object(a["d"])("div",Ze,[Object(a["h"])("div",et,[Object(a["h"])("button",tt,[Object(a["h"])(l,{to:"/"},{default:Object(a["A"])((function(){return[ct]})),_:1})]),Object(a["h"])("div",null," Basket items: "+Object(a["x"])(r.cartItemLength),1)]),at])):Object(a["e"])("",!0),r.cart.length>0?(Object(a["q"])(),Object(a["d"])("div",nt,[Object(a["h"])("button",{class:"button is-primary",onClick:t[1]||(t[1]=function(){return r.openCheckout&&r.openCheckout.apply(r,arguments)})},"Complete Address")])):Object(a["e"])("",!0)]),Object(a["h"])(s)],64)}var rt={class:"orderForm"},lt={class:"cartRoute"},st=Object(a["f"])('<div class="map flex flex-fd-c"><div class="indicators flex flex-jc-sb"><div class="lng"></div><div class="lng lat"></div><div class="lng"></div></div><div class="labels flex flex-jc-sb"><span>Cart</span><span class="">Delivery</span><span class="">Payment</span></div></div>',1),it={class:"field one"},ut=Object(a["h"])("label",{class:"label"},"Full Name",-1),dt={class:"control"},pt=Object(a["h"])("p",{class:"help"},"Kofi Grills",-1),bt={class:"field"},ht=Object(a["h"])("label",{class:"label"},"Contact Number",-1),ft={class:"control"},mt=Object(a["h"])("p",{class:"help"},"021-123-1234",-1),Ot={class:"field locale"},jt={class:"content"},vt={class:"control local"},yt={class:"radio"},gt=Object(a["g"])(" Ahodwo "),kt={class:"radio"},It=Object(a["g"])(" Asokore Mampong "),Ct={class:"radio"},Pt=Object(a["g"])(" Asokwa "),xt={class:"radio"},wt=Object(a["g"])(" Ayeduase "),$t={class:"radio"},Lt=Object(a["g"])(" Bantama "),Mt={class:"radio"},Tt=Object(a["g"])(" Bomso "),At={class:"radio"},Nt=Object(a["g"])(" Brunei "),St={class:"radio"},Qt=Object(a["g"])(" Campus "),qt={class:"radio"},Ft=Object(a["g"])(" Commercial "),Dt={class:"radio"},Ht=Object(a["g"])(" Hall 7 "),_t={class:"radio"},Bt=Object(a["g"])(" Kotei "),Rt={class:"radio"},zt=Object(a["g"])(" New Site "),Et={class:"radio"},Gt=Object(a["g"])(" Suntreso "),Kt={class:"radio"},Jt=Object(a["g"])(" Tech Junction "),Vt=Object(a["h"])("p",{class:"help"},"* Delivering to entire Ashanti soon",-1),Ut={class:"field"},Wt=Object(a["h"])("label",{class:"label"},"GPS Number",-1),Xt={class:"control"},Yt=Object(a["h"])("p",{class:"help"},"ABC-123",-1),Zt={class:"field"},ec=Object(a["h"])("label",{class:"label"},"Special Instructions",-1),tc={class:"control"},cc={class:"card-content cartProduct"},ac={class:"box flex flex-jc-sb total content"},nc=Object(a["h"])("div",null,[Object(a["h"])("p",null,"Total Price:"),Object(a["h"])("p",null,"Delivery:"),Object(a["h"])("p",null,"Total:")],-1),oc=Object(a["h"])("p",null," Free",-1),rc={class:"field checkout-button is-grouped"},lc={class:"control"};function sc(e,t,c,n,o,r){return Object(a["q"])(),Object(a["d"])("div",{class:["checkout-box",{checkout:r.isCheckout}]},[Object(a["h"])("div",rt,[Object(a["h"])("div",lt,[Object(a["h"])("button",{class:"button is-outlined is-info",onClick:t[1]||(t[1]=function(){return r.returnToCart&&r.returnToCart.apply(r,arguments)})},"Back to cart")]),st,Object(a["h"])("div",it,[ut,Object(a["h"])("div",dt,[Object(a["h"])("input",{onInput:t[2]||(t[2]=function(){return r.userFullName&&r.userFullName.apply(r,arguments)}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544)]),pt]),Object(a["h"])("div",bt,[ht,Object(a["h"])("div",ft,[Object(a["h"])("input",{onInput:t[3]||(t[3]=function(){return r.userMobile&&r.userMobile.apply(r,arguments)}),ref:"number",class:"input",type:"number",placeholder:"021-123-1234"},null,544)]),mt]),Object(a["h"])("div",Ot,[Object(a["h"])("div",jt,[Object(a["h"])("h5",null,"Local Area: "+Object(a["x"])(r.userLocale),1),Object(a["h"])("div",vt,[Object(a["h"])("label",yt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[4]||(t[4]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Ahodwo",name:"rsvp"},null,544),gt]),Object(a["h"])("label",kt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[5]||(t[5]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Asokore Mampong",name:"rsvp"},null,544),It]),Object(a["h"])("label",Ct,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[6]||(t[6]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Asokwa",name:"rsvp"},null,544),Pt]),Object(a["h"])("label",xt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[7]||(t[7]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Ayeduase",name:"rsvp"},null,544),wt]),Object(a["h"])("label",$t,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[8]||(t[8]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Bantama",name:"rsvp"},null,544),Lt]),Object(a["h"])("label",Mt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[9]||(t[9]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Bomso",name:"rsvp"},null,544),Tt]),Object(a["h"])("label",At,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[10]||(t[10]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Brunei",name:"rsvp"},null,544),Nt]),Object(a["h"])("label",St,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[11]||(t[11]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Campus",name:"rsvp"},null,544),Qt]),Object(a["h"])("label",qt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[12]||(t[12]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Commercial",name:"rsvp"},null,544),Ft]),Object(a["h"])("label",Dt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[13]||(t[13]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Hall 7",name:"rsvp"},null,544),Ht]),Object(a["h"])("label",_t,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[14]||(t[14]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Kotei",name:"rsvp"},null,544),Bt]),Object(a["h"])("label",Rt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[15]||(t[15]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"New Site",name:"rsvp"},null,544),zt]),Object(a["h"])("label",Et,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[16]||(t[16]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Suntreso",name:"rsvp"},null,544),Gt]),Object(a["h"])("label",Kt,[Object(a["h"])("input",{type:"radio",ref:"local",onInput:t[17]||(t[17]=function(){return r.userLocal&&r.userLocal.apply(r,arguments)}),value:"Tech Junction",name:"rsvp"},null,544),Jt])]),Vt])]),Object(a["h"])("div",Ut,[Wt,Object(a["h"])("div",Xt,[Object(a["h"])("input",{onInput:t[18]||(t[18]=function(){return r.userAddress&&r.userAddress.apply(r,arguments)}),ref:"gpsAddress",class:"input",type:"text",placeholder:""},null,544)]),Yt]),Object(a["h"])("div",Zt,[ec,Object(a["h"])("div",tc,[Object(a["h"])("textarea",{onInput:t[19]||(t[19]=function(){return r.plusInfor&&r.plusInfor.apply(r,arguments)}),ref:"plusInfor",class:"textarea",placeholder:"Textarea"},null,544)])]),Object(a["h"])("div",cc,[Object(a["h"])("div",ac,[nc,Object(a["h"])("div",null,[Object(a["h"])("p",null," GHS "+Object(a["x"])(r.cartTotal),1),oc,Object(a["h"])("strong",null,[Object(a["h"])("p",null," GHS "+Object(a["x"])(r.cartTotal),1)])])])]),Object(a["h"])("div",rc,[Object(a["h"])("div",lc,[Object(a["h"])("button",{class:"button is-link",onClick:t[20]||(t[20]=function(){return r.firebaseTest&&r.firebaseTest.apply(r,arguments)})},"Submit Order"),Object(a["h"])("button",{class:"button is-link",onClick:t[21]||(t[21]=function(){return r.runPaystack&&r.runPaystack.apply(r,arguments)})},"Pay Order")])])])],2)}var ic={components:{},data:function(){return{}},computed:{cartTotal:function(){return this.$store.getters.cartTotal},userLocale:function(){return this.$store.state.local},isCheckout:function(){return this.$store.state.checkout},mobile:function(){return this.$store.state.mobile},key:function(){return this.$store.state.key},email:function(){var e=this.mobile+"@redcoal.com";return e},payRef:function(){return this.$store.state.transactionRef}},methods:{returnToCart:function(){this.$store.commit("returnToCart")},userMobile:function(e){this.$store.commit("userMobile",e.target.value)},userFullName:function(e){this.$store.commit("userFullName",e.target.value)},userAddress:function(e){this.$store.commit("userAddress",e.target.value)},userLocal:function(e){this.$store.commit("userLocal",e.target.value)},plusInfor:function(e){this.$store.commit("plusInfor",e.target.value)},transactionRef:function(e){this.$store.commit("transactionRef",e),console.log(e)},firebaseTest:function(e){this.$store.commit("firebaseTest"),this.$refs["name"].value="",this.$refs["number"].value="",this.$refs["gpsAddress"].value="",this.$refs["plusInfor"].value="",this.$refs["local"].value="",console.log("shot fired")},logRef:function(){console.log(this.payRef)},runPaystack:function(){console.log("Start");var e=PaystackPop.setup({key:this.key,email:this.email,amount:100*this.cartTotal,currency:"GHS",callback:function(e){var t=e.reference;this.$store.commit("transactionRef",t),alert("Payment complete! Reference: "+t)},onClose:function(){alert("Transaction was not completed, window closed.")}});e.openIframe()}}};ic.render=sc;var uc=ic,dc={components:{CompletePurchase:uc,Header:M},data:function(){return{}},computed:{cart:function(){return this.$store.state.cart},cartTotal:function(){return this.$store.getters.cartTotal},isRemoved:function(){return this.$store.state.remove},cartItemLength:function(){return this.$store.getters.cartLength}},methods:{openCheckout:function(){this.$store.commit("openCheckout")},decreaseQuantity:function(){this.$store.commit("decreaseQuantity"),this.$store.commit("decreasePrice")},removeItem:function(e){this.$store.commit("deleteFromCart",e)}}};dc.render=ot;var pc=dc,bc=[{path:"/",name:"CoalSite",component:H},{path:"/meal/:id",name:"Product",component:je,props:!0},{path:"/contact-us",name:"Contact",component:Re},{path:"/cart",name:"Cart",component:pc},{path:"/:catchAll(.*)",name:"NotFound",component:ge}],hc=Object(h["a"])({history:Object(h["b"])("/"),routes:bc}),fc=hc,mc=(c("a434"),c("5502")),Oc=[{productName:"Sausage",productID:"sausage",productPrice:10,productImage:"Image",productQuantity:2,productDescription:"Fresh sausages that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""},{productName:"Chicken",productID:"chicken",productPrice:8,productImage:"Image",productQuantity:2,productDescription:"Fresh chicken that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""},{productName:"Beef",productID:"beef",productPrice:8,productImage:"Image",productQuantity:2,productDescription:"Fresh beef that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""}],jc=Oc;function vc(e){console.log("local updated"),localStorage.setItem("cart",JSON.stringify(e))}var yc=Object(mc["a"])({state:{products:jc,cart:[],exists:null,checkout:!1,remove:!1,meal:{},total:null,mobile:"",fullName:"",contactEmail:"",contactMessage:"",gpsAddress:"",local:"",transactionRef:"",plusInfor:"",key:"pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d"},getters:{cartTotal:function(e){return e.cart.reduce((function(e,t){return e+t.productPrice}),0)},reference:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<10;c++)e+=t.charAt(Math.floor(Math.random()*t.length));return console.log(e),e},email:function(){var e="{{state.mobile}}@redcoal.com";return e},cartLength:function(e){var t=e.cart.length;return t}},mutations:{selectMeal:function(e,t){e.meal=t},addToCart:function(e,t){var c=Math.floor(100*Math.random());t.uniqueID=c,e.cart.push(t),console.log("Loaded"+t),vc(e.cart)},deleteFromCart:function(e,t){console.log(e.cart.indexOf(t)),e.cart.splice(e.cart.indexOf(t),1),vc(e.cart)},increaseCartQuantity:function(e,t){t.productQuantity++},closeProductTask:function(e){e.productView=!1},updateCartFromLocalStorage:function(e){var t=localStorage.getItem("cart");t&&(e.cart=JSON.parse(t))},openCheckout:function(e){e.open=!1,e.checkout=!0},increaseQuantity:function(e){e.meal.productQuantity++},increasePrice:function(e){if("Sausage"===e.meal.productName){var t=e.meal.productPrice+3;e.meal.productPrice=t}else{var c=e.meal.productPrice+2;e.meal.productPrice=c}},decreaseQuantity:function(e){e.meal.productQuantity>2?e.meal.productQuantity--:console.log("Two or more")},decreasePrice:function(e){if("Sausage"===e.meal.productName)if(e.meal.productQuantity>2){var t=e.meal.productPrice-3;e.meal.productPrice=t}else 2===e.meal.productQuantity&&(e.meal.productPrice=10);else if("Beef"===e.meal.productName||"Chicken"===e.meal.productName)if(e.meal.productQuantity>2){var c=e.meal.productPrice-2;e.meal.productPrice=c}else 2===e.meal.productQuantity&&(e.meal.productPrice=8)},returnToCart:function(e){e.checkout=!1,e.open=!0},userMobile:function(e,t){e.mobile=t},userFullName:function(e,t){e.fullName=t},userEmail:function(e,t){e.contactEmail=t},userContactMessage:function(e,t){e.contactMessage=t},userAddress:function(e,t){e.gpsAddress=t},userLocal:function(e,t){e.local=t},plusInfor:function(e,t){e.plusInfor=t},transactionRef:function(e,t){e.transactionRef=t},firebaseTest:function(e){console.log("shoot"),u({userName:e.fullName,mobile:e.mobile,gpsAddress:e.gpsAddress,local:e.local,plusInfor:e.plusInfor,cart:e.cart}),console.log("clear"),localStorage.clear(),e.cart=[],e.checkout=!1,e.open=!1},firebaseTestTwo:function(e){console.log("shoot2"),u({userName:e.fullName,email:e.contactEmail,contactMessage:e.contactMessage}),console.log("clear"),e.fullName="",e.contactEmail="",e.contactMessage=""}},actions:{},modules:{}});c("78a7"),Object(a["c"])(b).use(yc).use(fc).mount("#app")},"78a7":function(e,t,c){},e770:function(e,t,c){"use strict";c("0b02")}});
//# sourceMappingURL=app.5c31a34b.js.map