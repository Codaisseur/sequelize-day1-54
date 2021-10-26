## Relations

### One to One
- Person <-> BSN
- Person <-> DNA
- Person <-> Passaport
- Person <-> Phone Number

### One to Many ( has many ..., belong to ...)
- Person <-> Account
- Person <-> Age
- House <-> Wizard
- class 54 <-> Students

### Many to Many

- Students <-> Teachers
- Grandchildren <-> Grandparents
- Friends <-> Friends
- People <-> Nationalities (if double nationality)

### Users, todoLists, todoItems

- user **hasMany** todoLists -> an array
- todoLists **belongsTo** user -> userId -> one value

- todoLists **hasMany** todoItems
- todoItems **belongTo** todoLists -> todoListId -> one value