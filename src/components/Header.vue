<template>  
  <nav>
    <div class="container flex flex-jc-sb flex-ai-c">
      <div>  
        <div @click="displayMenu" class="header-hamburger" :class="{open: open}">
          <i v-if="!open" class="gg-menu-boxed"></i>
          <i v-if="open" class="gg-close-r"></i>
        </div> 

        <div class="mobile-menu" :class="{open: open}">
          <span>
            <router-link to="/contact-us">Contact Us</router-link>
          </span>
          <!-- <span class="bulk">
            <router-link to="">Bulk Orders</router-link>
          </span>   -->
        </div> 
      </div>

      <div class="header_logo is-size-4 is-size-5-mobile has-text-weight-semibold">
        <a><router-link to="/">kebabstands</router-link></a>
      </div>  

      <div class="header_cart"> 
        <router-link to="/cart">
          <i class="gg-shopping-cart is-size-2"></i>
        </router-link>
        <router-link to="/cart">
          <p class="is-size-5-tablet">{{cartItemNum}}</p>
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
      this.emitter.emit("display",this.open)
     },
  },
}
</script>

<style>
</style>