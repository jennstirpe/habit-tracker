import Checklist from "./Checklist";
import DisplayBar from "./DisplayBar";
import { StyledCurrentDay } from "./styled/CurrentDay.styled";

export default function CurrentDay({ currentDayChecklist, toggleHabitComplete }) {
  return (
    <StyledCurrentDay>
        
        <Checklist currentDayChecklist={currentDayChecklist} toggleHabitComplete={toggleHabitComplete} />
        
        <DisplayBar checklist={currentDayChecklist} />
        
    </StyledCurrentDay>
  )
}
