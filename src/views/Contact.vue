<template>
  <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
    </div>
    <div class="hero-body content contact-page">

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

       <div class="field">
    <div class="control">
      <button class="theButton4 is-link" @click="firebaseTestTwo">Submit Message</button>
    </div>
      </div>
      </div>

      <div class="contact-links">
      <div class="infor">
        <!-- <p>redcoal.com</p> -->
        <div class="flex">
          <i class="gg-pin"></i>
          <p>KNUST</p> 
        </div>
        <div class="flex">
          <i class="gg-phone"></i>
          <p>0201234578</p>
        </div>
        <div class="flex">
          <i class="gg-mail"></i>
          <p class="flex">redcoal@redcoal.com</p>
        </div>
      </div>

      </div>

      <div class="social flex">
        <span><i class="gg-instagram"></i></span>
        <i class="gg-twitter"></i>
        <i class="gg-facebook"></i>
      </div>

    </div> 
  </section>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: 'Contact',
  components: {
    Header,
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