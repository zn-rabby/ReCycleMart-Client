<div align="center">

# ReCycleMart - Frontend 🛒

**ReCycleMart** is an online marketplace for buying and selling second-hand products. This repository contains the frontend of the platform, built with cutting-edge technologies to deliver a seamless and user-friendly experience.

[![Live Demo](https://img.shields.io/badge/Live%20Demo-SecondHand%20Client-green?style=for-the-badge&logo=vercel)](https://re-cycle-mart-client.vercel.app/)  
[![Backend Server](https://img.shields.io/badge/Backend%20Server-SecondHand%20Server-blue?style=for-the-badge&logo=vercel)](https://second-hand-server-puce.vercel.app)  
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repo-black?style=for-the-badge&logo=github)](https://github.com/zn-rabby/ReCycleMart-Client.git)

</div>

---

## ✨ Features

### **For Users**

- **Easy Listings**: Post, browse, and purchase second-hand products effortlessly.
- **Advanced Search**: Filter products by category, price, condition, and location.
- **Wishlist**: Save your favorite items for later.
- **Secure Transactions**: Safe and reliable buying/selling experience.

### **For Admins**

- **User Management**: Ban/unban users and manage accounts.
- **Listing Moderation**: Review and delete inappropriate listings.
- **Sales Tracking**: Monitor sales and user activity.

---

## 🛠 Tech Stack

| **Category**         | **Technologies**       |
| -------------------- | ---------------------- |
| **Frontend**         | Next.js 15, TypeScript |
| **UI Library**       | ShadCN UI              |
| **State Management** | Redux Toolkit          |
| **Styling**          | Tailwind CSS           |
| **Authentication**   | Custom Auth, JWT       |

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- Git

### Installation Steps

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/zn-rabby/SecondHand-Client.git
   cd SecondHand-Client
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add the following:

   ```env
   NEXT_PUBLIC_BASE_API=https://second-hand-server-puce.vercel.app/api/v1
   ```

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

5. **Access the Application**:
   Open your browser and navigate to `http://localhost:3000`.

---

## 📂 Project Structure

```
resellbd-frontend/
│-- public/         # Static assets (images, icons, etc.)
│-- src/
│   ├── app/        # Application-level components and pages
│   ├── assets/     # Images, fonts, and other static assets
│   ├── components/ # Reusable UI components
│   ├── constants/  # Constant values used throughout the app
│   ├── lib/        # Utility functions and helper libraries
│   ├── providers/  # Context and global state providers
│   ├── redux/      # Redux state management
│   ├── types/      # TypeScript type definitions
│   ├── hooks/      # Custom React hooks
│   ├── services/   # API and service-related functions
│-- middleware.ts   # Middleware configuration
│-- .env           # Environment variables
│-- .gitignore     # Git ignore file
│-- package.json   # Dependencies & scripts
│-- README.md      # Project documentation
```

---

## 🔧 Available Scripts

| **Command**     | **Description**                   |
| --------------- | --------------------------------- |
| `npm run dev`   | Starts the development server     |
| `npm run build` | Builds the project for production |
| `npm run start` | Runs the production build         |
| `npm run lint`  | Checks for linting errors         |

---

## 🌐 API Integration

### Base URL

- `NEXT_PUBLIC_BASE_API`: `https://second-hand-server-puce.vercel.app/api/v1`

### Key Endpoints

| **Endpoint**           | **Description**       |
| ---------------------- | --------------------- |
| `GET /listings`        | Fetch all products    |
| `GET /listings/:id`    | Fetch product details |
| `PATCH /listings/:id`  | Update product data   |
| `DELETE /listings/:id` | Delete product        |
| `POST /listings`       | Add a new product     |
| `POST /transactions`   | Place an order        |

---

## 🔐 Authentication & Security

- **Custom Authentication**: Secure login and registration system.
- **JWT (JSON Web Token)**: Used for secure API calls and session management.
- **Role-Based Access Control (RBAC)**: Differentiates between admin and user roles.
- **HTTPS**: Enforced for secure communication.

---

## 📊 Admin Dashboard

- **User Management**: View, edit, and delete user accounts.
- **Listing Management**: Manage product listings (approve, edit, or delete).
- **Order Management**: Track and manage orders.
- **Reporting**: Generate reports on user activity and sales.

---

## 🎨 UI/UX Design

- **Modern Design**: Built with **ShadCN UI** and **Tailwind CSS** for a clean and responsive layout.
- **Mobile-First Approach**: Fully optimized for all devices, including mobile, tablet, and desktop.

---

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes with clear and descriptive messages.
4. Submit a pull request with a detailed description of your changes.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](LICENSE) file for details.

---

## 📞 Contact

For queries or support, feel free to reach out:

- **Name**: Zulkar Naeem Rabby
- **Email**: zn-rabby@gmail.com

---

<div align="center">

### **Happy Coding!** 🚀

</div>
