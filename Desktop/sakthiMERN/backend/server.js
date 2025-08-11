import express from 'express';
import dotenv from 'dotenv';
import connectDB from './connectDB.js';
import textRoute from './routes/text.route.js';
import cors from 'cors';

dotenv.config();

const app = express();

// Enable CORS dynamically based on environment variable
app.use(cors({ origin: process.env.APPLICATION_URL, credentials: true }));

// Parse JSON bodies
app.use(express.json());

// Root route to avoid 404 on backend root URL
app.get('/', (req, res) => {
  res.send('Backend server is running');
});

// Your API routes under /api/auth
app.use('/api/auth', textRoute);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  connectDB();
});
