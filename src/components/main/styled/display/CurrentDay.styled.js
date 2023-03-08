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
        z-index: 5;
    }
`;