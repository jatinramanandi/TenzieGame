import React, { useEffect, useState } from 'react'
import Die from './Die'

function Tenzie() {
  const [dice, setDice] = useState(allNewDice())
  const [tenzies,setTenzies] = useState(false)  

    function allNewDice() {
        const newDice = []
        for (let i = 0; i < 10; i++) {
            newDice.push(
              {
                value:Math.ceil(Math.random() * 6),
                isHeld:false
              }
            )
        }
        console.log(newDice);
        return newDice
    }
    
    const diceElements = dice.map((die,i) => <Die key={i} value={die.value} isHeld={die.isHeld} holdDice={()=>{
      holdDice(i);
    }}/>)

    const rollDice = () => {
      if(!tenzies) {
        setDice(oldDice => oldDice.map(die => {
            return die.isHeld ? 
                die :
                {
                  value:Math.ceil(Math.random() * 6),
                  isHeld:false
                }
        }))
    } else {
        setTenzies(false)
        setDice(allNewDice())
    }
    }

    const holdDice = (id) => {
        setDice(oldDice => oldDice.map((die,index) => {
          return index === id ? 
              {...die, isHeld: !die.isHeld} :
              die
      }))
    }

    useEffect(()=>{
      const allHeld = dice.every(die => die.isHeld)
        const firstValue = dice[0].value
        const allSameValue = dice.every(die => die.value === firstValue)
        if (allHeld && allSameValue) {
            setTenzies(true)
        }
    },[dice])

    return (
        <main>
            <h1 className="title">Tenzies</h1>
            <p className="instructions">Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
            <div className="die-container">
                {diceElements}
            </div>
            <button className="roll-dice" onClick={rollDice}>{tenzies ? "New Game" : "Roll"}</button>
        </main>
    )
}

export default Tenzie