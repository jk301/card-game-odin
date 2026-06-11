// cards.jsx
import "./../styles/cards.css"

export function Cards ({onClick, frames}) {

    // i copied it, not mine.
    // make the card lean towards the pointer
    // function handleMouseMove(e) {

    //     const card = e.currentTarget;
    //     const rect = card.getBoundingClientRect();
        
    //     const centerX = rect.left + rect.width / 2;
    //     const centerY = rect.top + rect.height / 2;
        
    //     const rotateX = (e.clientY - centerY) / 15;
    //     const rotateY = (e.clientX - centerX) / 15;
        
    //     card.style.transform = `perspective(500px) rotateX(${-rotateX}deg) rotateY(${rotateY}deg)   `;
    // }

    // function handleMouseLeave(e) {
    //     e.currentTarget.style.transform = '';
    // }

    return (
        <div className="card-container">
            {frames.map((item) => (
                <div 
                    className="card" 
                    key={item.name} 
                    onClick={() => onClick(item.name) }
                    // onMouseMove={handleMouseMove}
                    // onMouseLeave={handleMouseLeave}
                >
                    <img src={item.image} alt="A warframe's portrait" />
                    <h3>{item.name}</h3>
                </div>
            ))}
        </div>
    )
}