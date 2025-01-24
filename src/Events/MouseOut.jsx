import React from "react";

const MouseOut = () => {

    const mouseOutEvent = () => {
        alert("Hello! Welcome to Lima.ai")
    }

    return(
        <>
            <div class="box">
                <button type="button" onMouseOut={mouseOutEvent}>onMouseOut</button>
            </div>
        </>
    )
}

export default MouseOut;