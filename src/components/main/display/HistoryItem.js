import DisplayBar from "./DisplayBar";
import { StyledHistoryItem } from "../styled/display/HistoryItem.styled";

export default function HistoryItem({ date, checklist }) {
  // const dateDisplay = date.toString("/");

  return (
    <StyledHistoryItem>
        <p className="history-date">{date}</p>
        <DisplayBar checklist={checklist} />
    </StyledHistoryItem>
  )
}
