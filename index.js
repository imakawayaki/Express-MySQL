const express = require("express");
const mysql = require("mysql");

const app = express();

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Kono_tyan_1995",
    database: "develop",
});

app.get("/", (req, res) => {
    connection.query("SELECT * FROM asuka", (error, results) => {
        res.render("index.ejs", { vegetables: results });
    });
});

app.listen(3000, () => {
    console.log("Running server on port 3000");
});