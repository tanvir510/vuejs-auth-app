<template>
  <div class="page-wrapper">
    <div class="page-inner">
      <Information />
      <div class="form-area">
        <h3 class="form-title">Login your account</h3>
        <!-- Login form start from here -->
        <form action class="submit-form" @submit.prevent="submitForm">
          <div class="form-group">
            <input 
              type="email"
              placeholder="Enter email"
              :class="errors.email.status ? 'is-invalid form-control' : 'form-control' "
              @input="formValidation('email', false, '')"
              @change="formValidation('email', false, '')"
              @blur="formValidation('email', !emailRegEx.test(email), 'Your email is not correct !')"
              v-model="email" 
            >
            <div class="error-message" v-if="errors.email.status">{{errors.email.message}}</div>
          </div>
          <div class="form-group">
            <input 
              type="password"
              placeholder="Enter password"
              :class="errors.password.status ? 'is-invalid form-control' : 'form-control' "
              @input="formValidation('email', false, '')"
              @change="formValidation('email', false, '')"
              @blur="formValidation('password', !password || password.length < 6 || password.length > 10, passValidation())"
              v-model="password" 
            >
            <div class="error-message" v-if="errors.password.status">{{errors.password.message}}</div>
          </div>
          <div class="form-group">
            <button class="custom-btn" type="submit">Login</button>
          </div>
        </form>
        <!-- Login form end from here -->
        <div class="redirect-link">You don't have account ? <router-link to="/register">Register</router-link> here</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex'
import Information from '@/components/common/Information'
import { formValidation } from '../../mixins/validation'
export default {
  mixins: [ formValidation ],
  components: {
    Information
  },
  data(){
    return{
      email: '', // eve.holt@reqres.in
      password: '', // cityslicka
    }
  },
  methods:{
    submitForm(){
      // Check submit actionvalidation
      this.formValidation('email', !this.emailRegEx.test(this.email), 'Your email is not correct !');
      this.formValidation('password', this.password.length < 6 || this.password.length > 10 ||  this.password.length === '', this.passValidation())
      
      if(Object.keys(this.errors).every((field) => this.errors[field] === true )){ return; }

      // If validation is okay submitLogin action call
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
    height: calc(100vh - 72px);
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f5f5;

    .page-inner{
        max-width: 700px;
        border-radius: 10px;
        box-shadow: 0 0 35px rgba(0, 0, 0, 0.1);
        background: #fff;
        padding: 40px;
        width: 100%;
        display: flex;
        flex-wrap: wrap;

        .form-area{
          flex: 0 0 60%;
          max-width: 60%;

          .form-title{
            font-size: 24px;
            font-weight: 400;
            line-height: 30px;
            text-align: center;
            margin-bottom: 20px;
          }
        }
    }
}
</style>