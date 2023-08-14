# Pure node js api

 This is an api made without any libraries, all http methods were made using pure node

 It is recommended to use the LTS node version to run this project.

 CLI Command to start the api:
 ```

    $ npm run dev

 ```
 If this doesn't run this command instead:
 ```

    $ node src/server.js

 ```
 In this API there is a CRUD for users entity. So, you can create, read, update and delete users. You can also execute a user login. 
 
 Besides that, this application has a fake database persistance using json files.


 # Routes of the API

 It was set to run on the port 3000, but feel free to change it if you like.

 <a href="https://pure-node-crud-application.onrender.com/">Link of the API deployed on render</a>

### Show all users
GET http://localhost:3000/users

Content-Type: application/json


### Show one user
GET http://localhost:3000/users/:id

Content-Type: application/json


### Search for users
GET http://localhost:3000/users/

Content-Type: application/json


### Create new user
POST http://localhost:3000/users

Content-Type: application/json
```
{
    "email": "nicola.tesla@gmail.com",
    "name": "Nicola Tesla",
    "password": "12345678"
}
```

### Login
POST http://localhost:3000/login

Content-Type: application/json
```
{
    "email": "renan.play@gmail.com",
    "password": "12345678"
}
```

### Update user
PUT http://localhost:3000/users/:id

Content-Type: application/json
```
{
    "name": "Ryan Dhawl",
    "email": "ryan@gmail.com",
    "password": "12345"
}
```

### Delete user
DELETE http://localhost:3000/users/:id
