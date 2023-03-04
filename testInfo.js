
// App.js
const [ habitsList, setHabitsList ] = useState([
    { 
      id: 1,
      name: "Tidy room",
      color: "#f72585",
      type: "check",
    },
    { 
      id: 2,
      name: "Skincare",
      color: "#0a9396",
      type: "check",
    },
    { 
      id: 3,
      name: "Make bed",
      color: "#d883ff",
      type: "check",
    },
    { 
      id: 4,
      name: "Vitamins",
      color: "#d00000",
      type: "check",
    },
    { 
      id: 5,
      name: "Drink Water",
      color: "#ffaa00",
      type: "quantity",
      goal: {
        amt: 80,
        unit: "ounces"
      }
    },
  ]);


  const [ currentDayChecklist, setCurrentDayChecklist ] = useState([
    { 
      id: 1,
      name: "Tidy room",
      color: "#f72585",
      type: "check",
      complete: false
    },
    { 
      id: 2,
      name: "Skincare",
      color: "#0a9396",
      type: "check",
      complete: true
    },
    { 
      id: 3,
      name: "Make bed",
      color: "#d883ff",
      type: "check",
      complete: false
    },
    { 
      id: 4,
      name: "Vitamins",
      color: "#d00000",
      type: "check",
      complete: true
    },
    { 
      id: 6,
      name: "Drink Water",
      color: "#ffaa00",
      type: "quantity",
      goal: {
        currentAmt: 40,
        goalAmt: 80,
        unit: "ounces"
      },
      complete: false
    },
    { 
      id: 7,
      name: "10,000 Steps",
      color: "#147df5",
      type: "quantity",
      goal: {
        currentAmt: 7500,
        goalAmt: 10000,
        unit: "steps"
      },
      complete: false
    },
  ]);




// initial setup form
const [ tempHabitsList, setTempHabitsList ] = useState([
    { 
      id: 100,
      name: "Tidy room",
      color: "#f72585",
      type: "check",
    },
    { 
      id: 200,
      name: "Skincare",
      color: "#0a9396",
      type: "check",
    },
    { 
      id: 300,
      name: "Make bed",
      color: "#d883ff",
      type: "check",
    },
    { 
      id: 400,
      name: "Vitamins",
      color: "#d00000",
      type: "check",
    },
    { 
      id: 500,
      name: "Drink Water",
      color: "#ffaa00",
      type: "quantity",
      goal: {
        amt: 80,
        unit: "ounces"
      }
    },
  ]);