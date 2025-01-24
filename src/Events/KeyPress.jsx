import React,{useState} from "react";

const KeyPress = () => {

    let [name,setName] = useState("raja");

    const keyPressEvent = (event) => {
        setName(name + " sekhar");
    }

    return(
        <>
            <div class="box">
                <h2>Enter name: {name}</h2>
                <input type="text" onKeyPress={keyPressEvent} placeholder="onkeyPress"/>
            </div>
        </>
    )
}

export default KeyPress;