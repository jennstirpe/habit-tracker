import styled from "styled-components";

export const StyledHistory = styled.ul`
    list-style: none;
    border-radius: 1rem;
    background: ${({theme}) => theme.colors.bgSecondary};
    padding: 2rem;

    .history-sort-list {
        list-style: none;
        display: flex;
        flex-wrap: wrap;

        .history-sort-item {

            .history-sort-btn {
                border-top: 1px solid ${({theme}) => theme.colors.textMain};
                border-bottom: 1px solid ${({theme}) => theme.colors.textMain};
                border-right: 1px solid ${({theme}) => theme.colors.textMain};
                border-left: none;
                width: 6rem;
                padding: .75rem 0;
                font-size: 1rem;
                transition: all 200ms ease-out;
                background: ${({theme}) => theme.colors.bgMain};
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
        /* justify-content: space-between; */
        justify-content: center;
        margin: 1rem 0;
        height: 2.3rem;
        background-color: ${({theme}) => theme.colors.accentMain}15;
        border-radius: .5rem;
        border: 1px solid ${({theme}) => theme.colors.textMain};
        position: relative;

        .sort-display-btn {
            font-size: 1rem;
            padding: .5rem;
            border: none;
            transition: all 200ms ease-out;
            background: ${({theme}) => theme.colors.bgMain};
            color: ${({theme}) => theme.colors.textMain};
            position: absolute;
            

            &:first-of-type {
                border-top-left-radius: .5rem;
                border-bottom-left-radius: .5rem;
                border-right: 1px solid ${({theme}) => theme.colors.textMain};
                left: 0;
            }

            &:last-of-type {
                border-top-right-radius: .5rem;
                border-bottom-right-radius: .5rem;
                border-left: 1px solid ${({theme}) => theme.colors.textMain};
                right: 0;
            }

            &:hover {
                cursor: pointer;
                background-color: ${({theme}) => theme.colors.accentMain};
                color: #fff;
            }
        }
    }
`;