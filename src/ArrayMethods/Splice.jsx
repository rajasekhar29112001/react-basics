import React from "react";
import { ArrData } from "../ArrData";
import DisplayData from "./DisplayData";

const Splice = () => {

    const spliceData = ArrData.splice(2,2,{name:"john",age:30,gender:"male"},{name:"alexa",age:16,gender:"female"});
    console.log(spliceData);
    
    return(
        <>
            <h4>Splice</h4>
            <DisplayData Data={ArrData}/>
        </>
    )
}

export default Splice;