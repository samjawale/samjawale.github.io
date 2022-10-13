import { Routes, Route, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Col, Layout, Menu, Row, Space, Switch, Typography } from "antd";
import { GithubOutlined, LinkedinOutlined, YoutubeOutlined } from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFile, faHome, faMoon, faSun, faUser } from "@fortawesome/free-solid-svg-icons";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Files from "./Files";
import Page404 from "./Page404";
import { PATH } from "../helpers/routes";

const { Content, Header } = Layout;
const { Title } = Typography;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: ${props => props.theme.color.background.primary};
`;
const StyledTitle = styled(Title)`
  color: ${props => props.theme.color.font.secondary} !important;
  margin: 0 !important;
`;
const StyledSwitch = styled(Switch)``;

const StyledContent = styled(Content)`
  padding: 0 100px;
  background: ${props => props.theme.color.background.primary};
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
          <Col span={10}>
            <Space>
              <StyledSwitch
                checked={isDarkTheme}
                checkedChildren={<FontAwesomeIcon icon={faMoon} />}
                unCheckedChildren={<FontAwesomeIcon icon={faSun} />}
                onClick={toggleTheme}
              />
              <Button
                shape="circle"
                icon={<LinkedinOutlined />}
                href="https://www.linkedin.com/in/jawalesumit/"
                target="_blank"
              />
              <Button shape="circle" icon={<GithubOutlined />} href="https://github.com/samjawale" target="_blank" />
              <Button
                shape="circle"
                icon={<YoutubeOutlined />}
                href="https://www.youtube.com/channel/UCF60X5gHAPTkvMb5XjIaHrA"
                target="_blank"
              />
            </Space>
          </Col>
          <Col span={4} style={{ display: "flex", alignItems: "center" }}>
            <StyledTitle level={2}>Sam's Portfolio</StyledTitle>
          </Col>
          <Col span={10}>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[PATH.HOME]}
              theme={isDarkTheme ? "dark" : "light"}
              items={[
                {
                  key: PATH.HOME,
                  label: "Home",
                  icon: <FontAwesomeIcon icon={faHome} />,
                  onClick: () => navigate(PATH.HOME)
                },
                {
                  key: PATH.ABOUT,
                  label: "About",
                  icon: <FontAwesomeIcon icon={faUser} />,
                  onClick: () => navigate(PATH.ABOUT)
                },
                {
                  key: PATH.PROJECTS,
                  label: "Projects",
                  icon: <FontAwesomeIcon icon={faCode} />,
                  onClick: () => navigate(PATH.PROJECTS)
                },
                {
                  key: PATH.FILES,
                  label: "Files",
                  icon: <FontAwesomeIcon icon={faFile} />,
                  onClick: () => navigate(PATH.FILES)
                }
              ]}
            />
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
