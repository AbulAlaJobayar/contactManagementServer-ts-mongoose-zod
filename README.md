# Project Name:  
**Contact Management Server**



# Technology Stack:
-  ### Programming Language: TypeScript
- ### Web Framework: Express.js
- ### Object Relational Mapping (ORM): Mongoose for MongoDB

## Project Overview

 This is a contacts management server built using the MongoDB, Express,  Node.js with TypeScript. The application allows users to add, update, delete, and view contacts.


## Features
- Add new contacts with name, email, phone, address, and profile picture.
- View all contacts in a card layout.
- Update contact details.
- Delete contacts.
- Mark contacts as favorites.





## Installation

### 1. Clone the GitHub repository:
Use the `git clone` command to clone the project repository from GitHub to your local machine.

### 2. Open the project in Visual Studio Code:
Use the `code` command to open the project in Visual Studio Code.

### 3. Run `yarn init` in the VS Code terminal:
This initializes a new Node.js project. It will prompt you to provide information about your project.

### 4. Install dependencies using Yarn:
Use `yarn` to install the project dependencies listed in the package.json file.

### 5. Create an .env file:
Create a new file named `.env` in the root folder of your project.

### 6. Set environment variables in .env file:
Open the `.env` file in a text editor and set the following variables:

```plaintext
NODE_ENV=production
PORT=5000
DB_URL=mongodb+srv://contactsManagement:y57yJ0QKLxQd9wFf@cluster0.ph1akes.mongodb.net/user?retryWrites=true&w=majority
```


#### Domain: http://localhost:5000

#### Create Contact

```http
  POST /api/v1/contact/create-contact
```

- Request Body:
```http
{
   
 "name": "bbbbb Doe",
  "email": "john.doe@example.com",
  "phoneNumber": "+1234567890",
  "address": "1234 Elm Street, Springfield, IL 62704, USA",
  "photoUrl": "https://example.com/profile.jpg"

}
``` 


####  get All Contact

```http
  GET /api/v1/contact/get-contact
```

#### Get Single Contact**

```http
 GET /api/v1/contact/:id
```

#### Update contact 

```http
PATCH /api/v1/contact/:id

```

- Request Body:
```http
{
   
"email": "abc@gmail.com"

}
``` 

#### Delete Contact


```http
 Delete /api/v1/contact/:id

```


## if need any information
contact me

- abulalajobayar@gmail.com
- jobayar.dev@gmail.com

