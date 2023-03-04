import { useEffect, useState } from "react";
import _ from "lodash";

import GlobalStyles from "./components/global/styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes.js';

import ThemeToggler from "./components/header/ThemeToggler";
import CurrentDay from "./components/main/display/CurrentDay";
import History from "./components/main/display/History";
import InitialSetupForm from "./components/main/forms/InitialSetupForm";

function App() {

  const today = new Date().toLocaleDateString();
  const [date, setDate] = useState(today);

  

  // CLOCK & TIME TRACKING
  const [currentTime, setCurrentTime] = useState();
  useEffect(() => {
    setInterval(() => {
      const time = new Date().toLocaleTimeString();
      setCurrentTime(time);
    })
  }, [])


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

/* LIST OF HABITS TO TRACK */
  const [ habitsList, setHabitsList ] = useState([]);

  function setHabits(list) {
    setHabitsList(list);
  }

  useEffect(() => {
    setNewDay()
  }, [habitsList])
  

/* CURRENT DAY CHECKLIST */
  const [ currentDayChecklist, setCurrentDayChecklist ] = useState([]);
  

/* TRACKING HISTORY */
  const [ history, setHistory ] = useState([
    {
      id: "33",
      date: "2/12/2023",
      habits: [
        {
          id: 'Tidy room',
          name: "Tidy Room",
          color: "#f72585",
          type: "check",
          complete: true
        },
        {
          id: 'Skincare',
          name: "Skincare",
          color: "#0a9396",
          type: "check",
          complete: false
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          type: "check",
          complete: true
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          type: "check",
          complete: false
        },
        { 
          id: "Drink Water",
          name: "Drink Water",
          color: "#ffaa00",
          type: "quantity",
          goal: {
            currentAmt: 40,
            goalAmt: 80,
          },
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
          type: "check",
          complete: false
        },
        {
          id: 'Skincare',
          name: "Skincare",
          color: "#0a9396",
          type: "check",
          complete: true
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          type: "check",
          complete: true
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          type: "check",
          complete: true
        },
        { 
          id: "Drink Water",
          name: "Drink Water",
          color: "#ffaa00",
          type: "quantity",
          goal: {
            currentAmt: 80,
            goalAmt: 80,
          },
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
          type: "check",
          complete: false
        },
        {
          id: 'Skincare',
          name: "Skincare",
          color: "#0a9396",
          type: "check",
          complete: true
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          type: "check",
          complete: false
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          type: "check",
          complete: true
        },
      ]
    },
    {
      id: "44",
      date: "1/20/2023",
      habits: [
        {
          id: 'Tidy room',
          name: "Tidy Room",
          color: "#f72585",
          type: "check",
          complete: true
        },
        {
          id: 'Skincare',
          name: "Skincare",
          color: "#0a9396",
          type: "check",
          complete: true
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          type: "check",
          complete: true
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          type: "check",
          complete: false
        },
      ]
    },
    {
      id: "100",
      date: "1/12/2023",
      habits: [
        {
          id: 'Tidy room',
          name: "Tidy Room",
          color: "#f72585",
          type: "check",
          complete: true
        },
        {
          id: 'Skincare',
          name: "Skincare",
          color: "#0a9396",
          type: "check",
          complete: false
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          type: "check",
          complete: true
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          type: "check",
          complete: false
        },
      ]
    },
    {
      id: "55",
      date: "12/30/2022",
      habits: [
        {
          id: 'Tidy room',
          name: "Tidy Room",
          color: "#f72585",
          type: "check",
          complete: true
        },
        {
          id: 'Skincare',
          name: "Skincare",
          color: "#0a9396",
          type: "check",
          complete: false
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          type: "check",
          complete: false
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          type: "check",
          complete: false
        },
      ]
    },
    {
      id: "66",
      date: "11/08/2021",
      habits: [
        {
          id: 'Tidy room',
          name: "Tidy Room",
          color: "#f72585",
          type: "check",
          complete: false
        },
        {
          id: 'Skincare',
          name: "Skincare",
          color: "#0a9396",
          type: "check",
          complete: false
        },
        {
          id: 'Make bed',
          name: "Make bed",
          color: "#d883ff",
          type: "check",
          complete: true
        },
        {
          id: 'Vitamins',
          name: "Vitamins",
          color: "#d00000",
          type: "check",
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
      if (habit.type === "check") {
        return { id: newId, name: habit.name, color: habit.color, type: habit.type, complete: false }
      } else {
        return { id: newId, name: habit.name, color: habit.color, type: habit.type, goal: { currentAmt: 0, goalAmt: habit.goal.amt}, complete: false }
      }
      
    })

    
    setCurrentDayChecklist(newHabitsList)
  }

  useEffect(() => {
    if(currentDayChecklist.length > 0) {
      return
    } else {
         // CREATE NEW DAY OBJECT AND PUSH TO HISTORY
      setNewDay()
    }
  }, [])

/* UPDATE CURRENT DAY CHECKLIST  */
  function toggleHabitComplete(id) {
    setCurrentDayChecklist(currentDayChecklist.map(habit => {
      if(habit.id === id) {
       
          return {...habit, complete: !habit.complete}

      } else {
        return habit
      }
    }))
  }

  function updateCurrentAmt(newAmt, id) {
    console.log(newAmt)
    console.log(id)
    
    const newHabits = [...currentDayChecklist];
    const updatedHabit = newHabits.find(habit => habit.id === id);
    updatedHabit.goal.currentAmt = parseInt(updatedHabit.goal.currentAmt) + parseInt(newAmt);

    setCurrentDayChecklist(newHabits);

  }

  function createNewHistoryRecord() {
    const currentDate = new Date();
    const month = currentDate.getMonth() + 1;
    const day = currentDate.getDate() - 1;
    const year = currentDate.getFullYear();
    const habits = [...currentDayChecklist];

    const newRecord  = {
      id: day,
      date: `${month}/${day}/${year}`,
      habits: habits
    }

    console.log(newRecord);

    setHistory([newRecord, ...history]);

    setNewDay()
    
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

      <div>{currentTime}</div>

      {
        habitsList.length === 0 && <InitialSetupForm setHabits={setHabits} />
      }

      {
        habitsList.length > 0 && (
          <main>

            {
              currentDayChecklist && <CurrentDay currentDayChecklist={currentDayChecklist} toggleHabitComplete={toggleHabitComplete} updateCurrentAmt={updateCurrentAmt} date={date} />
            }

            <History history={history} date={date} />
          </main>
        )
      }

      <footer>
          <div>buttons</div>
          <div>info(reset)</div>
          <div>tools</div>
      </footer>
      
    </>
    </ThemeProvider>
  );
}

export default App;
