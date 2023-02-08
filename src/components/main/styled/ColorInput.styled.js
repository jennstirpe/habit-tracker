import styled from "styled-components";

export const StyledColorInput = styled.form`
    border-radius: .5rem;
    box-shadow: 0 0 .5rem ${({theme}) => theme.colors.boxShadow};
    width: 12rem;
    height: 12rem;
    padding: 1rem;
    background: ${({theme}) => theme.colors.bg1};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 5;

    .color-select-header {
        display: flex;
        margin-bottom: .5rem;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        .color-select-close {
            width: 1.5rem;
            height: 1.5rem;
            font-size: 1rem;
            border-radius: .5rem;
            color: ${({theme}) => theme.colors.textMain};
            background: ${({theme}) => theme.colors.bg1};
            border: 1px solid ${({theme}) => theme.colors.accentMain};
            transition: all 200ms linear;

            &:hover {
                cursor: pointer;
                background: ${({theme}) => theme.colors.accentMain};
                color: ${({theme}) => theme.colors.textSecondary};
            }
        }
    }

    

    .color-options {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;


        .color-option {
            height: 2rem;
            width: 2rem;
            border-radius: 50%;
            margin: .2rem .1rem;
            position: relative;
            background: black;

            &:hover {
                cursor: pointer;
                opacity: .9;
            }

            .color-selected {
                display: none;
                width: 2rem;
                height: 2rem;
                border-radius: 50%;
                border: 3px solid ${({theme}) => theme.colors.textMain};
                position: absolute;
                left: 0;
            }

            .color-option-input {
                opacity: 0;
                pointer-events: none;
            }

            .color-option-input:checked + .color-selected {
                display: inline-block;
            }

            &:nth-of-type(1) {
                background: #d00000;
            }
            &:nth-of-type(2) {
                background: #e85d04;
            }
            &:nth-of-type(3) {
                background: #ffaa00;
            }
            &:nth-of-type(4) {
                background: #ffd300;
            }
            &:nth-of-type(5) {
                background: #a1ff0a;
            }
            &:nth-of-type(6) {
                background: #38b000;
            }
            &:nth-of-type(7) {
                background: #0a9396;
            }
            &:nth-of-type(8) {
                background: #90e0ef;
            }
            &:nth-of-type(9) {
                background: #147df5;
            }
            &:nth-of-type(10) {
                background: #580aff;
            }
            &:nth-of-type(11) {
                background: #9336fd;
            }
            &:nth-of-type(12) {
                background: #9381ff;
            }
            &:nth-of-type(13) {
                background: #d883ff;
            }
            &:nth-of-type(14) {
                background: #b5179e;
            }
            &:nth-of-type(15) {
                background: #f72585;
            }
            &:nth-of-type(16) {
                background: #ff758f;
            }
            
        }
    }    

    .color-submit {
        width: 8rem;
        padding: .25rem;
        margin-top: 1rem;
        font-size: 1rem;
        border-radius: .5rem;
        color: ${({theme}) => theme.colors.textMain};
        background: ${({theme}) => theme.colors.bg1};
        border: 1px solid ${({theme}) => theme.colors.accentMain};
        transition: all 200ms linear;

        &:hover {
            cursor: pointer;
            background: ${({theme}) => theme.colors.accentMain};
            color: ${({theme}) => theme.colors.textSecondary};
        }
        
    }
`;