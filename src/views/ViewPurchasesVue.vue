<template>
    <div>
        <Header></Header>
        <view-purchases></view-purchases>
        <Footer></Footer>
    </div>
</template>

<script>
import Footer from "../components/Footer"
import Header from "../components/Header"
import ViewPurchases from "../components/ViewPurchases"
    export default {
        name: "view-purchase",
        components: {
            Footer, Header, ViewPurchases
        },
    }
</script>

<style scoped>

</style>