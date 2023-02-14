import DisplayBar from "./DisplayBar";
import { StyledHistoryItem } from "./styled/HistoryItem.styled";

export default function HistoryItem({ date, checklist }) {
  return (
    <StyledHistoryItem>
        <p className="history-date">{date}</p>
        <DisplayBar checklist={checklist} />
    </StyledHistoryItem>
  )
}
