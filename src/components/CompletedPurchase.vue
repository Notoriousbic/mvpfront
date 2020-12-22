<template>
  <div class="view-purchases-wrapper">
    <div id="purchase-box">
      <h1 style="color: green">Completed Purchase!</h1>
      <v-checkbox v-model="checkbox" :color="red" label="Complete"></v-checkbox>
      <small>Time remaining according to contractual agreement to ship</small>

      <circular-count-down-timer
        :initial-value="countdownTimer()"
        :show-negatives="true"
        :seconds-stroke-color="'#6DD964'"
        :minutes-stroke-color="'#D8B527'"
        :hours-stroke-color="'#C48080'"
        :padding="0"
        
      ></circular-count-down-timer>
      <br>
    </div>
    <span>
      {{ "Name: " + purchase[1] + " " + purchase[9] + " " + purchase[2] }}
      <br />
      {{ "Date of Purchase: " + purchase[8] }}
      <br />
      {{ "Email: " + purchase[3] }}
      <br />
      {{ "Postal Code:  " + purchase[4] }}
      <br />
      {{ "Address: " + purchase[6] }}
      <br />
      {{ "Phone Number: " + purchase[5] }}
    </span><br>


    <v-btn
      @click="deletePurchase()"
      v-if="checkbox"
      style="background-color: green; border: 1px solid black"
      class="red--text"
      >Archive Purchase</v-btn
    >
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "completed-purchase",
  methods: {
    countdownTimer() {
      let d= new Date(
        this.purchase[8]
      )
      let t= new Date (
        d.getTime() + (86400 * 1000)
      )
      return Math.floor((t - Date.now()) / 1000 )
    },
    deletefunction() {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/purchase",
          method: "DELETE",
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
  data() {
    return {
      purchases: [],
      checkbox: false,
    };
  },
  props: {
    purchase: {
      type: Array,
    },
  },
};
</script>

<style scoped>
.view-purchases-wrapper {
  height: 100%;
  min-width: 100%;
  border: 3px solid black;
  border-radius: 10px;
  background-color: rgba(0, 128, 0, 0.164);
  display: grid;
  grid-template-rows: .25fr .5fr;
}

</style>