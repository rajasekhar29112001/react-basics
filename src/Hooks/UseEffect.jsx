import React, { useEffect, useState } from "react";

const UseEffect = () => {

    let obj = {
        name:"raja",
        age:23
    }

    let {age,name} = obj;
    console.log(age)
    console.log(name)

    const [count,setCount] = useState(0);

    const [value,setValue] = useState(0);


    useEffect(() => {alert("hello, welcome to lima.ai")
        console.log("one time")
    },[value]);

    // useEffect(() => {
    //     setTimeout(() => {
    //         setCount((count) => count + 1)
    //     }, 1000);
    // },[count]);

    // useEffect(() => {
    //     setCount((count) => count + 1);
    // },[])

    return(
        <>
            <div class="box">
                <h3>raja</h3>
                <h3>Count: {count}</h3>
                <button onClick={() => setCount(count + 1)}>count</button>
                <button onClick={() => setValue(value + 1)}>value</button>
            </div>
        </>
    )
}

export default UseEffect;