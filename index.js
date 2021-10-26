const express = require("express");
const PORT = 4002;
const User = require("./models").user;

const app = express();

app.get("/test", (req, res, next) => {
  console.log("got the request");
  res.send("testing...");
});

// Get one user by Id
app.get("/users/:userId", async (request, response, next) => {
  try {
    const userId = request.params.userId;
    const user = await User.findByPk(userId);
    response.send(user);
  } catch (e) {
    console.log(e.message);
  }
});

// create a new user
app.post("/users", () => {});

// Update ONE user
app.patch("/users/:id", () => {});

app.listen(PORT, () => console.log("Listening..."));
