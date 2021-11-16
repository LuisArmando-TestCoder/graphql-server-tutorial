import user from "./user"

export default (types: { [index: string]: any }) => ({
  user: user(types)
});
