// src/Sidebar.js
import React from 'react';
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";

const Sidebar = () => {
  return (
    <div className="w-16 h-50 bg-gray-200 p-5 fixed top-50 left-0 shadow-lg">
      <ul className="space-y-4">
        <li><a href="https://www.linkedin.com/in/amr-refaey1/" target='_blank' className="text-lg text-gray-700 hover:text-purple-500"><FaLinkedin/></a></li>
        <li><a href="https://github.com/amrtarek0012" target='_blank' className="text-lg text-gray-700 hover:text-purple-500"><FaGithub/></a></li>
        <li><a href="https://www.facebook.com/amr.tarek.984/" target='_blank' className="text-lg text-gray-700 hover:text-purple-500"><FaFacebook /></a></li>
        <li><a href="https://www.instagram.com/amrtarek___/" target='_blank' className="text-lg text-gray-700 hover:text-purple-500"><GrInstagram /></a></li>
      </ul>
    </div>
  );
};

export default Sidebar;