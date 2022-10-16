import { Col, Row, Statistic, Timeline } from "antd";
import styled, { useTheme } from "styled-components";

const About = () => {
  return (
    <>
      <Timeline mode="left">
        <Timeline.Item label="2015-09-01">Create a services</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Solve initial network problems</Timeline.Item>
        <Timeline.Item>Technical testing</Timeline.Item>
        <Timeline.Item label="2015-09-01 09:12:11">Network problems being solved</Timeline.Item>
      </Timeline>
    </>
  );
};

export default About;
