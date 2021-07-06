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
          <input v-model="form.userName" @blur="userFullName" ref="name" class="input" type="text" placeholder="Kofi Grills Chills">
        </div>
        <span class="help" v-if="v$.form.userName.$error">
        Kindly enter full name correctly
        </span>
    </div>

    <div class="field">
      <label class="label">Contact Number</label>
      <div class="control">
        <input v-model="form.userContact" @blur="userMobile" ref="number" class="input" type="tel" placeholder="0211231234">
      </div>
      <span class="help" v-if="v$.form.userContact.$error">
        Kindly enter your contact correctly
      </span>
    </div>
 
    <div class="field locale">
      <div class="content">
        <div class="flex localeResponse">
        <label class="label">Local Area: </label>
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
                <span>and surroundings.</span>
                </div>
              </div>
          </label>
          <label class="radio">
              <div class="flex inside">
                <input type="radio" ref="local" v-model="form.userLocale" value="KNUST Campus" name="location">
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
                <input type="radio" ref="local" v-model="form.userLocale" value="Adum" name="location">
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
          <input v-model="form.userGPS" @blur="userMobile" ref="gpsAddress" class="input" type="text" placeholder="ABC1234567">
        </div>
        <span class="help" v-if="v$.form.userGPS.$error">
          Kindly enter your GPS code correctly
        </span> 
        <p class="help">ABC1234567</p>
      </div>

      <div class="field">
        <div class="specialInstructions">
        <label class="label">Special Instructions</label> 
        <span class="help">Optional</span>
        </div>
        
        <div class="control">
          <textarea v-model="form.plusInfor" ref="plusInfor" class="textarea" placeholder="Textarea"></textarea>
        </div>
      </div>

      <div class="totalContainer2">     
      <div class="box flex total flex-jc-sb">
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
    firebaseTest(event) {
      this.$refs['name'].value = ''
      this.$refs['number'].value = ''
      this.$refs['gpsAddress'].value = ''
      this.$refs['plusInfor'].value = ''
      this.$refs['local'].value = ''
      console.log('shot fired');      
    },
    runPaystack() {
      console.log('Start');

      this.v$.$validate();

      if (!this.v$.$error) {
        console.log('No errors')

        let userPack = {
          infor: this.form,
          meal: this.userCart, 
        }

        console.log('userPack initialised')

        var handler = PaystackPop.setup({

          key: this.key,
          email: this.email,
          amount: this.cartTotal * 100,
          currency: 'GHS',

          callback: function(response) {
            var config = { 
            method: 'post',
            url: '../.netlify/functions/test',
            headers: { 
              'Content-Type': 'application/json'
            },
            data : {
              reference: response.reference,
              userOrder: userPack
            }
            };

            axios(config)
            .then(function (response) {
              console.log(JSON.stringify(response.data));
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
    }
  },
}
</script>

<style lang='scss'>

</style>
