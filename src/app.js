const express = require("express");

const app = express();

// route
app.get("/hello", (req, res) => {
    res.send("hello from API!");
});

module.exports = { app };
