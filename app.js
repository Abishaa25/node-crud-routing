const express = require('express')
const app = express();
const router = express.Router();
const bodyparser = require('body-parser')


const ProductRouter = require('./src/routes/index')
// app.use(express.json());
app.use(bodyparser.json())
app.use('/',ProductRouter)
app.listen(8090);