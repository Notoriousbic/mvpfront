<template>
  <div class="thank-you-wrapper">
    <Header></Header>
    <div><h1 style="color:green">Thank You!</h1></div>
    <p>We thank you for your business!  You will recieve an email with the details of your purchase.</p>
    <small>Click</small><small @click="goSurvey()" style="color:green"> here </small><small>to participate in our feedback survey and potentially win 10% off your next order!</small>
    <spscer></spscer>
    <div id="thank-you-splash"></div>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "../components/Header";
import Footer from "../components/Footer";
export default {
     methods: {
        goSurvey() {
            window.open("https://www.surveymonkey.com/r/GQ9QCVM");

            },
        },
  name: "ThankYou",
  components: {
    Header,
    Footer,
   
  },
}
</script>

<style scoped>
.thank-you-wrapper {
  height: 100%;
  width: 100%;
  /* border: 1px black solid; */
}

#thank-you-splash {
  height: 590px;
  width: 100%;
}
</style>