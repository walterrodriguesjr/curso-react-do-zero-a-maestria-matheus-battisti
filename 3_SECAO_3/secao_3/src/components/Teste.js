import { useState } from "react";


const Teste = () => {

    const [users] = useState([
        {id: 1, name: "Walter", cidade: "Curitiba"},
        {id: 2, name: "Charlene", cidade: "Itapeva"},
        {id: 3, name: "Renan", cidade: "Buri"},
    ])

  return (
    <div>
        <ul>
            {users.map((item) => (
                <li key={item.id}>{item.name} - {item.cidade}</li>
            ))}
        </ul>
    </div>
  )
}

export default Teste;