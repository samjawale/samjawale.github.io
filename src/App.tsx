import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import AppLayout from "./components/AppLayout";
import { darkTheme, lightTheme } from "./helpers/style";
import useThemeDetector from "./hooks/useThemeDetector";
import { ThemeKind } from "./types/style";

const App = () => {
  const isSystemThemeDark = useThemeDetector();
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(isSystemThemeDark ? darkTheme : lightTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <BrowserRouter>
        <GlobalStyle {...currentTheme} />
        <AppLayout
          isDarkTheme={currentTheme.kind === ThemeKind.DARK}
          toggleTheme={() => setCurrentTheme(currentTheme.kind === ThemeKind.DARK ? lightTheme : darkTheme)}
        />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
