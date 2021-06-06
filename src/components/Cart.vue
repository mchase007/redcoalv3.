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
                      <input type="radio" name="question">
                        Yes
                      </label>
                      <label class="radio">
                      <input type="radio" name="question">
                        No
                      </label>
                </div>
</div>

                <div>
                  <button @click="$store.commit('removeFromCart',product)">Remove</button>
                  <span>{{ product.productQuantity }}</span>
                  <button @click="$store.commit('addToCart', product)">Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div v-if="cart">{{cartTotal}}</div> -->

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
    }
  },
}
</script>

<style lang="scss">
  // .drawer-background {
  //   border: 2px solid blueviolet;
  //   width: 100%;
  //   height: 100vh;
  //   position: absolute;
  //   left: 0;
  //   top: 0;
  //   z-index: 100;
  //   display: none;
  //   transition: display 2s;

  //   &.show {
  //     display: block;
  //   }
  // }

  .drawer {
    width: 50%;
    height: 100vh;
    background-color: cornflowerblue;
    position: fixed;
    top: 0;
    right: -105vw;
    transition: left 2s;
    z-index: 101;
    // overflow-y: scroll;
    transition: right 1s;

    &.open {
      // display: block;
      right: 0;
    }
  }

</style>