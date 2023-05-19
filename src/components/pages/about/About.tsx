import styled from "styled-components";
import { Timeline } from "antd";

const { Item } = Timeline;

const StyledTimeline = styled(Timeline)`
  .ant-timeline-item-label,
  .ant-timeline-item-content {
    color: ${props => props.theme.color.font.primary};
  }
  .ant-timeline-item-tail {
    border-color: ${props => props.theme.color.border.primary};
  }
`;

const StyledTimelineItem = styled(Item)``;

const About = () => {
  return (
    <StyledTimeline mode="left">
      <StyledTimelineItem label="2015-09-01">Create a services</StyledTimelineItem>
      <StyledTimelineItem label="2015-09-01 09:12:11">Solve initial network problems</StyledTimelineItem>
      <StyledTimelineItem>Technical testing</StyledTimelineItem>
      <StyledTimelineItem label="2015-09-01 09:12:11">Network problems being solved</StyledTimelineItem>
    </StyledTimeline>
  );
};

export default About;
