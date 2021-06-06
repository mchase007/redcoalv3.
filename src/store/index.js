import { createStore } from 'vuex'
import items from '@/data/items.js'

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
    firstName: '',
    lastName: '',
    key: 'pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d',
  },
  getters: {
    cartTotal: state => {
      return state.cart.reduce((a, b) => a + b.totalPrice, 0)
    },
    // reference() {
    //   let text = "";
    //   let possible =
    //     "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    //   for (let i = 0; i < 10; i++)
    //     text += possible.charAt(Math.floor(Math.random() * possible.length));
    //   console.log(text);
    //   return text;
    // },
    email() {
      let email = `{{state.mobile}}@redcoal.com`
      return email
    },
    // amount() {
    //   return state.total * 100
    // },

  },
  mutations: {
    addToCart(state, payload) {
      let item = state.cart.find(i => i.productID === payload.productID)

      if (item) {
        // console.log('Present');
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
        // console.log('removed');
        item.productQuantity--
        item.totalPrice = item.productQuantity * item.productPrice
      } else {
        state.cart = state.cart.filter(i => i.productID !== payload.productID);
      }
      updateLocalStorage(state.cart)
    },
    openCartTask(state) {
      state.open = true;
      console.log(`Open: ${state.open}`);
    },
    closeCartTask(state) {
      state.open = false;
      console.log(`Open: ${state.open}`);
    },
    updateCartFromLocalStorage(state) {
      const cart = localStorage.getItem('cart')

      if (cart) {
        console.log('cart restored');
        state.cart = JSON.parse(cart)
      }
    },
    openCheckout(state) {
      state.checkout = true;
      state.open = false;
      console.log(`Checkout: ${state.checkout}`);
    },
    returnToCart(state) {
      state.checkout = false;
      state.open = true;
      console.log(`Checkout: ${state.checkout}`);
    },
    cartinputnum(state, payload) {
      state.mobile = payload
      console.log(state.mobile);
    },
    cartinputname1(state, payload) {
      state.firstName = payload
      console.log(state.firstName);
    },
    cartinputname2(state, payload) {
      state.lastName = payload
      console.log(state.lastName);
    },
    // runPaystack(state) {
    //   console.log('Started');
    //   let handler = PaystackPop.setup({
    //     key: 'pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d',
    //     email: `{{state.mobile}}@redcoal.com`,
    //     amount: state.cartTotal * 100,
    //     currency: 'GHS',

    //     onClose: function(){
    //       alert('Window closed.');
    //     },

    //     callback: function(response){
    //       let message = 'Payment complete! Reference: ' + response.reference;
    //       alert(message);

    //       var reference = response.reference;
    //       alert('Payment complete! Reference: ' + reference);
    //     }
    //   });
      
      // handler.openIframe();
    // },
    processPayment: () => {
      window.alert("Payment recieved")
    },
    close: () => {
      console.log("You closed checkout page")
    },

  },
  actions: {
  },
  modules: {
  }
})
