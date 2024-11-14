import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import SignInDto from 'src/dto/signIn.dto';
import SignupDto from 'src/dto/signUp.dto';
import { AuthService } from 'src/services/auth.service';
import { HelperFunctions } from 'src/utils/helperFunctions';

@Controller('auth')
export class AuthController {

    constructor(private readonly helperFunctions:HelperFunctions,
                private readonly authService:AuthService
    ){}

    @HttpCode(201)
    @Post('signup')
    async signUp(@Body() reqBody:SignupDto) {
        try {
            await this.helperFunctions.requestBodyValidation(SignupDto,reqBody);
            const result=await this.authService.signUpUser(reqBody);
            return this.helperFunctions.createResObj(201,result);
        } catch (error) {
            throw this.helperFunctions.createErrResBody(error);
        }
    }

    @HttpCode(200)
    @Post('signIn')
    async signIn(@Body() reqBody:SignInDto) {
        try {
            await this.helperFunctions.requestBodyValidation(SignInDto,reqBody);
            const result=await this.authService.signInUser(reqBody);
            return this.helperFunctions.createResObj(200,result);
        } catch (error) {
            throw this.helperFunctions.createErrResBody(error);
        }
    }
}
