<template>
  <div class="view-purchases-wrapper">
    <h1>View Completed Purchases</h1>
    <!-- <v-icon @click="viewPurchases()" style="color: green"
      >mdi-eye-check-outline</v-icon
    > -->
    <div class="purchase-wrapper" v-for="purchase in purchases" :key="purchase">
      <div class="view-purchases-body">
        <completed-purchase :purchase="purchase"/>
       
    </div>
    </div>
  </div>
</template>

<script>
import CompletedPurchase from './CompletedPurchase.vue';
import axios from "axios";
export default {
  components: {
    CompletedPurchase
  },
  methods: {
    viewPurchases() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/purchase",
          method: "GET",
        })
        .then((response) => {
          console.log(response);
          this.purchases = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  

  },
    mounted: function(){
      this.viewPurchases()
    },
  data() {
    return {
      purchases: []
    }
  },
  
};
</script>

<style scoped>
.purchases-wrapper {
  height: 500px;
  min-width: 100%;
  border: 3px solid black;
  border-radius: 10px;
  background-color: rgba(0, 128, 0, 0.164);
  display: grid;
  flex-wrap: wrap;
}

.column
.view-purchases-wrapper{
  border: 3px solid black;
  border-radius: 10px;
  height: 100%;
}
.h{
  border: 3px solid black;
}




</style>