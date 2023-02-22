import styled from "styled-components";

export const StyledHistoryItem = styled.li`
    display: flex;
    padding: .75rem 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.textMain};
    justify-content: space-between;
    align-items: center;

    .history-date {
        margin-right: .75rem;
    }
`;