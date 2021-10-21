const express = require("express");
const route = require("./src/router.js")
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./src/views"));
app.use("/public", express.static("public"));

app.use(express.urlencoded({extended: true}));

app.use(route);


app.listen(3000, () => console.log("listening on port 3000"));
