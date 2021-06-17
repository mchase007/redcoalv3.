<template>
  <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
    </div>
    <div class="hero-body">
      <Hero></Hero>
    </div> 
    <div class="hero-foot">
      <!-- <ProductList></ProductList> -->
    </div>
  </section>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Hero from '@/components/Hero.vue'
  // import ProductList from '@/components/ProductList.vue'

export default {
  name: "CoalSite",
  components: {
    Header,
    Hero,
    // ProductList,
  },
  data() {
    return {
    }  
  },
  mounted() {
    this.$store.commit('updateCartFromLocalStorage')
  },
  methods: {
    updateCart(product) {
      this.$store.commit('addToCart', product);
    },
  },

}
  
</script>

<style>

</style>