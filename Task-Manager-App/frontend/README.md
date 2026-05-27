# Task Manager App

## Project Overview

Task Manager App is a full-stack web application where users can register, login, and manage their tasks across three stages: Todo, In Progress, and Done. The application supports task creation, stage update, deletion, JWT authentication, protected APIs, MongoDB database storage, and live deployment.

## Features

- User Registration
- User Login
- JWT Authentication
- Protected Dashboard
- Create Task
- Update Task Stage
- Delete Task
- Todo, In Progress, Done stages
- MongoDB Database Integration
- Responsive UI
- Loading and Error State Handling

## Tech Stack

### Frontend
- React.js
- Vite
- Axios
- React Router DOM
- CSS

### Backend
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- JWT
- bcryptjs
- cors
- dotenv

## Folder Structure

```text
Task-Manager-App
│
├── frontend
│   ├── src
│   ├── package.json
│
├── Task-Manager-App
│   └── backend
│       ├── models
│       ├── routes
│       ├── middleware
│       ├── server.js
│       └── package.json
│
└── README.md

##Auth APIs

POST /api/auth/register
POST /api/auth/login

##Task APIs

GET /api/tasks
POST /api/tasks
PUT /api/tasks/:id
DELETE /api/tasks/:id

##Authentication

JWT Authentication is implemented.
Protected APIs are used for task management.
Users must login to access tasks.
JWT token is stored in localStorage.

##Database Integration

MongoDB Atlas is used as cloud database.
User data and task data are stored in MongoDB collections.
Mongoose is used for MongoDB schema modeling.

##Assumptions

Each user manages only their own tasks.
Tasks belong to one of three stages:
Todo
In Progress
Done
JWT token is stored in browser localStorage.
Backend implementation was completed because AI-assisted tools were used during development.

##Tradeoffs

Drag-and-drop functionality was not added to keep the implementation simple and complete.
localStorage was used for token storage for simplicity.
Minimal UI design was preferred over complex animations.
APIs were kept simple and focused on assignment requirements.

##Technical Decisions

React with Vite was selected for fast frontend development.
Express.js was used for custom backend API development.
MongoDB Atlas was selected for cloud database integration.
JWT Authentication was implemented for secure API access.
Render was used for backend deployment.
Vercel was used for frontend deployment.

## Frontend Live Link

https://task-manager-dsttfzk4s-nelaturi999s-projects.vercel.app/login

## Backend Live Link

https://task-manager-backend1-ir8r.onrender.com

## GitHub Repository Link

https://github.com/nelaturi999/Task-Manager-App

## Frontend Commands

cd frontend
npm install
npm run dev
http://localhost:5173

## Backend Commands

cd Task-Manager-App/backend
npm install
npm run dev
http://localhost:8000

## Environment Variables

PORT=8000
MONGO_URI=mongodb+srv://sasank:12345@cluster0.abifjo0.mongodb.net/taskmanager?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET=secret123

## Frontend Deployment

Frontend deployed successfully on Vercel.

##Backend Deployment

Backend deployed successfully on Render.

## Final Output

The project successfully implements:

Authentication system
Protected backend APIs
Task CRUD operations
MongoDB database integration
Responsive frontend UI
Live frontend deployment
Live backend deployment

## Conclusion

This project successfully implements a complete full-stack Task Manager application with authentication, task CRUD operations, protected APIs, MongoDB integration, responsive UI design, and live deployment using Vercel and Render.
