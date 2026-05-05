# 🚀 AI Invoice Microservices Platform

A full-stack **Microservices-based Invoice Management System** built using modern backend and frontend technologies, integrated with **real-time monitoring using Prometheus & Grafana**.

---

## 🧠 Architecture Overview

* Microservices-based backend (Node.js + Express)
* API Gateway for routing
* Independent services (User, Invoice, Payment, Subscription, AI)
* Frontend using React (Vite)
* Containerized using Docker
* Monitoring with Prometheus + Grafana

---

## ⚙️ Tech Stack

### 🔹 Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT Authentication

### 🔹 Frontend

* React.js (Vite)
* Tailwind CSS

### 🔹 DevOps & Monitoring

* Docker & Docker Compose
* Prometheus (Metrics Collection)
* Grafana (Visualization Dashboard)

---

## 📦 Microservices

| Service              | Port | Description                      |
| -------------------- | ---- | -------------------------------- |
| API Gateway          | 5000 | Routes all requests              |
| User Service         | 5001 | Authentication & user management |
| Invoice Service      | 5002 | Invoice creation & retrieval     |
| Subscription Service | 5003 | Subscription handling            |
| AI Service           | 5005 | AI-based features                |
| Payment Service      | 5006 | Payment processing               |
| Frontend             | 5173 | React UI                         |
| Prometheus           | 9090 | Metrics                          |
| Grafana              | 3000 | Dashboard                        |

---

## 📊 Monitoring Setup

Each microservice exposes:

```
/metrics
```

Prometheus collects:

* HTTP Requests Count
* Request Duration
* CPU & Memory Usage

Grafana visualizes:

* Request Rate 📈
* Service Health ❤️
* Performance Metrics ⚡

---

## 🐳 Run with Docker

```bash
docker-compose up --build
```

---

## 🌐 Access URLs

| Tool        | URL                   |
| ----------- | --------------------- |
| Frontend    | http://localhost:5173 |
| API Gateway | http://localhost:5000 |
| Prometheus  | http://localhost:9090 |
| Grafana     | http://localhost:3000 |

---

## 🔐 Grafana Login

```
Username: admin
Password: admin
```

---

## 📈 Example Metrics Query

```
rate(http_requests_total[$__rate_interval])
```

Filter example:

```
route="/metrics"
```

---

## 💡 Key Features

* Scalable Microservices Architecture
* Dockerized Environment
* Real-time Monitoring
* Secure API Gateway
* Clean Folder Structure
* Production-ready setup

---

## 🧱 Project Structure

```
backend/
  ├── api-gateway/
  ├── user-service/
  ├── invoice-service/
  ├── payment-service/
  ├── subscription-service/
  ├── ai-service/

frontend/
docker-compose.yml
prometheus.yml
```

---

## 🔥 Future Improvements

* Kubernetes Deployment
* CI/CD Pipeline (GitHub Actions)
* Centralized Logging (ELK Stack)
* Alerting System in Grafana

---

## 👨‍💻 Author

**Anuj Maurya**
Aspiring Java Full Stack Developer 🚀

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub.
