import styled from "styled-components";

export const StyledEditHabitForm = styled.div`
    box-shadow: 0 0 1.5rem ${({theme}) => theme.colors.boxShadow}50;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 1rem .5rem 1rem;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    width: 20rem;
    background: ${({theme}) => theme.colors.bgSecondary};

    .edit-name, .edit-quantity {
        padding: .5rem;
        margin: .25rem .75rem;
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

    .edit-details {
        padding: .5rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .edit-color {
            height: 1.5rem;
            width: 1.5rem;
            border-radius: 50%;
        }
    }

    .edit-quantity {
        width: 5rem;
    }

    .edit-btns {
        margin-top: 1rem;
        margin-left: auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 4.5rem;
        
        .edit-btn {
            height: 2rem;
            width: 2rem;
            padding: .25rem;
            font-size: 1.15rem;
            color: ${({theme}) => theme.colors.textMain};
            transition: all 150ms linear;
            border-radius: .5rem;

            &.update {
                border: 2px solid ${({theme}) => theme.colors.success}75;
                background: ${({theme}) => theme.colors.success}15;

                &:hover {
                    cursor: pointer;
                    background: ${({theme}) => theme.colors.success}75;
                    color: #fff;
                    box-shadow: 0 0 1.5rem ${({theme}) => theme.colors.bgMain};
                }
            }

            &.delete {
                border: 2px solid ${({theme}) => theme.colors.danger}75;
                background: ${({theme}) => theme.colors.danger}15;

                svg {
                    stroke: ${({theme}) => theme.colors.textMain};
                }

                &:hover {
                    cursor: pointer;
                    background: ${({theme}) => theme.colors.danger}75;
                    box-shadow: 0 0 1.5rem ${({theme}) => theme.colors.bgMain};

                    svg {
                        stroke: #fff;
                    }
                }
            }
        }
    }

    @media (min-width: 768px) { 
        flex-direction: row;
        width: 35rem;

    }
    
`;