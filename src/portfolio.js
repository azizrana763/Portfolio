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
  animated: false // Set to false to use static SVG
};

const greeting = {
  username: "Aziz Ur Rehman",
  title: "Hi all, I'm Aziz Ur Rehman",
  destination: "Web/Software Developer",
  subTitle: emoji(
    " Highly skilled Front-End Developer with expertise in React js and JavaScript. Proven track record of building scalable, efficient applications. Passionate about staying updated with industry trends and collaborating with innovative teams."
  ),
  resumeLink:
    "https://drive.google.com/uc?export=download&id=16y8UOAzE3raBibDysw5R1CYZDamUVqW_"
  , // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/azizrana763",
  linkedin: "https://linkedin.com/in/aziz-ur-rehman-0465641a9",
  gmail: "azizana763@gmail.com",
  facebook: "https://www.facebook.com/aziz.r95",
  instagram: "https://www.instagram.com/azizrana763",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS "
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    { 
      color: "#E34F26",
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    { color: "#1572B6",
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    /*{
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },*/
    { color: "#F7DF1E",
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    { color: "#61DAFB",
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      color: "#8CC84B" ,
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    /*{
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },*/
    {
     color: "#CB3837",
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    { color: "#00758F",
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    { color: "#FF9900",
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {  color: "#FFCA28",
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    /*{ 
      color: "#06B6D4", // Tailwind CSS color
      skillName: "Tailwind CSS",
      fontAwesomeClassname: "fab fa-tailwind" // Ensure the icon is available in your Font Awesome version
    },
    { 
      color: "#47A248", // MongoDB color
      skillName: "MongoDB",
      fontAwesomeClassname: "fab fa-mongodb" // Ensure the icon is available in your Font Awesome version
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }*/
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Sir Syed University Of Engineering And Technology",
      logo: require("./assets/images/sir syed.jpg"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "Oct 2020 - Aug 2024",
      desc: "Ranked top 10% in the program. Took courses about Computer Science like Web Engineering,Cloud Computing,Operating Systems,Artificial Intelligent,  ...",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "Jnnah Government College Nazimabad,Karachi",
      logo: require("./assets/images/college.png"),
      subHeader: "Intermediate in Pre-Engineering",
      duration: "May 2017 - June 2019",
      desc: "Took courses about Pre-Engineering like Maths,Physics,Chemistry,....",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    },
    {
      schoolName: "New Progressive Public Schooling System",
      logo: require("./assets/images/School.png"),
      subHeader: "Matriculation in Computer Science",
      duration: "March 2015- April 2017",
      desc: "Took courses about Science Group like Maths,Physics,Chemistry,Computer....",
      //descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "40%"
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
      role: "Web Developer Intern",
      company: " Mac World Technology ",
      companylogo: require("./assets/images/MacWorld.jpeg"),
      date: "Aug 2023 – Sep 2023 ",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Design, develop, test, and deploy web applications across multiple platforms. ",
        "Collaborated with senior developers in building and maintaining front-end components of web applications.",
        "Gained practical experience in a professional work environment, learning industry standards and practices.",
        "Stay up-to-date with emerging technologies and trends.",
        "Ensure cross-browser compatibility and responsiveness.",
        "Optimize application performance, scalability, and reliability."
      ]
    },
    {
      role: "Web Developer Intern",
      company: "CodSoft",
      companylogo: require("./assets/images/Codsoft.jpeg"),
      date: "Oct 2023 – Nov 2023 ",
      desc: "Thrived in a remote internship, consistently exceeding expectations by successfully completing multiple projects. Showcased exceptional self-discipline and time management, delivering high- quality solutions promptly."
    },
    {
      role: "Account Assistant",
      company: "Industrial Development Bank of Pakistan(IDBL)",
      companylogo: require("./assets/images/IDBP.png"),
      date: "  July 2020 – July 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      descBullets: [
        "Create and update expense reports. ",
        "Process reimbursement forms. ",
        "Prepare banks deposit. ",
        "Check spreadsheet for accuracy. ",
        "Maintain digital and physical financial records."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/ECOMMERCE.png"),
      projectName: "Ecommerce Website",
      projectDesc: "Developed an E-commerce website, built with React JS, Tailwind CSS, HTML, and JavaScript. Our platform offers a seamless shopping experience, featuring customer testimonials, new product notifications, and easy add-to-cart functionality. With a diverse range of products catering to all genders, our site ensures a hassle-free shopping experience. Stay updated with the latest arrivals and shop with ease, knowing you're in good hands",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://ecommerce-sigma-orcin.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/EasyDrive.png"),
      projectName: "Easy Drive (Congestion Free Commute)",
      projectTitle:"Final Year Project",
      projectDesc: " Our project introduces a real-time GPS tracking system for school buses and vans, enhancing safety and traffic management. Parents and school administrators receive continuous updates on vehicle locations and geo-fencing alerts for designated pickup spots. This system optimizes routes to reduce congestion and waiting times, creating a safer commuting environment for students. Overall, it streamlines transportation operations and improves the educational experience for all stakeholders.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://final-year-project-ashen-tau.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Food_Delivery.png"),
      projectName: "Food Delivery App",
      projectDesc: "developed a Front-end food delivery application utilizing HTML, CSS, JavaScript, and the React.js framework. This app includes a range of features to enhance user experience,such as: User Login Page,Add to Cart Functionality,Payment Method Integration,Download App Functionality and This project combines a modern design with essential features to create an efficient and user-friendly food delivery platform.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://food-delivery-seven-gamma.vercel.app/"
        }
        //  you can add extra buttons here.
      ]
    },
   /* {
      image: require("./assets/images/pic2.jpg"),
      projectName: "Restaurant Management System--- C# Winform:",
      projectDesc: "System that enables a restaurant to manage front-office capabilities, such as booking reservations, checkout, food assignment, managing food rates, and billing",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/azizrana763"
        }
        //  you can add extra buttons here.
      ]
    },*/
    {
      image: require("./assets/images/Jarvis.png"),
      projectName: "JARVIS: AI VOICE ASSISTANT(MEMBER):",
      projectDesc: "We proposed IoT-based home security system is a cost-effective and efficient solution for protecting homes from intruders. The use of a motion detector, IoT gateway, camera, and sirens allows for real-time monitoring and quick response to potential threats.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://github.com/azizrana763"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        { name: "Certification", url: "" },
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
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
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
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
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3310255200",
  email_address: "azizrana763@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

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
