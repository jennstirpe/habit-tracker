import { useEffect, useState } from "react";
import _ from "lodash";

import GlobalStyles from "./components/global/styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes.js';

import ThemeToggler from "./components/header/ThemeToggler";
import Checklist from "./components/main/Checklist";
import ColorInput from "./components/main/ColorInput";
import CurrentDay from "./components/main/CurrentDay";



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

  const [ habitsList, setHabitsList ] = useState([
    { 
      id: 1,
      name: "Tidy room",
      color: "#f72585",
      type: "check",
    },
    { 
      id: 2,
      name: "Skincare",
      color: "#0a9396",
      type: "check",
    },
    { 
      id: 3,
      name: "Make bed",
      color: "#d883ff",
      type: "check",
    },
    { 
      id: 4,
      name: "Vitamins",
      color: "#d00000",
      type: "check",
    },
  ]);

  const [ currentDayChecklist, setCurrentDayChecklist ] = useState([
      {
        id: 'Tidy room',
        name: "Tidy Room",
        color: "#f72585",
        complete: false
      },
      {
        id: 'Skincare',
        name: "Skincare",
        color: "#0a9396",
        complete: false
      }
    ]);


    /* @ START OF NEW DAY, RESET CURRENTDAYCHECKLIST */

  // function setNewDay() {
  //   const copyHabitsList = [...habitsList];

  //   const newHabitsList = copyHabitsList.map(habit => {
  //     const newId = habit.name;
  //     return { id: newId, name: habit.name, color: habit.color, complete: false }
  //   })

    
  //   setCurrentDayChecklist(newHabitsList)
  // }

  // useEffect(() => {
  //   if(currentDayChecklist.date === date) {
  //     return
  //   } else {
  //        // CREATE NEW DAY OBJECT AND PUSH TO HISTORY
  //     setNewDay()
  //   }
  // }, [])




  function toggleHabitComplete(id) {
    setCurrentDayChecklist(currentDayChecklist.map(habit => {
      if(habit.id === id) {
        return {...habit, complete: !habit.complete}
      } else {
        return habit
      }
    }))
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

      {
        currentDayChecklist && <CurrentDay currentDayChecklist={currentDayChecklist} toggleHabitComplete={toggleHabitComplete} />
      }
      
    </>
    </ThemeProvider>
  );
}

export default App;
