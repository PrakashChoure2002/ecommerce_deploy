import React from "react";
import { NavLink } from "react-router-dom";
import LookBookItems from "./LookBookItems";

const LookBook = () => {
  return (
    <div className="w-full bg-white my-20 py-20">
      <div className="w-full h-auto bg-gray-200 px-4 sm:px-10 lg:px-20 flex flex-wrap items-center justify-between">
        <p className="text-black font-bold text-lg sm:text-xl lg:text-2xl my-4 lg:my-0">Look BOOK</p>
        <div className="text-sm sm:text-base lg:text-lg">
          <NavLink
            className={(e) =>
              e.isActive ? "text-black font-bold" : "text-black"
            }
            to="/"
          >
            Home
          </NavLink>
          <span className="mx-1 sm:mx-2">/</span>
          <NavLink
            className={(e) =>
              e.isActive ? "text-black font-bold" : "text-black"
            }
            to="/lookbook"
          >
            Look Book
          </NavLink>
        </div>
      </div>
      <LookBookItems />
    </div>
  );
};

export default LookBook;
