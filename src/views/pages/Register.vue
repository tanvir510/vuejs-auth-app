<template>
  <div class="page-wrapper">
    <div class="page-inner">
      <div class="info-area">
        <div class="info-inner">
          <h3 class="info-title">Chybuzz</h3>
          <p class="info-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt Lorem Ipsum</p>
          <button class="custom-btn">View More</button>
        </div>
      </div>
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
export default {
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
    height: 100vh;
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
        .info-area{
          flex: 0 0 40%;
          max-width: 40%;
          background: #E57301;
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          position: relative;
          left: -80px;
          padding: 50px 20px;
          
          .info-inner{
            .info-title{
              color: #fff;
              font-size: 24px;
            }
            .info-text{
              color: #fff;
              line-height: 23px;
              font-size: 15px;
              padding: 10px 10px;

            }
            .custom-btn{
              max-width: 150px;
              display: inline-block;
              padding: 10px 10px;
              background: #fff;
              color: #E57301;
            }
          }
        }
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