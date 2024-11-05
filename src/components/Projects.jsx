import React from 'react'
import omeletteRecipe from '../assets/omeletteRecipe.jpeg'
import sociallinkImage from '../assets/sociallinkImage.jpeg'
import testimonialImage from '../assets/testimonialImage.jpeg'

const projects = [
    {
        id: 1,
        name: "SocialLinks vibes",
        image: sociallinkImage, 
        technologies: "HTML, CSS",
        github: "https://github.com/JoyObaidu/Social-links-vibes.git",
    },
    {
        id: 2,
        name: "Testimonial Grid section",
        image: testimonialImage,
        technologies: "HTML, CSS",
        github: "https://github.com/JoyObaidu/Testimonial-Grid-Section.git",
    },
    {
        id: 3,
        name: "Omelette Recipepage",
        image: omeletteRecipe,
        technologies: "HTML, CSS",
        github: "https://github.com/JoyObaidu/Recipe-page.git",
    },
];

const Projects = () => {
    return (
        <div className="bg-black text-white py-20" id="project">
        <div className="container mx-auto px-8 md:px-16 lg:px-24">
            <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map(project => (
            <div className="bg-gray-500 p-6 rounded-lg transform transition-transform duration-300 hover:shadow-lg hover:scale-105" key={project.id}>
                <img src={project.image} alt={project.name} className='rounded-lg mb-4 w-full h-48 object-cover'/>
                <h3 className="mb-2 text-2xl font-bold">{project.name}</h3>
                <p className="mb-4 text-gray-400">{project.technologies}</p>
                <a href={project.github} className="inline-block text-white rounded-full bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2" target='_blank' rel='noopener noreferrer'> Github </a>
            </div>
        ))}
            </div>
   </div>
   </div>
    );
;}

export default Projects