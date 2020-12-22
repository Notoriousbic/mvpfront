<template>
  <div id="header">
    <v-toolbar  app height="100"
      dark
      prominent
      src="https://yw553ftvhw1iqegz29fycoyw-wpengine.netdna-ssl.com/wp-content/uploads/2019/02/GettyImages-6972322821.jpg"
    >
    

      <v-toolbar-title @click="goHome()">
        <span id="bongmart">Bong</span> 
        <span id="gq">MART</span>
       
      </v-toolbar-title>

      <v-spacer></v-spacer>

        <div id="icon-grid">
        
          <div id="1">
          <v-icon medium @click="goLogin()" >mdi-account-cog</v-icon>  
          </div>
          <div id="2">
          <v-icon @click="goStats()" >mdi-poll</v-icon>
          </div>
          <div id="3">
          <v-icon @click="goPurchase()" >mdi-timetable</v-icon>
          </div>
          
          <div id="4">
          <v-icon @click="goHome()" >mdi-home</v-icon>
          </div>
          
        </div>



    </v-toolbar>
  </div>
</template>

<script>
export default {
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goHome() {
      this.$router.push("/");
    },
    goStats() {
      this.$router.push("/statspage");
    },
    goPurchase() {
      this.$router.push("/viewpurchases");
    },
  },
};
</script>

<style scoped>
#header {
  border: 3px solid black;
  /* border-radius: 10px; */
}
#bongmart {
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
}

#gq {
  color: green;
}

#icon-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  /* align-items: right; */

}
</style>
