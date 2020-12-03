<template>
  <div class="page-wrapper">
    <div class="login-page">
      <h2 class="md-title text-center">Login Page</h2>
      <form class="submit-form" @submit.prevent="submitForm">
        <md-field>
          <label>E-mail</label>
          <md-input v-model="email" autofocus></md-input>
        </md-field>

        <md-field md-has-password>
          <label>Password</label>
          <md-input  v-model="password" type="password"></md-input>
        </md-field>
        <div class="actions md-layout md-alignment-center-space-between">
          <div class="md-body-1">Have'nt account ? <router-link to="/register">Register</router-link></div>
          <md-button type="submit" class="md-raised md-primary">Login</md-button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
export default {
  data(){
    return{
      email: '',
      password: ''
    }
  },
  methods:{
    submitForm(){
      this.submitLogin({
        email: this.email,
        password: this.password
      })
    },
    ...mapActions({
      submitLogin: 'login/submitLogin'
    })
  },
  computed:{
    ...mapGetters({
      isSuccess: 'login/isSuccess'
    })
  },
  watch:{
    isSuccess(value){
      if(value){
        this.$router.push('/')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page-wrapper{
  background: #f5f5f5;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .login-page{
    background: #fff;
    padding: 50px;
    min-width: 30%;
    border-radius: 12px;
    .md-title{
      margin-bottom: 30px;
      font-weight: 600;
    }
  }
  .submit-form{
    width: 100%;
  }
}
</style>