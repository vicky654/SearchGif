import React from "react";

 const Searchbar = ({GetInput , text}) =>{
     return(

        <div className="searchbar">
        <input value={text} type="text" placeholder="Search for GIF's" onChange={(event) => GetInput(event.target.value)} />
      </div> 
     )
 }
 export default Searchbar;