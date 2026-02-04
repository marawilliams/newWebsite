import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => (
  <nav className="p-4">
    {/* 1. 'w-max' ensures the container only takes up as much space as its children.
      2. 'overflow-hidden' hides the links when they are retracted.
      3. 'max-w-[3vw]' (or your icon size) keeps the hit-box small until hovered.
    */}
    <div className="group flex items-center bg-gray-100/80 rounded-full overflow-hidden 
                    w-max max-w-[60px] hover:max-w-[500px] 
                    transition-all duration-700 ease-in-out px-2">
      
      {/* Icon: The Trigger */}
      <img 
        className="z-50 group-hover:rotate-180 transition-transform duration-700 
                   cursor-pointer w-4 min-w-[40px] py-2" 
        src="/vinyl_icon.png" 
        alt="homeButton" 
      />

      {/* Menu: Hidden by the parent's max-width/overflow until hover */}
      <ul className="flex items-center gap-6 ml-4 pr-4
                     opacity-0 group-hover:opacity-100 
                     transition-opacity duration-300 delay-200
                     whitespace-nowrap font-medium text-black">
        <li className="hover:text-black transition-colors">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:text-black transition-colors">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:text-black transition-colors">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;