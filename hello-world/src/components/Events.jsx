const Events = () => {

    const handleMyEvent = (e) => {
        console.log(e);

        console.log('your button it working');
    };

    return (
        <div>
            <button onClick={handleMyEvent}>Click here</button>
        </div>
    )
}

export default Events;