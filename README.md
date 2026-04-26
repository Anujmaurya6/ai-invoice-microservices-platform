# 🚀 AI Invoice Microservices Platform

An AI-powered invoice generation system built using a **MERN Microservices Architecture**.
This project demonstrates real-world backend scalability with multiple services, API Gateway, authentication, payment integration, and AI automation.

---

## 🧠 Features

* 🔐 User Authentication (JWT आधारित)
* 🧾 Invoice Creation & Management
* 🤖 AI-based Invoice Generation (Gemini API)
* 💳 Razorpay Payment Integration
* 🟣 Subscription System (Basic / Pro)
* 🌐 API Gateway (Single Entry Point)
* ⚡ Microservices Architecture (Scalable Design)

---

## 🏗️ Project Structure

```
ai-invoice-microservices-platform/
│
├── backend/
│   ├── api-gateway/
│   ├── user-service/
│   ├── invoice-service/
│   ├── subscription-service/
│   ├── payment-service/
│   └── ai-service/
│
├── frontend/
│
├── .gitignore
└── README.md
```

---

## ⚙️ Tech Stack

### Frontend

* React.js
* Tailwind CSS
* Axios

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### Microservices & Tools

* API Gateway (http-proxy-middleware)
* Razorpay (Payments)
* Gemini API (AI Integration)
* Concurrently (Run all services)

---

## 🚀 How to Run the Project

### 1️⃣ Clone Repository

```
git clone https://github.com/your-username/ai-invoice-microservices-platform.git
cd ai-invoice-microservices-platform
```

---

### 2️⃣ Install Dependencies

```
cd backend
npm install

cd api-gateway && npm install
cd ../user-service && npm install
cd ../invoice-service && npm install
cd ../subscription-service && npm install
cd ../payment-service && npm install
cd ../ai-service && npm install

cd ../../frontend
npm install
```

---

### 3️⃣ Setup Environment Variables

Create `.env` file in each backend service:

Example:

```
PORT=5001
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret
```

---

### 4️⃣ Run Backend (All Services Together)

```
cd backend
npm run dev
```

---

### 5️⃣ Run Frontend

```
cd frontend
npm run dev
```

---

## 🔄 System Flow

```
Frontend → API Gateway → Microservices
```

* User → Authentication Service
* Invoice → Invoice Service
* AI → AI Service
* Payment → Payment Service
* Subscription → Subscription Service

---

## 💡 Future Improvements

* 🔒 Secure routes with middleware
* 📊 Dashboard analytics
* 📄 PDF invoice generation
* 🌍 Deployment (AWS / Docker)
* 🔁 Real subscription DB integration

---

## ⚔️ Key Learning

> "From monolith to microservices — building scalable, real-world backend systems."

---

## 👨‍💻 Author

**Anuj Maurya**
Aspiring Java Full Stack Developer 🚀

---

## ⭐ If you like this project

Give it a ⭐ on GitHub and share!
