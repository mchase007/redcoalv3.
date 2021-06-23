<template> 
  <section class="hero is-fullheight is-medium">
    <div class="hero-head">
      <Header></Header>
      <ProductList></ProductList>
    </div>
    <div class="hero-body">
      <ProductItem></ProductItem>
    </div> 
  </section>
</template>

<script>
import Header from '@/components/Header.vue'
import ProductItem from '@/components/ProductItem.vue'
import ProductList from '@/components/ProductList.vue'


export default {
  components: {
    Header,
    ProductItem,
    ProductList,
  },
}
</script>

<style lang="scss">

</style>