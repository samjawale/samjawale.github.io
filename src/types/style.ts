export enum ThemeKind {
  LIGHT,
  DARK
}

export interface CustomTheme {
  kind: ThemeKind;
  fontFamily: string;
  color: {
    background: string;
    border: string;
    primary: string;
    secondary: string;
  };
}
