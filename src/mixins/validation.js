export const formValidation = {
    data(){
        return {
            emailRegEx: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
            errors: {
                email: {
                    status: false,
                    message: ''
                },
                password: {
                    status: false,
                    message: ''
                },
                username: {
                    status: false,
                    message: ''
                }
            }
        }
    },
    methods: {
        // Form validaion global function
        formValidation(input, status, message){
            this.errors[input] = { status, message }
        },
        // Password validation conditions
        passValidation(){
            if(!this.password){
                return 'Your password field is empty.'
            } else if(this.password.length < 6){
              return 'Your password must be greater than 8 characters'
            }
        },
    }
}

