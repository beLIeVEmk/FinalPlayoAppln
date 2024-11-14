const { StatusCodes } = require('http-status-codes');
const {Booking}=require('../models/index')
const { AppError } = require('../utils/errors/appError')
const { ValidationError } = require('../utils/errors/validationError')

class BookingRepository{

    async create(data){
        try {
            return await Booking.create(data);
        } catch (error) {
            if(error.name=='SequelizeValidationError'){
                throw new ValidationError(error)
            }else{
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR,"Cannot create booking");
            }
        }
    }

    async updateBooking(){
        try {
            
        } catch (error) {
            if(error.name=='SequelizeValidationError'){
                throw new ValidationError(error)
            }else{
                throw new AppError(StatusCodes.INTERNAL_SERVER_ERROR,"Cannot create booking");
            }
        }
    }
}

module.exports={BookingRepository}