// import UserModel from "../models/user";
import { GraphQLObjectType, GraphQLString } from "graphql";
// interface User {
//   name: string;
//   password: string;
//   email: string;
// }

export default new GraphQLObjectType({
  name: "User",
  description: "App User",
  fields: {
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
});
// types.string({
//   resolve: (async (_, { name, email }) => {
//     // const UserInstance = new UserModel({
//     //   name,
//     //   email,
//     // });

//     const userByName = await UserModel.find({ name });
//     const userByEmail = await UserModel.find({ email });

//     // if (!userByName && !userByEmail) {
//     //   UserInstance.save();

//     //   return name;
//     // }

//     return userByName && name ||
//            userByEmail && email;
//   }) as (_: string, b: User) => Promise<string>,
// });
