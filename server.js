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
  const cpus = os.cpus().length;
  const loadAverage = os.loadavg()[0] / cpus;

  console.log("Hitting cpu-load");
  res.send({ cpus: cpus, loadAverage: loadAverage });
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
