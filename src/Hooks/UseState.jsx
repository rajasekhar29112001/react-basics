import React, { useState } from "react";

const UseState = () => {

    let surName = "venu";
    surName = "gopal"
    const [name,setName] = useState("raja");
    const [age,setAge] = useState(23);
    const [obj,setObj] = useState({village:"mdp",pin:533308});
    const [arr,setArr] = useState([12,23,34,45,56,67]);

    return(
        <>
            <div class="box"> 
                <h3>SurName: {surName}</h3> 
            
                <h2>Name: {name}</h2> 
                <button type="button" onClick={() => {setName("sekhar")}}>Name</button> 
                <h2>Age: {age}</h2>
                <button type="button" onClick={() => {setAge(20)}}>Age</button>  
                <h2>Village: {obj.village}</h2> 
                <h2>Pin: {obj.pin}</h2> 
                <button type="button" onClick={() => {setObj({...obj,pin:232322})}}>Obj</button> 
                <h2>Arr: {arr}</h2>
                {
                    arr.map((e) => (
                        <li>{e}</li>
                    ))
                }
                <br/> 
                <button type="button" onClick={() => {setArr(["sekhar","venu","raja","santhu"])}}>Arr</button> 
            </div>   
        </>
    )
}

export default UseState;