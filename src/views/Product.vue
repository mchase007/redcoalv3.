<template>
  <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
      <Cart/>
      <CompletePurchase/>
      <ProductList></ProductList>
    </div>
    <div class="hero-body">
      <ProductItem></ProductItem>
    </div> 
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import Cart from '@/components/Cart.vue'
import ProductItem from '@/components/ProductItem.vue'
import ProductList from '@/components/ProductList.vue'
import CompletePurchase from '@/components/CompletePurchase.vue'

export default {
  components: {
    Header,
    Cart,
    ProductItem,
    ProductList,
    CompletePurchase,
  },
}
</script>

<style lang="scss">
.hero-body {
  border: 2px solid gray;
}

</style>