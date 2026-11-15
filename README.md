# Abdul Rahim — Developer Portfolio

## Overview

A responsive, full-stack developer portfolio designed to present my projects, technical skills, and professional background in a clear, recruiter-friendly format.

- **Live portfolio:** https://rahim23-portfolio.netlify.app
- **Backend API:** https://portfolio-29ge.onrender.com
- **Contact:** rahimkhan231205@gmail.com

The portfolio includes interactive project previews, animated skill listings, smooth section navigation, and a production contact form that sends messages through a secure Node.js and Nodemailer backend.

---

## Technology Stack

### Frontend
- React 18 and Create React App
- React Router
- Bootstrap 5
- Framer Motion for interface animations
- GSAP for motion effects
- Three.js for 3D/interactive experiences
- Lucide React and React Icons

### Backend
- Node.js
- Express.js
- CORS configuration for local and production origins
- Nodemailer with Gmail SMTP
- Environment-based configuration using dotenv

### Deployment and Services
- Netlify — frontend hosting
- Render — backend hosting
- Cloudinary — project and media assets

---

## Featured Projects

| Project | Type | Technologies | Links |
|---|---|---|---|
| Khan's Couture | Full-stack fashion e-commerce application | React, Node.js, Express.js, MongoDB, REST APIs, Cloudinary | [Repository](https://github.com/Rahim023/khans-couture.git) · [Live site](https://khans-couture.netlify.app/) |
| Grocery Store Analytics Dashboard | Data analytics dashboard | Excel, Power Query, Power Pivot, data modeling, KPIs | [Repository](https://github.com/Rahim023/grocery_store_Dashboard.git) |
| Banking Management Application | Banking backend, planned project | Java, Spring Boot, MySQL, REST APIs | [Repository](https://github.com/Rahim023/Banking-app.git) |

---

## Key Features

- Responsive portfolio layout optimized for desktop and mobile devices
- Animated, continuously looping technology lists
- Interactive project selection with live previews
- Smooth navigation between portfolio sections
- Elegant profile and contact interactions
- Server-side contact validation and spam protection
- HTML and plain-text email delivery through Nodemailer
- Environment-based API, CORS, and SMTP configuration

---

## Local Development

### Prerequisites
- Node.js and npm
- SMTP credentials for the contact backend

### Frontend

```bash
cd frontend
npm install
npm start
```

Create `frontend/.env`:

```env
REACT_APP_API_URL=http://localhost:5000
```

### Backend

```bash
cd backend
npm install
npm start
```

Use `backend/.env.example` as a template for local SMTP and CORS settings. Start the backend at `http://localhost:5000`.

---

## Production Deployment

1. Build and deploy the React application to Netlify.
2. Deploy the Express API to Render.
3. Configure the Render environment with `CLIENT_URL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_SECURE`, `SMTP_USER`, `SMTP_PASS`, and `CONTACT_TO`.
4. Set `REACT_APP_API_URL` to the Render backend URL before building the frontend.
5. Use the `/api/health` endpoint to verify backend availability.

---

## Contact API

- `GET /api/health` — returns backend health status
- `POST /api/contact` — validates and sends portfolio contact messages

The API includes request validation, a honeypot field check, HTML escaping, and allowed-origin checks for CORS.

---

- Built and deployed a responsive full-stack developer portfolio using React, Node.js, Express.js, Framer Motion, and REST APIs. 

- Developed reusable React components, animated interfaces, and responsive layouts across desktop and mobile devices. 

- Built and integrated a Node.js contact-service API using Express, Nodemailer, SMTP, validation, and CORS controls. 

- Designed and deployed an e-commerce project with React, Node.js, MongoDB, REST APIs, Cloudinary media management, and an admin panel. 

- Created an Excel grocery-sales analytics dashboard using Power Query, Power Pivot, data modeling, KPIs, and business reporting. 
