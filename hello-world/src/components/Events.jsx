const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);

        console.log('your button it working');
    };

    const render = (x) => {

        if(x) {
            return <h1> Render this!</h1>
        } else {
            return <h1>I can render this too</h1>
        }
    }

    return (
        <div>
            <button onClick={handleMyEvent}>Click here</button>
            <div>
                <button onClick={() => console.log('clicou')}>Click here too</button>
                <button onClick={() => {
                    if(true) {
                        console.log("this shouldnt exist =(");
                    }
                }}>Please click here</button>
            </div>
            {render(true)}
            {render(false)}
        </div>
    )
}

export default Events;