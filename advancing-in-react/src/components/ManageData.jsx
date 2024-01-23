import { useState } from "react";

const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(15);
  return (
    <div>
        <div>
            <button onClick={() => (someData = 15)}>Change variable</button>
            <p>Value: {someData}</p>
        </div>
        <div>
            <p>Value: {number}</p>
            <button onClick={() => setNumber(30)}>Change state</button>
        </div>
    </div>
  )
}

export default ManageData
