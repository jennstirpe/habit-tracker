import { useEffect, useState } from "react";

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

  const [ currentDayChecklist, setCurrentDayChecklist ] = useState({
    date: "2/8/2023",
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
        complete: false
      }
    ]
  });


  // const [ currentDayChecklist, setCurrentDayChecklist ] = useState({});

  // function setNewDay() {
  //   const copyHabitsList = [...habitsList];

  //   const newHabitsList = copyHabitsList.map(habit => {
  //     const newId = habit.name;
  //     return { id: newId, name: habit.name, color: habit.color, complete: false }
  //   })

  //   setCurrentDayChecklist({date: date, habits: [... newHabitsList]})
  // }

  // useEffect(() => {
  //   if(currentDayChecklist.date === date) {
  //     return
  //   } else {
  //     setNewDay()
  //   }
  // }, [])

  // useEffect(() => {
  //   if(currentDayChecklist.date) {
  //     console.log(currentDayChecklist)
  //   }
  // }, [currentDayChecklist])


  // function toggleHabitComplete(id) {
  //   const checklistCopy = currentDayChecklist;
    
  //   const todaysHabits = [...checklistCopy.habits.slice()];
    
  //   const selectedHabit = todaysHabits.find(habit => habit.id === id);
  //   console.log(selectedHabit)
  //   // console.log(currentDayChecklist)
  //   selectedHabit.complete = !selectedHabit.complete;
  //   console.log(selectedHabit)
  //   console.log(currentDayChecklist)


  //   // console.log(currentDayChecklist)
  //   // setCurrentDayChecklist(todaysHabits);
  //   // console.log(currentDayChecklist)
  // }

  function toggleHabitComplete(id) {
    
    const todaysHabits = structuredClone(currentDayChecklist.habits);
    // console.log(checklistClone)

    // const todaysHabits = checklistClone.habits;
    // console.log(todaysHabits)
    
    const selectedHabit = todaysHabits.find(habit => habit.id === id);
    console.log(selectedHabit)
    console.log(todaysHabits)
    selectedHabit.complete = !selectedHabit.complete;
    console.log(selectedHabit)
    console.log(todaysHabits)


    // console.log(currentDayChecklist)
    // setCurrentDayChecklist(todaysHabits);
    // console.log(currentDayChecklist)
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
