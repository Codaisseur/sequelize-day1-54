"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "todoItems",
      [
        {
          task: "Swimm classes",
          deadline: "tomorrow",
          todoListId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Go to the gym",
          deadline: "never",
          todoListId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          task: "Pet my dog",
          deadline: "every day",
          todoListId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("todoItems", null, {});
  },
};