<template>
  <div id="body">
    <div id="show-bong"></div>
    <div id="show-info">
      <BongInfo></BongInfo>
    </div>
  </div>
</template>

<script>
import BongInfo from "./BongInfo.vue";

export default {
  components: {
    BongInfo
  }
};
</script>

<style scoped>
#body {
  height: 100%;
  width: 100%;
  /* border: 5px solid black; */
  /* background-color: rgba(0, 128, 0, 0.589); */
  /* display: grid; */
  /* grid-template-columns: 0.5fr 1fr; */
  background-color: rgba(0, 128, 0, 0.164);

}

.router-link {
  color: green;
}
</style>
