
---

# 📄 Backend `README.md`

```markdown
# Cybermind Job Portal - Backend

🛠 This is the backend for the Cybermind Job Portal, built using **Node.js**, **Express.js**, and **MongoDB**.  
It manages job postings, retrieves job lists, and handles all API operations.

## 🛠 Tech Stack
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## 🔗 API Live
https://cybermind-job-portal-backend.onrender.com/api/jobs

## 📂 Features
- Create job postings
- Fetch all jobs
- Connects to a MongoDB database
- Error handling for API routes

## 🚀 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/cybermind-job-portal-backend.git

# Move to project directory
cd cybermind-job-portal-backend

# Install dependencies
npm install

# Set up environment variables
Create a `.env` file and add:

MONGO_URI=your-mongodb-connection-string
PORT=5000

# Start the server
npm run dev
