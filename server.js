const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const expoTokenRouter = require("./routers/expoTokenRouter");
const expoNotificationRouter = require("./routers/expoNotificationRouter");
const dataRouter = require("./routers/dataRouter")
const faqRouter = require("./routers/faqRouter")
const mapRouter = require("./routers/mapRouter")

function createServer() {
    const app = express();

    app.use(helmet())
    app.use(cors({ "origin": "*" }));
    app.use(express.json());

    app.use("/api/expotoken", expoTokenRouter);
    app.use("/api/exponotification", expoNotificationRouter);
    app.use("/api/data", dataRouter);
    app.use("/api/faq", faqRouter);
    app.use("/api/map", mapRouter);

    return app;
}

module.exports = createServer;