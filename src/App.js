import { useEffect, useState } from "react";
import _ from "lodash";
import { v4 as uuidv4 } from 'uuid';

import GlobalStyles from "./components/global/styled/Global";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from './themes.js';

import ThemeToggler from "./components/header/ThemeToggler";
import CurrentDay from "./components/main/display/CurrentDay";
import History from "./components/main/display/History";
import SetupForm from "./components/main/forms/SetupForm";

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
  // const [ habitsList, setHabitsList ] = useState([]);
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
    { 
      id: 5,
      name: "Drink Water",
      color: "#ffaa00",
      type: "quantity",
      goal: {
        amt: 80,
        unit: "ounces"
      }
    },
  ]);



  function setHabits(list) {
    setHabitsList(list);
  }

  useEffect(() => {
    setNewDay()
  }, [habitsList])
  

/* CURRENT DAY CHECKLIST */
  // const [ currentDayChecklist, setCurrentDayChecklist ] = useState([]);

  const [ currentDayChecklist, setCurrentDayChecklist ] = useState([
    { 
      id: 1000,
      name: "Tidy room",
      color: "#f72585",
      type: "check",
      complete: false
    },
    { 
      id: 2000,
      name: "Skincare",
      color: "#0a9396",
      type: "check",
      complete: true
    },
    { 
      id: 3000,
      name: "Make bed",
      color: "#d883ff",
      type: "check",
      complete: false
    },
    { 
      id: 4000,
      name: "Vitamins",
      color: "#d00000",
      type: "check",
      complete: true
    },
    { 
      id: 6000,
      name: "Drink Water",
      color: "#ffaa00",
      type: "quantity",
      goal: {
        currentAmt: 40,
        goalAmt: 80,
        unit: "ounces"
      },
      complete: false
    },
    { 
      id: 7000,
      name: "10,000 Steps",
      color: "#147df5",
      type: "quantity",
      goal: {
        currentAmt: 7500,
        goalAmt: 10000,
        unit: "steps"
      },
      complete: false
    },
  ]);
  

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
      if (habit.type === "check") {
        return { id: uuidv4(), name: habit.name, color: habit.color, type: habit.type, complete: false }
      } else {
        return { id: uuidv4(), name: habit.name, color: habit.color, type: habit.type, goal: { currentAmt: 0, goalAmt: habit.goal.amt}, complete: false }
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

        
          {/* <div>buttons</div>
          <div>info(reset)</div>
          <div>tools</div>
          <div>{currentTime}</div> */}
      </header>

      

      {
        habitsList.length === 0 && <SetupForm habitList={[]} setHabits={setHabits} />
      }

      {
        habitsList.length > 0 && (
          <main>

            {
              currentDayChecklist && <CurrentDay currentDayChecklist={currentDayChecklist} toggleHabitComplete={toggleHabitComplete} updateCurrentAmt={updateCurrentAmt} date={date} habitList={habitsList} setHabits={setHabits} />
            }

            <History history={history} date={date} />
          </main>
        )
      } 
      
    </>
    </ThemeProvider>
  );
}

export default App;
