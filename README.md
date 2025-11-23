# PERN Todo List

**PERN Stack (PostgreSQL, Express.js, React.js, Node.js)** application. **Todo List** with full CRUD operations.

---

### **Frontend**

* React.js
* Bootstrap 5
* Fetch API

### **Backend**

* Node.js
* Express.js
* CORS
* PostgreSQL (pg module)

### **Database**

* PostgreSQL 15
* Single table: `todo`


##  Project Structure

```
pern-todo/
├── client/            # React frontend
└── server/            # Express backend
```

### **Server Structure**

```
server/
├── index.js           # Express server entry
├── db.js              # PostgreSQL connection pool
└── database.sql       # SQL schema
```

### **Client Structure**

```
client/
├── src/
│   ├── components/
│   │   ├── InputTodo.js
│   │   ├── ListTodos.js
│   │   └── EditTodo.js
│   ├── App.js
│   └── index.js
└── public/
```

---

##  Database Setup

Create the database:

```sql
CREATE DATABASE perntodo;
```

Create the table:

```sql
CREATE TABLE todo (
    todo_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);
```

---

##  Running the Application

### **1. Start PostgreSQL**


```bash
brew services start postgresql@15
```

---

## Start the Backend

Navigate to the server folder:

```bash
cd server
npm install
node index.js
```

Server runs on:

```
http://localhost:5001
```

---

## Start the Frontend

Navigate to the client folder:

```bash
cd client
npm install
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## 🔗 API Endpoints

### **GET /todos**

Returns all todos.

### **GET /todos/:id**

Returns a single todo by ID.

### **POST /todos**

Creates a new todo.
Body:

```json
{
  "description": "Walk the dog"
}
```

### **PUT /todos/:id**

Updates a todo.

### **DELETE /todos/:id**

Deletes a todo by ID.

---

## Sample Fetch Request

```js
const body = { description };
const response = await fetch("http://localhost:5000/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body)
});
```

---

##  Acknowledgements

Readme written by chatgpt.

PERN Stack Course - Postgres, Express, React, and Node - freecodecamp.org

Original project video -> https://www.youtube.com/watch?v=ldYcgPKEZC8&t=4798s
