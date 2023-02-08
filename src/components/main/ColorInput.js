import { useState } from "react"
import { StyledColorInput } from "./styled/ColorInput.styled";

export default function ColorInput({ }) {

    const [color, setColor] = useState("");

// set color state
    function setColorChoice(e) {
        const color = e.target.value;
        setColor(color);
    }


  return (
    <StyledColorInput>
        <div className="color-select-header">
            <button className="color-select-close">×</button>
        </div>
        
        <div onChange={setColorChoice} className="color-options">
            <label  className="color-option">
                <input type="radio" name="color" value="#d00000" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#e85d04" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#ffaa00" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#ffd300" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#a1ff0a" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#38b000" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#0a9396" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#90e0ef" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#147df5" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#580aff" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#9336fd" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#9381ff" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#d883ff" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#b5179e" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#f72585" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
            <label className="color-option">
                <input type="radio" name="color" value="#ff758f" className="color-option-input"></input>
                <span className="color-selected"></span>
            </label>
        </div>

        <button className="color-submit">Select</button>

    </StyledColorInput>
  )
}
