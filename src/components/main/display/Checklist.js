import { useState } from "react";
import { StyledChecklist } from "../styled/display/Checklist.styled";
import QuantityInput from "../forms/QuantityInput";

export default function Checklist({ currentDayChecklist, toggleHabitComplete, updateCurrentAmt }) {
  const [ quantityFormActive, setQuantityFormActive ] = useState(false);
  const [ activeQuantityHabit, setActiveQuantityHabit ] = useState({})
  const todaysHabits = currentDayChecklist;

  function handleToggleComplete(id) {
    toggleHabitComplete(id)
  }

  function openQuantityInputForm(habit) {
    setActiveQuantityHabit(habit)
    setQuantityFormActive(true)
  }

  function closeQuantityInputForm(id) {
    setQuantityFormActive(false)
  }

  return (
    <StyledChecklist>
    
      <div className="checklist">
        {
          todaysHabits && todaysHabits.map(habit => {
            if (habit.type === "check") {
              return <div
                onClick={() => handleToggleComplete(habit.id)}
                className= "checklist-item"
                style={habit.complete? {"color": "darkGray", "background": "lightGray", "border": `3px solid ${habit.color}`} : {"color": `white`, "background": `${habit.color}`, "border": `2px solid ${habit.color}`}}
                key={habit.id}>
                  <p>{habit.name}</p>
                </div>
            } else {
                if (habit.goal.currentAmt === 0) {
                  return <div
                    onClick={() => openQuantityInputForm(habit)}
                    className= "checklist-item"
                    style={{"border": `3px solid ${habit.color}`}}
                    key={habit.id}>
                      <p>{habit.name}</p>
                    </div>
                } else if (habit.goal.currentAmt >= habit.goal.goalAmt) {
                  return <div
                    onClick={() => openQuantityInputForm(habit)}
                    className= "checklist-item"
                    style={{"color": "darkGray", "background": "lightGray", "border": `3px solid ${habit.color}`}}
                    key={habit.id}>
                      <p>{habit.name}</p>
                    </div>
                } else {
                  let percentageComplete = Math.round(habit.goal.currentAmt / habit.goal.goalAmt * 100);
                  if (percentageComplete < 10) {
                    percentageComplete = 10;
                  }

                  return <div
                    onClick={() => openQuantityInputForm(habit)}
                    className= "checklist-item"
                    style={percentageComplete < 50 ? {"background": `${habit.color}${percentageComplete}`, "border": `3px solid ${habit.color}`} : {"color": "white", "background": `${habit.color}${percentageComplete}`, "border": `3px solid ${habit.color}`}}
                    key={habit.id}
                    >
                      <p>{habit.name}</p>
                    </div>
                }
            }
          })
        }
        {
          quantityFormActive && <QuantityInput closeQuantityInputForm={closeQuantityInputForm} updateCurrentAmt={updateCurrentAmt} habit={activeQuantityHabit} />
        }
      </div>
    </StyledChecklist>
    
  )
}


