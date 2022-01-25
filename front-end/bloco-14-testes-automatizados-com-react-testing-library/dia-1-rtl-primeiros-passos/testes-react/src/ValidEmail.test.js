import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

test('Testando um componente, caso o email seja válido.', () => {
  const EMAIL_USER = 'email@email.com';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Válido');
  expect(isValid).toBeInTheDocument();
});
test('Testando um componente, caso o email seja inválido.', () => {
  const EMAIL_USER = 'emailerrado';
  render(<ValidEmail email={ EMAIL_USER } />);
  const isValid = screen.getByText('Email Inválido');
  expect(isValid).toBeInTheDocument();
});
test('Teste para ver se nao aparece email valido e email nao valido caso nao haja input', () =>{
  const EMAIL_USER = '';
  render(<ValidEmail email={EMAIL_USER} />);
  const validCard = screen.queryByTestId('valid');
  expect(validCard).not.toBeInTheDocument();
})
test('Verifica se muda para vermelho caso nao passe na validaçao', () => {
  const EMAIL_USER_ERRADO = 'emailerrado';
  render(<ValidEmail email={EMAIL_USER_ERRADO}/>)

  const validCard = screen.queryByTestId('valid');
  
  expect(validCard).toHaveAttribute('class', 'red');
})

test('Verifica se muda para verde caso nao passe na validaçao', () => {
  const EMAIL_USER_CERTO = 'email@email.com';
  render(<ValidEmail email={EMAIL_USER_CERTO}/>)

  const validCard = screen.queryByTestId('valid');
  
  expect(validCard).toHaveAttribute('class', 'green');
})