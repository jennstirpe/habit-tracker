import { StyledChecklist } from "./styled/Checklist"

export default function Checklist({ date, habits, toggleHabitComplete }) {

  function hangleToggleComplete(id) {
    toggleHabitComplete(id)
  }

  return (
    <StyledChecklist>
      <h2 className="checklist-header">Checklist for <span className="checklist-date">{date}</span></h2>

      <div className="checklist">
        {
          habits.map(habit => {
            return <div
              onClick={() => hangleToggleComplete(habit.id)}
              className= "checklist-item"
              style={{"border": `2px solid ${habit.habit.color}`, "color": `${habit.habit.color}`}}
              style={habit.complete? {"color": "darkGray", "background": "lightGray", "border": "2px solid darkGray"} : {"color": `white`, "background": `${habit.habit.color}`, "border": `2px solid ${habit.habit.color}`}}
              key={habit.id}>
                <p>{habit.habit.name}</p>
              </div>
          })
        }
      </div>
    </StyledChecklist>
    
  )
}
