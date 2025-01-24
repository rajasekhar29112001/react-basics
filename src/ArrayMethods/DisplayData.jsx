import React from "react";

const DisplayData = ({Data}) => {
    return(
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
                        Data.map((obj) => (
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

export default DisplayData;