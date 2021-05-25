import React from "react";
import "./CourseTools.css";
import { CourseSection } from "../../../../portfolio";

const CourseTools = (props) => {
  const tools = CourseSection.course[props.index].tools;
  const [scrollAmt, setScroll] = React.useState(15);
  return (
    <div className="toolsused" id="toolsCourse">
      <h1 className="about-heading">Programming Languages and Tools Covered</h1>
      <div className="dividline" />
      <div className="too-content">
        <ul className="tool-icons">
          <marquee scrollamount={scrollAmt} behavior="alternate">
            {tools.map((skills) => {
              return (
                <li className="tool-list">
                  <img
                    alt={"Tools"}
                    src={skills.logo}
                    className="toolLogo"
                  ></img>
                </li>
              );
            })}
          </marquee>
        </ul>
      </div>
    </div>
  );
};

export default CourseTools;
