import { ApolloServer } from 'apollo-server';
import SchemaBuilder from '@giraphql/core';
const builder = new SchemaBuilder({});
builder.queryType({
  fields: (t) => ({
    hello: t.string({
      args: {
        name: t.arg.string(),
      },
      resolve: (_, { name }) => `hello, ${name || 'World'}`,
    }),
  }),
});
new ApolloServer({
  schema: builder.toSchema({}),
}).listen(3000);