import MeLightMode from "/me-light.png"
import MeDarkMode from "/me-dark.png"
import SunGif from "/sun.gif";
import MoonGif from "/moon.gif";
import { MdArrowOutward } from "react-icons/md";
import { forwardRef } from "react";
import { useTheme } from "../context/ThemeContext";

const HomeSection = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_, ref) => {
  const { theme } = useTheme();

  return (
    <div ref={ref} id="home" className="h-full pl-5 pr-5 m-5 flex flex-col lg:flex-row lg:items-center md:items-start md:gap-[30px] md:justify-between">
    <div className="relative w-full h-full flex items-center">
    <img
        src={theme === "light"? SunGif:MoonGif}
        className="w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] top-0 left-0 z-0 absolute"
        alt="Sun"
    />
    <img
        src={theme === "light" ? MeLightMode : MeDarkMode}
        className="w-[400px] sm:w-[500px] lg:w-[700px] block animate-slow-bounce mx-auto z-[100]"
        alt="Me"
    />
    </div>
        <div className={`flex flex-col gap-[20px] items-center md:items-start w-fit ${ theme === "light" ? "bg-[rgb(255,255,255,0.6)]": ""} p-5 rounded-2xl`}>
            <div id="intro" className="flex flex-col gap-[16px] text-center md:text-left rounded-lg p-4">            
                <h1 className="general-text text-3xl sm:text-5xl mb-3">Hey 👋, I'm Jessica.</h1>
                <p className="general-text text-2xl sm:text-3xl leading-10 mb-6">I’m a 4th year Computer Science & HCI student at the University of Waterloo. I have a strong artistic vision and technical background, passionate about creating user-centric experiences. </p>
            </div>
            <div className="flex gap-[16px] p-4 z-1">
                <button onClick={() => window.open("https://drive.google.com/file/d/136ZzOQ--Vnc2xP-yrJ4Q3-eQdzuVXuMD/view?usp=sharing", "_blank", "noopener,noreferrer")}
                className="p-2 pl-4 pr-4 rounded-lg  border-[2px] border-[#E36867] bg-[#E36867] text-white flex gap-[8px] hover:bg-[#e8a4a4]">
                    <p>Resume</p>
                    <MdArrowOutward />
                </button>
                <button 
                    onClick={() => window.open("https://www.linkedin.com/in/jessicaziyuchen", "_blank", "noopener,noreferrer")}
                    className="p-2 pl-4 pr-4 rounded-lg  text-[#E36867] bg-white border-[2px] border-[#E36867] flex gap-[8px] hover:bg-secondary hover:text-white hover:bg-[#e8a4a4]">
                    <p >LinkedIn</p>
                    <MdArrowOutward />
                </button>
            </div>
        </div>
        </div>
  )
});

export default HomeSection;
