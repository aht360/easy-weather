import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
    background: #65b665;
    height: 30px;
    border-radius: 10px;
    border: 0;
    padding: 0 16px;
    color: #f5f5f5;
    width: 55%;
    font-weight: 700;
    margin-top: 16px;
    transition: background-color 0.2s;
    font-size: 14px;
    text-transform: uppercase;
    &:hover {
        background: ${shade(0.2, '#65b665')};
    }
`;

export const LoadingWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    margin-left: 53%;
    transform: translateX(-50%);
    div {
        position: absolute;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        background: #fff;
        animation-timing-function: cubic-bezier(0, 1, 1, 0);
    }

    div:nth-child(1) {
        left: 8px;
        animation: lds-ellipsis1 .5s infinite;
    }
    div:nth-child(2) {
        left: 8px;
        animation: lds-ellipsis2 .5s infinite;
    }
    div:nth-child(3) {
        left: 32px;
        animation: lds-ellipsis2 .5s infinite;
    }
    div:nth-child(4) {
        left: 56px;
        animation: lds-ellipsis3 .5s infinite;
    }

    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }

    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(24px, 0);
        }
    }

    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    
`;