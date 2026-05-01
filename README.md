# 🚀 AI Invoice Microservices System

A full-stack **Microservices-based Backend System** built using Node.js, Express, MongoDB, and modern APIs like **Razorpay** and **Google Gemini AI**.

This project simulates a real-world SaaS backend where users can:

* 🔐 Register & Login (JWT Authentication)
* 🧾 Create and Manage Invoices
* 💳 Initiate Payments via Razorpay
* 🤖 Generate AI-based invoices using Gemini
* 🟣 Upgrade Subscription (FREE → PRO)
* 🌐 Route everything through an API Gateway

---

# 🏗️ Architecture

```
Client (Postman / Frontend)
        ↓
   API Gateway (5000)
        ↓
-------------------------------------
| User Service        (5001)        |
| Invoice Service     (5002)        |
| Subscription Service(5003)        |
| Payment Service     (5007)        |
| AI Service          (5005)        |
-------------------------------------
```

---

# ⚙️ Tech Stack

* Node.js
* Express.js
* MongoDB + Mongoose
* JWT Authentication
* Razorpay API (Payments)
* Google Gemini API (AI)
* http-proxy-middleware (Gateway)

---

# 📂 Folder Structure

```
backend/
│
├── api-gateway/
├── user-service/
├── invoice-service/
├── subscription-service/
├── payment-service/
├── ai-service/
│
└── docker-compose.yml (optional)
```

---

# 🔑 Environment Variables

## Payment Service (.env)

```
PORT=5007
RAZORPAY_KEY_ID=your_key
RAZORPAY_SECRET=your_secret
```

## AI Service (.env)

```
PORT=5005
GEMINI_API_KEY=your_api_key
```

## User Service (.env)

```
PORT=5001
MONGO_URI=your_mongo_uri
JWT_SECRET=your_secret
```

---

# 🚀 How to Run

### 1. Install dependencies (each service)

```
npm install
```

### 2. Start all services

```
npm run dev
```

### 3. Start API Gateway

```
cd api-gateway
npm run dev
```

---

# 🧪 API Testing (Postman)

## 🔐 Register

```
POST /api/users/register
```

## 🔑 Login

```
POST /api/users/login
```

---

## 🧾 Create Invoice

```
POST /api/invoices/create
Authorization: Bearer TOKEN
```

---

## 📄 Get Invoices

```
GET /api/invoices
Authorization: Bearer TOKEN
```

---

## 💳 Create Payment Order

```
POST /api/payment/create-order
{
  "amount": 5000
}
```

---

## 🤖 AI Generate

```
POST /api/ai/generate
{
  "text": "Generate invoice for laptop worth 50000"
}
```

---

## 🟣 Subscription Upgrade

```
POST /api/subscription/upgrade
{
  "userId": "123"
}
```

---

# 🔄 System Flow

```
User Login → Create Invoice → Payment Order
            ↓
      Payment Success
            ↓
   Subscription Upgrade (PRO)
            ↓
   Invoice Status → PAID
```

---

# ⚠️ Important Notes

* Do NOT expose API keys publicly
* Always use `.env` for secrets
* Restart server after env changes
* Razorpay test keys required for testing
* Gemini API key must be valid

---

# 🧠 Learnings

* Microservices Architecture
* API Gateway Routing
* JWT Authentication
* Third-party API Integration
* Real-world backend flow design

---

# 🚀 Future Improvements

* Payment verification (webhooks)
* Role-based access (Admin/User)
* Docker + Kubernetes deployment
* Frontend integration (React)
* Rate limiting & security

---

# 👨‍💻 Author

**Anuj Maurya**

---

# ⚡ Final Thought

> This is not just a project.
> This is the foundation of a production-grade backend system.

---

⭐ If you like this project, give it a star!
