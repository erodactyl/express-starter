import express from "express";

const app = express();

app.get("*", (_req, res) => {
  res.send(Date.now().toString());
});

const server = app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

const shutdown = () => {
  console.log("About to exit, waiting for remaining connections to complete");
  server.close(() => {
    console.log("Server closed, exiting");
    process.exit(0);
  });
};

process.on("SIGTERM", shutdown);
process.on("SIGINT", shutdown);
