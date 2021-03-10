import React, { useCallback } from 'react';
import  toast from 'react-hot-toast';
import { GoogleLogout } from 'react-google-login';

import { Container, NavbarWrapper, UserSessionWrapper, UserInfoWrapper, DropdownUser, EasyWeatherLogo } from './styles';
import { useAuth } from '../../hooks/auth';
import { FiChevronDown } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';


const Navbar: React.FC = () => {
    const { user, signOut } = useAuth();
    const history = useHistory();

    const onSuccess = useCallback(() => {
        console.log('Logout made successfully');
        toast.success('Até mais!');
        signOut();
        history.push('/');
    }, [history, signOut]);

    return (
        <Container>
            <NavbarWrapper>
                <EasyWeatherLogo>
                    Easy-Weather
                </EasyWeatherLogo>
                <UserSessionWrapper>
                    <img src={user.avatar_url} alt={user.name}/>
                    <UserInfoWrapper>
                        <span>Olá, {user.givenName}!</span>
                        <FiChevronDown size={16} color="#666360"/>
                        <DropdownUser>
                            <Link to="/dashboard">Dashboard</Link>
                            <Link to="/profile">Profile</Link>
                            <GoogleLogout
                                clientId="754638029895-1onpbr2m85d6gsod7iiq21v6q0q66asf.apps.googleusercontent.com"
                                onLogoutSuccess={onSuccess}
                                render={renderProps => (
                                    <button onClick={renderProps.onClick}>Exit</button>
                                )}
                            />
                        </DropdownUser>
                    </UserInfoWrapper>
                </UserSessionWrapper>
            </NavbarWrapper>
        </Container>
    );
}

export default Navbar;