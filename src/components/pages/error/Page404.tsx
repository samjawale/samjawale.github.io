import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Button, Result, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { PATH } from "@/constants/routes";

const { Title } = Typography;

const StyledTitle = styled(Title)`
  color: ${props => props.theme.color.font.primary} !important;
`;
const title = <StyledTitle>404</StyledTitle>;
const subTitle = <StyledTitle level={4}>Uh-oh! The page you're looking for does not exist.</StyledTitle>;

const Page404 = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="404"
      title={title}
      subTitle={subTitle}
      extra={
        <Button type="primary" size="large" onClick={() => navigate(PATH.HOME)}>
          Back to home <HomeOutlined />
        </Button>
      }
    />
  );
};

export default Page404;
