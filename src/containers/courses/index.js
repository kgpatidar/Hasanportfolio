import React from "react";
import CourseHeader from "./component/header/CourseHeader";
import CourseLanding from "./component/landing/CourseLanding";
import CourseSyllabus from "./component/syllabus/CourseSyllabus";
import CourseAbout from "./component/about/CourseAbout";
import CourseTestimonial from "./component/testimonial/CourseTestimonial";
import CourseTools from "./component/tools/CourseTools";
import CourseFee from "./component/fee/CourseFee";
import CourseFooter from "./component/footer/CourseFooter";
import Top from "../../containers/topbutton/Top";

const index = (props) => {
  const COURSEINDEX = props.match.params.indexofcourse;
  return (
    <div>
      <CourseHeader />
      <CourseLanding index={COURSEINDEX} />
      <CourseAbout index={COURSEINDEX} />
      <CourseSyllabus index={COURSEINDEX} />
      <CourseTestimonial index={COURSEINDEX} />
      <CourseTools index={COURSEINDEX} />
      <CourseFee index={COURSEINDEX} />
      <CourseFooter index={COURSEINDEX} />
      <Top />
    </div>
  );
};

export default index;
