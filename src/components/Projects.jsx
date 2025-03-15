import colorgame from '../assets/color-game.jpeg'
import conferenceticketgenerator from '../assets/conference-ticket-generator.jpeg'
import profilecard from '../assets/profile-card.jpeg'
import textprocessor from '../assets/text-processor.jpeg'

const projects = [
    {
        id: 1,
        name: "Color Game",
        image: colorgame, 
        technologies: "HTML, CSS, Javascript",
        github: "https://color-game-virid-three.vercel.app/",
    },
    {
        id: 2,
        name: "Conference Ticket Generator App",
        image: conferenceticketgenerator,
        technologies: "react JS",
        github: "https://conference-ticket-generator-kappa.vercel.app/",
    },
    {
        id: 3,
        name: "Profile Card",
        image: profilecard,
        technologies: "HTML, CSS, Javascript",
        github: "https://profile-card-eight-wheat.vercel.app/",
    },
    {
        id: 3,
        name: "AI Text Processor",
        image: textprocessor,
        technologies: "HTML, CSS, Javascript",
        github: "https://text-processor-iota.vercel.app/",
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