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
    exists: null,
    // open: false,
    checkout: false,
    remove: false,
    meal: {},
    total: null,
    mobile: '',
    fullName: '',
    contactEmail: '',
    contactMessage: '',
    gpsAddress: '',
    transactionRef: '',
    plusInfor: '',
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
      let randomId = Math.floor(Math.random() * 100);
      payload.uniqueID = randomId;
      state.cart.push(payload);
      console.log('Loaded' + payload);
      updateLocalStorage(state.cart)
    },
    deleteFromCart(state, payload) {
      console.log(state.cart.indexOf(payload));
      state.cart.splice(state.cart.indexOf(payload), 1);
      updateLocalStorage(state.cart)
    },
    increaseCartQuantity(state, payload) {
      payload.productQuantity++
      // state.meal.productQuantity++;
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
    userEmail(state, payload) {
      state.contactEmail = payload
    },
    userContactMessage(state, payload) {
      state.contactMessage = payload
    }, 
    userAddress(state, payload) {
      state.gpsAddress = payload
    },
    plusInfor(state, payload) {
      state.plusInfor = payload
    },
    transactionRef(state, payload) {
      state.transactionRef = payload
    },
    firebaseTest(state){
      console.log('shoot');
      createTest({
          userName: state.fullName,
          mobile: state.mobile,
          gpsAddress: state.gpsAddress,
          plusInfor: state.plusInfor,
          cart: state.cart,
          // total: state.cartTotal,
        });
        console.log('clear');
      localStorage.clear();
      state.cart = [];
      state.checkout = false
      state.open = false
      
    },
    firebaseTestTwo(state){
      console.log('shoot2');
      createTest({
          userName: state.fullName,
          email: state.contactEmail,
          contactMessage: state.contactMessage,
        });
        console.log('clear');
        state.fullName = '';
        state.contactEmail = '';
        state.contactMessage = '';
    }   
  },
  actions: {
  },
  modules: {
  }
})
