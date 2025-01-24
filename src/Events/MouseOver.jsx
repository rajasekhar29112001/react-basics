import React from "react";

const MouseOver = () => {

    const mouseOverEvent = () => {
        alert("Hello! Welcome to Lima.ai")
    }

    return(
        <>
            <div class="box">
                <button type="button" onMouseOver={mouseOverEvent}>onMouseOver</button>
            </div>
        </>
    )
}

export default MouseOver;