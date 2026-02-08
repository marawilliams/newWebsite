import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="!font-pixel text-sm absolute top-4 left-4 z-50">
    {/* 1. 'w-max' ensures the container only takes up as much space as its children.
      2. 'overflow-hidden' hides the links when they are retracted.
      3. 'max-w-[3vw]' (or your icon size) keeps the hit-box small until hovered.
    */}
    <div className="group flex items-center bg-[#e7ecd5] rounded-full overflow-hidden 
                    w-max max-w-[57px] hover:max-w-[800px] 
                    transition-all duration-700 ease-in-out px-2">
      
      {/* Icon: The Trigger */}
      <Link to="/">
        <img 
          className="z-50 group-hover:rotate-180 transition-transform duration-700 
                    cursor-pointer w-4 min-w-[40px] py-2" 
          src="/vinyl_icon.png" 
          alt="homeButton" 
        />
      </Link>

      {/* Menu: Hidden by the parent's max-width/overflow until hover */}
      <ul className="flex items-center gap-6 ml-4 pr-4
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 delay-200
                     whitespace-nowrap font-medium text-black">
        <li className="font-pixel hover:text-black transition-colors">
          <Link to="/about">about</Link>
        </li>
        <li className="font-pixel hover:text-black transition-colors">
          <Link to="/contact">contact</Link>
        </li>
        <li className="font-pixel hover:text-black transition-colors">
          <Link to="/gallery">gallery</Link>
        </li>
        <li className="font-pixel hover:text-black transition-colors">
          <Link to="/resume">resume</Link>
        </li>
        <li className="font-pixel hover:text-black transition-colors">
          <Link to="/music">music</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;