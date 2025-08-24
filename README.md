# 🌐 DevTinder Backend – Developer Networking Application

**DevTinder Backend** powers the DevTinder application, providing APIs for authentication, real-time chat, connection requests, and user management.  
It is built with **Node.js, Express.js, and MongoDB**, integrated with **Socket.io** for real-time communication.  

🚀 **Frontend Live URL:** [DevTinder Frontend (Vercel)](https://dev-tinder-frontend-chi.vercel.app/login)  
📂 **Frontend Repository:** [GitHub Repo](https://github.com/Krutheesh/DEV_TINDER_FRONTEND)  

🚀 **Backend Live API:** [DevTinder Backend (Vercel)](https://dev-tinder-backend.vercel.app/)  
📂 **Backend Repository:** [GitHub Repo](https://github.com/Krutheesh/DEV_TINDER_BACKEND/)  

---

## ✨ Features

- 🔐 **Authentication & Authorization** – Signup, login, and JWT-based secure sessions  
- 🤝 **Connection Requests** – APIs for sending, accepting, and managing developer connections  
- 💬 **Real-time Chat** – Powered by **Socket.io**  
- 🗄️ **Database** – MongoDB schema for users, messages, and connections  
- ⚡ **API Endpoints** – Well-structured REST APIs for frontend integration  
- 📈 **Feed & Cards** – APIs to fetch user feed and developer cards  

---

## 🛠️ Tech Stack

- Node.js  
- Express.js  
- MongoDB  
- Socket.io (real-time chat & connections)  
- JWT for authentication  

---

## 🚀 Backend Setup

Follow these steps to set up and run the backend locally:

## 1️⃣ Clone the backend repository

git clone https://github.com/Krutheesh/DEV_TINDER_BACKEND.git

## 2️⃣ Go into the project directory

cd DEV_TINDER_BACKEND

## 3️⃣ Install dependencies
npm install

## 4️⃣ Set up environment variables

PORT=5000
MONGO_URI=your_mongodb_connection_string
SOCKET_KEY=your_socket_api_key  # if needed
JWT_SECRET=your_jwt_secret

## 5️⃣ Start the backend server
npm run dev   # or node index.js depending on your setup

## 6️⃣ Test the backend API
http://localhost:5000/

## 7️⃣ Integrate with frontend
VITE_BACKEND_URL=http://localhost:5000
VITE_SOCKET_URL=http://localhost:5000
