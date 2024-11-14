const {StatusCodes}=require('http-status-codes')

class ServiceError extends Error{
    constructor(statusCode=StatusCodes.INTERNAL_SERVER_ERROR,message,data){
        super()
        this.statusCode=statusCode
        this.message=message
        this.data=data
    }
}

module.exports={ServiceError}