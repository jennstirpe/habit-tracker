import { useState } from "react";
import { StyledChecklist } from "../styled/display/Checklist.styled";
import QuantityInput from "../forms/QuantityInput";

export default function Checklist({ currentDayChecklist, toggleHabitComplete, updateCurrentAmt, openEdit }) {
  const [ quantityFormActive, setQuantityFormActive ] = useState(false);
  const [ activeQuantityHabit, setActiveQuantityHabit ] = useState({})
  const todaysHabits = currentDayChecklist;

  function handleToggleComplete(id) {
    toggleHabitComplete(id)
  }

  function openQuantityInputForm(habit) {
    setActiveQuantityHabit(habit)
    setQuantityFormActive(true)
  }

  function closeQuantityInputForm(id) {
    setQuantityFormActive(false)
  }

  return (
    <StyledChecklist>

        <button onClick={openEdit} className="edit-form-open" aria-label="Edit habits">
          <svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M343.029 42.3419C352.402 32.9693 367.598 32.9694 376.971 42.3419L469.657 135.028C479.029 144.401 479.029 159.597 469.657 168.969L179.462 459.164C179.006 459.633 178.521 460.073 178.011 460.482C176 462.099 173.688 463.158 171.283 463.66C170.898 463.741 170.509 463.808 170.115 463.86L50.1148 479.86C45.175 480.519 40.2103 478.838 36.6864 475.314C33.1626 471.79 31.4819 466.826 32.1405 461.886L48.1164 342.066C48.5312 338.637 50.0545 335.317 52.6863 332.685L343.029 42.3419ZM393.372 199.999L167.999 425.372L86.6267 344L312 118.627L393.372 199.999ZM416 177.372L441.373 151.999L360 70.6262L334.627 95.9992L416 177.372ZM75.5807 378.208L66.6251 445.376L133.792 436.42L75.5807 378.208Z" fill="black"/></svg>
        </button>

        <ul className="checklist">
        {
          todaysHabits && todaysHabits.map(habit => {
            if (habit.type === "check") {
              return <li
                onClick={() => handleToggleComplete(habit.id)}
                className= "checklist-item"
                style={habit.complete? {"color": "darkGray", "background": "lightGray", "border": `3px solid ${habit.color}`} : {"color": `white`, "background": `${habit.color}`, "border": `2px solid ${habit.color}`}}
                key={habit.id}>
                  <p>{habit.name}</p>
                </li>
            } else {
                if (habit.goal.currentAmt === 0) {
                  return <li
                    onClick={() => openQuantityInputForm(habit)}
                    className= "checklist-item"
                    style={{"border": `3px solid ${habit.color}`}}
                    key={habit.id}>
                      <p>{habit.name}</p>
                    </li>
                } else if (habit.goal.currentAmt >= habit.goal.goalAmt) {
                  return <li
                    onClick={() => openQuantityInputForm(habit)}
                    className= "checklist-item"
                    style={{"color": "darkGray", "background": "lightGray", "border": `3px solid ${habit.color}`}}
                    key={habit.id}>
                      <p>{habit.name}</p>
                    </li>
                } else {
                  let percentageComplete = Math.round(habit.goal.currentAmt / habit.goal.goalAmt * 100);
                  if (percentageComplete < 10) {
                    percentageComplete = 10;
                  }

                  return <li
                    onClick={() => openQuantityInputForm(habit)}
                    className= "checklist-item"
                    style={percentageComplete < 50 ? {"background": `${habit.color}${percentageComplete}`, "border": `3px solid ${habit.color}`} : {"color": "white", "background": `${habit.color}${percentageComplete}`, "border": `3px solid ${habit.color}`}}
                    key={habit.id}
                    >
                      <p>{habit.name}</p>
                    </li>
                }
            }
          })
        }
        </ul>

        
          
        {
          quantityFormActive && <QuantityInput closeQuantityInputForm={closeQuantityInputForm} updateCurrentAmt={updateCurrentAmt} habit={activeQuantityHabit} />
        }
      
    </StyledChecklist>
    
  )
}


// {
//   todaysHabits && todaysHabits.map(habit => {
//     if (habit.type === "check") {
//       return <div
//         onClick={() => handleToggleComplete(habit.id)}
//         className= "checklist-item"
//         style={habit.complete? {"color": "darkGray", "background": "lightGray", "border": `3px solid ${habit.color}`} : {"color": `white`, "background": `${habit.color}`, "border": `2px solid ${habit.color}`}}
//         key={habit.id}>
//           <p>{habit.name}</p>
//         </div>
//     } else {
//         if (habit.goal.currentAmt === 0) {
//           return <div
//             onClick={() => openQuantityInputForm(habit)}
//             className= "checklist-item"
//             style={{"border": `3px solid ${habit.color}`}}
//             key={habit.id}>
//               <p>{habit.name}</p>
//             </div>
//         } else if (habit.goal.currentAmt >= habit.goal.goalAmt) {
//           return <div
//             onClick={() => openQuantityInputForm(habit)}
//             className= "checklist-item"
//             style={{"color": "darkGray", "background": "lightGray", "border": `3px solid ${habit.color}`}}
//             key={habit.id}>
//               <p>{habit.name}</p>
//             </div>
//         } else {
//           let percentageComplete = Math.round(habit.goal.currentAmt / habit.goal.goalAmt * 100);
//           if (percentageComplete < 10) {
//             percentageComplete = 10;
//           }

//           return <div
//             onClick={() => openQuantityInputForm(habit)}
//             className= "checklist-item"
//             style={percentageComplete < 50 ? {"background": `${habit.color}${percentageComplete}`, "border": `3px solid ${habit.color}`} : {"color": "white", "background": `${habit.color}${percentageComplete}`, "border": `3px solid ${habit.color}`}}
//             key={habit.id}
//             >
//               <p>{habit.name}</p>
//             </div>
//         }
//     }
//   })
// }