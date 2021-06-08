import { createStore } from 'vuex'
import items from '@/data/items.js'
import { createTest } from '@/firebase'

function updateLocalStorage(cart) {
  console.log("added");
  localStorage.setItem("cart", JSON.stringify(cart))
}

export default createStore({
  state: {
    products: items,
    cart: [],
    open: false,
    checkout: false,
    total: null,
    mobile: '',
    fullName: '',
    address: '',
    transactionRef: '',
    userNetwork: '',
    // cartTotal,
    key: 'pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d',
  },
  getters: {
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + b.totalPrice, 0)
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

  },
  mutations: {
    addToCart(state, payload) {
      let item = state.cart.find(i => i.productID === payload.productID)

      if (item) {
        item.productQuantity++
        item.totalPrice = item.productQuantity * item.productPrice
      } else {
        state.cart.push(payload);
      }
      updateLocalStorage(state.cart)
    },
    removeFromCart(state, payload) {
      let item = state.cart.find(i => i.productID === payload.productID)

      if (item.productQuantity > 1) {
        item.productQuantity--
        item.totalPrice = item.productQuantity * item.productPrice
      } else {
        state.cart = state.cart.filter(i => i.productID !== payload.productID);
      }
      updateLocalStorage(state.cart)
    },
    deleteFromCart(state, payload) {
      state.cart = state.cart.filter(i => i.productID !== payload.productID);
      updateLocalStorage(state.cart)
    },
    openCartTask(state) {
      state.open = true;
    },
    closeCartTask(state) {
      state.open = false;
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')

      if (cart) {
        state.cart = JSON.parse(cart)
      }
    },
    openCheckout(state) {
      state.checkout = true;
      state.open = false;
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
