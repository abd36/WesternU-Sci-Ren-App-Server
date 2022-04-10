const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const expoKeyRouter = require("./routers/expoKeysRouter");

function createServer() {
    const app = express();

    app.use(helmet())
    app.use(cors({ "origin": "*" }));
    app.use(express.json());

    app.use("/api/expokeys", expoKeyRouter);

    return app;
}

module.exports = createServer;