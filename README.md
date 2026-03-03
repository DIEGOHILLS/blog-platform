# 🚀 Blog Platform (Full Stack)

A modern full-stack blogging platform built with **Spring Boot**, **React**, and **PostgreSQL**, featuring JWT authentication, rich text editing, dark mode, and production deployment.

### 🌍 Live Demo

Frontend:

* [https://blog-platform-ylvh.onrender.com](https://blog-platform-ylvh.onrender.com)

Backend API:

* [https://blog-dcrc.onrender.com](https://blog-dcrc.onrender.com)

---

## 🧠 Features

* 🔐 JWT Authentication (Register / Login)
* 📝 Rich Text Editor (TipTap)
* 🗂 Categories & Tags system
* 📄 Draft & Published posts
* 🌙 Dark Mode (System-aware)
* 🛡 Secure backend with Spring Security
* 🗄 PostgreSQL database (Neon)
* ☁️ Deployed on Render

---

## 🏗 Tech Stack

### Backend

* Java
* Spring Boot
* Spring Security
* JWT (io.jsonwebtoken)
* Hibernate / JPA
* PostgreSQL (Neon)
* Docker (local dev)

### Frontend

* React + TypeScript
* Vite
* NextUI
* TailwindCSS
* TipTap Editor
* Axios

---

## 🔐 Authentication Flow

* User registers → password encrypted with BCrypt
* Backend generates JWT token
* Token stored in localStorage
* Axios interceptor attaches `Authorization: Bearer <token>`
* Protected routes validated via JWT filter

---

## 🛠 Local Development

### Backend

```bash
# from backend repo
docker compose up --build
```

### Frontend

```bash
# from frontend repo
npm install
npm run dev
```

---

## 🌍 Deployment

* Backend deployed to Render Web Service
* Database hosted on Neon (serverless PostgreSQL)
* Frontend deployed separately on Render
* Environment variables configured securely

---

## 🧩 Challenges Solved

* CORS configuration for separate frontend/backend domains
* JWT filter integration with Spring Security
* NextUI + React Router deployment wiring
* Production database config (Neon)
* Fixing strict TypeScript build issues in CI
* Vite environment variables in production

---

## 📌 Future Improvements

* User profile endpoint + page
* Image upload support
* Pagination
* Search
* Role-based access control (Admin)

---

