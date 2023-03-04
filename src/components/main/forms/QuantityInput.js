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
      
      <div className="quantity-form-header">
        <button onClick={() => closeQuantityInputForm()} className="quantity-form-close" aria-label="Close color selector">×</button>
        <h3 className="quantity-form-title">{habit.name}</h3>
        <span className="quantity-form-display">{habit.goal.currentAmt} / {habit.goal.goalAmt} {habit.goal.unit}</span>
      </div>
      
      <input className="quantity-form-input" ref={newCurrentAmt} type="number" />
      
      <button className="quantity-form-update-btn" onClick={updateAndClose} >Add</button>
      </StyledQuantityInput>
  )
}
