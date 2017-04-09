import express from 'express';
import hello_schema from './schema';
import schema       from './schema';
import { graphql }  from 'graphql';

const graphqlHTTP = require('express-graphql');

import bodyParser   from 'body-parser';

let app  = express();
let PORT = 3000;

app.use('/graphql', graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.use('/api', graphqlHTTP({
  schema: schema,
  graphiql: true
}));


let server = app.listen(PORT, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log('API Server listening at http://%s:%s', host, port);
});