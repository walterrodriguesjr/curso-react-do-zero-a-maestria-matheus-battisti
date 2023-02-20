import { useState } from 'react';
const Teste = () => {

  const [titulo, setTitulo] = useState();

  const dd = (e) => {
    setTitulo(e.target.value);
}

  const handleEnviar = (e) => {
    e.preventDefault();
    console.log("Teste de certo");
    console.log(titulo);
  };

  return (
    <div>
        <form onSubmit={handleEnviar}>
            <label>
                <span>Titulo:</span>
                <input type="text" name="titulo" onChange={dd}/>
            </label>
            <button type="submit">Enviar</button>
        </form>
    </div>
  )
}

export default Teste;

/* cria-se a estrutura do componente */
/* cria a esturtura do form */
/* adiciona o useState() para poder imprimir e alterar dados*/
/* por padrão, usa-se sempre inicio com handle */
