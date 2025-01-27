import React, { useState } from "react";

const UseState1 = () => {

    const [name,setName] = useState("raja");
    const [names,setNames] = useState("raja");
    const [count,setCount] = useState(0);

    function changeName(event){
        setName(event.target.value)
    }

    function changeNames(){
        setNames(name)
    }

    function setCounts(){
        setCount(count + 1)
    }

    function setCountes(){
        setCount(count - 1)
    }

    console.log("name",name)

    return(
        <>
            <div class="box">
                <h2>{name}</h2>
                <h2>{names}</h2>
                <input type="text" onChange={changeName}/>
                <button type="button" onClick={changeNames}>click</button>

                <h2>{count}</h2>
                <button type="button" onClick={setCounts}>+</button>
                <button type="button" onClick={setCountes}>-</button>
            </div>  
        </>
    )
}

export default UseState1;