import React,{useEffect} from "react";

const MouseOverList = () => {

    useEffect(() => {
        document.getElementById("btn").addEventListener("mousedown",() => {
            alert("Hello! Welcome to lima.ai");
        })
    },[])

    return(
        <>
            <div class="box">
                <button id="btn" type="button">Event listener mousedown</button>
            </div>
        </>
    )
}

export default MouseOverList;