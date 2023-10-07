require("dotenv").config();

const express = require("express");

const app = express();

// sample get req
app.get("/", (req, res) => {
  res.json({ mssg: "Welcome to the app" });
});

app.listen(process.env.PORT, () => {
  console.log("hello");
});
