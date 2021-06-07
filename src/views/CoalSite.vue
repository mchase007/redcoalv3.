<template>
  <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
      <Cart/>
      <CompletePurchase/>
    </div>
    <div class="hero-body">
      <Hero></Hero>
    </div> 
    <div class="hero-foot">
      <ProductList
      v-on:updateCart="updateCart($event)"
      ></ProductList>
    </div>
  </section>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Hero from '@/components/Hero.vue'
  import ProductList from '@/components/ProductList.vue'
  import Cart from '@/components/Cart.vue'
  import CompletePurchase from '@/components/CompletePurchase.vue'

export default {
  name: "CoalSite",
  components: {
    Header,
    Hero,
    ProductList,
    Cart,
    CompletePurchase,
  },
  data() {
    return {
      open: this.$store.state.open
    }
  },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
    console.log(firebase);
  },
  methods: {
    updateCart(product) {
      this.$store.commit('addToCart', product);
      this.$store.commit('openCartTask');
    },
    
    
  },

}
  
</script>

<style>

</style>