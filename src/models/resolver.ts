import { Reservation } from "./Reservation";
export const resolvers = {
    Query: {
        retrieveReservation: () => Reservation.find(),
        retrieveReservationById:({id})  => {Reservation.findById(id)}
    },
    Mutation:{
    createReservation: async (_,{guestName,hotelName,arrivalDate,departureDate}) =>{
    const reser = new Reservation({guestName,hotelName,arrivalDate,departureDate});
    await reser.save();
    console.log(reser); 
    return reser;
}
    }
 };

  //module.exports = resolvers;