const express = require('express');
const routes = require('./routes/routes');
const app = express();


// watch for incoming requests of method GET
// to the route http://localhost:3050/api

routes(app);


module.exports = app;