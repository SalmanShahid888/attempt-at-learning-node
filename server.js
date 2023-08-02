const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res, next) => {
  console.log("Here");
  res.render("index");
});

app.get("/users", (req, res) => {
  res.send("Users List");
});

app.get("/users/new", (req, res) => {
  res.send("new-user");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
