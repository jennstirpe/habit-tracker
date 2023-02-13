import { StyledDisplayBar } from "./styled/DisplayBar.styled"

export default function DisplayBar({ checklist }) {
  return (
    <StyledDisplayBar>
        {
            checklist.map(habit => {
                if(habit.complete) {
                    return <div className="habit-box" key={habit.id} style={{'background' : `${habit.color}`}}></div>
                } else {
                    return <div className="habit-box" key={habit.id}></div>
                }
            })
        }
    </StyledDisplayBar>
  )
}
