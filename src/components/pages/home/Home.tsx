import styled from "styled-components";
import { Typography } from "antd";
import { WordCloud, WordCloudConfig } from "@ant-design/plots";
import { skillData } from "./skillData";
import samImage from "@/art/images/sam.png";

const { Title } = Typography;

const StyledQuote = styled(Title)`
  color: ${props => props.theme.color.font.primary} !important;
  margin-top: 15%;
  font-size: 24px !important;
  text-align: center;
`;

const config: WordCloudConfig = {
  data: skillData,
  wordField: "skill",
  weightField: "score",
  colorField: "skill",
  imageMask: samImage,
  wordStyle: {
    fontFamily: "Verdana",
    fontSize: [8, 32]
  }
};

const Home = () => {
  return (
    <>
      <StyledQuote>
        "Throughout my 7-year-plus career as a software engineer, I have focused on developing scalable and
        well-documented code. I enjoy working collaboratively but can also run projects independently. I always have
        been known as a quick leaner and a fast developer."
      </StyledQuote>
      <WordCloud {...config} />
    </>
  );
};

export default Home;
