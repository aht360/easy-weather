import React, { useRef, useCallback, useState } from 'react';

import { Container, RegisterContainer } from './styles';
import { FiMail } from 'react-icons/fi'
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
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

  const handleSubmit = useCallback( (data: SignInFormData) => {
    console.log(data)
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false)
      toast.error('E-mail não encontrado!');
    }, 3000);
    
  }, [])

  return (
    <Container>
      <Toaster 
        position="top-right"
      />
      <Form ref={formRef} onSubmit={handleSubmit} >
        <RegisterContainer>
          <h1>Esqueci minha senha</h1>
          <Input 
            name="email" 
            icon={FiMail} 
            placeholder="E-mail" 
            type="text"
          />
          <SubmitButton
            type="submit"
            loading={loading}
          >
            Recuperar senha
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