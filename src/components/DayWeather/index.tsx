import React from 'react';

import { Container, ContainerDayWeather, TemperatureContent, WeatherData, WeatherVariables } from './styles';
import Loader from "react-loader-spinner";

import { useWeather } from '../../hooks/weather';
import { FaRegCalendarAlt, FaRegClock, FaWind, FaTemperatureHigh } from 'react-icons/fa';
const DayWeather: React.FC = () => {
    const { weather } = useWeather();
    console.log(weather)
    return (
        <Container>
            {
                weather &&
                Object.keys(weather).length === 0 ?
                <Loader
                    type="TailSpin"
                    color="#65b665"
                    height={50}
                    width={50}
                />
                :
                <ContainerDayWeather>
                    <h1>{weather?.city}</h1>
                    <span> <FaRegCalendarAlt/> {weather?.forecast[0].weekday}, {weather?.forecast[0].date}</span>
                    <span> <FaRegClock/> {weather?.time}</span>
                    <span>{weather?.description}</span>
                    <TemperatureContent>
                        <h2>{weather?.temp}</h2>
                        <p>°C</p>
                    </TemperatureContent>
                    <WeatherData>
                        <WeatherVariables>
                            <FaWind size={25} />
                            <p>{weather?.wind_speedy}</p>
                            <p>Vento</p>
                        </WeatherVariables>
                        <WeatherVariables>
                            <FaTemperatureHigh size={25} />
                            <p>{weather?.humidity}%</p>
                            <p>Umidade</p>
                        </WeatherVariables>
                    </WeatherData>

                </ContainerDayWeather>

            }
        </Container>
    );
}

export default DayWeather;