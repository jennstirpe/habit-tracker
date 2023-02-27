import { useState, useRef } from "react";
import { StyledNewHabitInput } from "../styled/forms/NewHabitInput.styled";
import ColorInput from "./ColorInput";

export default function NewHabitInput() {
    const [colorInputActive, setColorInputActive] = useState(false);
    const [habitColor, setHabitColor] = useState("");
    const [habitType, setHabitType] = useState("quantity");

    const quantityGoalInput = useRef();
    const quantityUnitInput = useRef();

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
        <input className="habit-name" type="text" placeholder="Habit Name" maxLength="20" />
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
        {
            habitType === "quantity" && (
                <div className="habit-quantity-values">
                    <label className="habit-quantity-label">
                        Goal
                        <input ref={quantityGoalInput} className="habit-quantity-input" type="number" placeholder="Enter your goal amount" />
                    </label>
                    <label className="habit-quantity-label">
                        Goal Type
                        <input ref={quantityUnitInput} className="habit-quantity-input" type="text" placeholder="eg. steps, ounces, cups, etc" />
                    </label>
                </div>
            )
        }
        
        <button className="habit-submit" aria-label="Add new habit">+</button>
    </StyledNewHabitInput>
  )
}
