import React from "react";

const FormTable = ({Data}) => {

    console.log(Data);
  
    return(
        <>
            <div class="box">
                <table border={1}>
                    <thead>
                        <tr>
                            <th>S.No</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Mail</th>
                            <th>Gender</th>
                            <th>Changes</th>
                            <th>Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            Data.map((obj,index) => (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{obj.name}</td>
                                    <td>{obj.age}</td>
                                    <td>{obj.mail}</td>
                                    <td>{obj.gender}</td>
                                    <td><button>Edit</button></td>
                                    <td><button>Delete</button></td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default FormTable;