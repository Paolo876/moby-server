const express = require('express');
const app = express(); //initialize express
const cors = require("cors");
require("dotenv").config();
app.use(express.json());
app.use(cors());
