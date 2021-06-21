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
        <div class="theButton" :class="{packOpen: pack}">
          <span class="buttonText">what you get</span>
          <span class="is-small">
            <i v-if="pack" class="gg-arrow-up-r"></i>
            <i v-if="!pack" class="gg-arrow-down-r"></i>
          </span>
        </div>
         
         
        </div>

       <div class="more is-size-5" :class="{pack: pack}">
        <ol type="1">
          <li> 
            {{userMeal.productQuantity}} grilled {{userMeal.productID}}s neatly wrapped in foil and packaging paper
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
      <div class="is-primary next" @click="updateCart(userMeal)">{{isActive ? 'Added' : 'Add to Basket'}}</div>
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
    },
    isActive() {
      return this.$store.state.isActive
    }
  },
  mounted() {
  },
  methods: {
    updateCart(product) {
      this.$store.commit('addToCart', product);
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