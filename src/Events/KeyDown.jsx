import React,{useState} from "react";

const KeyDown = () => {

    let [name,setName] = useState("raja");

    const keyDownEvent = (event) => {
        setName(name + " sekhar");
    }

    return(
        <>
            <div class="box">
                <h2>Enter name: {name}</h2>
                <input type="text" onKeyDown={keyDownEvent} placeholder="onkeyDown"/>
            </div>
        </>
    )
}

export default KeyDown;