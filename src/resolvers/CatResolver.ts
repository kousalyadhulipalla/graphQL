// import { Resolver, Query, Mutation, Arg}  from "type-graphql";
// import { Reservation } from "../models/Reservation";
// import mongoose, { Schema } from 'mongoose';
// @Resolver()
// class ReservationResolver{
//    @Mutation
//    public async createReservation(@Arg("data") reservationData:Reservation): Promise<Reservation>{

//     const kitty = new Reservation();
//     kitty.guestName=reservationData.guestName;
//     kitty.hotelName=reservationData.hotelName;
//     var schema = new Schema({
//     guestName: String, hotetlName:String
// });
//     mongoose.model("Reservation",kitty);
//     await kitty.save();
//     console.log(kitty); 
//     return kitty;
//    }
// }
// export {ReservationResolver};


