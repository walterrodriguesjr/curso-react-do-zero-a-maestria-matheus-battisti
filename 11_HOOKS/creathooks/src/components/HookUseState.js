import React, { useState } from 'react'


const HookUseState = () => {
    // 1 - useState
    const [name, setName] = useState("Walter")

    const changeNames = () => {
        setName("Renan");
    }

    // 2- useState e input
    const [age, setAge] = useState(18)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(age);

    }

    return (
        <div>
            <h1>HookUseState</h1>
            <p>Nome: {name}</p>
            <button onClick={changeNames}>Mudar Nome</button>

            {/* 2- useState e input */}
            <form onSubmit={handleSubmit}>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)} />
                <input type="submit" value="Enviar" />
            </form>

            <p>Você tem {age} anos de idade.</p>

        </div>
    )
}

export default HookUseState