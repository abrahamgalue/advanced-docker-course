const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hola desde mi app en un Dev Container</h1>");
});

app.listen(port, () => {
  console.log(`Listening on http://localhost:${port}`);
});
