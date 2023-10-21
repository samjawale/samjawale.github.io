import { Routes, Route } from "react-router-dom";
import styled from "styled-components";
import { Layout } from "antd";
import Header from "@/components/header";
import Home from "@/components/pages/home";
import About from "@/components/pages/about";
import Projects from "@/components/pages/projects";
import Files from "@/components/pages/files";
import Page404 from "@/components/pages/error/Page404";
import { PATH } from "@/constants/routes";

const StyledLayout = styled(Layout)`
  height: 100vh;
  background: ${props => props.theme.color.background.primary};
`;

const StyledContent = styled(Layout.Content)`
  padding: 50px;
  overflow: auto;
  background: ${props => props.theme.color.background.primary};
`;

type Props = {
  toggleTheme: () => void;
};
const AppLayout = (props: Props) => {
  return (
    <StyledLayout>
      <Header {...props} />
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
