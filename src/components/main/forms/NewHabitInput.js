import { useState } from "react";
import { StyledNewHabitInput } from "../styled/forms/NewHabitInput.styled";
import ColorInput from "./ColorInput";

export default function NewHabitInput() {
    const [colorInputActive, setColorInputActive] = useState(false);
    const [habitColor, setHabitColor] = useState("");

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
    <StyledNewHabitInput>
        <h2>Create habits</h2>
        <input className="habit-name" type="text" placeholder="Habit Name" />
        <div className="habit-specs">
            <button className="habit-color" onClick={openColorInput} aria-label="Color selector" style={habitColor ? {"background" : `${habitColor}`} : {"background" : `${({theme}) => theme.colors.bgSecondary}`}}></button>
            {
                colorInputActive && <ColorInput closeColorInput={closeColorInput} setSelectedColor={setSelectedColor} />
            }
            <select name="habit-type" id="habit-type">
                <option value="" disabled>Habit Type</option>
                <option value="check">Yes/No</option>
                <option value="quantity">Quantity</option>
            </select>
        </div>
            
        
        <button className="habit-submit" aria-label="Add new habit">+</button>
    </StyledNewHabitInput>
  )
}
