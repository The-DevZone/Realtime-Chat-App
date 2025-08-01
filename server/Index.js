// import dotenv from 'dotenv';
// dotenv.config(); // ✅ Load env variables

// import express from 'express';
// import mongoose, { connect } from 'mongoose';
// import connectMongo from "./db/connect.mongodb.js"
// import userRoutes from "./routes/user.route.js"

// const app = express();
// const port = process.env.PORT || 3000;

// app.use(express.json()); 

// // ✅ Basic route
// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// // ✅ Connect to MongoDB
// connectMongo()


// // ✅ api section
// app.use("/api/v1/users", userRoutes)

// // ✅ Start server
// app.listen(port, () => {
//   console.log(`🚀 Server running at http://localhost:${port}`);
// });


// ✅ server/index.js
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectMongo from "./db/connect.mongodb.js";
import register from "./routes/user.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json()); // important for req.body

app.get('/', (req, res) => {
  res.send('Hello World!');
});

connectMongo(); // Connect to MongoDB

app.use("/api/v1/users", register); // Mount route

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
