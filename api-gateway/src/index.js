const {ApolloServer} = require('apollo-server');
import '@babel/polyfill';

const {resolvers} = require('./resolver');
const {typeDefs} = require('./schema');
const {dataSources} = require('./datasource');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  playground: {
    settings: {
      'editor.theme': 'dark',
    }
  },
});

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});
