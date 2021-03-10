import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const RegisterContainer = styled.div`
    width: 400px;
    height: 400px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    padding: 30px 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    h1{
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 20px 0;
        cursor: default;
    }
    footer{
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        position: absolute;
        bottom: 40px;
        a{
            font-size: 12px;
            text-decoration: none;
            color: #4c4c4c;
            border-bottom: 1px solid transparent;
            width: fit-content;
            transition: all linear .2s;
            &:hover{
                border-bottom: 1px solid black;
            }
        }
        
    }
`;