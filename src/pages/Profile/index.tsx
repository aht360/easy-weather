import React from 'react';
import { Container, ProfileContainer, InfoLabel, ProfileContent, InfoContainer } from './styles';

import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

import { useAuth } from '../../hooks/auth';


const Profile: React.FC = () => {
    const { user } = useAuth();
    return (
        <Container>
            <Navbar />
            <ProfileContainer>
                <ProfileContent>
                    <h1>Seu perfil</h1>
                    <img src={user.avatar_url} alt={user.name}/>
                    <InfoContainer>
                        <InfoLabel>
                            <span>
                                Nome:
                            </span>
                            <p>
                                {user.givenName}
                            </p>
                        </InfoLabel>
                        <InfoLabel>
                            <span>
                                Sobrenome:
                            </span>
                            <p>
                                {user.familyName}
                            </p>
                        </InfoLabel>
                        <InfoLabel>
                            <span>
                                E-mail:
                            </span>
                            <p>
                                {user.email}
                            </p>
                        </InfoLabel>
                    </InfoContainer>
                </ProfileContent>
            </ProfileContainer>
            <Footer />
        </Container>
    );
}

export default Profile;