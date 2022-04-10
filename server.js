const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const expoTokenRouter = require("./routers/expoTokenRouter");
const expoNotificationRouter = require("./routers/expoNotificationRouter");

function createServer() {
    const app = express();

    app.use(helmet())
    app.use(cors({ "origin": "*" }));
    app.use(express.json());

    app.use("/api/expotoken", expoTokenRouter);
    app.use("/api/exponotification", expoNotificationRouter);

    return app;
}

module.exports = createServer;