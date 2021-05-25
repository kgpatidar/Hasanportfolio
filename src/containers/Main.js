import React, { Component } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import StackProgress from "./skillProgress/skillProgress";
import WorkExperience from "./workExperience/WorkExperience";
import Projects from "./projects/Projects";
import StartupProject from "./StartupProjects/StartupProject";
import Achievement from "./achievement/Achievement";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";
import Footer from "../components/footer/Footer";
import Talks from "./talks/Talks";
import Top from "./topbutton/Top";
import Twitter from "./twitter-embed/twitter";
import Profile from "./profile/Profile";
import CourseFooter from "./CourseFooter/CourseFooter";

const Main = () => {
  return (
    <div>
      <Header />
      <Greeting />
      <Skills />
      <StackProgress />
      <WorkExperience />
      <Projects />
      <StartupProject />
      <Achievement />
      {/* <Talks /> */}
      <Profile />
      <Footer />
      <Top />
      <CourseFooter />
    </div>
  );
};
export default Main;
