import  Fragment  from './components/Fragment';
import City from './assets/city.jpg';
import CarDetails from './components/CarDetails';
import Conditionalrender from './components/Conditionalrender';
import Listrender from './components/Listrender';
import ManageData from './components/ManageData';
import ShowuserName from './components/ShowuserName';
import Teste from './components/Teste';

   


function App() {

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", km:1000},
    {id: 2, brand: "Fiat", color: "Azul", km:6000},
    {id: 3, brand: "Ford", color: "Vermelho", km:70000},
  ]

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
      <ShowuserName name="Walter" idade="36" cidade="Curitiba"/>

      {/* destructuring */}
      <CarDetails brand="VW" km={100000} color="Azul"/>

      {/* reaproveitando */}
      <CarDetails brand="Ford" km={4000} color="Vermelho"/>

      {/* reaproveitando */}
      <CarDetails brand="Fiat" km={60000} color="Verde"/>

      {/* loop em array de objetos */}
      {cars.map((car) => (
        <CarDetails brand={car.brand} color={car.color} km={car.km}/>

        ))}

       {/* Fragments */}
        <Fragment propFragment="teste"/>
    </div>
  );
}

export default App;
