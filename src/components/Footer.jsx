import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">

          <div className="w-50 md:w-1/3 mb-6 ml-6 md:mb-0">
            <h3 className="text-lg font-semibold mb-4">Amr Refaey</h3>
            <p className="mb-2">
                <h3>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product.</h3>
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/amrtarek___/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.linkedin.com/in/amr-refaey1/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/amrtarek0012" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
            </div>
          </div>

        </div>

        <div className="mt-6 border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400 text-sm">
            &copy;Copyright {new Date().getFullYear()} .Made by Amr Refaey.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
