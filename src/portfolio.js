/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Arpon",
  title: "Hi all, I'm MD ANAYTUL ISLAM",
  subTitle: emoji(
    "I am a skilled .NET Full Stack Developer with over five years of experience building secure, high-performance desktop and cloud applications. Proficient in C#, .NET Framework, WinForms, WPF, and cloud platforms like Azure and AWS, I specialize in developing scalable software, modernizing legacy systems, and creating RESTful APIs. Experienced in Agile environments, I collaborate effectively with cross-functional teams, focusing on code quality, maintainability, and user-centric solutions. I am eager to contribute to innovative development projects."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1kRLJ4tyyPH8OizgtLqUeToMuVQnO0bPn/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/AnaytulIslamArpon",
  linkedin: "https://www.linkedin.com/in/md-anaytul-islam-arpon-801250132/",
  gmail: "mislam44@lakeheadu.ca",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@anaytularpon",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
subTitle: "EXPERIENCED .NET FULL STACK DEVELOPER SPECIALIZED IN DESKTOP & CLOUD SOLUTIONS",
skills: [
  emoji("⚡ Build robust, secure, and high-performance desktop applications using C#, .NET, WinForms, and WPF"),
  emoji("⚡ Develop scalable backend services and RESTful APIs using .NET Core and microservices architecture"),
  emoji("⚡ Integrate cloud platforms and services like Azure, AWS, and SQL Server to deliver enterprise-ready solutions")
],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  {
    skillName: "HTML5",
    fontAwesomeClassname: "fab fa-html5"
  },
  {
    skillName: "CSS3",
    fontAwesomeClassname: "fab fa-css3-alt"
  },
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "React",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: ".NET",
    fontAwesomeClassname: "fas fa-code" // No dedicated .NET icon in FontAwesome, using generic code icon
  },
  {
    skillName: "C#",
    fontAwesomeClassname: "fas fa-code" // Same as above, fallback for C#
  },
  {
    skillName: "SQL Server",
    fontAwesomeClassname: "fas fa-database"
  },
  {
    skillName: "Azure",
    fontAwesomeClassname: "fab fa-microsoft"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: "Node.js",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "NPM",
    fontAwesomeClassname: "fab fa-npm"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  }
],
display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
  {
    schoolName: "Lakehead University",
    // logo: require("./assets/images/lakeheadLogo.png"), // Display this logo at 50x50
    subHeader: "M.Sc. in Computer Science (Thesis Based)",
    duration: "January 2022 - January 2024",
    desc: "CGPA: 90.4%. Participated in software engineering research and the paper was  published in the 21st International Conference on Mining Software Repositories,2024.",
    descBullets: [
      "On the Executability of R Markdown Files",]
  },
    {
      schoolName: "Khulna University",
      // logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "B.Sc. in Computer Science & Engineering",
      duration: "July 2014 - August 2018",
      desc: "CGPA: 3.52 / 4.0. Ranked 4th out of 40 in the program. Participated in software engineering research and the paper was  published in IEEE 18th International Working Conference on Source Code Analysis and Manipulation (SCAM), 2018 which is held in Madrid, Spain and it is cited by 16 people since 2019.",
      descBullets: ["Detecting Evolutionary Coupling Using Transitive Association Rules"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "80%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer (Part-time) Remote",
      company: "DOHATEC NEW MEDIA",
      // companylogo: require("./assets/images/facebookLogo.png"),
      date: "March 2022 – September 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Continued contributing to the Electronic Construction Permitting System (ECPS), enhancing system scalability and ensuring compliance with evolving government requirements.",
"Collaborated with product stakeholders to analyze user needs and translate them into technical specifications and new feature implementations using .NET technologies.",
"Developed and maintained reusable components within the existing .NET-based architecture, improving development efficiency and system consistency.",
"Supported junior developers and cross-functional team members by reviewing code, sharing technical knowledge, and assisting in the development of key system modules.",
"Participated in regular sprint planning and code review sessions, contributing to continuous integration and delivery of system enhancements."
      ]
    },
    {
      role: "Software Engineer",
      company: "DOHATEC NEW MEDIA",
      // companylogo: require("./assets/images/quoraLogo.png"),
      date: "November 2020 – February 2022",
    descBullets: [
        "Contributed to the development of the Electronic Construction Permitting System (ECPS), a large-scale government platform that automates the entire construction permit process, integrating multiple governmental authorities into a unified online workflow (https://ecps.gov.bd).",
"Designed and implemented dynamic process-generation components using the .NET Framework, enabling flexible workflow creation based on complex government rules and business logic.",
"Built RESTful APIs to securely access and integrate various public sector data sources, improving interoperability across systems.",
"Developed and optimized SQL Server database components, including stored procedures, views, and triggers to ensure data integrity and efficient querying for large datasets.",
"Developed an offline-first field data collection module using .net desktop application for survey teams, enabling hardware-integrated measurements with bluetooth and data entry in low-connectivity environments, with seamless syncing once a connection was restored.",
"Collaborated closely with product owners, QA engineers, and cross-functional teams to deliver production-ready features in agile sprints.",
"Participated in system design reviews, documentation, and deployment planning to ensure successful rollouts and stakeholder satisfaction."
      ]  
    },
    {
      role: "Software Engineer",
      company: "DATA GRID LIMITED",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "September 2018 – October 2020",
      descBullets: [
        "Contributed to the design and development of multiple enterprise-grade ERP systems, including Restaurant Management ERP, Hotel Management ERP for 3–5-star hotels, and a Human Resource Management Solution, streamlining complex business operations across sectors. (https://datagridltd.com/)",
        ,"Led full-stack development using ASP.NET Web Forms and ASP.NET Web API 2, ensuring seamless integration of front-end interfaces and backend services.",
        ,"Designed and implemented relational database schemas, stored procedures, functions, and triggers using Microsoft SQL Server to ensure data integrity and optimize performance."
,"Built scalable business logic layers and reusable domain entities adhering to clean code and SOLID principles."
,"Played a key role in the software development lifecycle (SDLC) by performing requirement analysis, planning, UI/UX design, coding, testing, and deployment."
,"Collaborated closely with cross-functional teams and clients to gather domain-specific requirements and provide timely technical support."
,"Integrated third-party APIs and custom modules to extend ERP functionalities and enhance system interoperability."
,"Delivered tailored solutions to clients in the hospitality and HR industries, improving operational efficiency and reducing manual workload."
  ]
    },
{
      role: "Graduate Research Assistant",
      company: "Lakehead University",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "January 2022 – December 2023",
      descBullets: [
      "Conducted a large-scale empirical study to understand the level of executability of R Markdown files.",
"Developed multiple Python scripts to collect project and project-related features from GitHub.",
"Developed scripts to automatically execute R Markdown files and evaluate their outputs.",
"Built multiple classifiers to predict the executability of R Markdown files."  
       ]
},
{
      role: "Graduate Teaching Assistant",
      company: "Lakehead University",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "January 2022 – December 2023",
      descBullets: [
      "Provided guidance as a teaching assistant for the following courses: Computer Programming 1, Computer Programming 2, Data Structures, Elementary Computing, and Advanced Programming Project.",
"Conducted labs to explain resources on these topics.",
"Assessed and evaluated assignments, exam papers, and lab submissions."
       ]
},
    {
      role: "Customer Service Manager",
      company: "Walmart Inc., (CAN)",
      // companylogo: require("./assets/images/airbnbLogo.png"),
      date: "June 2023 – Present",
      descBullets: [
        "Led and supported a team of associates, ensuring efficient store operations, resolving customer concerns, and maintaining high service standards.",
"Managed employee schedules, break allocations, and workflow coordination to optimize customer service during peak hours.",
"Oversaw cash handling, self-checkout operations, and loss prevention strategies to enhance security and operational efficiency.",
"Assisted customers with self-checkout transactions, troubleshooting technical issues, and ensuring smooth operations while maintaining a clean and organized checkout area.",
"Consistently exceeded expectations by acquiring over 65 MasterCards, maintaining a weekly intervention average of 500, and earning 250 Walmart Stars each week."
]
    }

]};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Microsoft Certified: Azure Data Fundamentals",
      subtitle:[
        "Issued Oct 2023 - No Expiration Date",
        "Credential ID: 50127EC7BDF3AC99"
      ],
      // image: require("./assets/images/codeInLogo.webp"),
      // imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          // url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        }
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "ITEE FE Level-2",
      subtitle:
      [
        "IPA: Information-technology Promotion Agency, Japan",
        "Issued Apr 2019 - No Expiration Date"
      ],
        // image: require("./assets/images/googleAssistantLogo.webp"),
      // imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "Certification",
          // url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: " Graduate Assistantships",
      subtitle: "Lakehead University",
      // image: require("./assets/images/pwaLogo.webp"),
      // imageAlt: "PWA Logo",
      footerLink: [
        {name: "Scholarships"
          // , url: ""
        }
      ]
    },
    {
      title: "Yearly Scholarship",
      subtitle: ["Khulna University",
        "2014, 2015, 2016, 2017"],
      // image: require("./assets/images/pwaLogo.webp"),
      // imageAlt: "PWA Logo",
      footerLink: [
        {name: "Scholarships"
          // , url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@anaytularpon/antlr-set-up-in-windows-first-step-of-building-your-own-programming-language-c5ac5b3de70c",
      title: "ANTLR Set up in Windows (First step of building your own programming language)",
      // description:
      //   "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    }
    // {
    //   url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
    //   title: "Why REACT is The Best?",
    //   description:
    //     "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    // }
  ],
  display: true // Set false to hide this section, defaults to true
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
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  // subtitle:
    // "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+1 (807) 708 9698",
  email_address: "anaytularpon@gmail.com, mislam44@lakeheadu.ca"
};
// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
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
  isHireable,
  resumeSection
};
