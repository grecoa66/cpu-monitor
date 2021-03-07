const express = require("express");
const app = express();
const port = 3001;
const os = require("os");

app.get("/", (req, res) => {
  res.send("Hello Datadog!");
});

app.get("/cpu-load", (req, res) => {
  const cpus = os.cpus().length;
  const loadAverage = os.loadavg()[0] / cpus;

  res.send({ cpus: cpus, loadAverage: loadAverage });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
