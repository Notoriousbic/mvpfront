<template>
  <div class="add-bong-wrapper">
    <h1>Add Inventory</h1>
    <v-col cols="12" sm="6" md="4" />
    <v-text-field
      v-model="description"
      label=""
      placeholder="Enter in item name:"
      filled
    ></v-text-field>
      <v-text-field
      v-model="name"
      label=""
      placeholder="Enter in item description:"
      filled
    ></v-text-field>
    <v-text-field
      v-model="price"
      label=""
      placeholder="Enter in item price:"
      filled
    ></v-text-field>
    <v-text-field
      v-model="image"
      label=""
      placeholder="Enter in image https://:"
      filled
    ></v-text-field>
    <v-text-field
      v-model="salescode"
      label=""
      placeholder="Enter in salescode:"
      filled
    ></v-text-field>
    <v-text-field
      v-model="quantity"
      label=""
      placeholder="Enter in quantity:"
      filled
    ></v-text-field>
    <v-icon style="color:green" large @click="insertItem()">mdi-database-plus-outline</v-icon>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddBong",
  data() {
    return {
      name: "",
      description: "",
      price: "",
      image: "",
      SalesCode: "",
      quantity: "",
    };
  },
  methods: {
    insertItem: function () {
      this.loginStatus = "Loading";
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/product",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            name: this.name,
            description: this.description,
            price: this.price,
            image: this.image,
            SalesCode: this.SalesCode,
            quantity: this.quantity,
          },
        })
        .then((response) => {
          this.loginStatus = "success";
            console.log(response);
            alert("Item inserted to database.  Congrats!");

          
        })
        .catch((error) => {
            console.log(error);
            this.loginStatus = "fail";
            alert("Item not inserted.  You are now being redirected to the home page...");
            this.$router.push("/admin");
        });
    },
  },
};
</script>

<style scoped>
.add-bong-wrapper {
  height: 100%;
  width: 100%;
  border: 3px solid black;
  border-radius: 10px;
  background-color: rgba(0, 128, 0, 0.164);
}
</style>