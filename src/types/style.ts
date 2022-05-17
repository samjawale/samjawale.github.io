export enum ThemeKind {
  LIGHT,
  DARK
}

interface Color {
  primary: string;
  secondary: string;
}

export interface CustomTheme {
  kind: ThemeKind;
  fontFamily: string;
  color: {
    background: Color;
    border: Color;
    font: Color;
  };
}
