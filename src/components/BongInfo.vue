<template>
  <div id="show-bong">
    <h1 @click="getBongs()">Show Bongs</h1>
    <div class="bong-container" v-for="product in products" :key="product[3]">
      <h2>Desc: {{ product[1] }}</h2>
      <p>Price: {{ product[2]}}</p>
      <img :src="product[4]" :alt="product[0]" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    getBongs: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/product",
          method: "GET",
        })
        .then((response) => {
          console.log(response);
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  data() {
    return {
      products: [],
    };
  },
};
</script>

<style scoped>
#show-bong {
  height: 100%;
  width: 100%;
  border: 5px solid black;
}

.bong-container {
  height: 100%;
  width: 100%;
  border: 1px solid black;
}
</style>