// import UserModel from "../models/user";
import { GraphQLObjectType, GraphQLList } from "graphql";
import userType from "./user"

export default new GraphQLObjectType({
  name: 'RootQuery',
  description: 'This is the root query',
  fields: {
    users: {
      type: new GraphQLList(userType),
      resolve: () => [{
        name: 'users',
        email: 'users@example.com',
        password: 'password'
      },
      {
        name: 'users2',
        email: 'users2@example.com',
        password: 'password'
      }]
      // UserModel.find()
    }
  }
})