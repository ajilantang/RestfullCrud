'use strict'
//----------------
// require express
//----------------
require('dotenv').config()
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const apiMemo = require('./router/api.memo');

const app = express();
const morgan = require('morgan');

//------------
//body parser and cors
//-------------
app.use(cors());
app.use(bodyParser.urlencoded( { extended:true } ));
//------------------
// mongoose connect
//-----------------
mongoose.connect(process.env.crudUri)
mongoose.Promise = global.Promise
//--------------
// connect to router api
//--------------
app.use('/api/memo', apiMemo)
//-------------
//run program
//--------------
const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port,hostname, (err) => {
  if (err) console.log(err);
  console.log(`server is running ${hostname} : ${port}`);
})
