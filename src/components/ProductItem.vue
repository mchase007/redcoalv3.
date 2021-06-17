<template>
  <div class="productView container" >
    <div class="content">
      <h4 class="is-size-4 is-size-3-tablet">Charcoal Grilled {{userMeal.productName}}</h4>
      <div class="bill">
        <div>
          <h5 class="is-size-5 is-size-4-tablet" >GHS {{userMeal.productPrice}}.00</h5>
        </div>
        <div class="promo">
          <p class=" is-size-7 is-size-6-tablet">+ FREE Delivery</p>
        </div>
      </div>
      <!-- <p class="promo is-size-7 is-size-6-tablet">FREE Delivery</p> -->
      <div class="controlSet">
        <button class="button" @click="decreaseQuantity">-</button>
        <p class="quantity">{{userMeal.productQuantity}}</p>
        <button class="button" @click="increaseQuantity">+</button>
      </div>

      <div class="field">
        <div class="control">
          <label class="">
            <input type="checkbox">
            Banku with Pepper - GHS 5.00
          </label>
        </div>
      </div>

      <p class="is-size-5">{{userMeal.productDescription}}</p>
      <div class="clicker is-size-5" @click="viewPack">
        What you get 
        <i class="gg-arrow-right-o"></i> 
        </div>

       <div class="more is-size-5" :class="{pack: pack}">
        <ol type="1">
          <li>
            Grilled {{userMeal.productName}} neatly wrapped in foil and packaging paper
          </li>
          <li>
            A bottle of water.
          </li>
          <li>
            Mint.
          </li>
        </ol>
      </div>

    </div>
      <button class="is-primary next" @click="updateCart(userMeal)">Buy Now</button>
    </div>
</template>

<script>

export default {
  data() {
    return {
      pack: false,
    }
  },
  components: {

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
      // this.$store.commit('closeProductTask');
      // this.$store.commit('openCartTask');
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