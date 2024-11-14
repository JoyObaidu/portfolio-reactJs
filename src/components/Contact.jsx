import { useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkedAlt } from '@fortawesome/free-solid-svg-icons';
import { useForm } from '@formspree/react'

const Contact = () => {
  // State to manage form inputs and submission status
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [message, setMessage] = useState('');

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent further submissions if already submitted
    if (submitted) {
      setMessage('You have already submitted your message!');
      return;
    }

    // Basic form validation
    if (!formData.name || !formData.email || !formData.message) {
      setMessage('Please fill in all the fields.');
      return;
    }

    // Simulate form submission
    setTimeout(() => {
      setSubmitted(true);
      setMessage('Thank you for contacting us!');
      localStorage.setItem('contactFormSubmitted', 'true');

      // Clear the form fields
      setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="bg-black text-white py-10" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Contact</h2>
        <div className="flex flex-col md:flex-row items-start md:space-x-12">
          {/* Contact Info Section */}
          <div className="flex-1 mb-8 md:mb-0">
            <h3 className="text-2xl font-semibold mb-4">Let's Talk</h3>
            <p className="mb-4">
              I'm open to discussing web development projects or partnership opportunities.
            </p>
            <div className="mb-4">
              <FontAwesomeIcon icon={faEnvelope} className="text-green-400 mr-2" />
              <a href="mailto:joyobaidu@gmail.com" className="hover:underline">
                joyobaidu@gmail.com
              </a>
            </div>
            <div className="mb-4">
              <FontAwesomeIcon icon={faPhone} className="text-green-400 mr-2" />
              <span>+2347082305104</span>
            </div>
            <div className="mb-4">
              <FontAwesomeIcon icon={faMapMarkedAlt} className="text-green-400 mr-2" />
              <span>Ado-Ota, Ota, Ogun State, Nigeria</span>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="flex-1 w-full">
            {!submitted ? (
              <form action="https://formspree.io/f/xdkozpdo" method='POST' onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Name"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Email"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message">Message</label>
                  <textarea
                    name="message"
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full p-2 rounded bg-gray-600 focus:outline-none focus:border-green-400"
                    placeholder="Enter Your Message"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full"
                >
                  Send
                </button>
              </form>
            ) : (
              <p className="text-green-400 mt-4">{message}</p>
            )}
          </div>
        </div>

        {/* Feedback Message */}
        {message && (
          <div className="mt-6 text-center">
            <p className={`text-${submitted ? 'green' : 'red'}-400`}>{message}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
