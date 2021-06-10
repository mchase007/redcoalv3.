<template>
  <div class="productView" :class="{view : view}">
    <ProductList></ProductList>
    <CompletePurchase/>
    <div class="product">
      <p>product: {{userMeal.productName}}</p>

      <p>price: {{userMeal.productPrice}}</p>
      <button @click="decreaseQuantity">-</button>
      <p>quantity: {{userMeal.productQuantity}}</p>
      <button @click="increaseQuantity">+</button>
      <p>{{userMeal.productImage}}</p>

      <form action="">
        <label>Banku + Pepper GHS 5</label>
        <input @input="userAddOn" type="checkbox">
      </form>

      <button @click="updateCart(userMeal)">Add to Cart</button>
    </div>
  </div>
</template>

<script>
import ProductList from '@/components/ProductList.vue'
import CompletePurchase from '@/components/CompletePurchase.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    ProductList,
    CompletePurchase,
  },
  computed: {
    view() {
      return this.$store.state.productView 
    },
    userMeal() {
      return this.$store.state.meal
    }
  },
  mounted() {
  },
  methods: {
    updateCart(product) {
      this.$store.commit('addToCart', product);
      this.$store.commit('closeProductTask');
      this.$store.commit('openCartTask');
      console.log('cart open');
    },
    closeProductView() {
      this.$store.commit('closeProductTask');
      console.log('product close');
    },
    decreaseQuantity() {
      this.$store.commit('decreaseQuantity');
      this.$store.commit('decreasePrice')
    },
    increaseQuantity() {
      this.$store.commit('increaseQuantity');
      this.$store.commit('increasePrice')
    },
    userAddOn(event) {
      this.$store.commit('userAddOn', event.target.value)
    },
  },

}
</script>

<style>

</style>