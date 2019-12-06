  
const express = require("express");
const projectRouter = require("./challenge-routes");
const server = express();

server.use(express.json());

server.get("/", (req, res) => {
  res.status(200).json({ message: "API is running ..." });
});

server.use("/api/projects", projectRouter);

module.exports = server;