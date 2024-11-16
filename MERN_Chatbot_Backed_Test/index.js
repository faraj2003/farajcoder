import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/db.js";
import cors from "cors";

dotenv.config();

const app = express();

// Using middleware
app.use(express.json());

// Configure CORS
app.use(cors({
  origin: "https://farajcoder8.onrender.com", // Your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Allowed HTTP methods
  credentials: true, // If you're using cookies or authentication
}));

// Importing routes
import userRoutes from "./routes/userRoutes.js";
import chatRoutes from "./routes/chatRoutes.js";

// Using routes
app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

// Start the server
app.listen(process.env.PORT || 5000, () => {
  console.log(`Server is working on port ${process.env.PORT || 5000}`);
  connectDb();
});
