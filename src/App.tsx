import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "@/components/styles/GlobalStyle";
import AppLayout from "@/components/AppLayout";
import Page500 from "@/components/pages/error/Page500";
import { darkTheme, lightTheme } from "@/constants/styles";
import useSystemThemeDetector from "@/hooks/useSystemThemeDetector";
import { ThemeKind } from "@/types/style";

const App = () => {
  const isSystemThemeDark = useSystemThemeDetector();
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(isSystemThemeDark ? darkTheme : lightTheme);

  return (
    <ErrorBoundary FallbackComponent={Page500}>
      <ThemeProvider theme={currentTheme}>
        <BrowserRouter>
          <GlobalStyle {...currentTheme} />
          <AppLayout
            toggleTheme={() => setCurrentTheme(currentTheme.kind === ThemeKind.DARK ? lightTheme : darkTheme)}
          />
        </BrowserRouter>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
