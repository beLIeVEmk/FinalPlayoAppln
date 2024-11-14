import { IsEmail, IsNotEmpty, IsOptional, IsString } from "class-validator";

class SignupDto{
    @IsString()
    @IsNotEmpty()
    name:string

    @IsString()
    @IsNotEmpty()
    password:string

    @IsEmail()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsOptional()
    address:string

    @IsString()
    @IsNotEmpty()
    role:string
}

export default SignupDto