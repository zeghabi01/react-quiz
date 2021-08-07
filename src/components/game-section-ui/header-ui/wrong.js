import React from 'react'
import wrong from '../../../sounds/wrong.wav'
function Wrong() {

    const WRONG = new Audio(wrong)
    WRONG.play()

    return (
        <i id="wrong" style={{fontSize: '42px',color: 'red'}} className="far fa-times-circle"></i>

    )
}

export default Wrong
