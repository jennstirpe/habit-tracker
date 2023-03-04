import { useState, useRef } from "react";
import { StyledNewHabitInput } from "../styled/forms/NewHabitInput.styled";
import ColorInput from "./ColorInput";

export default function NewHabitInput({ addHabitToList }) {
    const [colorInputActive, setColorInputActive] = useState(false);

    const habitName = useRef();
    const [habitColor, setHabitColor] = useState("");
    const [habitType, setHabitType] = useState("check");
    const habitTypeInput = useRef();
    const quantityGoalInput = useRef();
    
    

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

    function changeHabitType() {
        if (habitTypeInput.current.value === "check") {
            setHabitType("check")
        } else {
            setHabitType("quantity")
        }
    }

    function handleSubmitNewHabit(e) {
        e.preventDefault();

        const name = habitName.current.value;
        const color = habitColor;
        const type = habitType;

        if(!name || !color ) {
            return
        } else if (type === "quantity") {
            const goal = quantityGoalInput.current.value;

            if(!goal) {
                return
            } else {
                addHabitToList(name, color, type, goal);
                habitName.current.value = "";
                setHabitColor("#fff");
                quantityGoalInput.current.value = "";
            }
        } else if (type === "check"){
            addHabitToList(name, color, type);
            habitName.current.value = "";
            setHabitColor("#fff");
        }
    }

    

  return (
    <StyledNewHabitInput>
        <input ref={habitName} className="habit-name" type="text" placeholder="Habit Name" maxLength="20" />
        <div className="habit-specs">
            <button className="habit-color" onClick={openColorInput} aria-label="Color selector" style={habitColor ? {"background" : `${habitColor}`} : {"background" : `${({theme}) => theme.colors.bgSecondary}`}}></button>
            {
                colorInputActive && <ColorInput closeColorInput={closeColorInput} setSelectedColor={setSelectedColor} />
            }
            <select name="habit-type" id="habit-type" ref={habitTypeInput} onChange={changeHabitType}>
                <option value="" defaultValue disabled>Habit Type</option>
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
                </div>
            )
        }
        
        <button onClick={handleSubmitNewHabit} className="habit-submit" aria-label="Add new habit">+</button>
    </StyledNewHabitInput>
  )
}
