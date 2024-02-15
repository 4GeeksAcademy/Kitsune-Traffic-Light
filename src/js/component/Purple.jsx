 
import React, { useEffect, useState } from 'react'
 

const Purple = () => {
    const [color, setColor] = useState(false);
    
    useEffect (()=>{
      if (color === true) {
        alert("¡Desbloqueaste un color nuevo!")
      }
    })
    
    return (
    <div className='lightButton'>
          <button type="button" className="purpleExtra" onClick={color == false ? () => setColor(true) : () => setColor(false)} >
					{color === false ? "Secret Color" : <div className='purpleLight'> </div>}
          </button>
    </div>
  )
}

export default Purple

 