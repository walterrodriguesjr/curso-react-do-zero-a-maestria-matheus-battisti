import Fragment from './components/Fragment';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import Conditionalrender from './components/Conditionalrender';
import Listrender from './components/Listrender';
import ManageData from './components/ManageData';
import ShowuserName from './components/ShowuserName';
import Teste from './components/Teste';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import Message from './components/Message';
import { useState } from 'react';
import ChangeMessageState from './components/ChangeMessageState';
import UserDatailes from './components/UserDatailes';





function App() {

  const cars = [
    { id: 1, brand: "Ferrari", color: "Amarelo", km: 1000 },
    { id: 2, brand: "Fiat", color: "Azul", km: 6000 },
    { id: 3, brand: "Ford", color: "Vermelho", km: 70000 },
  ]

  const pessoas = [
    {id: 1, nome: "Pedro", idade: 32, profissao: "Vendedor"},
    {id: 2, nome: "João", idade: 10, profissao: "Autônomo"},
    {id: 3, nome: "Henrique", idade: 18, profissao: "Médico"},
  ]

  function showMessage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage] = useState("");

  const handleMessage = (msg) => {
    setMessage(msg);
  }

  return (
    <div className="App">
      <h1>Avançando em React</h1>
      <div>
        <img src="/img1.jpg" alt="Paisagem" />
      </div>
      <div>
        <img src={City} alt="Cidade" />
      </div>
      <ManageData />

      <Teste />


      <Listrender />

      {/* Condicional ternária */}
      <Conditionalrender />

      {/* props */}
      <ShowuserName name="Walter" idade="36" cidade="Curitiba" />

      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul" />

      {/* reaproveitando */}
      <CarDetails brand="Ford" km={4000} color="Vermelho" />

      {/* reaproveitando */}
      <CarDetails brand="Fiat" km={60000} color="Verde" />

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails key={car.id} brand={car.brand} color={car.color} km={car.km} />

      ))}

      {/* Fragments */}
      <Fragment propFragment="teste" />

      {/* children */}
      <Container myValue={"teste"}>
        <p>este é o conteúdo</p>
        <h1>testando</h1>
      </Container>

      {/* executar função com prop */}
      <ExecuteFunction myFunction={showMessage}/>

      {/* state lift */}
      <Message msg={message}/>
      <ChangeMessageState handleMessage={handleMessage}/>

      {/* desafio 4 */}
      {/* inserindo diretamente no componente pai */}
      <UserDatailes nome={"Walter"} idade={11} profissao={"Policial"}/>
      <UserDatailes nome={"Charlene"} idade={18} profissao={"Veterinária"}/>
      <UserDatailes nome={"Renan"} idade={34} profissao={"Advogado"}/>

      {/* inserindo com base em um objeto de dados de pessoas definido no componente pai */}
      {pessoas.map((pessoa) => (
        <UserDatailes key={pessoa.id} nome={pessoa.nome} idade={pessoa.idade} profissao={pessoa.profissao}/>
      ))}
    </div>
  );
}

export default App;
