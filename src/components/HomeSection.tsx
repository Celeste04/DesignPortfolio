import MeGraphic from "/graphic-me1.png";
import { MdArrowOutward } from "react-icons/md";

const HomeSection = () => {
  // const buttonColor="#E36867";
  return (
    <div className="h-[100vh] sm:h-[90vh] pl-5 pr-5 sm:pl-22 flex flex-col md:flex-row items-center md:items-start md:gap-[30px] md:justify-between">
        <img src={MeGraphic} className="w-[315px] h-[287px] mb-6 md:mb-0 md:w-[554px] md:h-[506px] block"></img>
        <div className="flex flex-col gap-[20px] items-center md:items-start mt-10 md:mt-16">
            <div id="intro" className="flex flex-col gap-[16px] text-center md:text-left md:w-[90%]">            
                <h1 className="text-3xl sm:text-5xl mb-3">Hey 👋, I'm Jessica.</h1>
                <p className="text-2xl sm:text-3xl leading-10 mb-6">I'm a <b>Product Designer</b> with a strong artistic vision and technical background, passionate about creating user-centric experiences.</p>
            </div>
            <div className="flex gap-[16px]">
                <button onClick={() => window.open("https://drive.google.com/file/d/1FgdwEbC2r2ozXdoFccH5GqiLmZxazNjQ/view?usp=sharing", "_blank", "noopener,noreferrer")}
                className="p-2 pl-4 pr-4 rounded-lg  border-[2px] border-[#E36867] bg-[#E36867] text-white flex gap-[8px] hover:bg-transparent hover:text-[#E36867]">
                    <p>Resume</p>
                    <MdArrowOutward />
                </button>
                <button 
                    onClick={() => window.open("https://www.linkedin.com/in/jessicaziyuchen", "_blank", "noopener,noreferrer")}
                    className="p-2 pl-4 pr-4 rounded-lg  text-[#E36867] border-[2px] border-[#E36867] flex gap-[8px] hover:bg-[#E36867] hover:text-[white]">
                    <p >LinkedIn</p>
                    <MdArrowOutward />
                </button>
            </div>
        </div>
        </div>
  )
}

export default HomeSection;
