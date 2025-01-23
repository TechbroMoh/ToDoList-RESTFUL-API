# ToDoList API

## Introduction
The **ToDoList API** is a RESTful web service that allows users to manage their tasks efficiently. It enables **CRUD (Create, Read, Update, Delete)** operations on tasks stored in a **MongoDB database**.

## Project Scope and Objectives
This API allows users to:
- ✅ Add new tasks to a list
- ✅ Update task details (e.g., status, description)
- ✅ Delete tasks
- ✅ View all tasks or a specific task

### Tech Stack
- **Node.js** – JavaScript runtime
- **Express.js** – Fast web framework for Node.js
- **MongoDB Atlas** – Cloud database
- **Mongoose** – ODM library for MongoDB

## Prerequisites
Before running this project, ensure you have:
- **Node.js** installed
- **MongoDB Atlas account** (or MongoDB installed locally)
- **Postman** (optional, for testing API requests)

## Getting Started

### 1. Clone the Repository
```bash
git clone git@github.com:TechbroMoh/ToDoList-RESTFUL-API.git
cd To-Do-List-REST-API
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up MongoDB Atlas Connection
1. Go to **[MongoDB Atlas](https://www.mongodb.com/atlas/database)**
2. Create a **new cluster**
3. Get your **MongoDB connection string**
4. Create a **`.env`** file in the root of your project:
```bash
touch .env
```
5. Add this inside `.env`:
```
MONGO_URI=mongodb+srv://your-username:your-password@your-cluster.mongodb.net/ToDo
PORT=4000

In this case, I used the following MongoDB URI to connect to my database:
MONGO_URI=mongodb+srv://felixmonari:monari24@cluster1.lnizb.mongodb.net/ToDo

Additionally, I was running the server locally on port 4000. You can change the PORT value if you want to use a different one.

Make sure to replace felixmonari and monari24 with your own MongoDB credentials.
```

### 4. Start MongoDB Shell (Local Users Only)
If using **local MongoDB**, run:
```bash
mongosh
```
If using **MongoDB Atlas**, skip this step.

### 5. Run the Server
```bash
node server.js
```
You'll see:
```
Todo List RESTful API server started on port: 4000
MongoDB connected successfully to Atlas
```

## API Endpoints

| Method | Endpoint | Description |
|--------|---------|-------------|
| **GET** | `/tasks` | Get all tasks |
| **GET** | `/tasks/:taskId` | Get a specific task by ID |
| **POST** | `/tasks` | Create a new task |
| **PUT** | `/tasks/:taskId` | Update a task by ID |
| **DELETE** | `/tasks/:taskId` | Delete a task |

### Example Request - Create a Task
**POST** `/tasks`
```json
{
  "name": "Write Blog Post",
  "description": "Complete the article on MongoDB",
  "status": ["pending"]
}
```

## Testing the API with Postman
1. Open **Postman**
2. Select **POST**
3. Enter `http://localhost:4000/tasks`
4. Go to **Body → raw → JSON** and add:
```json
{
  "name": "Techbro@Civic",
  "description": "Civic Voices is the Public Participation platform",
  "status": ["ongoing"]
}
```
5. Click **Send** ✅

## License
This project is licensed under the **MIT License**.

## Acknowledgements
- **Express.js** – Web framework
- **Mongoose** – MongoDB ODM
- **MongoDB Atlas** – NoSQL cloud database
- **Node.js** – JavaScript runtime

