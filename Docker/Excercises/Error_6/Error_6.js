const express = require("express");
const app = express();
const port=3000;

app.get("/", (req, res) => {

res.sendFile("./index.html", { root: '.' });

})

app.listen(port, () => {
  console.log(`running at port ${port}`);
});