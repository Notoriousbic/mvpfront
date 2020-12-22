<template>
  <div id="admin-page">
    <Header></Header>
    <br>
    <SeeCustomers></SeeCustomers>
    <ViewPurchases></ViewPurchases>
    <Footer></Footer>
    
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import ViewPurchases from "../components/ViewPurchases.vue"
import SeeCustomers from "../components/SeeCustomers.vue"


export default {
  name: "AdminPage",
  components: {
    Header,
    Footer,
    ViewPurchases,
    SeeCustomers,

  },
};
</script>

<style lang="scss" scoped>
#admin-page {
}
</style>