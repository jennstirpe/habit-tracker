import styled from "styled-components";

export const StyledInitialSetupForm = styled.form`
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    background: ${({theme}) => theme.colors.bgSecondary};
    box-shadow: 0 0 2rem ${({theme}) => theme.colors.boxShadow}50;
    z-index: 5;
    width: 22rem;
    height: 15rem;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) {
        width: 45rem;
        height: 10rem;
        justify-content: center;
    }
`;