# 📝 Task Manager (Full Stack)

A simple and responsive full-stack Task Manager application built using **React, Node.js, Express, and MongoDB**.
Users can create, update, filter, and delete tasks efficiently.

---

## 🚀 Features

* ➕ Add task (title + description)
* 📋 View all tasks
* 🔄 Update task status (Pending / WIP / Done)
* ❌ Delete task
* 🔍 Filter tasks by status
* 📱 Responsive UI

---

## 🛠️ Tech Stack

* **Frontend:** React, Tailwind CSS (Vite)
* **Backend:** Node.js, Express
* **Database:** MongoDB

---

## 📁 Project Structure

```
Full-stack-assessment/
│
├── Backend/     # Express server & APIs
├── Frontend/    # React app (UI)
```

---

## ⚙️ Run Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Kishan-Jaiswar/Full-stack-assessment.git
cd Full-stack-assessment
```

---

## 🔧 Backend Setup

### Step 1: Navigate to Backend

```bash
cd Backend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Create `.env` File

Create a `.env` file inside the **Backend** folder and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

👉 Example (local MongoDB):

```
MONGO_URI=mongodb://127.0.0.1:27017/task-manager
```

### Step 4: Start Backend Server

```bash
npm run dev
```

✅ Backend runs on:

```
http://localhost:5000
```

---

## 💻 Frontend Setup

### Step 1: Navigate to Frontend (open new terminal)

```bash
cd Frontend
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Configure API Base URL

Ensure your frontend API calls point to:

```
http://localhost:5000
```

(Check inside your API/service file if needed)

### Step 4: Start Frontend

```bash
npm run dev
```

✅ Frontend runs on:

```
http://localhost:5173
```

---

## 🔌 API Endpoints

| Method | Endpoint   | Description        |
| ------ | ---------- | ------------------ |
| POST   | /tasks     | Create a new task  |
| GET    | /tasks     | Get all tasks      |
| PATCH  | /tasks/:id | Update task status |
| DELETE | /tasks/:id | Delete task        |

---

## 🔄 How It Works

* Frontend sends requests to backend APIs
* Backend processes logic using Express
* MongoDB stores and retrieves task data

---

## ⚠️ Important Notes

* Make sure MongoDB is running locally OR use MongoDB Atlas
* Do **NOT** push `.env` file to GitHub
* Add `.env` to `.gitignore`

---

## 📌 Author

**Kishan Jaiswar**
