<template> 
  <div class="checkout-box" :class="{checkout : isCheckout}">
     
    <div class="orderForm">
    <div class="cartRoute">
    <button class="button is-outlined is-info" @click="returnToCart">Back to cart</button>
    </div>

    <div class="map flex flex-fd-c">
        <div class="indicators flex flex-jc-sb">
          <div class="lng"></div>
          <div class="lng lat"></div>
        <div class="lng"></div>
        </div>
        <div class="labels flex flex-jc-sb">
        <span>Cart</span>
        <span class="">Delivery</span>
        <span class="">Payment</span>
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
        <h5>Local Area: {{userLocale}}</h5>

        <div class="control local">
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Ahodwo" name="rsvp">
            Ahodwo
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Asokore Mampong" name="rsvp">
            Asokore Mampong
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Asokwa" name="rsvp">
            Asokwa
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Ayeduase" name="rsvp">
            Ayeduase
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Bantama" name="rsvp">
            Bantama
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Bomso" name="rsvp">
            Bomso
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Brunei" name="rsvp">
            Brunei
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Campus" name="rsvp">
            Campus 
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Commercial" name="rsvp">
            Commercial
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Hall 7" name="rsvp">
            Hall 7
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Kotei" name="rsvp">
            Kotei
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="New Site" name="rsvp">
            New Site
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Suntreso" name="rsvp">
            Suntreso
          </label>
          <label class="radio">
            <input type="radio" ref="local" @input="userLocal" value="Tech Junction" name="rsvp">
            Tech Junction
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
          <p>Total Price:</p>
          <p>Delivery:</p>
          <p>Total:</p>
        </div>
        <div>
          <p> GHS {{cartTotal}}</p>
        <p> Free</p>
        <strong>
        <p> GHS {{cartTotal}}</p>
        </strong>
        </div>
      </div>
      </div>

      <div class="field checkout-button is-grouped">
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
