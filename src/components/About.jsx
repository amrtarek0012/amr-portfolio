import { ButtonBase } from '@mui/material';
import { Button } from 'flowbite-react';
import React from 'react';

const About = () => {
  return (
    <div id='about' className="container mx-auto py-16 px-6 md:px-12 lg:px-24 text-center bg-gray-100">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-widest">ABOUT ME</h2>
      <div className="rounded border-b-8 border-purple-800 w-20 mx-auto mb-8"></div>
      <p className='text-md md:text-lg mb-8 text-gray-600'>
        Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology.
      </p>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left md:mx-10">

        {/* Get to Know Me Section */}
        <div >
          <h3 className="text-2xl font-bold mb-4">Get to Know Me</h3>
          <p className="text-sm md:text-lg mb-8 text-gray-600">
            I am a passionate web developer with a focus on creating efficient, user-friendly websites and applications. With a commitment to excellence, I ensure every project I work on meets the highest standards, driving both user engagement and business growth.
          </p>
          <p className="text-sm md:text-lg mb-8 text-gray-600">
            My expertise lies in frontend development, combining clean, modern designs with seamless functionality. I believe in creating digital experiences that not only look great but are also intuitive and easy to use.
          </p>
          <p className="text-sm md:text-lg mb-8 text-gray-600">
            Whether building a small website or a large-scale web application, I approach each project with creativity, dedication, and a focus on achieving the best possible outcome.
          </p>
          <p className="text-sm md:text-lg mb-8 text-gray-600">
            I'm open to job opportunities where I can contribute, learn, and grow. If you have a good opportunity that matches my skills and experience, don't hesitate to contact me.
          </p>
          
        </div>

        {/* Skills Section */}
        <div className='w-full '>
          <h3 className="text-2xl font-bold mb-4">My Skills</h3>
          <div className="list-disc list-inside text-md md:text-md text-gray-600 flex flex-wrap gap-2">
            <span className='rounded bg-gray-200 font-semibold p-3 m-1 '>HTML</span> 
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>CSS</span> 
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>JavaScript</span>
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>React</span>
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>Tailwind CSS</span>
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>Vite</span>
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>jQuery</span>
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>Git</span>
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>Github</span>
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>SEO Optimization</span>
            <span className='rounded bg-gray-200 font-semibold p-3 m-1'>Responsive Design</span>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default About;
