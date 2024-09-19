const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { connect }  = require('./db'); 

require('dotenv').config();

const app = express();

/** Middleware */
app.use(cors());
app.use(express.json());

/** Mongodb Connection */
connect()
  .then(() => {
    // Start your server here
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error("Failed to start server due to MongoDB connection error:", err);
  });


// // Connect to MongoDB Atlas
// mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('MongoDB connected'))
//   .catch(err => console.error(err));

app.get('/', (req, res) => {
  res.send('Hello World!');
});

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

