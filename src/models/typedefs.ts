import { gql } from "apollo-server-express";
const { makeExecutableSchema } = require('graphql-tools');
import {resolvers} from "./resolver";
export const typeDefs = gql`
 type Query {
    hello: String!
    retrieveReservation:[Reservation!]
    retrieveReservationById(id:String!) : Reservation!
  }
  type Reservation{
  id: ID!
  guestName:String
  hotelName:String
  arrivalDate:String
  departureDate:String
  }
  type Mutation {
    createReservation(guestName:String!,hotelName:String!,arrivalDate:String!,departureDate:String!): Reservation!
  }
  `;
 // const schema = makeExecutableSchema({ typeDefs, resolvers });
//module.exports = schema;