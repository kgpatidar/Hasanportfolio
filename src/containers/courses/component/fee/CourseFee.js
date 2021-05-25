import React from "react";
import "./CourseFee.css";
import { CourseSection } from "../../../../portfolio";

const CourseFee = (props) => {
  const fee = CourseSection.course[props.index].fees;
  const [isIndian, setIsIndian] = React.useState(false);

  React.useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((response) => response.json())
      .then((res) => {
        if (res.country) {
          setIsIndian(true);
        }
      });
  }, []);
  return (
    <div className="programfee" id="feeCourse">
      <h1 className="programfeehead">Program Fee</h1>
      <div className="toptext">
        <h2 className="costtext">
          {isIndian ? (
            <span>&#8377; {" " + fee.inrupees}</span>
          ) : (
            <span>&#36; {" " + fee.indollar}</span>
          )}
        </h2>
        <a
          className="finalenrollbtn"
          href={CourseSection.course[props.index].whatsapplink}
          target="_blank"
        >
          ENROLL NOW
        </a>
      </div>
      <p className="emitext">No Cost EMI options available</p>
    </div>
  );
};

export default CourseFee;
