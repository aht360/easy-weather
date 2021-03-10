import styled, { css } from 'styled-components';

interface ContainerProps {
    isFocused: boolean;
    isFilled: boolean;
    isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
    background: #f5f5f5;
    border-radius: 10px;
    padding: 16px;
    width: 80%;
    height: 40px;
    border: 1px solid #dadada;
    color: #666360;

    display: flex;
    align-items: center;

    & + div {
        margin-top: 12px;
    }

    svg {
        margin-right: 16px;
        color: #666360;
    }


    ${props =>
        props.isErrored &&
        css`
        border-color: #c53030;
    `}

    ${props =>
        props.isFocused &&
        css`
        color: #65b665;
        border-color: #65b665;
        svg {
            margin-right: 16px;
            color: #65b665;
        }
    `}

    

    input {
        flex: 1;
        background: transparent;
        border: 0;
        color: #000;
        font-size: 15px;
        &::placeholder {
            color: #666360;
        }
    }

    
    ${props =>
        props.isFilled &&
        css`
        color: #65b665;
        svg {
            margin-right: 16px;
            color: #65b665;
        }
    `}
`;

export const Error = styled.div`

`;