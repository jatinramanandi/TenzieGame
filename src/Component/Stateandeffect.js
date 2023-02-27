import React, { useState,useEffect } from 'react'

function Stateandeffect() {
    const [toggleData,settoggleData] = useState(true);
    const [screenWidth,setscreenWidth] = useState(window.innerWidth)

    useEffect(() => {
        window.addEventListener("resize",()=>{
            setscreenWidth(window.innerWidth)
        })
    }, [])
    

    const toggler = () => {
        settoggleData(prevShow => !prevShow);
    }

  return (
    <>  
        <button type='button' onClick={toggler}>Toggle Window Tracker</button>
        {toggleData && <h1>Windows Width: {screenWidth}</h1> }
    </>
  )
}

export default Stateandeffect