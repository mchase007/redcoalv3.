<template>
  
  <div v-if="isLoggedIn">
    <button @click="test">Load Orders</button>

  <div class="">
    <div v-for="(order, index) in orders">
     <div class="card-content cartProduct box wholeOrder">
       <p>{{index}}</p>
       <p>Reference: {{order.reference}}</p>
       <br>
       <div>
         <p>Name: {{order.userOrder.infor.userName}}</p>
         <p>Contact: {{order.userOrder.infor.userContact}}</p>
         <p>GPS: {{order.userOrder.infor.userGPS}}</p>
         <p>Extra Information: {{order.userOrder.infor.plusInfor}}</p>
      </div>
       <br>
       <div v-for="mealItem in order.userOrder.meal">
         <div class="split">
           	<p>Meal: {{mealItem.meal}}</p>
            <p>Quantity: {{mealItem.quantity}}</p>
            <!-- <p>Price: {{mealItem.price}}</p> -->
            <div v-if="mealItem.addOnQuantity !== 0">
              Banku: {{mealItem.addOnQuantity}}
              <!-- Price: {{mealItem.addOnQuantityPrice}} -->
            </div> 
            <div v-if="mealItem.addOnQuantity2 !== 0">
              Sobolo: {{mealItem.addOnQuantity2}}
              <!-- Price: {{mealItem.addOnQuantityPrice2}} -->
            </div>
         </div>
       </div>
    </div>
    </div>
  </div>
  </div>

  <div v-else>
    <h1>Authorised Access Only</h1>
    <div data-netlify-identity-menu></div>
  </div>
  

</template>

<script>
import axios from "axios"

export default {
  name: "Orders",
  data() {
    return {
      orders: null,
      isLoggedIn: false,
      token: "",
    }
  },
  created() {
    netlifyIdentity.on('init', user => {
      if(user) {
        self.token = user.token.access_token
        self.isLoggedIn = true
      }
    })

    netlifyIdentity.on('login', user => {
      self.token = user.token.access_token
      self.isLoggedIn = true
    })

    netlifyIdentity.on('logout', user => {
      self.isLoggedIn = false
      self.token = ""
      self.orders = null
    })

  },
  methods: {
    test() {
      var config = {
        method: 'get',
        url: '../.netlify/functions/getOrders',
        headers: { 
          'Content-Type': 'application/json'
        },
        };

        const self = this;

        axios(config)
        .then(function (response) {
              console.log("Refreshed")
              let infor = response.data
              self.orders = infor
              console.log(infor);
            })
        .catch(function (error) {
              console.log(error);
            });
        }
    },
}
</script>

<style>

</style>