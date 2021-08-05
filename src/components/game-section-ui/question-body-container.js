import React from 'react'
import QuestionSide from './question-body-container-ui/QuestionSide'
import ChoiceSide from './question-body-container-ui/ChoiceSide'
import { useData } from '../../myContext'
function QuestionBodyContainer({quizElement}) {
    return (
       <div className="container">

            <QuestionSide question={quizElement.question} />

            <ChoiceSide answer = {quizElement.answer} choices={quizElement.choices} />
    
            <footer>
                <div className="skip">
                    <button>i do nothing</button>
                </div>
            </footer>
    
        </div>
    )
}

export default QuestionBodyContainer
