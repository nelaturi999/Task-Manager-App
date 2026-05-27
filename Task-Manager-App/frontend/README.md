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