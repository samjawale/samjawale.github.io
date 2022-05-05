import styled from "styled-components";
import { Layout, Switch } from "antd";

const { Content, Header } = Layout;

const StyledLayout = styled(Layout)`
  height: 100vh;
`;

const StyledHeader = styled(Header)`
  background: #0099ff;
`;

const StyledContent = styled(Content)`
  background: ${(props) => props.theme.color.background};
`;

type Props = {
  toggleTheme: () => void;
};
const AppLayout = ({ toggleTheme }: Props) => {
  return (
    <StyledLayout>
      <StyledHeader></StyledHeader>
      <StyledContent>
        <Switch
          checkedChildren="Light"
          unCheckedChildren="Dark"
          onClick={toggleTheme}
        />
      </StyledContent>
    </StyledLayout>
  );
};

export default AppLayout;
