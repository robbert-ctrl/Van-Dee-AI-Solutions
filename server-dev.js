/**
 * Development server for local API testing
 * Run with: node server-dev.js
 *
 * For production, deploy to Vercel which will automatically
 * use the serverless functions in the /api directory
 */

import express from 'express';
import cors from 'cors';
import { config } from 'dotenv';
import handler from './api/chat.ts';

// Load environment variables
config({ path: '.env.local' });

const app = express();
const PORT = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.post('/api/chat', async (req, res) => {
  // Mock Vercel request/response objects
  const mockReq = {
    method: 'POST',
    body: req.body,
    headers: req.headers,
  };

  const mockRes = {
    status: (code) => ({
      json: (data) => res.status(code).json(data),
    }),
  };

  try {
    await handler(mockReq, mockRes);
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'API server is running' });
});

app.listen(PORT, () => {
  console.log(`\n🚀 Development API server running on http://localhost:${PORT}`);
  console.log(`📝 API endpoint: http://localhost:${PORT}/api/chat\n`);
});
