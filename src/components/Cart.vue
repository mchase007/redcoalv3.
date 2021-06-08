<template>
  <div class="drawer" :class="{open : isOpen}">
    <button class="drawer-close button is-outlined is-light" @click="closeCart">Back to shopping</button>

    <div v-if="cart">
      <div v-for="product in cart">
        <div class="">
          <div class="card-content">
            <div class="" >

              <div class="box">
                <div>
                  <p>{{ product.productName }}</p>
                  <p>GHS {{ product.totalPrice }}</p>
                </div>

                <div class="field">
                  <label class="label">Pepper</label>
                   <div class="control">
                    <label class="radio">
                      <input type="checkbox">
                        Spice
                      </label>
                </div>
            </div>

                <div>
                  <button @click="$store.commit('removeFromCart',product)">Remove</button>
                  <span>{{ product.productQuantity }}</span>
                  <button @click="$store.commit('addToCart', product)">Add</button>
                  
                  <button @click="$store.commit('deleteFromCart', product)">Delete</button>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="box">
      <p>{{cartTotal}}</p>
      <button class="button is-primary" @click="openCheckout">Complete Purchase</button>
    </div>
  </div>
</template>

<script>

export default {
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
    }
  },
  methods: {
    closeCart() {
      this.$store.commit('closeCartTask');
    },
    openCheckout() {
      this.$store.commit('openCheckout');
    },
    spiceChoice() {
      this.$store.commit('spiceChoice');
    },
  },
}
</script>

<style lang="scss">
  
</style>