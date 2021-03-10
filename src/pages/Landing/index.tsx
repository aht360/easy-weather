import React, { useRef, useCallback, useState } from 'react';

import { Container, RegisterContainer, GoogleBtn } from './styles';
import { FiMail, FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { GoogleLogin } from 'react-google-login';

import { refreshTokenSetup } from '../../utils/refreshToken';
import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Footer from '../../components/Footer';

import { useAuth } from '../../hooks/auth';
import { FaGoogle } from 'react-icons/fa';

interface SignInFormData {
  email: string;
  password: string;
}

const Landing: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();
  const { signIn } = useAuth();


  const handleSubmit = useCallback( (data: SignInFormData) => {
    
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false)
      toast.error('Faça login pelo Google!');
      history.push('/dashboard');
    }, 2000);
    
  }, [history]);

  const onSuccess = (res: any) => {
    console.log(res)
    const user = {
      id: res.profileObj.googleId,
      name: res.profileObj.name,
      email: res.profileObj.email,
      avatar_url: res.profileObj.imageUrl,
      givenName: res.profileObj.givenName,
      familyName: res.profileObj.familyName
    }
  
    const token = res.accessToken;
    
    toast.success(`Olá, ${res.profileObj.name}`);
    signIn(token, user);

    history.push('/dashboard');
    refreshTokenSetup(res);
  };

  const onFailure = (res: any) => {
    console.log('Login failed: res:', res);
    toast.error('Erro ao fazer login!');
  };


  

  return (
    <Container>
      <Toaster 
        position="top-right"
      />
      <Form ref={formRef} onSubmit={handleSubmit} >
        <RegisterContainer>
          <h1>Fazer login</h1>
          <Input 
            name="email" 
            icon={FiMail} 
            placeholder="E-mail" 
            type="text"
          />
          <Input
              name="password"
              icon={FiLock}
              type="password"
              placeholder="Senha"
          />
          <SubmitButton
            type="submit"
            loading={loading}
          >
            Entrar
          </SubmitButton>
          <GoogleLogin
            clientId="754638029895-1onpbr2m85d6gsod7iiq21v6q0q66asf.apps.googleusercontent.com"
            
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}

            render={renderProps => (
              <GoogleBtn onClick={renderProps.onClick}> <FaGoogle size={14}/> Entrar com Google</GoogleBtn>
            )}
          />
          <footer>
            <Link to="/forgot-password" >
              Esqueci minha senha
            </Link>
            <Link to="/register">
              Criar conta
            </Link>
          </footer>
        </RegisterContainer>
      </Form>
      <Footer />
    </Container>    
  );
}

export default Landing;