import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Col, Layout, Menu, Row, Space, Switch, Typography } from "antd";
import Icon from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFile, faHome, faMoon, faSun, faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as BatmanSvg } from "@/art/icons/batman.svg";
import { GithubProfileBtn, LinkedInProfileBtn, YoutubeProfileBtn } from "@/components/header/ProfileButton";
import { PATH } from "@/constants/routes";

const { Title } = Typography;

const StyledHeader = styled(Layout.Header)`
  background: ${props => props.theme.color.background.primary};
`;

const StyledSwitch = styled(Switch)``;

const StyledTitle = styled(Title)`
  color: ${props => props.theme.color.font.primary} !important;
`;

type Props = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};
const Header = ({ isDarkTheme, toggleTheme }: Props) => {
  const location = useLocation();
  const navigate = useNavigate();

  const headerLogo = isDarkTheme ? (
    <Icon component={() => <BatmanSvg fill="#ffffff" width={150} height={40} />} />
  ) : (
    <FontAwesomeIcon icon={faUserTie} size="3x" width={150} />
  );

  return (
    <StyledHeader>
      <Row justify="space-between">
        <Col span={8}>
          <Space size={16}>
            <StyledSwitch
              checked={isDarkTheme}
              checkedChildren={<FontAwesomeIcon icon={faMoon} />}
              unCheckedChildren={<FontAwesomeIcon icon={faSun} />}
              onClick={toggleTheme}
            />
            <LinkedInProfileBtn />
            <GithubProfileBtn />
            <YoutubeProfileBtn />
          </Space>
        </Col>
        <Col span={8} style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
          <Space>
            <StyledTitle
              level={2}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", margin: "0" }}
            >
              Sam's Portfolio
            </StyledTitle>
            <span style={{ display: "flex" }}>{headerLogo}</span>
          </Space>
        </Col>
        <Col span={8}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[PATH.HOME]}
            selectedKeys={[location.pathname]}
            theme={isDarkTheme ? "dark" : "light"}
            style={{ justifyContent: "end", border: "none" }}
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
  );
};

export default Header;
