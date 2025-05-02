# 🎓 Student Management Application Portal

A full-stack **MERN** (MongoDB, Express, React, Node.js) web application that provides a simple and intuitive interface to manage student members. Built with the **MVC architecture**, this project demonstrates modular design, clean code separation, and real-time data reflection using **MongoDB Compass**.

## 📌 Features

* ✅ **Add Member**: Create new student entries with relevant details.
* 📋 **View Members**: Browse a list of all registered students.
* 🔍 **Member Details**: Click on a member to view their detailed profile.
* 📂 **MongoDB Integration**: All changes are persisted and visible via MongoDB Compass.

## 🧱 Tech Stack

* **Frontend**: React.js (with React Router & Axios)
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (connected via Mongoose)
* **Architecture**: MVC (Model-View-Controller)

## 📁 Folder Structure

```
├── client/                # React frontend
│   ├── components/        # Reusable components (e.g. AddForm, MemberCard)
│   ├── pages/             # Pages: AddMember, ViewMembers, MemberDetails
│   └── App.js             # Routes and layout
│
├── server/                # Express backend
│   ├── controllers/       # Logic for handling requests
│   ├── models/            # Mongoose models
│   ├── routes/            # API route handlers
│   └── server.js          # Entry point for backend
│
└── .env                   # Environment variables
    package.json           # Project dependencies
```

## 🛠️ How to Run

### 1. Clone the repository

```bash
git clone https://github.com/your-username/CodeCrafters.git
cd CodeCrafters
```

### 2. Start the backend

```bash
cd server
npm install express date-fns path cors
npm run dev
```

### 3. Start the frontend

```bash
cd my-app
npm install @mui/material react react-router-dom
npm run dev
```

> Make sure MongoDB is running locally or connected via MongoDB Atlas, and update the `.env` file accordingly.

---

## ✨ Future Enhancements

* 🔐 Authentication and role-based access (Admin/Student)
* 📊 Dashboard with charts and analytics
* 📁 File uploads (report cards, documents)
* 🗕️ Attendance tracking

---

## 📬 Contact

For feedback or collaboration, reach out at: **[your.email@example.com](mailto:your.email@example.com)**
