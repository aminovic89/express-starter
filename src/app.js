const express = require("express");

const app = express();
app.use(express.json());

app.get("/health", (req, res) => {
  res.json({ status: "ok", uptime: process.uptime() });
});

app.get("/api/hello", (req, res) => {
  const name = req.query.name || "world";
  res.json({ message: `Hello, ${name}!` });
});

app.post("/api/echo", (req, res) => {
  res.status(201).json({ received: req.body });
});

module.exports = app;
