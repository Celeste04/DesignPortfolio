import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi"; // hamburger and close icons
import { Logo } from "./Logo";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

type NavProps = {
  homeRef: React.RefObject<HTMLDivElement | null>;
  workRef: React.RefObject<HTMLDivElement | null>;
  projectRef: React.RefObject<HTMLDivElement | null>;
  contactRef: React.RefObject<HTMLDivElement | null>;
};

const Nav = ({ homeRef, workRef, projectRef, contactRef }: NavProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const scrollToSection = (ref: React.RefObject<HTMLDivElement | null>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // close mobile menu
    }
  };

  return (
    <div className={`sticky top-0 z-[9999] shadow-sm ${theme === "light"? "bg-white" : "bg-[#0A091E]"}`}>
      <div className="flex justify-between items-center h-18 px-5 sm:px-20">
        <Logo/>

        {/* Desktop links */}
        <div className="hidden sm:flex gap-8" id="nav-links">
          <button onClick={() => scrollToSection(workRef)} className="nav-button hover:text-[#EF8987]">Work</button>
          <button onClick={() => scrollToSection(projectRef)} className="nav-button hover:text-[#EF8987]">Projects</button>
          <button onClick={() => scrollToSection(contactRef)} className="nav-button hover:text-[#EF8987]">Contact</button>
          <a
            href="https://drive.google.com/file/d/136ZzOQ--Vnc2xP-yrJ4Q3-eQdzuVXuMD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-link"
          >
            Resume
          </a>
          <button className="nav-button" onClick={toggleTheme}>{(theme==="dark")? <MdSunny className="w-5 h-5"/> : <FaMoon className="w-5 h-5"/> }</button>
        </div>

        {/* Hamburger button */}
        <button
          className="sm:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX className="general-text"/> : <HiMenu className="general-text"/>}
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
          <button onClick={() => scrollToSection(homeRef)} className="nav-button">Home</button>
          <button onClick={() => scrollToSection(workRef)} className="nav-button">Work</button>
          <button onClick={() => scrollToSection(projectRef)} className="nav-button">Projects</button>
          <button onClick={() => scrollToSection(contactRef)} className="nav-button">Contact</button>
          <a
            href="https://drive.google.com/file/d/136ZzOQ--Vnc2xP-yrJ4Q3-eQdzuVXuMD/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#EF8987]"
          >
            Resume
          </a>
          <button className="nav-button" onClick={toggleTheme}>{(theme==="dark")? <MdSunny className="w-5 h-5"/> : <FaMoon className="w-5 h-5"/> }</button>
        </div>

    </div>
  );
};

export default Nav;