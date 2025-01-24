import React from "react";

const MouseDown = () => {

    const mouseDownEvent = () => {
        alert("Hello! Welcome to Lima.ai")
    }

    return(
        <>
            <div class="box">
                <button type="button" onMouseDown={mouseDownEvent}>onMouseDown</button>
            </div>
        </>
    )
}

export default MouseDown;