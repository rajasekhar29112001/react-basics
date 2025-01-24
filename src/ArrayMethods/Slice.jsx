import React from "react";
import { ArrData } from "../ArrData";
import DisplayData from "./DisplayData";

const Slice = () => {

    const sliceData = ArrData.slice(2,6);

    return(
        <>
            <h4>Slice</h4>
            <DisplayData Data={sliceData}/>
        </>
    )
}

export default Slice;