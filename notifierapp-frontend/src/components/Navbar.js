import React from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  return (
    <div className="h-auto w-full overflow-hidden shadow-md shadow-gray-600 p-1 bg-white dark:bg-secondary transition duration-500">
      <div className="flex flex-col md:flex-row w-full justify-between items-center">
        <h1 className="text-4xl text-primary-blue font-bold w-full text-center p-1">
          <a href="/">Reminder App</a>
        </h1>

        <div className="w-full">
          <ul className="w-full flex justify-center items-center">
            <li className="text-xl px-8">
              <a href="#!" className="text-primary-blue">
                About
              </a>
            </li>
            <ThemeToggle />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
