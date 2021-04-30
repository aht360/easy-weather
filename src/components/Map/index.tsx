import React, { useState, useEffect } from 'react';
import { Container } from './styles';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import  toast from 'react-hot-toast';
import Loader from "react-loader-spinner";
import { useWeather } from '../../hooks/weather';

const Map: React.FC = () => {
    const [position, setPosition] = useState<[number, number]>([0, 0]);
    const { getWeather } = useWeather();

    const Markers = () => {

        useMapEvents({
            async click(e) {                                
                setPosition([
                    e.latlng.lat,
                    e.latlng.lng
                ]);   
                await getWeather([e.latlng.lat, e.latlng.lng]);          
                toast.success(`Nova localização selecionada!`);   
            },            
        });
        
        return (
            position ? 
                <Marker           
                    position={position}
                    interactive={false} 
                />
            : null
        );   
    }

    useEffect(() => {
        setPosition([-8.0462556, -34.9146644]);
    }, [])

    useEffect(() => {
        getWeather(position)
    }, [position, getWeather])

    return (
        <Container>
            
            {
                position[0] !== 0 && position[1] !== 0 ?
                <MapContainer center={position} zoom={14} scrollWheelZoom={true} style={{ width: '100%', height: '100%'}} >
                    <TileLayer url='https://api.maptiler.com/maps/streets/256/{z}/{x}/{y}.png?key=z1VSoprK9QHmuI7NSoDU'  />
                    <Markers />
                </MapContainer>
                :
                <Loader
                  type="TailSpin"
                  color="#65b665"
                  height={50}
                  width={50}
                />
            }
        </Container>
    );
}

export default Map;