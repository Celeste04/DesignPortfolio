import AboutPic from "/about-pic.png";
import { MdArrowOutward } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
const About = () => {
  return (
    <div>
      <div className="w-full pl-5 pr-5 sm:pl-20 sm:pr-10 flex mt-10 flex-col items-center sm:flex-row sm:justify-center">
        <div id="about" className="sm:w-[50%] sm:mr-20 pl-3 pr-3 sm:pl-0 sm:pr-0 sm:mb-0 mb-5 flex flex-col sm:items-start items-center">
          <h1 className="text-5xl mb-5 text-center sm:text-left ml-[-48px] sm:ml-0">🌸 About</h1>
          <p className="leading-10 sm:text-left text-center mb-5">
            Hi! I'm Jessica. I just finished my 3rd year of Computer Science specializing in Human-Computer Interaction at the University of Waterloo.
            I'm a curious and creative thinker and I love bringing my imagination to life through designs and code.
            Currently, I am working as a full-stack developer at Leo Berwick, where I focus on implementing responsive UI and revamping the platform design to improve usability and accessibility.
            On the side, I work as an HCI Undergraduate Research Assistant exploring time-based storytelling in Augmented Reality through UX research. I'm also
            on the executive team of Waterloo's first Women+ tech hacakthon as a designer. 
            When I'm not designing or coding, I love creating art, singing, going on walks, and cuddling my cat Taro.
          </p>
          <div id="bottom-nav" className="flex justify-center sm:justify-start gap-16 mb-8">
            <div className="flex hover:text-[#E36867] text-[#28282B]"><FaLinkedin className="w-[20px] h-[20px] mr-1"></FaLinkedin><a href="https://www.linkedin.com/in/jessicaziyuchen/" target="_blank" 
                  rel="noopener noreferrer">LinkedIn</a><MdArrowOutward/></div>
            <div className="flex hover:text-[#E36867] text-[#28282B]"><FaGithubSquare className="w-[20px] h-[20px] mr-1"></FaGithubSquare><a href="https://github.com/Celeste04" target="_blank" 
                  rel="noopener noreferrer">GitHub</a><MdArrowOutward/></div>
        </div>
        </div>
        <img src={AboutPic} className="w-[397px] h-[482px] mb-10"></img>
      </div>
    </div>
  )
}

export default About;
