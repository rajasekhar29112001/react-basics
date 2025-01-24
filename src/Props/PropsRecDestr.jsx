import React from "react";

const PropsRecDestr = ({name,age,gender}) => {
    return(
        <>
            <div class="box">
                <ol>
                    {
                        <li>{name} {age} {gender}</li>
                    }
                </ol>
            </div>
        </>
    )
}

export default PropsRecDestr;