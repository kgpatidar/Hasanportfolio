import React from "react";
import "./CourseCard.css";
import { Redirect, Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <div>
      <Link className="coursecardlink" to={"/mycourse/" + course.index}>
        <div class="blog-container">
          <a class="blog-card" href="#blog">
            <h3 className="blog-title">{course.title}</h3>
            <p class="small">{course.description}</p>
            <div class="go-corner">
              <div class="go-arrow">→</div>
            </div>
          </a>
        </div>
      </Link>
    </div>
  );
}
