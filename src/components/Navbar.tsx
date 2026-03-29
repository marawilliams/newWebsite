import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="font-pixel text-[1.2vw] absolute top-[1vw] left-[1vw] z-50">
    <div className="group flex items-center bg-[#e7ecd5] rounded-full
                    max-w-[4vw] hover:max-w-[80vw] max-h-[4vw] overflow-hidden
                    transition-all duration-700 ease-in-out">
      
      <Link to="/">
        <img 
          className="group-hover:rotate-180 transition-transform duration-700 
                    cursor-pointer w-[3vw] min-w-[3vw] px-[0.5vw] block mx-auto" 
          src="/vinyl_icon.png" 
          alt="homeButton" 
        />
      </Link>

      <ul className="list-none flex items-center gap-[3vw] ml-[1vw] pr-[2vw]
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 delay-200
                     whitespace-nowrap font-medium text-[#6a805a]">
        <li className="font-pixel hover:text-[#f69833] transition-colors duration-10">
          <Link to="/about">about</Link>
        </li>
        <li className="font-pixel hover:text-[#f69833] transition-colors">
          <Link to="/contact">contact</Link>
        </li>
        <li className="font-pixel hover:text-[#f69833] transition-colors">
          <Link to="/gallery">gallery</Link>
        </li>
        <li className="font-pixel hover:text-[#f69833] transition-colors">
          <Link to="/resume">resume</Link>
        </li>
        <li className="font-pixel hover:text-[#f69833] transition-colors">
          <Link to="/music">music</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;