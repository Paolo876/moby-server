const express = require("express");
const router = express.Router();
const db = require("../config/database");
const Users = require("../models/Users");

router.get("/", async (req,res) => {
    const users = await Users.findAll()
})

module.exports = router;