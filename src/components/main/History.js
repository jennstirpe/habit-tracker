import { StyledHistory } from "./styled/History.styled";
import HistoryItem from "./HistoryItem";

export default function History({ history }) {

  return (
    <StyledHistory>
        <h2>History</h2>
        {
            history.map(day => {
                return <HistoryItem key={day.id} date={day.date} checklist={day.habits} />
            })
        }
    </StyledHistory>
  )
}
