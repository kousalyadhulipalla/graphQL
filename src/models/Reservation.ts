import mongoose, { Schema } from 'mongoose';

var schema = new Schema({
    guestName: String,hotelName:String, arrivalDate:String,departureDate:String
});
export const Reservation = mongoose.model("Reservation",schema);