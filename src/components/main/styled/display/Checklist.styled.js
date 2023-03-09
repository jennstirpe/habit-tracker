import styled from "styled-components";

export const StyledChecklist = styled.section`
    border-radius: 1rem;
    background: ${({theme}) => theme.colors.bgSecondary};
    position: relative;
    padding: 2rem 0;
    margin-top: .75rem;

    .edit-form-open {
        position: absolute;
        top: .5rem;
        right: .5rem;
        color: ${({theme}) => theme.colors.textMain};
        background: none;
        border: none;
        transition: all 200ms linear;
        height: 1.5rem;
        width: 1.5rem;

        &:hover {
            cursor: pointer;
            color: ${({theme}) => theme.colors.accentMain}50;
        }

        svg {
            height: 1rem;
            width: 1rem;

            path {
                fill: ${({theme}) => theme.colors.textMain}75;
                transition: all 200ms linear;
            }
            
        }
    }

    .checklist {
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: center;

        .checklist-item {
            width: 8rem;
            height: 3.5rem;
            word-wrap: break-word;
            margin: 1rem .5rem;
            text-align: center;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 2rem;
            transition: all 150ms linear;
            background: ${({theme}) => theme.colors.bgSecondary};
            color: ${({theme}) => theme.colors.textMain};

            &:hover {
                cursor: pointer;
                opacity: .5;
            }
        }
    }
    
`;