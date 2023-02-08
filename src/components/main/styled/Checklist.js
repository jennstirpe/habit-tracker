import styled from "styled-components";

export const StyledChecklist = styled.section`
    width: 22rem;
    border-radius: 1rem;
    /* box-shadow: 0 0 1rem #aaa; */
    background: ${({theme}) => theme.colors.bgSecondary};

    .checklist-header {
        padding: .75rem;
        font-size: .95rem;
        letter-spacing: 1px;
        border-top-left-radius: 1rem;
        border-top-right-radius: 1rem;
        text-align: center;

        .checklist-date {
            font-size: 1.35rem;
            font-family: ${({theme}) => theme.fonts.mainText};
        }
    }
    
    .checklist {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        border-bottom-left-radius: 1rem;
        border-bottom-right-radius: 1rem;
    }

    .checklist-item {
        color: blue;
        width: 8rem;
        padding: 1rem;
        margin: 1rem 0;
        text-align: center;
        border-radius: 2rem;
        transition: all 150ms linear;

        &:hover {
            cursor: pointer;
            opacity: .5;
        }
    }
`;