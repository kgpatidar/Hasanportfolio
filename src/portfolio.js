/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Hasan",
  title: "Hello World! This is Hasan",
  subTitle: emoji(
    "A Deep Learning Researcher on an unknown journey for the Love of Maths.👨‍💻 Entrepreneur at Heart 🤵"
  ),
  resumeLink: "YOUR RESUME LINK",
};

// Your Social Media Link

const socialMediaLinks = {
  github: "https://github.com/hasanali28",
  linkedin: " https://www.linkedin.com/in/yourdataguy/",
  facebook: "https://www.facebook.com/learnmlwithhasan",
  instagram: " https://www.instagram.com/learnmlwithhasan/",
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
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAz1BMVEX///8lLz7/mQD/lwD/kwD/lQD/kgAAFywNHTAfKjrb3N4iLDwaJjcAFCoGGS2sr7MTITMADifIys3w8fK1t7tyd387Q1Cgo6jBw8b6+vsACiXZ2twAACL29vcpM0Lo6epYXmj/9+u6vMCKjpRKUVxiaHH/nBt7gIeXm6CUl504QE2nqq//0J7/8eD/+vL/1Kb/4L7/pjP/qj9pb3f/smH/ypD/5sn/7Nb/0aAAABxPVWBeZG7/v3X/r0//xIX/u2r/slj/w37/27H/pSj/rkcPWhMOAAAU5ElEQVR4nO1d6ULiSBAWEkJCDgLILTeCopwO6Hqh4Ps/0ybh6q4+gyKOw/dndodcXV1VXfVVdc/Z2QlfhGKmXEjmu93s3eXlZbaVTxYSmWN/U3hk0jetbL2d6/Wqucenbv7LBlErtOo93XZ01/JhWJar607KzWVvyl/zhu9AptnNObY3BsMwfRiG5Q1Cz11ep4uffXCv5LiGGSHhvSMV6abZN9eSW5ynpearmG5u7mhKfnmtsH0JZ8aST7ZjGZRBmIYbjz/d1KTeRXl7vn3hWDTp7N5g2Ua+Qr+9/J++hWP/1xW/8OrC09XtHRdX4jsy7Yv47i3/0e/IXMcdizcKQy/lkuFtrnLejrs0uRNS0o089QktF7vOpl+FoHmBP7l0LvzKR+wdZpV2TV7XxaMwdL3FmGoGMq2IIyOf1Zc5OZqKX+Miijiil+bAG+kjRpG28Rt6lEt6juQwdJPjNCAyXdvl2heEkaKoSCGOXxQv8N+aKMHHpkTLQRa3HytLXNFNSc90xLxoykqoecG1XCps8utqQL8pA8BwQ9iDK7LNFH69ngS/Z3ISNobIyJF02+kL8cNI6JfEg9r4BIrs5o6YGOtO8KW4nUV0MMJaNeRc6xIrBP1TpeC04IPywBmlErzXFnuEbZtV/sJ/hb/AyEEJyRvZChY5z1S0wz54jRJU8wScZHgBPiCbfCRfqGd1/EtdXAcqRuiBGHU5EeVCeWpUBNCSwRLFn6NzitvgC7UC7gACfWRagx9dU3/4jIhMw886dMeP7FxWNGm0wZNAZMS3myxlRHwPn8aXTBO3syvaYm+4up3Sq9VqxEsN/JwKzxv2FZEXouvVx1b+5rxZaJ4n862nnhunzhBc1qE7tXl2Q7oiYtQAIPByMWcI11N/II7Vbp2na5mKh0ym5mXmrXrV0Xdj2UdEpuWkctcFaEG1dEunhJYGCN2KILfTb9hvpQzJA3cVBk7TxiK/SziJht0+pyUZifM7ezPjoUVkuKlqt8DKXZptEBr6XwnUCBiPwXFGBWoQ7HCCuQwwYwv9ESpwxO1xYud0N677o5Zd0VYiMt1U+5q/oNw40DbgK5r4uE2D/TDgtzYDIyKJHUD0bmF58hNQIkcQt1byVdsyUhw1R/Ho6a8Rr7b48vFRJhy3jRtGBUShcXZGARO0tVA5zggI1UE1uAY03BVIyEOx0G1LsBEB8v/FU/WmFFuTgNYBV2kYuTAzigolKgoeyOYogH+/QL84iXs2MyIzmhBIp6VpgRswWzBlAHkX2xmlSccWIM70IDV8eown9EeQIfBc2sFB5GG4dME4IinWc9AFHH2ke826A/g5ByOXcA9gmp/jXj+HcyADGPoAa7BZzghxrwa6DrKX4S6uKFhoX8F5Fd5KengUQSjvAKYQhHc6yxkhdqY3HxE9YupdFY+Lsci+jHs2VzKBPxDAZELDAB/Lmk/0sngNzeBZelfDFQWXPfBsvJD1G1DgeU2S4nDpXgFx62YVGyFL74CF49FG4UeJKAPMHgYyQMsYSoGsQJ6ioXEzi1bDnwsyaKBFRza0M5AGwAgETCg9MkJ1zZ9yJI5k0QO4dgL7BukHVO3vBogOLRDrVQAzWKc9o4aQ0L6eoYEznVar4bQ1KAQAMs+0wtV/vhrQX8PcHE+5TZP2tQidZkYqeMxDp9Xw8BnS4kWQ+BzZGYFUiaAeQS5g08JlJBKyfKNAI046rYaHzxZMriD5pB9VjQCJ70C7qOEzSnWdCEW1+h11RrRMFiyURJoCVJskRL8VIA2LE64Dz1GMR/IRKJ220jJ0iDRaDTgbIr5swvzaau/b2fAFSIpEBEo5FNeJDsgOFjA06qHloPi8kLYImX+/j0XcIXAonItEVMaXfYozQtzZWsnQBYtGq11imkkRIlksMO3HY7VDCUV0FsFDGNIZIZ5nIw/E19CcEZ7JuySpVKbwT4ZdF7QVHAhiEbV4gbCHDGJVG8eLagFJq+GKadUpnwWZ2dW745aAbD4IxCICse4FDJfRdOFi7alQD0fSannsndTICZaC1zDdeO/q66VUrDVvWpf1x3b7sf50l71OFmqIyxWLqIJbGuGMEMJkGwMmUGdE0GpPuCuiLlYtVlOIL6XWJxscMZSv6mbKCdooA/jNoPGU2767LqyEIRYRiPOIEdeRwHHrmhHNIpMWLPughRE+euySvhmUv/aWCYp0V7fp9WnDch071W6d1yREhBMXxJAQk9itTahYS+AG3Bez6JKazWtOMK24fdf8ZFNxMWnS69LIaF0HFmVpIsrgy34Kj4zQAe/SlzyHVsMjLWb7SJorIw+W49T3aAPd4qZKVBJlQBMRYAOA+0WEgTQrljm0GvY4gqHaoSCSUVDnvwvR4oii1o7v10NDFRG+AoFYEDEpJEwuIgoMaLUK72kYyq5EO5ll91h90TwkL/bsw6KLCO/0xJ1REeHp0eUb4fgBT4cHEcyiio8MpfGAhKk7zFoUC1lGbXRfEUGOELV/dHlHGegrJq2GVVVMlz+UvC6hSN7kGOGqkfVQfaYyIsJJJawPCaXTeki0guoKHhyiNSSSKoKoZW0ZIZn2XQhra1ObND4lIpxvx9wHSqehPieDOqMs4wdeRXuLxJ0tMyK3Ks2XXDKe5zfzubrrwbKo+2Y4IsKLANgiBJj9HR4ZtBpeMGBUnXDUWrpEs73hSFIBLVovlOW9IneZbV3nb27yrezlY89JOS5tbw5DRDg5gRDcKJ2Gk/Soy4kjE4wZrag1e4t0q5cS7WkxdansjWjv8kek15Nl3FKLlUQhn21bti4ROp5BGhBxRsgPpoVpBKotKCOEdSKF6fkoX+cEO3+Mqow/Itu5DbvLNNJM+QZnt1giwh0I4oxQOg2vZmds6g14UySFKuIhkW87cFKxx0k0SOQJM3PqfC8G2rAYIsIjYiSKJpj9HRDSG/FeWIVctn8TQS35VGLvsksJtbKoE615oqBKUkQ425zaTH6GYPZ3QKm4nbZgBB2/d52FSjNrMdJP8QavPIyI4sJyuKSI8P0L28ZEjE4DtzQpbCRomkntW9coFu5cQh2CLxMJHe7/kOiylRQR/uitb0GWLYKxRftjtiQT1jTzqfJYLU9L1DlZcYAy2OBlwgo97R48C2KKCEsbth+CuCiSXEQUZpvXYUvjZ1s+khYZAwr2CYKSF7upDAGoNTBFhF9XWssemRMyTu5SaDWszirYaSRGsQuUgs8cnBFdHlJLalpSi86wlr+1M0LlRr4MJTQ3CT2aEIt9qxjnkArgWxrg4eXaKCWI2RWw+V9nnwidRvk01M2tFRpzRYIJlwPsiybafzDAXXMydgaNky0iPKBZOVqETqONF0kF15kGNiESKawE4C5OLgEF+8OlPgE0YbBFVMSZMH+5Ruk0WiqBfL1pBn+D5nr4xpi9Abq5+DkN6GDg7x/bICeVgPh4IpIrlE6jVcPQeDNwzVjTjJAqkgTwwNx+LbgNXCYwK4Ld9Q5b87AZCMaHmA3VSyYgrYbVWEUb/2VxJdkb7gPG1qnwCxovJcAS0CBNy1KZ/R1QQwwuQKVsGl/Uegb6ormnA8CwSEaLYD8YT02xANsvmSE5rE5t/7kEtBraOCm7v04I2ILM1SIgIq5vXyEDkzpewItNgScTtKWRPh15QKuhUQldqHsA9vrzngt9kSM2dmIzIi9WwTyJ54xQOo0eBZbxYjaW7MS/6hwuGNnx1vEmEJHwzA5yzx6fKcVCYxOVL2O7OVpw9ISPKtUeVBEDMGzhuRfY2mUJu97J7ZrcpADTOTuToxcZUaCbsHJYX9XX9VLje5L4pwkQG8FFif4dpVhS4rwBI8bdPCovRjiF8gMWStVGSl/VAlsItRuC6OjmW1qWVizhmjI2B1VURIwbUFfqYlsfBbyOPHIhIkdy/z9/88QltWjLjXlZp9owE2YYme7kxaOK0vU76W69LlzG+dpJnLLEiT0SPXpJEpR6cMB9ohuw1fWRUa/g7Gc/qziW5ZbqUkluF3yRqDBHHpCjMza4F6/irFoL3PuJIkMwWKIB04844G8rX7k8w+7lRf6qRrQvpESCJedMf6K47MpNld0ZwSWUGYcjsQ2aflAGnyraODBTt+u8Ixsz10T/kZgNb5LtOJYF/FftPGujxQPCvVA3C60BA3jhh2XoDUK8d6A+3j+ysZssU2y/UshSuiFK4oSiStYETD2VbSZqmWIlUysnu9UU3rHjEHsJqK3ia5Cxpg+e76Ud2iMIXvCMwrB0u1TNtvLn6UStlqnVEon0TSuXoh2HqUvwK01q85XlOK5R9abE1mEd0+miTcEr8NZ96oh5N1CdUaiznwKZ+kdUxeP+Obm6Y3t/Ug1erujEPkmNeriW787T0Afz3kQfMSdEJfZN+eBTRazTNUQwiS2ZVNRC9cmujnOEhZPIBXvIhDwjgsmDZ2oEcLlUEa27RQYXklx4kxWsUVBaVQcT8CTI/9giKlK8Hb+SQTFNAVXECi34MC+kWcy87AvM7TGFwGNzW1Aox8rxSRfKDaJuB/ZhfGwYbgietyWnp5ax1csM1kHg1HlmAI+ejfg5P+9zKKcZlgTpdSLEybJruNVQG/quSmJ/ZKbQmPJ8p3nGBT/3LZJ7Mhn7XNaARRx+VLFCOUJt+2DCKGVDbi0qWAJNNZ0qXm3apjpOTrQqEGuaI2B+iJDflujey7u8bjQwmngufNEyc8dTVVOPEJpSDwZuSLTBZ2xwPoToFK/0BTiaRYoHKSZzckdSG051P3au/Mjq6LbivRvS2RTrtmHY1LPBIRI5x3Y2sHWh2p3deCHrFvE4LWukj+G6x+1sjAT793J7dbqtXpC9gA2mXoxq21mGUibrj7Ivq6ULG5RlorVK+Xz7jxAQ53Bykbi5THkpAf24P0tPmdef3HadbtXdUtwJ+tG9uL3Uu8v/Rf+uxQZeYvnoDWO3M9PwT8yNlyJ3e//LDThq6fNk/urqKlkoH/f8ls/BG8ZVN9jg62/xvWvdyP2zGyeccMIJJ5xwwgknnHDCCSeccMIJJ5xwwgmh0Z+Nbt/nfwLMn1+Ho/vBsT/p56A/ev2IapqqqrFYTPHh/amqmhZbvi8ax/66o6M//BP1RKMoURoUT1Lj239Zmxq3E188VOnsxKQqt8f+0GNh9KKpAvGshaRNV3cM/imrG0yjmpR8Ahl1gnveVfXj/sjf/X2YxuQUaA3VV5+Z5lvd/N/QpFFHDSEfX0Qz765FcFMsNj325x8ejRd5E9uIaOHft1Y8NTo89hAOjHs1FlJAaxGdjdYyUtTO6NijOCQGWAi0jhODUFENYkeFFiKtRHR2vwkQFHUyO/I4DoiRthKNJxR/ze+MP96eX6e3w+FwsRgOp/OXcZQMldS11vSjGw1UtJdfu7g1ol6mEet8vN8u7vsNWuA8uJ92wHqnbnRmMNk6ekV7+7VCur8Xr9ujKCYjrb/95Y+2/duY+nuFJIEG7rIQob7uZPSPC+kWWfeUDmqQQ9QKY9pbn/mMX44+El0qH9hPM1zDtJdfvLrx0EC8UewZ/DbGQitFHf/qOImFQWcnIpUIp//gGYyiLh/+PVZpgGiRRvrkW5DEKGr09d9IcHdooOOn/D5TQB6jeJ77V9vbbDHDlQBx18oL7Q4kikRU6faXqlJj6ofcGsa/jnYCYNEfryTnpKjK/BdGSrM/a34NkxESF2msRZ0wtkCg2i8rCAwexto2NY0iQ5vvRq+y76ZST4qq/fk1Xmk2V1Fj0RBHslvQYnPOE4YxKvsU8xa4XxB196dRnF1Dtaixc0UqVyMaH3SSV4mpk+Ff7bsHiw+CFlLfd7+j3lrgWW5ZlQJFVV/+WimN3igVEBXNxN63+qW8iZ7Wn2jwWTspaR9/oZRGc1qFSNHe0It2rkiT8LwPHD7c06W/yuIaC2+Fpw1HiS3Q6+63eoEtc0z0X3h1OUWNTYZ/hffuDz8UxnSrY3wEu6go9s54GsCCFiNhujR+/+Gkyex1rLL96iu4+mVnZ7KzP5gLynNeEhd7+6nK1FjMFY3dAaIuYc6wW/IBm8bFbCysgnvK1Hkf/TDPNJi9LrkdMopKpmDDrYiYyQcVD3xrWyuTqoynox+Sowxm04nCbyBS1A+K6n9sblHG4d7YEFnbVkyxyfG1aXb7EtVY7WcbqNEF5dbGVhf4kTX1tUvJjgFPTFrneXEkXqAxm77FhOLxk3Lopld42NhZWCUKMIxKN+b4jYLq8n34rZ2njfuHeVTcnRd8n/bG0PTl5m51r2V6MJVwSbicouPn4ezgcho0Rrd/lpLiCcoWrPFvCcfY277f8hyy/UTxzU7tvL0fyvAas+HzS2fV1yH5SXQntMJ0Mzx1/yCm8ayF79EJBKV1Xp6nI4miuuSH3I+mzxNFY7cFMwTEbYLd5GeUaCDMt833aGRaC8p3UbHlfPow6tNbM8Rv79+PbqfzsaKG0ZydgKLcLuHZOj9bN4Huj/4znW+T/c6VpKKdztjTq+Fidt8Y+KC+K/ilfz8bLYav849xx1uKAtns9WJPQPx52VCy6ufdQuNZ0jNyv1hZ65UWNEF3luPJ5OPl5eVtBe+/JuNlx1+fgx0Iqzay/d8q0iB/PjYS+pK2z0bI3lzhADDE0P/5mudrEp2c6+QjRi2e7YOHTuj202Mhpn2wV7EdxsF48H6ZT2L09gX2dnB4qZpcDfA+UCIl9rWkRf9VPuQ+DjwXNJUMNJ4DVxQuwZfCYsLhY44MRdLCAgQ9x4oMXx0e/fcQ+06+D558lrIK5MPfxaCEz+9lMXr52gXu84ip0edw0c17zJPqITnmxgObIP52ePP1JzS5t9DU5aHp5f7t+Ce4JUXV3vYiP/vfwnH1byeS+wUPJJ6YGvsj7aCPhf7Di4A0Ppx8tM78p5DnAgxGz51vdky++iynf9f++v7Dm79f5zvk5LNR0eMXFfbC/e1bVDuo0flknfoDai6fwv1wvgzJDMpLR4t+/JjK3efQGE0/vFhlTyaMJh5Pd5Tl87D/K8SzRX80fV5q2h50KqY5/okesY/XxS+TDgJPUPNJcJBJGBJRCXyOpkUn81fYSP5LMbgfDV/nL5NlQEUHx77EFALrrb3eutiZvL0PF4cvyP1EDBr92WJ4e/v6PH/7mIyXy84ay+XE39x76wmm39ivWHLC9+F/8WW//HTAV+EAAAAASUVORK5CYII=",
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
    {
      image: require("./assets/images/expindianoil.png"),
      link: "http://iocl.com/",
    },
    {
      image: require("./assets/images/workgail.png"),
      link: "http://gailonline.com/",
    },
    {
      image: require("./assets/images/workncs.jfif"),
      link: "https://www.nasscom.in/",
    },
    {
      image: require("./assets/images/workpay.png"),
      link: "https://www.paymentus.com",
    },
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
      image: require("./assets/images/hasanaward.png"),
      footerLink: [
        {
          name: "More Information",
          url: "https://hasanali28.github.io/about/",
        },
      ],
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en",
        },
      ],
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/",
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
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?",
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.",
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
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/",
    },
  ],
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo",
  ],
};

const contactInfo = {
  title: emoji("Hire Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8802539664",
  email_address: "hasan.remote@gmail.com",
};

// ---COURSES SECTION
const CourseSection = {
  title: "Courses by Hasan",
  subtitle:
    "With Love for Developing cool stuff and Great Hard Work I bring Out Best Courses for You.",

  course: [
    {
      whatsapplink: "",
      title: "Advance Machine Learning for Professionals",
      description: "12th Maths | No Coding Background Required",
      describe: "With Industry Experts Hasan",
      totalStudent: "1200+",
      duration: "3 month",
      startDate: "31 July, 2020",
      fees: {
        inrupees: "12,000",
        indollar: "160",
      },
      syllabus: [
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
      ],
      about: {
        box1: {
          title: "Title Box 1",
          image: require("./assets/images/courseback.svg"),
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box2: {
          title: "Title Box 2",
          image: require("./assets/images/courseback.svg"),
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box3: {
          image: require("./assets/images/courseback.svg"),
          title: "Title Box 3",
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box4: {
          image: require("./assets/images/courseback.svg"),
          title: "Title Box 4",
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box5: {
          title: "Title Box 5",
          image: require("./assets/images/courseback.svg"),
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box6: {
          title: "Title Box 6",
          image: require("./assets/images/courseback.svg"),
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
      },
      testimonial: [
        {
          image:
            "https://www.orbitmedia.com/wp-content/uploads/2016/08/Andy-Profile-600-400x400.png",
          name: "Testimonial User 1",
          position: "Student",
          quote:
            "I could probably go into sales for you. Not able to tell you how happy I am with teaching. Without teaching, we would have gone bankrupt by now. I just can't get enough of teaching. I want to get a T-Shirt with teaching on it so I can show it off to everyone.",
        },
        {
          image:
            "data:image/jpeg;base64,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",
          name: "Testimonial User 2",
          position: "Working at XYZ-Company",
          quote:
            "I could probably go into sales for you. Not able to tell you how happy I am with teaching. Without teaching, we would have gone bankrupt by now. I just can't get enough of teaching. I want to get a T-Shirt with teaching on it so I can show it off to everyone.",
        },
        {
          image:
            "https://www.orbitmedia.com/wp-content/uploads/2016/08/Andy-Profile-600-400x400.png",
          name: "Testimonial User 3",
          position: "Student",
          quote:
            "I could probably go into sales for you. Not able to tell you how happy I am with teaching. Without teaching, we would have gone bankrupt by now. I just can't get enough of teaching. I want to get a T-Shirt with teaching on it so I can show it off to everyone.",
        },
      ],
      tools: [
        {
          name: "Pandas",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
        },
        {
          name: "MongoDb",
          logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
        },
        {
          name: "Keras",
          logo: "https://keras.io/img/logo.png",
        },
        {
          name: "Tensorflow",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/TensorFlowLogo.png",
        },
        {
          name: "Pandas",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
        },
        {
          name: "MongoDb",
          logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
        },
        {
          name: "Keras",
          logo: "https://keras.io/img/logo.png",
        },
        {
          name: "Tensorflow",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/TensorFlowLogo.png",
        },
        {
          name: "Pandas",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
        },
        {
          name: "MongoDb",
          logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
        },
        {
          name: "Keras",
          logo: "https://keras.io/img/logo.png",
        },
        {
          name: "Tensorflow",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/TensorFlowLogo.png",
        },
      ],
    },
    {
      whatsapplink: "",
      title: "Data Science Fundamentals with Python",
      description: "Age : 14+ | Everyone",
      describe: "With Industry Experts",
      totalStudent: "80+",
      duration: "3 month",
      startDate: "31 July, 2020",
      about: {
        box1: {
          title: "Title Box 1",
          image:
            "https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/5Specialisations__1582631046168.png",
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box2: {
          title: "Title Box 2",
          image: require("./assets/images/hasanaward.png"),
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box3: {
          title: "Title Box 3",
          image:
            "https://www.webdesignerdepot.com/cdn-origin/uploads/2014/02/featured31.jpg",
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box4: {
          title: "Title Box 4",
          image:
            "https://ik.imagekit.io/upgrad1/marketing-platform-assets/sprites%2Fimages/5Specialisations__1582631046168.png",
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box5: {
          title: "Title Box 5",
          image:
            "https://www.iamabiker.com/wp-content/uploads/2013/09/Suzuki-GSX-R-wallpapers-101.jpg",
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
        box6: {
          title: "Title Box 6",
          image:
            "https://mk0thinkificig8baqk3.kinstacdn.com/wp-content/uploads/2016/03/Udemy-Course-Pricing-Model.jpg",
          content:
            "Lorem ipsum is a name for a common type of placeholder text. Also known as filler or dummy text, this is simply copy that serves to fill a space without actually saying anything meaningful. ... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
        },
      },
      testimonial: [
        {
          image:
            "https://www.orbitmedia.com/wp-content/uploads/2016/08/Andy-Profile-600-400x400.png",
          name: "Testimonial User 1",
          position: "Student",
          quote:
            "I could probably go into sales for you. Not able to tell you how happy I am with teaching. Without teaching, we would have gone bankrupt by now. I just can't get enough of teaching. I want to get a T-Shirt with teaching on it so I can show it off to everyone.",
        },
        {
          image:
            "data:image/jpeg;base64,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",
          name: "Testimonial User 2",
          position: "Working at XYZ-Company",
          quote:
            "I could probably go into sales for you. Not able to tell you how happy I am with teaching. Without teaching, we would have gone bankrupt by now. I just can't get enough of teaching. I want to get a T-Shirt with teaching on it so I can show it off to everyone.",
        },
        {
          image:
            "https://www.orbitmedia.com/wp-content/uploads/2016/08/Andy-Profile-600-400x400.png",
          name: "Testimonial User 3",
          position: "Student",
          quote:
            "I could probably go into sales for you. Not able to tell you how happy I am with teaching. Without teaching, we would have gone bankrupt by now. I just can't get enough of teaching. I want to get a T-Shirt with teaching on it so I can show it off to everyone.",
        },
      ],
      tools: [
        {
          name: "Pandas",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
        },
        {
          name: "MongoDb",
          logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
        },
        {
          name: "Keras",
          logo: "https://keras.io/img/logo.png",
        },
        {
          name: "Tensorflow",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/TensorFlowLogo.png",
        },
        {
          name: "Pandas",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
        },
        {
          name: "MongoDb",
          logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
        },
        {
          name: "Keras",
          logo: "https://keras.io/img/logo.png",
        },
        {
          name: "Tensorflow",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/TensorFlowLogo.png",
        },
        {
          name: "Pandas",
          logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/Pandas_logo.svg/1200px-Pandas_logo.svg.png",
        },
        {
          name: "MongoDb",
          logo: "https://cdn.iconscout.com/icon/free/png-512/mongodb-226029.png",
        },
        {
          name: "Keras",
          logo: "https://keras.io/img/logo.png",
        },
        {
          name: "Tensorflow",
          logo: "https://upload.wikimedia.org/wikipedia/commons/a/a4/TensorFlowLogo.png",
        },
      ],
      syllabus: [
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
        {
          title: "Week 1 Chapter 1 Introduction",
          description:
            "In this part of the course you will learn basic of all the course how it work",
        },
      ],
      fees: {
        inrupees: "27,000",
        indollar: "1100",
      },
    },
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
