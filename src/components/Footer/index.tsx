import React, { useState } from 'react';
import { Container, IconWrapper, IconsContainer } from './styles';
import { FaLinkedin, FaFacebook, FaGithub, FaYoutube, FaInstagram } from 'react-icons/fa';
import Tooltip from '../Tooltip';

const Footer: React.FC = () => {
    const [ showLinkedIn, setShowLinkedIn ] = useState(false);
    const [ showFacebook, setShowFacebook ] = useState(false);
    const [ showGithub, setShowGithub ] = useState(false);
    const [ showYouTube, setShowYouTube ] = useState(false);
    const [ showInstagram, setShowInstagram ] = useState(false);

    return (
        <Container>
            <IconsContainer>
                <IconWrapper href="https://www.linkedin.com/in/augusto-terra-980922138/" isLinkedin onMouseEnter={() => { setShowLinkedIn(true) }} onMouseLeave={() => { setShowLinkedIn(false) }}>
                    <Tooltip isLinkedin show={showLinkedIn} text="LinkedIn" />
                    <FaLinkedin size={20}   />
                </IconWrapper>
                <IconWrapper href="https://www.facebook.com/augusto.terra.5" isFacebook onMouseEnter={() => { setShowFacebook(true) }} onMouseLeave={() => { setShowFacebook(false) }}>
                    <Tooltip isFacebook show={showFacebook} text="Facebook" />
                    <FaFacebook size={20} />
                </IconWrapper>
                <IconWrapper href="https://github.com/aht360" isGithub onMouseEnter={() => { setShowGithub(true) }} onMouseLeave={() => { setShowGithub(false) }} >
                    <Tooltip isGithub show={showGithub} text="Github" />
                    <FaGithub size={20} />
                </IconWrapper>
                <IconWrapper href="https://www.youtube.com/channel/UCUe9y468KWc-WBSPXMKlZoQ" isYoutube onMouseEnter={() => { setShowYouTube(true) }} onMouseLeave={() => { setShowYouTube(false) }} >
                    <Tooltip isYoutube show={showYouTube} text="Youtube" />
                    <FaYoutube size={20} />
                </IconWrapper>
                <IconWrapper href="https://www.instagram.com/agstoterra/" isInstagram onMouseEnter={() => { setShowInstagram(true) }} onMouseLeave={() => { setShowInstagram(false) }}>
                    <Tooltip isInstagram show={showInstagram} text="Instagram" />
                    <FaInstagram size={20} />
                </IconWrapper>
            </IconsContainer>
            
        </Container>
    );
}

export default Footer;