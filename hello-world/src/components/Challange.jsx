const Challange = () => {
    const num1 = 10;
    const num2 = 20

    const soma = () => {
            return console.log(num1 + num2);
    }
    return (
        <div>
            <p>esse é o numero {num1}</p>
            <p>e esse é o numero {num2}</p>
            <button onClick={soma}>Click aqui e some os dois</button>
        </div>
    )
}

export default Challange;

