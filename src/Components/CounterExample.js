import React, { useState } from "react";

function CounterExample(props){
    const [count, setCount] = useState(10);

    return (
        <div>
            <h1>
                {count}
            </h1>
            <h1 onClick={() => setCount(count + 1)}>
                Plus
            </h1>
        </div>        
    )
}


export default CounterExample;