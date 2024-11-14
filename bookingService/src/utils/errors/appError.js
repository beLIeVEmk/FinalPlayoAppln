const {StatusCodes}=require('http-status-codes')

class AppError extends Error{
    constructor(statusCode=StatusCodes.INTERNAL_SERVER_ERROR,message="Internal Server Error",data={}){
        super()
        this.statusCode=statusCode
        this.message=message
        this.data=data
    }
}

module.exports={AppError}