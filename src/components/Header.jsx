import React, { useState, useEffect, useRef } from "react";
import { CiSearch } from "react-icons/ci";
import { IoClose, IoSettingsOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
import { FaHeart } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";
import festival from "../assets/image/festival.png";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import axios from "axios";
import Loading from "./loading/Loading";
import Wishlist from "./pages/Wishlist";
const Header = () => {
  const navigate = useNavigate();

  const handleSignout = async () => {
    try {
      await axios.get("/user/signout");
      localStorage.removeItem("userData");
      console.log("User signed out");
      navigate("/login");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const Selector = useSelector((state) => state.cart);
  const [toggle, setToggle] = useState(false);

  const [isOpen, setIsOpen] = useState(false);

  const [isOn, setIsOn] = useState(false);

  const [isFeaturesOpen, setIsFeaturesOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  // Close the dropdown if the click is outside of it
  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setDropdownOpen(false);
    }
  };

  useEffect(() => {
    // Add when mounted
    document.addEventListener("mousedown", handleClickOutside);
    // Return function to be called when unmounted
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const openFeaturesDropdown = () => {
    setIsFeaturesOpen(true);
  };

  const closeFeaturesDropdown = () => {
    setIsFeaturesOpen(false);
  };

  const openDropdown = () => {
    setTimeout(() => {
      setIsOpen(true);
    }, 1000); // Adjust the delay time (in milliseconds) as needed
  };

  const openDrop = () => {
    setIsOn(true);
  };
  const closeDropdown = () => {
    setTimeout(() => {
      setIsOpen(false);
    }, 1000);
  };
  const closeDrop = () => {
    setIsOn(false);
  };
  return (
    <div className="bg-[#191818]  z-30 fixed top-0 w-full ">
      <div className="hidden md:flex justify-between px-[100px] py-2 bg-[#F8F8F8]  ">
        <div className="flex gap-6">
          <h5 className="text-sm">Announce something here</h5>
          <h5 className="text-sm">
            <IoCall className="inline-block mr-1 text-blue-900" /> CALL US:
            +919826896140
          </h5>
        </div>
        <div className="flex gap-3 text-sm text-[#9e9d9d] cursor-pointer">
          <h5><Link to='/wishlist'><FaHeart className="inline-block mr-1 text-blue-900" /> Wishlist</Link></h5>
          <div
            className="relative"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
          >
            <h5>
              <MdAccountCircle className="inline-block mr-1 text-blue-900" /> My
              Account <IoIosArrowDown className="inline-block" />
            </h5>
            {isOpen && (
              <div className="absolute z-10 mt-2 w-32 text-center rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/login"
                    className="block  px-4 py-1 text-sm text-white hover:bg-gray-900"
                    role="menuitem"
                  >
                    Login
                  </Link>
                  <Link
                    to="/register"
                    className="block px-4 py-1 text-sm text-white hover:bg-gray-900"
                    role="menuitem"
                  >
                    Register
                  </Link>
                </div>
              </div>
            )}
          </div>
          
        </div>
      </div>


      {toggle ? (
        <IoClose
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block"
        />
      ) : (
        <AiOutlineMenu
          onClick={() => setToggle(!toggle)}
          className="text-white text-2xl md:hidden block"
        />
      )} 


        <div className="max-w-full py-3 flex items-center justify-between px-2  md:px-[100px]  ">
        <div className="logo">
          <Link to='/'> <img className="w-[80px] md:w-[40px]"  src={festival } alt="" /></Link>
         
        </div>
        <div className={`absolute flex gap-8 top-full left-0 w-full bg-gray-800 md:bg-transparent md:static md:flex ${toggle ? 'flex' : 'hidden'}`}>
          <NavLink
            className={(e) =>
              e.isActive ? "text-white font-bold " : "text-white "
            }
            to="/"
            onClick={<Loading/>}
          >
            Home
          </NavLink>
          <NavLink
            className={(e) =>
              e.isActive ? "text-white font-bold" : "text-white"
            }
            to="/product"
            onClick={<Loading/>}
          >
            Product
          </NavLink>
          <div className="relative" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className="text-white font-bold"
      >
        Features
      </button>
      {isDropdownOpen && (
        <div className="absolute z-10 mt-2 w-32 text-center rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
             <Link
              to="/skin"
              className="block px-4 py-1 text-sm text-white hover:bg-gray-900"
              role="menuitem"
            >
              Skin
            </Link>
            <Link
              to="/face"
              className="block px-4 py-1 text-sm text-white hover:bg-gray-900"
              role="menuitem"
            >
              Face
            </Link>
            <Link
              to="/fragrance"
              className="block px-4 py-1 text-sm text-white hover:bg-gray-900"
              role="menuitem"
            >
              Fragrance
            </Link>
            <Link
              to="/eyes"
              className="block px-4 py-1 text-sm text-white hover:bg-gray-900"
              role="menuitem"
            >
              Eyes
            </Link>
            <Link
              to="/lips"
              className="block px-4 py-1 text-sm text-white hover:bg-gray-900"
              role="menuitem"
            >
              Lips
            </Link>
          </div>
        </div>
      )}
    </div>
          
          
          <div
            className="relative"
            onMouseEnter={openDrop}
            onMouseLeave={closeDrop}
          >
            <NavLink
              className={(e) =>
                e.isActive ? "text-white font-bold" : "text-white"
              }
              // to="/about"
              // onClick={<Loading/>}
            >
              Pages
            </NavLink>
            {isOn && (
              <div className="absolute z-[10] mt-2 w-32 text-center rounded-md shadow-lg bg-black ring-1 ring-black ring-opacity-5">
                <div
                  className="py-1"
                  role="menu"
                  aria-orientation="vertical"
                  aria-labelledby="options-menu"
                >
                  <Link
                    to="/about"
                    className="block  px-4 py-1 text-sm text-white hover:bg-gray-00"
                    role="menuitem"
                    onClick={<Loading/>}
                  >
                    About us
                  </Link>
                  <Link
                    to="/contact"
                    className="block px-4 py-1 text-sm text-white hover:bg-gray-00"
                    role="menuitem"
                    onClick={<Loading/>}
                  >
                    Contact Us
                  </Link>
                  <Link
                    to="/faq"
                    className="block  px-4 py-1 text-sm text-white hover:bg-gray-00"
                    role="menuitem"
                    onClick={<Loading/>}
                  >
                    Faq
                  </Link>
                  <Link
                    to="/portfolio"
                    className="block px-4 py-1 text-sm text-white hover:bg-gray-00"
                    role="menuitem"
                    onClick={<Loading/>}
                  >
                    Portfolio
                  </Link>
                  <Link
                    to="/search"
                    className="block  px-4 py-1 text-sm text-white hover:bg-gray-00"
                    role="menuitem"
                    onClick={<Loading/>}
                  >
                    Search
                  </Link>
                  <Link
                    to="/wishlist"
                    className="block px-4 py-1 text-sm text-white hover:bg-gray-00"
                    role="menuitem"
                    onClick={<Loading/>}
                  >
                    Wishlist
                  </Link>
                  {/* <Link
                    to="/lookbook"
                    className="block px-4 py-1 text-sm text-white hover:bg-gray-00"
                    role="menuitem"
                    onClick={<Loading/>}
                  >
                    LookBook
                  </Link> */}
                </div>
              </div>
            )}
          </div>
          <NavLink
            className={(e) =>
              e.isActive ? "text-white font-bold" : "text-white"
            }
            to="/blog"
            onClick={<Loading/>}
          >
            Blog
          </NavLink>
          {/* responsive */}
          {/* <ul
            className={`md:hidden duration-300 fixed z-99999 capitalize w-[30%] h-screen bg-[black] text-white top-[70px] md:top-[150px] ${
              toggle ? "left-0" : "left-[-100%]"
            }`}
          >
            <li className="p-5">home</li>
            
            
            <li className="p-5">product</li>
            <li className="p-5">features</li>
            <li className="p-5">pages</li>
            <li className="p-5">blog</li>
          </ul> */}
        </div>
        <div className="flex items-center justify-center text-2xl gap-3 cursor-pointer">
          {/* <CiSearch className="text-white" />
          <IoSettingsOutline className="text-white"  /> */}
          <Link to="/cart" className="flex items-center  gap-1 text-white">
            <FaShoppingCart className="size-6  hover:text-pink-500 " />
            <span className="text-sm ml text-white   hover:text-pink-500">
              {Selector.length}
            </span>
          </Link>
          {/* {toggle ? (
            <IoClose
              onClick={() => settoggle(!toggle)}
              className="text-white text-2xl md:hidden block"
              
            />
          ) : (
            <AiOutlineMenu
              onClick={() => settoggle(!toggle)}
              className="text-white text-2xl md:hidden block"
             
              

            />
            
            
          )} */}
        </div>
        </div>
    </div>
  );
};

export default Header;