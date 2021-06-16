<template> 
  <div class="checkout-box" :class="{checkout : isCheckout}">
    
    <div class="orderForm">
    <div class="cartRoute">
    <button class="button is-outlined is-info" @click="returnToCart">Back to cart</button>
    </div>
    
      <div class="field">
        <label class="label">Full Name</label>
        <div class="control">
          <input @input="userFullName" ref="name" class="input" type="text" placeholder="Kofi Grills Chills">
        </div>
        <p class="help">Kofi Grills</p>
      </div>

      <div class="field">
        <label class="label">Contact Number</label>
        <div class="control">
          <input @input="userMobile" ref="number" class="input" type="number" placeholder="021-123-1234">
        </div>
        <p class="help">021-123-1234</p>
      </div>

      <div class="field">
        <label class="label">GPS Number</label>
        <div class="control">
          <input @input="userAddress" ref="address" class="input" type="text" placeholder="">
        </div>
        <p class="help">ABC-123</p>
      </div>

      <div class="field">
        <label class="label">Special Instructions</label>
        <div class="control">
          <textarea @input="userAddress" ref="address" class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      
      <!-- <div class="field">
        <label class="label">Payment Method</label>
        <div class="control">
        <div class="select">
          <select @input="userNetwork">
            <option>MTN</option>
            <option>Vodafone</option>
          </select>
        </div>
      </div>
    </div> -->

      <div class="field is-grouped">
    <div class="control">
      <button class="button is-link" @click="firebaseTest">Submit Order</button>
      <button class="button is-link" @click="runPaystack">Pay Order</button>
    </div>
      </div>

    </div>
  </div>
</template>

<script>
 
export default {
  components: { 
  }, 
  data() {
    return {
      
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
    key() {
      return this.$store.state.key
    },
    email() {
      let email = this.mobile + '@redcoal.com'
      return email
    },
    payRef(){
      return this.$store.state.transactionRef
    },
  },
  methods: {
    returnToCart() {
      this.$store.commit('returnToCart');
    },
    userMobile(event) {
      this.$store.commit('userMobile', event.target.value)
    },
    userFullName(event) {
      this.$store.commit('userFullName', event.target.value)
    },
    userAddress(event) {
      this.$store.commit('userAddress', event.target.value)
    },
    userNetwork(event) {
      this.$store.commit('userNetwork', event.target.value)
    },
    transactionRef(ref) {
      this.$store.commit('transactionRef', ref)
      console.log(ref);
    },
    firebaseTest(event) {
      this.$store.commit('firebaseTest')
      this.$refs['name'].value = ''
      this.$refs['number'].value = ''
      this.$refs['address'].value = ''
      console.log('shot fired');

      
    },
    logRef() {
      console.log(this.payRef);
    },
    runPaystack() {
      console.log('Start');
      var handler = PaystackPop.setup({

          key: this.key, // Replace with your public key
          email: this.email,
          amount: this.cartTotal * 100, // the amount value is multiplied by 100 to convert to the lowest currency unit
          currency: 'GHS', // Use GHS for Ghana Cedis or USD for US Dollars

          callback: function(response) {

          //this happens after the payment is completed successfully

          var reference = response.reference;
          
          this.$store.commit('transactionRef', reference)

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

</style>
