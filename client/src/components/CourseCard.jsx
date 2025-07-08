import React from "react";

const CourseCard = ({ course }) => {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "1.5rem",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.08)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        marginBottom: "1rem",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow = "0 6px 16px rgba(0, 0, 0, 0.12)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "none";
        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.08)";
      }}
    >
      <h2 style={{ fontSize: "1.4rem", marginBottom: "0.5rem" }}>{course.name}</h2>
      <p style={{ margin: "0.3rem 0" }}>
        <strong>Platform:</strong> {course.platform}
      </p>
      <p style={{ marginBottom: "1rem", lineHeight: "1.6", color: "#555" }}>
        {course.description}
      </p>
      <a
        href={course.link}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "inline-block",
          marginTop: "0.5rem",
          textDecoration: "none",
          color: "#007bff",
          fontWeight: "600",
        }}
      >
        🔗 View Course
      </a>
    </div>
  );
};

export default CourseCard;
