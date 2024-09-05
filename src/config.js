// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Navbar Logo image (add your image to the src/images directory and uncomment the line below to import your image)
// import newLogo from "./images/yourFileName"

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";

// Projects Images (add your images to the images directory and import below)
import cifar_logo from "./images/cifar2.jpg";
import forecast_logo from "./images/forecast.jpg";
import skin_logo from "./images/3Dskin.jpg";
import portfolio_logo from "./images/portfolio.jpg";
import house_logo from "./images/houses.jpg";
import food_app_logo from "./images/fao_app.jpg";
import old_portfolio_logo from "./images/old-portfolio.jpg";

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "ezemriv";

// Navbar Logo image
export const navLogo = null;

/* Main
 ************************************************************** 
  Add a custom blog icon or update the hero images for the Main section.
*/
export const Blog = null;

// Hero images (imported above - lines 8-9)
export { HeroLight as Light };
export { HeroDark as Dark };

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "Currently expanding my skillset in machine learning. Proficient in R and Python. Passionate about data-driven solutions in healthcare and sustainability. Love problem-solving, nature, and sports. Feel free to contact me!";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 1,
    skill: <Icon icon="devicon-plain:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 2,
    skill: <Icon icon="devicon-plain:r" className="display-4" />,
    name: "R",
  },
  {
    id: 3,
    skill: <Icon icon="devicon-plain:sqldeveloper" className="display-4" />,
    name: "SQL",
  },
  {
    id: 4,
    skill: <Icon icon="devicon-plain:pandas" className="display-4" />,
    name: "Pandas",
  },
  {
    id: 5,
    skill: <Icon icon="devicon-plain:numpy" className="display-4" />,
    name: "Numpy",
  },
  {
    id: 6,
    skill: <Icon icon="simple-icons:polars" className="display-4" />,
    name: "Polars",
  },
  {
    id: 7,
    skill: <Icon icon="devicon-plain:matplotlib" className="display-4" />,
    name: "Matplotlib\nSeaborn",
  },
  {
    id: 8,
    skill: <Icon icon="devicon-plain:plotly" className="display-4" />,
    name: "Plotly",
  },
  {
    id: 9,
    skill: <Icon icon="devicon-plain:scikitlearn" className="display-4" />,
    name: "SciKit-Learn",
  },
  {
    id: 10,
    skill: <Icon icon="simple-icons:tensorflow" className="display-4" />,
    name: "TensorFlow",
  },
  {
    id: 11,
    skill: <Icon icon="simple-icons:pytorch" className="display-4" />,
    name: "PyTorch",
  },
  {
    id: 12,
    skill: <Icon icon="bi:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 13,
    skill: <Icon icon="devicon-plain:docker" className="display-4" />,
    name: "Docker",
  },
  {
    id: 14,
    skill: <Icon icon="solar:dna-broken" className="display-4" />,
    name: "Bioinformatics",
  },
  {
    id: 15,
    skill: <Icon icon="devicon-plain:html5" className="display-4" />,
    name: "HTML",
  },
  {
    id: 16,
    skill: <Icon icon="devicon-plain:css3" className="display-4" />,
    name: "CSS",
  },
];

// Resume link (string - "https://YourResumeUrl")
export const resume = "https://drive.google.com/file/d/1fADO9m6TjEejDPNtaly1ccTQiO4vUse2/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = [
  "ISIC-2024-SkinCancer3D-Detection", 
  "CIFAR10-CNN-optimization", 
  "MLForecast-Enhanced-TimeSeries",
  "DS-Portfolio",
  "House-Price-Prediction",
  "food_emissions-app",
];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 7-8)
export const projectCardImages = [
  { name: "ISIC-2024-SkinCancer3D-Detection", image: skin_logo },
  { name: "CIFAR10-CNN-optimization", image: cifar_logo },
  { name: "MLForecast-Enhanced-TimeSeries", image: forecast_logo },
  { name: "Minimal-Quick-Portfolio", image: old_portfolio_logo },
  { name: "DS-Portfolio", image: portfolio_logo },
  { name: "House-Price-Prediction", image: house_logo },
  { name: "food_emissions-app", image: food_app_logo },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mrbzkaew";

// Footer icons theme (light or dark)
export const footerTheme = "dark";
