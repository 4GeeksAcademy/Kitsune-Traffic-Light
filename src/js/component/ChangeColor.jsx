import React from "react";
import { useState } from "react";

const ChangeColor = () => {
    const [color, setColor1] = useState("red");

    const changeColor = () => {

        if (color === "red") {setColor1("yellow"); } 
        else if (color === "yellow") { setColor1("green"); } 
        else if (color === "green") {setColor1("red");}
    };
    
    return (
        <>
            <div className="remix-button">
                <button onClick={changeColor} className="btn btn-primary"> REMIX</button>
            </div>
        </>
  );
};

export default ChangeColor;
