import { useState } from "react";

const Conditionalrender = () => {

    const [x] = useState(true);

    const [name] = useState("João");

    return (
        <div>
            <h1>Isso será exibido?</h1>
            {x && <p>Se x for true, sim!</p>}
            
            <h1>If ternário</h1>
            {name === "João" ? (
                <div>
                    <p>O nome é João</p>
                </div>
            )
                :
                (
                    <div>
                        <p>nome não encontrado</p>
                    </div>
                )}
        </div>
    )
}

export default Conditionalrender;