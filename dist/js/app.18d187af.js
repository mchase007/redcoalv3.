(function(e){function t(t){for(var n,a,s=t[0],l=t[1],i=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(r,a)&&r[a]&&p.push(r[a][0]),r[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);u&&u(t);while(p.length)p.shift()();return o.push.apply(o,i||[]),c()}function c(){for(var e,t=0;t<o.length;t++){for(var c=o[t],n=!0,s=1;s<c.length;s++){var l=c[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=c[0]))}return e}var n={},r={app:0},o=[];function a(t){if(n[t])return n[t].exports;var c=n[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=n,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(c,n,function(t){return e[t]}.bind(null,n));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var i=0;i<s.length;i++)t(s[i]);var u=l;o.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var n=c("7a23");function r(e,t){var c=Object(n["u"])("router-view");return Object(n["p"])(),Object(n["d"])(c)}c("5cb8");const o={};o.render=r;var a=o,s=c("6c02"),l={class:"hero is-fullheight is-medium"},i={class:"hero-head"},u={class:"hero-body"},d=Object(n["g"])("div",{class:"hero-foot"},null,-1);function p(e,t,c,r,o,a){var s=Object(n["u"])("Header"),p=Object(n["u"])("Cart"),b=Object(n["u"])("Hero");return Object(n["p"])(),Object(n["d"])("section",l,[Object(n["g"])("div",i,[Object(n["g"])(s),Object(n["g"])(p)]),Object(n["g"])("div",u,[Object(n["g"])(b)]),d])}var b={class:"container flex flex-jc-sb flex-ai-c"},f={key:0,class:"gg-close"},m={key:1,class:"gg-menu"},g=Object(n["f"])("Contact Us"),O={class:"header_logo is-size-5 is-size-4-desktop"},j=Object(n["f"])("redcoal"),h=Object(n["g"])("i",{class:"gg-shopping-cart"},null,-1);function v(e,t,c,r,o,a){var s=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["g"])("div",b,[Object(n["g"])("div",null,[Object(n["g"])("div",{onClick:t[1]||(t[1]=function(){return a.displayMenu&&a.displayMenu.apply(a,arguments)}),class:["header-hamburger",{open:o.open}]},[o.open?(Object(n["p"])(),Object(n["d"])("i",f)):Object(n["e"])("",!0),o.open?Object(n["e"])("",!0):(Object(n["p"])(),Object(n["d"])("i",m))],2),Object(n["g"])("div",{class:["mobile-menu",{open:o.open}]},[Object(n["g"])("span",null,[Object(n["g"])(s,{to:"/contact-us"},{default:Object(n["z"])((function(){return[g]})),_:1})])],2)]),Object(n["g"])("div",O,[Object(n["g"])("a",null,[Object(n["g"])(s,{to:"/"},{default:Object(n["z"])((function(){return[j]})),_:1})])]),Object(n["g"])("div",{class:"header_cart",onClick:t[2]||(t[2]=function(){return a.openCart&&a.openCart.apply(a,arguments)})},[h,Object(n["g"])("p",null,Object(n["w"])(a.cartItemNum),1)])])])}var y={name:"Header",data:function(){return{open:!1,addressLink:"../assets/menu.svg"}},computed:{cartItemNum:function(){return this.$store.getters.cartLength}},methods:{displayMenu:function(e){console.log("Menu"+this.open),this.open=!this.open},openCart:function(){this.$store.commit("openCartTask")}}};y.render=v;var k=y,C={class:"heroOne"},w=Object(n["g"])("div",{class:"container has-text-centered"},[Object(n["g"])("p",{class:"title"}," Title "),Object(n["g"])("p",{class:"subtitle"}," Subtitle ")],-1),P={class:"button is-primary"},I=Object(n["f"])("Order Now");function $(e,t,c,r,o,a){var s=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("div",C,[w,Object(n["g"])("div",P,[Object(n["g"])(s,{to:{name:"Product",params:{id:a.product.productID}},onClick:t[1]||(t[1]=function(e){return a.selectMeal(a.product)})},{default:Object(n["z"])((function(){return[I]})),_:1},8,["to"])])])}var T={name:"Hero",computed:{product:function(){return this.$store.state.products[0]}},methods:{selectMeal:function(e){this.$store.commit("selectMeal",e)}}};T.render=$;var M=T,N={key:0},x={class:"cart-control"},S=Object(n["g"])("div",{class:"map flex flex-jc-sb"},[Object(n["g"])("span",{class:"lng lat"},"Cart"),Object(n["g"])("span",{class:"lng"},"Delivery"),Object(n["g"])("span",{class:"lng"},"Payment")],-1),Q={class:"card-content cartProduct"},D={class:"box"},F={class:"flex flex-jc-sb"},A=Object(n["g"])("p",null,"Image",-1),z={key:1},H={class:"cart-control"},L=Object(n["g"])("p",null,"There are no items in cart",-1),R={key:2,class:"box"};function G(e,t,c,r,o,a){var s=Object(n["u"])("CompletePurchase");return Object(n["p"])(),Object(n["d"])(n["a"],null,[Object(n["g"])("div",{class:["drawer",{open:a.isOpen}]},[a.cart.length>0?(Object(n["p"])(),Object(n["d"])("div",N,[Object(n["g"])("div",x,[Object(n["g"])("button",{class:"drawer-close button is-outlined is-primary",onClick:t[1]||(t[1]=function(){return a.closeCart&&a.closeCart.apply(a,arguments)})},"Back to shopping"),Object(n["g"])("div",null," Basket items: "+Object(n["w"])(a.cartItemLength),1)]),S,(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(a.cart,(function(t){return Object(n["p"])(),Object(n["d"])("div",null,[Object(n["g"])("div",Q,[Object(n["g"])("div",D,[Object(n["g"])("div",F,[A,Object(n["g"])("p",null,Object(n["w"])(t.productName),1),Object(n["g"])("div",null,[Object(n["g"])("p",null,"GHS "+Object(n["w"])(t.productPrice),1),Object(n["g"])("p",null,"Quantity: "+Object(n["w"])(t.productQuantity),1)]),Object(n["g"])("div",null,[Object(n["g"])("button",{onClick:function(c){return e.$store.commit("deleteFromCart",t)}},"Delete",8,["onClick"])])])])])])})),256))])):Object(n["e"])("",!0),0===a.cart.length?(Object(n["p"])(),Object(n["d"])("div",z,[Object(n["g"])("div",H,[Object(n["g"])("button",{class:"drawer-close button is-outlined is-primary",onClick:t[2]||(t[2]=function(){return a.closeCart&&a.closeCart.apply(a,arguments)})},"Back to shopping"),Object(n["g"])("div",null," Basket items: "+Object(n["w"])(a.cartItemLength),1)]),L])):Object(n["e"])("",!0),a.cart.length>0?(Object(n["p"])(),Object(n["d"])("div",R,[Object(n["g"])("button",{class:"button is-primary",onClick:t[3]||(t[3]=function(){return a.openCheckout&&a.openCheckout.apply(a,arguments)})},"Complete Purchase")])):Object(n["e"])("",!0)],2),Object(n["g"])(s)],64)}var E={class:"orderForm"},_={class:"cartRoute"},B=Object(n["g"])("div",{class:"map flex flex-jc-sb"},[Object(n["g"])("span",{class:"lng"},"Cart"),Object(n["g"])("span",{class:"lng lat"},"Delivery"),Object(n["g"])("span",{class:"lng"},"Payment")],-1),q={class:"field one"},K=Object(n["g"])("label",{class:"label"},"Full Name",-1),J={class:"control"},V=Object(n["g"])("p",{class:"help"},"Kofi Grills",-1),U={class:"field"},W=Object(n["g"])("label",{class:"label"},"Contact Number",-1),X={class:"control"},Y=Object(n["g"])("p",{class:"help"},"021-123-1234",-1),Z={class:"field"},ee=Object(n["g"])("label",{class:"label"},"GPS Number",-1),te={class:"control"},ce=Object(n["g"])("p",{class:"help"},"ABC-123",-1),ne={class:"field"},re=Object(n["g"])("label",{class:"label"},"Special Instructions",-1),oe={class:"control"},ae={class:"card-content cartProduct"},se={class:"box flex flex-jc-sb total content"},le=Object(n["g"])("div",null,[Object(n["g"])("p",null,"Total Price:"),Object(n["g"])("p",null,"Delivery:"),Object(n["g"])("p",null,"Total:")],-1),ie=Object(n["g"])("p",null," Free",-1),ue={class:"field checkout-button is-grouped"},de={class:"control"};function pe(e,t,c,r,o,a){return Object(n["p"])(),Object(n["d"])("div",{class:["checkout-box",{checkout:a.isCheckout}]},[Object(n["g"])("div",E,[Object(n["g"])("div",_,[Object(n["g"])("button",{class:"button is-outlined is-info",onClick:t[1]||(t[1]=function(){return a.returnToCart&&a.returnToCart.apply(a,arguments)})},"Back to cart")]),B,Object(n["g"])("div",q,[K,Object(n["g"])("div",J,[Object(n["g"])("input",{onInput:t[2]||(t[2]=function(){return a.userFullName&&a.userFullName.apply(a,arguments)}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544)]),V]),Object(n["g"])("div",U,[W,Object(n["g"])("div",X,[Object(n["g"])("input",{onInput:t[3]||(t[3]=function(){return a.userMobile&&a.userMobile.apply(a,arguments)}),ref:"number",class:"input",type:"number",placeholder:"021-123-1234"},null,544)]),Y]),Object(n["g"])("div",Z,[ee,Object(n["g"])("div",te,[Object(n["g"])("input",{onInput:t[4]||(t[4]=function(){return a.userAddress&&a.userAddress.apply(a,arguments)}),ref:"gpsAddress",class:"input",type:"text",placeholder:""},null,544)]),ce]),Object(n["g"])("div",ne,[re,Object(n["g"])("div",oe,[Object(n["g"])("textarea",{onInput:t[5]||(t[5]=function(){return a.plusInfor&&a.plusInfor.apply(a,arguments)}),ref:"plusInfor",class:"textarea",placeholder:"Textarea"},null,544)])]),Object(n["g"])("div",ae,[Object(n["g"])("div",se,[le,Object(n["g"])("div",null,[Object(n["g"])("p",null," GHS "+Object(n["w"])(a.cartTotal),1),ie,Object(n["g"])("strong",null,[Object(n["g"])("p",null," GHS "+Object(n["w"])(a.cartTotal),1)])])])]),Object(n["g"])("div",ue,[Object(n["g"])("div",de,[Object(n["g"])("button",{class:"button is-link",onClick:t[6]||(t[6]=function(){return a.firebaseTest&&a.firebaseTest.apply(a,arguments)})},"Submit Order"),Object(n["g"])("button",{class:"button is-link",onClick:t[7]||(t[7]=function(){return a.runPaystack&&a.runPaystack.apply(a,arguments)})},"Pay Order")])])])],2)}c("b0c0");var be={components:{},data:function(){return{}},computed:{cartTotal:function(){return this.$store.getters.cartTotal},isCheckout:function(){return this.$store.state.checkout},mobile:function(){return this.$store.state.mobile},key:function(){return this.$store.state.key},email:function(){var e=this.mobile+"@redcoal.com";return e},payRef:function(){return this.$store.state.transactionRef}},methods:{returnToCart:function(){this.$store.commit("returnToCart")},userMobile:function(e){this.$store.commit("userMobile",e.target.value)},userFullName:function(e){this.$store.commit("userFullName",e.target.value)},userAddress:function(e){this.$store.commit("userAddress",e.target.value)},plusInfor:function(e){this.$store.commit("plusInfor",e.target.value)},transactionRef:function(e){this.$store.commit("transactionRef",e),console.log(e)},firebaseTest:function(e){this.$store.commit("firebaseTest"),this.$refs["name"].value="",this.$refs["number"].value="",this.$refs["gpsAddress"].value="",this.$refs["plusInfor"].value="",console.log("shot fired")},logRef:function(){console.log(this.payRef)},runPaystack:function(){console.log("Start");var e=PaystackPop.setup({key:this.key,email:this.email,amount:100*this.cartTotal,currency:"GHS",callback:function(e){var t=e.reference;this.$store.commit("transactionRef",t),alert("Payment complete! Reference: "+t)},onClose:function(){alert("Transaction was not completed, window closed.")}});e.openIframe()}}};be.render=pe;var fe=be,me={components:{CompletePurchase:fe,Header:k},data:function(){return{}},computed:{isOpen:function(){return this.$store.state.open},cart:function(){return this.$store.state.cart},cartTotal:function(){return this.$store.getters.cartTotal},isRemoved:function(){return this.$store.state.remove},cartItemLength:function(){return this.$store.getters.cartLength}},methods:{closeCart:function(){this.$store.commit("closeCartTask")},openCheckout:function(){this.$store.commit("openCheckout")},decreaseQuantity:function(){this.$store.commit("decreaseQuantity"),this.$store.commit("decreasePrice")},increaseCartQuantity:function(e){}}};me.render=G;var ge=me,Oe={name:"CoalSite",components:{Header:k,Hero:M,Cart:ge},data:function(){return{}},mounted:function(){this.$store.commit("updateCartFromLocalStorage")},methods:{updateCart:function(e){this.$store.commit("addToCart",e),this.$store.commit("openCartTask")}}};Oe.render=p;var je=Oe,he={class:"hero is-fullheight is-medium"},ve={class:"hero-head"},ye={class:"hero-body"};function ke(e,t,c,r,o,a){var s=Object(n["u"])("Header"),l=Object(n["u"])("Cart"),i=Object(n["u"])("ProductList"),u=Object(n["u"])("ProductItem");return Object(n["p"])(),Object(n["d"])("section",he,[Object(n["g"])("div",ve,[Object(n["g"])(s),Object(n["g"])(l),Object(n["g"])(i)]),Object(n["g"])("div",ye,[Object(n["g"])(u)])])}var Ce={class:"productView container"},we={class:"content"},Pe={class:"is-size-4 is-size-3-tablet"},Ie={class:"bill"},$e={class:"is-size-5 is-size-4-tablet"},Te=Object(n["g"])("div",{class:"promo"},[Object(n["g"])("p",{class:" is-size-7 is-size-6-tablet"},"+ FREE Delivery")],-1),Me={class:"controlSet"},Ne={class:"quantity"},xe=Object(n["g"])("div",{class:"field"},[Object(n["g"])("div",{class:"control"},[Object(n["g"])("label",{class:""},[Object(n["g"])("input",{type:"checkbox"}),Object(n["f"])(" Banku with Pepper - GHS 5.00 ")])])],-1),Se={class:"is-size-5"},Qe=Object(n["f"])(" What you get "),De=Object(n["g"])("i",{class:"gg-arrow-right-o"},null,-1),Fe={type:"1"},Ae=Object(n["g"])("li",null," A bottle of water. ",-1),ze=Object(n["g"])("li",null," Mint. ",-1);function He(e,t,c,r,o,a){return Object(n["p"])(),Object(n["d"])("div",Ce,[Object(n["g"])("div",we,[Object(n["g"])("h4",Pe,"Charcoal Grilled "+Object(n["w"])(a.userMeal.productName),1),Object(n["g"])("div",Ie,[Object(n["g"])("div",null,[Object(n["g"])("h5",$e,"GHS "+Object(n["w"])(a.userMeal.productPrice)+".00",1)]),Te]),Object(n["g"])("div",Me,[Object(n["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return a.decreaseQuantity&&a.decreaseQuantity.apply(a,arguments)})},"-"),Object(n["g"])("p",Ne,Object(n["w"])(a.userMeal.productQuantity),1),Object(n["g"])("button",{class:"button",onClick:t[2]||(t[2]=function(){return a.increaseQuantity&&a.increaseQuantity.apply(a,arguments)})},"+")]),xe,Object(n["g"])("p",Se,Object(n["w"])(a.userMeal.productDescription),1),Object(n["g"])("div",{class:"clicker is-size-5",onClick:t[3]||(t[3]=function(){return a.viewPack&&a.viewPack.apply(a,arguments)})},[Qe,De]),Object(n["g"])("div",{class:["more is-size-5",{pack:o.pack}]},[Object(n["g"])("ol",Fe,[Object(n["g"])("li",null," Grilled "+Object(n["w"])(a.userMeal.productName)+" neatly wrapped in foil and packaging paper ",1),Ae,ze])],2)]),Object(n["g"])("button",{class:"is-primary next",onClick:t[4]||(t[4]=function(e){return a.updateCart(a.userMeal)})},"Buy Now")])}var Le={data:function(){return{pack:!1}},components:{},computed:{view:function(){return this.$store.state.productView},userMeal:function(){return this.$store.state.meal}},mounted:function(){},methods:{updateCart:function(e){this.$store.commit("addToCart",e),console.log("cart open")},closeProductView:function(){this.$store.commit("closeProductTask"),console.log("product close")},decreaseQuantity:function(){this.$store.commit("decreaseQuantity"),this.$store.commit("decreasePrice")},increaseQuantity:function(){this.$store.commit("increaseQuantity"),this.$store.commit("increasePrice")},userAddOn:function(e){this.$store.commit("userAddOn",e.target.value)},viewPack:function(){console.log("View Pack"),this.pack=!this.pack}}};Le.render=He;var Re=Le,Ge={class:"container"},Ee={class:""},_e={class:"mealList"};function Be(e,t,c,r,o,a){var s=Object(n["u"])("router-link");return Object(n["p"])(),Object(n["d"])("nav",null,[Object(n["g"])("div",Ge,[Object(n["g"])("div",Ee,[Object(n["g"])("div",_e,[(Object(n["p"])(!0),Object(n["d"])(n["a"],null,Object(n["t"])(a.products,(function(e){return Object(n["p"])(),Object(n["d"])("div",{class:"mealItem",key:e.id},[Object(n["g"])(s,{ref:"link",to:{name:"Product",params:{id:e.productID}},onClick:function(t){return a.selectMeal(e)}},{default:Object(n["z"])((function(){return[Object(n["f"])(Object(n["w"])(e.productName),1)]})),_:2},1032,["to","onClick"])])})),128))])])])])}var qe={name:"ProductList",data:function(){return{}},mounted:function(){},computed:{products:function(){return this.$store.state.products},meal:function(){return this.$store.state.meal}},methods:{selectMeal:function(e){this.Active=!0,this.$store.commit("selectMeal",e)}}};qe.render=Be;var Ke=qe,Je={components:{Header:k,Cart:ge,ProductItem:Re,ProductList:Ke}};Je.render=ke;var Ve=Je;function Ue(e,t,c,r,o,a){return Object(n["p"])(),Object(n["d"])("p",null,"404")}var We={};We.render=Ue;var Xe=We,Ye={class:"hero is-fullheight is-medium"},Ze={class:"hero-head"},et={class:"hero-body content"},tt={class:"contact-form"},ct=Object(n["g"])("h1",null,"Talk to us",-1),nt={class:"field"},rt=Object(n["g"])("label",{class:"label"},"Full Name",-1),ot={class:"control"},at=Object(n["g"])("p",{class:"help"},"Kofi Grills",-1),st={class:"field"},lt=Object(n["g"])("label",{class:"label"},"Email",-1),it={class:"control"},ut=Object(n["g"])("p",{class:"help"},"kofi@redcoal.com",-1),dt={class:"field"},pt=Object(n["g"])("label",{class:"label"},"Message",-1),bt={class:"control"},ft={class:"field checkout-button"},mt={class:"control"};function gt(e,t,c,r,o,a){var s=Object(n["u"])("Header"),l=Object(n["u"])("Cart");return Object(n["p"])(),Object(n["d"])("section",Ye,[Object(n["g"])("div",Ze,[Object(n["g"])(s),Object(n["g"])(l)]),Object(n["g"])("div",et,[Object(n["g"])("div",tt,[ct,Object(n["g"])("div",nt,[rt,Object(n["g"])("div",ot,[Object(n["g"])("input",{onInput:t[1]||(t[1]=function(){return a.userFullName&&a.userFullName.apply(a,arguments)}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544)]),at]),Object(n["g"])("div",st,[lt,Object(n["g"])("div",it,[Object(n["g"])("input",{onInput:t[2]||(t[2]=function(){return a.userEmail&&a.userEmail.apply(a,arguments)}),ref:"email",class:"input",type:"email",placeholder:"kofi@redcoal.com"},null,544)]),ut]),Object(n["g"])("div",dt,[pt,Object(n["g"])("div",bt,[Object(n["g"])("textarea",{onInput:t[3]||(t[3]=function(){return a.userContactMessage&&a.userContactMessage.apply(a,arguments)}),ref:"message",class:"textarea",placeholder:"Hi, I would like to"},null,544)])]),Object(n["g"])("div",ft,[Object(n["g"])("div",mt,[Object(n["g"])("button",{class:"button is-link",onClick:t[4]||(t[4]=function(){return a.firebaseTestTwo&&a.firebaseTestTwo.apply(a,arguments)})},"Submit Message")])])])])])}var Ot={name:"Contact",components:{Header:k,Cart:ge},methods:{userFullName:function(e){this.$store.commit("userFullName",e.target.value)},userEmail:function(e){this.$store.commit("userEmail",e.target.value)},userContactMessage:function(e){this.$store.commit("userContactMessage",e.target.value)},firebaseTestTwo:function(e){this.$store.commit("firebaseTestTwo"),this.$refs["name"].value="",this.$refs["email"].value="",this.$refs["message"].value="",console.log("shot fired")}}};Ot.render=gt;var jt=Ot,ht=[{path:"/",name:"CoalSite",component:je},{path:"/meal/:id",name:"Product",component:Ve,props:!0},{path:"/contact-us",name:"Contact",component:jt},{path:"/:catchAll(.*)",name:"NotFound",component:Xe}],vt=Object(s["a"])({history:Object(s["b"])("/"),routes:ht}),yt=vt,kt=(c("4de4"),c("5502")),Ct=[{productName:"Sausage",productID:"sausage",productPrice:10,productImage:"Image",productQuantity:2,productDescription:"Fresh sausages that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""},{productName:"Chicken",productID:"chicken",productPrice:8,productImage:"Image",productQuantity:2,productDescription:"Fresh chicken that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""},{productName:"Beef",productID:"beef",productPrice:8,productImage:"Image",productQuantity:2,productDescription:"Fresh beef that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""}],wt=Ct,Pt=c("260b"),It=(c("e71f"),{apiKey:"AIzaSyD5F2KooUgE4PLsA9TJjjyphyni-jS6zWM",authDomain:"redcoalv3.firebaseapp.com",projectId:"redcoalv3",storageBucket:"redcoalv3.appspot.com",messagingSenderId:"118869332116",appId:"1:118869332116:web:55ad9890c08fa4f613a481",measurementId:"G-600KT7LRM5"}),$t=Pt["a"].initializeApp(It),Tt=$t.firestore(),Mt=Tt.collection("test"),Nt=function(e){return console.log("test"),Mt.add(e)};function xt(e){console.log("local updated"),localStorage.setItem("cart",JSON.stringify(e))}var St=Object(kt["a"])({state:{products:wt,cart:[],open:!1,checkout:!1,remove:!1,meal:{},total:null,mobile:"",fullName:"",contactEmail:"",contactMessage:"",gpsAddress:"",transactionRef:"",plusInfor:"",key:"pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d"},getters:{cartTotal:function(e){return e.cart.reduce((function(e,t){return e+t.productPrice}),0)},reference:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<10;c++)e+=t.charAt(Math.floor(Math.random()*t.length));return console.log(e),e},email:function(){var e="{{state.mobile}}@redcoal.com";return e},cartLength:function(e){var t=e.cart.length;return t}},mutations:{selectMeal:function(e,t){e.meal=t},addToCart:function(e,t){console.log("One"+t.uniqueID);var c=Math.floor(100*Math.random());t.uniqueID=c,console.log("Two"+t.uniqueID),e.cart.push(t),console.log("Loaded"),xt(e.cart)},deleteFromCart:function(e,t){console.log(t.uniqueID),e.cart=e.cart.filter((function(e){return e.uniqueID!==t.uniqueID})),xt(e.cart)},increaseCartQuantity:function(e,t){t.productQuantity++},openCartTask:function(e){e.open=!0},closeCartTask:function(e){e.open=!1},closeProductTask:function(e){e.productView=!1},updateCartFromLocalStorage:function(e){var t=localStorage.getItem("cart");t&&(e.cart=JSON.parse(t))},openCheckout:function(e){e.open=!1,e.checkout=!0},increaseQuantity:function(e){e.meal.productQuantity++},increasePrice:function(e){if("Sausage"===e.meal.productName){var t=e.meal.productPrice+3;e.meal.productPrice=t}else{var c=e.meal.productPrice+2;e.meal.productPrice=c}},decreaseQuantity:function(e){e.meal.productQuantity>2?e.meal.productQuantity--:console.log("Two or more")},decreasePrice:function(e){if("Sausage"===e.meal.productName)if(e.meal.productQuantity>2){var t=e.meal.productPrice-3;e.meal.productPrice=t}else 2===e.meal.productQuantity&&(e.meal.productPrice=10);else if("Beef"===e.meal.productName||"Chicken"===e.meal.productName)if(e.meal.productQuantity>2){var c=e.meal.productPrice-2;e.meal.productPrice=c}else 2===e.meal.productQuantity&&(e.meal.productPrice=8)},returnToCart:function(e){e.checkout=!1,e.open=!0},userMobile:function(e,t){e.mobile=t},userFullName:function(e,t){e.fullName=t},userEmail:function(e,t){e.contactEmail=t},userContactMessage:function(e,t){e.contactMessage=t},userAddress:function(e,t){e.gpsAddress=t},plusInfor:function(e,t){e.plusInfor=t},transactionRef:function(e,t){e.transactionRef=t},firebaseTest:function(e){console.log("shoot"),Nt({userName:e.fullName,mobile:e.mobile,gpsAddress:e.gpsAddress,plusInfor:e.plusInfor,cart:e.cart}),console.log("clear"),localStorage.clear(),e.cart=[],e.checkout=!1,e.open=!1},firebaseTestTwo:function(e){console.log("shoot2"),Nt({userName:e.fullName,email:e.contactEmail,contactMessage:e.contactMessage}),console.log("clear"),e.fullName="",e.contactEmail="",e.contactMessage}},actions:{},modules:{}});c("78a7"),Object(n["c"])(a).use(St).use(yt).mount("#app")},"5cb8":function(e,t,c){"use strict";c("fbf0")},"78a7":function(e,t,c){},fbf0:function(e,t,c){}});
//# sourceMappingURL=app.18d187af.js.map