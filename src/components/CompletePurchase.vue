<template> 
  <div class="checkout-box" :class="{checkout : isCheckout}">
    <button class="button is-outlined is-light" @click="returnToCart">Back to cart</button>
    <div class="box">
      <p>{{cartTotal}}</p>
    </div>
    <div>
      <div class="field">
        <label class="label">Firstname</label>
        <div class="control">
          <input :value='firstName' @input="cartinputname1" class="input" type="text" placeholder="Kofi">
        </div>
      </div>

      <div class="field">
        <label class="label">Lastname</label>
        <div class="control">
          <input :value='lastName' @input="cartinputname2" class="input" type="text" placeholder="Grills Chills">
        </div>
      </div>

      <div class="field">
        <label class="label">Mobile Number</label>
        <div class="control">
          <input :value='mobile' @input="cartinputnum" class="input" type="number" placeholder="021-123-1234">
          <p>{{mobile}}</p>
        </div>
        <p class="help">This should be the number to make payment from</p>
      </div>

<div class="field">
  <label class="label">Payment Method</label>
  <div class="control">
    <div class="select">
      <select>
        <option>MTN</option>
        <option>Vodafone</option>
      </select>
    </div>
  </div>
</div>

<div class="field">
  <div class="control">
    <label class="checkbox">
      <input type="checkbox">
      I agree to the <a href="#">terms and conditions</a>
    </label>
  </div>
</div>

<div class="field is-grouped">
  <div class="control">
    <button class="button is-link" @click="runPaystack">Make Payment</button>
    <!-- <Paystack           
            :amount="parseInt(total * 100)"
            :email='mail'
            :paystackkey="key"
            :reference="reference"
            :callback="runPaystack"
            class="button is-link"
          >
            PayStack
          </Paystack> -->

  </div>
</div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { createTest } from '@/firebase'
// import Paystack from 'vue-paystack'

export default {
  components: {
    // Paystack  
  }, 
  data() {
    return {
      articleId: '',
      total: 10000,
      mail: '01234567890@mail.com',
      key: 'pk_test_85d130e5dd2f8b77015b76f744537db49f76d87d',
      test: {
        time: '200',
      }
    };
  },
  computed: {
    cartTotal() {
      return this.$store.getters.cartTotal
    },
    isCheckout() {
      return this.$store.state.checkout
    },
    mobile(){
      return this.$store.state.mobile
    },
    firstName(){
      return this.$store.state.firstName
    },
    lastName(){
      return this.$store.state.lastName
    },
    reference1(){
      return this.$store.getters.reference
    },
    reference() {
      let text = "";
      let possible =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (let i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    }
  },
  methods: {
    returnToCart() {
      this.$store.commit('returnToCart');
    },
    cartinputnum(event) {
      this.$store.commit('cartinputnum', event.target.value)
    },
    cartinputname1(event) {
      this.$store.commit('cartinputname1', event.target.value)
    },
    cartinputname2(event) {
      this.$store.commit('cartinputname2', event.target.value)
    },
    firebaseTest() {
    // const { serverTimestamp } = firebase.firestore.FieldValue;
    // theTime = serverTimestamp();
    // this.time = theTime;
    createTest({
    //   createdAt: serverTimestamp(),
      mobile: this.test.time,
    //   cartTotal: this.cartTotal,
    });
    // const db = firebase.firestore();
    // const testRef = db.collection('test');
    // console.log('Firebase')

    // testRef.add({
    //   createdAt: serverTimestamp(),
    //   mobile: this.mobile,
    //   cartTotal: this.cartTotal,
    // })
    },
    runPaystack() {
      // this.$store.commit('runPaystack');
      console.log('Start');
      var handler = PaystackPop.setup({

          key: this.key, // Replace with your public key
          email: this.mail,
          amount: this.total * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
          currency: 'GHS', // Use GHS for Ghana Cedis or USD for US Dollars

          callback: function(response) {

          //this happens after the payment is completed successfully

          var reference = response.reference;

          alert('Payment complete! Reference: ' + reference);

    },

    onClose: function() {

      alert('Transaction was not completed, window closed.');

    },

  });

  handler.openIframe();
    }

  },
}
</script>

<style lang='scss'>

  .checkout-box {
    width: 50%;
    height: 100vh;
    background-color: cornflowerblue;
    position: fixed;
    top: 0;
    right: -105vw;
    transition: left 2s;
    z-index: 101;
    overflow-y: scroll;
    transition: right 1s;

    &.checkout {
      // display: block;
      right: 0;
    }
  }

</style>
