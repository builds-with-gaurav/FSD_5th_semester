import { useState } from 'react';

const App = () => {
    const [count, setCount] = useState(0);

    const decrement = () => {
        setCount(count - 1);
        console.log(count);
    };

    const increment = () => {
        setCount(count + 1);
        console.log(count);
    };

    const reset = () => {
        setCount(0);
    };

    return (
        <div style={{ textAlign: "center" }}>
            <h1 style={{ backgroundColor: "black", color: "white" }}>
                Counter APP
            </h1>
            <span style={{ margin: "0 20px" }}>
                {count}
            </span><br></br>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>RESET</button>
            <button onClick={increment}>+</button>
            
        </div>
    );
};

export default App;