import React from "react";
import { Link } from "react-router-dom";
function Header() {
  return (
    <header className="flex w-full flex-row justify-between">
      <div className="flex flex-row gap-2 px-6 py-3 max-sm:py-6">
        <div className="h-6 w-6 rounded-full bg-red-400 max-sm:h-4 max-sm:w-4"></div>
        <div className="h-6 w-6 rounded-full bg-yellow-400 max-sm:h-4 max-sm:w-4"></div>
        <div className="h-6 w-6 rounded-full bg-green-400 max-sm:h-4 max-sm:w-4"></div>
      </div>
      <div className="mr-8 mt-3 flex space-x-3 font-SuperBoys text-xl max-sm:mr-3 max-sm:mt-4">
        <h1 className="text-[1.5rem] text-violet-500 hover:scale-105">
          <Link to="/">HOME</Link>
        </h1>
        <h1 className="text-[1.5rem] text-pink-400 hover:scale-105">
          <a
            href="https://silvioneres.dev"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABOUT ME
          </a>
        </h1>
        <span>|</span>
      </div>
    </header>
  );
}

export default Header;
