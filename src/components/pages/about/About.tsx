import { Descriptions, List, Typography } from "antd";
import styled, { CSSProperties, DefaultTheme, useTheme } from "styled-components";

const { Title } = Typography;

const StyledDescriptions = styled(Descriptions)`
  padding-top: 50px;
  color: ${props => props.theme.color.font.primary};
  border-color: ${props => props.theme.color.border.primary};
  * {
    border-color: ${props => props.theme.color.border.primary} !important;
  }
`;

const StyledTitle = styled(Title)`
  color: ${props => props.theme.color.font.secondary} !important;
`;

const labelStyle = (theme: DefaultTheme): CSSProperties => ({
  color: `${theme.color.font.secondary}`,
  background: `${theme.color.background.primary}`
});
const contentStyle = (theme: DefaultTheme): CSSProperties => ({
  color: `${theme.color.font.primary}`,
  background: `${theme.color.background.secondary}`
});

const About = () => {
  const theme = useTheme();

  return (
    <StyledDescriptions
      title={<StyledTitle level={3}>Some details about me</StyledTitle>}
      bordered
      labelStyle={{ ...labelStyle(theme) }}
      contentStyle={{ ...contentStyle(theme) }}
    >
      <Descriptions.Item label="Full Name">Sumit Jawale</Descriptions.Item>
      <Descriptions.Item label="Location">Fremont, CA</Descriptions.Item>
      <Descriptions.Item label="Email">jawalesumit@gmail.com</Descriptions.Item>
      <Descriptions.Item label="Phone">(818) 578-9457</Descriptions.Item>
      <Descriptions.Item label="Eductaion" span={3}>
        <List
          dataSource={[
            "M.S. in Computer Science; CSU Northridge; Aug 2017 - May 2019",
            "B.E. in Computer Engineering; Pune University; Aug 2009 - May 2013"
          ]}
          renderItem={item => <List.Item style={{ ...contentStyle(theme) }}>- {item}</List.Item>}
        />
      </Descriptions.Item>
      <Descriptions.Item label="Skills" span={3}>
        Python, Go, Java, Javascript (ReactJS, ES6, Redux), Typescript, SQL (MySQL, PostgreSQL), RestAPI, gRPC, GraphQL,
        Cloud (AWS, Azure), HTML/CSS, CI/CD (Git, Jira, Jenkins, Teamcity)
      </Descriptions.Item>
    </StyledDescriptions>
  );
};

export default About;
