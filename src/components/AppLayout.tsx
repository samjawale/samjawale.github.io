import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Col, Layout, Menu, Row, Switch, Typography } from "antd";
import { CodeOutlined, FilePdfOutlined, HomeOutlined, UserOutlined } from "@ant-design/icons";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Files from "./Files";
import Page404 from "./Page404";
import { PATH } from "../helpers/routes";
import lightImg from "../art/up-down-lines-light-mode.jpeg";
import darkImg from "../art/up-down-lines-dark-mode.jpeg";
import { ThemeKind } from "../types/style";

const { Content, Header } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: #1890ff;
`;
const StyledTitle = styled(Title)`
  color: ${props => props.theme.color.secondary} !important;
  margin: 0 !important;
`;
const StyledSwitch = styled(Switch)``;

const StyledContent = styled(Content)`
  padding: 0 100px;
  background: ${props => props.theme.color.background};
  background-image: url(${props => (props.theme.kind === ThemeKind.LIGHT ? lightImg : darkImg)});
  background-size: cover;
`;

type Props = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};
const AppLayout = ({ isDarkTheme, toggleTheme }: Props) => {
  const navigate = useNavigate();

  return (
    <StyledLayout>
      <StyledHeader>
        <Row>
          <Col span={5} style={{ display: "flex", alignItems: "center" }}>
            <StyledTitle level={2}>Sam's Portfolio</StyledTitle>
          </Col>
          <Col span={10} offset={6}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[PATH.HOME]}
              theme={isDarkTheme ? "dark" : "light"}
              items={[
                {
                  key: PATH.HOME,
                  label: "Home",
                  icon: <HomeOutlined />,
                  onClick: () => navigate(PATH.HOME)
                },
                {
                  key: PATH.ABOUT,
                  label: "About",
                  icon: <UserOutlined />,
                  onClick: () => navigate(PATH.ABOUT)
                },
                {
                  key: PATH.PROJECTS,
                  label: "Projects",
                  icon: <CodeOutlined />,
                  onClick: () => navigate(PATH.PROJECTS)
                },
                {
                  key: PATH.FILES,
                  label: "Files",
                  icon: <FilePdfOutlined />,
                  onClick: () => navigate(PATH.FILES)
                }
              ]}
            />
          </Col>
          <Col offset={1}>
            <StyledSwitch checkedChildren="Light" unCheckedChildren="Dark" onClick={toggleTheme} />
          </Col>
        </Row>
      </StyledHeader>
      <StyledContent>
        <Routes>
          <Route path={PATH.HOME} element={<Home />} />
          <Route path={PATH.ABOUT} element={<About />} />
          <Route path={PATH.PROJECTS} element={<Projects />} />
          <Route path={PATH.FILES} element={<Files />} />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </StyledContent>
    </StyledLayout>
  );
};

export default AppLayout;
