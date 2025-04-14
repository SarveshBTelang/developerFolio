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
  username: "sarvesh telang",
  title: "Hi, I'm Sarvesh..",
  subTitle: emoji(
    "A passionate and detail-oriented engineer with 3 years of experience in the automotive industry, specializing in data-driven development, machine learning, computer vision tools, and building automation frameworks that are robust, maintainable, and production-ready."
  ),
  resumeLink:
    "https://drive.google.com/file/d/154HO_GSWLuv9ct4i_9mOfcG3x5K6DWvH/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/SarveshBTelang",
  linkedin: "https://www.linkedin.com/in/sarvesh-telang-17916448/",
  gmail: "telang@rptu.de",
  instagram: "https://www.instagram.com/sarv_t98/",
  facebook: "https://www.facebook.com/sarvesh.telang.5",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Expertise & Capabilities",
  subTitle: "SOFTWARE DEVELOPER | DATA SCIENTIST",
  skills: [
    emoji(
      "▶ Extensive experience building tools in Python, C++, and MATLAB/Simulink for data processing and control systems"
    ),
    emoji(
      "▶ Build and deploy Machine Learning models using PyTorch, TensorFlow, and MLOps tools for automotive and industrial applications"
    ),
    emoji(
      "▶ Experience with RESTful APIs, CI/CD pipelines, and containerized cloud services such as Docker, Kubernetes, and Microsoft Azure"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
  ],
  
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "RPTU Kaiserslautern-Landau, Germany",
      logo: require("./assets/images/RPTULogo.png"),
      subHeader: "Master of Science in Commercial Vehicle Technology (Nutzfahrzeugtechnik)",
      duration: "October 2021 - Present",
      desc: "Matser's Thesis: DNN-based Virtual Trajectory Generation for Autonomous Vehicles: Focus on Local Reference Path Computation",
      descBullets: [
        "CGPA (current): 1.9 (Good: German Grading System)",
        "Thesis Grade: 1.3 (Very good: German Grading System)"
      ]
    },
    {
      schoolName: "Pune University, India",
      logo: require("./assets/images/SPPULogo.png"),
      subHeader: "Bachelor of Mechanical Engineering",
      duration: "Aug 2015 - Jul 2019",
      desc: "Thesis: Design and Analysis of a Cost-Effective Cylindrical Robotic Arm. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: [
        "CGPA: 8.81/10 (Very good: equivalent to 1.5 in German Grading System)",
        "Ranked top 3% in the program"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Machine Learning, Pytorch, Tensorflow, MLOps Tools",
      progressPercentage: "80%"
    },
    {
      Stack: "Matlab/ Simulink",
      progressPercentage: "70%"
    },
    {
      Stack: "Azure, Git, Docker, Kubernetes",
      progressPercentage: "60%"
    },
    {
      Stack: "SQL, C++, C",
      progressPercentage: "60%"
    },
    {
      Stack: " ADAS & Automotive Software (AUTOSAR, ISO26262)",
      progressPercentage: "60%"
    },
    {
      Stack: "Data Manipulation & Visualization (Pandas, Numpy, Matplotlib, PLotly, Seaborn)",
      progressPercentage: "90%"
    },
    {
      Stack: "Web Development (Flask, Streamlit, Dash, HTML, CSS, Java Script)",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Working Student",
      company: "Robert Bosch GmbH",
      companylogo: require("./assets/images/boschLogo.png"),
      date: "Sept 2023 - Nov 2024",
      desc: "Responsibilities:",
      descBullets: [
        "Led the label quality assurance team within the Automated Driving Alliance (Volkswagen Cariad & Bosch) for Level-3 systems",
        "Managed quality control and feature engineering tasks for labels in ML models for lane detection",
        "Improved label accuracy by 40% through regular feedback to suppliers",
        "Created weekly quality reports and error analysis to support continuous quality improvement",
        "Developed a Python-Tool for automated quality assessment and integrated it into the CI/CD-Pipeline",
        "Designed a web-application with dynamic dashboard (using Azure and SharePoint API) to perform quality checks in real-time"
      ]
    },
    {
      role: "Data Science Intern",
      company: "Robert Bosch GmbH",
      companylogo: require("./assets/images/boschLogo.png"),
      date: "Oct 2022 - Mar 2023",
      desc: "Internship Topic: Enhancement of ADAS Hardware Development Process through Machine Learning, Cloud Deployment and Vehicle Sensor Data Analysis",
      descBullets: [
        "Implemented an AI-based knowledge discovery framework for the automotive camera Manufacturing Process",
        "Migrated the Python version of multi-objective optimization algorithm, increasing the computation accuracy by 6%",
        "Performed debugging to scale the code using Dask over HPC clusters, ensuring functionality on Windows and Linux",
        "Deployed the code over Azure cloud using Azure ML and Docker to share and collaborate with external clients",
        "Analyzed vehicle measurements from SHT and Type K sensors at 20+ ADAS sensor mounting locations",
        "Developed a python tool to investigate the impact of temperature and humidity on driving behavior and sensor correlations",
        "Created a MATLAB tool to visualize driver profiles across different time, weather, and road conditions"
      ]
    },
    {
      role: "Process Executive",
      company: "NVIDIA",
      companylogo: require("./assets/images/nvidiaLogo.png"),
      date: "Apr 2021 - Aug 2021",
      desc: "Responsibilities:",
      descBullets: [
        "Performed image and video frame annotations for autonomous vehicles and their chassis control systems",
        "Worked on multiple annotation projects using NVIDIA HL2 platform, including Obstacle detection, VRU detection, LiDAR Free space detection, and Parking assistance."
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
  title: "Other",
  projects: [
    {
      image: require("./assets/images/thesisLogo.png"),
      projectName: "Master's Thesis: DNN-based Virtual Trajectory Generation for Autonomous Vehicles: Focus on Local Reference Path Computation",
      duration: "Jun 2024 - Jan 2025",
      responsibilities: [
        "Developed a virtual trajectory prediction framework using a spatio-temporal road inference approach",
        "Trained a Seq-2-Seq Transformer Model for robust lane keeping, solving a multi-variate time series forecasting problem",
        "Integrated the predicted trajectory into a vision-based MPC framework and simulated it in the CARLA Simulator",
        "Grade: 1.3 (Very good– German Grading System)"
      ],
      footerLink: [
        {
          name: "See Results",
          url: "https://github.com/SarveshBTelang/DNN-based-Virtual-Trajectory-Generation-for-Autonomous-Vehicles-Local-Reference-Path-Computation"
        }, 
        {
          name: "Final Presentation",
          url: "https://drive.google.com/file/d/15v83R9uCXkCt5xvgFN6FrsVU8MGYq0wH/view?usp=drive_link"
        },
        {
          name: "Dataset Info",
          url: "https://github.com/TuSimple/tusimple-benchmark/blob/master/doc/lane_detection/readme.md"
        },
      ]
    },
    {
      image: require("./assets/images/specialityLogo.png"),
      projectName: "Technical Sales Engineer at Speciality Innotech Pvt. Ltd., India",
      duration: "Oct 2019 - Oct 2020",
      responsibilities: [
        "Assisted in developing customized polyurethane products including Vehicle Engine mounts, MPU buffers, and PU panels.",
        "Conferred with customers and engineers to assess equipment needs and determine system requirements.",
        "Utilized CAD and CAE software (AutoCAD, Ansys, SolidWorks) to perform feasibility checks through structural analysis.",
        "Managed B2B sales operations in the South India region, including prospecting, pitching, and closing new business deals.",
        "Secured 20+ new accounts and increased qualified leads by 16% in a year through targeted marketing strategies.",
        "Oversaw the Order to Cash process for POs, including procurement and inventory management."
      ],
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.innothane.com/"
        }
      ]
    },
    {
      image: require("./assets/images/CBIRRT.png"),
      projectName: "Sampling-based Motion Planning with Obstacle Avoidance for a 7-DOF Robotic Arm",
      duration: "Aug 2023 – Sept 2023",
      responsibilities: [
        "Implemented the Constrained Bi-directional Rapidly-Exploring Random Tree (CBiRRT) algorithm for path planning in configuration spaces with multiple constraints, addressing torque limits, object posture restrictions, and workspace adherence.",
        "Simulated and tested the algorithm in MATLAB using Robotic System Toolbox for a 7-DOF Franka robot, enabling pick-and-place operations.",
        "Utilized Task Space Regions (TSRs) to define end-effector constraints and generate goal configurations, ensuring compliance with task-specific requirements.",
        "Achieved a smooth, shortest collision-free path, reducing path length by 45% compared to traditional techniques, validating the efficiency of the CBiRRT algorithm for a 7-DOF robotic arm."
      ]
    }
  ],
  display: true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Highlights 🌟"),
  achievementsCards: [
    {
      title: "2nd Place - E-Mobility Competition",
      subtitle:
        "Secured 2nd place out of 18 student groups in an E-Mobility seminar competition during the Master's program, focused on motion prediction algorithms for autonomous vehicles.",
      image: require("./assets/images/emobilityLogo.png"),
      imageAlt: "E-Mobility Competition",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://github.com/SarveshBTelang/Academic_Publications_Sarvesh_Telang/blob/c7fe4e76a14ad7956369ad88506113e09760f938/Emobility_seminar_achievement.pdf"
        },
        {
          name: "View Project",
          url: "https://github.com/SarveshBTelang/Vehicle_Motion_Prediction_in_Autonomous_Vehicles"
        },
        {
          name: "Dataset Info",
          url: "https://levelxdata.com/ind-dataset/"
        }
      ]
    },
    {
      title: "Top 3% in Bachelor's Program",
      subtitle:
        "Achieved 5th rank among 208 students in the Mechanical Engineering Bachelor's program at NBN Sinhgad Institute of Engineering.",
      image: require("./assets/images/nbnLogo.png"),
      imageAlt: "Bachelor's Ranking",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://drive.google.com/file/d/1IwwmrBEb5XM3Z_DM7BH4uCo-ndNNeHfo/view?usp=drive_link"
        }
      ]
    },
    {
      title: "Microsoft Certified: Azure Data Fundamentals (DP-900)",
      subtitle:
        "Mastered the fundamentals of Data Engineering, Big Data Analytics, and Data Warehousing with Azure solutions.",
      image: require("./assets/images/dp900.webp"),
      imageAlt: "DP900",
      footerLink: [
        {
          name: "View Certificate",
          url: "https://learn.microsoft.com/api/credentials/share/en-us/SarveshTelang-7586/FEA51647C2740343?sharingId=6732E5DDE640CD09"
        }
      ]
    },
    {
      title: "Real-Time AI-Based Google News Scraper – 'Glimpse Through'",
      subtitle:
        "A Streamlit-based web app that uses AI and web scraping to fetch and summarize the latest Google News articles in real time across customizable topics and regions.",
      image: require("./assets/images/glimpsethrough.png"),
      imageAlt: "PWA Certification Logo",
      footerLink: [
        {
          name: "View Project",
          url: "https://github.com/SarveshBTelang/AI-based-google-news-scraper-Glimpse-Through"
        },
        {
          name: "Visit Website",
          url: "https://glimpsethrough.streamlit.app/"
        }
      ]
    }
  ],
  display: true // Set to false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Publications",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://github.com/SarveshBTelang/Academic_Publications_Sarvesh_Telang/blob/5631d6544a64dc8b892f7c4414730bf086cf6eb7/A%20Comparative%20Analysis%20of%20Visual%20SLAM%20and%20LiDAR-based%20SLAM%20algorithms%20for%20Autonomous%20Vehicles%20(CVT%20Scientific%20Writing%202022).pdf",
      title: "A Comparative Analysis of Visual SLAM and LiDAR-based SLAM algorithms for Autonomous Vehicles (CVT Scientific Writing 2022)",
      description:
        "Which of the two—Visual or LiDAR-based SLAM—proves more robust in driving the future of autonomous navigation? This analysis explores their distinct strengths—and inherent trade-offs."
    },
    {
      url: "https://github.com/SarveshBTelang/Academic_Publications_Sarvesh_Telang/blob/5866e212a091574888b6d97ac8c6af65f6da28f0/CVT_Seminar_Integration_of_ITS_for_Optimizing_Sustainability_and_Efficiency_in_Commercial_Vehicle_Operat.pdf",
      title: "Integration of ITS for Optimizing Sustainability and Efficiency in Commercial Vehicle Operations",
      description:
        "How Intelligent Transportation Systems (ITS) are reshaping the future of commercial vehicle fleets, optimizing operations, and paving the way for greener, more efficient transportation."
    },
    {
      url: "https://github.com/SarveshBTelang/Academic_Publications_Sarvesh_Telang/blob/c7fe4e76a14ad7956369ad88506113e09760f938/Report_Vehicle%20Motion%20Prediction%20in%20Autonomous%20Vehicles.pdf",
      title: "Vehicle Motion Prediction in Autonomous Vehicles using an FCN-based Deep Learning Model",
      description:
        "Traditional motion prediction struggles with occlusions and complex traffic scenarios. This study presents an FCN-based model trained on the inD Drone dataset, using a bird’s-eye view to optimize vehicle trajectory forecasting."
    },
    {
      url: "https://github.com/SarveshBTelang/Academic_Publications_Sarvesh_Telang/blob/c7fe4e76a14ad7956369ad88506113e09760f938/Design-and-optimization-of-a-vacuum-assisted-power-brake-system-for-light-commercial-vehicles-IJERTV10IS090066.pdf",
      title: "Design and Optimization of a Vacuum-Assisted Power Brake System for Light Commercial Vehicles",
      description:
        "Braking systems in LCVs face unique demands in terms of efficiency, safety, and reliability. This research develops a power brake system, combining practical design, material analysis, and simulation to meet real-world operational needs."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Certifications",
  subtitle: emoji(
    "CLICK THE BADGE TO SEE THE CREDENTIALS.."
  ),

  talks: [
    {
      image: "https://images.credly.com/size/340x340/images/c0b439e5-79d5-498e-abc9-2b71cdf08c34/image.png",
      credential_url: "https://www.credly.com/badges/322d9d4c-5d02-4d74-87f2-b5f03d1d5f49"
    },
    {
      image: "https://images.credly.com/size/340x340/images/deb56de3-f26b-4b43-bdb5-ffd0ff8023ee/image.png",
      credential_url: "https://www.credly.com/badges/63150cba-0f30-4f92-95e0-c2d433d7f13e"
    },
    {
      image: "https://learn.microsoft.com/en-us/media/learn/certification/badges/microsoft-certified-fundamentals-badge.svg",
      credential_url: "https://learn.microsoft.com/api/credentials/share/en-us/SarveshTelang-7586/FEA51647C2740343?sharingId=6732E5DDE640CD09"
    },
    {
      image: "https://images.credly.com/size/340x340/images/16c405a6-bce7-4dda-9c85-e298617f00bd/image.png",
      credential_url: "https://www.credly.com/badges/271c5316-957f-4962-b891-980097a12294"
    },
    {
      image: "https://images.credly.com/size/340x340/images/4b68a030-53d0-414b-be57-b1837bc3b3e6/image.png",
      credential_url: "https://www.credly.com/badges/74a614b2-4c25-4e34-a717-60c768847157"
    },
    {
      image: "https://images.credly.com/size/340x340/images/92a3e7a1-a9c4-4356-ae16-033327c1e387/Coursera_20Data_20Warehouse_20Fundamentals.png",
      credential_url: "https://www.credly.com/badges/cc3a62ed-2c8e-4534-bf52-78408cba4869"
    },
    {
      image: "https://ups-com.transforms.svdcdn.com/production/Open-Source/docker.png?w=300&h=300&q=82&auto=format&fit=crop&dm=1692633910&s=19610095105f092022ed5e00b51e22a1",
      credential_url: "https://www.linkedin.com/learning/certificates/d1a94e90dc853663c067a6a4887a57542c8bcde36bd54b330c6e8cba7a4358cb?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3B2AgidKLuQFa5gZ9Esl%2B8sg%3D%3D"
    },
    {
      image: "https://images.credly.com/size/340x340/images/9247e02c-eade-4704-8758-7a9f6ef8e3db/image.png",
      credential_url: "https://www.credly.com/badges/d57375fc-bc61-4257-be21-c62d004f4fab"
    },
    {
      image: "https://images.credly.com/size/340x340/images/56774818-e5ff-4dd0-89db-a2a571b0c459/image.png",
      credential_url: "https://www.credly.com/badges/0a017143-f28b-4573-ac4c-c56147c328eb"
    },
    {
      image: "https://images.credly.com/size/340x340/images/e7192c75-33ae-4c79-890f-fcc6eb0dc653/image.png",
      credential_url: "https://www.credly.com/badges/a22a3d8a-4557-4051-9051-36a8def210ed"
    },
    {
      image: "https://images.credly.com/size/340x340/images/87e311ec-4438-4701-b4ba-40867159c1e9/image.png",
      credential_url: "https://www.credly.com/badges/f16bd340-db4e-427d-b3d4-1117ed7922bd"
    },
    {
      image: "https://www.alternativeinsights.co.uk/wp-content/uploads/2019/04/logo-circle-microsoft.png",
      credential_url: "https://www.linkedin.com/learning/certificates/f23cce4cceae1986623c94cdaebabe21d010a5e448e0b80605b60323295e736f"
    }
    // Add more badge objects if needed
  ],
display: true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false// Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact"),
  subtitle: "Discuss a project or just want to say hi? My inbox is open for all.",
  status: "🟢 Current Status: Actively seeking job opportunities",
  email_address: "telang@rptu.de",
  number: "+49 1525 9455504"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
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
