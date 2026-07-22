
import project3 from "../assets/projects/weather app.jpg";
import project5 from "../assets/projects/Contact_manage_01_compress.jpg";
import project6 from "../assets/projects/Recipy_App_02.jpg";
import project7 from "../assets/projects/Todo_app.jpg";
import project1 from "../assets/projects/FindPG.png";

export const HERO_CONTENT = `I build responsive full-stack web applications with React, Node.js, Express.js, and MongoDB. My work combines clean interfaces, practical backend architecture, and a problem-solving mindset shaped by my background in computer applications.`;

export const ABOUT_TEXT = `I am an MCA graduate focused on full-stack development. I have built projects with React, Node.js, Express.js, MongoDB, JavaScript, and AI integrations, with attention to authentication, API design, responsive UI, and deployment. I enjoy turning practical problems into usable products and want to contribute to teams building reliable web applications.`;

export const EXPERIENCES = [
  {
    year: "April 2025 - Present",
    role: "Software Development Intern (Remote)",
    company: "Talentrise Technokrate Pvt. Ltd.",
    description: `Collaborating on a high-performance React and Vite game application with a focus on interactivity, animation, debugging, Git workflows, and regular stand-up communication.`,
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
  },
  
];

export const PROJECTS = [
   {
    title: "FindPG - PG Accommodation Platform",
    image: project1,
    description:
      "A full-stack platform that connects people searching for PG accommodations with property owners. It supports browsing, booking, and stay management in a responsive web experience.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    link: "https://findpg-woad.vercel.app/"
  },
  {
    title: "Real-Time Collaborative Kanban App",
    image: project7,
    description:
      "A real-time Kanban application with multi-board support, role-based access, JWT authentication, activity logs, drag-and-drop tasks, email invitations, and live updates with Socket.IO.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Socket.IO"],
    link: "https://todo-kanban-style.netlify.app/"
  },
  {
    title: "AI-Powered Recipe Application",
    image: project6,
    description:
      "A recipe planning app that uses the Gemini API to suggest recipes from user ingredients. It includes JWT authentication, secure routes, task management, and responsive Tailwind CSS UI.",
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Gemini AI API"],
    link: "https://recipe-app-i61u.vercel.app/"
  },
  {
    title: "Contact Management Web Application",
    image: project5,
    description:
      "A contact management app with JWT authentication, CRUD operations, search, Material UI, CORS configuration, and real deployment across frontend and backend services.",
    technologies: ["Node.js", "Express.js", "React.js", "MongoDB"],
    link: "https://contact-management-web-application-hk2g.onrender.com"
  },
  {
    title: "Weather AI App",
    image: project3,
    description:
      "A responsive weather application that combines real-time OpenWeather data with Gemini AI support, built with a clean Tailwind CSS interface for desktop and mobile.",
    technologies: ["React.js", "Tailwind CSS", "OpenWeather API", "Gemini AI"],
    link: "https://weather-app-react-chi-ten.vercel.app/"
  },
  
];

export const CONTACT = {
  address: "Bangalore, India,+91 7682864725 ",
  email: "sambeet482@gmail.com",
  linkedin: "https://www.linkedin.com/in/sambit-kumar-chaudhury8",
  github: "https://github.com/SambitKumar28",
};

