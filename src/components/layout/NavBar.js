import React from 'react';
import {
  Link
} from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="flex justify-center">
        <Link to="/" className="py-5 px-3">Cats</Link>
        <Link to="/map" className="py-5 px-3">Map</Link>
      </div>
    </nav>
  );
};

export default NavBar;