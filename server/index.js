import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recommendRoute from "./routes/recommend.js";

dotenv.config();

const app = express();

// ✅ CORS middleware
app.use(cors({
  origin: ["https://cadv.netlify.app", "http://localhost:3000"],
  methods: ["GET", "POST"],
  credentials: true,
}));

app.use(express.json());
app.use("/api", recommendRoute);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
