﻿/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Your username",
  title: "Hello World! This is Your nname",
  subTitle: emoji(
    "A Deep Learning Researcher on an unknown journey for the Love of Maths.👨‍💻 Entrepreneur at Heart 🤵"
  ),
  resumeLink: "YOUR RESUME LINK",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/",
  linkedin: " https://www.linkedin.com/in//",
  facebook: "https://www.facebook.com/",
  instagram: " https://www.instagram.com//",
  // gmail: "saadpasta70@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle:
    "I build ML/AI solutions for startups and businesses. Worked with Indian Government, Fortune 500 companies like Indian Oil and Gail.",
  skills: [
    emoji(
      "⚡ Develop Autonomous ML/AI Software on Tabular/Image/Voice/Signal Data"
    ),
    emoji(
      "⚡  Build multiple projects on Signal Processing In IOT devices, home appliances , Industrial AI."
    ),
    emoji(
      "⚡  Worked in Industries like Agri-Tech. Finance, Oil & Gas, E-Commerce Etc."
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "PyTorch",
      fontAwesomeClassname:
        "https://cdn.analyticsvidhya.com/wp-content/uploads/2019/01/pytorch-logo.png",
    },
    {
      skillName: "Tensorflow",
      fontAwesomeClassname:
        "https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png",
    },
    {
      skillName: "FastAI",
      fontAwesomeClassname:
        "https://buzz-prod-photos.global.ssl.fastly.net/img/87a50dce-a64d-4747-b152-30f2f13e80ef",
    },

    {
      skillName: "Keras",
      fontAwesomeClassname: "https://img.stackshare.io/service/5601/keras.png",
    },

    {
      skillName: "Python",
      fontAwesomeClassname:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png",
    },

    {
      skillName: "Sklearn",
      fontAwesomeClassname:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Scikit_learn_logo_small.svg/800px-Scikit_learn_logo_small.svg.png",
    },

    {
      skillName: "MongoDB",
      fontAwesomeClassname:
        "https://media.glassdoor.com/sqll/433703/mongodb-squarelogo-1564695792753.png",
    },

    {
      skillName: "AWS",
      fontAwesomeClassname:
        "data:image/png;base64,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",
    },

    {
      skillName: "Docker",
      fontAwesomeClassname:
        "https://www.docker.com/sites/default/files/d8/2019-07/Moby-logo.png",
    },

    {
      skillName: "PySpark",
      fontAwesomeClassname:
        "https://miro.medium.com/max/400/1*VNdaFCkls0gyJR0ddP1PCQ.png",
    },
  ],
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Recommendation Systems", //Insert stack or technology you have experience in
      progressPercentage: "80%", //Insert relative proficiency in percentage
    },
    {
      Stack: "Advance Signal Processing",
      progressPercentage: "95%",
    },
    {
      Stack: "Computer Vision Research",
      progressPercentage: "95%",
    },
    {
      Stack: "Object Detection/Image Tracking",
      progressPercentage: "85%",
    },
    {
      Stack: "Risk Analytics / Algorithmic Trading",
      progressPercentage: "70%",
    },
  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Scientist",
      company: "Indian Oil Corporation Limited",
      companylogo: require("./assets/images/expindianoil.png"),
      date: "June 2018 – April 2020",
      desc: "Built a Batch Processing pipeline of sensor data using Apache Spark and Python. Build API for various stakeholders of the project and deployed on Linux servers.",
      descBullets: [
        "Managed the entire Data Warehouse built on top of HDFS.",
        "Refactored the entire code base of the end to end machine learning pipelines.",
        "Built an autonomous Anomaly Detection framework using a mix of computer vision, filtering, and statistical techniques.",
      ],
    },
    {
      role: "Data Analyst",
      company: "Tag Taste",
      companylogo: require("./assets/images/exptagtaste.jfif"),
      date: "May 2017 – May 2018",
      descBullets: [
        "Increased the daily active user time by ~10% by implementing a content-based recommendation engine.",
        "Collaborated with different business stakeholders to report growth on various KPI's of the product. Built the entire dashboard to track the KPI  and report month of month growth. Segmented the users into 8 clusters by performing NLP on the type of content they posted and their profile.",
      ],
    },
    {
      role: "Founder & CEO",
      company: "YourSkate.in",
      companylogo: require("./assets/images/expyourslate.png"),
      date: "Jan 2015 – Sep 2015",
      desc: "Yourslate is an e-commerce platform to buy portraits for your pets, friends, and family. The basic idea was to make it easy for anyone who wants to transform their memories into portraits.",
      descBullets: [
        "We operated for a period of over 18 months. We launched a basic website wherein you could place an order selecting your preferred frame, size, and artist also.",
        "We won a national level competition in Bengaluru for prize money of 5 lakh and later got funded through the event",
      ],
    },
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "saadpasta", // Change to your github username to view your profile in Contact Section.
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    // {
    //   image: require("./assets/images/expindianoil.png"),
    //   link: "http://iocl.com/",
    // },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achivementsCards: [
    {
      title: "National Startup Competition",
      subtitle:
        "it was funded by renowned VC and Angel and I was the runner up in a national startup competition",
      image: require("..image path"),
      footerLink: [
        {
          name: "More Information",
          url: "link",
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "...url",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
  ],
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest",
      slides_url: "https://bit.ly",
      event_url: "https://www.facebook.com/events/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/",
  ],
};

const contactInfo = {
  title: emoji("Hire Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 XXXXXXXXX",
  email_address: "your email here",
};

// ---COURSES SECTION
const CourseSection = {
  title: "Courses by You",
  subtitle:
    "With Love for Developing cool stuff and Great Hard Work I bring Out Best Courses for You.",

  course: [
    
  ],
};

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  CourseSection,
};
