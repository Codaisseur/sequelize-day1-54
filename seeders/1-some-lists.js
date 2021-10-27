"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          title: "Work List",
          createdAt: new Date(),
          updatedAt: new Date(),
          ownerId: 1, /// => user
        },
        {
          title: "Personal List",
          createdAt: new Date(),
          updatedAt: new Date(),
          ownerId: 2,
        },
        {
          title: "Sports List",
          createdAt: new Date(),
          updatedAt: new Date(),
          ownerId: 3,
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
