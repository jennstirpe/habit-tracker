import styled from "styled-components";

export const StyledHistoryItem = styled.li`
    display: flex;
    padding: .5rem 0;
    border-bottom: 1px solid ${({theme}) => theme.colors.textMain};

    .history-date {
        margin-right: .75rem;
    }
`;