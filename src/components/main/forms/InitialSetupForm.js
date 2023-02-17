import { useState } from "react";
import { StyledInitialSetupForm } from "../styled/forms/InitialSetupForm.styled";
import NewHabitInput from "./NewHabitInput";

export default function InitialSetupForm() {
  const [habitsList, setHabitsList] = useState([])



  return (
    <StyledInitialSetupForm>
      <NewHabitInput />

      {
        habitsList.length > 0 && (
          <div className="habits-list">
            <div>
              habits list
            </div>

            <button>Finish</button>
          </div>
        )
      }

      
    </StyledInitialSetupForm>
  )
}