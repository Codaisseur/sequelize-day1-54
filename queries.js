const User = require("./models").user;

const getAllAdmins = async () => {
  try {
    const users = await User.findAll({
      raw: true, // make a cleaner console.log
      where: { admin: true },
    }); // a query.

    console.log(users);
  } catch (e) {
    console.log(e.message);
  }
};

// getAllAdmins();

const getOneUser = async id => {
  try {
    const oneUser = await User.findByPk(id, { raw: true });
    console.log("user with id", id, oneUser);
  } catch (error) {
    console.log(error.message);
  }
};

getOneUser(4);

const signupNewUser = async () => {
  try {
    const name = "Eszter";
    const email = "e@e.com";
    const newUser = await User.create({
      name: name,
      email: email,
      password: "1234",
    });
    console.log(newUser);
  } catch (e) {
    console.log(e.message);
  }
};

// signupNewUser();
