import React from 'react';

import { Container } from './styles';

interface TooltipProps{
    show: boolean;
    text: string;
    
    isLinkedin?: boolean;
    isFacebook?: boolean;
    isGithub?: boolean;
    isYoutube?: boolean;
    isInstagram?: boolean;
}

const Tooltip: React.FC<TooltipProps> = ({ show, text, isLinkedin, isYoutube, isInstagram, isGithub, isFacebook }) => {
  return (
      <>
        {
            show &&
            <Container isLinkedin={isLinkedin} isFacebook={isFacebook} isYoutube={isYoutube} isGithub={isGithub} isInstagram={isInstagram}>
                <span>{text}</span>
            </Container>
        }
      </>
  );
}

export default Tooltip;