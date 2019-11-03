import React, { FormEvent, useCallback, useState } from 'react';
import Button from '../../components/Button';
import Form from '../../components/Form';
import TextInput from '../../components/TextInput';
import Label from '../../components/Label';

function Login(): JSX.Element {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = useCallback(
    (
      event: FormEvent<HTMLFormElement | HTMLButtonElement> | undefined
    ): void => {
      if (event) {
        event.preventDefault();
      }
      console.log('Enviado!');
    },
    []
  );

  return (
    <Form onSubmit={handleSubmit}>
      <Label text="E-mail:" htmlFor="email" />
      <TextInput text={email} setText={setEmail} id="email" />
      <Label text="Senha:" htmlFor="senha" />
      <TextInput text={password} setText={setPassword} id="senha" />
      <Button text="Enviar" onPress={handleSubmit} />
    </Form>
  );
}

export default Login;
