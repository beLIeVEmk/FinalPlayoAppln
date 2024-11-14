import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { config } from "src/config/config";
import SignInDto from "src/dto/signIn.dto";
import SignupDto from "src/dto/signUp.dto";
import { UserDocument, UserModel } from "src/schema/auth.schema";
import { CONSTANTS } from "src/utils/constants";
import { HelperFunctions } from "src/utils/helperFunctions";


@Injectable()
export class AuthService{
    constructor(@InjectModel(UserModel) private readonly userModel:Model<UserDocument>,
                private readonly helperFunctions:HelperFunctions){}

    async signUpUser(signupBody:SignupDto){
        try {
            if(await this.userModel.findOne({$and:[{email:signupBody.email,role:signupBody.role}]})){
                throw new BadRequestException(CONSTANTS.msgValidation.userExists);
            }
            let userDetails=await this.userModel.create(signupBody);
            delete userDetails['password'];
            return userDetails;
        } catch (error) {
            throw error
        }
    }

    async signInUser(signInBody:SignInDto){
        try {
            let userDetails=await this.userModel.findOne({$and:[{email:signInBody.email,role:signInBody.role}]});
            if(!userDetails){
                throw new BadRequestException(CONSTANTS.msgValidation.invalidCredentials);
            }
            if(!await this.helperFunctions.checkPassword(signInBody.password,userDetails.password)){
                throw new BadRequestException(CONSTANTS.msgValidation.invalidCredentials);
            }
            delete userDetails.password;
            const token=await this.helperFunctions.createToken(userDetails,config.jwt.secretKey,config.jwt.expiryTime);
            return token;
        } catch (error) {
            throw error;
        }
    }
}