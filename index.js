const fs = require("fs");
const app = require("express")();
const bodyParser = require("body-parser");

const port = 12345;
app.use(bodyParser.json());

app.post("/", (req, res) => {
  const data = req.body;
  tests = [];
  for (test of data["tests"]) {
    tests.push({
      test: test["input"],
      correct_answers: [test["output"].trim()],
    });
  }
  console.log("Loaded!");
  fs.writeFile(
    "/home/aman/Documents/cp/cpp.cpp:tests",
    JSON.stringify(tests),
    function () {}
  );
  res.sendStatus(200);
});

app.listen(port, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Listening on port ${port}`);
});
