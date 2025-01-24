import React from "react";

const PropRecieve = ({Data}) => {
    return(
        <>
            <div class="box">
                <ol>
                    {
                        Data.map((obj) => (
                            <li>{obj.name} {obj.age} {obj.gender}</li>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default PropRecieve;