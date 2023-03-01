import { useState } from "react";
import { StyledInitialSetupForm } from "../styled/forms/InitialSetupForm.styled";
import NewHabitInput from "./NewHabitInput";
import EditHabitForm from "./EditHabitForm";


export default function InitialSetupForm() {
  const [habitsList, setHabitsList] = useState([])

  const [ tempHabitsList, setTempHabitsList ] = useState([
    { 
      id: 100,
      name: "Tidy room",
      color: "#f72585",
      type: "check",
    },
    { 
      id: 200,
      name: "Skincare",
      color: "#0a9396",
      type: "check",
    },
    { 
      id: 300,
      name: "Make bed",
      color: "#d883ff",
      type: "check",
    },
    { 
      id: 400,
      name: "Vitamins",
      color: "#d00000",
      type: "check",
    },
    { 
      id: 500,
      name: "Drink Water",
      color: "#ffaa00",
      type: "quantity",
      goal: {
        amt: 80,
        unit: "ounces"
      }
    },
  ]);

  const [ editFormActive, setEditFormActive ] = useState(false);
  const [ editHabit, setEditHabit ] = useState({});

  function addHabitToList(habitName, habitColor, habitType, habitGoalAmt, habitGoalUnit) {

    const tempListCopy = [...tempHabitsList];
    let newHabit;

    const newId= habitName;

    if (habitType === "check") {
      newHabit = { id: newId, name: habitName, color: habitColor, type: habitType }
    } else {
      newHabit = { id: newId, name: habitName, color: habitColor, type: habitType, goal: { amt: habitGoalAmt, unit: habitGoalUnit } }
    }

    setTempHabitsList([newHabit, ...tempListCopy])
  }


  function toggleEditForm(habit) {
    setEditHabit(habit);
    setEditFormActive(true);
    console.log(habit)
  }


  return (
    <StyledInitialSetupForm>
      <h2>Add habits</h2>
      <NewHabitInput addHabitToList={addHabitToList} />

      {
        habitsList.length == 0 && (
          <div className="temp-habits">

            <ul className="temp-habits-list">
              {
                tempHabitsList.map(habit => {
                  return <li key={habit.id} className="temp-habits-list-item" style={{"border": `2px solid ${habit.color}50`}}>
                    <div className="temp-list-item-color" style={{"background": `${habit.color}`}}></div>
                    <p className="temp-list-item-name">{habit.name}</p>
                    {
                      habit.type === "quantity" && <p className="temp-list-item-details">{habit.goal.amt}</p> 
                    }
                    <button onClick={() => toggleEditForm(habit)} className="temp-list-item-btn" aria-label="edit">
                      <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M343.029 42.3419C352.402 32.9693 367.598 32.9694 376.971 42.3419L469.657 135.028C479.029 144.401 479.029 159.597 469.657 168.969L179.462 459.164C179.006 459.633 178.521 460.073 178.011 460.482C176 462.099 173.688 463.158 171.283 463.66C170.898 463.741 170.509 463.808 170.115 463.86L50.1148 479.86C45.175 480.519 40.2103 478.838 36.6864 475.314C33.1626 471.79 31.4819 466.826 32.1405 461.886L48.1164 342.066C48.5312 338.637 50.0545 335.317 52.6863 332.685L343.029 42.3419ZM393.372 199.999L167.999 425.372L86.6267 344L312 118.627L393.372 199.999ZM416 177.372L441.373 151.999L360 70.6262L334.627 95.9992L416 177.372ZM75.5807 378.208L66.6251 445.376L133.792 436.42L75.5807 378.208Z" fill="black"/></svg>
                    </button>
                    </li>
                })
              }
            </ul>

              { 
              editFormActive && <EditHabitForm habit={editHabit} />
              }
              
              
            <button className="temp-habits-finish">Done</button>
          </div>
        )
      }

    </StyledInitialSetupForm>
  )
}
