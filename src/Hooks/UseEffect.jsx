import React, { useEffect, useState } from "react";

const UseEffect = () => {

    const [count,setCount] = useState(0);

    useEffect(() => {alert("hello, welcome to lima.ai")
        console.log("one time")
    },[]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000);
    // },[count]);

    useEffect(() => {
        setCount((count) => count + 1);
    },[])

    return(
        <>
            <div class="box">
                <h3>raja</h3>
                <h3>Count: {count}</h3>
            </div>
        </>
    )
}

export default UseEffect;