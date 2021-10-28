"use strict";
const bcrypt = require("bcrypt");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Matias",
          email: "m@m.com",
          password: bcrypt.hashSync("123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          admin: true,
        },
        {
          name: "Swen",
          email: "s@s.com",
          password: bcrypt.hashSync("123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
          admin: true,
        },
        {
          name: "Wouter",
          email: "w@w.com",
          password: bcrypt.hashSync("123", 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
