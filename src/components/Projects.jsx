import React from 'react';
import BrainwaveImage from '../assets/Brainwave.png'
import NewsImage from '../assets/News.jpeg'
import AgeImage from '../assets/Age.jpeg'
const projects = [
  {
    title: 'Brainwave AI',
    description: 'Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies modern UI/UX principles. Its sleek design, seamless animations, and overall user experience set a high standard, serving as a reference or inspiration for future modern applications or websites in general.',
    image: BrainwaveImage, 
    link: 'https://amrtarek0012.github.io/amr.brainwave/' 
  },
  {
    title: 'News Landing Page',
    description: 'A modern and responsive landing page for a news website.',
    image: NewsImage, 
    link: 'https://amrtarek0012.github.io/news-landing-page/' 
  },
  {
    title: 'Age Calculator App',
    description: 'A simple web application to calculate age based on date of birth.',
    image: AgeImage, 
    link: 'https://amrtarek0012.github.io/age-calculator-app/'
  }
];

const Projects = () => {
  return (
    <section id='projects' className="container mx-auto py-16 px-6 md:px-12 lg:px-24 text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8 tracking-widest">PROJECTS</h2>
      <div className="rounded border-b-8 border-purple-800 w-20 mx-auto mb-8"></div>

     
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="border border-gray-200 rounded-lg shadow-lg p-4">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full  h-48 object-cover rounded-t-lg"
            />
            <div className="p-4">
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <a href={project.link} target='_blank' className="text-purple-600 hover:underline ">
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
