const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000
const bodyParser = require('body-parser');
const mongoose = require('./config/config'); 
const cors = require('cors');
const router = require('./Src/Router/mainrouter');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())
app.use(cors());
app.use("/",router)

app.listen(PORT);