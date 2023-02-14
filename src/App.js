import { useEffect, useState } from "react";
import _ from "lodash";

import GlobalStyles from "./components/global/styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes.js';

import ThemeToggler from "./components/header/ThemeToggler";
import Checklist from "./components/main/Checklist";
import ColorInput from "./components/main/ColorInput";
import CurrentDay from "./components/main/CurrentDay";
import History from "./components/main/History";



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

  // const [ currentDayChecklist, setCurrentDayChecklist ] = useState([
  //     {
  //       id: 'Tidy room',
  //       name: "Tidy Room",
  //       color: "#f72585",
  //       complete: false
  //     },
  //     {
  //       id: 'Skincare',
  //       name: "Skincare",
  //       color: "#0a9396",
  //       complete: false
  //     }
  //   ]);

  const [ currentDayChecklist, setCurrentDayChecklist ] = useState([]);

  const [ history, setHistory ] = useState([
    {
      id: "33",
      date: "2/12/2023",
      habits: [
        {
          id: 'Tidy room',
          name: "Tidy Room",
          color: "#f72585",
          complete: true
        },
        {
          id: 'Skincare',
          name: "Skincare",
          color: "#0a9396",
          complete: false
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          complete: true
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          complete: false
        },
      ]
    },
    {
      id: "22",
      date: "2/11/2023",
      habits: [
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
          complete: true
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          complete: true
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          complete: true
        },
      ]
    },
    {
      id: "11",
      date: "2/10/2023",
      habits: [
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
          complete: true
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          complete: false
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          complete: true
        },
      ]
    },
    
    
  ]);


    /* @ START OF NEW DAY, RESET CURRENTDAYCHECKLIST */

  function setNewDay() {
    const copyHabitsList = [...habitsList];

    const newHabitsList = copyHabitsList.map(habit => {
      const newId = habit.name;
      return { id: newId, name: habit.name, color: habit.color, complete: false }
    })

    
    setCurrentDayChecklist(newHabitsList)
  }

  useEffect(() => {
    if(currentDayChecklist.date === date) {
      return
    } else {
         // CREATE NEW DAY OBJECT AND PUSH TO HISTORY
      setNewDay()
    }
  }, [])




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
        currentDayChecklist && <CurrentDay currentDayChecklist={currentDayChecklist} toggleHabitComplete={toggleHabitComplete} date={date} />
      }

      <History history={history} />
      
    </>
    </ThemeProvider>
  );
}

export default App;
