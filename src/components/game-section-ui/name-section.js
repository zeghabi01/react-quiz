import React from 'react'

function NameSection() {
    
    return (
        <div className="nameSection">
            <div>
                <small> مرحبا </small><span id="playerName">{localStorage.getItem('playerName')}</span>
            </div>
        </div>
    )
}

export default NameSection
