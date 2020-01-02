<template>
  <form class="form">
    <div>
      {{ currentUser }}
    </div>
    <div class="form-group">
      <label>Email</label>
      <input
        type="email"
        class="form-control"
        id="email"
        placeholder="Enter Email"
        v-model="email"
      />
    </div>
    <div class="form-group">
      <label>Password</label>
      <input
        type="password"
        class="form-control"
        id="password"
        placeholder="Enter Password"
        v-model="password"
      />
    </div>

    <button type="button" class="btn btn-primary" @click.prevent="signIn()">
      sign in
    </button>
    <button type="button" class="btn btn-danger" @click.prevent="signOut()">
      sign out
    </button>
  </form>
</template>

<script>
import Firebase from "firebase";
import { store } from "../store/stores.js"

Firebase.auth().onAuthStateChanged(function(user){
  if (user) {
    store.dispatch('setUser', user)
  } else {
    store.dispatch('setUser', null)
  }
});
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signIn() {
      var email = this.email;
      var pass = this.password;

      Firebase.auth()
        .signInWithEmailAndPassword(email, pass)
        .catch(function(error) {
          var errorCode = error.code;
          var errorMsg = error.message;
          if (errorCode == "auth/wrong-password") {
            alert("wrong password");
          } else {
            alert(errorMsg);
          }
        });
    },
    signOut() {
      Firebase.auth()
        .signOut()
        .then(function(error) {
          alert("logged out");
        })
        .catch(function(error) {
          alert("error.");
        });
    }
  },
  computed: {
    currentUser() {
      return this.$store.getters.currentUser
    }
  }
};
</script>
