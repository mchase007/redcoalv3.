<template> 
  <div class="productView container" >
    <div class="contents"> 
      <div class="flex flex-jc-sb">
          <span class="item">
          <p class="is-size-6 is-size-5-tablet">Charcoal Grilled {{userMeal.productName}}</p>
          <p class="is-size-6 is-size-5-tablet price" >GHS {{userMeal.productPrice}}.00</p>
          </span>

      <div class="controlSet">
        <button class="button is-small" @click="decreaseQuantity">-</button>
        <p class="quantity">{{userMeal.productQuantity}}</p>
        <button class="button is-small" @click="increaseQuantity">+</button>
      </div>
      </div>
      
      
 
      <div class="field pepper flex">
        <span>Pepper Spice:</span>
        <div class="control">
          <label class="">
            <input @click="spicey" value="" type="checkbox">
            <span>
              No Spice
            </span>
          </label>
        </div>
      </div>

      <div @click="superPack" class="theButtonz">
        <span>
          Super Pack   
        </span> 
        <div>
          <span><i v-if="!extras" class="gg-arrow-down-r"></i></span>
          <span><i v-if="extras" class="gg-arrow-up-r"></i></span>
        </div>
      </div>

      <div v-if="extras" class="extraSet flex flex-jc-sb">
        <span v-if="!userMeal.addOnQuantity > 0" class="item">
          <p class="is-size-6 is-size-5-tablet">Banku with Pepper:</p>
          <p class="is-size-6 is-size-5-tablet price" >GHS 5.00</p>
        </span>

        <span v-if="userMeal.addOnQuantity > 0" class="item">
          <p class="is-size-6 is-size-5-tablet">Banku with Pepper:</p>
          <p class="is-size-6 is-size-5-tablet price">GHS {{userMeal.addOnPrice}}.00</p>
        </span>
        
        <div class="controlSet">
          <div class="button is-small" @click="decreaseQuantity1">-</div>
          <p class="quantity">{{userMeal.addOnQuantity}}</p>
          <div class="button is-small" @click="increaseQuantity1">+</div>
        </div>
      </div>

      <div v-if="extras" class="extraset3"></div>

      <div v-if="extras" class="extraSet flex flex-jc-sb extraset2">

        <span v-if="!userMeal.addOnQuantity2 > 0" class="item">
          <p class="is-size-6 is-size-5-tablet">Lemon flavored Sobolo</p>
          <p class="is-size-6 is-size-5-tablet price" >GHS 2.00</p>
        </span>

        <span v-if="userMeal.addOnQuantity2 > 0" class="item">
          <p class="is-size-6 is-size-5-tablet">Lemon flavored Sobolo</p>
          <p class="is-size-6 is-size-5-tablet price">GHS {{userMeal.addOnPrice2}}.00</p>
        </span>

        <div class="controlSet">
          <div class="button is-small" @click="decreaseQuantity2">-</div>
          <p class="quantity">{{userMeal.addOnQuantity2}}</p>
          <div class="button is-small" @click="increaseQuantity2">+</div>
        </div>
      </div>
      
      <div class="is-size-5 packList item content">
        <p class="list-heading">What you get</p>
        <ol type="1">
          <li> 
            Grilled {{userMeal.productID}} kebab: {{userMeal.productQuantity}} 
          </li>
          <li>
            Bottled water.
          </li>
          <li>
            Mint.
          </li>
          <li v-if="userMeal.addOnQuantity > 0">
            Banku with pepper pack: {{userMeal.addOnQuantity}}
          </li>
          <li v-if="userMeal.addOnQuantity2 > 0">
            Lemon flavored Sobolo: {{userMeal.addOnQuantity2}}
          </li>
        </ol>
      </div>

      <p class="is-size-5 more" :class="{pack: pack}">{{userMeal.productDescription}}</p>

      <span v-if="!extras" @click="viewPack" class="clicker">Extra Details</span>
      <span v-if="extras" @click="viewPack" class="clicker">Less Details</span>

    </div>
      <div class="is-primary next" @click="updateCart(userMeal)">{{isActive ? 'Meal added to basket' : 'Add to Basket' }}</div>
    </div>
</template>

<script>
 
export default {
  data() {
    return {
      pack: false,
      noSpice: false,
      extras: false,
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
    },
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
      this.$store.commit('increasePrice');
    },
    increaseQuantity1() {
      this.$store.commit('increaseQuantity1');
      this.$store.commit('increasePrice1');
    },
    decreaseQuantity1() {
      this.$store.commit('decreaseQuantity1');
      this.$store.commit('decreasePrice1');
    },
    increaseQuantity2() {
      this.$store.commit('increaseQuantity2');
      this.$store.commit('increasePrice2');
    },
    decreaseQuantity2() {
      this.$store.commit('decreaseQuantity2');
      this.$store.commit('decreasePrice2');
    },  
    viewPack() {
      console.log('View Pack')
      this.pack = !this.pack 
    },
    superPack() {
      this.extras = !this.extras 
     },
  },

}
</script>

<style lang='scss'>

</style>