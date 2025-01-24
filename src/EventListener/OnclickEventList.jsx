import React, { useEffect } from "react";

const OnclickEventList = () => {

    useEffect(() => {
        document.getElementById("btn").addEventListener("click",() => {
            alert("Hello! Welcome to lima.ai");
        })
    },[])

    return (
        <>
            <div class="box">
                <button id="btn" type="button">Event listener onclick</button>
            </div>
        </>
    )
}

export default OnclickEventList;