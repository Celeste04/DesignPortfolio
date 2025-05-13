

import { Link } from "react-router-dom";
type ProjType = {
    projKind: "coding" | "case study";
    projName: string;
    projDesc: string;
    projPath: string;
    projImg: string;
};



const Project = ({ projName, projDesc, projPath, projKind, projImg }: ProjType) => {
  return  projKind === "coding" ? (
        <a href={projPath} target="_blank" rel="noopener noreferrer" className="flex flex-col bg-white shadow rounded-[20px] hover:outline-2 hover: outline-[#e7a5a5]">
        <img className="rounded-t-[20px]" src={projImg}></img>
        <div id="proj" className="p-4">
            <h1 className="text-2xl font-medium">{projName}</h1>
            <p>{projDesc}</p>
        </div>
    </a>
      ) : (
      <Link  to={projPath} target="_blank" rel="noopener noreferrer" className="max-w-[600px] flex flex-col bg-white shadow rounded-[20px] hover:outline-2 hover: outline-[#e7a5a5]">
      <img className="rounded-t-[20px]" src={projImg}></img>
      <div id="proj" className="p-4">
          <h1 className="text-2xl font-medium">{projName}</h1>
          <p>{projDesc}</p>
      </div>
    </Link>);
};

export default Project
