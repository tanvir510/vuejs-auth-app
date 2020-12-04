<template>
    <div class="navigation-area">
        <div class="container">
            <div class="navigation-wrapper">
                <div class="site-branding">
                    <router-link to="/">ChyBuzz</router-link>
                </div>
                <nav class="navbar-wrapper">
                    <ul class="navbar-area">
                        <li class="nav-list">
                            <router-link v-if="logedIn" to="/" class="nav-item">Home</router-link>
                            <router-link v-if="logedIn" to="/about" class="nav-item">About</router-link>
                            <router-link v-if="logedIn" to="/contact" class="nav-item">Contact</router-link>
                            <router-link v-if="!logedIn" to="/login" class="nav-item">Login</router-link>
                            <a v-if="logedIn" @click="logoutHandler()" class="nav-item logout">Logout</a>
                            <router-link v-if="!logedIn" to="/register" class="nav-item">Register</router-link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
export default {
    methods:{
        logoutHandler(){
            this.logout()
        },
        ...mapActions({
            logout: 'login/submitLogout'
        })
    },
    computed: {
        ...mapGetters({
            logedIn: 'login/isLogedIn',
        })
    },
    watch:{
        logedIn(value){
            if(!value){
                this.$router.push('/login')
            }
        }
    }
    
}
</script>

<style lang="scss" scoped>
.navigation-area{
    background: #fff;
    box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, .1);
    -webkit-box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, .1);
    -moz-box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, .1);
    .navigation-wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
}
.site-branding{
    a{
        padding: 26px 0px;
        color: #E57301 !important;
        display: inline-block;
        font-weight: 600;
        font-size: 16px;
    }
}
.navbar-area{
    .nav-list{
        .nav-item{
            padding: 26px 20px;
            color: #606060;
            display: inline-block;
            font-weight: 400;
            font-size: 16px;
            text-decoration: none;
            &.logout{
                cursor: pointer;
            }
        }
    }
}
</style>