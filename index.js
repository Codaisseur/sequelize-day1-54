const express = require("express");
const PORT = 4002;
const User = require("./models").user;

const app = express();

app.use(express.json());

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
app.post("/users", async (request, response, next) => {
  try {
    // name, email, password
    const { name, email, password } = request.body;

    console.log(request.body);

    if (!email || !name || !password) {
      response.status(400).send("Missing parameters"); //400 bad request
    } else {
      const user = await User.create({
        name: name,
        email: email,
        password: password,
      });

      response.send({ message: "new user created", newUser: user });
    }
  } catch (e) {
    if (e.response.type === "uniqueContraintError") {
      res.status(400).send("email already exists");
    } else {
      next(e); // Calling express error handler
    }
  }
});

// Update ONE user
app.patch("/users/:id", () => {});

app.listen(PORT, () => console.log("Listening..."));
