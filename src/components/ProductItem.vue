<template>
  <div class="productView container" >
    <div class="content is-medium">
      <h3>Charcoal Grilled {{userMeal.productName}}</h3>
      
      <p>{{userMeal.productDescription}}</p>

      <p>What you get</p>
      <div class="more">
      <ol type="1">
        <li>
          Grilled {{userMeal.productName}} neatly wrapped in foil and packaging paper
        </li>
        <li>
          1 Bottled water to cool down afterwards
        </li>
        <li>
          Free delivery for KNUST students (in KNUST area)
        </li>
        <li>
          Tissue to wipe you clean
        </li>
      </ol>
      </div>


      <h4>GHS {{userMeal.productPrice}}.00</h4>
      <div class="controlSet">
        <button class="button" @click="decreaseQuantity">-</button>
        <p class="quantity">{{userMeal.productQuantity}}</p>
        <button class="button" @click="increaseQuantity">+</button>
      </div>

      <button class="button is-primary is-medium" @click="updateCart(userMeal)">Add to Cart</button>

    </div>
  </div>
  
  <CompletePurchase/>
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
      this.$store.commit('decreasePrice');
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

<style lang='scss'>

</style>