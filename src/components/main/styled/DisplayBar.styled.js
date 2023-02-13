import styled from "styled-components";

export const StyledDisplayBar = styled.section`
    display: flex;
    
    .habit-box {
        height: 2rem;
        width: 2rem;
        border: 1px solid ${({theme}) => theme.colors.textMain};
        background: ${({theme}) => theme.colors.bgMain};
    }
`;