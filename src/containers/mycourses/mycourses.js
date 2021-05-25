import React from "react";
import "./mycourses.css";
import { CourseSection } from "../../portfolio";
import { Fade } from "react-reveal";
import { Link } from "react-router-dom";
import CourseCard from "../../components/CourseCard/CourseCard";

export default function MyCourse() {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main" id="blogs">
        <Link to="/">
          <img
            alt="Back"
            className="backbutton"
            src={require("../../assets/images/backarrow.png")}
          ></img>
        </Link>
        <div className="blog-header">
          <h1 className="blog-header-text">{CourseSection.title}</h1>
          <strong>
            <p className="subTitle blog-subtitle">{CourseSection.subtitle}</p>
          </strong>
        </div>
        <div className="blog-main-div">
          <div className="blog-text-div">
            {CourseSection.course.map((blog, index) => {
              return (
                <CourseCard
                  course={{
                    index,
                    image: blog.image,
                    title: blog.title,
                    description: blog.description,
                  }}
                />
              );
            })}
          </div>
        </div>
      </div>
    </Fade>
  );
}
