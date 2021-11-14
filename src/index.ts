import { ApolloServer } from 'apollo-server';
import SchemaBuilder from '@giraphql/core';
import fakeDB from './fakeDB.json';

const builder = new SchemaBuilder({});

builder.queryType({
  fields: (types) => ({
    person: types.string({
      args: {
        name: types.arg.string(),
      },
      resolve: (_,
        { name }
      ) => fakeDB.people.find(({name: lookupName}) => {

        console.log('lookupName', lookupName)
        console.log('name', name)

        return lookupName.includes(name as string)
      })?.name || 'Default name'
    })
  }),
});
new ApolloServer({
  schema: builder.toSchema({}),
}).listen(3000);