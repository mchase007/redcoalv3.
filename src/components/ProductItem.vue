<template>
  <div class="productView" :class="{view : view}">
    
    <CompletePurchase/>
    <div class="product">
      <div class="box">
        <p>{{userMeal.productName}}</p>
        <p>GHS {{userMeal.productPrice}}.00</p>

        <div class="flex flex-jc-c flex-ai-c">
        <button class="button" @click="decreaseQuantity">-</button>
        <p>{{userMeal.productQuantity}}</p>
        <button class="button" @click="increaseQuantity">+</button>
        </div>

        <button class="button is-primary" @click="updateCart(userMeal)">Add to Cart</button>

  <div class="field flex">
    <div class="control">
      <input class="" type="checkbox">
    </div>
    <label class="label">Banku + Pepper</label>
  </div>

</div>
    </div>
  </div>
</template>

<script>

import CompletePurchase from '@/components/CompletePurchase.vue'

export default {
  data() {
    return {
      
    }
  },
  components: {
    
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