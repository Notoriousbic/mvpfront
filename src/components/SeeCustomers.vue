<template>
  <div class="see-customers-wrapper">
    <div id="see-customer-title-1">
      <h1>See Customers</h1>
      <v-icon style="color:green" @click="getCustomers()">mdi-eye-check-outline</v-icon>
      <div
        class="customer-wrapper"
        v-for="customer in customers"
        :key="customer"
      >
    <p>{{customer[4]}}</p>
     <p>{{customer[6]}}</p>
      <p>{{customer[1]}}</p>
       <p>{{customer[3]}}</p>
       
       <br>
       
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SeeCustomers",
  methods: {
    getCustomers: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/user",
          method: "GET",
        })
        .then((response) => {
          console.log(response);
          this.customers = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      customers: [],
    };
  },
};
</script>

<style scoped>
.see-customers-wrapper {
  height: 100%;
  width: 100%;
  border: 3px solid black;
  border-radius: 10px;
  background-color: rgba(0, 128, 0, 0.164);
  grid-template-rows: 0.25fr 0.5fr 0.5fr 0.5fr;
  /* display: grid; */
  text-align: center;
}
.customer-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}
</style>