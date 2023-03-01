import styled from "styled-components";

export const StyledEditHabitForm = styled.div`
    border: 1px solid red;
    display: flex;
    flex-direction: column;
    padding: 1rem;
    position: absolute;
    background: ${({theme}) => theme.colors.bgSecondary};

    .edit-name, .edit-details {
        padding: .5rem;
        font-size: 1rem;
        border-radius: .5rem;
        border: 1px solid ${({theme}) => theme.colors.textMain};
        font-family: ${({theme}) => theme.fonts.mainText};
        color: ${({theme}) => theme.colors.textMain};
        background: ${({theme}) => theme.colors.bgSecondary};
        transition: all 150ms linear;

        &::placeholder {
            font-family: ${({theme}) => theme.fonts.mainText};
        }

        &:hover {
            cursor: pointer;
            background: ${({theme}) => theme.colors.bgMain};
        }

        &:focus {
            outline: none;
            border: 2px solid ${({theme}) => theme.colors.accentMain};
            background: ${({theme}) => theme.colors.accentMain}10;
        }
    }

    .edit-color {
        height: 1.5rem;
        width: 1.5rem;
        border-radius: 50%;
    }

    
`;