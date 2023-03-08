import { useState } from "react";
import Checklist from "./Checklist";
import DisplayBar from "./DisplayBar";
import { StyledCurrentDay } from "../styled/display/CurrentDay.styled";
import SetupForm from "../forms/SetupForm";


export default function CurrentDay({ currentDayChecklist, toggleHabitComplete, updateCurrentAmt, date, habitList, setHabits }) {

  const [editFormActive, setEditFormActive] = useState(false);

  function openEdit() {
    setEditFormActive(true);
  }

  function closeEdit() {
    setEditFormActive(false);
  }

  function handleSetHabits(list) {
    setHabits(list);
    closeEdit()
  }

  return (
    <StyledCurrentDay>
      <button onClick={openEdit}>Edit</button>
      <div className="current-day-header">
        <h2>Today</h2>
        <DisplayBar checklist={currentDayChecklist} date={date} />
      </div>

      {
        editFormActive && 
        <div className="current-day-edit-form">
          <SetupForm habitList={habitList} setHabits={handleSetHabits} />
        </div>
        

      }
      
        
      <Checklist currentDayChecklist={currentDayChecklist} toggleHabitComplete={toggleHabitComplete} updateCurrentAmt={updateCurrentAmt} />
        
    </StyledCurrentDay>
  )
}
