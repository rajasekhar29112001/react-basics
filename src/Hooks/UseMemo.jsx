import React, { useState, useMemo } from "react";

const UseMemo = () => {

    const [count,setCount] = useState(0);
    const [fact,setFact] = useState(10);
    // const fact = 10;

    function incrementCount(){
        setCount(() => setCount(count + 1));
        console.log("count ",count);
    }

    // let factorialValue = factNum(fact);
    let factorialValue = useMemo(() => factNum(fact),[fact]);

    function factNum(fact){
        console.log("factorial number")
        let val = 1;
        for(let i = fact;i >= 1;i--){
            val *= i;
        }
        return val;
    }

    return(
        <>
            <div class="box">
                    <h2>{count}</h2>
                    <button type="button" onClick={incrementCount}>Count++</button>

                    <h2>Fact Number= {fact}</h2>
                    <h2>Factorial value= {factorialValue}</h2>
                    <button type="button" onClick={() => {setFact(fact + 1)}}>Fact++</button>
            </div>
        </>
    )
}

export default UseMemo;