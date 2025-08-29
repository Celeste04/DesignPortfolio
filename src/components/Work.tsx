
// import { Routes, Route } from 'react-router-dom'; 
import { VerticalTimeline }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { TimelineElement } from './TimelineElement';
import { forwardRef } from 'react';
const Work = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>((_,ref) => {
  return (
    <section ref={ref} id="work" className="flex flex-col pl-5 pr-5 pt-10 sm:pl-22 sm:pr-22">
        <h1 className="text-3xl text-center sm:text-5xl mb-3 lg:mb-10">Work Experience</h1>
  <div className="relative">
      <VerticalTimeline
    animate={true}
  >
  <TimelineElement
    date="May 2023 - Aug 2023"
    jobTitle="Software Tester"
    company="Nicoya Lifesciences"
    iconPath="/logos/nicoya.png"
    body="Wrote hundreds of test cases and performed regression testing. I also built Python Scripts to automate tasks on scientific matchinery, reducing manual workload."
  />
   <TimelineElement
    date="May 2024 - Aug 2024"
    jobTitle="Software & UI/UX Developer"
    company="Marsh McLennan"
    iconPath="/logos/marsh.jpg"
    body="This internship really challenged me to take risks. I started off as a software developer, creating reusable components with NextJS and Storybook. But I knew that the team needed a product designer, so I stepped in. I had no professional design experience. Only passion, determination, and hard work. Because I took the risk, I had the opportunity to lead the design of three projects, working closely with business user and developers to create wireframes and prototypes."
  />
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