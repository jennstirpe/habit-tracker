import { useState } from "react";

import GlobalStyles from "./components/styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes.js';

import ThemeToggler from "./components/ThemeToggler";


function App() {

  const [colorTheme, setColorTheme] = useState('light');
  // toggle theme
  function toggleTheme() {
    if (colorTheme === "dark") {
      setColorTheme('light');
    } else if (colorTheme === 'light') {
      setColorTheme('dark');
    }
  }


  return (
    <ThemeProvider theme={colorTheme === 'light' ? lightTheme : darkTheme} >
    <>
      <GlobalStyles />

      <header>
        <ThemeToggler toggleTheme={toggleTheme} colorTheme={colorTheme} />
      </header>

      <main>
        <h2>test</h2>
      </main>
      
    </>
    </ThemeProvider>
  );
}

export default App;
