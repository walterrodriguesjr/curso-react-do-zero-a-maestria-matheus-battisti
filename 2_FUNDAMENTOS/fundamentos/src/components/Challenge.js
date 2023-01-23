
const Challenge = () => {

    const soma = () => {
        const a = 7;
        const b = 8;
        const result = a + b;
        console.log(result);

    }

    return (
        <div>
            <button onClick={soma}>Somar</button>
        </div>
    )
}

export default Challenge;