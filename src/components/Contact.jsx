import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import {faPhone } from '@fortawesome/free-solid-svg-icons'
import { faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';


const Contact = () => {
    return (
      <div className='bg-black text-white py-10' id="contact">
       <div className="container mx-auto px-8 md:px-16 lg:px-24">
       <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
       <div className="flex flex-col md:flex-row items-center md:space-x-12">
     <div className="flex-1">
       <h3>Let&apos;s Talk</h3>
       <p>I&apos;m open to discussing web development projects or partnership opportunities.</p>
       <div className="mb-4 mt-8">
       <FontAwesomeIcon icon={faEnvelope} className="inline-block text-green-400 mr-2"/>
        <a href="joyobaidu@gmail.com">Joyobaidu@gmail</a>
        </div>
        <div className="mb-4 mt-8">
       <FontAwesomeIcon icon={faPhone} className="inline-block text-green-400 mr-2"/>
       <span>+2347082305104</span>
        </div>
        <div className="mb-4 mt-8">
       <FontAwesomeIcon icon={faMapMarkedAlt} className="inline-block text-green-400 mr-2"/>
        <span>street, city, province, country</span>
        </div>
        
       </div>

       <div className="flex-1 w-full">
            <form className="space-y-4">
                <div>
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="" id="" className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your Name" />
                </div>

                <div>
                    <label htmlFor="name">Email Address</label>
                    <input type="email" name="" id="" className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your Email" />
                </div>

                <div>
                    <label htmlFor="name">Message</label>
                   <textarea name="" id="" className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400" placeholder="Enter Your message"></textarea>
                </div>
                <button className='bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full' type="submit">Send</button>
            </form>
        </div>
       </div>
  </div>
  </div>
    )
  }
export default Contact