import React, { useState, useEffect } from "react";
import axios from "axios";
import CourseCard from "./components/CourseCard";
import "./App.css"; // Make sure you have this CSS file

function App() {
  const [form, setForm] = useState({
    interest: "",
    skill: "beginner",
    goal: "",
  });

  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  // Apply dark mode to body
  useEffect(() => {
    document.body.classList.toggle("dark-mode", darkMode);
  }, [darkMode]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("https://ai-course-api.onrender.com/api/recommend", form);
      setCourses(res.data.suggestions || []);
    } catch (err) {
      console.error("Error fetching courses:", err);
    }
    setLoading(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>AI Course Advisor</h1>
        <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
          {darkMode ? "🌞 Light Mode" : "🌙 Dark Mode"}
        </button>
      </div>

      <form onSubmit={handleSubmit} className="form">
        <input
          name="interest"
          placeholder="Interest (e.g. Web Dev)"
          onChange={handleChange}
          required
        />
        <select name="skill" onChange={handleChange}>
          <option value="beginner">Beginner</option>
          <option value="intermediate">Intermediate</option>
          <option value="advanced">Advanced</option>
        </select>
        <input
          name="goal"
          placeholder="Goal (e.g. Get a job)"
          onChange={handleChange}
          required
        />
        <button type="submit">Get Recommendations</button>
      </form>

      {loading && <p>Loading...</p>}

      <div className="courses">
        {courses.map((course, i) => (
          <CourseCard key={i} course={course} />
        ))}
      </div>
    </div>
  );
}

export default App;
