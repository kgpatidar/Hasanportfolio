import React from "react";
import "./CourseAbout.css";
import { CourseSection } from "../../../../portfolio";

const CourseAbout = (props) => {
  const about = CourseSection.course[props.index].about;
  return (
    <div className="aboutcourse" id="aboutCourse">
      <h1 className="about-heading">About the Program</h1>
      <div className="dividline" />

      <div className="about-box-container">
        <div className="about-container">
          <div className="top-1 aboutbox">
            {about.box1
              ? DataInBox(
                  about.box1.title,
                  about.box1.image,
                  about.box1.content
                )
              : DataInBox("No Title Currently", "No Content Currently")}
          </div>
          <div className="top-2 aboutbox">
            {about.box2
              ? DataInBox(
                  about.box2.title,
                  about.box2.image,
                  about.box2.content
                )
              : DataInBox("No Title Currently", "No Content Currently")}
          </div>
          <div className="top-3 aboutbox">
            {about.box3
              ? DataInBox(
                  about.box3.title,
                  about.box3.image,
                  about.box3.content
                )
              : DataInBox("No Title Currently", "No Content Currently")}
          </div>
        </div>
        <div className="about-container">
          <div className="bottom-1 aboutbox">
            {about.box4
              ? DataInBox(
                  about.box4.title,
                  about.box4.image,
                  about.box4.content
                )
              : DataInBox("No Title Currently", "No Content Currently")}
          </div>
          <div className="bottom-2 aboutbox">
            {about.box5
              ? DataInBox(
                  about.box5.title,
                  about.box5.image,
                  about.box5.content
                )
              : DataInBox("No Title Currently", "No Content Currently")}
          </div>
          <div className="bottom-3 aboutbox">
            {about.box6
              ? DataInBox(
                  about.box6.title,
                  about.box6.image,
                  about.box6.content
                )
              : DataInBox("No Title Currently", "No Content Currently")}
          </div>
        </div>
      </div>
    </div>
  );
};

const DataInBox = (boxtitle, image, boxcontent) => {
  const [boxViewChange, setboxViewChange] = React.useState(false);

  return (
    <div className="topofbox">
      <div className="detailpara">
        <h3 className="box-title">{boxtitle}</h3>
        <p className="box-content">{boxcontent}</p>
      </div>
      <div className="imagehead">
        <img alt="about" className="aboutimage" src={image} />
        <h3 className="box-title">{boxtitle}</h3>
      </div>
    </div>
  );
};

export default CourseAbout;
