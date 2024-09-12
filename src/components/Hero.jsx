import React from 'react';
import Image3 from '../assets/Image3.svg';
import { Button } from 'flowbite-react';
import { Link as ScrollLink } from 'react-scroll';
import Sidebar from './Sidebar';

const Hero = () => {
  return (
    <div id="home" className="relative bg-cover bg-center bg-no-repeat h-screen" style={{ backgroundImage: `url(${Image3})` }}>
      <div className="flex justify-center items-center h-full bg-black bg-opacity-50">
        <div className="text-center text-white">
          <Sidebar />
          <h1 className="text-2xl md:text-6xl lg:text-6xl font-extrabold mb-4">HEY, I'M AMR REFAEY</h1>
          <p className="text-lg md:text-xl max-w-2xl text-wrap mb-8">
            A dedicated web developer focused on creating and maintaining websites and applications that drive product success and deliver impactful results.
          </p>
          <div className="flex justify-center">
            <ScrollLink
              to="projects"
              smooth={true} 
              duration={500} 
              className="inline-flex" 
            >
              <Button color="purple" className="w-60 font-medium">
                <span className="text-xl">PROJECTS</span>
              </Button>
            </ScrollLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
