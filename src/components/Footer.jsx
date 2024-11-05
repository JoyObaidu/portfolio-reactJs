import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <footer className="bg-black text-white py-8">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
<div className="flex flex-col md:flex-row md:space-x-12 mb-4">
    <div className="flex-1 mb-4 md:mb-0">
    <h3 className="mb-2 text-2xl font-bold">Joy</h3>
    <p className="text-gray-400">Front end Developer based in nigeria, specializing in HTML,CSS and ReactJS</p>
    </div>
  
    <div className="flex-1">
  <form action="">
  <input type="email" name="" id="" placeholder="Enter Email" className="p-2 bg-gray-600 focus:outline-none focus:border-green-400"/>
  <button type="submit" className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2">Subscribe</button>
  </form>
    </div>
<hr className="text-white"/>
  
</div>
          
            </div>
            <div className="flex flex-col md:flex-row md:space-x-12 mb-4 px-2 bg-gray-400">
           <div className="mt-2 flex-1">
        <p>
            &copy; {new Date().getFullYear()} Joy. All rights reserved.
        </p>
    </div>
    <div className="flex-1 space-x-2">
         <a href="https://facebook.com" className="text-gray-200  hover:text-white" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faFacebook} size="2x"/>
      </a>
      <a href="https://twitter.com" className="text-gray-200 hover:text-white"  target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faTwitter}size="2x" />
      </a>
      <a href="https://instagram.com"className="text-gray-200 hover:text-white"  target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faInstagram}size="2x" />
      </a>
      <a href="https://linkedin.com" className="text-gray-200 hover:text-white" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} size="2x" />
      </a>
        </div> 

        <div className="flex-1 mt-2"> 
            <a href="#" className="text-gray-500 flex-1">Privacy</a>
            <a href="#" className="text-gray-500 flex-1">Terms of service</a>
        </div>
           </div>
           
        </footer>
    )
}

export default Footer