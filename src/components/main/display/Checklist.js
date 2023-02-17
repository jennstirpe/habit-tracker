import { StyledChecklist } from "../styled/display/Checklist.styled"

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
            return <div
              onClick={() => handleToggleComplete(habit.id)}
              className= "checklist-item"
              style={habit.complete? {"color": "darkGray", "background": "lightGray", "border": `3px solid ${habit.color}`} : {"color": `white`, "background": `${habit.color}`, "border": `2px solid ${habit.color}`}}
              key={habit.id}>
                <p>{habit.name}</p>
              </div>
          })
        }
      </div>
    </StyledChecklist>
    
  )
}
