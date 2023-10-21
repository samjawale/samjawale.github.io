import styled from "styled-components";
import { FieldTimeOutlined, RocketOutlined } from "@ant-design/icons";
import { Timeline } from "antd";

const StyledTimeline = styled(Timeline)`
  .ant-timeline-item-label,
  .ant-timeline-item-content {
    color: ${props => props.theme.color.font.primary};
  }
  .ant-timeline-item-tail {
    border-color: ${props => props.theme.color.border.primary};
  }
`;

const About = () => {
  return (
    <StyledTimeline
      mode="left"
      items={[
        { label: "Feb 08, 1992", children: "I was born into this world" },
        {
          dot: <FieldTimeOutlined style={{ fontSize: "16px" }} />,
          children: `Time flew by and I grew older with all the knowledge and experience, now was the time to decide what I need to truly become.`
        },
        { label: "Aug, 2009", children: "Commenced my Bachelors Degree in Computer Engineering" },
        { label: "Jun, 2013", children: "Earned my Bachelors Degree in Computer Engineering" },
        { label: "Jul, 2013", children: "Started working for my first company: Newgen" },
        { label: "Jul, 2015", children: "Got promoted to Sr. Software Engineer" },
        { label: "May, 2017", children: "Left my job to focus on higher education" },
        {
          label: "Aug, 2017",
          dot: <RocketOutlined style={{ fontSize: "16px" }} />,
          children: "Moved to United States"
        },
        { label: "Sep, 2017", children: "Started to pursue my Masters Degree in Computer Science" },
        { label: "Jul, 2019", children: "Started working for Dynata" }
      ]}
    ></StyledTimeline>
  );
};

export default About;
