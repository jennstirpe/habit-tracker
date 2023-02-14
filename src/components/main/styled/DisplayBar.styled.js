import styled from "styled-components";

export const StyledDisplayBar = styled.section`
    display: flex;
    
    .habit-box {
        height: 2rem;
        width: 2rem;
        background: ${({theme}) => theme.colors.bgMain};
        border-top: 1px solid ${({theme}) => theme.colors.textMain};
        border-bottom: 1px solid ${({theme}) => theme.colors.textMain};
        border-right: 1px solid ${({theme}) => theme.colors.textMain};

        &:first-of-type {
            border-left: 1px solid ${({theme}) => theme.colors.textMain};
        }
    }
`;