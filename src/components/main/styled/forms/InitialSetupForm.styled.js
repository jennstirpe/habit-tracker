import styled from "styled-components";

export const StyledInitialSetupForm = styled.section`
    background: ${({theme}) => theme.colors.bgSecondary};
    box-shadow: 0 0 2rem ${({theme}) => theme.colors.boxShadow}50;
    width: 22rem;
    height: auto;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;

    h2 {
        margin: 1rem;
        text-transform: uppercase;
    }

    @media (min-width: 768px) {
        width: 45rem;
    }
`;