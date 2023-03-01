import { useEffect, useState } from "react"

const HookUseEffect = () => {
    //useEffect, sem dependências 
    useEffect(() => {
        console.log("Estou sendo executado!");
    });

    const [number, setNumber] = useState(1)

    const changeSomething = () => {
        setNumber(number + 1);
    }

    // 2 - array de depências vazio 
    useEffect(() => {
        console.log("Serei executado apenas uma vez!");
    }, []);

    // 3 - item no array de depêndencias 
    const [anotherNumber, setAnotherNumber] = useState(0);

    useEffect(() => {
        if (anotherNumber > 0) {
            console.log("Sou executado apenas quando anotherNumber muda!");
        }
    }, [anotherNumber]);

    // 4 cleanup do useEffect 
    useEffect(() => {

        const timer = setTimeout(() => {
            console.log("Hello World!");

            return () => clearTimeout(timer);
        }, 2000);

    }, [anotherNumber])

    return (
        <div>
            <h2>useEffect</h2>
            <p>Number: {number}</p>
            <button onClick={changeSomething}>Executar</button>
            <p>Another Number: {anotherNumber}</p>
            <button onClick={() => setAnotherNumber(anotherNumber + 1)}>Mudar AnotherNumber!</button>
            <hr />
        </div>
    )
}

export default HookUseEffect