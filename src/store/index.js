import { createStore } from 'vuex'
import items from '@/data/items.js'
 
function updateLocalStorage(cart) {
  // console.log("local updated"); 
  localStorage.setItem("cart", JSON.stringify(cart))
}

export default createStore({
  state: {
    products: items,
    cart: [],
    isActive: false,
    exists: null,
    checkout: false,
    meal: {},
    mobile: '', 
    total: null,
    key: 'pk_live_e786ac56bef30fbb72f76237347338c4176377a3',
    // key: 'pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d',
  },
  getters: {
    userDetails(state) {
      let details = {
        cart: state.cart
      }
      return details
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + b.price + b.addOnPrice + b.addOnPrice2, 0)
    },
    cartLength(state) {
      let itemNum = state.cart.length
      return itemNum
    } 
  }, 
  mutations: {
    selectMeal(state, payload) {
      state.meal = payload;
    },
    addToCart(state, payload) {
      state.isActive = !state.isActive;
      let item = state.cart.find( (e) => e.id === payload.id);
      if (item) {
      } else {
        let y = {
          meal: payload.productName,
          price: payload.productPrice,
          quantity: payload.productQuantity,
          addOnQuantity: payload.addOnQuantity,
          addOnPrice: payload.addOnPrice,
          addOnQuantity2: payload.addOnQuantity2,
          addOnPrice2: payload.addOnPrice2,
          spice: payload.spiced,
        }
        state.cart.push(y);
      }
      updateLocalStorage(state.cart);
      setTimeout(() => {
        state.isActive = !state.isActive;
      }, 300);
    },
    deleteFromCart(state, payload) {
      // console.log(state.cart.indexOf(payload));
      state.cart.splice(state.cart.indexOf(payload), 1);
      updateLocalStorage(state.cart)
    },
    removeAddOn(state, payload) {
      let item = state.cart.indexOf(payload);
      // console.log(item);
      state.cart[item].addOnQuantity = 0;
      state.cart[item].addOnPrice = 0
      updateLocalStorage(state.cart)
    },
    removeAddOn2(state, payload) {
      let item = state.cart.indexOf(payload);
      // console.log(item);
      state.cart[item].addOnQuantity2 = 0;
      state.cart[item].addOnPrice2 = 0
      updateLocalStorage(state.cart)
    },
    increaseCartQuantity(state, payload) {
      payload.productQuantity++
    },
    closeProductTask(state) {
      state.productView = false;
    }, 
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')

      if (cart) {
        state.cart = JSON.parse(cart)
      }
    },
    openCheckout(state) {
      state.checkout = true;
    },
    increaseQuantity(state) {
      state.meal.productQuantity++;
    },
    increaseQuantity1(state) {
      state.meal.addOnQuantity++;
    },
    increaseQuantity2(state) {
      state.meal.addOnQuantity2++;
    },
    increasePrice(state) {
      if (state.meal.productName === 'Sausage') {
        if (state.meal.productQuantity < 4) {
          let price = (state.meal.productPrice + 4);
          state.meal.productPrice = price;
        } else {
          let price = (state.meal.productPrice + 3);
          state.meal.productPrice = price;
        }
      } else {
        if (state.meal.productQuantity < 4) {
          let price = (state.meal.productPrice + 3);
          state.meal.productPrice = price;
        } else {
          let price = (state.meal.productPrice + 2);
          state.meal.productPrice = price;
        }    
      }
    },
    increasePrice1(state) {
      let price = (state.meal.addOnPrice + 3);
      // let price = (state.meal.addOnPrice + 1);
      state.meal.addOnPrice = price; 
    },
    increasePrice2(state) {
      let price = (state.meal.addOnPrice2 + 1);
      // let price = (state.meal.addOnPrice2 + 1);
      state.meal.addOnPrice2 = price; 
    },
    decreaseQuantity(state) {
      if (state.meal.productQuantity > 2) {
        state.meal.productQuantity--;
      } 
    },
    decreaseQuantity1(state) {
      if (state.meal.addOnQuantity > 0) {
        state.meal.addOnQuantity--;
      } 
    },
    decreaseQuantity2(state) {
      if (state.meal.addOnQuantity2 > 0) {
        state.meal.addOnQuantity2--;
      } 
    },
    decreasePrice(state) {
      if (state.meal.productName === 'Sausage') {
        if (state.meal.productQuantity > 2 ) {
          let price = (state.meal.productPrice - 4);
          // let price = (state.meal.productPrice - 1);
          state.meal.productPrice = price;
        } else if (state.meal.productQuantity === 2 ) {
          state.meal.productPrice = 13;
          // state.meal.productPrice = 1;
        }
      } else if (state.meal.productName === 'Beef' || state.meal.productName === 'Chicken' || state.meal.productName === 'Goat'){
        if (state.meal.productQuantity > 2 ) {
          let price = (state.meal.productPrice - 3);
          // let price = (state.meal.productPrice - 1);
          state.meal.productPrice = price;
        } else if (state.meal.productQuantity === 2 ) {
          state.meal.productPrice = 11;
          // state.meal.productPrice = 1;
        }
      } 
    },
    decreasePrice1(state) {
      if (state.meal.addOnQuantity > 0) {
        let price = (state.meal.addOnPrice - 3);
        // let price = (state.meal.addOnPrice - 1);
        state.meal.addOnPrice = price;
      } else if (state.meal.addOnQuantity === 0 ) {
        state.meal.addOnPrice = 0;
      } 
    },
    decreasePrice2(state) {
      if (state.meal.addOnQuantity2 > 0) {
        let price = (state.meal.addOnPrice - 1);
        // let price = (state.meal.addOnPrice - 1);
        state.meal.addOnPrice2 = price;
      } else if (state.meal.addOnQuantity2 === 0 ) {
        state.meal.addOnPrice2 = 0;
      } 
    },
    returnToCart(state) {
      state.checkout = false;
      state.open = true;
    },
    userMobile(state, payload) {
      state.mobile = payload
    },
    clearCart(state){
      state.cart = [];
      state.checkout = true;
    },
    spicey(state) {
      state.meal.spiced = !state.meal.spiced;
    },
  },
  actions: {
  },
  modules: {
  }
})
