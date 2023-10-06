import styled from "styled-components";
import { Space, Typography } from "antd";
import WordCloud from "react-wordcloud";
import { wordCloudWords } from "./skillData";
// import samImage from "@/assets/images/sam.png";

const { Title } = Typography;

const StyledContainer = styled(Space).attrs(() => {
  return { direction: "vertical" };
})`
  align-items: center;
`;

const StyledQuote = styled(Title)`
  color: ${props => props.theme.color.font.primary} !important;
  text-align: center;
  font-style: italic;
  font-family: fantasy;
`;

const StyledWordCloudContainer = styled.div`
  display: flex;
  width: 600px;
  height: 450px;
`;

const Home = () => {
  return (
    <StyledContainer>
      <StyledQuote level={3}>
        "Throughout my 7-year-plus career as a software engineer, I have focused on developing scalable and
        well-documented code. I enjoy working collaboratively but can also run projects independently. I always have
        been known as a quick leaner and a fast developer."
      </StyledQuote>
      <StyledWordCloudContainer>
        <WordCloud options={{ fontSizes: [10, 36] }} words={wordCloudWords} />
      </StyledWordCloudContainer>
    </StyledContainer>
  );
};

export default Home;
