import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import recommendRoute from "./routes/recommend.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", recommendRoute);

app.listen(5000, () => console.log("Server started on port 5000"));
