import { useTheme } from "styled-components";
import { pdfjs, Document, Page } from "react-pdf";
import { Tabs } from "antd";
import { LIGHT_THEME } from "@/constants/styles";

pdfjs.GlobalWorkerOptions.workerSrc = new URL("pdfjs-dist/build/pdf.worker.min.js", import.meta.url).toString();

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
