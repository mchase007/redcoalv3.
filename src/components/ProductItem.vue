<template>
  <div class="productView container" >
    <div class="content is-medium">
      <h3>Charcoal Grilled {{userMeal.productName}}</h3>
       
      <p>{{userMeal.productDescription}}</p>

      <div class="clicker button is-outlined" @click="viewPack">What you get</div>
      <div class="more" :class="{pack: pack}">
      <ol type="1">
        <li>
          Grilled {{userMeal.productName}} neatly wrapped in foil and packaging paper
        </li>
        <li>
          A bottle of water.
        </li>
        <li>
          Mint to freshen breathe.
        </li>
      </ol>
      </div>

      <div class="bill">
      <h4>GHS {{userMeal.productPrice}}.00</h4>
      <p>Delivery Fee: GHS 1.00</p>
      </div>
      <p class="is-small">Free delivery for KNUST students</p>
      <div class="controlSet">
        <button class="button" @click="decreaseQuantity">-</button>
        <p class="quantity">{{userMeal.productQuantity}}</p>
        <button class="button" @click="increaseQuantity">+</button>
      </div>

      <CompletePurchase/>

    </div>
      <button class="is-primary next" @click="updateCart(userMeal)">Buy Now</button>
    </div>
</template>

<script>

import CompletePurchase from '@/components/CompletePurchase.vue'

export default {
  data() {
    return {
      pack: false,
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
    viewPack() {
      console.log('View Pack')
      this.pack = !this.pack 
     },
  },

}
</script>

<style lang='scss'>

</style>