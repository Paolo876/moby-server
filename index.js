const express = require('express');
const app = express(); //initialize express
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const sequelize = require("./config/database"); 

const PORT = process.env.PORT || 3001;


//routes
app.get("/", (req,res) => res.send("APP IS ONLINE..."))
app.use("/auth", require("./routes/Users"));


app.listen(PORT, () => console.log("LISTENING TO PORT", PORT))

