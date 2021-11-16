import state from "../state";
import { GraphQLObjectType, GraphQLList, GraphQLString } from "graphql";
import userType from "../types/user";

export default new GraphQLObjectType({
  name: "RootQuery",
  description: "This is the root query",
  fields: {
    user: {
      type: userType,
      args: {
        name: {
          type: GraphQLString,
        },
      },
      resolve: (_0 /*parent*/, { name }, _1 /*context*/, _2 /*info*/) => {
        return (
          state.client &&
          state.client
            .db("testing")
            .collection("User")
            .findOne({
              name: {
                $eq: name,
              },
            })
        );
      },
    },
    users: {
      type: new GraphQLList(userType),
      resolve: () => {
        return (
          state.client &&
          state.client.db("testing").collection("User").findOne({})
        );
      },
    },
  },
});
