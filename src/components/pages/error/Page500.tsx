import { useNavigate } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import styled from "styled-components";
import { Button, Result, Typography } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { PATH } from "@/constants/routes";

const { Title } = Typography;

const StyledTitle = styled(Title)`
  color: ${props => props.theme.color.font.primary} !important;
`;
const title = <StyledTitle>500</StyledTitle>;
const subTitle = <StyledTitle level={4}>Uh-oh! Sorry, something went wrong.</StyledTitle>;

type Props = FallbackProps;
const Page500 = ({ error, resetErrorBoundary }: Props) => {
  const navigate = useNavigate();

  return (
    <Result
      status="500"
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

export default Page500;
