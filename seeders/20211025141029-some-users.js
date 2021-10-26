"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          name: "Matias",
          email: "m@m.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
          admin: true,
        },
        {
          name: "Swen",
          email: "s@s.com",
          password: "123",
          createdAt: new Date(),
          updatedAt: new Date(),
          admin: true,
        },
        {
          name: "Wouter",
          email: "w@w.com",
          password: "123",
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
