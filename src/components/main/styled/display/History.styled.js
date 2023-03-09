import styled from "styled-components";

export const StyledHistory = styled.ul`
    list-style: none;
    border-radius: 1rem;
    background: ${({theme}) => theme.colors.bgSecondary};
    padding: 2rem;
    height: 50vh;
    overflow: scroll;

    .history-sort-list {
        list-style: none;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;

        .history-sort-item {
            width: 25%;

            .history-sort-btn {
                border-top: 1px solid ${({theme}) => theme.colors.textMain}; 
                border-bottom: 1px solid ${({theme}) => theme.colors.textMain}; 
                border-right: 1px solid ${({theme}) => theme.colors.textMain}; 
                border-left: none;
                width: 100%;
                padding: .75rem 0;
                font-size: 1rem;
                transition: all 200ms ease-out;
                background: none;
                color: ${({theme}) => theme.colors.textMain};

                &:hover {
                    cursor: pointer;
                    background-color: ${({theme}) => theme.colors.accentMain};
                    color: #fff;
                }
            }

            &:first-child {
                .history-sort-btn {
                    border-top-left-radius: 1.25rem;
                    border-bottom-left-radius: 1.25rem;
                    border-left: 1px solid ${({theme}) => theme.colors.textMain};
                }
            }
            &:last-child {
                .history-sort-btn {
                    border-top-right-radius: 1.25rem;
                    border-bottom-right-radius: 1.25rem;
                }
            }
        }
    }

    .sort-display {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 1rem 0;
        height: 2.3rem;
        background: linear-gradient(217deg, ${({theme}) => theme.colors.accentMain}15, ${({theme}) => theme.colors.accentMain}35);
        border-radius: .5rem;
        border: none;
        position: relative;

        .sort-display-btn {
            font-size: 1.5rem;
            padding: .5rem;
            border: none;
            transition: all 200ms ease-out;
            background: none;
            color: ${({theme}) => theme.colors.textMain};
            position: absolute;
            

            &:first-of-type {
                border-top-left-radius: .5rem;
                border-bottom-left-radius: .5rem;
                left: 0;
            }

            &:last-of-type {
                border-top-right-radius: .5rem;
                border-bottom-right-radius: .5rem;
                right: 0;
            }

            &:hover {
                cursor: pointer;
                color: ${({theme}) => theme.colors.textSecondary};
            }
        }
    }
`;