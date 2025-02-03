const express = require("express");
const app = express();
const port=3000;

app.get("/", (req, res) => {

res.sendFile("Error_9_1.html", { root: '.' });

})

app.listen(port, () => {
  console.log(`running at port ${port} at root folder`);
});