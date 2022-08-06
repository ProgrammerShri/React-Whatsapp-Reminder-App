import React from "react";
import colors from "../constants/colors";

const Navbar = () => {
  return (
    <div className="h-auto w-full overflow-hidden shadow-md shadow-gray-600 p-1 bg-secondary">
      <div className="flex flex-col md:flex-row w-full justify-between items-center">
        <h1 className="text-4xl text-white font-bold w-full text-center p-1">
            <a href="/">Reminder App</a>
        </h1>

        <div className="w-full">
          <ul className="w-full flex justify-around">
            <li className="text-xl text-white">
                <a href="#!" className="text-white">About</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
