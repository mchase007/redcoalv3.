<template> 
  <div class="checkout-box" :class="{checkout : isCheckout}">
      
    <div class="orderForm">
    <div class="cartRoute">
    <div class="theButton3" @click="returnToCart">
      <div class="flex">
        <i class="gg-arrow-left"></i>
        <span>Back to cart</span>
        </div>
      </div>
    </div>
    
    <div class="map flex flex-fd-c">
        <div class="indicators flex flex-jc-sb">
          <div class="lng"></div>
          <div class="lng lat"></div>
        <div class="lng"></div>
        </div>
        <div class="labels flex flex-jc-sb">
        <span>Shopping Cart</span>
        <span class="">Delivery Address</span>
        <span class="">Secure Payment</span>
        </div>
      </div>

      <div class="field one">
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
 
      <div class="field locale">
      <div class="content">
        <div class="flex localeResponse">
        <h5>Local Area: </h5>
        <p>{{userLocale}} <span v-if="userLocale">and surroundings</span></p> 
        
        </div>
        <div class="control local">
        
          <label class="radio">
            <div class="flex inside">
                <input type="radio" ref="local" @input="userLocal" value="Ahodwo" name="location">
                <div class="side">
                <span>Ahodwo,</span>
                <span>Asokwa,</span>
                <span>Adiemmbra,</span>
                <span>Dakodwon,</span>
                <span>and surroundings.</span>
                </div>
              </div>
          </label>
          <label class="radio">
              <div class="flex inside">
                <input type="radio" ref="local" @input="userLocal" value="KNUST Campus" name="location">
                <div class="side">
                <span>Asokore Mampong,</span>
                <span>Ayeduase,</span>
                <span>Bomso,</span>
                <span>KNUST Campus,</span>
                <span>Kotei,</span>
                <span>New Site</span> 
                <span>and surroundings.</span>
                </div>
              </div>
          </label>

          <label class="radio">
            <div class="flex inside">
                <input type="radio" ref="local" @input="userLocal" value="Adum" name="location">
                <div class="side">
                <span>Adum,</span>
                <span>Bantama,</span>
                <span>Bekwai,</span>
                <span>Kwadaso,</span>
                <span>and surroundings.</span>
                </div>
              </div>
          </label>
        </div>
      <p class="help">* Delivering to entire Ashanti soon</p>
      </div>


      </div>

      <div class="field">
        <label class="label">GPS Number</label>
        <div class="control">
          <input @input="userAddress" ref="gpsAddress" class="input" type="text" placeholder="">
        </div>
        <p class="help">ABC-123</p>
      </div>

      <div class="field">
        <label class="label">Special Instructions</label>
        <div class="control">
          <textarea @input="plusInfor" ref="plusInfor" class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>
      
      <div class="card-content cartProduct">
       
      <div class="box flex flex-jc-sb total content">
        <div>
          <p>Number of Items:</p>
          <p>Total Price:</p>
          <p>Delivery:</p>
          <p>Total:</p>
        </div>
        <div>
          <p>{{cartItemLength}}</p>
          <p> GHS {{cartTotal}}</p>
          <p> Free</p>
          <strong>
            <p> GHS {{cartTotal}}</p>
          </strong>
        </div>
      </div>
      </div>

      <div class="btns">
      <div class="theButton4" @click="firebaseTest">Submit Order</div>
      <div class="theButton4 payBtn" @click="runPaystack">Pay Order</div>
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
    userLocale() {
      return this.$store.state.local
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
    cartItemLength() {
      return this.$store.getters.cartLength
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
    userLocal(event) {
      this.$store.commit('userLocal', event.target.value)
    },
    plusInfor(event) {
      this.$store.commit('plusInfor', event.target.value)
    },
    transactionRef(ref) {
      this.$store.commit('transactionRef', ref)
      console.log(ref);
    },
    firebaseTest(event) {
      this.$store.commit('firebaseTest')
      this.$refs['name'].value = ''
      this.$refs['number'].value = ''
      this.$refs['gpsAddress'].value = ''
      this.$refs['plusInfor'].value = ''
      this.$refs['local'].value = ''
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
