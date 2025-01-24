import React from "react";

const Variable = () => {

    const name = "raja";
    let age = 23;
    
    return(
        <>
            <div class="box">
                <p>{name}</p>
                <p>{age}</p>
            </div>
        </>
    )
}

export default Variable;