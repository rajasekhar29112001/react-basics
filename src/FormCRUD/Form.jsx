import React from "react";

const Form = ({obj,setObj,arr,setArr}) => {

    console.log(obj);

    function saveData(){
        (obj.name==="" || obj.age==="" || obj.mail==="" || obj.gender==="" ) ? alert("Please enter all fields") : setArr([...arr,obj]);
        setObj({name:"",age:"",mail:"",gender:""});
    } 

    console.log(arr);
    
    return(
        <>  
            <div class="box">
                <form>
                    <label>Name: <input type="text" value={obj.name} onChange={(e) => setObj({...obj,name:e.target.value})} placeholder="enter name"/></label><br/><br/>
                    <label>Age: <input type="number" value={obj.age} onChange={(e) => setObj({...obj,age:e.target.value})} placeholder="enter age"/></label><br/><br/>
                    <label>Mail: <input type="mail" value={obj.mail} onChange={(e) => setObj({...obj,mail:e.target.value})} placeholder="enter mail"/></label><br/><br/>
                    <label>Gender:  
                    <select value={obj.gender} onChange={(e) => setObj({...obj,gender:e.target.value})}>
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select></label><br/><br/>
                    <button type="button" onClick={saveData}>Save</button>
                </form>
            </div>
        </>
    )
}   

export default Form;