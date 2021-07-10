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
        <div class="lng">1</div>
        <div class="lat">2</div>
        <div class="lng">3</div>
      </div>
      <div class="flex flex-jc-sb">
        <span>Shopping Cart</span>
        <span class="">Delivery Address</span>
        <span class="">Secure Payment</span>
      </div>
    </div>

    <div class="field one">
      <label class="label is-size-5-tablet">Full Name</label>
        <div class="control">
          <input v-model="form.userName" @blur="userFullName" ref="name" class="input" type="text" placeholder="Kofi Grills Chills">
        </div>
        <span class="help is-info" v-if="v$.form.userName.$error">
        Kindly enter full name correctly
        </span>
    </div>

    <div class="field">
      <label class="label is-size-5-tablet">Contact Number</label>
      <div class="control">
        <input v-model="form.userContact" @blur="userMobile" ref="number" class="input" type="tel" placeholder="0211231234">
      </div>
      <span class="help is-info" v-if="v$.form.userContact.$error">
        Kindly enter your contact correctly
      </span>
    </div>
 
    <div class="field locale">
      <div class="content">
        <div class="flex localeResponse">
        <label class="label is-size-5-tablet">Local Area: </label>
        <p> {{form.userLocale}} <span v-if="form.userLocale"> and surroundings</span></p> 
        </div>
        <div class="control local">
        
        <label class="radio">
          <div class="flex inside">
            <input type="radio" ref="local" v-model="form.userLocale" value="Ahodwo" name="location">
              <div class="side">
                <span>Ahodwo,</span>
                <span>Asokwa,</span>
                <span>Adiemmbra,</span>
                <span>Dakodwon,</span>
                <span> and surroundings.</span>
                </div>
              </div>
          </label>
          <label class="radio">
              <div class="flex inside">
                <input type="radio" ref="local" v-model="form.userLocale" value="KNUST" name="location">
                <div class="side">
                <span>Asokore Mampong,</span>
                <span>KNUST Campus, Off-Campus</span>
                <!-- <span>KNUST Off-campus,</span> -->
                <span> and surroundings.</span>
                </div>
              </div>
          </label>

          <label class="radio">
            <div class="flex inside">
                <input type="radio" ref="local" v-model="form.userLocale" value="Adum" name="location">
                <div class="side">
                <span>Adum,</span>
                <span>Bantama,</span>
                <span>Bekwai,</span>
                <span>Kwadaso,</span>
                <span> and surroundings.</span>
                </div>
              </div>
          </label>
        </div>
      <p class="help">* Delivering to entire Ashanti soon</p>
      </div>

      </div>

      <div class="field">
        <label class="label is-size-5-tablet">GPS Number</label>
        <div class="control">
          <input v-model="form.userGPS" @blur="userMobile" ref="gpsAddress" class="input" type="text" placeholder="ABC1234567">
        </div>
        <span class="help is-info" v-if="v$.form.userGPS.$error">
          Kindly enter your GPS code correctly
        </span> 
        <p class="help">ABC1234567</p>
      </div>

      <div class="field">
        <div class="specialInstructions">
        <label class="label is-size-5-tablet">Special Instructions</label> 
        <span class="help">Optional</span>
        </div> 
        
        <div class="control">
          <textarea v-model="form.plusInfor" ref="plusInfor" class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="totalContainer2">     
      <div class="flex total flex-jc-sb is-size-5 is-size-6-mobile">
        <div class="group1">
          <p>Number of Items:</p>
          <p>Total Price:</p>
          <p>Delivery:</p>
          <p>Total:</p>
        </div>
        <div class="group2">
          <p>{{cartItemLength}}</p>
          <p> GHS {{cartTotal}}</p>
          <h5 class="has-text-weight-semibold free">FREE!</h5>
          <strong>
            <p> GHS {{cartTotal}}</p>
          </strong>
        </div>
      </div>
    </div>

      <div class="btns">
      <div class="theButton4 payBtn" @click="runPaystack">Pay Order</div>
      </div>

    </div>
  </div>
</template>

<script> 
 
import useVuelidate from '@vuelidate/core'
import { required, minLength, maxLength } from '@vuelidate/validators'
import axios from "axios"

export default {
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
    return {
      form: {
        userName: '',
        userContact: '',
        userGPS: '',
        userLocale: '',
        plusInfor: '',
      }
    };
  },
  validations() {
    return {
      form: {
        userName: {required, minLength: minLength(3)},
        userContact: {required, minLength: minLength(10), maxLength: maxLength(10)},
        userGPS: {required, minLength: minLength(9), maxLength: maxLength(9)},
      }
    }
  },
  computed: {
    userCart() {
      return this.$store.state.cart
    },
    cartTotal() {
      return this.$store.getters.cartTotal
    },
    isCheckout() {
      return this.$store.state.checkout
    },
    key() {
      return this.$store.state.key
    },
    email() {
      let email = this.form.userContact + '@redcoal.com'
      return email
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
      this.v$.$touch()
    },
    userFullName(event) {
      this.v$.$touch()
    },
    userAddress(event) {
      this.v$.$touch()
    },
    runPaystack() {
      console.log('God Is Good');

      this.v$.$validate();

      if (!this.v$.$error) {
        console.log('No errors')

        let userPack = {
          infor: this.form,
          meal: this.userCart, 
        }

        // console.log('userPack initialised')

        let self = this;

        var handler = PaystackPop.setup({

          key: self.key,
          email: self.email,
          amount: self.cartTotal * 100,
          currency: 'GHS',
 
          callback: function(response) {
            var config = { 
            method: 'post',
            url: '../.netlify/functions/sendOrder',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : {
              reference: response.reference,
              userOrder: userPack
            }
            };

            axios(config)
            .then(function(response) {
              self.test3()
              console.log("God Is Good");
            })
            .catch(function (error) {
              console.log(error);
            });
          },
      

          onClose: function() {

          alert('Transaction was not completed, window closed.');

          },

          });

        handler.openIframe();
      }
    },
    test3() {
      this.$refs['name'].value = ''
      this.$refs['number'].value = ''
      this.$refs['gpsAddress'].value = ''
      this.$refs['plusInfor'].value = ''
      this.$refs['local'].value = ''
      localStorage.clear();
      this.$store.commit('clearCart');
      this.$router.go(-1)
      // console.log('shot fired');      
    },
  },
}
</script>

<style lang='scss'>

</style>
