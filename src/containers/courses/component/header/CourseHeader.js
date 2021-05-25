import React from "react";
import "./CourseHeader.css";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import { greeting, workExperiences } from "../../../../portfolio";

function CourseHeader() {
  return (
    <Fade top duration={1000} distance="20px">
      <div>
        <header className="header">
          <a href="" className="logo">
            <Link to="/course">
              <img
                alt="Back"
                className="backbuttonInCourse"
                src={require("../../../../assets/images/backarrow.png")}
              ></img>
            </Link>
            {/* <span className="grey-color"> &lt;</span>
            <span className="logo-name">{greeting.username}</span>
            <span className="grey-color">/&gt;</span> */}
          </a>
          <input className="menu-btn" type="checkbox" id="menu-btn" />
          <label className="menu-icon" htmlFor="menu-btn">
            <span className="navicon"></span>
          </label>
          <ul className="menu">
            <li>
              <a href="#aboutCourse">About Program</a>
            </li>
            <li>
              <a href="#syllabusCourse">Syllabus</a>
            </li>
            <li>
              <a href="#testimonialCourse">Testimonials</a>
            </li>
            <li>
              <a href="#toolsCourse">Tools</a>
            </li>
            <li>
              <a href="#feeCourse">Fees</a>
            </li>
            <li>
              <a href="#feeCourse" className="courseheaderbtn">
                Enroll Now
              </a>
            </li>
          </ul>
        </header>
      </div>
    </Fade>
  );
}
export default CourseHeader;
