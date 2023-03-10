//CSS
import styles from './Register.module.css';

//BIBLIOTECAS DO REACT
import { useState, useEffect } from 'react';
import { useAuthentication } from '../../hooks/useAuthentication';

const Register = () => {

    /* STATES DE GETTER E SETTER DOS DADOS DO FORMULÁRIO */
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [error, setError] = useState("")

    const { createUser, error: authError, loading } = useAuthentication();

    /* MÉTODO DE SUBMIT DO FORMULÁRIO */
    const handleSubmit = async (e) => {
        e.preventDefault();

        /* ZERA O ERRO DO STATE ERROR */
        setError("")

        /* CONST USER RECEBE UM ARRAY COM OS DADOS GET DO STATE DO FORM */
        const user = {
            displayName,
            email,
            password,
        }

        if (password !== confirmPassword) {
            setError("As senhas precisam ser iguais!");
            return;
        }

        const res = await createUser(user)

        console.log(res);
    };

    useEffect(() => {
        if (authError) {
            setError(authError);
        }
    }, [authError])


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
                        /* GET QUE RECEBE OS DADOS SETADOS DO INPUT */
                        value={displayName}
                        /* SETA OS DADOS INSERIDOS NO INPUT, USANDO O MÉTODO SET E QUE SERÁ ARMAZENADO PELO MÉTODO GET(VALUE) */
                        onChange={(e) => setDisplayName(e.target.value)} />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input type="email"
                        name="email"
                        required
                        placeholder='E-mail do usuário'
                        /* GET QUE RECEBE OS DADOS SETADOS DO INPUT */
                        value={email}
                        /* SETA OS DADOS INSERIDOS NO INPUT, USANDO O MÉTODO SET E QUE SERÁ ARMAZENADO PELO MÉTODO GET(VALUE) */
                        onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    <span>Senha:</span>
                    <input type="password"
                        name="password"
                        required
                        placeholder='Insira a sua senha'
                        /* GET QUE RECEBE OS DADOS SETADOS DO INPUT */
                        value={password}
                        /* SETA OS DADOS INSERIDOS NO INPUT, USANDO O MÉTODO SET E QUE SERÁ ARMAZENADO PELO MÉTODO GET(VALUE) */
                        onChange={(e) => setPassword(e.target.value)} />
                </label>
                <label>
                    <span>Confirmação de senha:</span>
                    <input type="password"
                        name="confirmPassword"
                        required
                        placeholder='Confirme a sua senha'
                        /* GET QUE RECEBE OS DADOS SETADOS DO INPUT */
                        value={confirmPassword}
                        /* SETA OS DADOS INSERIDOS NO INPUT, USANDO O MÉTODO SET E QUE SERÁ ARMAZENADO PELO MÉTODO GET(VALUE) */
                        onChange={(e) => setConfirmPassword(e.target.value)} />
                </label>
                {!loading && <button className='btn'>Cadastrar</button>}
                {loading && (
                <button className='btn' disabled>Aguarde...</button>

                )}

                {/* MOSTRA O ERRO NA TELA, CASO password e confirmPassword não sejam iguais*/}
                {error && <p className="error">{error}</p>}

            </form>
        </div>
    )
}

export default Register