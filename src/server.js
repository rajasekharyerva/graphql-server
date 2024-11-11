// src/server.js
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema/userSchema');
const resolvers = require('./resolvers/userResolvers');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({ url }) => {
  console.log(`Server ready at ${url}`);
});
