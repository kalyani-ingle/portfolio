require('./db/connection');
require('dotenv').config();
const express = require('express');
const app = express();
const path =  require('path');
const cors= require('cors');
const apiRoutes = require('./routes/apiRoutes')
const allowedOrigins = process.env.FRONTEND_URL.split(",");

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use('/api', apiRoutes);

// serve static files in express server
app.use(express.static(path.join(__dirname, 'Client', 'dist')));


app.get('*', (req, res) => {
  console.log(__dirname);
  res.sendFile(path.join(__dirname, 'Client', 'dist', 'index.html'));
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running at http://localhost:${process.env.PORT}`)
})

module.exports = app;