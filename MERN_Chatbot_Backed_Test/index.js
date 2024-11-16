import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cors from "cors";

dotenv.config();

const app = express();

// Using middleware
app.use(express.json());
app.use(cors());

// Importing routes
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

// Using routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Starting the server and connecting to the database
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is working on port ${process.env.PORT || 5000}`);
  connectDb();
});
