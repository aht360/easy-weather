import React from 'react';
import  { Toaster } from 'react-hot-toast';

import { Container, DashboardContainer, DashboardContent, DashboardLine } from './styles';
import Footer from '../../components/Footer';
import Map from '../../components/Map';

import Navbar from '../../components/Navbar';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import DayWeather from '../../components/DayWeather';
import Forecast from '../../components/Forecast';

const Dashboard: React.FC = () => {
  
  return (
      <Container>
        <Toaster 
          position="top-center"
        />
        <Navbar />

        <DashboardContainer>

          <DashboardContent>

            <DashboardLine>
              <Map />
              <DayWeather />
            </DashboardLine>

            <DashboardLine>
              <Forecast />
            </DashboardLine>
            
          </DashboardContent>

        </DashboardContainer>
    
        <Footer />
      </Container>
  );
}

export default Dashboard;