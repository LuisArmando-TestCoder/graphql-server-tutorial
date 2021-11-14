/**
 * Setting up SchemaBuilder
 */
import SchemaBuilder from "@giraphql/core";

const builder = new SchemaBuilder({});

/**
 * Setting up schema's fields
 */
import fields from "./fields";

builder.queryType({ fields });

/**
 * Setting up environment variables
 */
import { config } from "dotenv";

config();

const DBURI = `
mongodb+srv://
${process.env.ATLAS_USER}:
${process.env.ATLAS_PASSWORD}
@cluster0.0o2ap.mongodb.net
/myFirstDatabase
?retryWrites=true&w=majority
`
  .replace(/\n/g, "")
  .trim();

/**
 * Setting up apollo and mongoose connections
 */
import { ApolloServer } from "apollo-server";
import mongoose from "mongoose";

mongoose
  .connect(DBURI)
  .then(() => {
    new ApolloServer({
      schema: builder.toSchema({}),
    }).listen(process.env.PORT || 443 /* HTTPS port */);
  })
  .catch(console.error);
