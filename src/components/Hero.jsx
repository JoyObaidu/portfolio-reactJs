
import HeroImage from '../assets/myProfile.jpeg'


const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-6 sm:py-8 md:py-16' id='hero'>
    <img 
        src={HeroImage} 
        alt='' 
        className='mx-auto mb-4 w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
    />
    <h1 className='text-xl sm:text-2xl md:text-4xl font-bold'>
        I&apos;m {" "}
        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>
            Joy Obaidu
        </span>, Front-End Developer
    </h1>
    <p className='mt-2 sm:mt-3 md:mt-4 text-sm sm:text-base md:text-lg text-gray-300'>
       I specialize in building modern and responsive web applications.
    </p>
    <div className='mt-4 sm:mt-6 md:mt-8 space-y-2 md:space-y-2 md:space-x-8 flex flex-col md:flex-row justify-center'>
        <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-2 sm:px-4 rounded-full transform transition-transform duration-300 hover:scale-105'>
            Contact With Me
        </button>
        <button className='bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-3 py-2 sm:px-4 rounded-full transform transition-transform duration-300 hover:scale-105'>
            Resume
        </button>
    </div>
</div>

  )
}

export default Hero
