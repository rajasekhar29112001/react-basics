import React from "react";
import { ArrData } from "../ArrData";
import DisplayData from "./DisplayData";

const Sort = () => {

    const sortData = ArrData.sort((a,b) => a.name - b.name);
    console.log(sortData)
    console.log(ArrData)

    return(
        <>
            <h4>Sort</h4>
            <DisplayData Data={sortData}/>
        </>
    )
}

export default Sort;