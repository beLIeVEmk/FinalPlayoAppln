const { StatusCodes } = require("http-status-codes");

class ValidationError extends Error{
    constructor(error){
        super()
        let explanation=[];
        error.errors.forEach(err => {
            explanation.push(err.message)
        });
        this.statusCode=StatusCodes.BAD_REQUEST
        this.message=explanation[0]
        this.data=data
    }
}

module.exports={ValidationError}