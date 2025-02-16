<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AuthenticationService from '../../services/AuthenticationSevice';
import bcrypt from 'bcryptjs';
</script>

<script>
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email(value) {
      console.log('email has changed: ', value);
    }
  },
  mounted() {
    setTimeout(() => {

    }, 1000);
  },
  methods: {
    async login() {
      const saltRounds = 10;
      const hashedPassword = bcrypt.hashSync(this.password, saltRounds);
      const response = await AuthenticationService.login({
        email: this.email,
        password: hashedPassword
      })

      console.log("Message: " + response.data.message);

      if (response.status === 200) {
        localStorage.username = this.email;
        //localStorage.setItem('username', this.email);
        localStorage.isAdmin = response.data.isAdmin;

        this.$router.push('/');

        //window.location.reload(); // refresh the page
      } else {
        alert("Alert: " + response.data.message);
      }
    }
  }
}
</script>


<template>
  <div class="container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="InputEmail1">Email address</label>
        <input type="email" class="form-control" id="InputEmail1" v-model="email" aria-describedby="emailHelp"
          placeholder="Enter email" required>
      </div>
      <div class="form-group">
        <label for="InputPassword1">Password</label>
        <input type="password" class="form-control" id="InputPassword1" v-model="password" placeholder="Password"
          required>
      </div>

      <button type="submit" @click="login" class="btn btn-primary" id="login-btn">Login</button>
    </form>
  </div>
</template>

<style scoped>
/* @import "../../assets/site.css"; */
#login-btn {
  background: #e6c4bb;
  border-color: #e6c4bb;
  padding: 12px 20px;
}
</style>
