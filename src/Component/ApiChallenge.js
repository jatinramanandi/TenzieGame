import React, { useState,useEffect } from 'react'

function ApiChallenge() {
    const[StarWarsData,setStarWarsData] = useState();
    const[count,setCount] = useState(1);
    
    const clickHandler = () =>{
        setCount(count+1);
    }

    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
        .then(res=>res.json())
        .then(data=>setStarWarsData(data))
    },[count])

  return (
    <>
        <span>{JSON.stringify(StarWarsData,null,1)}</span>
        <br/>
        <br/>
        <br/>
        <button type='button' onClick={clickHandler}>Next Character</button>
    </>
  )
}

export default ApiChallenge