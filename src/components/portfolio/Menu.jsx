import Work1 from "../../assets/work-1.svg";
import Work2 from "../../assets/work-2.svg";
import Work3 from "../../assets/work-3.svg";
import Work4 from "../../assets/work-4.svg";
import Work5 from "../../assets/work-5.svg";
import Work6 from "../../assets/work-6.svg";
import e1 from "../../assets/e1.png";
import e2 from "../../assets/e2.png";
import e3 from "../../assets/e3.png";
import e4 from "../../assets/e4.png";
import ec1 from "../../assets/ec1.png";
import ec2 from "../../assets/ec2.png";
import ec3 from "../../assets/ec3.png";
import mb1 from "../../assets/mb1.png";
import mb2 from "../../assets/mb2.png";
import mb3 from "../../assets/mb3.png";
import h1 from "../../assets/h1.png";
import h2 from "../../assets/h2.png";
import h3 from "../../assets/h3.png";
import h4 from "../../assets/h4.png";

const Menu = [
    {
      id: 1,
      images: [e1,e2,e3,e4],
      title: "Learning Management System",
      category: "E-learning",
      stack: "typescript / node.js / react / express.js / MongoDB / Redis / next.js 13 / rtk query / socket.io / tailwindcss / Ejs / JWT / bcrypt.js ...",
      special:"This project prioritizes security with a robust authentication system using access and refresh tokens. It allows only authorized users, including admins and course purchasers, to access sensitive materials like course videos and data. The platform also prevents unauthorized video recording and distinguishes between user roles for easy login. However, regular users cannot gain admin privileges without the current admin's intervention.",
      usage: ["You can either create a regular user account or log in as an admin to access the admin dashboard using these info:", "email: souhanilearning@gmail.com", "password: 123456", "To mimic making an order, you can use the following card info:", "Card number: 4242 4242 4242 4242", "Expiration: 01/25", "CVC: 000"],
      live: [{title:"E-learning", url:"https://e-learning-client-nu.vercel.app/"}]
    },
    {
      id: 2,
      images: [ec1,ec2,ec3],
      title: "E-commerce Website + Admin Dashboard",
      category: "E-commerce",
      stack: "Next.js / React / MongoDB / Tailwind (for the admin dashboard) / styled-components (for the main website) / stripe ...",
      special:"Focused on SEO optimization, this project leverages Next.js to create a website that excels in search engine rankings. Next.js enhances the site's performance by enabling server-side rendering and optimizing the loading speed of web pages.",
      usage: ["You can log in to the admin dashboard using this google account:", "email: souhanitry@gmail.com", "password: try123456", "To mimic making an order, you can use the following card info:", "Card number: 4242 4242 4242 4242", "Expiration: 01/25", "CVC: 000"],
      live: [{title: "E-commerce website", url:"https://e-co-chi.vercel.app/"}, {title: "Admin Dashboard", url:"https://e-co-admin.vercel.app/"}],
      code: [{title: "E-commerce website", url:"https://github.com/Souhani/E-commerce_Website"}, {title: "Admin Dashboard", url:"https://github.com/Souhani/E-commerce-Admin"}]

    },
    {
      id: 3,
      images: [h1,h2,h3,h4],
      title: "software download site",
      category: "Havoc Software",
      stack: "Next.js / React / MongoDB / Tailwind",
      special:"A project I worked on as a freelancer; what makes this project special is a seamless process for users to download software or for admins to upload it effortlessly.",
      live: [{title: "Havoc Software Website", url:"https://copy-that-delta.vercel.app/"}],
    },
    {
      id: 4,
      images: [mb1,mb2,mb3],
      title: "Face and Sentiment Detection",
      category: "Magic-Brain",
      stack: "Docker and Docker-compose / node.js / express.js /  PostgreSQL / Redis / clarifai_Api /  React ...",
      special:"Powered by Docker and Docker Compose, this project simplifies backend setup with a single command. You can run Express server with PostgreSQL and Redis databases in containers, making it easier to run the code on different machines without frustration.",
      live: [{title: "Magic-Brain", url:"https://souhani.github.io/MagicBrainApp/"}],
      code: [{title: "frontend", url:"https://github.com/Souhani/MagicBrainApp/tree/main"}, {title: "backend", url:"https://github.com/Souhani/Dockerized_MagicBrainApi"}]
    }
  ];

  export const StackMenu = [
    {
      id: 1,
      images: Work1,
      title: "Project Management Illustration",
      category: "Design",
    },
    {
      id: 2,
      images: Work2,
      title: "Guest App Walkthrough Screens",
      category: "Art",
    },
    {
      id: 3,
      images: Work3,
      title: "Delivery App Wireframe",
      category: "Branding",
    },
    ,
    {
      id: 4,
      images: Work4,
      title: "Onboarding Motivation",
      category: "Design",
    },
    ,
    {
      id: 5,
      images: Work5,
      title: "iMac Mockup Design",
      category: "Creative",
    },
    ,
    {
      id: 6,
      images: Work6,
      title: "Game Store App Concept",
      category: "Art",
    },
  ];
export default Menu;  