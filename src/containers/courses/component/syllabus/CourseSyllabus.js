import React from "react";
import "./CourseSyllabus.css";
import { CourseSection } from "../../../../portfolio";

const CourseSyllabus = (props) => {
  const [openMore, setopenMore] = React.useState(false);
  const syllabus = CourseSection.course[props.index].syllabus;
  return (
    <div className="syllabus-main" id="syllabusCourse">
      <h1 className="syllabus-heading">What will you Learn?</h1>
      <div className="dividline" />
      {syllabus ? (
        <div className={openMore ? "dropdownboxopen" : "dropdownboxclose"}>
          {syllabus.map((data, index) => (
            <div>
              <h4 className="syllabustitle">
                <span className="syllabuschapnum"> {index + 1}</span>{" "}
                {".  " + data.title}
              </h4>
              <p className="syllabusdesc">{data.description}</p>
              <div className="underline" />
            </div>
          ))}
        </div>
      ) : (
        <center>
          <h4>No syllabus Available</h4>
        </center>
      )}
      {syllabus && (
        <div className="showmorebtn" onClick={() => setopenMore(!openMore)}>
          <h4>
            {openMore ? "Show Less " : "Show More"}
            {"   "}
            {openMore ? <span>&#8593;</span> : <span>&#8595;</span>}
          </h4>
        </div>
      )}
    </div>
  );
};

export default CourseSyllabus;
