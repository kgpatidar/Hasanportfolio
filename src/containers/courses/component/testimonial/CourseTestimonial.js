import React from "react";
import "./CourseTestimonial.css";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CourseSection } from "../../../../portfolio";

const CourseTestimonial = (props) => {
  const testimonial = CourseSection.course[props.index].testimonial;
  return (
    <div className="testimonial" id="testimonialCourse">
      <h1 className="about-heading testimonial-head">Our Testimonial</h1>
      <div className="dividline" />
      <CarouselProvider
        naturalSlideWidth={80}
        isIntrinsicHeight={true}
        isPlaying={true}
        interval={3500}
        infinite={true}
        // naturalSlideHeight={40}
        totalSlides={3}
        className="crousalprovider"
      >
        <div className="arrangecrousal">
          {/* <div> */}
          <ButtonBack className="buttonAction">&#8592;</ButtonBack>
          {/* </div> */}
          <Slider>
            <Slide index={0}>
              {TestimonialCard(
                testimonial[0].image,
                testimonial[0].name,
                testimonial[0].position,
                testimonial[0].quote
              )}
            </Slide>
            <Slide index={1}>
              {TestimonialCard(
                testimonial[1].image,
                testimonial[1].name,
                testimonial[1].position,
                testimonial[1].quote
              )}
            </Slide>
            <Slide index={2}>
              {TestimonialCard(
                testimonial[2].image,
                testimonial[2].name,
                testimonial[2].position,
                testimonial[2].quote
              )}
            </Slide>
          </Slider>
          <ButtonNext className="buttonAction">
            <h4>&#8594;</h4>
          </ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  );
};

const TestimonialCard = (imgurl, name, position, quote) => (
  <div className="carousel-item">
    <div className="testimonial4_slide">
      <img src={imgurl} className="img-circle img-responsive" />
      <p className="testimonialquote">"{quote}"</p>
      <h4 className="testimonialname">- {name}</h4>
      <h4 className="testimonialpos">{position}</h4>
    </div>
  </div>
);

export default CourseTestimonial;
