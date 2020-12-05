<template>
  <div class="page-wrapper">
    <div class="page-inner">
      <Information />
      <div class="form-area" @submit.prevent="submitRegisterForm">
        <h3 class="form-title">Create an account</h3>
        <form action class="submit-form">
          <div class="form-group">
            <input 
                type="text" 
                :class="errors.username.status ? 'is-invalid form-control' : 'form-control' "
                placeholder="Full Name"
                v-model="username"
                @change="formValidation('username', false, '')"
                @input="formValidation('username', false, '')"
                @blur="formValidation('username', !username, 'Your name field is empty.')"
            >
            <div class="error-message" v-if="errors.username.status">{{errors.username.message}}</div>
          </div>
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
            <button class="custom-btn" type="submit">Register</button>
          </div>
        </form>
        <div class="redirect-link">Already a member ? <router-link to="/login">Login</router-link> here</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import Information from '@/components/common/Information'
import { formValidation } from '../../mixins/validation'
export default {
  mixins: [ formValidation ],
  components: {
    Information
  },
  data(){
    return {
      username: '', // Tanvir (Anyname)
      email: '', // eve.holt@reqres.in
      password: '' // pistol
    }
  },
  methods: {
    submitRegisterForm() {
      // Check submit actionvalidation
      this.formValidation('username', !this.username, 'Your name field is empty.');
      this.formValidation('email', !this.emailRegEx.test(this.email), 'Your email is not correct !');
      this.formValidation('password', this.password.length < 6 || this.password.length > 10 ||  this.password.length === '', this.passValidation())
      
      if(Object.keys(this.errors).every((field) => this.errors[field] === true )){ return; }

      this.submitRegister({
        name: this.username,
        email: this.email,
        password: this.password
      })
    },
    ...mapActions({
      submitRegister: 'register/submitRegister'
    })
  },
  computed: {
    ...mapGetters({
      isSuccess: 'register/isSuccess'
    })
  },
  watch: {
    isSuccess(value){
      if(value){
        this.username = '';
        this.email = '';
        this.password = '';
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