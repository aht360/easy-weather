import React, { ButtonHTMLAttributes } from 'react';

import { Container, LoadingWrapper } from './styles';

type SubmitButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
    loading?: boolean;
};

const SubmitButton: React.FC<SubmitButtonProps> = ({ children, loading, type, ...rest }) => {
    return (
        <Container type={type} {...rest} 
            disabled={loading}
        >
            {
                loading ?
                    <LoadingWrapper>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </LoadingWrapper>
                    :
                    children
            }
        </Container>
    );
}

export default SubmitButton;