const express = require("express");
const app = express();
const os = require("os");
const cors = require("cors");
const port = 3001;

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello Datadog!");
});

app.get("/cpu-load", (req, res) => {
  // Get CPU information
  const cpus = os.cpus().length;
  const loadAverage = os.loadavg()[0] / cpus;

  // Get current time
  const date = new Date();

  res.send({ cpus: cpus, loadAverage: loadAverage, time: date.toJSON() });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
