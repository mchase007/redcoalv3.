(function(e){function t(t){for(var r,a,i=t[0],s=t[1],u=t[2],d=0,p=[];d<i.length;d++)a=i[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(p.length)p.shift()();return n.push.apply(n,u||[]),c()}function c(){for(var e,t=0;t<n.length;t++){for(var c=n[t],r=!0,i=1;i<c.length;i++){var s=c[i];0!==o[s]&&(r=!1)}r&&(n.splice(t--,1),e=a(a.s=c[0]))}return e}var r={},o={app:0},n=[];function a(t){if(r[t])return r[t].exports;var c=r[t]={i:t,l:!1,exports:{}};return e[t].call(c.exports,c,c.exports,a),c.l=!0,c.exports}a.m=e,a.c=r,a.d=function(e,t,c){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:c})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(c,r,function(t){return e[t]}.bind(null,r));return c},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=s;n.push([0,"chunk-vendors"]),c()})({0:function(e,t,c){e.exports=c("56d7")},"56d7":function(e,t,c){"use strict";c.r(t);c("e260"),c("e6cf"),c("cca6"),c("a79d");var r=c("7a23");function o(e,t){var c=Object(r["u"])("router-view");return Object(r["p"])(),Object(r["d"])(c)}c("5cb8");const n={};n.render=o;var a=n,i=c("6c02"),s={class:"hero is-fullheight is-medium"},u={class:"hero-head"},l={class:"hero-body"},d=Object(r["g"])("div",{class:"hero-foot"},null,-1);function p(e,t,c,o,n,a){var i=Object(r["u"])("Header"),p=Object(r["u"])("Cart"),b=Object(r["u"])("Hero");return Object(r["p"])(),Object(r["d"])("section",s,[Object(r["g"])("div",u,[Object(r["g"])(i),Object(r["g"])(p)]),Object(r["g"])("div",l,[Object(r["g"])(b)]),d])}var b={class:"container flex flex-jc-sb flex-ai-c"},f={class:"header_logo is-size-5 is-size-4-desktop"},m=Object(r["f"])("redcoal"),O=Object(r["g"])("i",{class:"gg-shopping-cart"},null,-1);function g(e,t,c,o,n,a){var i=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])("nav",null,[Object(r["g"])("div",b,[Object(r["g"])("div",f,[Object(r["g"])("a",null,[Object(r["g"])(i,{to:"/"},{default:Object(r["z"])((function(){return[m]})),_:1})])]),Object(r["g"])("div",{class:"header_cart",onClick:t[1]||(t[1]=function(){return a.openCart&&a.openCart.apply(a,arguments)})},[O,Object(r["g"])("p",null,Object(r["w"])(a.cartItemNum),1)])])])}var h={name:"Header",data:function(){return{open:!1,addressLink:"../assets/menu.svg"}},computed:{cartItemNum:function(){return this.$store.getters.cartLength}},methods:{displayMenu:function(e){this.open=!this.open},openCart:function(){this.$store.commit("openCartTask")}}};h.render=g;var j=h,v={class:"heroOne"},y=Object(r["g"])("div",{class:"container has-text-centered"},[Object(r["g"])("p",{class:"title"}," Title "),Object(r["g"])("p",{class:"subtitle"}," Subtitle ")],-1),k={class:"button is-primary"},w=Object(r["f"])("Order Now");function C(e,t,c,o,n,a){var i=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])("div",v,[y,Object(r["g"])("div",k,[Object(r["g"])(i,{to:{name:"Product",params:{id:a.product.productID}},onClick:t[1]||(t[1]=function(e){return a.selectMeal(a.product)})},{default:Object(r["z"])((function(){return[w]})),_:1},8,["to"])])])}var P={name:"Hero",computed:{product:function(){return this.$store.state.products[0]}},methods:{selectMeal:function(e){this.$store.commit("selectMeal",e)}}};P.render=C;var $=P,I={key:0},N={class:"card-content cartProduct"},T={class:"box"},M={class:"flex flex-jc-sb"},S=Object(r["g"])("p",null,"Image",-1),Q={key:1},x=Object(r["g"])("p",null,"There are no items in cart",-1),D={class:"box"};function z(e,t,c,o,n,a){var i=Object(r["u"])("CompletePurchase");return Object(r["p"])(),Object(r["d"])(r["a"],null,[Object(r["g"])("div",{class:["drawer",{open:a.isOpen}]},[Object(r["g"])("button",{class:"drawer-close button is-outlined is-primary",onClick:t[1]||(t[1]=function(){return a.closeCart&&a.closeCart.apply(a,arguments)})},"Back to shopping"),Object(r["g"])("div",null," Basket items: "+Object(r["w"])(a.cartItemLength),1),a.cart.length>0?(Object(r["p"])(),Object(r["d"])("div",I,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(a.cart,(function(t){return Object(r["p"])(),Object(r["d"])("div",null,[Object(r["g"])("div",N,[Object(r["g"])("div",T,[Object(r["g"])("div",M,[S,Object(r["g"])("p",null,Object(r["w"])(t.productName),1),Object(r["g"])("div",null,[Object(r["g"])("p",null,"GHS "+Object(r["w"])(t.productPrice),1),Object(r["g"])("p",null,"Quantity: "+Object(r["w"])(t.productQuantity),1)]),Object(r["g"])("div",null,[Object(r["g"])("button",{onClick:function(c){return e.$store.commit("deleteFromCart",t)}},"Delete",8,["onClick"])])])])])])})),256))])):Object(r["e"])("",!0),0===a.cart.length?(Object(r["p"])(),Object(r["d"])("div",Q,[x])):Object(r["e"])("",!0),Object(r["g"])("div",D,[Object(r["g"])("p",null,"GHS "+Object(r["w"])(a.cartTotal),1),Object(r["g"])("button",{class:"button is-primary",onClick:t[2]||(t[2]=function(){return a.openCheckout&&a.openCheckout.apply(a,arguments)})},"Complete Purchase")])],2),Object(r["g"])(i)],64)}var F=Object(r["g"])("div",{class:"box"},null,-1),L={class:"field"},A=Object(r["g"])("label",{class:"label"},"Full Name",-1),H={class:"control"},R={class:"field"},_=Object(r["g"])("label",{class:"label"},"Mobile Number",-1),q={class:"control"},G=Object(r["g"])("p",{class:"help"},"This should be the number to make payment from",-1),B={class:"field"},V=Object(r["g"])("label",{class:"label"},"Address",-1),J={class:"control"},K={class:"field"},E=Object(r["g"])("label",{class:"label"},"Payment Method",-1),W={class:"control"},U={class:"select"},X=Object(r["g"])("option",null,"MTN",-1),Y=Object(r["g"])("option",null,"Vodafone",-1),Z={class:"field is-grouped"},ee={class:"control"};function te(e,t,c,o,n,a){return Object(r["p"])(),Object(r["d"])("div",{class:["checkout-box",{checkout:a.isCheckout}]},[Object(r["g"])("button",{class:"button is-outlined is-light",onClick:t[1]||(t[1]=function(){return a.returnToCart&&a.returnToCart.apply(a,arguments)})},"Back to cart"),F,Object(r["g"])("div",null,[Object(r["g"])("div",L,[A,Object(r["g"])("div",H,[Object(r["g"])("input",{onInput:t[2]||(t[2]=function(){return a.userFullName&&a.userFullName.apply(a,arguments)}),ref:"name",class:"input",type:"text",placeholder:"Kofi Grills Chills"},null,544)])]),Object(r["g"])("div",R,[_,Object(r["g"])("div",q,[Object(r["g"])("input",{onInput:t[3]||(t[3]=function(){return a.userMobile&&a.userMobile.apply(a,arguments)}),ref:"number",class:"input",type:"number",placeholder:"021-123-1234"},null,544)]),G]),Object(r["g"])("div",B,[V,Object(r["g"])("div",J,[Object(r["g"])("input",{onInput:t[4]||(t[4]=function(){return a.userAddress&&a.userAddress.apply(a,arguments)}),ref:"address",class:"input",type:"text",placeholder:""},null,544)])]),Object(r["g"])("div",K,[E,Object(r["g"])("div",W,[Object(r["g"])("div",U,[Object(r["g"])("select",{onInput:t[5]||(t[5]=function(){return a.userNetwork&&a.userNetwork.apply(a,arguments)})},[X,Y],32)])])]),Object(r["g"])("div",Z,[Object(r["g"])("div",ee,[Object(r["g"])("button",{class:"button is-link",onClick:t[6]||(t[6]=function(){return a.firebaseTest&&a.firebaseTest.apply(a,arguments)})},"Submit Order"),Object(r["g"])("button",{class:"button is-link",onClick:t[7]||(t[7]=function(){return a.runPaystack&&a.runPaystack.apply(a,arguments)})},"Pay Order")])])])],2)}c("b0c0");var ce={components:{},data:function(){return{}},computed:{cartTotal:function(){return this.$store.getters.cartTotal},isCheckout:function(){return this.$store.state.checkout},mobile:function(){return this.$store.state.mobile},key:function(){return this.$store.state.key},email:function(){var e=this.mobile+"@redcoal.com";return e},payRef:function(){return this.$store.state.transactionRef}},methods:{returnToCart:function(){this.$store.commit("returnToCart")},userMobile:function(e){this.$store.commit("userMobile",e.target.value)},userFullName:function(e){this.$store.commit("userFullName",e.target.value)},userAddress:function(e){this.$store.commit("userAddress",e.target.value)},userNetwork:function(e){this.$store.commit("userNetwork",e.target.value)},transactionRef:function(e){this.$store.commit("transactionRef",e),console.log(e)},firebaseTest:function(e){this.$store.commit("firebaseTest"),this.$refs["name"].value="",this.$refs["number"].value="",this.$refs["address"].value="",console.log("shot fired")},logRef:function(){console.log(this.payRef)},runPaystack:function(){console.log("Start");var e=PaystackPop.setup({key:this.key,email:this.email,amount:100*this.cartTotal,currency:"GHS",callback:function(e){var t=e.reference;this.$store.commit("transactionRef",t),alert("Payment complete! Reference: "+t)},onClose:function(){alert("Transaction was not completed, window closed.")}});e.openIframe()}}};ce.render=te;var re=ce,oe={components:{CompletePurchase:re,Header:j},data:function(){return{}},computed:{isOpen:function(){return this.$store.state.open},cart:function(){return this.$store.state.cart},cartTotal:function(){return this.$store.getters.cartTotal},isRemoved:function(){return this.$store.state.remove},cartItemLength:function(){return this.$store.getters.cartLength}},methods:{closeCart:function(){this.$store.commit("closeCartTask")},openCheckout:function(){this.$store.commit("openCheckout")},decreaseQuantity:function(){this.$store.commit("decreaseQuantity"),this.$store.commit("decreasePrice")},increaseCartQuantity:function(e){}}};oe.render=z;var ne=oe,ae={name:"CoalSite",components:{Header:j,Hero:$,Cart:ne},data:function(){return{}},mounted:function(){this.$store.commit("updateCartFromLocalStorage")},methods:{updateCart:function(e){this.$store.commit("addToCart",e),this.$store.commit("openCartTask")}}};ae.render=p;var ie=ae,se={class:"hero is-fullheight is-medium"},ue={class:"hero-head"},le={class:"hero-body"};function de(e,t,c,o,n,a){var i=Object(r["u"])("Header"),s=Object(r["u"])("Cart"),u=Object(r["u"])("ProductList"),l=Object(r["u"])("ProductItem");return Object(r["p"])(),Object(r["d"])("section",se,[Object(r["g"])("div",ue,[Object(r["g"])(i),Object(r["g"])(s),Object(r["g"])(u)]),Object(r["g"])("div",le,[Object(r["g"])(l)])])}var pe={class:"productView container"},be={class:"content"},fe={class:"is-size-4 is-size-3-tablet"},me={class:"bill"},Oe={class:"is-size-5 is-size-4-tablet"},ge=Object(r["g"])("p",{class:"promo is-size-7 is-size-6-tablet"},"+ FREE Delivery",-1),he={class:"controlSet"},je={class:"quantity"},ve=Object(r["g"])("div",{class:"field"},[Object(r["g"])("div",{class:"control"},[Object(r["g"])("label",{class:""},[Object(r["g"])("input",{type:"checkbox"}),Object(r["f"])(" Banku with Pepper - GHS 5.00 ")])])],-1),ye={class:"is-size-5"},ke=Object(r["f"])(" What you get "),we=Object(r["g"])("i",{class:"gg-arrow-right-o"},null,-1),Ce={type:"1"},Pe=Object(r["g"])("li",null," A bottle of water. ",-1),$e=Object(r["g"])("li",null," Mint. ",-1);function Ie(e,t,c,o,n,a){return Object(r["p"])(),Object(r["d"])("div",pe,[Object(r["g"])("div",be,[Object(r["g"])("h4",fe,"Charcoal Grilled "+Object(r["w"])(a.userMeal.productName),1),Object(r["g"])("div",me,[Object(r["g"])("h5",Oe,"GHS "+Object(r["w"])(a.userMeal.productPrice)+".00",1),ge]),Object(r["g"])("div",he,[Object(r["g"])("button",{class:"button",onClick:t[1]||(t[1]=function(){return a.decreaseQuantity&&a.decreaseQuantity.apply(a,arguments)})},"-"),Object(r["g"])("p",je,Object(r["w"])(a.userMeal.productQuantity),1),Object(r["g"])("button",{class:"button",onClick:t[2]||(t[2]=function(){return a.increaseQuantity&&a.increaseQuantity.apply(a,arguments)})},"+")]),ve,Object(r["g"])("p",ye,Object(r["w"])(a.userMeal.productDescription),1),Object(r["g"])("div",{class:"clicker is-size-5",onClick:t[3]||(t[3]=function(){return a.viewPack&&a.viewPack.apply(a,arguments)})},[ke,we]),Object(r["g"])("div",{class:["more is-size-5",{pack:n.pack}]},[Object(r["g"])("ol",Ce,[Object(r["g"])("li",null," Grilled "+Object(r["w"])(a.userMeal.productName)+" neatly wrapped in foil and packaging paper ",1),Pe,$e])],2)]),Object(r["g"])("button",{class:"is-primary next",onClick:t[4]||(t[4]=function(e){return a.updateCart(a.userMeal)})},"Buy Now")])}var Ne={data:function(){return{pack:!1}},components:{},computed:{view:function(){return this.$store.state.productView},userMeal:function(){return this.$store.state.meal}},mounted:function(){},methods:{updateCart:function(e){this.$store.commit("addToCart",e),console.log("cart open")},closeProductView:function(){this.$store.commit("closeProductTask"),console.log("product close")},decreaseQuantity:function(){this.$store.commit("decreaseQuantity"),this.$store.commit("decreasePrice")},increaseQuantity:function(){this.$store.commit("increaseQuantity"),this.$store.commit("increasePrice")},userAddOn:function(e){this.$store.commit("userAddOn",e.target.value)},viewPack:function(){console.log("View Pack"),this.pack=!this.pack}}};Ne.render=Ie;var Te=Ne,Me={class:"container"},Se={class:""},Qe={class:"mealList"};function xe(e,t,c,o,n,a){var i=Object(r["u"])("router-link");return Object(r["p"])(),Object(r["d"])("nav",null,[Object(r["g"])("div",Me,[Object(r["g"])("div",Se,[Object(r["g"])("div",Qe,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["t"])(a.products,(function(e){return Object(r["p"])(),Object(r["d"])("div",{class:"mealItem button is-outlined",key:e.id},[Object(r["g"])(i,{to:{name:"Product",params:{id:e.productID}},onClick:function(t){return a.selectMeal(e)}},{default:Object(r["z"])((function(){return[Object(r["f"])(Object(r["w"])(e.productName),1)]})),_:2},1032,["to","onClick"])])})),128))])])])])}var De={name:"ProductList",data:function(){return{}},mounted:function(){},computed:{products:function(){return this.$store.state.products}},methods:{selectMeal:function(e){this.$store.commit("selectMeal",e)}}};De.render=xe;var ze=De,Fe={components:{Header:j,Cart:ne,ProductItem:Te,ProductList:ze}};Fe.render=de;var Le=Fe;function Ae(e,t,c,o,n,a){return Object(r["p"])(),Object(r["d"])("p",null,"404")}var He={};He.render=Ae;var Re=He,_e=[{path:"/",name:"CoalSite",component:ie},{path:"/meal/:id",name:"Product",component:Le,props:!0},{path:"/:catchAll(.*)",name:"NotFound",component:Re}],qe=Object(i["a"])({history:Object(i["b"])("/"),routes:_e}),Ge=qe,Be=(c("4de4"),c("5502")),Ve=[{productName:"Sausage",productID:"sausage",productPrice:10,productImage:"Image",productQuantity:2,productDescription:"Fresh sausages that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""},{productName:"Chicken",productID:"chicken",productPrice:8,productImage:"Image",productQuantity:2,productDescription:"Fresh chicken that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""},{productName:"Beef",productID:"beef",productPrice:8,productImage:"Image",productQuantity:2,productDescription:"Fresh beef that are tenderly charcoal-grilled till they are well cooked and seasoned with sweet and hot low-salt spice specially mixed with your health in mind.",totalPrice:15,uniqueID:"",addOn:""}],Je=Ve,Ke=c("260b"),Ee=(c("e71f"),{apiKey:"AIzaSyD5F2KooUgE4PLsA9TJjjyphyni-jS6zWM",authDomain:"redcoalv3.firebaseapp.com",projectId:"redcoalv3",storageBucket:"redcoalv3.appspot.com",messagingSenderId:"118869332116",appId:"1:118869332116:web:55ad9890c08fa4f613a481",measurementId:"G-600KT7LRM5"}),We=Ke["a"].initializeApp(Ee),Ue=We.firestore(),Xe=Ue.collection("test"),Ye=function(e){return console.log("test"),Xe.add(e)};function Ze(e){console.log("local updated"),localStorage.setItem("cart",JSON.stringify(e))}var et=Object(Be["a"])({state:{products:Je,cart:[],open:!1,checkout:!1,remove:!1,meal:{},total:null,mobile:"",fullName:"",address:"",transactionRef:"",userNetwork:"",key:"pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d"},getters:{cartTotal:function(e){return e.cart.reduce((function(e,t){return e+t.productPrice}),0)},reference:function(){for(var e="",t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",c=0;c<10;c++)e+=t.charAt(Math.floor(Math.random()*t.length));return console.log(e),e},email:function(){var e="{{state.mobile}}@redcoal.com";return e},cartLength:function(e){var t=e.cart.length;return t}},mutations:{selectMeal:function(e,t){e.meal=t},addToCart:function(e,t){console.log("One"+t.uniqueID);var c=Math.floor(100*Math.random());t.uniqueID=c,console.log("Two"+t.uniqueID),e.cart.push(t),console.log("Loaded"),Ze(e.cart)},deleteFromCart:function(e,t){console.log(t.uniqueID),e.cart=e.cart.filter((function(e){return e.uniqueID!==t.uniqueID})),Ze(e.cart)},increaseCartQuantity:function(e,t){t.productQuantity++},openCartTask:function(e){e.open=!0},closeCartTask:function(e){e.open=!1},closeProductTask:function(e){e.productView=!1},updateCartFromLocalStorage:function(e){var t=localStorage.getItem("cart");t&&(e.cart=JSON.parse(t))},openCheckout:function(e){e.open=!1,e.checkout=!0},increaseQuantity:function(e){e.meal.productQuantity++},increasePrice:function(e){if("Sausage"===e.meal.productName){var t=e.meal.productPrice+3;e.meal.productPrice=t}else{var c=e.meal.productPrice+2;e.meal.productPrice=c}},decreaseQuantity:function(e){e.meal.productQuantity>2?e.meal.productQuantity--:console.log("Two or more")},decreasePrice:function(e){if("Sausage"===e.meal.productName)if(e.meal.productQuantity>2){var t=e.meal.productPrice-3;e.meal.productPrice=t}else 2===e.meal.productQuantity&&(e.meal.productPrice=10);else if("Beef"===e.meal.productName||"Chicken"===e.meal.productName)if(e.meal.productQuantity>2){var c=e.meal.productPrice-2;e.meal.productPrice=c}else 2===e.meal.productQuantity&&(e.meal.productPrice=8)},returnToCart:function(e){e.checkout=!1,e.open=!0},userMobile:function(e,t){e.mobile=t},userFullName:function(e,t){e.fullName=t},userAddress:function(e,t){e.address=t},userNetwork:function(e,t){e.userNetwork=t},transactionRef:function(e,t){e.transactionRef=t},firebaseTest:function(e){console.log("shoot"),Ye({userName:e.fullName,mobile:e.mobile,address:e.address,network:e.userNetwork,cart:e.cart}),console.log("clear"),localStorage.clear(),e.cart=[],e.checkout=!1,e.open=!1}},actions:{},modules:{}});c("78a7"),Object(r["c"])(a).use(et).use(Ge).mount("#app")},"5cb8":function(e,t,c){"use strict";c("fbf0")},"78a7":function(e,t,c){},fbf0:function(e,t,c){}});
//# sourceMappingURL=app.e64213ec.js.map