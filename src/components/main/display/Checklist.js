import { StyledChecklist } from "../styled/display/Checklist.styled";
import QuantityInput from "../forms/QuantityInput";

export default function Checklist({ currentDayChecklist, toggleHabitComplete }) {

  const todaysHabits = currentDayChecklist;
  


  function handleToggleComplete(id) {
    toggleHabitComplete(id)
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
                    onClick={() => handleToggleComplete(habit.id)}
                    className= "checklist-item"
                    style={{"border": `3px solid ${habit.color}`}}
                    key={habit.id}>
                      <p>{habit.name}</p>
                    </div>
                } else if (habit.goal.currentAmt === habit.goal.goalAmt) {
                  return <div
                    onClick={() => handleToggleComplete(habit.id)}
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
                    onClick={() => handleToggleComplete(habit.id)}
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
          // <QuantityInput />
        }
      </div>
    </StyledChecklist>
    
  )
}


