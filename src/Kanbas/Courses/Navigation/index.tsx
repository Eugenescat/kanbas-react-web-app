import React from "react";
import { useParams, useLocation, Link } from "react-router-dom";
import "./index.css";

const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades"];

export default function CoursesNavigation() {
  const { cid } = useParams(); // Retrieve the course ID
  const { pathname } = useLocation(); // Retrieve the current pathname

  return (
    <div id="wd-courses-navigation" className="list-group fs-5 rounded-0">
      {links.map((link) => {
        const isActive = pathname.includes(link);
        return (
          <Link
            key={link}
            id={`wd-course-${link.toLowerCase()}-link`}
            to={`/Kanbas/Courses/${cid}/${link}`}
            className={`list-group-item ${isActive ? "active" : "text-danger"} border border-0`}
          >
            {link}
          </Link>
        );
      })}
    </div>
  );
}
