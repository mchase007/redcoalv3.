import { createStore } from 'vuex'
import items from '@/data/items.js'
 
function updateLocalStorage(cart) {
  console.log("local updated");
  localStorage.setItem("cart", JSON.stringify(cart))
}

export default createStore({
  state: {
    products: items,
    cart: [],
    isActive: false,
    exists: null,
    checkout: false,
    remove: false,
    meal: {},
    mobile: '',
    extraList: [],
    total: null,
    key: 'pk_live_e786ac56bef30fbb72f76237347338c4176377a3',
  },
  getters: {
    userDetails(state) {
      let details = {
        cart: state.cart
      }
      return details
    },
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + b.price + b.addOnPrice, 0)
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
      // let item2 = state.cart.find( (e) => e.id === payload.id && e.productQuantity !== payload.productQuantity);
      if (item) {
        console.log(item.id);
      } else {
        let y = {
          meal: payload.productName,
          price: payload.productPrice,
          quantity: payload.productQuantity,
          addOnQuantity: payload.addOnQuantity,
          addOnPrice: payload.addOnPrice,
        }
        state.cart.push(y);
        console.log(y);
      }
      updateLocalStorage(state.cart);
      setTimeout(() => {
        state.isActive = !state.isActive;
      }, 300);
    },
    deleteFromCart(state, payload) {
      console.log(state.cart.indexOf(payload));
      state.cart.splice(state.cart.indexOf(payload), 1);
      updateLocalStorage(state.cart)
    },
    removeAddOn(state, payload) {
      let item = state.cart.indexOf(payload);
      console.log(item);
      state.cart[item].addOnQuantity = 0;
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
      state.open = false;
      state.checkout = true;
    },
    increaseQuantity(state) {
      state.meal.productQuantity++;
    },
    increaseQuantity1(state) {
      state.meal.addOnQuantity++;
    },
    increasePrice(state) {
      if (state.meal.productName === 'Sausage') {
        // let price = (state.meal.productPrice + 3);
        let price = (state.meal.productPrice + 0.5);
        state.meal.productPrice = price;  
      } else {
        // let price = (state.meal.productPrice + 2);
        let price = (state.meal.productPrice + 0.5);
        state.meal.productPrice = price;      
      }
    },
    increasePrice1(state) {
      // let price = (state.meal.addOnPrice + 5);
      let price = (state.meal.addOnPrice + 0.5);
      state.meal.addOnPrice = price; 
    },
    decreaseQuantity(state) {
      if (state.meal.productQuantity > 2) {
        state.meal.productQuantity--;
      } else {
        console.log('Two or more');
      }
    },
    decreaseQuantity1(state) {
      if (state.meal.addOnQuantity > 0) {
        state.meal.addOnQuantity--;
      } else {
        console.log('Enough');
      }
    },
    decreasePrice(state) {
      if (state.meal.productName === 'Sausage') {
        if (state.meal.productQuantity > 2 ) {
          // let price = (state.meal.productPrice - 3);
          let price = (state.meal.productPrice - 0.5);
          state.meal.productPrice = price;
        } else if (state.meal.productQuantity === 2 ) {
          // state.meal.productPrice = 10;
          state.meal.productPrice = 0.5;
        }
      } else if (state.meal.productName === 'Beef' || state.meal.productName === 'Chicken'){
        if (state.meal.productQuantity > 2 ) {
          // let price = (state.meal.productPrice - 2);
          let price = (state.meal.productPrice - 0.5);
          state.meal.productPrice = price;
        } else if (state.meal.productQuantity === 2 ) {
          // state.meal.productPrice = 8;
          state.meal.productPrice = 0.5;
        }
      } 
    },
    decreasePrice1(state) {
      if (state.meal.addOnQuantity > 0) {
        // let price = (state.meal.addOnPrice - 5);
        let price = (state.meal.addOnPrice - 0.5);
        state.meal.addOnPrice = price;
      } else if (state.meal.addOnQuantity === 0 ) {
        state.meal.addOnPrice = 0;
      } 
    },
    returnToCart(state) {
      state.checkout = false;
      state.open = true;
    },
    userMobile(state, payload) {
      state.mobile = payload
    },
    // firebaseTest(state){
    //   console.log('shoot');
    //   createTest({
    //       userName: state.fullName,
    //       mobile: state.mobile,
    //       gpsAddress: state.gpsAddress,
    //       local: state.local,
    //       plusInfor: state.plusInfor,
    //       cart: state.cart,
    //     });
    //     console.log('clear');
    //     console.log(state.cart);
    //   localStorage.clear();
    //   state.cart = [];
    //   state.checkout = false
    //   state.open = false
      
    // },
    // firebaseTestTwo(state){
    //   console.log('shoot2');
    //   createTest({
    //       userName: state.fullName,
    //       email: state.contactEmail,
    //       contactMessage: state.contactMessage,
    //     });
    //     console.log('clear');
    //     state.fullName = '';
    //     state.contactEmail = '';
    //     state.contactMessage = '';
    // }   
  },
  actions: {
  },
  modules: {
  }
})
