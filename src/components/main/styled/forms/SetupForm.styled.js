import styled from "styled-components";

export const StyledSetupForm = styled.section`
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

    .temp-habits {
        width: 100%;
        padding: 1.5rem;
        display: flex;
        flex-direction: column;

        .temp-habits-list {
            list-style: none;
            

            .temp-habits-list-item {
                display: flex;
                align-items: center;
                margin: .4rem 0;
                padding: .25rem;
                border-radius: .5rem;

                .temp-list-item-color {
                    height: 1rem;
                    width: 1rem;
                    border-radius: 50%;
                    margin: 0 .75rem;
                }

                .temp-list-item-name {
                    letter-spacing: 1px;
                }

                .temp-list-item-details {
                    color: ${({theme}) => theme.colors.textMain}65;
                    font-size: .75rem;
                    background: ${({theme}) => theme.colors.bgMain};
                    padding: .25rem .5rem;
                    border-radius: 1rem;
                    margin-left: .75rem;
                }

                .temp-list-item-btn {
                    margin-left: auto;
                    height: 2.5rem;
                    width: 2.5rem;
                    background: none;
                    border: none;
                    
                    svg {
                        height: 1.4rem;
                        width: 1.4rem;

                        path {
                            fill: ${({theme}) => theme.colors.textMain}50;
                            transition: all 200ms linear;
                        }
                    }

                    &:hover {
                        cursor: pointer;

                        svg {
                            path {
                                fill: ${({theme}) => theme.colors.textMain};
                            }
                        }
                    }
                }
            }
        }

        .temp-habits-finish {
            margin-top: 1rem;
            font-size: 1.25rem;
            padding: .75rem 0;
            border-radius: .5rem;
            border: 2px solid ${({theme}) => theme.colors.textMain}50;
            background: ${({theme}) => theme.colors.accentMain}10;
            color: ${({theme}) => theme.colors.textMain}75;
            text-transform: uppercase;
            letter-spacing: 1px;
            transition: all 150ms linear;

            &:hover {
                cursor: pointer;
                background: ${({theme}) => theme.colors.accentMain}50;
                color: #fff;
                box-shadow: 0 0 1.5rem ${({theme}) => theme.colors.bgMain};
            }
        }

    }

    @media (min-width: 768px) {
        width: 45rem;

        .temp-habits {
            padding: 1.5rem 3rem;
        }
    }
`;