import React ,{ useEffect } from 'react'
import Correct from './header-ui/correct'
import Wrong from './header-ui/wrong'
import Fail from './header-ui/fail'
import Loader from './header-ui/loader'
import Timer from './header-ui/timer'
import { useData } from '../../myContext'

function Header({questionIndex}) {
    const {
        dispatch,
        status,
        sections,
        result,
        timeIsUp
    } = useData()

    useEffect(()=>{
        if(timeIsUp) {

            dispatch({type : 'STATUS',payload:{
                ...status,
                timer : false,
                loader : true
            }})
            
            dispatch({type : 'UNCLICKABLE',payload : true })

            setTimeout(()=>{
            dispatch({type : 'STATUS',payload:{
                ...status,
                timer : false,
                fail : true
            }})
            },1000)
            setTimeout(()=>{
                dispatch({type : 'SECTIONS',payload:{
                    ...sections,
                    gameSection : false
                }})
                dispatch({type : 'RESULT',payload:{
                    ...result,
                    loss : true
                }})
            },3000)
        }

    
    },[timeIsUp])

    return (
        <nav className="navbar">

            <div className="logo"><i className="fas fa-2x fa-anchor"></i></div>
            
            <div id="assets" className="timer">
                {status.timer ? <Timer 
                        timeLimit={5}
                        radius={19}
                        strokeWidth = {4}
                        strokeColor = '#32A7F9'
                /> : null} 
                {status.loader ? <Loader /> : null}
                {status.correct ? <Correct /> : null}
                {status.wrong ? <Wrong /> : null} 
                {status.fail ? <Fail />: null}        
            </div>

            <div id="questionNumber" className="questionNumber">س. <span>{questionIndex}</span></div>

        </nav>
    )
}

export default Header
