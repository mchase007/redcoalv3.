<template>
  <nav>
    <div class="container flex flex-jc-sb flex-ai-c">
      <div> 
        <div @click="displayMenu" class="header-hamburger" :class="{open: open}">
          <i v-if="open" class="gg-close"></i>
          <i v-if="!open" class="gg-menu"></i>
        </div> 

        <div class="mobile-menu" :class="{open: open}">
          <span>
          <router-link to="/contact-us">Contact Us</router-link>
          </span>
        </div> 
      </div>

      <div class="header_logo is-size-5 is-size-4-desktop">
        <a><router-link to="/">redcoal</router-link></a>
      </div>  

      <div class="header_cart">
        <router-link to="/cart">
          <i class="gg-shopping-cart"></i>
        </router-link>
        <router-link to="/cart">
          <p>{{cartItemNum}}</p>
        </router-link>
      </div>
    </div>  
  </nav>  
</template>

<script>

export default {
  name: "Header",
  data() {
    return {
      open: false,
      addressLink: '../assets/menu.svg' 
    }  
  },
  computed: {
    cartItemNum() {
      return this.$store.getters.cartLength
    }
  },
  methods: {
    displayMenu(event) {
      console.log('Menu' + this.open)
      this.open = !this.open 
     },
  },
}
</script>

<style>
</style>