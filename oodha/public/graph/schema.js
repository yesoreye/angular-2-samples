import db from './db';
const GraphQLDate = require('graphql-date');

const {
    GraphQLBoolean,
    GraphQLString,
    GraphQLInt,
    GraphQLFloat,
    GraphQLObjectType,
    GraphQLSchema,
    GraphQLID,
    GraphQLNonNull,
    GraphQLList
} = require('graphql');

const actor = new GraphQLObjectType({
  name: 'actor',
  fields: {
    name: { type: GraphQLID },
    gender: { type: GraphQLString },
    dob: {type: GraphQLDate}
  }
})

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
     name: 'RootQueryType',
     fields: ()=>({
       movie : {
         type : GraphQLString,
         resolve: (parentValue, args, request) => {},
       },
       releaseDate : {
         type : GraphQLDate,
         resolve: () => null,
       },
       actors :{
         type : new GraphQLList(actor),
         resolve: ()=>null,
       }
     })
  })
});

export default schema;