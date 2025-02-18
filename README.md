Menu Management System

A full-stack web application designed for managing hierarchical menus, integrating both frontend and backend functionalities seamlessly.

---



### **Frontend**
- **Next.js 14** - Modern React framework for fast and scalable UI development.
- **React** - Component-based architecture for building interactive interfaces.
- **Redux Toolkit** - Efficient state management for predictable data flow.

### **Backend**
- **NestJS** - Scalable and maintainable Node.js framework.
- **PostgreSQL** - Robust relational database for data persistence.
- **Prisma** - ORM for seamless database interactions.

---

## ⚡ Quick Start Guide

### 🔹 Clone Repository
```sh
git clone https://github.com/hegifebrianto/menu-management-system
cd menu-managment-system
```

### 🔹 Frontend Setup
1️⃣ Install dependencies:
```sh
npm install
```

2️⃣ Configure environment variables (`.env`):
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api/
```

3️⃣ Run the frontend application:
```sh
npm run dev
```

---

### 🔹 Backend Setup
1️⃣ Install dependencies:
```sh
npm install
```

2️⃣ Configure database in `.env`:
```env
DATABASE_URL=postgresql://admin:admin@localhost:5432/menu_management_system

```

3️⃣ Apply database migrations:
```sh
npx prisma migrate deploy
```

4️⃣ Start the backend server:
```sh
npm run start:dev
```

---

## 📖 API Documentation

Access the API documentation via Swagger UI:
http://localhost:3000/api#/

For further inquiries or contributions, feel free to raise issues or submit pull requests. 🚀

