import UserModel from "../models/user";

interface User {
  name: string;
  password: string;
  email: string;
}

export default (types: { [index: string]: any }) =>
  types.string({
    args: {
      name: types.arg.string(),
      email: types.arg.string(),
    },
    resolve: (async (_, { name, email }) => {
      // const UserInstance = new UserModel({
      //   name,
      //   email,
      // });

      const userByName = await UserModel.find({ name });
      const userByEmail = await UserModel.find({ email });

      // if (!userByName && !userByEmail) {
      //   UserInstance.save();

      //   return name;
      // }

      return userByName && name || 
             userByEmail && email;
    }) as (_: string, b: User) => Promise<string>,
  });
