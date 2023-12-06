const express = require("express");

const app = express();

app.use(express.json());

app.get("/",(req,res) => {
    res.send("<h1 align=center>This is the homepage for NODE-KHALTI API.</h1>")
})

module.exports = app;