# 🕰️ CHRONOEVER — Full-Stack MERN E-Commerce App

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=flat&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white)
![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=flat&logo=stripe&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat&logo=vercel&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Progress-orange?style=flat)

> A fully-featured e-commerce web application being built from scratch using the MERN stack. Includes a customer-facing storefront, product filtering, cart, payments (Stripe & Razorpay), and an admin dashboard — deployed on Vercel.

🔗 **Live Demo (Frontend):** https://chronoever.vercel.app/

---

## 📁 Project Structure

```
ECOMMERCEAPP/
└── frontend/
    ├── src/
    │   ├── components/       # Reusable UI components
    │   │   ├── Navbar.jsx
    │   │   ├── Hero.jsx
    │   │   ├── LatestCollection.jsx
    │   │   ├── BestSeller.jsx
    │   │   ├── OurPolicy.jsx
    │   │   ├── NewsletterBox.jsx
    │   │   ├── Footer.jsx
    │   │   ├── ProductItem.jsx
    │   │   ├── SearchBar.jsx
    │   │   └── Title.jsx
    │   ├── pages/            # Route-level pages
    │   │   ├── Home.jsx
    │   │   ├── Collection.jsx
    │   │   ├── Product.jsx
    │   │   ├── Cart.jsx
    │   │   ├── PlaceOrder.jsx
    │   │   ├── Orders.jsx
    │   │   ├── Login.jsx
    │   │   ├── About.jsx
    │   │   └── Contact.jsx
    │   ├── context/          # React Context (global state)
    │   ├── assets/           # Images and static files
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── index.html
    ├── vite.config.js
    ├── tailwind.config.js
    └── package.json
```

---

## ✅ Progress Tracker

### 🎨 Frontend — Components
- [x] `Navbar.jsx` — Responsive navbar with mobile sidebar toggle
- [x] `Hero.jsx` — Landing hero section with image
- [x] `LatestCollection.jsx` — Latest products display
- [x] `BestSeller.jsx` — Best selling products section
- [x] `OurPolicy.jsx` — Store policy icons section
- [x] `NewsletterBox.jsx` — Email newsletter signup
- [x] `Footer.jsx` — Site footer with links
- [x] `ProductItem.jsx` — Individual product card component
- [x] `SearchBar.jsx` — Search bar component
- [x] `Title.jsx` — Reusable section title component

### 📄 Frontend — Pages
- [x] `Home.jsx` — Full homepage assembled
- [x] `Collection.jsx` — Product listing with filter sidebar (Categories & Type)
- [ ] `Product.jsx` — Individual product detail page
- [ ] `Cart.jsx` — Shopping cart with item management
- [ ] `PlaceOrder.jsx` — Checkout with delivery address
- [ ] `Orders.jsx` — Order history page
- [ ] `Login.jsx` — User authentication page
- [ ] `About.jsx` — About page
- [ ] `Contact.jsx` — Contact page

### ⚙️ Frontend — Features
- [x] Euro (€) currency localisation
- [x] Custom CHRONOEVER branding
- [x] React Router setup
- [x] Tailwind CSS configuration
- [ ] React Context — cart state management
- [ ] React Context — user authentication state
- [ ] Search and filter logic (price, category, type, sort)
- [ ] Size variant selection on product page

### 🔧 Backend — Node.js + Express
- [ ] Express server setup
- [ ] MongoDB connection (Mongoose)
- [ ] Product API routes (GET, POST, DELETE)
- [ ] User authentication (JWT)
- [ ] Order management API
- [ ] Admin middleware

### 💳 Payments
- [ ] Stripe payment gateway integration
- [ ] Razorpay payment gateway integration
- [ ] Cash on Delivery option

### 🖥️ Admin Dashboard
- [ ] Admin login
- [ ] Upload new products
- [ ] Delete products
- [ ] View all orders
- [ ] Update order status

### 🚀 Deployment
- [x] Frontend deployed on Vercel ✅ https://chronoever.vercel.app/
- [ ] Backend API deployed on Vercel
- [ ] Vercel JSON config setup
- [ ] Environment variables configured

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React.js, Vite, Tailwind CSS |
| Backend | Node.js, Express.js |
| Database | MongoDB (Mongoose) |
| Auth | JWT (JSON Web Tokens) |
| Payments | Stripe, Razorpay |
| Deployment | Vercel |

---

## 🚀 Getting Started

```bash
# Clone the repo
git clone https://github.com/obcboscowork/CHRONOEVER.git

# Go into frontend
cd CHRONOEVER/frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```

---

## 👨‍💻 Author

**Oishik Bhanja Choudhury** — MSc Computer Science, TU Clausthal
- GitHub: [@obcboscowork](https://github.com/obcboscowork)
- LinkedIn: [oishik-digital-lead](https://www.linkedin.com/in/oishik-digital-lead/)
