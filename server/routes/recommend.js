import express from "express";
import { getCourseSuggestions } from "../cohere.js";

const router = express.Router();

router.post("/recommend", async (req, res) => {
  try {
    const data = req.body;
    const aiResponse = await getCourseSuggestions(data);

    // 🧠 Extract array from inside the raw AI string
    const match = aiResponse.match(/\[.*\]/s); // 's' = dotAll
    if (!match) {
      return res.status(400).json({ error: "AI response format invalid" });
    }

    const suggestions = JSON.parse(match[0]); // only array part
    res.json({ suggestions }); // 🔥 send parsed array
  } catch (error) {
    console.error("❌ Backend Error:", error);
    res.status(500).json({ error: "Server Error" });
  }
});

export default router;