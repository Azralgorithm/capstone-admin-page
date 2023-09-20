const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");
const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "adminServer"
})
app.listen(PORT, () => {
    console.log(`Update on the running server, ${PORT}`);
})