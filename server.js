const express = require('express');
const cors = require('cors');
const app = express();
const applicantRoutes = require('./routes/applicantroutes');

app.use(cors());
app.use(express.json());

app.use('/api/applicants', applicantRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
