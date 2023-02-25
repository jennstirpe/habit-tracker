import { useRef } from "react";
import { StyledQuantityInput } from "../styled/forms/QuantityInput.styled";

export default function QuantityInput({ closeQuantityInputForm, updateCurrentAmt, habit }) {

  const newCurrentAmt = useRef();

  function updateAndClose(e) {
    e.preventDefault()
    if (newCurrentAmt.current.value) {
      updateCurrentAmt(newCurrentAmt.current.value, habit.id);
    }
    closeQuantityInputForm()
  }

  return (
    <StyledQuantityInput style={{"border": `3px solid ${habit.color}`}}>
      
      <h3>{habit.name}</h3>

      <input ref={newCurrentAmt} type="number"/>
      <button aria-label="increase">+</button>
      <button aria-label="decrease">-</button>
      <span>{habit.goal.currentAmt} / {habit.goal.goalAmt}{habit.goal.unit}</span>

      <button onClick={updateAndClose} >Update</button>
      </StyledQuantityInput>
  )
}
