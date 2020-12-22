<template>
  <div class="show-bong">
    <p>If you're 18+ click the cannabis icon below to see products</p>
    <v-icon style="color: green" large @click="getBongs()">mdi-cannabis</v-icon>
    <div class="bong-container" v-for="product in products" :key="product[3]">
      <div id="description-box">
        <div id="desc-1"></div>
        <div id="desc-2">
          <h2>{{ product[1] }}</h2>
        </div>
        <div id="desc-3">{{ product[0] }}</div>
      </div>
      <div id="price-box">
        <div id="price-1"></div>
        <div id="price-2">
          <p>Price: {{ product[2] }}</p>
        </div>
        <div id="price-3"></div>
      </div>
      <div id="buy-button">
        <div id="buy-2">
          <v-app id="inspire">
            <v-row justify="center">
              <v-dialog v-model="dialog" persistent max-width="100%">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="success" dark v-bind="attrs" v-on="on">
                    Buy Now!
                  </v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline green--text">Finalize purchase!</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            color="black"
                            v-model="first_name"
                            label="Legal first name*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            color="black"
                            v-model="middle_name"
                            label="Legal middle name*"
                            hint="example of helper text only on focus"
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="4">
                          <v-text-field
                            color="black"
                            v-model="last_name"
                            label="Legal last name*"
                            hint=""
                            persistent-hint
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            color="black"
                            v-model="email"
                            label="Email*"
                            required
                          >
                          </v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            color="black"
                            v-model="address"
                            label="Address*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12">
                          <v-text-field
                            color="black"
                            v-model="postal_code"
                            label="PostalCode*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6">
                          <v-text-field
                            color="black"
                            v-model="phone_number"
                            label="Phone Number*"
                            required
                          ></v-text-field>
                        </v-col>
                        <v-col cols="6" sm="6">
                          <v-select
                            color="black"
                            :items="['Yes', 'No']"
                            label="Over 18?*"
                            required
                          ></v-select>
                        </v-col>
                      </v-row>
                    </v-container>
                    <small style="color: red">*indicates required field</small>
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn @click="closeForm()" color="green darken-1" text>
                      Close
                    </v-btn>
                    <v-btn
                      @click="addPurchase(), gotoThanks()"
                      color="green darken-1"
                      text
                    >
                      Save
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-row>
          </v-app>
        </div>
      </div>
      <img :src="product[4]" :alt="product[0]" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  methods: {
    backHome: function () {
      this.$router.push("/");
    },
    closeForm: function () {
      this.$router.go();
    },
    getBongs: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/product",
          method: "GET",
        })
        .then((response) => {
          console.log(response);
          this.products = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    addPurchase: function () {
      axios
        .request({
          url: "http://127.0.0.1:5000/api/purchase",
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          data: {
            first_name: this.first_name,
            middle_name: this.middle_name,
            last_name: this.last_name,
            email: this.email,
            address: this.address,
            phone_number: this.phone_number,
            postal_code: this.postal_code,
            is_eighteen: this.is_eighteen,
          },
        })
        .then((response) => {
          console.log(response);
          this.first_name = response.data;
          this.middle_name = response.data;
          this.last_name = response.data;
          this.email = response.data;
          this.phone_number = response.data;
          this.postal_code = response.data;
          this.address = response.data;
          this.is_eighteen = response.data;
          this.$router.push("/thankyou");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    methods: {
      gotoThanks() {
        this.$router.push("/thankyou");
      },
    },
  },
  data() {
    return {
      products: [],
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      postal_code: "",
      address: "",
      is_eighteen: "",
    };
  },
};
</script>

<style>
.show-bong {
  height: 100%;
  width: 100%;
  border: 1px solid black;
  border-radius: 10px;
  min-height: 700px;
  display: grid;
  
}

/* .column {
  flex: 50%;
  padding: 20px;
} */



.bong-container {
  height: 100%;
  width: 100%;
  /* border: 1px solid black; */
  max-height: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  border-radius: 10px;
  /* flex-wrap: flex; */

}

@media screen and (min-width: 700px){
  .bong-container {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}



img {
  max-width: 500px;
  /* height: 100%; */
  border: solid 2px black;
  border-radius: 10px;
  max-height: 200px;
  width: 100%;
  object-fit: fill;
}

#description-box {
  background-color: rgba(16, 245, 16, 0.164);
  border: solid 2px black;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  border-radius: 10px;
}

#price-box {
  border: 2px solid black;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  border-radius: 10px;
  background-color: rgba(16, 245, 16, 0.164);
}

#buy-button {
  border: 2px solid black;
  align-content: center;
  /* color: red; */
  display: grid;
  align-items: center;
  justify-items: center;
  border-radius: 10px;
  background-color: rgba(0, 128, 0, 0.164);
}

.v-application--wrap {
  min-height: 0 !important;
}
</style>