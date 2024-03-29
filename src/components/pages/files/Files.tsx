import { useTheme } from "styled-components";
import { Document, Page } from "react-pdf";
import { Tabs } from "antd";
import { LIGHT_THEME } from "@/constants/styles";

const Files = () => {
  const currentTheme = useTheme() || LIGHT_THEME;

  return (
    <Tabs
      tabPosition="left"
      size="large"
      style={{
        height: "85vh",
        color: currentTheme.color.font.primary,
        background: currentTheme.color.background.primary
      }}
      items={[
        {
          label: "Resume",
          key: "resume",
          children: (
            <Document file="resume.pdf">
              <Page pageNumber={1} />
            </Document>
          )
        }
      ]}
    />
  );
};

export default Files;
