const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config(); 

exports.connect = () => {
  mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log(' Connected to MongoDB'))
  .catch((err) => {
    console.error(' MongoDB connection error:', err);
    process.exit(1); 
  });
};
