

const Navbar = () => {
  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
        <div className='container py-2 flex justify-center md:justify-between items-center'>
            <div className='text-2xl font-bold hidden md:inline'>Joy</div>
            <div className='space-x-6 text-center'>
                <a href="#home" className='text-sm md:text-lg  text-white hover:text-gray-400'>Home</a>
                <a href="#aboutme" className='text-sm md:text-lg text-white hover:text-gray-400'>About Me</a>
                <a href="#project" className='text-sm md:text-lg text-white hover:text-gray-400'>Projects</a>
                <a href="#contact" className='text-sm md:text-lg text-white hover:text-gray-400'>Contacts</a>
            </div>
            <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' type="submit">
              <a href="https://www.linkedin.com/in/joy-obaidu/" className="text-white hover:text-gray-400">Connect With Me</a>
            </button>
        </div>
    </nav>
  )
}

export default Navbar