import { useState, useRef } from "react";
import { StyledEditHabitForm } from "../styled/forms/EditHabitForm.styled";
import ColorInput from "./ColorInput";

export default function EditHabitForm({ habit }) {
  const [colorInputActive, setColorInputActive] = useState(false);
  const [habitColor, setHabitColor] = useState(habit.color);

  function openColorInput(e) {
    e.preventDefault();
    setColorInputActive(true)
  }

  function closeColorInput() {
    setColorInputActive(false)
  }

  function setSelectedColor(color) {
    setHabitColor(color)
    closeColorInput()
  }


  return (
    <StyledEditHabitForm>
   
        <input className="edit-name" type="text" placeholder={habit.name} />
        {
          habit.type === "quantity" && <input className="edit-details" placeholder={habit.goal.amt} />
        }
        <div onClick={openColorInput} className="edit-color" style={{"background": `${habitColor}`}}></div>

        {
          colorInputActive && <ColorInput closeColorInput={closeColorInput} setSelectedColor={setSelectedColor} />
        }
        

        <div className="edit-btns">
          <button className="edit-btn update">&#x2713;</button>
          <button className="edit-btn delete">
            <svg id="i-trash" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"  fill="none" stroke="#000" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M28 6 L6 6 8 30 24 30 26 6 4 6 M16 12 L16 24 M21 12 L20 24 M11 12 L12 24 M12 6 L13 2 19 2 20 6" /></svg>
          </button>
        </div>
        
    </StyledEditHabitForm>
  )
}


