const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();
const applicantRoutes = require('./routes/applicantroutes');

// Enable CORS for Netlify frontend
app.use(cors({
  origin: 'https://my-job-application-site.netlify.app',
  methods: ['POST', 'GET'],
  credentials: true
}));

// Middlewares
app.use(express.json());
app.use('/apply', applicantRoutes);

// Start server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
