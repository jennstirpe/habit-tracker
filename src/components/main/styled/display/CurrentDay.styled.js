import styled from "styled-components";

export const StyledCurrentDay = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    height: 25rem;
    position: relative;

    .current-day-header {
        display: flex;

        h2 {
            margin-right: .75rem;
        }
    }

    .current-day-edit-form {
        position: absolute;
        top: 0;
        z-index: 5;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        .edit-form-close {
            position: absolute;
            top: 1rem;
            right: 1rem;
            font-size: 1.5rem;
            color: ${({theme}) => theme.colors.textMain};
            background: ${({theme}) => theme.colors.bgSecondary};
            border: none;
            transition: all 200ms linear;

            &:hover {
                cursor: pointer;
                color: ${({theme}) => theme.colors.accentMain}50;
            }
        }
    }

    @media (min-width: 768px) {
        width: 45rem;
        padding: 2rem;
    }
`;