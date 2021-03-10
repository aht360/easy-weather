import React, { useRef, useCallback, useState } from 'react';

import { Container, RegisterContainer } from './styles';
import { FiLock } from 'react-icons/fi'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link, useHistory } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';

import Input from '../../components/Input';
import SubmitButton from '../../components/SubmitButton';
import Footer from '../../components/Footer';

interface SignInFormData {
  email: string;
  password: string;
}

const Landing: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  const handleSubmit = useCallback( (data: SignInFormData) => {
    console.log(data)
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false)
      toast.error('Ocorreu um erro ao atualizar sua senha, entre pelo Google!');
      history.push('/');
    }, 3000);
    
  }, [history])

  return (
    <Container>
      <Toaster 
        position="top-right"
      />
      <Form ref={formRef} onSubmit={handleSubmit} >
        <RegisterContainer>
          <h1>Defina Nova senha</h1>
          <Input 
            name="password" 
            icon={FiLock} 
            placeholder="Nova senha" 
            type="password"
          />
          <Input 
            name="password" 
            icon={FiLock} 
            placeholder="Confirmar nova senha" 
            type="password"
          />
          <SubmitButton
            type="submit"
            loading={loading}
          >
            Atualizar senha
          </SubmitButton>
          <footer>
            <Link to="/" >
              Fazer login
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