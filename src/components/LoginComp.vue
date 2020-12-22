<template>
  <div id="login-form">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div id="login-form-box">
      <p>Welcome to Admin Login</p>
      <div id="login-username-1">Username:</div>
      <div id="login-username-2">
        <input class="border-line" type="text" v-model="username" />
      </div>
      <div id="login-password-1">Password:</div>
      <div id="login-password-2">
        <input class="border-line" type="password" v-model="password" />
      </div>
      <v-icon style="color:green" large  @click="loginUser()">mdi-login</v-icon>
    </div>
    <div></div>
  </div>
</template>

<script>
import axios from "axios";
// import cookies from "vue-cookies"
export default {
  name: "LoginComp",

  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {

    backHome : function(){
      this.$router.push("/")
    },
    loginUser: function () {
      this.loginStatus = "Loading";
      axios
        .request({
          method: "POST",
          url: "http://127.0.0.1:5000/api/admin",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            username: this.username,
            password: this.password,
          },
        })
        .then((response) => {
          this.loginStatus = "success";
          this.$router.push("/admin");
          // cookies.set("session", response.data.loginToken);
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
          this.loginStatus = "fail";
          alert("Incorrect username and/or password.  You are now being redirected to the home page...");
          this.$router.push("/");
        });
    },
  },
};
</script>

<style scoped>
#login-form {
  height: 700px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 0.5fr 1fr 0.5fr;
}

#login-form-box {
  border: 10px solid rgba(21, 95, 21, 0.603);
  border-radius: 10px;
  display: grid;
  grid-template-rows: 1fr 0.5fr 0.5fr 0.5fr 0.5fr;
  background-color: rgba(0, 128, 0, 0.034);
}

.border-line {
  border: 1px solid black;
  border-radius: 10px;
  text-align: center;
}
</style>