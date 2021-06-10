<template>
  <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
      <Cart/>
      
    </div>
    <div class="hero-body">
      <Hero></Hero>
    </div> 
    <div class="hero-foot">
      <ProductList></ProductList>
      <!-- <ProductItem></ProductItem> -->
    </div>
  </section>
</template>

<script>
  import Header from '@/components/Header.vue'
  import Hero from '@/components/Hero.vue'
  import ProductList from '@/components/ProductList.vue'
  // import ProductItem from '@/components/ProductItem.vue'
  import Cart from '@/components/Cart.vue'
  // import CompletePurchase from '@/components/CompletePurchase.vue'

export default {
  name: "CoalSite",
  components: {
    Header,
    Hero,
    ProductList,
    // ProductItem,
    Cart,
    // CompletePurchase,
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
      this.$store.commit('openCartTask');
    },
  },

}
  
</script>

<style>

</style>