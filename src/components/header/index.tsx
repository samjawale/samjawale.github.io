import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Col, Layout, Menu, Row, Space, Switch } from "antd";
import Icon from "@ant-design/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faFile, faHome, faMoon, faSun, faUser, faUserTie } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as BatmanSvg } from "@/art/batman.svg";
import { GithubProfileBtn, LinkedInProfileBtn, YoutubeProfileBtn } from "@/components/header/ProfileButton";
import { PATH } from "@/helpers/routes";

const StyledHeader = styled(Layout.Header)`
  background: ${props => props.theme.color.background.primary};
`;

const StyledSwitch = styled(Switch)``;

type Props = {
  isDarkTheme: boolean;
  toggleTheme: () => void;
};
const Header = ({ isDarkTheme, toggleTheme }: Props) => {
  const navigate = useNavigate();

  const headerLogo = isDarkTheme ? (
    <Icon component={() => <BatmanSvg fill="#ffffff" width={150} height={40} />} />
  ) : (
    <FontAwesomeIcon icon={faUserTie} size="3x" />
  );

  return (
    <StyledHeader>
      <Row justify="space-between">
        <Col span={8}>
          <Space>
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
          {headerLogo}
        </Col>
        <Col span={8}>
          <Menu
            mode="horizontal"
            defaultSelectedKeys={[PATH.HOME]}
            theme={isDarkTheme ? "dark" : "light"}
            style={{ justifyContent: "end" }}
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
