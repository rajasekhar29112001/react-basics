import React from "react";
import { ArrData } from "../ArrData";

const Table = () => {
    return (
        <>
            <div class="box">
                <table border={1} >
                    <thead>
                        <tr>    
                            <th>Name</th>
                            <th>Age</th>
                            <th>Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        ArrData.map((obj) => (
                            <tr>
                                <th>{obj.name}</th>
                                <th>{obj.age}</th>
                                <th>{obj.gender}</th>
                            </tr>
                        ))
                    }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Table;