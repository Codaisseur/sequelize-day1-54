## Backend

### Setup:

1. Install the tools:

- `sequelize`
- `sequelize-cli`
- `pg` (driver so sequelize knows how to talk to postgres)

2. Init sequelize: `npx sequelize-cli init`

3. Modify config.json (to point to our new database).

4. Modify models/index.js (later).

## Creating a model

Command:
`npx sequelize-cli model:generate --name user --attributes name:string,email:string,password:string`

## Running the migrations so the tables get created:

Run migrations: `npx sequelize-cli db:migrate`

Undo migrations: `npx sequelize-cli db:migrate:undo:all`

## Seed files

Create a seed file: `npx sequelize-cli seed:generate --name some-users`

Run seed files `npx sequelize-cli db:seed:all`

## Adding relations

Create realations file: `npx sequelize-cli migration:generate --name set-up-relations`

0. Undo all the migrations
1. Create a new migration to add relation
2. Edit the recently created migration file to add new column

2.1 Edit Seeds to add foreignKey
3. Migrate and check the relation (Postico, DBeaver)
4. Add the relations to the models (if you skip this step, query breaks)
5. Query relations (use include)

```js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("todoLists", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("todoLists", "userId");
  },
};
```