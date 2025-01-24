import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {

    const [count,setCount] = useState(0);
    const ref = useRef(0);
    console.log(ref)

    const inputRef = useRef(null);

    function changeCount(){
        setCount(count => count + 1)
        console.log("state value",count)
    }

    useEffect(() => {
        console.log("ref count ++")
    })

    function changeRefCount(){
        ref.current++;
        console.log("ref value",ref)
    }

    function inputRefValue(){
        inputRef.current.focus();
        inputRef.current.style.backgroundColor="yellow";
        ref.current++;
        console.log("inputRef",ref)
    }
    
    return(
        <>
            <div class="box">
                <h3>{count}</h3>
                <button type="button" onClick={changeCount}>Count++</button>
                <h3>{ref.current}</h3>
                <button type="button" onClick={changeRefCount}>Ref++</button>
                <br/><br/>
                <input ref={inputRef}/>
                <button type="button" onClick={inputRefValue}>Input Ref</button>
            </div>
        </>
    )
}

export default UseRef;