import { Tabs } from "antd";
import { useTheme } from "styled-components";
import { Document } from "react-pdf/dist/esm/entry.webpack5";

const Files = () => {
  const currentTheme = useTheme();

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
          children: <Document file="./resume.pdf" />
        }
      ]}
    />
  );
};

export default Files;
