import { useState, useEffect } from "react";
import { StyledHistory } from "../styled/display/History.styled";
import HistoryItem from "./HistoryItem";
// import _ from 'lodash';

export default function History({ history, date }) {
  const splitDate = date.split("/");
  const [ activeSort, setActiveSort ] = useState("all");

  const [ displayList, setDisplayList ] = useState([...history]);
  const [ displayYear, setDisplayYear ] = useState(splitDate[2]);
  const [ displayMonth, setDisplayMonth ] = useState(() => {
    return splitDate[0];
  });

  const [ sortDisplay, setSortDisplay ] = useState()
  

  useEffect(() => {
    if(activeSort === "year") {
      sortYear()
    } else {
      return
    }
  }, [displayYear])

  useEffect(() => {
    if(activeSort === "month") {
      sortMonth()
    } else {
      return
    }
  }, [displayMonth])

// SORT BTN - PREVIOUS
  function sortPrev() {
    if(activeSort === "year") {
      const newYear = parseInt(displayYear) - 1;
      setDisplayYear(newYear);
      setSortDisplay(displayYear);
    }

    if(activeSort === "month") {
      let newMonth;

      if(displayMonth - 1 === 0) {
        newMonth = 12;
      } else {
        newMonth = displayMonth - 1;
      }
      
      setDisplayMonth(newMonth);      
    }
  
 }
// SORT BTN - NEXT
 function sortNext() {
  if(activeSort === "year") {
    setDisplayYear(displayYear => parseInt(displayYear) + 1);
    setSortDisplay(displayYear);
    sortYear()
  }

  if(activeSort === "month") {
    const currentMonth = parseInt(displayMonth);
    let newMonth;

    if (currentMonth + 1 === 13) {
      newMonth = 1
    } else {
      newMonth = currentMonth + 1;
    }
    
    setDisplayMonth(newMonth);
    
  }

}

// SORT BY MONTH
  function sortMonth() {
    setActiveSort("month");

    let month;

    if(displayMonth === 1) {
      month = "January";
    } else if (displayMonth === 2) {
      month = "February";
    } else if (displayMonth === 3) {
      month = "March"
    } else if (displayMonth === 4) {
      month = "April"
    } else if (displayMonth === 5) {
      month = "May"
    } else if (displayMonth === 6) {
      month = "June"
    } else if (displayMonth === 7) {
      month = "July"
    } else if (displayMonth === 8) {
      month = "August"
    } else if (displayMonth === 9) {
      month = "September"
    } else if (displayMonth === 10) {
      month = "October"
    } else if (displayMonth === 11) {
      month = "November"
    } else {
      month = "December"
    }

    setSortDisplay(month)

    const historyCopy = [...history];

    const historyList = historyCopy.map(listItem => {
      const splitDate = listItem.date.split("/");
      return {...listItem, date: splitDate}
    })

    
    const sortedMonthList = historyList.filter(record => record.date[0] == displayMonth);
    setDisplayList(sortedMonthList);
  }

// SORT BY YEAR
  function sortYear() {
    setActiveSort("year");
    setSortDisplay(displayYear);

    const historyCopy = [...history];

    const historyList = historyCopy.map(listItem => {
      const splitDate = listItem.date.split("/");
      return {...listItem, date: splitDate}
    })

    const sortedYearList = historyList.filter(record => record.date[2] == displayYear);
    setDisplayList(sortedYearList);
  }

// SORT "ALL"
  function sortAll() {
    setActiveSort("all");
    setDisplayList([...history]);
    setSortDisplay(null);
  }

  

  return (
    <StyledHistory>

        <ul className="history-sort-list">
          <li className="history-sort-item">
            <button className="history-sort-btn">Week</button>
          </li>
          <li className="history-sort-item">
            <button onClick={sortMonth} className="history-sort-btn">Month</button>
          </li>
          <li className="history-sort-item">
            <button onClick={sortYear} className="history-sort-btn">Year</button>
          </li>
          <li className="history-sort-item">
            <button onClick={sortAll} className="history-sort-btn">All</button>
          </li>
        </ul>
        <div className="sort-display">
          {
            sortDisplay && <button onClick={sortPrev} className="sort-display-btn" aria-label="previous">&larr;</button>
          }
          <h3 className="sort-display-date">
            {
              sortDisplay ? sortDisplay : "All"
            }
          </h3>
          {
            sortDisplay && <button onClick={sortNext} className="sort-display-btn" aria-label="next">&rarr;</button>
          }
        </div>
        { 
            displayList.map(day => {
                return <HistoryItem key={day.id} date={day.date} checklist={day.habits} />
            })
        }
    </StyledHistory>
  )
}
