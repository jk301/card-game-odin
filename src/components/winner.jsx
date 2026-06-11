// winner.jsx
import "./../styles/winner.css"

import thumbs from "./../assets/thumbs-up.png"
// image picked up from reddit

export function Winner ({restart}) {
    return (
        <div className="winner">
            <h1>You Win!</h1>
            <img src={thumbs} alt="excalibur giving a thumbs up" />
            <h2>GoodWork Tenno.</h2>
            <button onClick={restart}>Restart</button>
        </div>
    )
}