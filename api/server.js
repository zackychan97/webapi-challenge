const express = require("express");
const challengeRouter = require("./projects-route");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ message: "server is up and running" })
});

server.use("/api/projects", projectRouter);

module.exports = server;