import { useState } from "react";

import GlobalStyles from "./components/global/styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes.js';

import ThemeToggler from "./components/header/ThemeToggler";
import Checklist from "./components/main/Checklist";
import ColorInput from "./components/main/ColorInput";



function App() {

  const today = new Date().toLocaleDateString();
  const [date, setDate] = useState(today);

  // SET THEME
  const [colorTheme, setColorTheme] = useState('light');
  // toggle theme
  function toggleTheme() {
    if (colorTheme === "dark") {
      setColorTheme('light');
    } else if (colorTheme === 'light') {
      setColorTheme('dark');
    }
  }

  const [ habits, setHabits ] = useState([
    { // CHECK EXAMPLE
      id: 1,
      habit: {
        name: "Tidy room",
        color: "#f72585",
        type: "check",
      },
      complete: false,
    },
    { // CHECK EXAMPLE
      id: 2,
      habit: {
        name: "Skincare",
        color: "#0a9396",
        type: "check",
      },
      complete: true,
    },
    { // CHECK EXAMPLE
      id: 3,
      habit: {
        name: "Make bed",
        color: "#d883ff",
        type: "check",
      },
      complete: true,
    },
    { // CHECK EXAMPLE
      id: 4,
      habit: {
        name: "Vitamins",
        color: "#d00000",
        type: "check",
      },
      complete: false,
    },
  ]);


  function toggleHabitComplete(id) {
    const updatedHabits = [...habits];
    const selectedHabit = updatedHabits.find(habit => habit.id === id);
    selectedHabit.complete = !selectedHabit.complete;
    setHabits(updatedHabits);
  }

  return (
    <ThemeProvider theme={colorTheme === 'light' ? lightTheme : darkTheme} >
    <>
      <GlobalStyles />

      <header>
        <ThemeToggler toggleTheme={toggleTheme} colorTheme={colorTheme} />
        <h1>Habit Tracker</h1>
        <span>Build habits effectively and stay on track</span>
      </header>

    
      <Checklist date={date} habits={habits} toggleHabitComplete={toggleHabitComplete} />
    




      
      
    </>
    </ThemeProvider>
  );
}

export default App;
