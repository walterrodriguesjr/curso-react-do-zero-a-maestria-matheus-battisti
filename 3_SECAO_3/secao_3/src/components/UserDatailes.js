
const UserDatailes = ({nome, idade, profissao}) => {
  return (
    <div>
        <h1>Dados Pessoais</h1>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissao}</li>
            {idade >= 18 ? (<li>Pode tirar carteira de habilitação</li>) : (<li>Não pode tirar carteira de habilitação</li>)}
        </ul>
    </div>
  )
}

export default UserDatailes;