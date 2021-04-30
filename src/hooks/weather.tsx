import React, { createContext, useState, useCallback, useContext } from 'react';
import api from '../services/api';

interface WeatherContextData{
    weather: Weather;
    getWeather(position: [number, number]): Promise<void>;
}

export interface Weather{
    city: string;
    city_name: string;
    condition_slug: string;
    currently: string;
    date: string;
    description: string;
    forecast: ForecastDay[];
    humidity: Number;
    sunrise: string;
    sunset: string;
    temp: Number;
    time: string;
    wind_speedy: string;
}

export interface ForecastDay{
    date: string;
    weekday: string;
    max: Number;
    min: Number;
    description: string;
    condition: string;
}

interface WeatherState{
    position: [number, number];
    weather: Weather;
}

const WeatherContext = createContext<WeatherContextData>({} as WeatherContextData);

const WeatherProvider: React.FC = ({ children }) => {

    const [data, setData] = useState(() => {
        const position = localStorage.getItem('@easy-weather:position');
        const weather = localStorage.getItem('@easy-weather:weather');
        
        if(position && weather){
            return { position, weather: JSON.parse(weather) }
        }

        return {} as WeatherState;
    });

    const getWeather = useCallback( async ( position ) => {
        localStorage.setItem('@easy-weather:position', position);
        const response = await api.get('weather', { params: {
            format: 'json-cors',
            key: '78e0fb1d',
            lat: position[0],
            lon: position[1],
            user_ip: 'remote',
            locale: 'pt'
        }});
        console.log(response.data)
        const weatherResponse = response.data.results;

        const weather = {
            city: weatherResponse.city,
            city_name: weatherResponse.city_name,
            condition_slug: weatherResponse.condition_slug,
            currently: weatherResponse.currently,
            date: weatherResponse.date,
            description: weatherResponse.description,
            forecast: weatherResponse.forecast,
            humidity: weatherResponse.humidity,
            sunrise: weatherResponse.sunrise,
            sunset: weatherResponse.sunset,
            temp: weatherResponse.temp,
            time: weatherResponse.time,
            wind_speedy: weatherResponse.wind_speedy
        }
        

        localStorage.setItem('@easy-weather:weather', JSON.stringify(weather));
        console.log(weather)
        setData({ position, weather });
    }, []);

    return(
        <WeatherContext.Provider
            value={{ weather: data.weather, getWeather }}
        >
            {children}
        </WeatherContext.Provider>
    );

};

function useWeather(){
    const context = useContext(WeatherContext);
    return context;
}

export { WeatherProvider, useWeather }