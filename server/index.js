const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
  next();
});

app.post('/api/book-call', (req, res) => {
  const { name, phone, email, businessName } = req.body;
  console.log('Book a call request:', { name, phone, email, businessName });
  res.json({
    success: true,
    message: 'Thank you! Our team will call you within 24 hours.',
    data: { name, phone, email, businessName }
  });
});

app.post('/api/start-trial', (req, res) => {
  const { name, phone, email, businessName } = req.body;
  console.log('Start trial request:', { name, phone, email, businessName });
  res.json({
    success: true,
    message: 'Your 3-day free trial has been activated! Check WhatsApp for next steps.',
    data: { name, phone, email, businessName }
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Reakon server running on http://localhost:${PORT}`);
});
