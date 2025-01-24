import React from "react";
import { ArrData } from "../ArrData";
import PropRecieve from "./PropRecieve";
import PropRecie from "./PropRecie";
import PropsRecDestr from "./PropsRecDestr";

const PropSend = () => {

    const obj = {
        name:"jack",
        age:35,
        gender:"male"
    }

    return(
        <>
            <PropRecieve Data={ArrData}/>
            <PropRecie Data1={obj}/>
            <PropsRecDestr name={obj.name} age={obj.age} gender={obj.gender}/>
        </>
    )
}

export default PropSend;