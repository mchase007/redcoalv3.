<template>
  <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
      <Cart/>
      <!-- <CompletePurchase/> -->
    </div>
    <div class="hero-body flex flex-fd-c">
      <ProductList></ProductList>
      <!-- <Hero></Hero> -->
      <ProductItem></ProductItem>
    </div> 
    <!-- <div class="hero-foot">
      <ProductList></ProductList>
    </div> -->
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Cart from '@/components/Cart.vue'
import ProductItem from '@/components/ProductItem.vue'
import ProductList from '@/components/ProductList.vue'

export default {
  components: {
    Header,
    Cart,
    ProductItem,
    ProductList,
  },
}
</script>

<style>

</style>