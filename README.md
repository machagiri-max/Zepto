# 🛒 ZStore

ZStore is a full-stack quick-commerce grocery delivery application inspired by platforms like Zepto. The project is built using **React.js for the frontend** and **Django for the backend**.

Users can browse products, register and log in, add products to their cart, and manage their orders through a simple and responsive interface.

---

## 🚀 Features

* 🔐 User Registration and Login
* 🛍️ Browse grocery products
* 🏪 Order from ZStore
* 🏬 Explore products from favorite stores
* 🛒 Add products to cart
* 🔢 Dynamic cart item count
* ❌ Remove items from cart
* 👤 Display logged-in username
* 💰 Dynamic product pricing
* ⚡ React-based frontend
* 🔗 Django REST API backend

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* HTML5
* CSS3

### Backend

* Django
* Django REST Framework
* Python

### Database

* SQLite / Django Database

### Tools

* Git
* GitHub
* VS Code

---

## 📂 Project Structure

```text
ZStore/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── package.json
│   └── vite.config.js
│
├── backend/
│   ├── users/
│   ├── manage.py
│   └── requirements.txt
│
└── README.md
```

---

## ⚙️ Installation and Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/zstore.git
```

### 2. Navigate to the Project

```bash
cd zstore
```

---

## 🔧 Backend Setup

Navigate to the backend folder:

```bash
cd backend
```

Create a virtual environment:

```bash
python -m venv venv
```

Activate the virtual environment.

### Windows

```bash
venv\Scripts\activate
```

Install dependencies:

```bash
pip install -r requirements.txt
```

Run migrations:

```bash
python manage.py migrate
```

Start the Django server:

```bash
python manage.py runserver
```

The backend will run at:

```text
http://127.0.0.1:8000/
```

---

## 💻 Frontend Setup

Open a new terminal and navigate to the frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React development server:

```bash
npm run dev
```

The frontend will run at:

```text
http://localhost:5173/
```

---

## 🔗 API Endpoints

| Method | Endpoint             | Description         |
| ------ | -------------------- | ------------------- |
| POST   | `/api/users/signup/` | Register a new user |
| POST   | `/api/users/login/`  | Login user          |

---

## 🖼️ Application Flow

1. User opens the ZStore application.
2. User can register or log in.
3. Products are displayed on the home page.
4. User can browse products from ZStore or favorite stores.
5. Products can be added to the cart.
6. Cart count updates dynamically.
7. Users can remove products from the cart.

---

## 🎯 Project Objective

The main objective of ZStore is to build a **full-stack quick-commerce application** and gain practical experience in:

* React frontend development
* Django backend development
* REST API integration
* User authentication
* State management
* Full-stack project architecture

---

## 🔮 Future Improvements

* 💳 Online payment integration
* 📦 Order tracking
* 📍 Location-based delivery
* 🛵 Delivery partner module
* 🧑‍💼 Admin dashboard
* 🔔 Order notifications
* 🗄️ PostgreSQL database integration

---

## 👨‍💻 Author

**Nirudu Machagiri**

B.Tech Computer Science and Data Science Student

---

⭐ If you like this project, consider giving it a star!
