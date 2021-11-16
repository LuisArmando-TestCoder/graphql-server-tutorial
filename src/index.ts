import query from "./query";
// import mutation from "./mutation";
import { config } from "dotenv";
import { MongoClient } from 'mongodb';
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";

config();

const schema = new GraphQLSchema({
  query,
  // mutation
});
const app = express();
const HTTP_PORT = 443;
const PORT = process.env.PORT || HTTP_PORT;

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
console.log(`http://localhost:${PORT}`);
console.log(process.env.DB_CONNECTION);

const client = new MongoClient(
  process.env.DB_CONNECTION as string
);

client.connect(err => {
  app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
