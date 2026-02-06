import React from "react";
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './Routes';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
<div 
  className="min-w-screen min-h-screen flex flex-col" 

>        <Navbar />
        <main className=" flex">
          <div className="w-full max-w-7xl px-4">
            <AppRoutes />
          </div>
        </main>
      </div>
    </Router>
  );
}

