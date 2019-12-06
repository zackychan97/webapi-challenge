  
const express = require("express");
const projectRouter = require("./challenge-routes");
const actionsRouter = require("./action-routes");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is running ..." });
});

server.use("/api/projects", projectRouter);
server.use("/api/actions", actionsRouter)

module.exports = server;