<template>
  <div class="page-wrapper">
    <div class="page-inner">
      <Information />
      <div class="form-area">
        <h3 class="form-title">Create an account</h3>
        <form action class="submit-form">
          <div class="form-group">
            <input 
                type="text" 
                class="form-control" 
                placeholder="Full Name"
                v-model="name"
            >
            <!-- <div class="error-message">Your password must be greater than 8 characters</div> -->
          </div>
          <div class="form-group">
            <input 
                type="email" 
                class="form-control" 
                placeholder="Email Address"
                v-model="email"
            >
          </div>
          <div class="form-group">
            <input 
                type="password" 
                class="form-control" 
                placeholder="Enter Password"
                v-model="password"
            >
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
import Information from '@/components/common/Information'
export default {
  components: {
    Information
  },
  data(){
    return {
      name: '',
      email: '',
      password: ''
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