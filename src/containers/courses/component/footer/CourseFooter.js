import React from "react";
import "./CourseFooter.css";
import SocialMedia from "../../../../components/socialMedia/SocialMedia";
import { CourseSection } from "../../../../portfolio";
import { Link } from "react-router-dom";

const CourseFooter = (props) => {
  return (
    <div className="coursefooter">
      <h2>Learn with You</h2>
      <p>For Better Tommorow, Learn Today.</p>
      <SocialMedia />
      <div className="dividerline" />
      <div>
        <h3 className="footercoursetag">Courses</h3>
        {CourseSection.course.map((data, index) => {
          return (
            <Link
              to={"/mycourse/" + index}
              className="linkfromfooter"
              onClick={() => {
                if (index != props.index) {
                  document.body.scrollTop = 0; // For Safari
                  document.documentElement.scrollTop = 0;
                }
              }}
            >
              <p>{data.title}</p>
            </Link>
          );
        })}
      </div>
      <div className="dividerline" />
      <p className="footerend">@2020 - Made to Learn.</p>
    </div>
  );
};

export default CourseFooter;
