const express = require("express");
const mysql = require("mysql2");

const app = express();
const port = 5000;

const db = mysql.createConnection({
  host: "crossover.proxy.rlwy.net",
  port: "35281",
  user: "root",
  password: "GzHKgEOllsmKKVMiPXnuwteEaBgYvIoX",
  database: "railway",
});

db.connect((err) => {
  if (err) {
    console.error("Database connection failed:", err);
    return;
  }
  console.log("Connected to MySQL");
});

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Database query failed" });
      return;
    }
    res.json(results);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
