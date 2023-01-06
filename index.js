const express = require('express');
const app = express(); //initialize express
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const sequelize = require("./config/database"); 

const PORT = process.env.port || 3001;

app.listen(PORT, () => console.log("LISTENING TO PORT", PORT))

