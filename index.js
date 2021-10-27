const express = require("express");
const PORT = 4002;
const userRouter = require("./routers/user");
const testRouter = require("./routers/anotherRouter");

// Create a new express app => new server.
const app = express();

const loggingMiddleware = (req, res, next) => {
  console.log("I got a request");
  console.log("the request type is", req.method);

  //next(); // call the next handler in line, call the route handler
};

// register some middleware
// body-parser parsing the body of the request
// => converts the body of the request => an object
app.use(express.json());
app.use(loggingMiddleware); // At app level

// middleware at ROUTE LEVEL
app.get("/middleware-test", (req, res, next) => {
  console.log("in the route");

  res.send("middleware tested successfully");
});

// registering the router to the app
// This are some of your routes.
app.use("/users", userRouter);
app.use("/test", testRouter);

// start the app
app.listen(PORT, () => console.log("Listening..."));
