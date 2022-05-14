import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import AppLayout from "./components/AppLayout";
import { darkTheme, lightTheme } from "./helpers/style";
import { ThemeKind } from "./types/style";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <BrowserRouter>
      <ThemeProvider theme={currentTheme}>
        <GlobalStyle {...currentTheme} />
        <AppLayout
          isDarkTheme={currentTheme.kind === ThemeKind.DARK}
          toggleTheme={() =>
            setCurrentTheme(
              currentTheme.kind === ThemeKind.LIGHT ? darkTheme : lightTheme
            )
          }
        />
      </ThemeProvider>
    </BrowserRouter>
  );
};

export default App;
