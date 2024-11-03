import React from 'react';
import { useTheme } from '../context/ThemeContext'; // Assuming you have a context for theme management
import Navbar from './Navbar'; // Import the Navbar component

const ContactPage = () => {
  const { theme } = useTheme(); // Using context to get the current theme

  return (
    <div className={`min-h-screen flex flex-col ${theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'} transition-colors duration-300`}>
      <Navbar /> {/* Include the Navbar component */}
      <div className="flex flex-col items-center justify-center p-4">
        <h1 className="text-3xl font-bold mb-4">Contact Us</h1>

        <form className="w-full max-w-lg bg-gray-200 dark:bg-gray-700 rounded-lg shadow-md p-8">
          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="name">Name</label>
            <input
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
              type="text"
              id="name"
              placeholder="Your Name"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="email">Email</label>
            <input
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
              type="email"
              id="email"
              placeholder="Your Email"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 dark:text-gray-300 mb-2" htmlFor="message">Message</label>
            <textarea
              className="w-full p-2 border border-gray-300 dark:border-gray-600 rounded"
              id="message"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>

          <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
