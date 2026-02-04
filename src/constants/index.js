
import project3 from "../assets/projects/weather app.jpg";
import project5 from "../assets/projects/Contact_manage_01_compress.jpg";
import project6 from "../assets/projects/Recipy_App_02.jpg";
import project7 from "../assets/projects/Todo_app.jpg";

export const HERO_CONTENT = `I am a passionate full-stack developer with expertise in building dynamic and responsive web applications. My experience includes working with front-end technologies like React.js as well as back-end frameworks like Node Js and Express Js. With a background in Computer Application, I bring an analytical mindset and problem-solving skills to software development, focusing on delivering high-quality, scalable solutions.`;

export const ABOUT_TEXT = `I am a dedicated software developer transitioning from MCA into full-stack development. After completing my Master's in Computer Application from MPC College , I gained experience in computer application before shifting my focus to software development. I have worked on various projects using technologies such as React, node Js, and java, and I am continuously expanding my skills by building full-stack applications and working on AI integration. My goal is to contribute to innovative projects and collaborate with forward-thinking teams in the tech industry.`;

export const EXPERIENCES = [
  {
    year: "April 2025 - Present",
    role: " Software Development Intern (Remote)",
    company: "Talentrise Technokrate Pvt. Ltd.",
    description: `Collaborating on a high-performance React + Vite game application, focusing on interactivity and animation.Participated in regular stand-ups, version control via Git, and debugging complex UI bugs.`,
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
  
];

export const PROJECTS = [
  {
    title: "Real-Time Collaborative Kanban App",
    image: project7, // replace with your actual image import
    description:
      "Built a full-stack real-time Kanban-style ToDo application with multi-board support, role-based access, and live task updates using Socket.IO. Features include JWT authentication, activity logs, task drag-and-drop (mobile and desktop), and board invitations by email. Developed using React.js, Node.js, Express.js, MongoDB, and Socket.IO with a responsive UI using Material UI and conditional rendering. Frontend hosted on Netlify, backend on Render with CORS and environment-based configuration.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    link: "https://todo-kanban-style.netlify.app/"
  },
  {
    title: " AI-Powered Recipe Application ",
    image: project6,
    description:
      "Developed a full-stack Recipe To-Do web application integrating Gemini AI API for intelligent recipe suggestions based on user ingredients. Built using React.js, Node.js, Express.js, and MongoDB with JWT authentication and secure routing. Users can add ingredients, receive recipe ideas, and manage cooking tasks in a responsive tailwindcss. Deployed both frontend and backend on Render with environment-based configurations and proper error handling.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI API"],
    link: "https://recipe-app-i61u.vercel.app/" // project link
  },
  {
    title: " Contact Management Web Application ",
    image: project5,
    description:
      "Built a full-stack Contact Management Web Application using React.js, Node.js, Express.js, and MongoDB. Implemented JWT authentication, CRUD operations, and search functionality with a responsive UI using Material UI. Deployed both frontend and backend on Render with proper CORS configuration for secure API communication. Focused on clean architecture, error handling, and real-world deployment practices.",
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
    link: "https://contact-management-web-application-hk2g.onrender.com" // project link
  },
  {
    title: "Weather AI App",
    image: project3,
    description:
      "Built a responsive weather application with a mobile-compatible UI, providing real-time weather data using the OpenWeather API and Gemini AI for enhanced user experience. The app features a clean design with Tailwind CSS and is fully functional on both desktop and mobile devices.",
    technologies: ["React.js", "Tailwind CSS", "OpenWeather API", "Gemini AI"],
    link: "https://weather-app-react-chi-ten.vercel.app/"
  },
  
];

export const CONTACT = {
  address: "Bangalore",
  email: "sambeet482@gmail.com",
  linkedin: "www.linkedin.com/in/sambit-kumar-chaudhury8",
  github: "github.com/SambitKumar28",
};

