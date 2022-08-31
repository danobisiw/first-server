const express = require("express");

//initialise app
const app = express();



//initiate modules
app.get("/", (request, response) => {
  response.status(200).send("welcome to my server");
});
app.post("/"),
  (request, response) => {
    response.status(201).send("your data is daved");
  };

app.put("/"),
  (request, response) => {
    response.status(201).send("your data has been replaced");
  };

app.patch("/"),
  (request, response) => {
    response.status(201).send("your data is updated");
  };

app.delete("/"),
  (request, response) => {
    response.status(201).send("your data is deleted");
  };

//initiate the ports
app.listen(4000, (error) => {
  console.log("Server running on http://localhost:4000");
});
