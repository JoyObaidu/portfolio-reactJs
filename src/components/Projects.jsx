import studyPal from '../assets/studyPal.png'
import pomodoroTimer from '../assets/Pomodoro Timer.png'
import TenziesGame from '../assets/profile-card.jpeg'
import ecommercePage from '../assets/ecommercepage.png'

const projects = [
    {
        id: 1,
        name: "Study Pal App",
        image: studyPal, 
        technologies: "HTML, CSS, Javascript",
        github: "https://study-pal-webapp-reactrouter.vercel.app/dashboard",
    },
    {
        id: 2,
        name: "Pomodoro Timer",
        image: pomodoroTimer,
        technologies: "react JS",
        github: "https://pomodoro-timer-react-tailwind-css.vercel.app/",
    },
    {
        id: 3,
        name: "Tenzies Game",
        image: TenziesGame,
        technologies: "HTML, CSS, Javascript",
        github: "https://tenzies-game-ochre-sigma.vercel.app/",
    },
    {
        id: 4,
        name: "Ecommerce Page",
        image: ecommercePage,
        technologies: "HTML, CSS, Javascript",
        github: "https://ecommerce-product-page-jet-nine.vercel.app/",
    },
];

const Projects = () => {
    return (
        <div className="bg-black text-white py-20" id="project">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {projects.map(project => (
            <div className="bg-gray-500 p-6 rounded-lg transform transition-transform duration-300 hover:shadow-lg hover:scale-105" key={project.id}>
                <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
                <p className="mb-4 text-gray-400">{project.technologies}</p>
                <a href={project.github} className="inline-block text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2" target='_blank' rel='noopener noreferrer'> Live Site </a>
            </div>
        ))}
            </div>
   </div>
   </div>
    );
;}

export default Projects