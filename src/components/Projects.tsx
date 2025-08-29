import { ProjectCard } from "./ProjectCard";

import PokePals from "../../public/projects/Pokepals.png";
import SunnySide from "../../public/projects/sunnyside.png";
import Frogger from "../../public/projects/frog.png";


export const Projects = () => {
    return (
    <section className="flex flex-col mb-10">
        <h1 className="text-3xl text-center sm:text-5xl mb-10 lg:mb-10 general-text general-text">Projects</h1>
        <div className="flex flex-col items-center justify-center md:flex-row md:items-center md:gap-3 gap-8">
            <ProjectCard
                title={"PokePals"}
                techStack={"React.js | MySQL | Flask"}
                imageURL={PokePals}
                projectURL={"https://github.com/sabrina-xing/pokemon"}
                description={"Pokémon trading + search engine"}
            />
             <ProjectCard
                title={"Sunny Side Diaries"}
                techStack={"React.js | Express.js | MongoDB | OpenAI api"}
                imageURL={SunnySide}
                projectURL={"https://github.com/xuserena12/sunny-side-diaries"}
                description={"Mental health journaling with your favourite egg-themed buddies"}
            />
            <ProjectCard
                title={"Frogger"}
                techStack={"Java"}
                imageURL={Frogger}
                projectURL={"https://github.com/Celeste04/frogger-remake"}
                description={"Re-built the original frogger game with Java"}
            />
        </div>
    </section>
    );
};

