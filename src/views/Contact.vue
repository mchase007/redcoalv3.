<template>
  <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
      <Cart/>
    </div>
    <div class="hero-body content">

      <div class="contact-form">
      <h1>Talk to us</h1>

        <div class="field">
        <label class="label">Full Name</label>
        <div class="control">
          <input @input="userFullName" ref="name" class="input" type="text" placeholder="Kofi Grills Chills">
        </div>
        <p class="help">Kofi Grills</p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control">
          <input @input="userEmail" ref="email" class="input" type="email" placeholder="kofi@redcoal.com">
        </div>
        <p class="help">kofi@redcoal.com</p>
      </div>
      
      <div class="field">
        <label class="label">Message</label>
        <div class="control">
          <textarea @input="userContactMessage" ref="message" class="textarea" placeholder="Hi, I would like to"></textarea>
        </div>
      </div>

       <div class="field checkout-button">
    <div class="control">
      <button class="button is-link" @click="firebaseTestTwo">Submit Message</button>
    </div>
      </div>
      </div>
    </div> 
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Cart from '@/components/Cart.vue'

export default {
  name: 'Contact',
  components: {
    Header,
    Cart,
  },
  methods: {
    userFullName(event) {
      this.$store.commit('userFullName', event.target.value)
    },
    userEmail(event) {
      this.$store.commit('userEmail', event.target.value)
    },
    userContactMessage(event) {
      this.$store.commit('userContactMessage', event.target.value)
    },
    firebaseTestTwo(event) {
      this.$store.commit('firebaseTestTwo')
      this.$refs['name'].value = ''
      this.$refs['email'].value = ''
      this.$refs['message'].value = ''
      console.log('shot fired');

      
    },
  },

}
</script>

<style>

</style>