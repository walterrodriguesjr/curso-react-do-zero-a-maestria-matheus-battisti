import React, { useState, useEffect } from 'react';

import styles from "./Register.module.css";



const Register = () => {

  /* dados dos form em state */
  const [displayName, setDisplayName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")

/* método ativado pela submissão do form */
  const handleSubmit = (e) => {
    e.preventDefault();

    /* seta vazio na const error */
    setError("")

    /* a const user (objeto) recebe os dados dos states setados nos inputs */
    const user = {
      displayName,
      email,
      password
    }

    console.log(Register);

    /* condicional que exige que as senhas 2 dois campos de senhas sejam iguais */
    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais!")
      return
    }

  };

  return (
    <div className={styles.register}>
      <h1>Cadastre-se para postar</h1>
      <p>Crie seu usuário e compartilhe suas histórias</p>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Nome:</span>
          <input type="text"
            name="displayName"
            required
            placeholder='Nome do usuário'
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
          />
        </label>
        <label>
          <span>E-mail:</span>
          <input type="email"
            name="email"
            required
            placeholder='E-mail do usuário'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Senha:</span>
          <input type="password"
            name="password"
            required
            placeholder='Insira sua senha'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <label>
          <span>Confirmação de senha:</span>
          <input type="password"
            name="confirmPassword"
            required
            placeholder='Insira sua senha'
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        <button className='btn'>Cadastrar</button>

      {/* mensagem de erro dinâmica que as senhas e confirmaç~/ao estão diferentes */}
      {error && <p className='error'>{error}</p>}

      </form>
    </div>
  )
}

export default Register