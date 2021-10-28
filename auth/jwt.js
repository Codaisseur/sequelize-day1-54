const jwt = require("jsonwebtoken");

const secret =
  process.env.JWT_SECRET || "e9rp^&^*&@9sejg)DSUA)jpfds8394jdsfn,m";

function toJWT(data) {
  // { userId: 10 }
  return jwt.sign(data, secret, { expiresIn: "2h" });
}

function toData(token) {
  // the reverse
  return jwt.verify(token, secret); // data = { userId: 3 }
}

module.exports = { toJWT, toData };

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsImlhdCI6MTYzNTQyOTYxMiwiZXhwIjoxNjM1NDM2ODEyfQ.hKCeVD7aCnbuefBr_mnYlD1LA7_nyTaBlPP4DzCVH6s
// data => { userId: 10 }
// exp => if its valid or not anymore
