# 📝 Thinkboard

A full-stack note-taking application built with React, Vite, Node.js, Express, and MongoDB. Easily create, view, and manage your notes with a modern, responsive interface and robust backend.



---

## 🚀 Features

- ⚡ Fast and modern React + Vite frontend
- 🗒️ RESTful API for notes management
- 🔒 Secure MongoDB database integration
- 🌐 Cross-platform and responsive design
- 🔄 Hot Module Replacement (HMR) for rapid development
- 🧹 ESLint integration for code quality

---

## 📦 Tech Stack

- **Frontend:** React, Vite, Tailwind CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB (Atlas)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js v22.12.0 or higher
- npm v11.1.0 or higher
- MongoDB Atlas account (or local MongoDB)

### 1. Clone the repository
```bash
git clone https://github.com/your-username/thinkboard.git
cd thinkboard
```

### 2. Setup Backend
```bash
cd backend
npm install
```
- Create a `.env` file in the `backend` folder:
  ```env
  MONGO_URI=your_mongodb_connection_string
  PORT=5001
  NODE_ENV=development
  ```
- Start the backend server:
  ```bash
  cd backend
  npm install
  npm run dev
  ```

### 3. Setup Frontend
```bash
cd ../frontend
npm install
npm run dev
```

---

## 📁 Project Structure
```
thinkboard/
├── backend/
│   ├── src/
│   ├── .env
│   └── package.json
└── frontend/
    ├── src/
    ├── public/
    └── package.json
```

---

## 🌍 Environment Variables
Example `.env` for backend:
```env
MONGO_URI=your_mongodb_connection_string
PORT=5001
NODE_ENV=development
```

---

## 📜 License

This project is licensed under the MIT License.

---

## 🙌 Acknowledgements
- [React](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [Express](https://expressjs.com/)
- [MongoDB Atlas](https://www.mongodb.com/atlas)

---


