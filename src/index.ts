/**
 * Setting up SchemaBuilder
 */
import SchemaBuilder from "@giraphql/core";

const builder = new SchemaBuilder({});

/**
 * Setting up schema's fields
 */
import queries from "./queries";
import mutations from "./mutations";

builder.queryType({ fields: queries });
builder.mutationType({ fields: mutations });

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

const StandardHTTPSPort = 443;
const port = process.env.PORT || StandardHTTPSPort;

mongoose
  .connect(DBURI)
  .then(() => {
    console.log("Listening at", port);

    new ApolloServer({
      schema: builder.toSchema({}),
    }).listen(port);
  })
  .catch(console.error);
