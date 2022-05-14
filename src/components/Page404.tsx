import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Space, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { PATH } from "../helpers/routes";

const { Title } = Typography;

const StyledFrame = styled(Space)`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledTitle = styled(Title)`
  color: ${props => props.theme.color.primary} !important;
`;

const StyledButton = styled(Button)`
  /* color: ${props => props.theme.color.primary} !important; */
`;

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <StyledFrame direction="vertical">
      <StyledTitle level={4}>
        Uh-oh! The page you're looking for does not exist.
      </StyledTitle>
      <StyledTitle>Page 404</StyledTitle>
      <StyledButton
        type="primary"
        size="large"
        onClick={() => navigate(PATH.HOME)}
      >
        Back to home <HomeOutlined />
      </StyledButton>
    </StyledFrame>
  );
};

export default Page404;
