import React from 'react'
import Header from './game-section-ui/header'
import QuestionBodyContainer from './game-section-ui/question-body-container'
import NameSection from './game-section-ui/name-section'
import {useData} from '../myContext'

function GameSection() {

    const {quizElement,unclickable} = useData()

    return( 
        <div style={unclickable ? {pointerEvents: 'none'} : null} id="playingGame" className="playingGame">
            <NameSection />
            <Header questionIndex = {quizElement.questionIndex}  />
            <QuestionBodyContainer quizElement = {quizElement.data} />
        </div> 
    )
}


export default GameSection
