import { DefaultTheme } from "styled-components";
import { ThemeKind } from "@/types/style";

export const lightTheme: DefaultTheme = {
  kind: ThemeKind.LIGHT,
  fontFamily: "Helvetica Neue",
  color: {
    background: { primary: "#ffffff", secondary: "#808080" },
    border: { primary: "rgba(0, 0, 0, 0.85)", secondary: "rgba(0, 0, 0, 0.85)" },
    font: { primary: "rgba(0, 0, 0, 0.85)", secondary: "#ffffff" }
  }
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  kind: ThemeKind.DARK,
  color: {
    ...lightTheme.color,
    background: { primary: "#001529", secondary: "#808080" },
    border: { primary: "#ffffff", secondary: "#ffffff" },
    font: { primary: "#ffffff", secondary: "#ffffff" }
  }
};
