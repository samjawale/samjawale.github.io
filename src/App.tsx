import { useState } from "react";
import { DefaultTheme, ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import AppLayout from "./components/AppLayout";
import { darkTheme, lightTheme } from "./helpers/style";
import { ThemeKind } from "./types/style";

const App = () => {
  const [currentTheme, setCurrentTheme] = useState<DefaultTheme>(lightTheme);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyle {...currentTheme} />
      <AppLayout
        toggleTheme={() =>
          setCurrentTheme(
            currentTheme.kind === ThemeKind.LIGHT ? darkTheme : lightTheme
          )
        }
      />
    </ThemeProvider>
  );
};

export default App;
