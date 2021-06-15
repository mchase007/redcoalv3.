<template>
  <div class="drawer" :class="{open : isOpen}">
    <button class="drawer-close button is-outlined is-primary" @click="closeCart">Back to shopping</button>

    <div>
      Basket items: {{cartItemLength}}
    </div>
    <div v-if="cart.length > 0">
      <div v-for="product in cart">
        <div class="card-content cartProduct">
          <div class="box">
            <div class="flex flex-jc-sb">
                <p>Image</p>
                <p>{{ product.productName }}</p>
                
                <div>
                  <p>GHS {{ product.productPrice }}</p>
                  <!-- <div class="controlSet">
                    <button class="button" @click="decreaseQuantity">-</button>
                    <p class="quantity">{{product.productQuantity}}</p>
                    <button class="button" @click="increaseCartQuantity(product)">+</button>
                  </div> -->
                  <p>Quantity: {{product.productQuantity}}</p>
                </div> 
                <!-- <p>{{product.addOn}}</p> -->
                <div>
                  <button @click="$store.commit('deleteFromCart', product)">Delete</button>
                </div>
            </div>
          </div>
        </div> 
      </div>
    </div>
    <div v-if="cart.length === 0">
      <p>There are no items in cart</p>
    </div>

    <div class="box">
      <p>GHS {{cartTotal}}</p>
      <button class="button is-primary" @click="openCheckout">Complete Purchase</button>
    </div>
  </div>
  <CompletePurchase></CompletePurchase>
</template>

<script>
import CompletePurchase from '@/components/CompletePurchase.vue'
import Header from '@/components/Header.vue'

export default {
  components: {
    CompletePurchase,
    Header,
  },
  data() {
    return {

    }
  },
  computed: {
    isOpen() { 
      return this.$store.state.open
    },
    cart() {
      return this.$store.state.cart
    },
    cartTotal() {
      return this.$store.getters.cartTotal
    },
    isRemoved() {
      return this.$store.state.remove
    },
    cartItemLength() {
      return this.$store.getters.cartLength
    }
  },
  methods: {
    closeCart() {
      this.$store.commit('closeCartTask');
    },
    openCheckout() {
      this.$store.commit('openCheckout');
    },
    decreaseQuantity() {
      this.$store.commit('decreaseQuantity');
      this.$store.commit('decreasePrice');
    },
    increaseCartQuantity(product) {
      // this.$store.commit('increaseCartQuantity', product);
      // this.$store.commit('increaseQuantity');
      // this.$store.commit('increasePrice')
    },
  },
}
</script>

<style lang="scss">
  
</style>