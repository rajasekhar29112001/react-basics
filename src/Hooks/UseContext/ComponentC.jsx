import React, { useContext, UserContext } from "react";

const ComponentC = () => {

const name = useContext(UserContext);

    return(
        <>
            <h2>venu</h2>
            <h2>good night!, "{name}"</h2>
        </>
    )
}

export default ComponentC;