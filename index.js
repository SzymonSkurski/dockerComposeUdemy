const express = require("express");
const redis = require("redis");
const process = require("process");

const PORT = 8091;
const app = express();
const client = redis.createClient({
  host: "redis-server", //connect to docker service by service name
  port: 6379, //default redis port
});

client.set("visits", 0);

app.get("/", (req, res) => {
  //   process.exit(0); simulate crash
  client.get("visits", (err, visits) => {
    res.send("Number of visits " + visits);
    client.set("visits", parseInt(visits) + 1);
  });
});

app.listen(PORT, () => {
  console.log("listening on port " + PORT);
});
