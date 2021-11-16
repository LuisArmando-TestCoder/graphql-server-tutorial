import state from "../state";
import { GraphQLObjectType, GraphQLString } from "graphql";
import userType from "../types/user";

export default new GraphQLObjectType({
  name: "RootMutation",
  description: "This is the root mutation",
  fields: {
    user: {
      type: userType,
      args: {
        name: {
          type: GraphQLString,
        },
        email: {
          type: GraphQLString,
        },
        password: {
          type: GraphQLString,
        },
      },
      resolve: async (_0 /*parent*/, { name, email, password }) => {
        state.client &&
          state.client.db("testing").collection("User").insertOne({
            name,
            email,
            password,
          });

        return {name, email, password}
      },
    },
  },
});
