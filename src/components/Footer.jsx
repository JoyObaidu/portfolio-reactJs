import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State to display success or error messages
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false); // To show a loading state

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Basic form validation function
  const isValidForm = () => {
    return (
      formData.email.trim() !== '' &&
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) // Email format validation
    );
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isValidForm()) {
      setStatus('Please enter a valid email address.');
      return;
    }

    setLoading(true);
    setStatus('');

    try {
      const response = await fetch(
        'https://script.google.com/macros/s/AKfycbxYQREq2vglPHllpEJpYqC6FCq7qo7XAO8DDLbqfduQ8a2W_bOLXz9Rq0A8eYK1le_D/exec',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email: formData.email }),
        }
      );

      if (response.ok) {
        setStatus('Thank you for subscribing!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('Failed to send your message. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error); // Log error for debugging
      setStatus('An error occurred. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <div className="flex flex-col md:flex-row md:space-x-12 mb-4">
          <div className="flex-1 mb-4 md:mb-0">
            <h3 className="mb-2 text-2xl font-bold">Joy</h3>
            <p className="text-gray-400">Front end Developer based in Nigeria, specializing in HTML, CSS, and ReactJS.</p>
          </div>

          <div className="flex-1">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter Email"
                aria-label="Enter your email"
                className="p-2 bg-gray-600 focus:outline-none focus:border-green-400 text-white w-full mb-2"
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-gradient-to-r from-green-400 to-blue-500 text-white md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2"
              >
                {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
            </form>
            {status && <p className="mt-2">{status}</p>}
          </div>
        </div>

        <hr className="text-white mt-6" />

        <div className="flex flex-col md:flex-row md:space-x-12 mb-4 px-2 bg-gray-400 p-8">
          <div className="mt-2 flex-1">
            <p>&copy; {new Date().getFullYear()} Joy. All rights reserved.</p>
          </div>

          <div className="flex-1 space-x-4">
            <a href="https://facebook.com" className="text-gray-200 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" className="text-gray-200 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" className="text-gray-200 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
            <a href="https://linkedin.com" className="text-gray-200 hover:text-white" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </div>

          <div className="flex-1 flex-row gap-6 mt-2">
            <a href="#" className="text-gray-500 flex-1">Privacy</a>
            <a href="#" className="text-gray-500 flex-1">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
