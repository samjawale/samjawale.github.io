import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "@/components/styles/GlobalStyle";
import AppLayout from "@/components/AppLayout";
import Page500 from "@/components/pages/error/Page500";
import { darkTheme, lightTheme } from "@/helpers/styles";
import useThemeDetector from "@/hooks/useThemeDetector";
import { ThemeKind } from "@/types/style";

const App = () => {
  const isSystemThemeDark = useThemeDetector();
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(isSystemThemeDark ? darkTheme : lightTheme);

  return (
    <ErrorBoundary FallbackComponent={Page500}>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <GlobalStyle {...currentTheme} />
          <AppLayout
            isDarkTheme={currentTheme.kind === ThemeKind.DARK}
            toggleTheme={() => setCurrentTheme(currentTheme.kind === ThemeKind.DARK ? lightTheme : darkTheme)}
          />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
