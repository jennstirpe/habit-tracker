import { StyledDisplayBar } from "../styled/display/DisplayBar.styled"

export default function DisplayBar({ checklist }) {

  return (

    <StyledDisplayBar>
        {
            checklist.map(habit => {
                if (habit.type === "check") {
                    if(habit.complete) {
                        return <div className="habit-box" key={habit.id} style={{'background' : `${habit.color}`}}></div>
                    } else {
                        return <div className="habit-box" key={habit.id}></div>
                    }
                } else {
                    if (habit.goal.currentAmt === 0) {
                        return <div className="habit-box" key={habit.id}></div>
                    } else if (habit.goal.currentAmt >= habit.goal.goalAmt) {
                        return <div className="habit-box" key={habit.id} style={{'background' : `${habit.color}`}}></div>
                    } else {
                        let percentageComplete = Math.round(habit.goal.currentAmt / habit.goal.goalAmt * 100);
                        if (percentageComplete < 10) {
                            percentageComplete = 10;
                        }

                        return <div className="habit-box" key={habit.id} style={{'background' : `${habit.color}${percentageComplete}`}}></div>
                    }
                    
                }
                
            })
        }
    </StyledDisplayBar>
  )
}
