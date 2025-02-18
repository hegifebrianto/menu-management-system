# 📌 Menu Management System - Frontend

This is the **frontend** of the Menu Management System, developed with:
- **Next.js 14** (App Router & API Routes)
- **Redux Toolkit** for state management
- **TailwindCSS** for styling
- **TypeScript** for enhanced type safety

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/hegifebrianto/menu-management-system
cd frontend
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file and define the API base URL:
```env
NEXT_PUBLIC_API_BASE_URL=https://menu-management-system-production.up.railway.app/api
```

### 4️⃣ Run the Development Server
```sh
npm run dev
```

---

## 🎯 Key Features
✔ **Hierarchical Menu Management** - Organize menus dynamically in a tree structure.  
✔ **Sidebar Navigation** - Easily navigate through the menu categories.  
✔ **State Management with Redux** - Optimized global state handling.  
✔ **API Connectivity** - Seamless communication with the backend.  
✔ **Fully Responsive** - Adaptable UI for all devices.  

---

## 📡 API Endpoints
- **`GET /menus`** - Retrieve all menus.
- **`GET /menus/top-level`** - Retrieve all menus with head top level.
- **`POST /menus`** - Add a new menu entry.
- **`PUT /menus/:id`** - Modify an existing menu.
- **`DELETE /menus/:id`** - Remove a menu entry.

---

## 🛠️ Technologies Used
- **Next.js 14** - React framework for modern web applications.
- **Redux Toolkit** - Centralized state management.
- **TailwindCSS** - Utility-first CSS framework.
- **TypeScript** - Static typing for better maintainability.

---

### 📢 Contributions & Feedback
We welcome contributions! If you have suggestions or feature requests, feel free to create an issue or submit a pull request.

Enjoy coding! 🚀

