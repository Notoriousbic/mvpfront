<template>
<div id="app">
    <Header></Header>
    <OutterBody></OutterBody>
    <br>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header.vue"
import OutterBody from "../components/OutterBody.vue"
import Footer from "../components/Footer.vue"

    export default {
        components: {
            Header, OutterBody, Footer,
        },
        
    }
</script>

<style scoped>

</style>