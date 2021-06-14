import { createStore } from 'vuex'
import items from '@/data/items.js'
import { createTest } from '@/firebase'

function updateLocalStorage(cart) {
  console.log("local updated");
  localStorage.setItem("cart", JSON.stringify(cart))
}

export default createStore({
  state: {
    products: items,
    cart: [],
    open: false,
    checkout: false,
    remove: false,
    meal: {},
    total: null,
    mobile: '',
    fullName: '',
    address: '',
    transactionRef: '',
    userNetwork: '',
    key: 'pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d',
  },
  getters: {
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + b.productPrice, 0)
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      console.log(text);
      return text;
    },
    email() {
      let email = `{{state.mobile}}@redcoal.com`
      return email
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
      console.log('One'+payload.uniqueID);
      let randomId = Math.floor(Math.random() * 100)
      payload.uniqueID = randomId
      console.log('Two'+payload.uniqueID);
      // let item = state.cart.find(i => i.productQuantity === payload.productQuantity)
      state.cart.push(payload);
      console.log('Loaded');
      // if (item) {
      //   item.productQuantity2++
      //   console.log(item.productQuantity2);
      //   // item.totalPrice = item.productQuantity * item.productPrice
      // } else {
      // }
      updateLocalStorage(state.cart)
    },
    // removeFromCart(state, payload) {
    //   let item = state.cart.find(i => i.productID === payload.productID)

    //   if (item.productQuantity > 1) {
    //     item.productQuantity--
    //     item.totalPrice = item.productQuantity * item.productPrice
    //   } else {
    //     state.cart = state.cart.filter(i => i.productID !== payload.productID);
    //   }
    //   updateLocalStorage(state.cart)
    // },
    deleteFromCart(state, payload) {
      console.log(payload.uniqueID);
      // for (let i = 0; i < state.cart.length; i++) {
      //   if (i.uniqueID === payload.uniqueID) {
      //     let removed = state.cart.splice(i, 1)
      //     console.log(removed);
      //   }
        
      // }
      state.cart = state.cart.filter(i => i.uniqueID !== payload.uniqueID);
      updateLocalStorage(state.cart)
    },
    openCartTask(state) {
      state.open = true;
    },
    closeCartTask(state) {
      state.open = false;
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
    userAddOn(state) {
      state.meal.productQuantity++;
    },
    increasePrice(state) {
      if (state.meal.productName === 'Sausage') {
        let price = (state.meal.productPrice + 3);
        state.meal.productPrice = price;  
      } else {
        let price = (state.meal.productPrice + 2);
        state.meal.productPrice = price;
        
      }
    },
    decreaseQuantity(state) {
      if (state.meal.productQuantity > 2) {
        state.meal.productQuantity--;
      } else {
        console.log('Two or more');
      }
    },
    decreasePrice(state) {
      if (state.meal.productName === 'Sausage') {
        if (state.meal.productQuantity > 2 ) {
          let price = (state.meal.productPrice - 3);
          state.meal.productPrice = price;
        } else if (state.meal.productQuantity === 2 ) {
          state.meal.productPrice = 10;
        }
      } else if (state.meal.productName === 'Beef' || state.meal.productName === 'Chicken'){
        if (state.meal.productQuantity > 2 ) {
          let price = (state.meal.productPrice - 2);
          state.meal.productPrice = price;
        } else if (state.meal.productQuantity === 2 ) {
          state.meal.productPrice = 8;
        }
      } 
    },
    returnToCart(state) {
      state.checkout = false;
      state.open = true;
    },
    userMobile(state, payload) {
      state.mobile = payload
    },
    userFullName(state, payload) {
      state.fullName = payload
    },
    userAddress(state, payload) {
      state.address = payload
    },
    userNetwork(state, payload) {
      state.userNetwork = payload
    },
    transactionRef(state, payload) {
      state.transactionRef = payload
    },
    firebaseTest(state){
      console.log('shoot');
      createTest({
          userName: state.fullName,
          mobile: state.mobile,
          address: state.address,
          network: state.userNetwork,
          cart: state.cart,
          // total: state.cartTotal,
        });
        console.log('clear');
      localStorage.clear();
      state.cart = [];
      state.checkout = false
      state.open = false
      
    }   
  },
  actions: {
  },
  modules: {
  }
})
