import React from "react";
import { ArrData } from "../ArrData";
import DisplayData from "./DisplayData";

const Filter = () => {

    const filterData = ArrData.filter((obj) => obj.age <= 20);
    console.log(filterData)

    return(
        <>
            <h4>Filter</h4>
            <DisplayData Data={filterData}/>
        </>
    )
}

export default Filter;