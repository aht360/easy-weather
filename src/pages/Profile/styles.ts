import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
`;

export const ProfileContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ProfileContent = styled.div`
    width: 400px;
    height: 500px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 55px 0;
    h1{
        font-size: 24px;
        text-transform: uppercase;
        letter-spacing: 1px;
        margin: 0 0 30px 0;
        cursor: default;
    }
    img{
        width: 90px;
        height: 90px;
        border-radius: 50%;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    }
`;

export const InfoContainer = styled.div`
    width: 300px;
    height: 200px;
    margin-top: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    border-top: 1px solid #666;
    border-bottom: 1px solid #666;
`;

export const InfoLabel = styled.div`
    width: 100%;
    span{
        font-size: 14px;
        font-weight: bold;
        letter-spacing: 0.5px;
        line-height: 10px;
        
    }
    p{
        font-size: 14px;
        font-weight: 500;
        line-height: 14px;
        margin-top: 4px;
        color: #666;
    }
`;