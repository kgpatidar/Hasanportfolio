import React from "react";
import "./CourseLanding.css";
import { CourseSection } from "../../../../portfolio";
import SocialMedia from "../../../../components/socialMedia/SocialMedia";
import { Fade } from "react-reveal";
const CourseLanding = (props) => {
  const course = CourseSection.course[props.index];
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text-subTitle subTitle headcoursetitle">
                {" "}
                {course.title}
              </h1>
              <p className="subTitle">{course.description}</p>

              <a className="enrollbutton" href="#feeCourse">
                ENROLL NOW
              </a>

              <p className="describebox">{course.describe}</p>
              <div className="course-detail">
                <div className="course-detail-info">
                  <h5>{course.totalStudent}</h5>
                  <p className="subTitle">Students Empowered</p>
                </div>
                <div className="course-detail-info">
                  <h5>{course.duration}</h5>
                  <p className="subTitle">Duration</p>
                </div>
                <div className="course-detail-info">
                  <h5>{course.startDate}</h5>
                  <p className="subTitle">Start Date</p>
                </div>
              </div>
              <div className="socialincourse">
                <SocialMedia />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <img
              alt="saad sitting on table"
              src={require("../../../../assets/images/courseback.svg")}
            ></img>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default CourseLanding;
