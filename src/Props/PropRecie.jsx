import React from "react";

const PropRecie = (props) => {
    return(
        <>
             <div class="box">
                <ol>
                    {
                        <li>{props.Data1.name} {props.Data1.age} {props.Data1.gender}</li>
                    }
                </ol>
            </div>
        </>
    )
}

export default PropRecie;