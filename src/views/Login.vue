<template>
    <div>
        <Header></Header>
        <LoginComp></LoginComp>
        <Footer></Footer>


       
    </div>
</template>

<script>
import Header from "../components/Header.vue"
import LoginComp from "../components/LoginComp.vue"
import Footer from "../components/Footer.vue"


    export default {
        name: "LoginPage",
        components: {
            Header, LoginComp, Footer
        },
    }
</script>

<style lang="scss" scoped>

</style>