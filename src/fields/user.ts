import UserModel from "../models/user"

interface User {
  name: string
  password: string
  email: string
}

export default (types: { [index: string]: any }) =>
  types.string({
    args: {
      name: types.arg.string(),
    },
    resolve: (async (_, { name, password, email }) => {
      const UserInstance = new UserModel({
        name, password, email
      })

      const userByName = await UserModel.find({ name })
      const userByEmail = await UserModel.find({ email })

      if (!userByName && !userByEmail) {
        UserInstance.save()

        return name
      }

      return "User name or email already exists"
    }) as (_: string, b: User) => Promise<string>,
  });
