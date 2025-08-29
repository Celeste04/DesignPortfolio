
import { useTheme } from "../context/ThemeContext";

type ProjectCardProps = {
    title: string;
    techStack: string;
    imageURL: string;
    description: string;
    projectURL:string;
}

export const ProjectCard = ({ title, techStack, imageURL, description, projectURL }:ProjectCardProps) => {
    const { theme } = useTheme();
    return (
        <a href={projectURL}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex flex-col h-[400px] shadow-sm  transform transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl lg:w-[30%] w-[70%] rounded-lg p-8 ${theme === "light" ? "bg-white" : "bg-[rgb(0,0,0,0.3)]"}`}>
            <p className="general-text font-medium text-lg">{title}</p>
            <div className="w-full h-60 overflow-hidden rounded-lg my-2">
            <img src={imageURL} className="w-full h-full object-cover"/>
            </div>
            <p className="subtext italic">{techStack}</p>
            <p className="general-text">{description}</p>
        </a>
    );
};