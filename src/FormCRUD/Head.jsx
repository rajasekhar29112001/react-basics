import React, { useState } from "react";
import FormTable from "./FormTable";
import Form from "./Form";

const Head = () => {

    const [display,setDisplay] = useState("Form");
    console.log(display);

    const [obj,setObj] = useState({name:"",age:"",mail:"",gender:""});
    const [arr,setArr] = useState([]);

    function deleteData(index){
        console.log("index",index)
        arr.splice(index,1);
        <FormTable/>
    }
  
    return(
        <>
            <header class="hea">
                <button onClick={() => setDisplay("Form")}>Form</button>
                <button onClick={() => setDisplay("Table")}>Table</button>
                {display === "Form" ? <Form obj={obj} setObj={setObj} arr={arr} setArr={setArr}/> : null}
                {display === "Table" ? <FormTable Data={arr} deleteData={deleteData}/> : null}
            </header>
        </>
    )
}

export default Head;