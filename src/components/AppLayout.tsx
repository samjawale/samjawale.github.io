import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Col, Layout, Menu, Row, Switch, Typography } from "antd";
import { CodeOutlined, HomeOutlined, ProfileOutlined } from "@ant-design/icons";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";

const { Content, Header } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: #0099ff;
`;
const StyledTitle = styled(Title)`
  color: ${(props) => props.theme.color.secondary} !important;
  margin: 0 !important;
`;

const StyledContent = styled(Content)`
  background: ${(props) => props.theme.color.background};
`;

type Props = {
  toggleTheme: () => void;
};
const AppLayout = ({ toggleTheme }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledLayout>
      <StyledHeader>
        <Row>
          <Col span={8} style={{ display: "flex", alignItems: "center" }}>
            <StyledTitle level={2}>Sam's Portfolio</StyledTitle>
          </Col>
          <Col span={8} offset={8}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={["/"]}
              items={[
                {
                  key: "/",
                  label: "Home",
                  icon: <HomeOutlined />,
                  onClick: () => navigate(`/`),
                },
                {
                  key: "about",
                  label: "About",
                  icon: <ProfileOutlined />,
                  onClick: () => navigate(`about`),
                },
                {
                  key: "projects",
                  label: "Projects",
                  icon: <CodeOutlined />,
                  onClick: () => navigate(`projects`),
                },
              ]}
            />
          </Col>
        </Row>
      </StyledHeader>
      <StyledContent>
        <Switch
          checkedChildren="Light"
          unCheckedChildren="Dark"
          onClick={toggleTheme}
        />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </StyledContent>
    </StyledLayout>
  );
};

export default AppLayout;
