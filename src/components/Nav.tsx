import { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger and close icons
import Logo from "/logo.svg";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-[#f7f6f0] border-b-[2px] border-[#d8d7ca] sm:border-none">
      <div className="flex justify-between items-center h-18 px-5 sm:px-20">
        <img src={Logo} alt="Logo" className="translate-y-[-5px]" />

        {/* Desktop links */}
        <div className="hidden sm:flex gap-16" id="nav-links">
          <Link to="/" className="hover:text-[#EF8987]">Home</Link>
          <Link to="/about" className="hover:text-[#EF8987]">About</Link>
          <a href="https://drive.google.com/file/d/1FgdwEbC2r2ozXdoFccH5GqiLmZxazNjQ/view?usp=sharing" className="hover:text-[#EF8987]">Resume</a>
        </div>

        {/* Hamburger button */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="flex flex-col items-end gap-4 px-5 pb-4 sm:hidden">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-[#EF8987]">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:text-[#EF8987]">About</Link>
          <a href="#" className="hover:text-[#EF8987]">Resume</a>
        </div>
      )}
    </div>
  );
};

export default Nav;

