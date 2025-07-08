import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recommendRoute from "./routes/recommend.js";

dotenv.config();
const app = express();

// ✅ FIX CORS HERE
app.use(cors({
  origin: ["https://cadv.netlify.app", "http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));
app.use(express.json());
app.use("/api", recommendRoute);

app.listen(5000, () => console.log("Server started on port 5000"));
