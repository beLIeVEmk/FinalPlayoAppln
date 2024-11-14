import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

class SignInDto{
    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

    @IsString()
    @IsNotEmpty()
    role:string
}

export default SignInDto