import AboutImage from '../assets/aboutMe.jpeg'

const About = () => {
  return (
    <div className='bg-black text-white text-center py-10' id='aboutme'>
    <div>
        <h2 className='text-4xl font-bold'>About Me</h2>
        <div className='flex flex-col md:flex-row items-center md:items-start mt-6 px-5'>
            <img 
                src={AboutImage} 
                alt="my profile image" 
                className='w-42 h-80 md:w-100 md:h-100 mx-auto rounded-md object-cover transform transition-transform duration-300 mb-4 md:mb-0'
            />
            
            <div className='space-y-4 md:ml-6'>
                <p className='text-lg text-gray-300'>
                    I’m a frontend developer with a passion for creating interactive and user-friendly websites. 
                    I enjoy working with modern frameworks and continuously learning new technologies to improve my skills. 
                    Open to collaborations and projects, I’m focused on building efficient and visually appealing web solutions.
                </p>
                
                {/* Skill bars */}
                <div className='space-y-4'>
                    <div className='flex items-center space-x-4'>
                        <label className='w-20 text-left'>HTML</label>
                        <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <label className='w-20 text-left'>CSS</label>
                        <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-11/12'></div>
                        </div>
                    </div>
                    <div className='flex items-center space-x-4'>
                        <label className='w-20 text-left'>Javascript</label>
                        <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-8/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <label className='w-20 text-left'>ReactJS</label>
                        <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-8/12'></div>
                        </div>
                    </div>

                    <div className='flex items-center space-x-4'>
                        <label className='w-20 text-left'>Tailwind CSS</label>
                        <div className="flex-grow bg-gray-800 rounded-full h-2.5">
                            <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full w-9/12'></div>
                        </div>
                    </div>
                </div>
                
                {/* Stats section */}
                <div className='flex justify-between text-center mt-6'>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>2+</h3>
                        <p>Years Experience</p>
                    </div>
                    <div>
                        <h3 className='text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>20+</h3>
                        <p>Projects Completed</p>
                    </div>
                   
                </div>
            </div>
        </div>
    </div>
</div>

  )
}

export default About