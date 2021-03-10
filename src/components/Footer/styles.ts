import styled, {css} from 'styled-components';

interface IconWrapperProps {
    isLinkedin?: boolean;
    isFacebook?: boolean;
    isGithub?: boolean;
    isYoutube?: boolean;
    isInstagram?: boolean;
}

export const Container = styled.div`
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    background: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const IconsContainer = styled.div`
    height: 100%;
    width: 400px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`;

export const IconWrapper = styled.a<IconWrapperProps>`
    width: 33px;
    height: 33px;
    border-radius: 50%;
    border: 1px solid #666360;
    position: relative;
    cursor: pointer;
    transition: all linear 0.3s;
    svg{
        transition: all linear 0.1s;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translateX(-50%) translateY(-50%);
        color: #666360;
    }
    ${props =>
        props.isFacebook &&
        css`
        &:hover {
            border-color: #3b5999;
            background-color: #3b5999;
            
            svg{
                color: #ffffff;
                border: none;
            }
        }
    `}

    ${props =>
        props.isYoutube &&
        css`
        &:hover {
            border-color: #de463b;
            background-color: #de463b;
            
            svg{
                color: #ffffff;
                border: none;
            }
        }
    `}

    ${props =>
        props.isGithub &&
        css`
        &:hover {
            border-color: #333333;
            background-color: #333333;
            
            svg{
                color: #ffffff;
                border: none;
            }
        }
    `}

    ${props =>
        props.isInstagram &&
        css`
        &:hover {
            border-color: #e1306c;
            background-color: #e1306c;
            
            svg{
                color: #ffffff;
                border: none;
            }
        }
    `}

    ${props =>
        props.isLinkedin &&
        css`
        &:hover {
            border-color: #0a66c2;
            background-color: #0a66c2;
            
            svg{
                color: #ffffff;
                border: none;
            }
        }
    `}
`;