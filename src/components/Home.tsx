import styled from "styled-components";
import { Typography } from "antd";

const { Title } = Typography;

const StyledQuote = styled(Title)`
  color: ${props => props.theme.color.primary} !important;
`;
const StyledPre = styled.pre`
  background: ${props => props.theme.color.background} !important;
  font-size: 0.6em;
  text-align: center;
`;

const Home = () => {
  return (
    <StyledQuote>
      <StyledPre>
        "Throughout my 7-year-plus career as a software engineer, I have focused on developing scalable and
        well-documented code. I enjoy working collaboratively but can also run projects independently. I always have
        been known as a quick leaner and a fast developer."
      </StyledPre>
    </StyledQuote>
  );
};

export default Home;
