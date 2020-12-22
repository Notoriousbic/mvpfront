<template>
  <div id="footer">
    <div id="developed-with">
      <div>
        <small>developed with </small>
      </div>
        <v-icon @click="goVScode()">mdi-microsoft-visual-studio</v-icon>
      <small><v-icon @click="goPython()">mdi-language-python</v-icon></small>
      <v-icon @click="goHtml()">mdi-language-html5</v-icon>
      <v-icon @click="goJS()">mdi-vuetify</v-icon>
    </div>
    <div>
      <p @click="goProfile()">&copy;2020 hammerbat productions</p>
      <small @click="goProfile()">(click me!)</small>
    </div>

    <div id="find-us">
      <div>
        <small>find us </small>
      </div>

      <v-icon @click="goTwitter()">mdi-twitter</v-icon>
      <v-icon @click="goFacebook()">mdi-facebook</v-icon>
      <v-icon @click="goReddit()">mdi-reddit</v-icon>
      <v-icon @click="goLinkedin()">mdi-linkedin</v-icon>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    goLogin() {
      this.$router.push("/login");
    },
    goFacebook() {
      window.open("https://www.facebook.com");
    },

    goReddit() {
      window.open("https://www.reddit.com");
    },
    goTwitter() {
      window.open("https://www.twitter.com");
    },
    goLinkedin() {
      window.open("https://www.linkedin.com");
    },
    goVScode() {
      window.open("https://code.visualstudio.com/");
    },
    goProfile() {
      window.open("http://myfullstackportfolio.gq");
    },
    goPython() {
      window.open("http://python.org");
    },
    goJS() {
      window.open("http://javascript.com");
    },
    goHtml() {
      window.open("http://html.com");
    },
  },
};
</script>

<style scoped>
#footer {
  height: 75px;
  width: 100%;
  border: 3px solid black;
  background-color: rgba(21, 95, 21, 0.603);
  /* border-radius: 10px; */
  text-align: center;
  text-decoration: none;
  align-items: center;
  justify-items: center;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  position: bottom;
}

@media screen and (max-width: 700px) {
  #footer {
    border-radius: 10px;
  }
}
</style>