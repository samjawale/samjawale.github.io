import { DefaultTheme } from "styled-components";
import { ThemeKind } from "@/types/style";

export const lightTheme: DefaultTheme = {
  kind: ThemeKind.LIGHT,
  fontFamily: "Helvetica Neue",
  color: {
    background: { primary: "#ffffff", secondary: "#D3D3D3" },
    border: { primary: "#000000", secondary: "#000000" },
    font: { primary: "#000000", secondary: "#a9abaa" }
  }
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  kind: ThemeKind.DARK,
  color: {
    ...lightTheme.color,
    background: { primary: "#001529", secondary: "#808080" },
    border: { primary: "#ffffff", secondary: "#ffffff" },
    font: { primary: "#ffffff", secondary: "#a9abaa" }
  }
};
