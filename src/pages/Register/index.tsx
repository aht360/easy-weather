import React, { useRef, useCallback, useState } from 'react';

import { Container, RegisterContainer } from './styles';
import { FiMail, FiLock, FiUser } from 'react-icons/fi'
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

const Register: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const [ loading, setLoading ] = useState(false);
  const history = useHistory();

  const handleSubmit = useCallback( (data: SignInFormData) => {
    console.log(data)
    setLoading(true);

    window.setTimeout(() => {
      setLoading(false)
      toast.error('Ocorreu um erro ao realizar o cadastro. Entre pelo Google!');
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
          <h1>Fazer cadastro</h1>
          <Input 
            name="nome" 
            icon={FiUser} 
            placeholder="Nome" 
            type="text"
          />
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
          <Input
              name="confirm_password"
              icon={FiLock}
              type="password"
              placeholder="Confirmar senha"
          />
          <SubmitButton
            type="submit"
            loading={loading}
          >
            Cadastrar
          </SubmitButton>
          <footer>
            <Link to="/" >
              Fazer login
            </Link>
          </footer>
        </RegisterContainer>
      </Form>
      <Footer />
    </Container>    
  );
}

export default Register;