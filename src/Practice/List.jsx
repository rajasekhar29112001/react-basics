import React from "react";

const List = () => {

    let arr = ["raja","venu","gopal","santhu"];

    return (
        <>
            <div class="box">
                <ol type="A">
                    {
                        arr.map((e) => (
                            <li>{e}</li>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}

export default List;