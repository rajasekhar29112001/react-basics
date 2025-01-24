import React from "react";

const DblClick = () => {

    const dblclickEvent = () => {
        alert("Hello! Welcome to Lima.ai")
    }

    return(
        <>
            <div class="box">
                <button type="button" onDoubleClick={dblclickEvent}>onDoubleClick </button>
            </div>
        </>
    )
}

export default DblClick;