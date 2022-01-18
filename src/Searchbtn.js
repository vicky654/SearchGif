import React from "react";

const Searchbtn =({Getvalue})=>{
    return(
        <div>
            <h1> Search btn</h1>
            <div className="Searchbtn">
      <button style={{background: "black"}} onClick={()=>Getvalue('Hello')} >Hello</button>
      <button   style={{background: "red"}}onClick={()=>Getvalue('Smile')} >Smile</button>
      <button   style={{background: "orange"}} onClick={()=>Getvalue('Sad')} >Sad</button>
      <button  style={{background: "skyblue"}} onClick={()=>Getvalue('Good Morning')} >Good Morning</button>
      </div>
        </div>

    )
}
export default Searchbtn;