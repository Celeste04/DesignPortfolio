import { MdArrowOutward } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import { forwardRef } from "react";
import { useTheme } from "../context/ThemeContext";

const BottomNav = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_,ref) => {
  const { theme } = useTheme();
  return (
    <div ref={ref} className={`w-full ${theme === "light"? "bg-white text-[#282828]" : "bg-[#0A091E] text-white"} shadow pt-5`}>
        <div className="flex flex-col pb-10 mt-3 items-center text-center sm:pl-22 sm:items-start">
            <h1 className="text-3xl sm:text-5xl mb-6 text-dark general-text">Thanks for Stopping By!</h1>
            <div id="bottom-nav" className="flex justify-start gap-16 mb-8">
              <div className="flex items-center gap-1 group cursor-pointer">
                <FaLinkedin className="w-5 h-5 group-hover:text-[#E36867]" />
                <a 
                  href="https://www.linkedin.com/in/jessicaziyuchen/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className=" group-hover:text-[#E36867]"
                >
                  LinkedIn
                </a>
                <MdArrowOutward className="group-hover:text-[#E36867]" />
              </div>

            <div className="flex group"><FaGithubSquare className="w-[20px] h-[20px] mr-1 group-hover:text-[#E36867]"></FaGithubSquare><a  className="group-hover:text-[#E36867]" href="https://github.com/Celeste04" target="_blank" 
                rel="noopener noreferrer">GitHub</a><MdArrowOutward className="group-hover:text-[#E36867]"/></div>
            </div>
            <p className="subtext text-center"> © 2025 Jessica Chen. All rights reserved.</p> 
        </div>
    </div>
  )
});

export default BottomNav;
