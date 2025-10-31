# 🪙 Logiclead FASTag Recharge (Fullstack – Client + Server)

A **full-stack FASTag recharge project** built with **React.js (frontend)** and **Node.js + Express (backend)**.  
Originally a frontend-only UI, this version now includes a working **login flow** with backend setup and database configuration support.

---

## ✨ Features

### 🖥 Frontend (Client)
- ⚡ FASTag recharge form (React + Tailwind)
- 🏦 Provider logos grid
- 💬 FAQ Accordion section
- 🎨 Clean & responsive UI design
- 🚀 Easy to extend for API integration

### ⚙ Backend (Server)
- 🔐 Login flow using email
- 🧩 Express.js REST API setup
- 🗄 MongoDB / PostgreSQL ready (configurable)
- 🌐 Cross-origin (CORS) enabled
- 📁 Modular folder structure (controllers, routes, config)

---

## 🧩 Tech Stack

| Layer | Technology |
|-------|-------------|
| **Frontend** | React.js + Tailwind CSS |
| **Backend** | Node.js + Express.js |
| **Database** | MongoDB or PostgreSQL (configurable) |
| **Language** | JavaScript (JSX + ES6) |

---

## 📂 Folder Structure

logiclead-fastag/
│
├── client/ # Frontend (React + Tailwind)
│ ├── src/
│ ├── public/
│ ├── package.json
│ └── ...
│
└── server/ # Backend (Express + DB)
├── routes/
├── controllers/
├── models/
├── config/
├── server.js
├── package.json
└── ...


---

## ⚙ Installation and Setup

Follow these steps to set up both **frontend and backend** locally 👇

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/your-username/logiclead-fastag.git
2️⃣ Move into the Project Folder
cd logiclead-fastag

🖥️ Frontend Setup
cd client
npm install
npm run dev
⚙ Backend Setup
cd ../server
npm install
noder server.js

🔐 Environment Variables
Create a .env file inside server/ with the following:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key