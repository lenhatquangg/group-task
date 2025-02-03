const express = require("express");
const app = express();
const port=5000;

app.get("/", (req, res) => {

res.sendFile("Error_8.html", { root: '.' });

})

app.listen(port, () => {
  console.log(`running at port ${port} at root folder`);
});