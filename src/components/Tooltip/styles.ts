import styled, {css} from 'styled-components';

interface TooltipProps{
    isLinkedin?: boolean;
    isFacebook?: boolean;
    isGithub?: boolean;
    isYoutube?: boolean;
    isInstagram?: boolean;
}

export const Container = styled.aside<TooltipProps>`

    position: absolute;
    top: -33px;
    left: 0;
    transform: translateX(-30%);
    width: 80px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    border-radius: 4px;
    background: #666360;
    color: #fff;
    animation: downUp 0.3s 1;
    
    span{
        font-size: 12px;
        &::before {
            content: '';
            border-style: solid;
            border-color: #666360 transparent;
            border-width: 6px 6px 0 6px;
            top: 100%;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
        }
    }

    ${props =>
        props.isFacebook &&
        css`
        background-color: #3b5999;
        span{
            &::before {
                border-color: #3b5999 transparent;
            }
        }
        
    `}

    ${props =>
        props.isYoutube &&
        css`
        background-color: #de463b;
        span{
            &::before {
                border-color: #de463b transparent;
            }
        }
    `}

    ${props =>
        props.isGithub &&
        css`
            background-color: #333333;
            span{
            &::before {
                border-color: #333333 transparent;
            }
        }
        }
    `}

    ${props =>
        props.isInstagram &&
        css`
        background-color: #e1306c;
        span{
            &::before {
                border-color: #e1306c transparent;
            }
        }
    `}

    ${props =>
        props.isLinkedin &&
        css`
        background-color: #0a66c2;
        span{
            &::before {
                border-color: #0a66c2 transparent;
            }
        }
    `}

    @keyframes downUp {
        0% {
            top: 10px;
            opacity: 0;
        }
        100% {
            top: -33px;
            opacity: 1;
        }
    }

`;