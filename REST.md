# REST => REpresentational State Transfer.

Paradigm or set of design rules to standarize the creation of APIs.

1. Operations as HTTP methods
   `CRUD` => Create Read Update Delete
   POST GET PATCH || PUT DELETE

GET => Read data from our server
POST => Create new rows in our tables (add data).
PATCH | PUT => update a specific entry or several (row)
DELETE => DELETE.

2. Responds with appropiate status codes

   200... => Good => res.send(...) // 200
   300... => redirect
   400... => User/client errors (Manage ourselves)
   500... => Server errors => next(e) // handled by express

3. Clean urls

GET - '/allUsersAndLists'
POST - '/newUser'
POST - '/newList'
GET - '/oneUser/:id'

GET - '/users'
GET - '/users/:id'
POST - '/users'
params: { name, email, password }
returns: new User.
GET - '/lists'
POST - '/lists'
