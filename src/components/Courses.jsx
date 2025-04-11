import React, { useState } from "react";
import { FaChevronRight } from "react-icons/fa";

export default function CourseCategories() {
  const [selectedCategory, setSelectedCategory] = useState("JEE Mains");

  const categories = [
    "JEE Mains",
    "NEET",
    "Class 6",
    "Class 7",
    "Class 8",
    "Class 9",
    "Class 10",
    "Class 11",
    "Class 12",
  ];

  const data = {
    "JEE Mains": [
      {
        title: "Math",
        description: "Topics: Algebra, Calculus, Geometry",
        subjects: ["Algebra", "Calculus", "Coordinate Geometry", "Trigonometry"],
      },
      {
        title: "Physics",
        description: "Topics: Mechanics, Waves, Thermodynamics",
        subjects: ["Kinematics", "Laws of Motion", "Work, Power, Energy", "Waves"],
      },
      {
        title: "Chemistry",
        description: "Topics: Physical, Organic, Inorganic",
        subjects: ["Mole Concept", "Chemical Bonding", "Hydrocarbons", "Thermodynamics"],
      },
    ],
    NEET: [
      {
        title: "Biology",
        description: "Topics: Human Physiology, Genetics, Ecology",
        subjects: ["Plant Physiology", "Genetics", "Ecology", "Cell Structure"],
      },
      {
        title: "Chemistry",
        description: "Topics: Same as JEE with NEET relevance",
        subjects: ["Organic Chemistry", "Physical Chemistry", "Inorganic Chemistry"],
      },
      {
        title: "Physics",
        description: "NEET-focused physics chapters",
        subjects: ["Motion", "Current Electricity", "Modern Physics", "Heat"],
      },
    ],
    "Class 6": [
      {
        title: "Math",
        description: "Basic Math concepts",
        subjects: ["Number System", "Integers", "Fractions", "Mensuration"],
      },
      {
        title: "Science",
        description: "General Science for Class 6",
        subjects: ["Food", "Living Organisms", "Electricity", "Water"],
      },
    ],
    "Class 7": [
      {
        title: "Math",
        description: "Intermediate Math",
        subjects: ["Simple Equations", "Lines and Angles", "Rational Numbers"],
      },
      {
        title: "Science",
        description: "Class 7 Science",
        subjects: ["Nutrition", "Heat", "Acids and Bases", "Motion"],
      },
    ],
    "Class 8": [
      {
        title: "Math",
        description: "Topics for Class 8",
        subjects: ["Squares and Cubes", "Linear Equations", "Mensuration"],
      },
      {
        title: "Science",
        description: "Middle School Science",
        subjects: ["Friction", "Sound", "Force", "Metals and Non-metals"],
      },
    ],
    "Class 9": [
      {
        title: "Math",
        description: "Class 9 Math syllabus",
        subjects: ["Polynomials", "Triangles", "Statistics", "Probability"],
      },
      {
        title: "Science",
        description: "CBSE Class 9 Science",
        subjects: ["Matter", "Atoms and Molecules", "Gravitation"],
      },
    ],
    "Class 10": [
      {
        title: "Math",
        description: "Board-level Math",
        subjects: ["Quadratic Equations", "Circles", "Surface Areas", "Statistics"],
      },
      {
        title: "Science",
        description: "Topics for Boards",
        subjects: ["Chemical Reactions", "Electricity", "Magnetic Effects", "Light"],
      },
    ],
    "Class 11": [
      {
        title: "Math",
        description: "Foundation for Competitive Exams",
        subjects: ["Sets", "Functions", "Complex Numbers", "Binomial Theorem"],
      },
      {
        title: "Physics",
        description: "Beginning of Core Physics",
        subjects: ["Laws of Motion", "Work & Energy", "Thermodynamics"],
      },
      {
        title: "Chemistry",
        description: "Basic Principles of Chemistry",
        subjects: ["Atomic Structure", "States of Matter", "Thermodynamics"],
      },
    ],
    "Class 12": [
      {
        title: "Math",
        description: "Advanced Math",
        subjects: ["Differentiation", "Integration", "Vectors", "Probability"],
      },
      {
        title: "Physics",
        description: "Complete CBSE Physics",
        subjects: ["Electrostatics", "Optics", "EM Waves", "Dual Nature"],
      },
      {
        title: "Chemistry",
        description: "Full Chemistry Syllabus",
        subjects: ["Solutions", "Electrochemistry", "Aldehydes & Ketones"],
      },
    ],
  };

  return (
    <div className="container">
      <h1 className="main-heading">Course Categories</h1>
      <div className="button-group">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`category-button ${
              selectedCategory === cat ? "active" : ""
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="course-list">
        {data[selectedCategory]?.map((course, index) => (
          <div key={index} className="course-card">
            <h2 className="course-title">{course.title}</h2>
            <p className="course-desc">{course.description}</p>
            <div className="subject-list">
              {course.subjects.map((subject, i) => (
                <div key={i} className="subject-item">
                  <span>{subject}</span>
                  <FaChevronRight />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Standard CSS */}
      <style>{`
        .container {
          padding: 20px;
          font-family: sans-serif;
          background-color: #f9f9f9;
        }

        .main-heading {
          font-size: 28px;
          font-weight: bold;
          margin-bottom: 20px;
        }

        .button-group {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 30px;
        }

        .category-button {
          padding: 10px 15px;
          border: 2px solid #007bff;
          background-color: white;
          color: #007bff;
          cursor: pointer;
          border-radius: 5px;
          transition: 0.3s;
        }

        .category-button.active,
        .category-button:hover {
          background-color: #007bff;
          color: white;
        }

        .course-list {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 20px;
        }

        .course-card {
          background: white;
          border: 2px solid #ddd;
          padding: 20px;
          border-radius: 10px;
        }

        .course-title {
          font-size: 20px;
          font-weight: 600;
          margin-bottom: 10px;
        }

        .course-desc {
          color: #555;
          font-size: 14px;
          margin-bottom: 15px;
        }

        .subject-list {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .subject-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: #f1f1f1;
          padding: 10px;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.2s;
        }

        .subject-item:hover {
          background-color: #e0e0e0;
        }
      `}</style>
    </div>
  );
}
