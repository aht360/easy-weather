import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ForecastWeek = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ForecastDay = styled.div`
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;

    width: 150px;
    height: 220px;
    border-radius: 8px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 7px 0;

    h1{
        text-transform: uppercase;
        letter-spacing: .5px;
        font-size: 18px;
    }
    span{
        font-size: 14px;
        color: gray;
        font-weight: 500;
        line-height: 17px;
        text-align: center;
        margin: 5px 0;
    }
    p{
        font-size: 14px;
        color: gray;
        font-weight: 500;
        line-height: 17px;
        text-align: center;
        margin: 5px 0;
        min-height: 40px;
    }
`;  

export const MaxMin = styled.div`
    height: 30px;
    width: 100%;
    padding: 0 15px;
    
    display: flex;
    justify-content: space-between;

    span{
        display: flex;
        align-items: center;
    }

`;