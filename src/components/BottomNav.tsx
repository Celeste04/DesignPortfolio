import { MdArrowOutward } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const BottomNav = () => {
  return (
    <div className="w-full">
        <hr className="border-t-[1.5px] border-[#d7c7a8] my-4" />
        <div className="flex flex-col pb-10 mt-3 pl-22">
            <h1 className="text-4xl mb-4">Thanks for Stopping By!</h1>
            <div id="bottom-nav" className="flex justify-start gap-16 mb-8">
            <div className="flex hover:text-[#E36867] text-[#28282B]"><FaLinkedin className="w-[20px] h-[20px] mr-1"></FaLinkedin><a href="https://www.linkedin.com/in/jessicaziyuchen/" target="_blank" 
                rel="noopener noreferrer">LinkedIn</a><MdArrowOutward/></div>
            <div className="flex hover:text-[#E36867] text-[#28282B]"><FaGithubSquare className="w-[20px] h-[20px] mr-1"></FaGithubSquare><a href="https://github.com/Celeste04" target="_blank" 
                rel="noopener noreferrer">GitHub</a><MdArrowOutward/></div>
            </div>
            <p>🌸 Designed and coded with love {`<3`}</p> 
        </div>
    </div>
  )
}

export default BottomNav;
