import Furniture from "../assets/images/Furniture.png";
import Realstate from "../assets/images/Realstate.png";
import erpImg from "../assets/images/Erp.png";
import SdhubClone from "../assets/images/Sdhubclone.png"
export const projects = [
 {
  title: "Marvel furniture",
  description: "Modern web app for Furniture work",
  image: Furniture, // ✅ correct
  tech: ["Html", "Css", "JavaScript"],
  github: "#",
  demo: "https://marvelfurniture.netlify.app/",
},
  {
    title: "Real State",
    description: "Modern web for Real state",
    image: Realstate ,
    tech: ["Html", "Css", "Javascript"],
    github: "#",
    demo: "https://my-project-real-estate.netlify.app/",
  },
    {
    title: "ERP",
    description: "I built this CRM/ERP project to solve real-world workflow and data management challenges for an educational institute.",
    image: erpImg,
    tech: ["Html", "Css", "Javascript"],
    github: "#",
    demo: "#",
  },
    {
    title: "SDhub Clone",
    description: "Developed a fully responsive clone of a real-world web application using React and Tailwind CSS, replicating key features and improving frontend development skills.",
    image: SdhubClone,
    tech: ["React", "Tailwind Css",],
    // github: "#",
    // demo: "#",
  },
];