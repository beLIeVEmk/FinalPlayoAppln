export const CONSTANTS={
    msgValidation:{
        name:"name should be a non-empty string",
        password:"password should be a non-empty string",
        email:"Please enter valid email",
        address:"address should be a non-empty string",
        role:"role should be a non-empty string",
        userExists:"user already exist",
        invalidCredentials:"Invalid credentials"
    },
    dtoFields:{
        SignupDto:["name","email","address","role","password"],
        SignInDto:["email","password","role"]
    },
    errorCodes:{
        11000:(key)=>{return `Field ${key} already exists`}
    }
}