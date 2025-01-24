import React, { createContext } from "react";
import ComponentB from "./ComponentB";

const UserContext = createContext();

const ComponentA = () => {

    const name = "raja";

    return(
        <>
                <UserContext.Provider name={name}>
                    <h2>Hello! "{name}"</h2>
                    <ComponentB/>
                </UserContext.Provider>
        </>
    )
}

export default ComponentA;