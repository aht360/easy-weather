import React from 'react';

import { Container, ForecastWeek, ForecastDay, MaxMin } from './styles';
import Loader from "react-loader-spinner";
import { useWeather } from '../../hooks/weather';
import { WiCloudy, WiDayCloudy, WiDaySunny, WiDayThunderstorm, WiFog, WiHail, WiNightClear, WiNightCloudy, WiRaindrops, WiSnow } from 'react-icons/wi';
import { FiArrowDown, FiArrowUp } from 'react-icons/fi';


const Forecast: React.FC = () => {
    const { weather } = useWeather();
    
    const forecast = weather.forecast.slice(1, 8);

    return (
        <Container>
            {
                Object.keys(weather).length === 0 ?
                <Loader
                    type="TailSpin"
                    color="#65b665"
                    height={50}
                    width={50}
                />
                :
                <ForecastWeek>
                    {
                    forecast.map(day => (
                        <ForecastDay key={day.date} >
                            <h1>{day.weekday}</h1>
                            <span>{day.date}</span>
                            {
                                day.condition === 'storm' &&
                                <WiDayThunderstorm size={40} />
                            }
                            {
                                day.condition === 'snow' &&
                                <WiSnow size={40} />
                            }
                            {
                                day.condition === 'hail' &&
                                <WiHail size={40} />
                            }
                            {
                                day.condition === 'rain' &&
                                <WiRaindrops size={40} />
                            }
                            {
                                day.condition === 'fog' &&
                                <WiFog size={40} />
                            }
                            {
                                day.condition === 'clear_day' &&
                                <WiDaySunny size={40} />
                            }
                            {
                                day.condition === 'clear_night' &&
                                <WiNightClear size={40} />
                            }
                            {
                                day.condition === 'cloud' &&
                                <WiCloudy size={40} />
                            }
                            {
                                day.condition === 'cloudly_day' &&
                                <WiDayCloudy size={40} />
                            }
                            {
                                day.condition === 'cloudly_night' &&
                                <WiNightCloudy size={40} />
                            }
                            {
                                day.condition === 'none_day' &&
                                <WiDaySunny size={40} />
                            }
                            {
                                day.condition === 'none_night' &&
                                <WiNightClear size={40} />
                            }
                            <p>{day.description}</p>
                            
                            <MaxMin>
                                <span><FiArrowUp size={12} /> {day.max}°C </span>
                                <span><FiArrowDown size={12} /> {day.min}°C </span>
                            </MaxMin>

                        </ForecastDay>
                    ))
                    }
                </ForecastWeek>
            }
        </Container>
  );
}

export default Forecast;