<template>
  <div id="app">
    <Header></Header>
    <br>
    <OutterBody></OutterBody>
  </div>
</template>

<script>
import Header from "./components/Header.vue"
import OutterBody from "./components/OutterBody.vue"

export default {
  name: "App",
  components: {
    Header, OutterBody,

  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
