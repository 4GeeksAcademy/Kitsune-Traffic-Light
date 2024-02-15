import React from "react"
import { useState } from "react";
import Purple from "./Purple";
import ChangeColor from "./ChangeColor";
 

const Semaforo = () => {
    const [color, setColor] = useState("none");
    
    return(
    <div className="trafficLight">
        <div className="d-flex">
           
            <div className= "container mt-5">
           
                <div onClick={() => setColor("red")} className= {`redLight ${color == "red" ? "glow" : "none"}`}></div> 
                <div onClick={() => setColor("yellow")} className= {`yellowLight ${color == "yellow" ? "glow" : "none"}`}></div>  
                <div onClick={() => setColor("green")} className= {`greenLight ${color == "green" ? "glow" : "none"}`}></div>  
           
              

            </div>
        </div>

       <Purple />
        
       <ChangeColor/>
       
    </div>
    )
}

export default Semaforo