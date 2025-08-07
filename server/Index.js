
import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import connectMongo from "./db/connect.mongodb.js";
import { errorMiddleware } from "./middlewares/error.middleware.js";
import register from "./routes/user.route.js";
import { login } from './controllers/user.controller.js';
import cookieParser from 'cookie-parser';
import sandMessages from './routes/message.route.js';
import cors from "cors"

const app = express();
// app.use(
//   cors(
//     {
//   origin: ["http://localhost:5173"],
//   credentials: true
// }
// )
// )



app.use(cors({
  origin: ["http://localhost:5173"] ,
  credentials: true,
}));
const port = process.env.PORT || 3000;


app.use(express.json()); // important for req.body
app.use(cookieParser())

connectMongo(); // Connect to MongoDB

app.use("/api/v1/users", register); // Mount route
app.use("/api/v1/message" , sandMessages);

app.use(errorMiddleware);

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});