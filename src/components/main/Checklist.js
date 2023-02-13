import { StyledChecklist } from "./styled/Checklist.styled"

export default function Checklist({ currentDayChecklist, toggleHabitComplete }) {

  const todaysHabits = currentDayChecklist;


  function handleToggleComplete(id) {
    toggleHabitComplete(id)
  }

  return (
    <StyledChecklist>
      <h2 className="checklist-header">Checklist for <span className="checklist-date">{currentDayChecklist.date}</span></h2>
    
      <div className="checklist">
        {
          todaysHabits && todaysHabits.map(habit => {
            return <div
              onClick={() => handleToggleComplete(habit.id)}
              className= "checklist-item"
              style={{"border": `2px solid ${habit.color}`, "color": `${habit.color}`}}
              style={habit.complete? {"color": "darkGray", "background": "lightGray", "border": "2px solid darkGray"} : {"color": `white`, "background": `${habit.color}`, "border": `2px solid ${habit.color}`}}
              key={habit.id}>
                <p>{habit.name}</p>
              </div>
          })
        }
      </div>
    </StyledChecklist>
    
  )
}
