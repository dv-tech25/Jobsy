const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const app = express();
require('dotenv').config();
const port = process.env.PORT ;

const allowedOrigins = [
  "http://localhost:5173",
  "https://your-frontend-domain.com"  
];

app.use(cors({
  origin: function(origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true
}));

app.use(express.json());
app.use(cookieParser()); 

require("./config/database").connect();



//  ------------Route imports----------
const userRoutes = require("./routes/user");
const applicationRoutes = require("./routes/application");

// --------------Mount routes----------
app.use("/api/v1", userRoutes);
app.use("/api/v1/applications", applicationRoutes);






app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(` Server running on port ${port}`);
});
