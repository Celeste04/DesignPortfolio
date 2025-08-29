import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger and close icons
import Logo from "/logo.svg";
import { Link } from "react-router-dom";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

type NavProps = {
  homeRef: React.RefObject<HTMLDivElement | null>;
  workRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

const Nav = ({ homeRef, workRef, contactRef }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <div className="bg-white sticky top-0 z-[9999] shadow-sm">
      <div className="flex justify-between items-center h-18 px-5 sm:px-20">
        <img src={Logo} alt="Logo" />

        {/* Desktop links */}
        <div className="hidden sm:flex gap-8" id="nav-links">
          <button onClick={() => scrollToSection(workRef)} className="hover:text-[#EF8987]">Work</button>
          <button onClick={() => scrollToSection(workRef)} className="hover:text-[#EF8987]">Projects</button>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#EF8987]">Contact</button>
          <a
            href="https://drive.google.com/file/d/1FgdwEbC2r2ozXdoFccH5GqiLmZxazNjQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#EF8987]"
          >
            Resume
          </a>
          <button className="hover:text-[#EF8987]" onClick={toggleTheme}>{(theme==="dark")? <MdSunny className="w-5 h-5"/> : <FaMoon className="w-5 h-5"/> }</button>
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
        <div
          className={`
            flex flex-col items-end gap-4 px-5 pb-4 sm:hidden 
            transition-all duration-600 ease-in-out
            ${isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"}
          `}
        >
          <button onClick={() => scrollToSection(homeRef)} className="hover:text-[#EF8987]">Home</button>
          <button onClick={() => scrollToSection(workRef)} className="hover:text-[#EF8987]">Work</button>
          <Link to="/about" className="hover:text-[#EF8987]">About</Link>
          <button onClick={() => scrollToSection(contactRef)} className="hover:text-[#EF8987]">Contact</button>
          <a
            href="https://drive.google.com/file/d/1FgdwEbC2r2ozXdoFccH5GqiLmZxazNjQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#EF8987]"
          >
            Resume
          </a>
        </div>

    </div>
  );
};

export default Nav;