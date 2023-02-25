import Checklist from "./Checklist";
import DisplayBar from "./DisplayBar";
import { StyledCurrentDay } from "../styled/display/CurrentDay.styled";


export default function CurrentDay({ currentDayChecklist, toggleHabitComplete, updateCurrentAmt, date }) {
  return (
    <StyledCurrentDay>
      <div className="current-day-header">
        <h2>Today</h2>
        <DisplayBar checklist={currentDayChecklist} date={date} />
      </div>
      
        
      <Checklist currentDayChecklist={currentDayChecklist} toggleHabitComplete={toggleHabitComplete} updateCurrentAmt={updateCurrentAmt} />
        
    </StyledCurrentDay>
  )
}
