import { VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { useTheme } from '../context/ThemeContext';

type TimelineElementProps = {
    date: string;
    iconPath: string;
    jobTitle: string;
    company: string;
    body: string;
}

export const TimelineElement = ({date, iconPath, jobTitle, company, body}: TimelineElementProps) => {
    const { theme } = useTheme();
    return (
    <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentArrowStyle={{ borderRight: '7px solid  white' }}
        contentStyle={{background: theme === "light" ? "white" : "rgb(0,0,0,0.3)"}}
        date={date}
        dateClassName="general-text"
        icon={
            <img src={iconPath} className="rounded-full">
            </img>
        }>
        <h3 className="vertical-timeline-element-title general-text">{jobTitle}</h3>
        <h4 className="vertical-timeline-element-subtitle subtext italic">{company}</h4>
        <p className="!font-normal !text-sm general-text">
        {body}
        </p>
    </VerticalTimelineElement>
    );
}