const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
const app = express();
require('dotenv').config();
const port = process.env.PORT ;

app.use(cors({

   origin: "http://localhost:5173",
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
