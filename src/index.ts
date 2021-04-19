import { ApolloServer } from "apollo-server-express";
import express from "express";
import mongoose from 'mongoose';
import { typeDefs } from "./models/typedefs";
const schema = require('./models/typedefs');
import {resolvers} from "./models/resolver";
import bodyParser from "body-parser";
import { graphqlExpress } from "graphql-server-express";

 const startServer= async ()=>{
  const app = express();
  const server = new ApolloServer({typeDefs,resolvers});
  server.applyMiddleware({app});
  await mongoose.connect('mongodb://localhost:27017/Reservation',{useNewUrlParser:true, useUnifiedTopology:true})
  .catch(err => console.log(err))
  // app.use('/graphql', bodyParser.json(), graphqlExpress({ schema:schema  }));
  app.listen({port:4000}, () =>
  console.log(`🚀  Server ready `) 
  );
 }

startServer();

