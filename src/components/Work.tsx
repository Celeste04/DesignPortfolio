
// import { Routes, Route } from 'react-router-dom'; 
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineElement } from './TimelineElement';
import { forwardRef } from 'react';
const Work = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_,ref) => {
  return (
    <section ref={ref} id="work" className="flex flex-col pl-5 pr-5 pt-[100px] sm:pl-22 sm:pr-22">
        <h1 className="text-3xl text-center sm:text-5xl mb-3 lg:mb-10 general-text general-text">Work Experience</h1>
  <div className="relative">
      <VerticalTimeline
    animate={true}
  >
  <TimelineElement
    date="May 2023 - Aug 2023"
    jobTitle="Software Tester"
    company="Nicoya Lifesciences"
    iconPath="/logos/nicoya.png"
    body="Wrote hundreds of test cases and performed regression testing. I also built Python Scripts to automate tasks on scientific machinery, reducing manual workload."
  />
   <TimelineElement
    date="May 2024 - Aug 2024"
    jobTitle="Software & UI/UX Developer"
    company="Marsh McLennan"
    iconPath="/logos/marsh.jpg"
    body="This internship challenged me to take risks. I started as a developer, creating reusable components with NextJS + Storybook, and later stepped in as a UI/UX designer. I had no professional design experience—only passion, determination, and hard work. This gave me the opportunity to lead the design of three projects, working closely with business users and developers to create wireframes and prototypes."/>
  <TimelineElement
    date="Jan 2025 - Present"
    jobTitle="Undergraduate Research Assistant"
    company="University of Waterloo"
    iconPath="/logos/waterloo.svg"
    body="I'm currently exploring the clashing realm of storytelling and augmented reality. I conducted 12 user interviews to observe how people would place personal timeline events in a general space and a space of their choosing. This research is still ongoing. Stay tuned to see findings~"
  />
   <TimelineElement
    date="May 2025 - Aug 2025"
    jobTitle="Full-stack Developer"
    company="Leo Berwick"
    iconPath="/logos/lb.jpeg"
    body="In this internship, I implemented a11y standards and mobile-first responsiveness to improve accessibility and usability. I also took the lead of a multi-tiered review system. I created prototypes on Figma, designed data structures, developed RESTful APIs, and the frontend implementation, factoring in role-based access"
  />
  <TimelineElement
    date="Sept 2025"
    jobTitle="Software Developer"
    company="Faire"
    iconPath="/logos/faire.jpeg"
    body="Incoming Fall 2025 :D ~ Stay tuned!"
  />
</VerticalTimeline>
  </div>
    </section>  
  )
});

export default Work;