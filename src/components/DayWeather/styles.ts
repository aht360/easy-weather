import styled from 'styled-components';

export const Container = styled.div`
    width: 25%;
    height: 270px;
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ContainerDayWeather = styled.div`
    width: 100%;
    height: 100%;
    padding: 15px;

    h1{
        font-size: 22px;
        font-weight: 500;
        color: #000;
        letter-spacing: 0.5px;
    }
    span{
        font-size: 14px;
        font-weight: 500;
        color: gray;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        margin: 6px 0;
        width: 100%;
        svg{
            margin-right: 4px;
        }
    }
`;


export const TemperatureContent = styled.div`
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    h2{
        font-size: 50px;

        letter-spacing: 0;
    }
    p{
        font-size: 20px;
        color: #000;
        font-weight: 500;
        line-height: 42px;
        margin-left: 3px;
        letter-spacing: 0;
    }
`;

export const WeatherData = styled.div`
    width: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const WeatherVariables = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    svg{
        margin-bottom: 6px;
        color: gray;
    }
    p{
        font-size: 13px;
        line-height: 14px;
        color: gray;
        font-weight: 500;
    }
`;
