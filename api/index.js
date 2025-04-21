const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express on Vercel!');
});

app.post('/echo', (req, res) => {
    const data = req.body;
    console.log('Received POST data:', data);
    res.json({ received: data });
  });
  
module.exports = app;
