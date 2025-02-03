const express = require("express");
const app = express();
const port=3000;
const service_port=8000;

app.get("/", (req, res) => {

res.sendFile("Error_10.html", { root: '.' });

})

app.listen(port, () => {
  console.log(`running at port ${service_port} at root folder`);
});