import React from 'react'
import correct from '../../../sounds/correct.wav'

function Correct() {

    const CORRECT = new Audio(correct)
    CORRECT.volume = 0.2;
    CORRECT.play()
    
    return (
        <i id="correct" style={{fontSize: '42px',color: 'green'}} className="far fa-check-circle"></i>
    )
}

export default Correct
