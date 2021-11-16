import query from "./query";
import mutation from "./mutation";
import { config } from "dotenv";
import { MongoClient } from "mongodb";
import express from "express";
import { graphqlHTTP } from "express-graphql";
import { GraphQLSchema } from "graphql";
import state from "./state";

config();

const schema = new GraphQLSchema({
  query,
  mutation
});
const app = express();
const HTTP_PORT = 443;
const PORT: number = Number(process.env.PORT) || HTTP_PORT;
const client = new MongoClient(
  process.env.DB_CONNECTION as string, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

state.client = client

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

console.log(PORT)
console.log(process.env.DB_CONNECTION)

client.connect(() => {
  app.listen(PORT, () => {
    console.log(`Local -> http://localhost:${PORT}/graphql`);
  });
});
