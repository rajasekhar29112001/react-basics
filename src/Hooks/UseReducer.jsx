import React, {useReducer} from "react";

const reducerFun = (state,action) => {
    console.log(state)
    console.log(action)

    switch(action.type){
        case "increment":
            return state+1;
        case "decrement":
            return state-1;
        case "division":
            return state/2;
        case "multiply":
            return state*2;
        default:
            console.log("not in range")
    }
}

const UseReducer = () => {

    const initialState = 100;
    console.log("initialState",initialState);

    const [state,dispatch] = useReducer(reducerFun,initialState);
    console.log("state",state);

    return(
        <>
            <div class="box">
                <h2>{initialState}</h2>

                <h2>{state}</h2>
                
                <button type="button" onClick={() => dispatch({type:"increment"})}> + </button>

                <button type="button" onClick={() => dispatch({type:"decrement"})}> - </button>

                <button type="button" onClick={() => dispatch({type:"division"})}> / </button>

                <button type="button" onClick={() => dispatch({type:"multiply"})}> * </button>
            </div>
        </>
    )
}

export default UseReducer;