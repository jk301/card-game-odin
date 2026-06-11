// App.jsx
import { useState } from 'react'
import './App.css'

import { Header } from './components/head.jsx'
import { Cards } from './components/cards.jsx'
import { Winner } from './components/winner.jsx'
import { warframes } from './components/warframes.jsx'

function App() {
  const [bestScore, setBestScore] = useState(0)
  const [currScore, setCurrScore] = useState(0)
  const [clicked, setClicked] = useState([])
  const [frames, setFrames] = useState(warframes)
  const [winner, setWinner] = useState(false)

  function fisherYates(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function restart() {
    setBestScore(0)
    setCurrScore(0)
    setClicked([])
    setWinner(false)
    setFrames(prev => fisherYates(prev))
  }

  function handleClick (name) {
    
    if (clicked.includes(name)) {
      setCurrScore(0)
      setClicked([])
    } else {
      setCurrScore(perv => perv + 1)
      setClicked(prev => [...prev, name])

      const checkScore = currScore + 1

      if (checkScore > bestScore) {
        setBestScore(checkScore)
      }

      if (checkScore === frames.length) {
        setWinner(true)
      }

    }

    // setFrames(prev => fisherYates(prev))

  }

  return (
    <>
      <Header bestScore={bestScore} currScore={currScore} frames={frames} />
      {winner ? <Winner restart={restart}/> : <Cards onClick={handleClick} frames={frames}/>}
    </>
  )
}

export default App
