const { Router } = require("express");

const router = new Router();

router.get("/", (req, res, next) => {
  console.log("got the request");
  res.send("testing...");
});

module.exports = router;
