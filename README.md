# 🚀 USER POSTS API
This is a server application with api endpoints on users and their post.

It includes creating a one to many relationship between the user and posts.

It demonstrates basic server setup and database operations

## 🤖  Tech stack
* Node js
* Express js
* Postgresql
* Prisma ORM
* Render for deployment

  
## Endpoints


### GET /users

- Returns a list of all users including their posts


### POST/users

- Creates a new user

- Request Body:

  
{ "firstName":"stella",

"lastName":"stephanie",

"emailAddress":"ste@gmail.com",

"username":"ste" } 

  

 ### GET /users/:id

- Returns a single user by ID along with their blog posts


### POST /posts

- Creates a new blog post

- Request Body:

  {

    "title": "My Post",

    "content": "Some content",

    "userId": 1

  }
### GET /posts

- Returns a list of all posts includingthe  details of the user who created it

### GET /posts/:id

- Returns a single post by ID along with author details

### PUT /posts/:id

- Updates a single post by ID and returns the new post


 ### DELETE /posts/:id

- Deletes a specific post by ID

## Live server 👉 https://user-posts-api-6pl6.onrender.com

