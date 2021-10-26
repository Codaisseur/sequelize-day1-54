const User = require("./models").user 
const TodoList = require("./models").todoList 
const TodoItem = require("./models").todoItem

//We write queries to test our relations
//It's a nice sttep to take before going to the endpoints

const getListsWithUser = async () => {
  const lists = await TodoList.findAll({include: User})
  return lists.map(list => list.get({ plain: true})) //just a more complicated way of "raw: true"
}

// getListsWithUser().then(data => console.log(data))

const getItemsWithLists = async () => {
  const items = await TodoItem.findAll({include: TodoList})
  return items.map(item => item.get({ plain: true}))
}

// getItemsWithLists().then(data => console.log(data))

const getListsWithUser2 = async () => {
  const lists = await TodoList.findAll({include: User, raw: true}) //I didn't like this output
  return lists
}

// getListsWithUser2().then(data => console.log(data))