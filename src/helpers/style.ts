import { DefaultTheme } from "styled-components";
import { ThemeKind } from "../types/style";

export const lightTheme: DefaultTheme = {
  kind: ThemeKind.LIGHT,
  fontFamily: "Helvetica Neue",
  color: {
    background: "#ffffff",
    border: "grey",
    primary: "#000",
    secondary: "#fff"
  }
};

export const darkTheme: DefaultTheme = {
  ...lightTheme,
  kind: ThemeKind.DARK,
  color: {
    ...lightTheme.color,
    background: "#000000",
    primary: "#fff",
    secondary: "#000"
  }
};
