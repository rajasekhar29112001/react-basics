import React,{useState} from "react";

const KeyUp = () => {

    let [name,setName] = useState("");

    const keyUpEvent = (event) => {
        setName(event.target.value.toUpperCase());  
    }

    return(
        <>
            <div class="box">
                <h2>Enter name: {name}</h2>
                <input type="text" onKeyUp={keyUpEvent} placeholder="onkeyUp"/>
            </div>
        </>
    )
}

export default KeyUp;