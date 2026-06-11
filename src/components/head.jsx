// head.jsx
import "./../styles/head.css"

export function Header ({ bestScore, currScore, frames}) {

    return (
        <div className="head">
        <h1>Welcome to Warframe Memory Card Game.</h1>
        <p>Choose the cards that haven't been chosen to get points!</p>
        <h2>Maximum score achievable is {frames.length}</h2>

        <div className="head-score">
            <p>Best Score: {bestScore}</p>
            <p>Current Score: {currScore}</p>
        </div>
        </div>
    )
} 