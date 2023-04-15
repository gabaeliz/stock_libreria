const { PORT } = require("./config/config");
const { db } = require("./config/database");
const express = require("express");


const server = express();

db.authenticate().then(() => {
    console.log("Database connected");
    server.listen(PORT, () => {
        console.log(`The server is running on port ${PORT}`);
    });
});