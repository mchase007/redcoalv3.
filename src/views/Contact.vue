<template> 
  <section class="hero is-fullheight is-medium">
    <div class="hero-head"> 
      <Header></Header>  
    </div>
    <div class="hero-body content contact-page">
 
      <div class="contact-form">
      <h1>Talk to us</h1> 

      <div class="field one">
      <label class="label">Full Name</label>
        <div class="control">
          <input v-model="contactForm.userName" @blur="userFullName" ref="name" class="input" type="text" placeholder="Kofi Grills Chills">
        </div>
        <span class="help is-info" v-if="v$.contactForm.userName.$error">
        Kindly enter full name correctly
        </span>
      </div>

      <div class="field">
      <label class="label">Email</label>
        <div class="control">
          <input v-model="contactForm.userEmail" @blur="userEmail" ref="email" class="input" type="email" placeholder="kofi@redcoal.com">
        </div>
        <span class="help is-info" v-if="v$.contactForm.userEmail.$error">
        Kindly enter email correctly
        </span> 
      </div>
      
      <div class="field">
        <label class="label">Message</label> 
        <div class="control">
          <textarea v-model="contactForm.userMessage" @blur="userMessage" ref="message" class="textarea" placeholder="Hi, I would like to"></textarea>
        </div>
        <span class="help is-info" v-if="v$.contactForm.userMessage.$error">
        Kindly fill message form
        </span>
      </div>

       <div class="field">
    <div class="control btnn">
      <button class="button is-primary is-fullwidth" @click="test">Submit Message</button>
    </div>
      </div>
      </div>


      <div class="contact-links">
      <div class="infor">
        <!-- <p>redcoal.com</p> -->
        <div class="flex">
          <i class="gg-pin"></i>
          <p class="is-size-5 is-size-6-mobile">KNUST</p> 
        </div>
        <div class="flex">
          <i class="gg-phone"></i>
          <p class="is-size-5 is-size-6-mobile">0241027880</p>
        </div>
        <div class="flex">
          <i class="gg-mail"></i>
          <p class="flex is-size-5 is-size-6-mobile">kebabstands@gmail.com</p>
        </div>
        <div class="flex">
          <i class="gg-instagram"></i>
          <p class="flex is-size-5 is-size-6-mobile">@kebabstands</p>
        </div>
        <!-- <div class="flex">
          <i class="gg-facebook"></i>
          <p class="flex is-size-5 is-size-6-mobile">@kebabstands</p>
        </div> -->
      </div>

      </div>

      <!-- <div class="social flex">
        <span><i class="gg-instagram"></i></span>
        <i class="gg-twitter"></i>
        <i class="gg-facebook"></i>
      </div> -->

      <div class="help">Copyright &copy; 2021 kebabstands. All Rights Reserved</div>

    </div> 
  </section>
</template>

<script>

import Header from '@/components/Header.vue'
import useVuelidate from '@vuelidate/core'
import { required, minLength, email } from '@vuelidate/validators'
import axios from "axios"

export default {
  name: 'Contact',
  components: {
    Header,
  },
  setup () {
    return { v$: useVuelidate() }
  },
  data() {
      return {
        contactForm: {
          userName: '',
          userEmail: '',
          userMessage: '',
        }
      };
    },
  validations() {
    return {
      contactForm: {
        userName: {required, minLength: minLength(3)},
        userEmail: {required, email},
        userMessage: {required},
      }
    }
  },
  methods: {
    test() { 
      this.v$.$validate()
      if (!this.v$.$error) {

        var config = {
        method: 'post',
        url: '../.netlify/functions/sendRequest',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : {
          request: this.contactForm,
        }
        };

        const self = this;

        axios(config)
        .then(function (response) {
              self.test2()
              console.log(response.data)
            })
        .catch(function (error) {
              console.log(error);
            });
      }
    },
    test2() {
      console.log("God is good");
      this.$refs['name'].value = ''
      this.$refs['email'].value = ''
      this.$refs['message'].value = ''
      // console.log('shot fired'); 
    },
    userFullname(event) {
      this.v$.$touch()
    },
    userEmail(event) {
      this.v$.$touch()
    },
    userMessage(event) {
      this.v$.$touch()
    },
  },

}
</script>

<style>

</style>