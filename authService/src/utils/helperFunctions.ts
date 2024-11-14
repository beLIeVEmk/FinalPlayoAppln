import { BadRequestException, HttpException, HttpStatus } from "@nestjs/common";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { CONSTANTS } from "./constants";
import { JsonWebTokenError } from "@nestjs/jwt";
const bcrypt = require('bcrypt');
const jwt=require('jsonwebtoken')

export class HelperFunctions{

    createToken(userObj,secretKey,expiry){
        try {
            const token=jwt.sign(userObj.toJSON(),secretKey,{expiresIn:expiry})
            return token;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
    createResObj(statusCode,data,message="Success"){
        return {
            statusCode,
            message,
            data
        }
    }

    async requestBodyValidation(dto:any,body:any){
        try{
          const requestFields=Object.keys(JSON.parse(JSON.stringify(body)));
          if(requestFields.length==0){
            throw new BadRequestException('Request cannot be empty');
          }
    
          requestFields.forEach((fieldNames)=>{
            if(!CONSTANTS.dtoFields[dto.name].includes(fieldNames)){
              
              throw new BadRequestException(`No valid field named ${fieldNames}`)
            }
          })
          const userDto = plainToClass(dto, body);
          const errors = await validate(userDto);
          
          if(errors.length>0){
            throw new BadRequestException({'field':errors[0].property});
          }  
      }catch(error){
        throw error;
      }
    }

    async checkPassword(plainPassword, hashedPassword) {
        try {
          const isMatch = await bcrypt.compare(plainPassword, hashedPassword);
          if (isMatch) {
            return true;
          } else {
            return false;
          }
        } catch (error) {
          console.error('Error while checking password:', error);
          throw error;
        }
    }
    createErrResBody(error){
        if(error?.code || error?.response?.field){
            const code=error.code
            if(code){
              if(code==11000)
                return new HttpException({ statusCode: HttpStatus.BAD_REQUEST, message: CONSTANTS.errorCodes[code](Object.keys(error?.keyValue)[0]),data:{} }, HttpStatus.BAD_REQUEST);
            }else{
              return new HttpException({ statusCode: HttpStatus.BAD_REQUEST ,message: CONSTANTS.msgValidation[error['response']['field']],data:{}}, HttpStatus.BAD_REQUEST);
            }
        }
        if(error instanceof HttpException){
          return new HttpException({ statusCode: error['status'], message: error.message ,data:{}}, error['status']);
        }
        if(error instanceof JsonWebTokenError){
          return new HttpException({ statusCode: 401, message: 'Invalid token or token expired' ,data:{}}, HttpStatus.UNAUTHORIZED);
        }
        return new HttpException({ statusCode: 500, message: 'Internal Server Error' ,data:error}, HttpStatus.INTERNAL_SERVER_ERROR);
      
      }
}