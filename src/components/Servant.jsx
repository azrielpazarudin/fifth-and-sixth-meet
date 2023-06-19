import React from "react";

function Servant(props){
    return (
        <>
        <div style={{backgroundColor:'brown',padding:'5px',margin:10,color:'white',width:'200px',textAlign:'center'}}>
            
            <h1>{props.name}</h1>
            <p>Id :{props.id}</p>
            <p>Star : {props.star}</p>
            
        </div>
        <br />
        </>
    )
}

export default Servant