const { Router } = require("express");
const User = require("../models").user;
const router = new Router();

// Create a new user
router.post("/", async (request, response, next) => {
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

const failRandomly = (req, res, next) => {
  const failed = Math.random() * 10;

  if (failed < 7) {
    res.status(401).send("you failed the random check");
  } else {
    next(); // continue to the route
  }
};

// Get a user by id
router.get("/:userId", failRandomly, async (request, response, next) => {
  try {
    const userId = request.params.userId;
    const user = await User.findByPk(userId);
    response.send(user);
  } catch (e) {
    console.log(e.message);
  }
});

// update a user by id
router.patch("/:id", failRandomly, () => {});

// delete a user by id
router.delete("/:userId", async (req, res, next) => {
  //
  // find this user we want to delete
  // check if the user exists
  // if exists -> delete

  // /users/:id
  try {
    // find this user we want to delete
    const userId = req.params.userId;
    const user = await User.findByPk(userId); // null || { user }

    // check if the user exists
    if (!user) {
      return res.status(404).send("user doesn't exist"); // early return
    }
    // if exists -> delete
    await user.destroy(); // destroy => delete.

    res.send(`User ${userId} was destroyed`);
  } catch (e) {
    next(e); // error handler from express
  }
});

module.exports = router;
