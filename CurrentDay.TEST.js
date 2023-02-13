import { StyledCurrentDay } from "./styled/CurrentDay.styled";
import Checklist from "./Checklist";

export default function CurrentDay({ date, habits, toggleHabitComplete }) {
  return (
    <StyledCurrentDay>
        
        <Checklist date={date} habits={habits} toggleHabitComplete={toggleHabitComplete} />

        
        
    </StyledCurrentDay>
  )
}
