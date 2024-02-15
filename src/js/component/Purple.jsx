 
import React from 'react'
import { useState } from 'react';

const purple = () => {
    const [color, extraColor] = useState(false);
    
    
    return (
    <div className='lightButton'>
          <button type="button" className="purpleExtra" onClick={color == false ? () => extraColor(true) : () => extraColor(false)} >
					{color == false ? "Secret Color" : <div className='purpleLight'></div>}
          {color == true ? `${alert("¡Desbloqueaste un color nuevo!")}`: " "}</button>
    </div>
  )
}

export default purple

 