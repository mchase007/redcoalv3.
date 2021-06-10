<template>
  <nav>
    <div class="container flex flex-jc-sb flex-ai-c">
      <div>
        <div @click="displayMenu" class="header-hamburger" :class="{open: open}">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="mobile-menu" :class="{open: open}">
          <span>

          <router-link to="/">Sign In</router-link>
          </span>
          <router-link to="/">Sign Up</router-link>
        </div> 
      </div>

      <div class="header_logo is-size-4 is-size-3-desktop">
        <a><router-link to="/">redcoal</router-link></a>
      </div>  

      
      <div class="header_cart" @click="openCart">
          <img class="cart" src="../assets/shopping-cart.svg" alt="cart">
          <span class="snipcart-items-count"></span>
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
  methods: {
    displayMenu(event) {
      this.open = !this.open 
     },
     openCart() {
      this.$store.commit('openCartTask');
    }
  },
}
</script>

<style>
</style>