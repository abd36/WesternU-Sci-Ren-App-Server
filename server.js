const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

function createServer() {
    const app = express();

    app.use(helmet())
    app.use(cors({ "origin": "*" }));
    app.use(express.json());

    return app;
}

module.exports = createServer;