import styled from "styled-components";

export const StyledQuantityInput = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 1rem;
    border-radius: .5rem;
    background: ${({theme}) => theme.colors.bgSecondary};
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    width: 90%;
    height: 90%;
    min-height: 12rem;
    box-shadow: 0 0 1rem ${({theme}) => theme.colors.boxShadow}50;

    .quantity-form-header {
        border-bottom: 1px solid ${({theme}) => theme.colors.mainText}50;
        display: flex;
        flex-direction: column;
        align-items: center;
        letter-spacing: 1px;
        margin-bottom: 1rem;

        .quantity-form-close {
            font-size: 2rem;
            padding: 0 .5rem;
            background: none;
            border: none;
            color: ${({theme}) => theme.colors.textMain};
            transition: all 200ms linear;
            position: absolute;
            top: .5rem;
            right: .5rem;

            &:hover {
                cursor: pointer;
                color: ${({theme}) => theme.colors.accentMain};
            }
        }

        .quantity-form-title {
            font-size: 2rem;
        }

        .quantity-form-display {
            color: ${({theme}) => theme.colors.textMain}75;
        }
    }

    .quantity-form-input {
        width: 6rem;
        height: 3rem;
        margin-bottom: .5rem;
        text-align: center;
        font-size: 2rem;
        border-radius: .5rem;
        border: 2px solid ${({theme}) => theme.colors.textMain}50;
        background: ${({theme}) => theme.colors.accentMain}10;
        overflow: none;
        color: ${({theme}) => theme.colors.textMain};

        &:focus {
            border: 2px solid ${({theme}) => theme.colors.accentMain}50;
            background: ${({theme}) => theme.colors.bgSecondary};
        }
    }

    .quantity-form-update-btn {
        text-transform: uppercase;
        letter-spacing: 1px;
        padding: .75rem 1.5rem;
        border-radius: 1.5rem;
        border: none;
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







input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type=number]{
    -moz-appearance: textfield;
}

`;