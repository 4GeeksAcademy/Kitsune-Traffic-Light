import React, { useState } from "react"
import Purple from "./Purple";


const Semaforo = () => {
    const [color, setColor] = useState("none");
  

    const toggleColor = () => {
        if (color === "red") setColor("green");
        else if (color === "green") setColor("yellow");
        else if (color === "yellow") setColor("red");
         
    };


    return(
    <div className="trafficLight">
        <div className="d-flex">
            <div className= "container mt-5">
                <div onClick={() => setColor("red")} className= {`redLight ${color === "red" ? "glow" : " "}`}></div> 
                <div onClick={() => setColor("yellow")} className= {`yellowLight ${color === "yellow" ? "glow" : " "}`}></div>  
                <div onClick={() => setColor("green")} className= {`greenLight ${color === "green" ? "glow" : " "}`}></div>  
            </div>
            <div className="remix-button">
                <button onClick={toggleColor} className="btn btn-primary">Remix</button>
            </div>
        </div>

     <Purple />
        
    
    </div>
    )
}

export default Semaforo

