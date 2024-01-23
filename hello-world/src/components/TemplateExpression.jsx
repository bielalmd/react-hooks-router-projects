const TemplateExpressions = () => {
    const name = 'Gabriel';
    const data = {
        age: 26,
        job: 'Desenvolvedor'
    }

    return (
        <div>
            <h1>Olá {name}, tudo bem?</h1>
            <h1>Voce atua como: {data.job}</h1>
            <p>{console.log("ola")}</p>
        </div>
    );

}

export default TemplateExpressions;