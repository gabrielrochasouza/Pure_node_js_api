# Pure node js api

 This is an api made without any libraries, all http methods were made using pure node

 It is recommended to use the LTS node version to run this project.

 CLI Command to start the api:
 ```

    $ npm run dev

 ```
 If this command doesn't run the project, use this command instead:
 ```

    $ node src/server.js

 ```
 In this API there is a CRUD for users entity. So, you can create, read, update and delete users. You can also execute a user login. 
 
 Besides that, this application has a fake database persistance using json files.


 # Routes of the API

 It was set to run on the port 3000, but feel free to change it if you like.

 <a href="https://pure-node-crud-application.onrender.com/">Link of the API deployed on render</a>

## /users

#### Show all users
- GET /users



#### Show one user
- GET /users/:id



#### Search for users
- GET /users/
  


#### Create new user
- POST /users

```
{
    "email": "nicola.tesla@gmail.com",
    "name": "Nicola Tesla",
    "password": "12345678"
}
```

#### Login
- POST /login

```
{
    "email": "renan.play@gmail.com",
    "password": "12345678"
}
```

#### Update user
- PUT /users/:id

```
{
    "name": "Ryan Dhawl",
    "email": "ryan@gmail.com",
    "password": "12345"
}
```

#### Delete user
- DELETE /users/:id

## /tasks

#### Show all tasks
- GET /tasks/



#### Show one task
- GET /tasks/:id



#### Create new task
- POST /tasks

```
{
    "title": "Título teste 2",
    "description": "Descrição teste"
}
```

#### Complete task
- PATCH /tasks/:id/complete


#### Update task
- PUT /tasks/:id
```
{
    "title": "Updated",
    "description": "Updated description"
}
```

#### Delete task
- DELETE /tasks/:id

