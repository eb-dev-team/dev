import React from "react";
import { useState } from "react";

export default function Example(){
    const [count, setCount] = useState(0);
    return (
        <div>
            <h3>hooks {count}</h3>
            <button onClick={setCount((prev)=>{prev++})}>버튼</button>
        </div>
    );
}