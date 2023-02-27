import styled from "styled-components";

export const StyledNewHabitInput = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;
    background: ${({theme}) => theme.colors.accentMain}10;

    .habit-name, #habit-type {
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

    .habit-specs {
        margin: .75rem 0;
        width: 11rem;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .habit-color {
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            border: 2px solid ${({theme}) => theme.colors.textMain};

            &:hover {
                cursor: pointer;
                opacity: .75;
            }
        }
    }

    .habit-quantity-values {
        display: flex;
        flex-direction: column;

        border: 1px solid ${({theme}) => theme.colors.textMain}75;
        padding: .5rem;
        border-radius: .5rem;
        background: ${({theme}) => theme.colors.bgSecondary}75;

        .habit-quantity-label {
            display: flex;
            flex-direction: column;
            margin-bottom: .25rem;
            letter-spacing: 1px;
            
            input {
                margin: .25rem;
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
                    font-size: .85rem;
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
        }
    }

    .habit-submit {
        margin-top: 1rem;
        font-size: 2rem;
        /* padding: .25rem .75rem; */
        height: 3rem;
        width: 3rem;
        border-radius: 50%;
        border: 2px solid ${({theme}) => theme.colors.textMain}50;
        background: ${({theme}) => theme.colors.bgMain};
        color: ${({theme}) => theme.colors.textMain};
        transition: all 150ms linear;

        &:hover {
            cursor: pointer;
            background: ${({theme}) => theme.colors.accentMain};
            color: #fff;
            box-shadow: 0 0 1.5rem ${({theme}) => theme.colors.bgMain};
        }
    }



    @media (min-width: 768px) {
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-evenly;
        position: relative;
        
        h2 {
            position: absolute;
            top: .75rem;
            left: .75rem;
        }

        .habit-name {
            width: 16rem;
        }

        .habit-name, #habit-type {
            padding: .75rem;
        }

        .habit-specs {
            width: 12.5rem;

            .habit-color {
                height: 2.75rem;
                width: 2.75rem;
            }
        }

        .habit-quantity-values {
            flex-direction: row;
        }

        .habit-submit {
            margin-top: 0rem;
        }
    }
    
`;