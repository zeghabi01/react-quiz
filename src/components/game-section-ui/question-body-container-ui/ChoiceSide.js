import React,{ useEffect } from 'react'
import { useData } from '../../../myContext'
import Choice from './choices-side-ui/Choice'

import {useState} from 'react'

function ChoiceSide({answer,choices}) {

    const [shuffledChoices,setShuffledChoices] = useState([])

    useEffect(() => {
       setShuffledChoices(choices.sort((a,b) => 0.5 - Math.random()))
    },[choices])

    return (
          <div id="choicesSide" className="choiceSide">
            <ul>
                {shuffledChoices.map((choice,index)=>{
                  return <Choice key={index} index={index} answer={answer} choice={choice}/>
                })}
            </ul>
          </div>
    )
}

export default ChoiceSide
