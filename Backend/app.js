const express = require('express');
const cors = require('cors');

const app = express();

// Enable CORS for requests from your frontend (e.g., http://localhost:5173)
app.use(cors({
  origin: 'http://localhost:5173'
}));

// Or if you want to allow all origins (use with caution)
// app.use(cors());

app.post('/api/valid', (req, res) => {
  // Your validation logic here...
  res.json({ valid: true });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
