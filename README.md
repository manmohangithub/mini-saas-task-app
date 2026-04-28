# Mini SaaS Task Management App

A full-stack task management application built with React, Node.js, Express, PostgreSQL (Supabase), and Sequelize.
Users can register, log in, and manage their personal tasks securely.

---

## Live Links

Frontend (Vercel): https://mini-saas-task-app-nine.vercel.app/
Backend (Render): https://mini-saas-task-app-nckz.onrender.com

---

## Tech Stack

### Frontend

* React (Vite)
* Tailwind CSS
* React Router

### Backend

* Node.js
* Express.js
* Sequelize ORM

### Database

* PostgreSQL (Supabase)

---

## Project Structure

```
mini-saas-task-app/
│
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   ├── server.js
│   └── .env.example
│
├── frontend/
│   ├── src/
│   ├── index.html
│   └── package.json
│
└── README.md
```

---

## Environment Variables

### Backend (backend/.env)

```
PORT=5000
JWT_SECRET=your_secret_key
DATABASE_URL=your_supabase_connection_string
```

### Frontend (frontend/.env)

```
VITE_API_URL=http://localhost:5000/api
```

---

## How to Run Locally

### 1. Clone Repository

```
git clone https://github.com/YOUR_USERNAME/mini-saas-task-app.git
cd mini-saas-task-app
```

---

### 2. Setup Backend

```
cd backend
npm install
```

Create .env file:

```
PORT=5000
JWT_SECRET=your_secret_key
DATABASE_URL=your_supabase_connection_string
```

Run backend:

```
npm run dev
```

---

### 3. Setup Frontend

Open a new terminal:

```
cd frontend
npm install
```

Create .env file:

```
VITE_API_URL=http://localhost:5000/api
```

Run frontend:

```
npm run dev
```

---

## Features

* User signup and login with JWT authentication
* Protected API routes
* Create, read, update, delete tasks
* Toggle task status (Pending / Completed)
* Filter tasks (All / Completed / Pending)
* Clean and responsive user interface

---

## API Endpoints

### Auth

* POST /api/auth/signup
* POST /api/auth/login

### Tasks

* GET /api/tasks
* POST /api/tasks
* PUT /api/tasks/:id
* DELETE /api/tasks/:id

---

## Notes

* Backend may take some time to start due to Render free tier
* Ensure environment variables are configured correctly
* .env files are ignored for security reasons

---

## Author

Manmohan Reddy
GitHub: https://github.com/manmohangithub
LinkedIn: https://www.linkedin.com/in/manmohanreddy1111

---

## Summary

This project demonstrates a complete full-stack workflow including authentication, API development, database integration, and deployment of a production-ready web application.
