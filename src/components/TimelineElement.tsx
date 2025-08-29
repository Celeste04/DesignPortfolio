import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

type TimelineElementProps = {
    date: string;
    iconPath: string;
    jobTitle: string;
    company: string;
    body: string;
}

export const TimelineElement = ({date, iconPath, jobTitle, company, body}: TimelineElementProps) => {
    return (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        date={date}
        icon={
            <img src={iconPath} className="rounded-full">
            </img>
        }
    >
        <h3 className="vertical-timeline-element-title text-dark">{jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle text-gray-500">{company}</h4>
        <p className="!font-normal text-dark !text-sm">
        {body}
        </p>
    </VerticalTimelineElement>
  
    );
}