const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
let bodyParser = require("body-parser");
app.use(bodyParser.json()); // to support JSON-encoded bodies
app.use(
  bodyParser.urlencoded({
    // to support URL-encoded bodies
    extended: true,
  })
);

// sendFile will go here
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/submit-form", (req, res) => {
  const fullName = `${req.body.fname} ${req.body.lname}`;
  console.log(req.body.fname);
  console.log(req.body.lname);
  res.end(fullName);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
