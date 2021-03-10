import styled from 'styled-components';
import { shade } from 'polished';


export const Container = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
    justify-content: center;

`;


export const EasyWeatherLogo = styled.p`
    font-size: 24px;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 1.5px;

    color: #65b665;
    
`;

export const NavbarWrapper = styled.div`
    height: 100%;
    width: 1180px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const UserSessionWrapper = styled.div`
    width: 185px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    img{
        width: 40px;
        height: 40px;
        border-radius: 50%
    }
`;

export const DropdownUser = styled.ul`
    position: absolute;
    width: 125px;
    height: 75px;
    background-color: #fff;
    top: 100%;
    visibility: hidden;
    opacity: 0;
    border-radius: 4px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    transition: all linear .2s;
    
    a, button{
        height: 25px;
        font-size: 12px;
        font-weight: 500;
        text-decoration: none;
        
        width: 100%;
        text-align: center;
        color: #666360;
        padding: 4px;
        transition: background-color 0.2s;
        border: none;
        background-color: transparent;
        &:hover{
            background: ${shade(0.08, '#fff')};
        }
    }
`

export const UserInfoWrapper = styled.div`
    
    width: 125px;
    cursor: pointer;
    display: flex;
    align-items: center;
    position: relative;
    span{
        font-size: 14px;
        font-weight: bold;
        color: #666360;
    }
    svg{
        margin-left: 4px;
        margin-top: 2px;
    }
    &:hover ${DropdownUser}{
        visibility: visible;
        opacity: 1;
    }
`;

