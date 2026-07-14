const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const pool = require("./config/db");

pool.query("SELECT NOW()")
  .then((result) => {
    console.log("Database Connected");
    console.log(result.rows[0]);
    
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  res.json({
    message: "POS Configuration API Running",
  });
});

module.exports = app;