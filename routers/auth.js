const { Router } = require("express");
const bcrypt = require("bcrypt");
const User = require("../models").user;
const { toJWT } = require("../auth/jwt");

const router = new Router();

// RPC => Remote procedure call

// POST because we need a body
router.post("/login", async (req, res, next) => {
  try {
    // { email, password } => body
    const { email, password } = req.body;

    // check if we got them if not answer 400 bad request
    if (!email || !password) {
      return res.status(400).send("Missing parameters");
    }
    // find a user with this email, check if he exists

    const user = await User.findOne({
      where: { email: email },
    });

    if (!user) {
      return res.status(400).send("Invalid email or password");
    }

    // compare the passwords
    const validPassword = bcrypt.compareSync(password, user.password);

    if (!validPassword) {
      return res.status(400).send("Invalid email or password");
    }

    // Introduce the JWT => token
    // OAuth2  Auth0
    const data = { userId: user.id }; // creating it with the user id.

    const token = toJWT(data);

    res.send({ message: "Congratulations for login in!", token });

    // success
    // or not
  } catch (e) {
    next(e);
  }
});

module.exports = router;
