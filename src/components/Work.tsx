import Project from "./Project";
import mementosBanner from "../../public/mementos.svg";
import ecocraftBanner from "../../public/ecocraftBanner.svg";
// import { Routes, Route } from 'react-router-dom'; 
const Work = () => {
  return (
    <div className="flex flex-col pl-5 pr-5 sm:pl-22 sm:pr-22">
        <h1 className="text-3xl sm:text-5xl mb-3 lg:mb-10">Work</h1>
      <div className="mb-10">
        <h2 className="text-2xl sm:text-3xl text-[#28282B] font-medium mb-6">Case Studies</h2>
         <div className="flex gap-[24px] flex-col sm:flex-row">
           <Project projImg={mementosBanner} projKind="case study" projName="Mementos" projPath="https://coconut-exhaust-f38.notion.site/Mementos-1f1d26445ef38049a97de861d6cfb003?pvs=4" projDesc="Bring your memories to life"></Project>
           <Project projImg={ecocraftBanner} projKind="case study" projName="EcoCraft" projPath="https://coconut-exhaust-f38.notion.site/EcoCraft-1f1d26445ef380e58edcfd6172f4f585?pvs=4" projDesc="Hand made for you"></Project>
         </div>
      </div>
      <div className="mb-10 flex flex-col items-center sm:items-start">
        {/*<h2 className="text-2xl sm:text-3xl mb-6 text-[#28282B] font-medium ">Recent Coding Projects</h2>
          <div className="grid sm:grid-cols-2 gap-[24px]">
            <Project projImg="/sunnyside.png" projKind="coding" projName="Sunny Side Diaries" projPath="https://github.com/Celeste04/sunny-side-diaries" projDesc="Mental health app with your favourite pals"></Project>
            <Project projImg="/sunnyside.png" projKind="coding" projName="Sunny Side Diaries" projPath="https://github.com/Celeste04/sunny-side-diaries" projDesc="Mental health app with your favourite pals"></Project>
            <Project projImg="/sunnyside.png" projKind="coding" projName="Sunny Side Diaries" projPath="https://github.com/Celeste04/sunny-side-diaries" projDesc="Mental health app with your favourite pals"></Project>
            <Project projImg="/sunnyside.png" projKind="coding" projName="Sunny Side Diaries" projPath="https://github.com/Celeste04/sunny-side-diaries" projDesc="Mental health app with your favourite pals"></Project>
          </div>*/}
      </div>
    </div>  
  )
}

export default Work;