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
    <button class="button is-link" @click="firebaseTest">Make Payment</button>
    
  </div>
</div>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
import { createTest } from '@/firebase'

export default {
  data() {
    return {
      articleId: '',
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
    reference(){
      return this.$store.getters.reference
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
  }
    // runPaystack() {
    //   this.$store.commit('runPaystack');
    //   console.log('Start');
    // }

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

processPayment: () => {
      window.alert("Payment recieved")
    },
    close: () => {
     console.log("You closed checkout page")
    }